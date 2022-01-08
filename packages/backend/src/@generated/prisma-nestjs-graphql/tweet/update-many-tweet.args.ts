import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TweetUpdateManyMutationInput } from './tweet-update-many-mutation.input';
import { TweetWhereInput } from './tweet-where.input';

@ArgsType()
export class UpdateManyTweetArgs {

    @Field(() => TweetUpdateManyMutationInput, {nullable:false})
    data!: TweetUpdateManyMutationInput;

    @Field(() => TweetWhereInput, {nullable:true})
    where?: TweetWhereInput;
}
