import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TweetSumAggregate {

    @Field(() => Int, {nullable:true})
    likes?: number;
}
