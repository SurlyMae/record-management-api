import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get("/records", async (req, res) => {
  const records = await prisma.employee.findMany();
  res.json(records);
});

app.get("/records/:id", async (req, res) => {
  const { id } = req.params;

  const record = await prisma.employee.findUnique({
    where: { id: Number(id) },
  });

  res.json(record);
});

app.post("/records", async (req, res) => {
  const { email, firstName, lastName } = req.body;
  const result = await prisma.employee.create({
    data: { email, firstName, lastName },
  });
  res.json(result);
});

app.put("/records/:id", async (req, res) => {
  const { id } = req.params;
  const { email, firstName, lastName } = req.body;
  try {
    const result = await prisma.employee.update({
      where: { id: Number(id) },
      data: { email, firstName, lastName },
    });
    res.json(result);
  } catch (error) {
    res.json({ error: `record with ID ${id} does not exist in the database` });
  }
});

app.delete("/records/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await prisma.employee.delete({ where: { id: Number(id) } });
    res.json(result);
  } catch (error) {
    res.json({ error: `record with ID ${id} does not exist in the database` });
  }
});

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000`)
);
