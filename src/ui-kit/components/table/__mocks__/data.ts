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
]
