import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';
import { Catalog } from './catalog.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Catalog])],
    controllers: [CatalogController],
    providers: [CatalogService],
    exports: [CatalogService],
})
export class CatalogModule {}
