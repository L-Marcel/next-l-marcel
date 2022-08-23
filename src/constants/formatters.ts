import { Formatter } from "../services/Github";

export const formatters: Formatter[] = [
  {
    regex: "-",
    replace: " "
  },
  {
    regex: "_",
    replace: " "
  },
  {
    regex: "ignite",
    replace: "ignite ->"
  },
  {
    regex: "reactjs",
    replace: "/"
  },
  {
    regex: "nodejs",
    replace: "/"
  }
];