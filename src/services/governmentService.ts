import axios from "axios";

export const fetchGovernmentGarages = async () => {
  const response = await axios.get(
    "https://data.gov.il/api/3/action/datastore_search",
    {
      params: {
        resource_id: "bb68386a-a331-4bbc-b668-bba2766d517d",
        limit: 5,
      },
    }
  );
  return response.data.result.records;
};
