/* .js files add interaction to your website */

var factList = [
  "One in three people are going without food for days at a time.",
  "Heavy fighting has killed thousands and destroyed 70 percent of Gaza’s infrastructure.",
  "90% of Gaza's population has been displaced.",
  "Of 74 malnutrition-related deaths in 2025, 63 occurred in July – including 24 children under five, a child over five, and 38 adults.",
  "Hospitals have treated more than 20,000 children for acute malnutrition since April 2025 (as of July 31, 2025).",
  "Over 40% of breastfeeding and pregnant women are severely malnourished.",
  "In July alone, nearly 12,000 children under five were identified as acutely malnourished out of 136,000 screened.",
  "In July, aid organizations were only able to reach 8,700 of the 290,000 children under five who require feeding and nutrition supplements due to the severe shortage of lipid-based nutrient supplements entering Gaza.",
  "More than one million shelter items, and 2.3 million items such as tents, tarps, and sealing-off materials, have been procured and are currently stuck in Jordan and Egypt as the Israeli authorities have not approved their entry.",
  "In Gaza, 80 percent of all reported deaths by starvation are children.",
  "Civilian casualties while seeking food include 1,239 killed and over 8,152 injured since May 27th, 2025 (as of July 31, 2025)."
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("factGen");
var count = 0;

if (myButton) {
  myButton.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}