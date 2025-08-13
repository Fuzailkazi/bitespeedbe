import express from "express";
import dotenv from "dotenv";
import identifyRoutes from "./routes/identify.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
app.use(express.json());

// existing POST endpoint
app.use("/", identifyRoutes);

// new GET endpoint
app.use("/", contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
