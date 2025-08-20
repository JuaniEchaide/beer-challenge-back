import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from '../../application/products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly service: ProductsService) { }

    @Get()
    getAll() {
        const availableProducts = this.service.findAll();
        return availableProducts;
    }

}
