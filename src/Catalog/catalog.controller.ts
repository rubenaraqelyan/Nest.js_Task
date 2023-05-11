import { Controller, Get, Param } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
    constructor(private readonly catalogService: CatalogService) {}

    @Get(':id')
    getCatalogById(@Param('id') id: number) {
        return this.catalogService.getCatalogById(id);
    }
}
