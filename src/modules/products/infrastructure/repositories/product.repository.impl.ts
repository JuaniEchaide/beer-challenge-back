import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "../../domain/entities/product";
import { ProductRepository } from "../../domain/repositories/product.repository";
import { ProductEntity } from "../entities/product.entity";
import { ProductMapper } from "../mappers/product.mapper";

@Injectable()
export class ProductRepositoryImpl extends ProductRepository {
    constructor(
        @InjectRepository(ProductEntity) private repo: Repository<ProductEntity>,
    ) {
        super();
    }

    async findAll(): Promise<Product[]> {
        const entities = await this.repo.find({ relations: ['skus'] });
        return entities.map(ProductMapper.toDomain);
    }

    async findById(id: number): Promise<Product | null> {
        const entity = await this.repo.findOne({
            where: { id },
            relations: ['skus'],
        });
        return entity ? ProductMapper.toDomain(entity) : null;
    }

    async create(product: Product): Promise<Product> {
        const entity = ProductMapper.toEntity(product);
        const saved = await this.repo.save(entity);
        return ProductMapper.toDomain(saved);
    }
}
