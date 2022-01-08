import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TweetSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    likes?: true;
}
