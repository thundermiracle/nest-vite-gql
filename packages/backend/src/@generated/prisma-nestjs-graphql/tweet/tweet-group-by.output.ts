import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TweetCountAggregate } from './tweet-count-aggregate.output';
import { TweetAvgAggregate } from './tweet-avg-aggregate.output';
import { TweetSumAggregate } from './tweet-sum-aggregate.output';
import { TweetMinAggregate } from './tweet-min-aggregate.output';
import { TweetMaxAggregate } from './tweet-max-aggregate.output';

@ObjectType()
export class TweetGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => TweetCountAggregate, {nullable:true})
    _count?: TweetCountAggregate;

    @Field(() => TweetAvgAggregate, {nullable:true})
    _avg?: TweetAvgAggregate;

    @Field(() => TweetSumAggregate, {nullable:true})
    _sum?: TweetSumAggregate;

    @Field(() => TweetMinAggregate, {nullable:true})
    _min?: TweetMinAggregate;

    @Field(() => TweetMaxAggregate, {nullable:true})
    _max?: TweetMaxAggregate;
}
