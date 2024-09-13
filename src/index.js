import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname, "/views");
console.log(join(__dirname, "/views"));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(indexRoutes);

app.use(express.static(join(__dirname, "public")));

//app.get("/", (req, res) => res.send("Hello Mundo"));
//Ahora las rutas de las diferentes pag de la app se han movido a la carpeta routes

app.listen(process.env.PORT || 3000);
console.log("Server is running on port, ", process.env.PORT || 3000);
