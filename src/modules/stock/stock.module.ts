import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockEntity } from './infrastructure/entities/stock.entity';
import { StockService } from './application/stock.service';
import { StockController } from './infrastructure/controllers/stock.controller';
import { StockRepository } from './domain/repositories/stock.repository';
import { StockRepositoryImpl } from './infrastructure/repositories/stock.repository.impl';

@Module({
    imports: [TypeOrmModule.forFeature([StockEntity])],
    controllers: [StockController],
    providers: [
        StockService,
        {
            provide: StockRepository,
            useClass: StockRepositoryImpl,
        },
    ],
})
export class StockModule { }
