import faker from "faker";

interface TableData {
  id: string | number;
  domains: string;
  display_name: string;
  groups: string;
  urls: number;
  weekly_crawls: number;
  credits_used: number;
  isSearchConsole: boolean;
}

const createDomain = (): TableData => ({
  id: faker.datatype.uuid(),
  domains: faker.internet.url(),
  display_name: faker.internet.domainName(),
  groups: faker.internet.userName(),
  urls: faker.datatype.number(99),
  weekly_crawls: faker.datatype.number(99),
  credits_used: faker.datatype.number(99),
  isSearchConsole: faker.datatype.boolean(),
});

export const createData = (numUsers = 5) => {
  return Array.from({ length: numUsers }, createDomain);
}