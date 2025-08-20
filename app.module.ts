import { Module } from '@nestjs/common';
import { ProductsService } from 'src/modules/products/application/products.service';
import { ProductRepository } from 'src/modules/products/domain/repositories/product.repository';
import { ProductRepositoryImpl } from 'src/modules/products/infrastructure/repositories/product.repository.impl';
import { ProductsModule } from 'src/modules/products/products.module';


@Module({
  imports: [
    ProductsModule,
    ProductsModule,
  ],
  providers: [
    ProductsService,
    {
      provide: ProductRepository,
      useClass: ProductRepositoryImpl,
    },
  ],
})
export class AppModule { }
