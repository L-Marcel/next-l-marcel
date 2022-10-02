function getFormattedDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long"
  }).format(new Date(date));
};

export { getFormattedDate };