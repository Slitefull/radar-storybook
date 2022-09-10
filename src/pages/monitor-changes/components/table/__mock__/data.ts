type Severities = "Critical" | "High" | "Medium";
type Statuses = "Resolved" | "Unresolved";

interface Data {
  id: string | number;
  url: string;
  severity: Severities;
  changes: string;
  status: Statuses;
  group_by_date: string;
}

export const mockData: Data[] = [
  {
    id: "1",
    url: "amazon.com/r/audit/template.html",
    severity: "Critical",
    changes: "404",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "2",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "3",
    url: "amazon.com/r/audit/template.html",
    severity: "Medium",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "4",
    url: "amazon.com/r/audit/template.html",
    severity: "Critical",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "5",
    url: "amazon.com/r/audit/template.html",
    severity: "Medium",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "6",
    url: "amazon.com/r/audit/template.html",
    severity: "Medium",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "7",
    url: "amazon.com/r/audit/template.html",
    severity: "Critical",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "8",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "9",
    url: "amazon.com/r/audit/template.html",
    severity: "Critical",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "10",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "11",
    url: "amazon.com/r/audit/template.html",
    severity: "Critical",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "12",
    url: "amazon.com/r/audit/template.html",
    severity: "Critical",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "13",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "14",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "15",
    url: "amazon.com/r/audit/template.html",
    severity: "Critical",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "16",
    url: "amazon.com/r/audit/template.html",
    severity: "Medium",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "17",
    url: "amazon.com/r/audit/template.html",
    severity: "Critical",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "18",
    url: "amazon.com/r/audit/template.html",
    severity: "Medium",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "19",
    url: "amazon.com/r/audit/template.html",
    severity: "Medium",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "20",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "21",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "22",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "23",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "24",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },  {
    id: "25",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "26",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "27",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "28",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "29",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "30",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "31",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "32",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "33",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "34",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "35",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "36",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "37",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "38",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "39",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "40",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "41",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "42",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "43",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "44",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "45",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "46",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "47",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "48",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "49",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "50",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "51",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "52",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "53",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "54",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },  {
    id: "55",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "56",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "57",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "58",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },  {
    id: "59",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "60",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "61",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "62",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "63",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "64",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "65",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "66",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "67",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "68",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },  {
    id: "69",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "70",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "71",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "72",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },  {
    id: "73",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
  {
    id: "74",
    url: "amazon.com/r/audit/template.html",
    severity: "High",
    changes: "Meta description tag changed",
    status: "Unresolved",
    group_by_date: 'Group by date'
  },
]
