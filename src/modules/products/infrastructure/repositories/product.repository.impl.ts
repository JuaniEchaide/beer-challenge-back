import { Injectable } from "@nestjs/common";
import { Product } from "../../domain/entities/product";
import { ProductRepository } from "../../domain/repositories/product.repository";
import products from "../../../shared/mocks/products"

@Injectable()
export class ProductRepositoryImpl extends ProductRepository {
    constructor() {
        super();
    }

    async findAll(): Promise<Product[]> {
        return products
    }
}