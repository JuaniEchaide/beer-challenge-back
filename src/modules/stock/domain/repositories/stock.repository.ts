import { Stock } from '../entities/stock';

export abstract class StockRepository {
    abstract findBySku(sku: number): Promise<Stock | null>;
}
