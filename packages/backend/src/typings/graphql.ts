
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Tweet {
    id: string;
    text: string;
    createdAt: string;
}

export abstract class IQuery {
    abstract tweets(): Nullable<Tweet>[] | Promise<Nullable<Tweet>[]>;

    abstract tweet(id: string): Nullable<Tweet> | Promise<Nullable<Tweet>>;
}

type Nullable<T> = T | null;
