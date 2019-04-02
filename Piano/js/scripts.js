

document.addEventListener("DOMContentLoaded", function(event) { 
	var buttons = document.getElementsByClassName('keyboard');
	var index = buttons.length;

	while (index--) {
		buttons[index].addEventListener('click', function(){
			var note = this.dataset.note.replace('s', '-sharp');
			document.getElementById(note).play();	
		});
	}
  });


	//c.play();
	$("li").click(function() {
		var note = this.dataset.note;
		//alert(note);
		switch (note) {
			case "a":
				a.play();
				break;
			case "b":
				b.play();
				break;
			case "c":
				c.play();
				break;
			case "d":
				d.play();
				break;

			case "e":
				e.play();
				break;

			case "f":
				f.play();
				break;

			case "g":
				g.play();
				break;

			case "as":
				as.play();
				break;

			case "cs":
				cs.play();
				break;

			case "ds":
				ds.play();
				break;

			case "fs":
				fs.play();
				break;

			case "gs":
				gs.play();
				break;
		}
	});



//audio.play();

// Javascript adapted from here: 
// https://www.html5rocks.com/en/tutorials/webaudio/intro/

// Notes can be found here:
// http://www.vibrationdata.com/piano.htm
/*
window.onload = init;
var context;
var bufferLoader;

function init() {
  context = new webkitAudioContext();

  bufferLoader = new BufferLoader(
    context,
    [
      'http://www.vibrationdata.com/piano_middle_C.mp3',
      'http://www.vibrationdata.com/piano_middle_C.mp3',
    ],
    finishedLoading
    );

  bufferLoader.load();
}

function finishedLoading(bufferList) {
  // Create two sources and play them both together.
  var source1 = context.createBufferSource();
  var source2 = context.createBufferSource();
  source1.buffer = bufferList[0];
  source2.buffer = bufferList[1];

  source1.connect(context.destination);
  source2.connect(context.destination);
  source1.noteOn(0);
  source2.noteOn(0);
}
  */