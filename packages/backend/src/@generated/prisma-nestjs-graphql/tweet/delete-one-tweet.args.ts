import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TweetWhereUniqueInput } from './tweet-where-unique.input';

@ArgsType()
export class DeleteOneTweetArgs {

    @Field(() => TweetWhereUniqueInput, {nullable:false})
    where!: TweetWhereUniqueInput;
}
