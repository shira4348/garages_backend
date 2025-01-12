const garage = { id: "1", name: "Garage A" };

import axios from "axios";
jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

jest.mock("../src/models/Garage", () => ({
  find: jest.fn().mockResolvedValue([garage]),
  insertMany: jest.fn().mockResolvedValue([garage]),
  findByIdAndDelete: jest.fn().mockResolvedValue(garage),
}));

export { garage, mockAxios };
