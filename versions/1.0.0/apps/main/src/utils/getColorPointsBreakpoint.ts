function getColorPointsBreakpoint(p: number = 0) {
  if(p <= 15) {
    return "red";
  } else if(p > 15 && p < 45) {
    return "green";
  } else {
    return "primary";
  } 
};

export { getColorPointsBreakpoint };