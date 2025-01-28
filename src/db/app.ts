import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();

const app = express();
const port = 8080

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.get('/brands', async (req, res) => {
    const brands = await prisma.brand.findMany();
    res.json(brands);
});

app.get('/items', async (req, res) => {
    const items = await prisma.item.findMany();
    res.json(items);
});

app.post('/api/items', async (req,res) => {
    const { name, description,photo_url,tags, brand_id} = req.body;

    try {
        const newItem = await prisma.item.create({
            data: {
                name,
                description,
                photo_url,
                tags,
                brand: {
                    connect: {id: brand_id}
                }
            },
        })
        res.status(201).json(newItem);
    }catch (error) {
        console.log(error);
        res.status(500).json({error: 'Failed to create Item'});
    }
});

app.listen(port,() => {
    console.log("Server running")
})

export default app;