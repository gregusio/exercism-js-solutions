//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planetName, age) => {
  const mercuryEarthYears = 0.2408467;
  const venusEarthYears = 0.61519726;
  const marsEarthYears = 1.8808158;
  const jupiterEarthYears = 11.862615;
  const saturnEarthYears = 29.447498;
  const uranusEarthYears = 84.016846;
  const neptuneEarthYears = 164.79132;
  const earthYearInSec = 31557600;

  switch (planetName) {
    case 'mercury':
      return Math.round(((age / earthYearInSec) / mercuryEarthYears) * 100) / 100;
    case 'venus':
      return Math.round(((age / earthYearInSec) / venusEarthYears) * 100) / 100;
    case 'earth':
      return Math.round((age / earthYearInSec) * 100) / 100;
    case 'mars':
      return Math.round(((age / earthYearInSec) / marsEarthYears) * 100) / 100;
    case 'jupiter':
      return Math.round(((age / earthYearInSec) / jupiterEarthYears) * 100) / 100;
    case 'saturn':
      return Math.round(((age / earthYearInSec) / saturnEarthYears) * 100) / 100;
    case 'uranus':
      return Math.round(((age / earthYearInSec) / uranusEarthYears) * 100) / 100;
    case 'neptune':
      return Math.round(((age / earthYearInSec) / neptuneEarthYears) * 100) / 100;
  }
};
