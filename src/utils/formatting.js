const formatString = (string) => {
  const formattedString = string.toLowerCase();
  const stringArray = formattedString.split(" ");
  const formattedArray = stringArray.map((word) => {
    const letters = word.split("");
    const firstLetter = letters[0];
    letters[0] = firstLetter.toUpperCase();
    return letters.join("");
  });
  return formattedArray.join(" ");
};

const formatTime = (time) => {
  const tooMuchTime = time.split(":");
  return `${tooMuchTime[0]}:${tooMuchTime[1]}`;
};

const formatScheduleTime = (time, timezone) => {
  const tooMuchTime = time.split(":");
  return `${tooMuchTime[0]}:${tooMuchTime[1]} ${timezone}`;
};

const formatScheduleDate = (day) => {
  const dayArray = day.split("-");
  const crazyDay = dayArray[2].split("");
  const formattedDay = crazyDay.slice(0, 2);
  return `${dayArray[1]}/${formattedDay.join("")}/${dayArray[0]}`;
};

const fullTime = (time) => {
  const timestamp = new Date(time);
  return timestamp.toUTCString();
};

const formatDateForHTML = (day) => {
    const date = new Date(day);
    const month = date.getMonth() + 1
    return `${date.getFullYear()}-${month > 9 ? month : `0${month}`}-${date.getDate()}`
  };

module.exports = {
  formatString,
  formatScheduleTime,
  formatTime,
  formatScheduleDate,
  fullTime,
  formatDateForHTML
};
