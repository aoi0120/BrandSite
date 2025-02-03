import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {

    const alice = await prisma.user.findFirst({ where: { name: 'Alice' } });
    if (alice) { console.log('Alice already!'); }
    else {
        await prisma.user.create({
            data: {
                name: 'Alice',
                email: 'Alice@prisma.io',
            }
        });
    }

    const bob = await prisma.user.findFirst({ where: { name: 'Bob' } });
    if (bob) { console.log('Bob already!'); }
    else {
        await prisma.user.create({
            data: {
                name: 'Bob',
                email: 'Bob@prisma.io',
            }
        });
        console.log({ alice, bob });
    }

    const brands = await prisma.brand.findMany({
        select: {id:true}
    })

    if(brands.length === 0) {
        console.error("Error: Is not Table Data")
        return;
    }
    
    const brandIds = brands.map(brand => brand.id)

    const random = () => {
        return brandIds[Math.floor(Math.random() * brandIds.length)]
    }

    // const brandDates = [
    //     { name: "Globe trotter", url: "https://jp.globe-trotter.com/", image: "./../public/Globe-Trotter-Logo.jpg", name_hira: "グローブトロッター" },
    //     { name: "Alden", url: "https://www.aldenshop.com/", image: "./../public/Alden.webp", name_hira: "オールデン" },
    //     { name: "Gucci", url: "https://www.gucci.com/jp/ja/", image: "./../public/Gucci-Logo.jpg", name_hira: "グッチ" },
    //     { name: "Tiffany", url: "https://www.tiffany.co.jp/", image: "./../public/Tiffany-Co-logo.jpg", name_hira: "ティファニー" }
    // ];

    // for (const brandDate of brandDates) {
    //     await prisma.brand.create({
    //         data: {
    //             name: brandDate.name,
    //             photo_url: brandDate.image,
    //             name_hira: brandDate.name_hira,
    //             url: brandDate.url,
    //         }
    //     });
    // }

    const itemDates = [
        { name: "bag", photo_url: "./../public/globe-bag.webp", brand_id: random() },
        { name: "shoes", photo_url: "./../public/alden-shoes.webp", brand_id: random() },
        { name: "jewelry", photo_url: "./../public/jewelry.webp", brand_id: random() },
        { name: "earrings", photo_url: "./../public/earrings.webp", brand_id: random() },
        { name: "necklace", photo_url: "./../public/necklace.webp", brand_id: random() },
    ];

    for (let i = 0; i < 10; i++) {
        for (const itemDate of itemDates) {
            await prisma.item.create({
                data: {
                    name: itemDate.name,
                    photo_url: itemDate.photo_url,
                    brand_id: random()
                }
            });
        }
    };
}

main() // Run the main function
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });