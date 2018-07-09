// Standard Method (no library)

// RUN
// node argv.js one two=three four

// print process.argv
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
