import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsController } from './infrastructure/controllers/products.controller';
import { ProductsService } from './application/products.service';
import { ProductRepository } from './domain/repositories/product.repository';
import { ProductRepositoryImpl } from './infrastructure/repositories/product.repository.impl';

@Module({
    imports: [],
    controllers: [ProductsController],
    providers: [
        ProductsService,
    ],
    exports: [ProductsService],
})
export class ProductsModule { }
