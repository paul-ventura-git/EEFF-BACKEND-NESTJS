/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PhotoModule } from './photo/photo.module';
import { ProductModule } from './product/product.module';
import { EnvModule } from './env/env.module';
import { PcgeModule } from './pcge2020/pcge.module';

@Module({
  imports: [AuthModule, UserModule, PhotoModule, ProductModule, EnvModule, PcgeModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
