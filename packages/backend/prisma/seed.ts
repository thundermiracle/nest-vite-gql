import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.tweet.deleteMany();
  await prisma.tweet.create({
    data: {
      id: 'cky1j74bc000007mf4gr8btdo',
      text: 'Hello, world!',
      likes: 1,
      createdAt: new Date(),
    },
  });
}

main().catch(console.error);
