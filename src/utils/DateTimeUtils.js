export const timestampToAgoFormat = (timestamp) => {
  const currentTime = Date.now(); // current time in milliseconds
  const timeDiff = currentTime - timestamp; // time difference in milliseconds

  const secondsAgo = Math.floor(timeDiff / 1000); // time difference in seconds
  const minsAgo = Math.floor(secondsAgo / 60); // time difference in minutes
  const hoursAgo = Math.floor(minsAgo / 60); // time difference in hours
  const daysAgo = Math.floor(hoursAgo / 24); // time difference in days
  if (daysAgo > 10) {
    const date = new Date(parseInt(timestamp));
    return date.toDateString();
  }
  if (daysAgo > 0) {
    return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
  } else if (hoursAgo > 0) {
    return `${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
  } else if (minsAgo > 0) {
    return `${minsAgo} min${minsAgo === 1 ? "" : "s"} ago`;
  } else {
    return "Just now";
  }
};

export const isoFormatToDate = (dateString) => {
  const date = new Date(dateString);
  return date.getDate();
};

export const isoFormatToMonth = (dateString) => {
  const date = new Date(dateString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[date.getMonth()];
};

export const isSevenDaysAgo = (timestamp) => {
  // Calculate the timestamp for 7 days ago (in milliseconds)
  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  if (Date.parse(timestamp) > sevenDaysAgo) {
    return true;
  } else {
    return false;
  }
};

export const isThirtyDaysAgo = (timestamp) => {
  // Calculate the timestamp for 7 days ago (in milliseconds)
  const sevenDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
  console.log(timestamp, sevenDaysAgo);

  if (timestamp > sevenDaysAgo) {
    console.log("timestamp");
    return true;
  } else {
    return false;
  }
};
