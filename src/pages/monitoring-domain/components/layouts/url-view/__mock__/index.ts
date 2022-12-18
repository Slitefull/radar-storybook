import faker from "faker";

interface TableData {
  id: string | number;
  url: string;
  httpStatus: number;
  changes: number;
  pageSize: number;
  wordCount: number;
}

const createDomain = (): TableData => ({
  id: faker.datatype.uuid(),
  url: faker.internet.url(),
  httpStatus: faker.helpers.randomize([100, 200, 300, 301, 400, 403, 404, 500]),
  changes: faker.datatype.number({ min: 1, max: 9 }),
  pageSize: faker.datatype.float({ max: 10 }),
  wordCount: faker.datatype.float({ max: 10 }),
});

export const createData = (numDomains = 5) => {
  return Array.from({ length: numDomains }, createDomain);
}