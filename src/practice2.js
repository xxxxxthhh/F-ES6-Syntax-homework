const inject = (items, sections) =>{
  const answer = [];
  // const totalLength  = sections.length + items.length;
  const orderedSection = sections.sort((obj1, obj2) => obj1.index - obj2.index);
  let currentIndex = 0;
  let sectionIndex = 0;

  items.forEach((item) => {
    let injection = orderedSection.findIndex(section => section.index === currentIndex);
    if (injection !== -1){
      answer.push(orderedSection[sectionIndex].content);
      sectionIndex++;
      answer.push(item);
      currentIndex++;
    }else {
      answer.push(item);
      currentIndex++;
    }
  } );

  return answer;
};
export { inject };
