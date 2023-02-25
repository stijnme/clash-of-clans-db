// Current date
const curr_date = new Date();

console.log("current date: ", curr_date);

// Google counts the days since December 30th 1899
const google_date = new Date("1899-12-30");

console.log("google date: ", google_date);

// Diff
//console.log("diff: ", curr_date.toLocaleTimeString
//
const daysSinceEpoch =
  (curr_date.getTime() - new Date("1899-12-30").getTime()) /
  (24 * 60 * 60 * 1000); // = number of miliseconds in a day

console.log("diff: ", daysSinceEpoch);
