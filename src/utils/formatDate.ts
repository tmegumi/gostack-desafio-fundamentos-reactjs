const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(Date.parse(date.toString()));

export default formatDate;
