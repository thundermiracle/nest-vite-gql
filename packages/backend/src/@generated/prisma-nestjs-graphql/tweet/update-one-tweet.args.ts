import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TweetUpdateInput } from './tweet-update.input';
import { TweetWhereUniqueInput } from './tweet-where-unique.input';

@ArgsType()
export class UpdateOneTweetArgs {

    @Field(() => TweetUpdateInput, {nullable:false})
    data!: TweetUpdateInput;

    @Field(() => TweetWhereUniqueInput, {nullable:false})
    where!: TweetWhereUniqueInput;
}
