function getFormatters(): Formatter[] {
  return [
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
    },
    {
      regex: "react-native",
      replace: "/ native /"
    }
  ];
};

export { getFormatters };