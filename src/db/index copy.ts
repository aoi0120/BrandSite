// import { PrismaClient } from '@prisma/client';
// import app from './app';

// const PORT = process.env.PORT || 3000;

// const prisma = new PrismaClient();

// const main = async () => {
//     // const user = await prisma.user.create({
//     //     data: {
//     //         name: 'Alice',
//     //         email: 'alice@prisma.io',
//     //     },
//     // });

//     const userUpdate = await prisma.user.update({
//         where: { id: 'aece4598-578e-4141-a9dd-c1fd0bc97be3' },
//         data: { name: 'Bob' },
//     });
//     // console.log(userUpdate);

//     const allUsers = await prisma.user.findMany();
//     console.dir(allUsers, { depth: null });

// }

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// //データベース接続関数
// export const connect = async () => {
//     try {
//         await prisma.$connect();
//     }
//     catch (e) {
//         console.error(e);
//         return Error("Error connecting to database");
//     }
// }

// main()
//     .catch(e => {
//         throw e;
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });
