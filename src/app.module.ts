import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { StockModule } from './modules/stock/stock.module';


@Module({
  imports: [
    ProductsModule,
    StockModule,
  ],
})
export class AppModule { }

//TODO revisar seed