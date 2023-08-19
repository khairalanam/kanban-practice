import { useEffect } from "react";

const useStorage = (groupingOption, orderingOption) => {
  useEffect(() => {
    localStorage.setItem("groupingOption", groupingOption);
    localStorage.setItem("orderingOption", orderingOption);
  }, [groupingOption, orderingOption]);
};

export default useStorage;
