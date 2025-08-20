import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { StockService } from '../../application/stock.service';

@Controller('stock-price')
export class StockController {
    constructor(private readonly service: StockService) { }

    @Get()
    getBySku(@Query('sku') sku: string) {
        const parsedSku = Number(sku);

        if (!sku) {
            throw new BadRequestException('El parámetro sku es obligatorio');
        }

        if (isNaN(parsedSku) || parsedSku <= 0) {
            throw new BadRequestException('El parámetro sku debe ser un número positivo');
        }

        return this.service.getBySku(parsedSku);
    }

}
