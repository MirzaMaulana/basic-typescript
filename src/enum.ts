/**
 * enum di typescript
 * Enum adalah fitur dalam bahasa pemrograman
 * TypeScript yang memungkinkan Anda mendefinisikan kumpulan nilai yang bernama secara eksplisit.
 */
enum DayOfWeek {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}
const today: DayOfWeek = DayOfWeek.FRIDAY;
console.log(today);
