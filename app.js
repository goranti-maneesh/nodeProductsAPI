const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Change * to your allowed origin(s)
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Mock data
const productsData = [
    {
        id: "1",
        image: "https://asset.cloudinary.com/difbmfdoo/9313129bf84748e98d3bff61fa1cb057",
        title: "Latest Edition"
    },
    {
        id: "2",
        image: "https://asset.cloudinary.com/difbmfdoo/9d745c3339861796c2ac65f6a26ebdcc",
        title: "Shirts"
    },
    {
        id: "3",
        image: "https://asset.cloudinary.com/difbmfdoo/9d745c3339861796c2ac65f6a26ebdcc",
        title: "Hoodies"
    }
];

app.get("/api/products", (req, res) => {
  res.json(productsData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
