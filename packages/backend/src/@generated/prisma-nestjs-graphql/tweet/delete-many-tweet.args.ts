import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TweetWhereInput } from './tweet-where.input';

@ArgsType()
export class DeleteManyTweetArgs {

    @Field(() => TweetWhereInput, {nullable:true})
    where?: TweetWhereInput;
}
