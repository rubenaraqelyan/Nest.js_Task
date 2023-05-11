import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { BuyProductDto } from './dto/BuyProductDto';
import {Catalog} from "../Catalog/catalog.entity";
import { Product } from '../Product/product.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Catalog)
        private readonly catalogRepository: Repository<Catalog>,
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {}

    async buyProduct(buyProductDto: BuyProductDto): Promise<any> {
        const { id, address } = buyProductDto;
        // @ts-ignore
        const user = await this.userRepository.findOne({ address });
        if (!user) {
            return { success: false, error: { errorMessage: 'User not found' } };
        }

        const catalog = await this.catalogRepository.findOne(id);
        if (!catalog) {
            return { success: false, error: { errorMessage: 'Catalog not found' } };
        }

        if (user.cash1 < catalog.cost1 || user.cash2 < catalog.cost2 || user.cash3 < catalog.cost3) {
            return { success: false, error: { errorMessage: 'Not found' } };
        }

        const { cost1, cost2, cost3 } = catalog;
        if (user.cash1 < cost1 || user.cash2 < cost2 || user.cash3 < cost3) {
            return { success: false, error: { errorMessage: 'Requirement not met' } };
        }

        user.cash1 -= cost1;
        user.cash2 -= cost2;
        user.cash3 -= cost3;

        await this.userRepository.save(user);

        const product = new Product();
        product.address = address;
        product.catalogId = id;
        await this.productRepository.save(product);

        return {
            success: true,
            data: {
                resources: {
                    cash1: user.cash1,
                    cash2: user.cash2,
                    cash3: user.cash3,
                },
            },
        };
    }
}
