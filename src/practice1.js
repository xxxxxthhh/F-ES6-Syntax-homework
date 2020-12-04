const parseData = (input) => {
  const {data, column} = input;
  const output = [];
  data.forEach((obj) => {
    const newObj = {};
    for (let i = 0; i < column.length; i++){
      newObj[column[i].name] = obj[i];
    }
    output.push(newObj);
  });
  return output;
};

export { parseData };