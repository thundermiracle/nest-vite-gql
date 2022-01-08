import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TweetWhereInput } from './tweet-where.input';
import { TweetOrderByWithRelationInput } from './tweet-order-by-with-relation.input';
import { TweetWhereUniqueInput } from './tweet-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TweetCountAggregateInput } from './tweet-count-aggregate.input';
import { TweetAvgAggregateInput } from './tweet-avg-aggregate.input';
import { TweetSumAggregateInput } from './tweet-sum-aggregate.input';
import { TweetMinAggregateInput } from './tweet-min-aggregate.input';
import { TweetMaxAggregateInput } from './tweet-max-aggregate.input';

@ArgsType()
export class TweetAggregateArgs {

    @Field(() => TweetWhereInput, {nullable:true})
    where?: TweetWhereInput;

    @Field(() => [TweetOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TweetOrderByWithRelationInput>;

    @Field(() => TweetWhereUniqueInput, {nullable:true})
    cursor?: TweetWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TweetCountAggregateInput, {nullable:true})
    _count?: TweetCountAggregateInput;

    @Field(() => TweetAvgAggregateInput, {nullable:true})
    _avg?: TweetAvgAggregateInput;

    @Field(() => TweetSumAggregateInput, {nullable:true})
    _sum?: TweetSumAggregateInput;

    @Field(() => TweetMinAggregateInput, {nullable:true})
    _min?: TweetMinAggregateInput;

    @Field(() => TweetMaxAggregateInput, {nullable:true})
    _max?: TweetMaxAggregateInput;
}
