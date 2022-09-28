interface Range {
  from: Date;
  to: Date;
}

export const getLastDaysDate = (daysCount: number): Range => {
  const now = new Date();

  return {
    from: new Date(now.getFullYear(), now.getMonth(), now.getDate() - daysCount),
    to: new Date(),
  };
}
