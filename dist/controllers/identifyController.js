import { identifyContact } from "../services/identifyService.js";
export async function identifyController(req, res) {
    try {
        const { email, phoneNumber } = req.body;
        const result = await identifyContact(email, phoneNumber);
        res.json(result);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
//# sourceMappingURL=identifyController.js.map