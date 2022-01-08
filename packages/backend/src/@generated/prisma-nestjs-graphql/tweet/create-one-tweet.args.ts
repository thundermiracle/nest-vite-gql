import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TweetCreateInput } from './tweet-create.input';

@ArgsType()
export class CreateOneTweetArgs {

    @Field(() => TweetCreateInput, {nullable:false})
    data!: TweetCreateInput;
}
