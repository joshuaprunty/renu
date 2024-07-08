import courseData from "./data/courses.json";

function convertScale(oldScore) {
  return ((oldScore - 1) / 5) * 10;
}

const yearStringToNumber = {
  Freshman: 1,
  Sophomore: 2,
  Junior: 3,
  Senior: 4,
};

const diffStringToNumber = {
  "1 (Easy A)": 1,
  2: 2,
  "3 (Average)": 3,
  4: 4,
  "5 (Most Challenging)": 5,
};

function getMaxKeyValue(obj) {
  let maxKey = null;
  let maxValue = -Infinity; // Initialize to the smallest number

  for (const [key, value] of Object.entries(obj)) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }

  const mvString = `${maxValue * 100}%`;
  return { maxKey, mvString };
}

export function processFormData(formData) {
  // Process the form data
  let studentYear = yearStringToNumber[formData.year];
  let finalScores = [];

  console.log(
    `Form Data: Year: ${formData.year}, School: ${
      formData.school
    }, Majors: ${formData.majors.join(", ")}`
  );

  courseData.forEach((course) => {
    const {
      ctec: { overallInstruction, overallCourse, challenge, stimulus, hours },
      demoYear,
      demoSchool,
      demoRequirement,
    } = course;

    // Convert scales
    let normalOI = convertScale(overallInstruction);
    let normalOC = convertScale(overallCourse);
    let normalS = convertScale(stimulus);

    // Calculate inherent score
    let inherentScore = (normalOI + normalOC + normalS) / 3;

    // Calculate average year as a float
    let avgYear =
      demoYear.Freshman +
      2 * demoYear.Sophomore +
      3 * demoYear.Junior +
      4 * demoYear.Senior;
    // Placeholder for year relevance score calculation
    // This would be more complex and depend on the student's year and the course's year distribution
    let diff = Math.abs(avgYear - studentYear);
    let yearCloseScore = (1 - diff / 3) * 10;
    let yearHitScore = demoYear[formData.year] * 10;
    let yearScore = (yearCloseScore + yearHitScore) / 2;

    let schoolScore = (demoSchool[formData.school] + 1) * 2;

    // console.log("HERE");
    // console.log(formData.fulfills);
    let reqScore = demoRequirement[formData.fulfills];
    console.log(reqScore);

    // Placeholder for major relevance score
    let majorRelevanceScore = 5; // Placeholder value

    let difficultyRating = challenge + hours - 5;
    console.log("LOOK HERE RETARD");
    console.log("challenge", challenge);
    console.log("hours", hours);
    console.log("desired diff", diffStringToNumber[formData.diff]);
    let diffRelevance = Math.abs(
      difficultyRating - diffStringToNumber[formData.diff]
    );
    console.log("diffRelevance", diffRelevance);
    let diffCalculated = 2 - diffRelevance / 4;
    console.log("diffCalculated", diffCalculated);

    console.log(`Course: ${course.title}`);
    console.log(`Inherent Score: ${inherentScore.toFixed(2)}`);
    console.log(`Year Relevance: ${yearScore.toFixed(2)}`);
    console.log(`School Relevance: ${schoolScore.toFixed(2)}`);
    console.log(`Major Relevance: ${majorRelevanceScore}`);
    console.log(`Requirement Relevance: ${reqScore}`);
    console.log(`Difficulty Relevance: ${diffCalculated.toFixed(2)}`);

    let finalScore =
      (inherentScore / 2) *
      yearScore *
      schoolScore *
      (majorRelevanceScore / 5) *
      (1 + reqScore) *
      diffCalculated;

    let title = course.title;

    let maxDemo = getMaxKeyValue(demoYear);
    let ratingOverall = course.ctec.overallCourse;
    let hrsPerWeek = course.ctec.hours;

    finalScores.push({ title, finalScore, maxDemo, ratingOverall, hrsPerWeek });
  });

  finalScores.sort((a, b) => b.finalScore - a.finalScore);
  return finalScores;
}
