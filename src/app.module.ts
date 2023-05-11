require('dotenv').config();
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { CatalogModule } from './Catalog/catalog.module';
import { UserModule } from './User/user.module';
import { AssetModule } from './Asset/asset.module';
import { ProductModule } from './Product/product.module';

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: DB_HOST,
        port: 3306,
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        entities: [],
        synchronize: true,
        migrations: [__dirname + '/migrations/*.js'],
      })
    }),
    CatalogModule,
    UserModule,
    AssetModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
