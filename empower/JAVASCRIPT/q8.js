//a>>
if (true) {
    let x = 10;
    var y = 20;
}
console.log(y);
console.log(x);

//b access using optional chnaging
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
}
};
   console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);
//c>>create the optional changing prevents a runtime error
const student={
    name:"anusha",
    address: {
        city: "Hyderabad"
    }
};

console.log(student?.address?.pincode);
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