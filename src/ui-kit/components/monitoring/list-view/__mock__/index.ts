import faker from "faker";
import { Severities } from "@/ui-kit/types/severities";


type Percentage = {
  count: number;
  isPositive: boolean;
}

type Info = {
  name: string;
  count: number;
  percentage: Percentage;
}

type ColumnInfo = {
  count: number;
  severity: Severities;
  percentage: Percentage;
}

type Element = {
  text: string;
  count: number;
  isCritical: boolean;
}

type Column = {
  info: ColumnInfo;
  data: Element[];
}

const createTopInfo = (): Info => ({
  name: faker.lorem.words(2),
  count: faker.datatype.number({ min: 10, max: 400 }),
  percentage: {
    count: faker.datatype.number({ min: 1, max: 99 }),
    isPositive: faker.datatype.boolean(),
  },
});

export const createMockTopInfo = (tagsCount: number = 4): Info[] => {
  return Array.from({ length: tagsCount }, createTopInfo);
};

const createDataElement = (): Element => ({
  text: faker.lorem.lines(1),
  count: faker.datatype.number({ min: 1, max: 99 }),
  isCritical: faker.datatype.boolean(),
});

export const createDataElements = (tagsCount: number = 10): Element[] => {
  return Array.from({ length: tagsCount }, createDataElement);
};

const createColumn = (): Column => ({
  info: {
    severity: faker.helpers.randomize([Severities.Critical, Severities.Medium, Severities.High]),
    count: faker.datatype.number({ min: 10, max: 99 }),
    percentage: {
      count: faker.datatype.number({ min: 1, max: 99 }),
      isPositive: faker.datatype.boolean(),
    }
  },
  data: createDataElements(),
});

export const createMockColumn = (tagsCount: number = 3): Column[] => {
  return Array.from({ length: tagsCount }, createColumn);
};
