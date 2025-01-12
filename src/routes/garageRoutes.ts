import express from "express";
import {
  getGovernmentGarages,
  getAppGarages,
  saveGarages,
  deleteGarage,
} from "../controllers/garageController";

const router = express.Router();

router.get("/government-garages", getGovernmentGarages);
router.get("/app-garages", getAppGarages);
router.post("/save-garages", saveGarages);
router.delete("/delete-garage/:id", deleteGarage);

export default router;
