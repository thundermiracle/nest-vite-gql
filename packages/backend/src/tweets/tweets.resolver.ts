import { Resolver, Query, Args } from '@nestjs/graphql';
import { TweetsService } from './tweets.service';

@Resolver('Tweet')
export class TweetsResolver {
  constructor(private readonly tweetsService: TweetsService) {}

  @Query('tweets')
  findAll() {
    return this.tweetsService.findAll();
  }

  @Query('tweet')
  findOne(@Args('id') id: string) {
    return this.tweetsService.findOne({ id });
  }
}
