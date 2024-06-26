// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
  { name: 'Aisha', age: 8 }, // ages in months!
  { name: 'Oscar', age: 9 },
  { name: 'Wiggins', age: 44 },
  { name: 'Gatsby', age: 56 }
]

type Academite = {
  name: string, 
  age: number
}


// Reduce the array to only the total age in months of all the doggie Academites
const totalAgeInMonths = someAcademitesWithAges.reduce((acc, academite) => acc + academite.age, 0);
console.log('Total age in months:', totalAgeInMonths);

// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it

function sortByName(arr: Academite[]): Academite[] {
  return arr.sort((a,b)=> a.name.localeCompare(b.name));
}
const sortedName = sortByName(someAcademitesWithAges);

console.log(sortedName)
function sortByReverseAge(arr: Academite[]): Academite[] {
  return arr.sort((a, b) => b.age - a.age);
}
const sortedByReverseAge = sortByReverseAge(someAcademitesWithAges);
console.log('Sorted by reverse age:', sortedByReverseAge);

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
function sortByAge(arr: Academite[]): Academite[]{
  return arr.sort((a,b)=> a.age - b.age);
}
const sortedAge = sortByAge(someAcademitesWithAges);
console.log(sortedAge)


// EOF
