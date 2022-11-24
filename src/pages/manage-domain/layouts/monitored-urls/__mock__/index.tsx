import faker from "faker";

interface TableData {
  urls: string;
  http_status: number;
  changes: number;
  response_time: number;
  page_load: number;
  page_size: number;
}

const createDomain = (): TableData => ({
  urls: faker.internet.url(),
  http_status: faker.datatype.number({ min: 200, max: 500 }),
  changes: faker.datatype.number({ min: 1, max: 50 }),
  response_time: faker.datatype.number({ min: 0, max: 0.99 }),
  page_load: faker.datatype.number({ min: 1, max: 2.99 }),
  page_size: faker.datatype.number({ min: 1, max: 2.99 }),
});

export const createData = (numUsers = 5) => {
  return Array.from({ length: numUsers }, createDomain);
}