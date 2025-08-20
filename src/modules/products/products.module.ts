import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './infrastructure/entities/product.entity';
import { ProductsController } from './infrastructure/controllers/products.controller';
import { ProductsService } from './application/products.service';
import { ProductRepository } from './domain/repositories/product.repository';
import { ProductRepositoryImpl } from './infrastructure/repositories/product.repository.impl';

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity])],
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
