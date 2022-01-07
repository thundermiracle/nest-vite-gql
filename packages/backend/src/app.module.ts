import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLDateTime } from 'graphql-iso-date';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      // @see https://docs.nestjs.com/graphql/quick-start#apollo-sandbox
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
      resolvers: { DateTime: GraphQLDateTime },
    }),
    TweetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
