import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
    TweetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
