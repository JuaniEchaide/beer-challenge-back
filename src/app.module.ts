import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './modules/products/infrastructure/entities/product.entity';
import { ProductsModule } from './modules/products/products.module';
import { StockEntity } from './modules/stock/infrastructure/entities/stock.entity';
import { StockModule } from './modules/stock/stock.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [ProductEntity, StockEntity],
      synchronize: true,
    }),
    ProductsModule,
    StockModule,
  ],
})
export class AppModule { }
