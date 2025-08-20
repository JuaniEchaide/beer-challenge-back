import { ProductEntity } from 'src/modules/products/infrastructure/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class SkuEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @ManyToOne(() => ProductEntity, (product) => product.skus, { onDelete: 'CASCADE' })
    product: ProductEntity;
}
