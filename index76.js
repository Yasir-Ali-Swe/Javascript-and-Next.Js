// Create a new Date object for the current date and time
let currentDate = new Date();

// 1. `Date.now()` - Returns the current timestamp (milliseconds since January 1, 1970)
console.log("Current timestamp:", Date.now());

// 2. `getDate()` - Returns the day of the month (1-31) of the Date object.
console.log("Day of the month:", currentDate.getDate());

// 3. `getDay()` - Returns the day of the week (0-6, where 0 is Sunday and 6 is Saturday).
console.log("Day of the week:", currentDate.getDay());

// 4. `getFullYear()` - Returns the full year (e.g., 2025).
console.log("Full year:", currentDate.getFullYear());

// 5. `getMonth()` - Returns the month (0-11, where 0 is January and 11 is December).
console.log("Month (0-11):", currentDate.getMonth());

// 6. `getHours()` - Returns the hour (0-23) of the Date object.
console.log("Hour (0-23):", currentDate.getHours());

// 7. `getMinutes()` - Returns the minutes (0-59) of the Date object.
console.log("Minutes (0-59):", currentDate.getMinutes());

// 8. `getSeconds()` - Returns the seconds (0-59) of the Date object.
console.log("Seconds (0-59):", currentDate.getSeconds());

// 9. `getMilliseconds()` - Returns the milliseconds (0-999) of the Date object.
console.log("Milliseconds (0-999):", currentDate.getMilliseconds());

// 10. `getTime()` - Returns the timestamp (milliseconds since January 1, 1970).
console.log("Timestamp of the current date:", currentDate.getTime());

// 11. `setDate()` - Sets the day of the month (1-31).
currentDate.setDate(15);
console.log("Updated date after setting day to 15:", currentDate);

// 12. `setMonth()` - Sets the month (0-11) of the Date object.
currentDate.setMonth(5);  // Setting the month to June (5)
console.log("Updated month (June):", currentDate);

// 13. `setFullYear()` - Sets the year (e.g., 2025) of the Date object.
currentDate.setFullYear(2023);
console.log("Updated year (2023):", currentDate);

// 14. `setHours()` - Sets the hour (0-23) of the Date object.
currentDate.setHours(14);
console.log("Updated hour (14:00):", currentDate);

// 15. `setMinutes()` - Sets the minutes (0-59) of the Date object.
currentDate.setMinutes(45);
console.log("Updated minutes (14:45):", currentDate);

// 16. `setSeconds()` - Sets the seconds (0-59) of the Date object.
currentDate.setSeconds(30);
console.log("Updated time (14:45:30):", currentDate);

// 17. `toDateString()` - Returns the date portion of a Date object as a string (e.g., 'Mon Mar 15 2025').
console.log("Date as a string:", currentDate.toDateString());

// 18. `toTimeString()` - Returns the time portion of a Date object as a string (e.g., '14:45:30 GMT+0000').
console.log("Time as a string:", currentDate.toTimeString());

// 19. `toISOString()` - Returns the Date object as an ISO string (e.g., '2023-06-15T14:45:30.000Z').
console.log("Date as an ISO string:", currentDate.toISOString());

// 20. `toLocaleDateString()` - Returns the date portion in a format based on the user's locale.
console.log("Localized date:", currentDate.toLocaleDateString());

// 21. `toLocaleTimeString()` - Returns the time portion in a format based on the user's locale.
console.log("Localized time:", currentDate.toLocaleTimeString());

// 22. `toUTCString()` - Returns the Date object as a string in UTC (e.g., 'Thu, 15 Jun 2023 14:45:30 GMT').
console.log("Date in UTC format:", currentDate.toUTCString());

// 23. `toString()` - Returns the Date object as a string in the local time zone (e.g., 'Thu Jun 15 2023 14:45:30 GMT+0000').
console.log("Date as a string:", currentDate.toString());

// 24. `getTimezoneOffset()` - Returns the time difference between UTC and the local time zone in minutes.
console.log("Timezone offset (in minutes):", currentDate.getTimezoneOffset());

// 25. `setTime()` - Sets the Date object based on the timestamp.
let newTimestamp = Date.now() + 1000000000;  // Adding a timestamp in the future
currentDate.setTime(newTimestamp);
console.log("Updated date after setting timestamp:", currentDate);
