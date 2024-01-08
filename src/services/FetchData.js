import { axiosNonSecureInstance } from "../utils/axios";

// fetch function
export const FetchData = async (url, setStateFunc) => {
  try {
    const response = await axiosNonSecureInstance.get(url);
    if (response.status === 200) {
      if (response.data.allFeatureRequest) {
        setStateFunc(response.data);
      } else if (response.data.task) {
        setStateFunc(response.data.task);
      }
    }
  } catch (error) {
    // handle error
    console.log(error);
  }
};
