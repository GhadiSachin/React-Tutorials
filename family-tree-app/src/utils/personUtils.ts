import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export const generateId = () => uuidv4();

export const getDayOfBirth = (dob: string) => {
  return dayjs(dob).format("dddd");
};
