import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DelegateModule } from './modules/delegate.module';
import { MintModule } from './modules/mint.module';
import { PaymentOrderModule } from './modules/payment.order.module';
import { ResultModule } from './modules/result.module';
import { VoteModule } from './modules/vote.module';

@Module({
  imports: [
    DelegateModule,
    MintModule,
    VoteModule,
    ResultModule,
    PaymentOrderModule,
    RouterModule.register([
      {
        path: 'delegate',
        module: DelegateModule
      },
      {
        path: 'mint',
        module: MintModule
      },
      {
        path: 'vote',
        module: VoteModule
      },
      {
        path: 'result',
        module: ResultModule
      },
      {
        path: 'payment-order',
        module: PaymentOrderModule
      },
    ]),
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}