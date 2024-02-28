const newDate = new Date();
console.log("toDateString", newDate.toDateString());
console.log("toLocaleDateString", newDate.toLocaleDateString());
console.log("toLocaleString", newDate.toLocaleString());
console.log("toLocaleTimeString", newDate.toLocaleTimeString());
console.log("toJSON", newDate.toJSON());
console.log(typeof newDate);

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZoneName: "long",
  })
);
