import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TweetWhereUniqueInput } from './tweet-where-unique.input';
import { TweetCreateInput } from './tweet-create.input';
import { TweetUpdateInput } from './tweet-update.input';

@ArgsType()
export class UpsertOneTweetArgs {

    @Field(() => TweetWhereUniqueInput, {nullable:false})
    where!: TweetWhereUniqueInput;

    @Field(() => TweetCreateInput, {nullable:false})
    create!: TweetCreateInput;

    @Field(() => TweetUpdateInput, {nullable:false})
    update!: TweetUpdateInput;
}
