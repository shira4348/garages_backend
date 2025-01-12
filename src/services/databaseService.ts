import Garage from "../models/Garage";

export const fetchAppGarages = async () => {
  const garages = await Garage.find();
  return garages;
};

export const saveGaragesToDB = async (garages: any[]) => {
  const savedGarages = await Garage.insertMany(garages);
  return savedGarages;
};

export const deleteGarageById = async (id: string) => {
  const result = await Garage.findByIdAndDelete(id);
  return result;
};
