import { getGovernmentGarages, saveGarages } from "../../src/controllers/garageController";
import { fetchGovernmentGarages } from "../../src/services/governmentService";
import { saveGaragesToDB } from "../../src/services/databaseService";
import { Request, Response } from "express";import * as governmentService from "../../src/services/governmentService";
import * as databaseService from "../../src/services/databaseService";

jest.mock("../../src/services/governmentService");
jest.mock("../../src/services/databaseService");

const mockFetchGovernmentGarages = jest.spyOn(governmentService, "fetchGovernmentGarages");
const mockSaveGaragesToDB = jest.spyOn(databaseService, "saveGaragesToDB");

const garage = { id: "1", name: "Garage A" };

describe("garageController tests", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks();

    // הגדרות Mocks בתוך beforeEach
    mockFetchGovernmentGarages.mockResolvedValue([garage]);
    mockSaveGaragesToDB.mockResolvedValue([garage]);
  });

  test("getGovernmentGarages should return government garages", async () => {
    await getGovernmentGarages(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([garage]);
    expect(mockFetchGovernmentGarages).toHaveBeenCalledTimes(1);
  });

  test("saveGarages should save garages", async () => {
    req.body = { garages: [garage] };

    await saveGarages(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith([garage]);
    expect(mockSaveGaragesToDB).toHaveBeenCalledTimes(1);
    expect(mockSaveGaragesToDB).toHaveBeenCalledWith([garage]);
  });
});

