import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    const alice = await prisma.user.upsert({
        where: { id: '101418a6-9738-40cb-8749-2439d516f31e' },
        update: {},
        create: {
            name: "Alice",
            email: "Alice@prisma.io",
        },
    })

    const bob = await prisma.user.upsert({
        where: { id: 'aece4598-578e-4141-a9dd-c1fd0bc97be3' },
        update: {},
        create: {
            name: "Bob",
            email: "Bob@prisma.io",
        },
    })
    console.log({ alice, bob });

};

main() // Run the main function
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });