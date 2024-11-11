import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'alice@prisma.io',
    //     },
    // });

    const userUpdate = await prisma.user.update({
        where: { id: 'aece4598-578e-4141-a9dd-c1fd0bc97be3' },
        data: { name: 'Bob' },
    });
    // console.log(userUpdate);

    const allUsers = await prisma.user.findMany();
    console.dir(allUsers, { depth: null });

}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
