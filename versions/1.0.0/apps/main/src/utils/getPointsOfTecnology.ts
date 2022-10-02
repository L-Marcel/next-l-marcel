function getPointsOfTecnology(tecnology: Technology): number {
  let points = 0;

  points += tecnology.isStudying? 4:0;
  points += tecnology.haveExperience? 3:0;
  points += tecnology.haveProjects? 5:0;
  points += tecnology.haveInterest? 3:0;
  points += tecnology.ableToLead? 5:0;
  points += tecnology.useWithFrequency? 5:0;

  points -= tecnology.haveInterest && !tecnology.isStudying? 2:0;
  points -= tecnology.haveProjects && !tecnology.haveExperience? 2:0;
  points -= tecnology.ableToLead && !tecnology.haveProjects? 2:0;
  points -= tecnology.useWithFrequency && !tecnology.haveInterest? 2:0;

  points += tecnology.haveInterest && tecnology.isStudying? 2:0;
  points += tecnology.haveProjects && tecnology.haveExperience? 2:0;

  points = points * getPointsMultplier(tecnology.time);

  if(points > 100) {
    points = 100;
  } else if(points < 0) {
    points = 0;
  };

  return points;
};

function getPointsMultplier(time: string) {
  switch (time.toLowerCase()) {
    case "0 ~ 1 ano":
      return 1;
    case "2 ~ 3 anos":
      return 2;
    case "4 ~ 5 anos":
      return 3;
    case "+6 anos":
      return 4;
    default:
      return 1;
  }
};

export { getPointsOfTecnology, getPointsMultplier };