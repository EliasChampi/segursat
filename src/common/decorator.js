import moment from "./moment";

export const yourdate = (date, addFormat = "") => {
  return moment(date).format("dddd DD [de] MMMM " + addFormat);
};
