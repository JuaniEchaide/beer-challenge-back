import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StockRepository } from '../../domain/repositories/stock.repository';
import { Stock } from '../../domain/entities/stock';
import { StockEntity } from '../entities/stock.entity';

@Injectable()
export class StockRepositoryImpl extends StockRepository {
    constructor(
        @InjectRepository(StockEntity) private repo: Repository<StockEntity>,
    ) {
        super();
    }

    async findBySku(sku: number): Promise<Stock | null> {
        return this.repo.findOneBy({ sku });
    }

    async create(stock: Stock): Promise<Stock> {
        const entity = this.repo.create(stock);
        return this.repo.save(entity);
    }
}
