import { Module } from '@nestjs/common';

import { ProductsService } from './application/products.service';
import { ProductRepository } from './domain/repositories/product.repository';
import { ProductRepositoryImpl } from './infrastructure/repositories/product.repository.impl';
import { ProductsController } from './infrastructure/controllers/products.controller';

@Module({
    controllers: [ProductsController],
    providers: [
        ProductsService,
        {
            provide: ProductRepository,
            useClass: ProductRepositoryImpl,
        },
    ],
    exports: [ProductsService],
})
export class ProductsModule { }
