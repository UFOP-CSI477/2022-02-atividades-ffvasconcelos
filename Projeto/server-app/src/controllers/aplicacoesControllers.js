import { Router } from "express";

const router = new Router();

router.get("/", (req, res) => {
	res.send("Aplicacoes feitas");
});

export default router;
