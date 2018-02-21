var sketch = context.api()

log(sketch.api_version)
log(sketch.version)
log(sketch.build)
log(sketch.full_version)

var frasi = ["Nice palette", "This layout is great", "You're fulfilling the users",
 "This we'll be great", "You're reaching the goal", "You're an awesome designer", "You have great ideas",
"You're layers are really ordered", "I love your symbols", "Cool font", "The users are gonna love this"];

var document = sketch.selectedDocument;
var selection = document.selectedLayers;
var page = document.selectedPage;

function fraser(frasi, max){
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  return frasi[getRandomInt(max)];
}

sketch.message(fraser(frasi, frasi.length - 1));
