import { useEffect } from "react";

const useFetch = (
  api,
  setTickets,
  setUsers,
  setGroupingOption,
  setOrderingOption
) => {
  useEffect(() => {
    // fetch data
    const fetchData = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    };
    fetchData();

    // get items from local storage
    const savedGroupingOption = localStorage.getItem("groupingOption");
    const savedOrderingOption = localStorage.getItem("orderingOption");

    if (savedGroupingOption) setGroupingOption(savedGroupingOption);
    if (savedOrderingOption) setOrderingOption(savedOrderingOption);
  }, [api, setTickets, setUsers, setGroupingOption, setOrderingOption]);
};

export default useFetch;
