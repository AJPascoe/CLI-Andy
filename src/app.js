const {goodOrBad}= require("./utils");
const likeVar = process.argv[2];
const movie = process.argv[3];
const actor = process.argv[4]
const director = process.argv[5];
const favActor = process.argv[6];

goodOrBad(likeVar, movie, actor, director, favActor);
