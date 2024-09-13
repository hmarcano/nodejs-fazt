import { Router } from "express";
const router = Router();

router.get("/", (req, res) =>
  res.render("index", { title: "First Website with Node" })
); // o se le puede colocar la extension. ejs

router.get("/about", (req, res) =>
  res.render("about", { titulo: "About", x: "otra info" })
);

router.get("/contact", (req, res) =>
  res.render("contact", { title: "Contact" })
);

export default router;
