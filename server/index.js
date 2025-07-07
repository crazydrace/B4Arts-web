// index.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import contactRoute from "./routes/contact.js";

const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());
app.use("/api", contactRoute);

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
