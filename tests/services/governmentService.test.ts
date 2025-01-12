

import axios from "axios";
import { fetchGovernmentGarages } from "../../src/services/governmentService";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;



describe("governmentService tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fetchGovernmentGarages should fetch garages from government API", async () => {
    const mockData = { data: { result: { records: [{ id: "1", name: "Gov Garage" }] } } };
    mockAxios.get.mockResolvedValue(mockData);

    const result = await fetchGovernmentGarages();

    expect(result).toEqual([{ id: "1", name: "Gov Garage" }]);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://data.gov.il/api/3/action/datastore_search",
      {
        params: {
          resource_id: "bb68386a-a331-4bbc-b668-bba2766d517d",
          limit: 5,
        },
      }
    );
  });
});
