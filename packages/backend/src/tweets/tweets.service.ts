import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TweetsService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.tweet.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(tweetWhereUniqueInput: Prisma.TweetWhereUniqueInput) {
    return this.prismaService.tweet.findUnique({
      where: tweetWhereUniqueInput,
    });
  }

  registerTweet(createTweetInput: Prisma.TweetCreateInput) {
    return this.prismaService.tweet.create({
      data: createTweetInput,
    });
  }

  addLike(id: string) {
    return this.prismaService.tweet.update({
      where: {
        id: id,
      },
      data: {
        likes: {
          increment: 1,
        },
      },
    });
  }
}
