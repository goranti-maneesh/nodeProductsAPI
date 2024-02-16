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
        image: "https://res.cloudinary.com/difbmfdoo/image/upload/v1708066869/My_project_11_1_dz1lph.png",
        title: "Latest Edition"
    },
    {
        id: "2",
        image: "https://res.cloudinary.com/difbmfdoo/image/upload/v1708067152/1_rcjox1.png",
        title: "Shirts"
    },
    {
        id: "3",
        image: "https://res.cloudinary.com/difbmfdoo/image/upload/v1708067398/2_xtvdrd.png",
        title: "Hoodies"
    }
];

app.get("/api/products", (req, res) => {
  res.json(productsData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
