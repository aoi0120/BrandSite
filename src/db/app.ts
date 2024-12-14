import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();

const app = express();

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

export default app;