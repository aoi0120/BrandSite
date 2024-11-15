import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


const main = async () => {
    const alice = await prisma.user.findFirst({ where: { name: 'Alice' } })
    if (alice) { console.log('Alice already!') }
    else {
        await prisma.user.create({
            data: {
                name: 'Alice',
                email: 'Alice@prisma.io',
            }
        })
    }

    const bob = await prisma.user.findFirst({ where: { name: 'Bob' } })
    if (bob) { console.log('Bob already!') }
    else {
        await prisma.user.create({
            data: {
                name: 'Bob',
                email: 'Bob@prisma.io',
            }
        })
        console.log({ alice, bob });
    };

    const brandDates = [
        { name: "Globe trotter",    url:"https://jp.globe-trotter.com/",    image: "./../public/globe.webp",                      name_hira: "グローブトロッター" },
        { name: "Alden",            url:"https://www.aldenshop.com/",       image: "./../public/169115453.webp",                  name_hira: "オールデン" },
        { name: "Gucci",            url:"https://www.gucci.com/jp/ja/",     image: "./../public/2222.webp",                       name_hira: "グッチ" },
        { name: "Tiffany",          url:"https://www.tiffany.co.jp/",       image: "./../public/1837-24601439_1063515_ED.webp",   name_hira: "ティファニー" }
    ]

    for (const brandDate of brandDates) {
        const item = await prisma.brand.findFirst({ where: { name: brandDate.name } })
        if (item) { console.log(`${brandDate.name} already!`) }
        else {
            await prisma.brand.create({
                data: {
                    name: brandDate.name,
                    photo_url: brandDate.image,
                    name_hira: brandDate.name_hira,
                    url: brandDate.url
                }
            })
        }
}
}

main() // Run the main function
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });