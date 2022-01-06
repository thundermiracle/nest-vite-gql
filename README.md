# nest-vite-gql

## Install

`pnpm` is recommended by not required. Without pnpm, you need to `cd` into `packages/frontend` & `packages/backend` and run command separately.
### with pnpm

```shell
# install dependencies
npm i -g pnpm
pnpm i

# init prisma & db
pnpm setup:bk

# run dev
pnpm dev
```

### without pnpm

```shell
# install dependencies
cd packages/frontend && yarn
cd ../backend && yarn

# init prisma & db (in backend folder)
yarn init

# run dev
# terminal 1
cd packages/frontend && yarn dev

# terminal 2
cd packages/backend && yarn dev
```

## Usage

### Access Frontend

http://localhost:3000

### Access GraphQL by Apollo Sandbox

http://localhost:4000/graphql
