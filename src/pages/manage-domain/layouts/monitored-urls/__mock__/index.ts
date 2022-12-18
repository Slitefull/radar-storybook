import faker from "faker";

interface TableData {
  urls: string;
  httpStatus: number;
  changes: number;
  responseTime: number;
  pageLoad: number;
  pageSize: number;
}

const createDomain = (): TableData => ({
  urls: faker.internet.url(),
  httpStatus: faker.datatype.number({ min: 200, max: 500 }),
  changes: faker.datatype.number({ min: 1, max: 50 }),
  responseTime: faker.datatype.number({ min: 0, max: 0.99 }),
  pageLoad: faker.datatype.number({ min: 1, max: 2.99 }),
  pageSize: faker.datatype.number({ min: 1, max: 2.99 }),
});

export const createData = (numUsers = 5) => {
  return Array.from({ length: numUsers }, createDomain);
}