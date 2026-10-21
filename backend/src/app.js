import authRoutes from "./routes/aut.routes.js";
import express from "express";
import morgan from "morgan";

import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

//rutas
app.use(indexRoutes);
app.use("/api/aut",authRoutes);

//ruta no encontrada
app.use((req,res)=>{
    res.status(404).json({menssage: "Not found"});
});


export default app;

