const fs = require("fs");

const addMovie = (likeVar, movie, actor, director, favActor) => {
  const lessStringyList = JSON.parse(fs.readFileSync("./storage.json"));
  const updatedObj = [
    lessStringyList.flat(),
    { name: movie, like: likeVar, actor: actor, favActor: favActor, director: director},
  ];
  fs.writeFileSync("./storage.json", JSON.stringify(updatedObj));
};

exports.goodOrBad = (likeVar, movie, actor, favActor, director) => {
  if (favActor) {
    if (likeVar === "fav") {
      console.log(`My favourite character in ${movie} is ${favActor}`);

    } else if (likeVar === "none") {
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
    
    }

    if (actor) {
      if (likeVar === "good") {
        // console.log(`I think ${movie} is good with ${actor}`);

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
  addMovie(likeVar, movie, actor, director, favActor )
};
