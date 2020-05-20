// Import dateTime module from net
import {
  dayOfYear,
  currentDayOfYear,
} from "https://deno.land/std/datetime/mod.ts";

console.log(dayOfYear(new Date("2020-02-02")));
console.log(currentDayOfYear());
