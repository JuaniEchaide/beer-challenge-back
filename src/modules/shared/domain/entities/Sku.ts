import { Product } from "src/modules/products/domain/entities/product";
import { Stock } from "src/modules/stock/domain/entities/stock";
import { Entity, Column, PrimaryColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity("skus")
export class Sku {
    @PrimaryColumn({ type: "varchar", length: 20 })
    code: string;

    @Column({ type: "varchar", length: 255 })
    name: string;

    // 🔗 Many SKUs → One Product
    @ManyToOne(() => Product, (product) => product.skus, {
        onDelete: "CASCADE",
    })
    product?: Product;

    // 🔗 One SKU → One Stock
    @OneToOne(() => Stock, (stock) => stock.sku, {
        cascade: true,
    })
    @JoinColumn({ name: "code", referencedColumnName: "skuCode" })
    stock?: Stock;
}
