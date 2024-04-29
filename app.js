function calculateBirthday() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const today = new Date();

  const age = calculateAge(birthdate, today);

  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `
      <p>Age: ${age.years} years, ${age.months} months, ${age.days} days</p>
    `;
}

function calculateAge(birthdate, today) {
  let years = today.getFullYear() - birthdate.getFullYear();
  let months = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  if (months < 0 || (months === 0 && today.getDate() < birthdate.getDate())) {
    years--;
    months += 12;
  }
  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  return { years, months, days };
}
