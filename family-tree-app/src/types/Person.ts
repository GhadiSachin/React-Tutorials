export type Gender = "Male" | "Female" | "Other";

export interface Person {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: Gender;
  dateOfBirth?: string;
  birthTime?: string;
  photo?: string;

  isAlive: boolean;
  isMaster: boolean;

  parents: string[];
  spouses: string[];
  children: string[];
}
