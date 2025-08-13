import { prisma } from "../prisma/client.js";
export async function getAllContactsController(req, res) {
    try {
        const contacts = await prisma.contact.findMany({
            orderBy: { createdAt: "asc" }
        });
        res.json({ contacts });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
//# sourceMappingURL=contactController.js.map