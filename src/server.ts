import express from "express";
import router from "routes/alm.js";
const app = express();
app.use(express.json());

const PORT: number = 3000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));