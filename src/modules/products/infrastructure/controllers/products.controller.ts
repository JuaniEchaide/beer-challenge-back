import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from '../../application/products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly service: ProductsService) { }

    @Get()
    getAll() {
        return this.service.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.service.findById(Number(id));
    }
}
