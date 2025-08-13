import type { Request, Response } from "express";
import { prisma } from "../prisma/client.js";

export async function getAllContactsController(req: Request, res: Response) {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "asc" }
    });
    res.json({ contacts });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
