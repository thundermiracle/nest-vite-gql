import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';

@InputType()
export class TweetCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(1)
    text!: string;

    @Field(() => Int, {nullable:true})
    likes?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
