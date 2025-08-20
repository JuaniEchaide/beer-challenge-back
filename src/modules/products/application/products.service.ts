import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../domain/repositories/product.repository';

@Injectable()
export class ProductsService {
    constructor(private readonly repo: ProductRepository) { }

    async findAll() {
        const products = await this.repo.findAll();

        if (!products || products.length === 0) {
            throw new NotFoundException('No se encontraron productos disponibles');
        }

        return products;
    }
}
