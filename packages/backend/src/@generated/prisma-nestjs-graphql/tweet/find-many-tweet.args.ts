import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TweetWhereInput } from './tweet-where.input';
import { TweetOrderByWithRelationInput } from './tweet-order-by-with-relation.input';
import { TweetWhereUniqueInput } from './tweet-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TweetScalarFieldEnum } from './tweet-scalar-field.enum';

@ArgsType()
export class FindManyTweetArgs {

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

    @Field(() => [TweetScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TweetScalarFieldEnum>;
}
