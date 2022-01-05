import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TweetsService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.tweet.findMany();
  }

  findOne(tweetWhereUniqueInput: Prisma.TweetWhereUniqueInput) {
    return this.prismaService.tweet.findUnique({
      where: tweetWhereUniqueInput,
    });
  }
}
