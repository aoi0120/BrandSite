import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


const main = async () => {
    const alice = await prisma.user.findFirst({ where: { name: 'Alice' } })
    if (!alice) {
        prisma.user.create({
            data: {
                name: 'Alice',
                email: 'Alice@prisma.io',
            }
        })
    }

    const bob = await prisma.user.findFirst({ where: { name: 'Bob' } })
    if (!bob) {
        prisma.user.create({
            data: {
                name: 'Bob',
                email: 'Bob@prisma.io',
            }
        })
        console.log({ alice, bob });
    };
}

main() // Run the main function
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });