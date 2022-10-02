function arrayToObject(data: any[]) {
  return data.reduce((data, d) => {
    data[d.text] = d.value;
    return data;
  }, {}) as any;
};

export { arrayToObject };