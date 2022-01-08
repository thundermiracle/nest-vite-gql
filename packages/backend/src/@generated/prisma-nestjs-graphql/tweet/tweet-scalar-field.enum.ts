import { registerEnumType } from '@nestjs/graphql';

export enum TweetScalarFieldEnum {
    id = "id",
    text = "text",
    likes = "likes",
    createdAt = "createdAt"
}


registerEnumType(TweetScalarFieldEnum, { name: 'TweetScalarFieldEnum', description: undefined })
