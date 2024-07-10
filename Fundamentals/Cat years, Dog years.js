const humanYearsCatYearsDogYears = function (humanYears) {

  let dogYear, catYear;
  let oneYear = 15;
  let twoYear = 24;

  const yearMoreTwo = function () {

  } 

  if (humanYears === 1) {
    dogYear = oneYear;
    catYear = oneYear;
    return [humanYears, catYear, dogYear];
  } else if (humanYears === 2) {
    dogYear = twoYear;
    catYear = twoYear;
    return [humanYears, catYear, dogYear];
  } else {
    dogYear = (humanYears - 2) * 5 + twoYear;
    catYear = (humanYears - 2) * 4 + twoYear;
    return [humanYears, catYear, dogYear];
  }
};

console.log(humanYearsCatYearsDogYears(10));