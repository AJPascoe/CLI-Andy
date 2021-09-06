exports.goodOrBad = (likeVar, movie, actor) => {
  if (actor) {
     if (likeVar === "good") {
    console.log(`I think ${movie} is good with ${actor}`);
  } else if (likeVar === "bad") {
    console.log(`I think ${movie} is bad with ${actor}`);
  } else {
    console.log("Incorrect input");
  }
} else {
    if (likeVar === "good") {
        console.log(`I think ${movie} is good`);
      } else if (likeVar === "bad") {
        console.log(`I think ${movie} is bad`);
      } else {
        console.log("Incorrect input");
    }
}
}
// module.exports = goodOrBad
