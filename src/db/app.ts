import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();

const app = express();
const port = 8080

app.use(cors());
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});

app.get('/users', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.get('/brands', async (req: Request, res: Response) => {
    const brands = await prisma.brand.findMany();
    res.json(brands);
});

app.get('/items', async (req: Request, res: Response) => {
    const items = await prisma.item.findMany();
    res.json(items);
});

app.get('/tags', async (req: Request, res: Response) => {
    const tags = await prisma.tag.findMany();
    res.json(tags)
})

app.post('/api/items', async (req: Request, res: Response) => {
    const { name, description, photo_url, tags, brand_id } = req.body;

    try {
        const newItem = await prisma.item.create({
            data: {
                name,
                description,
                photo_url,
                brand: {
                    connect: { id: brand_id }
                },
                tags: {
                    create: (tags as number[]).map((tagId: number) => ({
                        tag: { connect: { id: tagId } }
                    }))
                }
            },
            include: {
                tags: true
            }
        })
        res.status(201).json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create Item' });
    }
});

app.post('/api/tags', async (req: Request, res: Response) => {
    try {
        const newTag = await prisma.tag.createMany({
            data: req.body.map((tag: { name: string }) => ({
                name: tag.name
            })),
            skipDuplicates: true,
        })
        res.status(201).json({ message: 'Tags created', count: newTag.count })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to create tag' });
    }
})

app.listen(port, () => {
    console.log("Server running")
})

export default app;