export const getItemsInPage = (data, itemsPerPage, pageNumber) => {
  const startIndex = itemsPerPage * pageNumber;
  const endIndex = startIndex + itemsPerPage;
  const list = data.slice(startIndex, endIndex);
  return list;
};
export const getMaximumNumberOfPages = (listSize, itemsPerPage) => {
  if (listSize % itemsPerPage === 0) {
    return listSize / itemsPerPage;
  } else {
    return listSize / itemsPerPage + 1;
  }
};
