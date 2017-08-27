var bandMembers = [{
  name: "Roman Bischof",
  instrument: "Vocals",
  img: "img/roman5.jpg",
  selector: "roman"
}, {
  name: "Thomas Scherrer",
  instrument: "Guitar",
  img: "img/Thomas5.jpg",
  selector: "thomas5"
}, {
  name: "Geri Cuba",
  instrument: "Guitar",
  img: "img/Geri5.jpg",
  selector: "geri5"
}, {
  name: "Markus Herwig",
  instrument: "Keyboard",
  img: "img/mark4.jpg",
  selector: "mark4"
}, {
  name: "Othmar Dangl",
  instrument: "Drums",
  img: "img/Othmar7.jpg",
  selector: "othmar7"
}, {
  name: "Florian Aschauer",
  instrument: "Bass",
  img: "img/Flo3.jpg",
  selector: "flo3"
}, {
  name: "Ingo Beer",
  instrument: "Saxophon",
  img: "img/Ingo3.jpg",
  selector: "ingo3"
}, {
  name: "Andreas Putz",
  instrument: "FOH Engineer, TL",
  img: "img/andi.jpg",
  selector: "andi"
}, {
  name: "Brigitte Guggenbichler",
  instrument: "Backing Vocals",
  img: "img/Gitti.jpg",
  selector: "gitti"
}, {
  name: "Sandra Kren",
  instrument: "Backing Vocals",
  img: "img/Sandra.jpg",
  selector: "sandra"
}, {
  name: "Ann G. Müllner",
  instrument: "Backing Vocals",
  img: "img/Ann.jpg",
  selector: "ann"
}];

function appendBandMembers() {
  tag = ""
  for (let i = 0; i < bandMembers.length; i++) {
    tag += "<div class=\"row bandNameInstrument\">" + "<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">" + bandMembers[i].name + "</div>" + "<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">" + bandMembers[i].instrument + "</div>" + "</div>"
    console.log(tag);
  }
  document.getElementById('bandSite').innerHTML += tag;
}

function appendBandPictures() {
  tag = ""
  for (let i = 0; i < bandMembers.length; i++) {
    if (i % 4 == 0) {
      tag += "<div class=\"row\">";
      console.log("Öffnen", i);
    }
    tag += "<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 bandImg\">";
    tag += "<div class=\"row\">";
      tag += "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" style=\"color: white\">";
      tag += bandMembers[i].name;
      tag += "</div>";
    tag += "</div>";
      tag += "<div class=\"row\">";
        tag += "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">";
        tag += "<a href=\"#\" data-featherlight=\"#"+bandMembers[i].selector+"\"><img class=\"img-responsive \"src=\"" + bandMembers[i].img + "\"></a>";
        tag += "</div>";
      tag += "</div>";
    tag += "</div>";
    if ((i + 1) % 4 == 0) {
      tag += "</div>";
      console.log("Schließen", i);
    }
  }
  document.getElementById('bandSite').innerHTML += tag;
}
