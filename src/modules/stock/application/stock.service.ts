import { Injectable, NotFoundException } from '@nestjs/common';
import { StockRepository } from '../domain/repositories/stock.repository';

@Injectable()
export class StockService {
    constructor(private readonly repo: StockRepository) { }

    async getBySku(sku: number) {
        const stock = await this.repo.findBySku(sku);

        if (!stock) {
            throw new NotFoundException(`No se encontró stock para el sku ${sku}`);
        }

        return stock;
    }

}
