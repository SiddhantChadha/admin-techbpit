export const getYearOfStudy = (year) => {
  switch (year) {
    case 1:
      return "1st year";
    case 2:
      return "2nd year";
    case 3:
      return "3rd year";
    case 4:
      return "4th year";
  }
};
export const postFilters = [
  { value: "Resource", checked: false, type: "resourcePost" },
  { value: "Event", checked: false, type: "eventPost" },
  { value: "Community", checked: false, type: "communityPost" },
];
export const timeFilters = [
  { value: "1 week ago", checked: false, type: 7 },
  { value: "1 month ago", checked: false, type: 30 },
];
export const setupPages = (activePage, setActivePage, maxPage) => {
  let startPage;
  if (activePage % 7 === 0) {
    startPage = activePage;
  } else {
    startPage = activePage - (activePage % 7);
  }
  var items = [];
  for (let index = startPage; index < startPage + 7; index++) {
    if (index === activePage) {
      items.push(
        <span
          aria-current="page"
          className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {index + 1}
        </span>
      );
    } else if (index > maxPage - 1) {
      items.push(
        <span
          aria-current="page"
          className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 bg-gray-100 focus:z-20 focus:outline-offset-0 md:inline-flex"
          onClick={() => setActivePage(index)}
        >
          {index + 1}
        </span>
      );
    } else {
      items.push(
        <span
          aria-current="page"
          className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
          onClick={() => setActivePage(index)}
        >
          {index + 1}
        </span>
      );
    }
  }
  return items;
};
