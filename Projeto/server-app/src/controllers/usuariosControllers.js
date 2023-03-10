import { Router } from "express";

const router = new Router();

router.get("/", (req, res) => {
	res.send("Usuarios registrados");
});

export default router;
