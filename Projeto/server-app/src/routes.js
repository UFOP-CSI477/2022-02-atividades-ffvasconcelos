import { Router } from "express"
import vacinas from "./controllers/vacinasControllers.js"
import unidades from "./controllers/unidadesControllers.js"
import pacientes from "./controllers/pacientesControllers.js"
import usuarios from "./controllers/usuariosControllers.js"
import aplicacoes from "./controllers/aplicacoesControllers.js"

const router = new Router()

router.use("/vacina", vacinas)
router.use("/unidade", unidades)
router.use("/paciente", pacientes)
router.use("/usuario", usuarios)
router.use("/aplicacao", aplicacoes);

export default router
