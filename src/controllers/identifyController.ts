import type { Request, Response } from "express";
import { identifyContact } from "../services/identifyService.js";

export async function identifyController(req: Request, res: Response) {
  try {
    const { email, phoneNumber } = req.body;
    const result = await identifyContact(email, phoneNumber);
    res.json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
