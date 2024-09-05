enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let currentDay: DaysOfWeek = DaysOfWeek.Wednesday;

function isWeekend(day: DaysOfWeek): boolean {
  return day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday;
}

if (isWeekend(currentDay)) {
  console.log("It's the weekend!");
} else {
  console.log("It's a weekday.");
}

// /////////////////////////////////////////////////////////////////////

enum Months {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12,
}

// /////////////////////////////////////////////////////////////////////

enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
