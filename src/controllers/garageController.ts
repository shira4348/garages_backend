import { Request, Response } from "express";
import { fetchGovernmentGarages } from "../services/governmentService";
import {
  fetchAppGarages,
  saveGaragesToDB,
  deleteGarageById,
} from "../services/databaseService";
import {garageValidationSchema} from "../validations/garageValidation"

export const getGovernmentGarages = async (req: Request, res: Response) => {
  try {
    const garages = await fetchGovernmentGarages();
    res.status(200).json(garages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch government garages." });
  }
};

export const getAppGarages = async (req: Request, res: Response) => {
  try {
    const garages = await fetchAppGarages();
    res.status(200).json(garages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch garages from the database." });
  }
};

export const saveGarages = async (req: Request, res: Response): Promise<any>  => {
  try {
    const { garages } = req.body;
    console.log("garages ", garages);

    const { error } = garageValidationSchema.validate(garages);
   
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const savedGarages = await saveGaragesToDB(garages);
    res.status(201).json(savedGarages);
  } catch (err) {
    res.status(500).json({
      error: "Failed to save garages.",
      details: err,
    });
  }
};

export const deleteGarage = async (req: Request, res: Response) => {
  console.log("Received DELETE request:", req.params.id);

  try {
    const { id } = req.params;
    const result = await deleteGarageById(id);

    if (result) {
      res.status(200).json({
        message: `Garage with ID ${id} deleted successfully.`,
        garage: result,
      });
    } else {
      res.status(404).json({ error: `Garage with ID ${id} not found.` });
    }
  } catch (err) {
    res.status(500).json({
      error: "Failed to delete garage.",
      details: err,
    });
  }
};
