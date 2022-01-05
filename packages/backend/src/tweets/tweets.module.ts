import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsResolver } from './tweets.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [TweetsResolver, TweetsService, PrismaService],
})
export class TweetsModule {}
