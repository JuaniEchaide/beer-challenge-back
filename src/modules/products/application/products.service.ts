import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../domain/repositories/product.repository';
import { Product } from '../domain/entities/product';

@Injectable()
export class ProductsService {
    constructor(private readonly repo: ProductRepository) { }

    async findAll() {
        return this.repo.findAll();
    }

    async findById(id: number) {
        const product = await this.repo.findById(id);
        if (!product) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        return product;
    }

    async create(product: Product) {
        return this.repo.create(product);
    }
}
