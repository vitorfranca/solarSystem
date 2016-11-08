const AU = 150000000; // 1 A.U. = 150 Million km

const planets = [
  // {
  //   name: 'sun',
  //   distance: 0,
  //   diameter: 1391400/20,
  //   year: 1,
  //   day: 25
  // },
  {
    name: 'mercury',
    distance: 0.387, // astronomical units
    diameter: 4879.4, // km
    year: 87.97, // earth days
    day: 58.65 // earth days
  },
  {
    name: 'venus',
    distance: 0.723, // astronomical units
    diameter: 12103.6, // km
    year: 224.7, // earth days
    day: 243 // earth days
  },
  {
    name: 'earth',
    distance: 1, // astronomical units
    diameter: 12756, // km
    year: 365, // earth days
    day: 1 // earth days
  },
  {
    name: 'mars',
    distance: 1.52, // astronomical units
    diameter: 6794, // km
    year: 687, // earth days
    day: 1 // earth days
  },
  {
    name: 'jupiter',
    distance: 5.2, // astronomical units
    diameter: 139822, // km
    year: 11.86 * 365, // earth days
    day: 0.41 // earth days
  },
  {
    name: 'saturn',
    distance: 9.54, // astronomical units
    diameter: 120536, // km
    year: 29.45 * 365, // earth days
    day: 0.44 // earth days
  },
  {
    name: 'uranus',
    distance: 19.19, // astronomical units
    diameter: 51118, // km
    year: 83.75 * 365, // earth days
    day: 0.72 // earth days
  },
  {
    name: 'neptune',
    distance: 30.07, // astronomical units
    diameter: 55528, // km
    year: 163.72 * 365, // earth days
    day: 0.67 // earth days
  },
  // {
  //   name: 'pluto',
  //   distance: 39.48, // astronomical units
  //   diameter: 2300, // km
  //   year: 248 * 365, // earth days
  //   day: 6.39 // earth days
  // }
];

export default planets;
