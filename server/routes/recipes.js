import express from "express";
import {
  getRecipes,
  getRecipe,
  getRecipeMatches,
  searchRecipes,
} from "../controllers/recipeController.js";

const router = express.Router();

router.get("/", getRecipes);
router.get("/search", searchRecipes);
router.get("/matches", getRecipeMatches);
router.get("/:id", getRecipe);

export default router;
