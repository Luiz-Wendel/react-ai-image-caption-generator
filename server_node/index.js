import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.post("/translate", (req, res) => {
  res.send({translated_text: "Translation endpoint"});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
