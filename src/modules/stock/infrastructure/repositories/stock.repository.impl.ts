import { Injectable } from '@nestjs/common';
import { StockRepository } from '../../domain/repositories/stock.repository';
import { Stock } from '../../domain/entities/stock';
import { stockPrice } from 'src/modules/shared/mocks/stock-price';
@Injectable()
export class StockRepositoryImpl extends StockRepository {
    constructor() {
        super();
    }

    async findBySku(sku: number): Promise<Stock> {
        return stockPrice[sku];
    }
}
