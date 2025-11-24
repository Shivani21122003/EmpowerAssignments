const user = {
name: "Alex",
address: {
city: "Bangalore"
}
};

// This line would cause a runtime error without the '?'
// const jobTitleError = user.job.title;

// This line prevents the error using optional chaining
const jobTitleSafe = user.job?.title;
console.log(jobTitleSafe);