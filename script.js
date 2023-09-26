const curDate = new Date();
const birthdate = new Date(2023, 7, 30);

let elYearsOld = document.getElementById("yearsold");
elYearsOld.innerText = getYearsAndMonthsDifference(birthdate);

function getTextYearsOld(f) {
  const years = getYears(f);
  const months = getMonthsInYear(f);

  let txtYears = years + " años ";
  let txtMonths = months + " meses";
  if (years == 0) txtYears = "";
  if (months == 0) txtMonths = "";
  if (years == 1) txtYears = years + " año ";
  if (months == 1) txtMonths = months + " mes";
  return txtYears + txtMonths;
}

function getYearsAndMonthsDifference(f) {
  const currentDate = new Date();
  const birthDate = new Date(f);

  const years = currentDate.getFullYear() - birthDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const birthMonth = birthDate.getMonth();

  let months = currentMonth - birthMonth;

  if (months < 0) {
    years--;
    months += 12;
  }

  let txtYears = years + " años ";
  let txtMonths = months + " meses";
  if (years == 0) txtYears = "";
  if (months == 0) txtMonths = "";
  if (years == 1) txtYears = years + " año ";
  if (months == 1) txtMonths = months + " mes";
  return txtYears + txtMonths;
}
