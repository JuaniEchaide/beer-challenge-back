import { Controller, Get, Query } from '@nestjs/common';
import { StockService } from '../../application/stock.service';

@Controller('stock-price')
export class StockController {
    constructor(private readonly service: StockService) { }

    @Get()
    getBySku(@Query('sku') sku: string) {
        return this.service.getBySku(Number(sku));
    }
}
