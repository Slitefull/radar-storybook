import faker from "faker";
import { Severities } from "@/ui-kit/types/severities";


type Total = { count: number, percentage: number, isPositive: boolean };
type Percentage = { count: number; isPositive: boolean };
type DataElement = {
  severity: Severities;
  count: number;
  percentage: Percentage;
}

interface MonitorChangesElements {
  name: string;
  total: Total;
  data: DataElement[];
}

export const createMonitorChangesElement = (): MonitorChangesElements => ({
  name: faker.internet.domainName(),
  total: {
    count: faker.datatype.number({ min: 1, max: 999 }),
    percentage: faker.datatype.number({ min: 1, max: 100 }),
    isPositive: faker.datatype.boolean(),
  },
  data: [
    {
      severity: Severities.Red,
      count: faker.datatype.number({ min: 10, max: 50 }),
      percentage: {
        count: faker.datatype.number({ min: 0, max: 100 }),
        isPositive: faker.datatype.boolean(),
      }
    },
    {
      severity: Severities.Critical,
      count: faker.datatype.number({ min: 10, max: 50 }),
      percentage: {
        count: faker.datatype.number({ min: 0, max: 100 }),
        isPositive: faker.datatype.boolean(),
      }
    },
    {
      severity: Severities.High,
      count: faker.datatype.number({ min: 10, max: 50 }),
      percentage: {
        count: faker.datatype.number({ min: 0, max: 100 }),
        isPositive: faker.datatype.boolean(),
      }
    },
    {
      severity: Severities.Medium,
      count: faker.datatype.number({ min: 10, max: 50 }),
      percentage: {
        count: faker.datatype.number({ min: 0, max: 100 }),
        isPositive: faker.datatype.boolean(),
      }
    }
  ],
});

export const createMonitorChangesData = (numMonitorChanges = 5) => {
  return Array.from({ length: numMonitorChanges }, createMonitorChangesElement);
};
