function getProgressMessage(tc: Technology) {
  if(tc.points > 90) {
    return "Especializado";
  } else if(tc.points > 65) {
    return "Capaz de liderar projetos";
  } else if(tc.points > 45 && tc.haveProjects && tc.haveExperience && tc.useWithFrequency) {
    return "Habituado a concluir projetos";;
  } else if(tc.points > 35) {
    return "Capaz de realizar projetos";
  } else if(tc.points > 25 && tc.isStudying && tc.haveInterest) {
    return "Focado em melhorar";
  } else if(tc.points > 20 && tc.isStudying) {
    return "Estudando";
  } else if(tc.points > 20 && tc.haveExperience) {
    return "Tem um pouco de experiência";
  } else if(tc.points > 20) {
    return "Falta experiência";
  } else if(tc.points > 10 && !tc.haveInterest) {
    return "Já utilizou";
  } else if(tc.haveInterest && tc.isStudying) {
    return "Demonstrando interesse";
  } else if(!tc.haveInterest && tc.haveExperience) {
    return "Não demonstra interesse";
  } else {
    return "Já teve o primeiro contato";
  };
};

export { getProgressMessage };