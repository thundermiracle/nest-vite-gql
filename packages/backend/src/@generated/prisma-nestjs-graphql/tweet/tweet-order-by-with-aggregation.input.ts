import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TweetCountOrderByAggregateInput } from './tweet-count-order-by-aggregate.input';
import { TweetAvgOrderByAggregateInput } from './tweet-avg-order-by-aggregate.input';
import { TweetMaxOrderByAggregateInput } from './tweet-max-order-by-aggregate.input';
import { TweetMinOrderByAggregateInput } from './tweet-min-order-by-aggregate.input';
import { TweetSumOrderByAggregateInput } from './tweet-sum-order-by-aggregate.input';

@InputType()
export class TweetOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => TweetCountOrderByAggregateInput, {nullable:true})
    _count?: TweetCountOrderByAggregateInput;

    @Field(() => TweetAvgOrderByAggregateInput, {nullable:true})
    _avg?: TweetAvgOrderByAggregateInput;

    @Field(() => TweetMaxOrderByAggregateInput, {nullable:true})
    _max?: TweetMaxOrderByAggregateInput;

    @Field(() => TweetMinOrderByAggregateInput, {nullable:true})
    _min?: TweetMinOrderByAggregateInput;

    @Field(() => TweetSumOrderByAggregateInput, {nullable:true})
    _sum?: TweetSumOrderByAggregateInput;
}
