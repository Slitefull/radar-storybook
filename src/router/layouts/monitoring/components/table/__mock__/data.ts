import { Severities } from "@/ui-kit/types/severities";
import { Statuses } from "@/ui-kit/types/statuses";
import faker from "faker";


interface Data {
  id: string | number;
  url: string;
  severity: Severities;
  changes: number;
  status: Statuses;
}

const createDataElement = (): Data => ({
  id: faker.datatype.uuid(),
  url: faker.internet.url(),
  severity: faker.helpers.randomize([Severities.Critical, Severities.High, Severities.Medium, Severities.Low]),
  changes: faker.datatype.number({ min: 0, max: 999 }),
  status: faker.helpers.randomize([Statuses.Resolved, Statuses.Unresolved]),
});

export const createData = (numElements = 100) => {
  return Array.from({ length: numElements }, createDataElement);
}