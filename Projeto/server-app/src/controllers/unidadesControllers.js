import { Router } from "express";

const router = new Router();

router.get("/", (req, res) => {
	res.send("Unidades registradas");
});

export default router;
