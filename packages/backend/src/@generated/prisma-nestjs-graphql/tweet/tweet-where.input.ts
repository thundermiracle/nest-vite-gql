import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TweetWhereInput {

    @Field(() => [TweetWhereInput], {nullable:true})
    AND?: Array<TweetWhereInput>;

    @Field(() => [TweetWhereInput], {nullable:true})
    OR?: Array<TweetWhereInput>;

    @Field(() => [TweetWhereInput], {nullable:true})
    NOT?: Array<TweetWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    likes?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
