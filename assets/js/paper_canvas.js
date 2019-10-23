
//  sounds to keys
var circles = [];

var keyData = {
	q: {
		sound: new Howl({
  		src: ['sounds/bubbles.mp3']
		}),
		color: '#1abc9c'
	},
	w: {
		sound: new Howl({
  		src: ['sounds/clay.mp3']
		}),
		color: '#2ecc71'
	},
	e: {
		sound: new Howl({
  		src: ['sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
  		src: ['sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
		t: {
		sound: new Howl({
  		src: ['sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
  		src: ['sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
  		src: ['sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
  		src: ['sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
			src: ['sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
  		src: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
  		src: ['sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
  		src: ['sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
  		src: ['sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
  		src: ['sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
  		src: ['sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
  		src: ['sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
  		src: ['sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
  		src: ['sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
  		src: ['sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
  		src: ['sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
  		src: ['sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		src: ['sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		src: ['sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
  		src: ['sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			src: ['sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
  		src: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
}

/*//random key for click -added 
var randomKeyFn = function(keyData) {
    var keys = Object.keys(keyData)
    return keyData[keys[ keys.length * Math.random() << 0]];
}
var randomK = randomKeyFn(keyData);
console.log(randomK);*/
/*$("body").on('click', onKeyDown(randomK) );*/

$("body").on('click', function(e) {
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomP = Point.random();
  var point = maxPoint * randomP;
  var newCircle = new Path.Circle(point, 500);
  // newCircle cannot be white or black
  newCircle.fillColor = "#BB9911";
   if(keyData[e]){
    // newCircle cannot be white or black
    newCircle.fillColor = keyData[e].color;
    keyData[e].sound.play();  
    circles.push(newCircle);
  }
  else{
    newCircle.fillColor.hue = Math.random() * 360;
    circles.push(newCircle);
  }
});


/*
//for multiple event lsiteners

['click','ontouchstart'].forEach( evt => 
    element.addEventListener(evt, dosomething, false)
);
*/

// proper code
function onKeyDown(e) {
  
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomP = Point.random();
  var point = maxPoint * randomP;
  var newCircle = new Path.Circle(point, 500);
  // newCircle cannot be white or black
  newCircle.fillColor = "#BB9911";
  
  if(keyData[e.key]){
    // newCircle cannot be white or black
    newCircle.fillColor = keyData[e.key].color;
    keyData[e.key].sound.play();  
    circles.push(newCircle);
  }
  else{
    newCircle.fillColor.hue = Math.random() * 360;
    circles.push(newCircle);
  }  
}

function onFrame(event){
  for(var i = 0; i < circles.length; i++){
    circles[i].scale(0.9);
    circles[i].fillColor.hue += 1;
    if(circles[i].area < 1){
      circles[i].remove(); // remove the circle from the canvas
      circles.splice(i, 1); // remove the circle from the array
      console.log(circles);
    }
  }
}



