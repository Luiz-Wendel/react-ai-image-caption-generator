import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.post("/translate", (req, res) => {
  console.log("Received request body:", req.body);

  res.send([{translated_text: "Translation endpoint"}]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
