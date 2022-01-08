import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TweetAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    likes?: true;
}
