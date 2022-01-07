
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateTweetInput {
    text: string;
}

export class Tweet {
    id: string;
    text: string;
    likes: number;
    createdAt: DateTime;
}

export abstract class IQuery {
    abstract tweets(): Nullable<Tweet>[] | Promise<Nullable<Tweet>[]>;

    abstract tweet(id: string): Nullable<Tweet> | Promise<Nullable<Tweet>>;
}

export abstract class IMutation {
    abstract createTweet(createTweetInput: CreateTweetInput): Tweet | Promise<Tweet>;
}

export type DateTime = any;
type Nullable<T> = T | null;
