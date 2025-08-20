import { Product } from '../entities/product';

export abstract class ProductRepository {
    abstract findAll(): Promise<Product[]>;
    abstract findById(id: number): Promise<Product | null>;
    abstract create(product: Product): Promise<Product>;
}
