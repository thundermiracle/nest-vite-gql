import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateTweetInput } from 'src/typings/graphql';
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

  @Mutation('createTweet')
  createOne(@Args('createTweetInput') createTweetInput: CreateTweetInput) {
    return this.tweetsService.registerTweet(createTweetInput);
  }
}
