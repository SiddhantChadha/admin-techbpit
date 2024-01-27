import { isSevenDaysAgo, isThirtyDaysAgo } from "../utils/DateTimeUtils";

export const filterData = (data, query, filter, timeFilter) => {
  let filterData = getSearchedData(data, query);
  console.log("search", filterData.length);
  filterData = getPostFilteredData(filterData, filter);
  filterData = getTimeFilteredData(filterData, timeFilter);
  console.log("filtereddata,", filterData);
  return filterData;
};

const getSearchedData = (data, query) => {
  const filteredData = data.filter((o) => {
    return o.groupId.groupName.toLowerCase().includes(query);
  });
  return filteredData;
};

const getPostFilteredData = (data, filter) => {
  const filteredData = data.filter((itemData) =>
    filter.some((f) => f.checked && f.type === itemData.postType)
  );
  if (filter.every((f) => !f.checked)) return data;
  return filteredData;
};

const getTimeFilteredData = (data, filter) => {
  var filteredData = data;
  filter.map((f) => {
    if (f.checked && f.type === 7) {
      filteredData = data.filter((itemData) => {
        isSevenDaysAgo(itemData.timestamp);
      });
    }
    if (f.checked && f.type === 30) {
      filteredData = data.filter((itemData) => {
        isThirtyDaysAgo(itemData.timestamp);
      });
      console.log("valid");
    }
  });
  if (filter.every((f) => !f.checked)) return data;
  return filteredData;
};
