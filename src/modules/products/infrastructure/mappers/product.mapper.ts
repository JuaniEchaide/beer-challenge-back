// product.mapper.ts
import { SkuEntity } from 'src/modules/shared/infrastructure/entities/sku.entity';
import { Product } from '../../domain/entities/product';
import { ProductEntity } from '../entities/product.entity';
import { Sku } from 'src/modules/shared/domain/entities/Sku';


export class ProductMapper {
    static toDomain(entity: ProductEntity): Product {
        return {
            id: entity.id,
            brand: entity.brand,
            image: entity.image,
            style: entity.style,
            substyle: entity.substyle,
            abv: entity.abv,
            origin: entity.origin,
            information: entity.information,
            skus: entity.skus.map(
                (sku: SkuEntity): Sku => ({
                    code: sku.code,
                    name: sku.name,
                }),
            ),
        };
    }

    static toEntity(domain: Product): ProductEntity {
        const entity = new ProductEntity();
        entity.id = domain.id;
        entity.brand = domain.brand;
        entity.image = domain.image;
        entity.style = domain.style;
        entity.substyle = domain.substyle;
        entity.abv = domain.abv;
        entity.origin = domain.origin;
        entity.information = domain.information;
        entity.skus = domain.skus.map((sku: Sku) => {
            const skuEntity = new SkuEntity();
            skuEntity.code = sku.code;
            skuEntity.name = sku.name;
            return skuEntity;
        });
        return entity;
    }
}
