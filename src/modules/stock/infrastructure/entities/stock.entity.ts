import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class StockEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sku: number;

    @Column()
    stock: number;

    @Column()
    price: number;
}
