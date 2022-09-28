export const getDaysCountFromDates = (firstDate: Date, secondDate: Date): number => {
  const difference = firstDate.getTime() - secondDate.getTime();
  return Math.abs(Math.ceil(difference / (1000 * 3600 * 24)));
}
