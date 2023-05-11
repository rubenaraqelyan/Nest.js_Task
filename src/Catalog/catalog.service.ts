import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catalog } from './catalog.entity';

@Injectable()
export class CatalogService {
    constructor(
        @InjectRepository(Catalog)
        private readonly catalogRepository: Repository<Catalog>,
    ) {}

    async getCatalogById(id): Promise<Catalog> {
        return this.catalogRepository.findOne(id);
    }
}
