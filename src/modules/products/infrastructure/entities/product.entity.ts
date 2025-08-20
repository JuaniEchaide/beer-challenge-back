// infrastructure/entities/product.entity.ts
import { SkuEntity } from 'src/modules/shared/infrastructure/entities/sku.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brand: string;

    @Column()
    image: string;

    @Column()
    style: string;

    @Column()
    substyle: string;

    @Column()
    abv: string;

    @Column()
    origin: string;

    @Column({ type: 'text' })
    information: string;

    @OneToMany(() => SkuEntity, (sku) => sku.product, { cascade: true, eager: true })
    skus: SkuEntity[];
}
