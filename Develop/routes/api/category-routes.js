const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // NEED TO find all categories
  // NEED TO be sure to include its associated Products
});

router.get("/:id", (req, res) => {
  // NEED TO find one category by its `id` value
  // NEED TO be sure to include its associated Products
});

router.post("/", (req, res) => {
  // NEED TO create a new category
});

router.put("/:id", (req, res) => {
  // NEED TO update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // NEED TO delete a category by its `id` value
});

module.exports = router;
