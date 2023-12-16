const express = require("express");
const app = express();
const port = 3000;

// Mock data
const productsData = {
  data: [
    {
      product_image:
        "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/um-training-001-1.jpg",
      product_title: "Jack Jones",
      product_badge: "New",
      product_variants: [{ v1: "Blue/S" }, { v2: "Blue/M" }, { v3: "Blue/L" }],
    },
    {
      product_image:
        "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/limited-edition-003-4.jpg",
      product_title: "Adidas",
      product_badge: "New",
      product_variants: [
        { v1: "Green/S" },
        { v2: "Green/M" },
        { v3: "Green/L" },
      ],
    },
    {
      product_image:
        "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/beach-bum-01.jpg",
      product_title: "Puma",
      product_badge: "NEW",
      product_variants: [
        { v1: "Orange/S" },
        { v2: "Orange/M" },
        { v3: "Orange/L" },
      ],
    },
    {
      product_image:
        "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/limited-edition-003-4.jpg",
      product_title: "Puma",
      product_badge: "",
      product_variants: [{ v1: "RED/XS" }, { v2: "RED/M" }, { v3: "RED/XL" }],
    },
    {
      product_image:
        "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/um-training-001-1.jpg",
      product_title: "Nike",
      product_badge: "NEW",
      product_variants: [
        { v1: "Orange/XS" },
        { v2: "Orange/M" },
        { v3: "Orange/XL" },
      ],
    },
    {
      product_image:
        "https://cdn.shopify.com/s/files/1/0769/2615/7113/files/beach-bum-01.jpg",
      product_title: "Teamspirit",
      product_badge: "NEW",
      product_variants: [{ v1: "Red/XS" }, { v2: "Red/M" }, { v3: "Red/XL" }],
    },
  ],
};

app.get("/api/products", (req, res) => {
  res.json(productsData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
