let rules = [];
let sentence;
let len = 250;
rules[0] = {
  prev: "X",
  next: "F+[[X]-X]-F[-FX]+X"
}

rules[1] = {
  prev: "F",
  next: "FF"
}


function setup() {
  createCanvas(700, 700);
  sentence = "X"
}

function draw() {
  background(51);
  translate(width / 2, height);

  strokeWeight(1);
  show();
}

function mousePressed() {
  generate();
}

function generate() {
  len *= 0.5;
  let nextSentence = "";
  let prevSentence = "";
  for (let i in sentence) {
    prevSentence = nextSentence;
    let curr = sentence[i];
    for (let j in rules) {
      if (curr === rules[j].prev) {
        nextSentence += rules[j].next; 
        break;
      }
    }
    if (prevSentence == nextSentence) {
      nextSentence += curr;
    }
  }
  sentence = nextSentence;
  console.log(sentence);
}

function show() {
  stroke(255);
  let angle = 25;
  for (let letter in sentence) {
    if (sentence[letter] == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (sentence[letter] == "+") {
      rotate(radians(-angle));
    } else if (sentence[letter] == "-") {
      rotate(radians(angle));
    } else if (sentence[letter] == "[") {
      push();
    } else if (sentence[letter] == "]") {
      pop();
    }
  }
}