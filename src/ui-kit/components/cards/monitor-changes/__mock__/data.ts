import faker from "faker";
import { DARK_GREY, MEDIUM_PURPLE, TART_ORANGE, VIOLET } from "@/ui-kit/constants/colors";


export const mockChartsInfo = [
  {
    label: "RED",
    countBullet: {
      count: faker.datatype.number({ min: 10, max: 50 }),
      color: TART_ORANGE as Color,
    },
    percentage: {
      count: faker.datatype.number({ min: 0, max: 100 }),
      isPositive: faker.datatype.boolean(),
    }
  },
  {
    label: "CRI",
    countBullet: {
      count: faker.datatype.number({ min: 10, max: 50 }),
      color: VIOLET as Color,
    },
    percentage: {
      count: faker.datatype.number({ min: 0, max: 100 }),
      isPositive: faker.datatype.boolean(),
    }
  },
  {
    label: "HIG",
    countBullet: {
      count: faker.datatype.number({ min: 10, max: 50 }),
      color: MEDIUM_PURPLE as Color,
    },
    percentage: {
      count: faker.datatype.number({ min: 0, max: 100 }),
      isPositive: faker.datatype.boolean(),
    }
  },
  {
    label: "MED",
    countBullet: {
      count: faker.datatype.number({ min: 10, max: 50 }),
      color: DARK_GREY as Color,
    },
    percentage: {
      count: faker.datatype.number({ min: 0, max: 100 }),
      isPositive: faker.datatype.boolean(),
    }
  },
]
