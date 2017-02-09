var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
makeRect(0, 0, 200, 100, "#032785")
makeImage("https://c1.staticflickr.com/8/7029/6802888913_17b62d099c_b.jpg", 0, 70, 200, 100, 1)
//Left Foot
makeEllipse(85, 82, 3, 7, "orange", 1, "rotate(40 85 82)")
makeEllipse(94, 83, 3, 7, "orange", 1, "rotate(200 94 83)")
makeEllipse(89, 82, 3, 7, "orange", 1, "rotate(20 89 82)")
//Right Foot
makeEllipse(115, 82, 3, 7, "orange", 1, "rotate(320 115 82)")
makeEllipse(106, 83, 3, 7, "orange", 1, "rotate(160 106 83)")
makeEllipse(111, 82, 3, 7, "orange", 1, "rotate(340 111 82)")
//Body and Head
makeEllipse(100, 60, 20, 24, "black")
makeEllipse(100, 60, 17, 22, "white")
makeCircle(100, 40, 15, "black")
//Arms and Face
makeEllipse(78, 50, 5, 10, "black", 1, "rotate(50 78 50)")
makeEllipse(122, 50, 5, 10, "black", 1, "rotate(130 122 50)")
makeEllipse(96, 41, 9, 11, "white", 1, "rotate(160 96 41)")
makeEllipse(104, 41, 9, 11, "white", 1, "rotate(20 104 41)")
makeEllipse(100, 42.2, 11, 10.5, "white")
//Facial Features
makePolygon("100 46, 97 42, 103 42", "orange")
makeCircle(92, 40, 2)
makeCircle(108, 40, 2)
}

    
// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
   //Igloo
    makeRect(0, 0, 200, 100, "#032785")
   makeImage("http://www.wallpapermaiden.com/image/2016/09/11/deer-winter-heavy-snow-horns-animal-5738-resized.jpg", 0, 0, 200, 100, 1)
   makeRect(20, 60, 80, 30, "purple", 1)
   makeEllipse(60, 58, 40, 30, "purple")
   makePolygon("70 90, 90 97, 110 97, 110 70, 70 70, 70 90", "aqua")
   makeEllipse(90, 70, 20, 20, "aqua")
   makeRect(92, 70, 15, 27, "green")
   //Penguino
   //Left Foot
   makeEllipse(120, 95, 1.3, 3, "orange", 1, "rotate(40 120 95)")
   makeEllipse(121.5, 95.7, 1.3, 3, "orange", 1, "rotate(200 121.5 95.7)")
   makeEllipse(123.7, 95.9, 1.3, 3, "orange", 1, "rotate(20 123.7 95.9)")
   //Right Foot
   makeEllipse(132, 95, 1, 3, "orange", 1, "rotate(320 132 95)")
   makeEllipse(130.5, 95.7, 1, 3, "orange", 1, "rotate(160 130.5 95.7)")
   makeEllipse(128.7, 95.9, 1, 3, "orange", 1, "rotate(350 128.3 95.9)")
   //Body and Head
   makeEllipse(126, 82, 10, 13, "black")
   makeEllipse(126, 82, 8.4, 11, "white")
   makeCircle(126, 70, 9.5)
   //Arms and Face
   makeEllipse(123, 70.5, 5, 7, "white", 1, "rotate(160 123 70.5)")
   makeEllipse(129, 70.5, 5, 7, "white", 1, "rotate(20 129 70.5)")
   makeCircle(126, 72.25, 6, "white")
   makeEllipse(114, 78, 3, 5.6, "black", 1, "rotate(50 114 78)")
   makeEllipse(138, 78, 3, 5.6, "black", 1, "rotate(130, 138, 78)")
   //Facial Features
   makeCircle(123, 70, 1)
   makeCircle(129, 70, 1)
   makePolygon("125 71, 126, 72, 127 71", "orange")
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    makeRect(0, 0, 200, 100, "#032785")
    makeImage("https://c1.staticflickr.com/8/7029/6802888913_17b62d099c_b.jpg", 0, 0, 200, 100, 1)
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var thingy = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if(thingy < 0.33) {
    createFirstScene()
    }
    // Else, if the number is less than 0.67, call the function to create your second scene.
    else if(thingy < 0.67) {
    createSecondScene()
    }
    // Else, call the function to create your third scene.
    else {
    createThirdScene()
    }
}


1
// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity, transform) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  ellipse.setAttribute("transform", transform)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}