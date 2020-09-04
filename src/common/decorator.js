import moment from "./moment";

export const yourdate = (date, addFormat = "hh:mm a") => {
  return moment(date).format("DD/MM/YYYY " + addFormat);
};
