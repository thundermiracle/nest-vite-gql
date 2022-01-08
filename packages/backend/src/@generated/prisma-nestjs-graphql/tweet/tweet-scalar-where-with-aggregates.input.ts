import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TweetScalarWhereWithAggregatesInput {

    @Field(() => [TweetScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TweetScalarWhereWithAggregatesInput>;

    @Field(() => [TweetScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TweetScalarWhereWithAggregatesInput>;

    @Field(() => [TweetScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TweetScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    likes?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
