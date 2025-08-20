import { Sku } from "src/modules/shared/domain/entities/Sku";

export class Product {
    id: number;
    brand: string;
    image: string;
    style: string;
    substyle: string;
    abv: string;
    origin: string;
    information: string;
    skus: Sku[];
}
