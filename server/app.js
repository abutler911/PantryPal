import express from "express";
import cors from "cors";
import itemsRouter from "./routes/items.js";
import recipesRouter from "./routes/recipes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/items", itemsRouter);
app.use("/api/recipes", recipesRouter);

app.get("/", (_, res) => res.send("PantryPal API is running! Version 0.1"));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
