const fs = require("fs");



exports.goodOrBad = (likeVar, movie, actor, director, favActor) => {
  if (favActor) {
    if (likeVar === "fav") {
      console.log(`My favourite character in ${movie} is ${favActor}`);
    } else if(likeVar==="none"){
      console.log("No favourite Actor");
    }
  } else if (director) {
    if (likeVar === "good") {
      console.log(
        `I think the director ${director} did a good job of ${movie}`
      );
    } else if (likeVar === "bad") {
      console.log(`I think ${director} did a bad job of ${movie}`);
    } else {
      console.log("Incorrect input");
    }
  } else if (actor) {
    if (likeVar === "good") {
      // console.log(`I think ${movie} is good with ${actor}`);
        const stringyObj = JSON.stringify({
        name: movie,
        like: likeVar,
        actor: actor
      });
      fs.writeFileSync("../../storage.json", stringyObj)

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
};
// module.exports = goodOrBad
