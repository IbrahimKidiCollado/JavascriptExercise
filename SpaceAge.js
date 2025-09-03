/* Instructions
Given an age in seconds, calculate how old someone would be on a planet in our Solar System.

One Earth year equals 365.25 Earth days, or 31,557,600 seconds. If you were told someone was 1,000,000,000 seconds old, their age would be 31.69 Earth-years.

For the other planets, you have to account for their orbital period in Earth Years:

Planet	Orbital period in Earth Years
Mercury	0.2408467
Venus	0.61519726
Earth	1.0
Mars	1.8808158
Jupiter	11.862615
Saturn	29.447498
Uranus	84.016846
Neptune	164.79132
Note
The actual length of one complete orbit of the Earth around the sun is closer to 365.256 days (1 sidereal year). The Gregorian calendar has, on average, 365.2425 days. While not entirely accurate, 365.25 is the value used in this exercise. See Year on Wikipedia for more ways to measure a year. */

export const age = (planet, ageInSeconds) => {
	const earthYearInSeconds = 31557600; // 365.25 days × 24 × 60 × 60

	const orbitalPeriods = {
		mercury: 0.2408467,
		venus: 0.61519726,
		earth: 1.0,
		mars: 1.8808158,
		jupiter: 11.862615,
		saturn: 29.447498,
		uranus: 84.016846,
		neptune: 164.79132
	};

	if (!orbitalPeriods.hasOwnProperty(planet)) throw new Error('not a planet');

	const earthYears = ageInSeconds / earthYearInSeconds;
	const planetYears = earthYears / orbitalPeriods[planet];

	return parseFloat(planetYears.toFixed(2));
};