import { getGovernmentGarages, saveGarages } from "../../src/controllers/garageController";
import { fetchGovernmentGarages } from "../../src/services/governmentService";
import { saveGaragesToDB } from "../../src/services/databaseService";
import { Request, Response } from "express";
import * as governmentService from "../../src/services/governmentService";
import * as databaseService from "../../src/services/databaseService";

jest.mock("../../src/services/governmentService");
jest.mock("../../src/services/databaseService");

const mockFetchGovernmentGarages = jest.spyOn(governmentService, "fetchGovernmentGarages");
const mockSaveGaragesToDB = jest.spyOn(databaseService, "saveGaragesToDB");

const garage = { "_id":2,
  "mispar_mosah": 16,
  "shem_mosah": "נירים מוסך הקבוץ",
  "cod_sug_mosah": 6,
  "sug_mosah": "מוסך מורשה",
  "ktovet": "ד.נ. הנגב",
  "yishuv": "נירים",
  "telephone": "054-7916219",
  "mikud": 85125,
  "cod_miktzoa": 10,
  "miktzoa": "מכונאות רכב בנזין",
  "menahel_miktzoa": "אליהו ציון",
  "rasham_havarot": 570005926,
  "TESTIME": ""
};

describe("garageController tests", () => {
  let req: Partial<Request>;
  let res: { status: jest.Mock; json: jest.Mock };

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks();

    mockFetchGovernmentGarages.mockResolvedValue([garage]);
    mockSaveGaragesToDB.mockResolvedValue([garage]);
  });

  test("getGovernmentGarages should return government garages", async () => {
    await getGovernmentGarages(req as Request, res as unknown as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([garage]);
    expect(mockFetchGovernmentGarages).toHaveBeenCalledTimes(1);
  });

  test("saveGarages should save garages", async () => {
    req.body = { garages: [garage] }; // כולל את `_id`

    await saveGarages(req as Request, res as unknown as Response);

    console.log("Response status:", res.status.mock.calls);
    console.log("Response JSON:", res.json.mock.calls);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith([garage]);
    expect(mockSaveGaragesToDB).toHaveBeenCalledTimes(1);
    expect(mockSaveGaragesToDB).toHaveBeenCalledWith([garage]);
  });
});
