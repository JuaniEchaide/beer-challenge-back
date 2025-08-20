import { Injectable, NotFoundException } from '@nestjs/common';
import { StockRepository } from '../domain/repositories/stock.repository';
import { Stock } from '../domain/entities/stock';

@Injectable()
export class StockService {
    constructor(private readonly repo: StockRepository) { }

    async getBySku(sku: number) {
        const stock = await this.repo.findBySku(sku);
        if (!stock) {
            throw new NotFoundException(`Stock for SKU ${sku} not found`);
        }
        return stock;
    }

    async create(stock: Stock) {
        return this.repo.create(stock);
    }
}
