// @see https://docs.nestjs.com/graphql/quick-start#schema-first
import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./**/*.graphql'],
  path: join(process.cwd(), 'src/typings/graphql.ts'),
  outputAs: 'class',
  watch: true,
});
