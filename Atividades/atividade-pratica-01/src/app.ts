import express from "express";
import cors from "cors";
import logger from "morgan";
import { router } from "./routes/index";
import cidades from "./routes/cidades";
import distribuicoes from "./routes/distribuicoes";
import doacoes from "./routes/doacoes";
import estados from "./routes/estados";
import locais_coleta from "./routes/locais_coleta"
import pessoas from "./routes/pessoas"
import produtos from "./routes/produtos"
import tipos_sanguineos from "./routes/tipos_sanguineos"
import unidades from './routes/unidades'

export const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/cidades", cidades);
app.use("/distribuicoes", distribuicoes);
app.use("/doacoes", doacoes);
app.use("/estados", estados);
app.use("/locaisColeta", locais_coleta)
app.use("/pessoas", pessoas)
app.use("/produtos", produtos);
app.use("/tiposSanguineos", tipos_sanguineos)
app.use("/unidades", unidades)
app.use("/", router);
