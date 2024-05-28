export interface EmployeeDetails {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  employmentType: string;
  contractLength: string;
  currentEmployee: boolean;
  startDate: [number, number, number];
  endDate: [number, number, number];
  fullTime: boolean;
  salary: number;
  weeklyHours: number;
}
