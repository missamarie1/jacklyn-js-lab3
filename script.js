"use strict";

//1
const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020/01/24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018/05/14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019/07/05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020/04/22",
    passed: true,
  },
];
// const addSubmission = (array, newName, newScore, newDate) => {
//   let newPassedProperty = null;
//   if (newScore >= 60) {
//     newPassedProperty = true;
//   } else {
//     newPassedProperty = false;
//   }
//   const newSubmission = {
//     name: newName,
//     score: newScore,
//     date: newDate,
//     passed: newPassedProperty,
//   };
//   array.push(newSubmission);
// };

//2
const addSubmission = (array, newName, newScore, newDate) => {
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  });
};
console.log(addSubmission(submissions, "Mo", 71, "2022/04/20"));
console.log(submissions);

//3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 1);
console.log(submissions);

//4
const deleteSubmissionByName = (array, nameParam) => {
  const index = array.findIndex((item) => {
    return item.name === nameParam;
  });
  array.splice(index, 1);
};
deleteSubmissionByName(submissions, "Jill");
console.log(submissions);

//5 no loop needed
const editSubmission = (array, index, score) => {
  if (score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
  array[index].score = score;
};
editSubmission(submissions, 1, 76);
console.log(submissions);

//6
const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};
console.log(findSubmissionByName(submissions, "Jane"));

//7
const findLowestScore = (array) => {
  let lowestScore = array[0].score;
  array.forEach((item) => {
    if (item.score < lowestScore) {
      lowestScore = item.score;
    }
  });
  return lowestScore;
};
console.log(findLowestScore(submissions));

//8

const findAverageScore = (array) => {
  let sum = 0;
  for (let submission of array) {
    sum += submission.score;
  }
  return sum / array.length;
};
console.log(findAverageScore(submissions));

//9
const filterPassing = (array) => {
  return array.filter((item) => {
    return item.passed === true;
  });
};
console.log(filterPassing(submissions));

//10
const filter90AndAbove = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};
console.log(filter90AndAbove(submissions));

//extended
//1
let range = [];
const createRange = (start, end) => {
  while (range.length <= end) {
    range.push(start);
    range.push(++start);
  }
};
createRange(2, 10);
console.log(range);
