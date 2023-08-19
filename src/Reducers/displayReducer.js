export const ActionTypes = {
  SET_GROUPING_OPTION: "SET_GROUPING_OPTION",
  SET_SORT_OPTION: "SET_SORT_OPTION",
};

export const initialState = {
  groupingOption: "status",
  sortOption: "title",
};

export const displayReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_GROUPING_OPTION:
      return { ...state, groupingOption: action.payload };
    case ActionTypes.SET_SORT_OPTION:
      return { ...state, sortOption: action.payload };
    default:
      return state;
  }
};
