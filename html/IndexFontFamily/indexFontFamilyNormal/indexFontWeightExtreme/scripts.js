var container = document.getElementById("container");

var a = [document.getElementsByClassName("topBar PartialLeftStem PartialRightStem Crossbar")];

a.forEach(function(entry) {
    console.log(entry);
});
  
  var letters = {
      KeyA: {
        lowerUrl: "a",
        upperUrl: "null",
      },
      KeyB: {
        lowerUrl: "pokedex/b.png",
        upperUrl: "null",
      },
      KeyC: {
        lowerUrl: "pokedex/c.png",
        upperUrl: "null",
      },
      KeyD: {
        lowerUrl: "pokedex/d.png",
        upperUrl: "null",
      },
      KeyE: {
        lowerUrl: "pokedex/e.png",
        upperUrl: "null",
      },
      KeyF: {
        lowerUrl: "pokedex/f.png",
        upperUrl: "null",
      },
      KeyG: {
        lowerUrl: "pokedex/g.png",
        upperUrl: "null",
      },
      KeyH: {
        lowerUrl: "pokedex/h.png",
        upperUrl: "null",
      },
      KeyI: {
        lowerUrl: "pokedex/i.png",
        upperUrl: "null",
      },
      KeyJ: {
        lowerUrl: "pokedex/j.png",
        upperUrl: "null",
      },
      KeyK: {
        lowerUrl: "pokedex/k.png",
        upperUrl: "null",
      },
      KeyL: {
        lowerUrl: "pokedex/l.png",
        upperUrl: "null",
      },
      KeyM: {
        lowerUrl: "pokedex/m.png",
        upperUrl: "null",
      },
      KeyN: {
        lowerUrl: "pokedex/n.png",
        upperUrl: "null",
      },
      KeyO: {
        lowerUrl: "pokedex/o.png",
        upperUrl: "null",
      },
      KeyP: {
        lowerUrl: "pokedex/p.png",
        upperUrl: "null",
      },
      KeyQ: {
        lowerUrl: "pokedex/q.png",
        upperUrl: "null",
      },
      KeyR: {
        lowerUrl: "pokedex/r.png",
        upperUrl: "null",
      },
      KeyS: {
        lowerUrl: "pokedex/s.png",
        upperUrl: "null",
      },
      KeyT: {
        lowerUrl: "pokedex/t.png",
        upperUrl: "null",
      },
      KeyU: {
        lowerUrl: "pokedex/u.png",
        upperUrl: "null",
      },
      KeyV: {
        lowerUrl: "pokedex/v.png",
        upperUrl: "null",
      },
      KeyW: {
        lowerUrl: "pokedex/w.png",
        upperUrl: "null",
      },
      KeyX: {
        lowerUrl: "pokedex/x.png",
        upperUrl: "null",
      },
      KeyY: {
        lowerUrl: "pokedex/y.png",
        upperUrl: "null",
      },
      KeyZ: {
        lowerUrl: "pokedex/z.png",
        upperUrl: "null",
      },
    };



document.addEventListener("keydown", function(event) {

  if(event.keyCode >= 65 && event.keyCode <= 90) {

    var div = document.createElement('div');
    div.classList.add('glyph');

    if (event.shiftKey == true) {
      console.log(letters[event.code].upperUrl);
      div.id = letters[event.code].upperUrl;

    } else {
      console.log(letters[event.code].lowerUrl);
      div.id = letters[event.code].lowerUrl;
     }

 container.appendChild(div);

 } else if (event.keyCode == 32) {

     var div = document.createElement('div');
     div.classList.add('space');
     container.appendChild(div);

  } else if (event.keyCode == 8) {
     container.removeChild(container.lastChild);
   }

});
