
const garage = { id: "1", name: "Garage A" };

jest.mock("../../src/models/Garage", () => ({
  find: jest.fn().mockResolvedValue([garage]),
  insertMany: jest.fn().mockResolvedValue([garage]),
  findByIdAndDelete: jest.fn().mockResolvedValue(garage),
}));


import { fetchAppGarages, saveGaragesToDB, deleteGarageById } from "../../src/services/databaseService";
import Garage from "../../src/models/Garage";

describe("databaseService", () => {
  test("fetchAppGarages should fetch all garages", async () => {
    const result = await fetchAppGarages();
    expect(result).toEqual([garage]);
    expect(Garage.find).toHaveBeenCalledTimes(1);
  });

  test("saveGaragesToDB should save garages", async () => {
    const garages = [garage];
    const result = await saveGaragesToDB(garages);
    expect(result).toEqual(garages);
    expect(Garage.insertMany).toHaveBeenCalledWith(garages);
  });

  test("deleteGarageById should delete a garage by ID", async () => {
    const result = await deleteGarageById("1");
    expect(result).toEqual(garage);
    expect(Garage.findByIdAndDelete).toHaveBeenCalledWith("1");
  });

  test("deleteGarageById should throw an error if the garage is not found", async () => {
    const mockError = new Error("Garage not found");
    jest.spyOn(Garage, "findByIdAndDelete").mockRejectedValue(mockError);
  
    await expect(deleteGarageById("5")).rejects.toThrow("Garage not found");
  });
});
