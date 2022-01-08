import { Resolver, Query, Args, Mutation, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { TweetCreateInput } from 'src/@generated/prisma-nestjs-graphql/tweet/tweet-create.input';
import { TweetsService } from './tweets.service';

const pubSub = new PubSub();

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
  createOne(@Args('createTweetInput') createTweetInput: TweetCreateInput) {
    return this.tweetsService.registerTweet(createTweetInput);
  }

  @Mutation('addLike')
  async addLike(@Args('id') id: string) {
    const response = await this.tweetsService.addLike(id);

    const targetTweet = await this.tweetsService.findOne({ id });
    const likes = targetTweet.likes;
    pubSub.publish('tweetLiked', { tweetLiked: { id, likes } });

    return response;
  }

  @Subscription('tweetLiked', {
    filter(this: TweetsResolver, payload, variables) {
      return payload.tweetLiked.id === variables.tweetId;
    },
  })
  tweetLiked() {
    return pubSub.asyncIterator('tweetLiked');
  }
}
