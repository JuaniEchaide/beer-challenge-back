export class Product {
    id: number;
    brand: string;
    image: string;
    style: string;
    substyle: string;
    abv: string;
    origin: string;
    information: string;
    skus: Sku[]
}

export class Sku {
    code: string;
    name: string
}