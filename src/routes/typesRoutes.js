import express from "express";
import TypesController from "../controllers/typesController.js";

const router = express.Router();

router
    .get("/types", TypesController.listTypes)
    .get("/types/:id", TypesController.listTypeById)
    .post("/types", TypesController.createType)
    .put("/types/:id", TypesController.updateType)
    .delete("/types/:id", TypesController.deleteType)

export default router;