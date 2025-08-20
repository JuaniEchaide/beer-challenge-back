import { Product } from '../entities/product';

export abstract class ProductRepository {
    abstract findAll(): Promise<Product[]>;
}
