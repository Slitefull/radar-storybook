enum Bullets {
  LAST_WEEK = "Last week",
  LAST_MONTH = "Last month",
  LAST_60_DAYS = "Last 60 days",
  LAST_90_DAYS = "Last 90 days",
  CUSTOM_RANGE = "Custom range",
}

export const getDaysCount = (bullet: Bullets): number => {
  switch (bullet) {
    case Bullets.LAST_WEEK: {
      return 7;
    }
    case Bullets.LAST_MONTH: {
      return 30;
    }
    case Bullets.LAST_60_DAYS: {
      return 60;
    }
    case Bullets.LAST_90_DAYS: {
      return 90;
    }
    default:
      return 1
  }
}
