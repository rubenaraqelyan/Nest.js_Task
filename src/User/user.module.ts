import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { Catalog } from '../Catalog/catalog.entity';
import { Product } from '../Product/product.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Catalog, Product])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
