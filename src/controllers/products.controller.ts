import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return {
      message: `product ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
