exports.goodOrBad = (likeVar, movie) => {
  if (likeVar === "good") {
    console.log(`I think ${movie} is good`);
  } else if (likeVar === "bad") {
    console.log(`I think ${movie} is bad`);
  } else {
    console.log("Incorrect input");
  }
};

// module.exports = goodOrBad
