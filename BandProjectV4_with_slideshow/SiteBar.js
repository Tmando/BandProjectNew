var newsLetter = [{title: "Floyd Division Newsletter", text: "Sende ein Mail mit e-mail Adresse an:", email: "newsletter@floyddivision.at"}];
var audio = [{title: "ANDREAS PUTZ", text: "Audio Engineering", link: "www.andreas-putz.com"}];
var programmAuszugTitle = [{titleBand: "Floyd Division", title: "Programmauszug"}];

var songTitle = [{
  title: "speak to me"
}, {
  title: "breathe"
}, {
  title: "time"
}, {
  title: "great gig in the sky"
}, {
  title: "money"
}, {
  title: "us and them"
}, {
  title: "any colour you like"
}, {
  title: "brain damage"
}, {
  title: "eclipsed"
}, {
  title: "in the flesh"
}, {
  title: "another brick in the wall"
}, {
  title: "mother"
}, {
  title: "comfortably numb"
}, {
  title: "hey you"
}, {
  title: "run like hell"
}, {
  title: "shine on you crazy d."
}, {
  title: "wish you were here"
}, {
  title: "set the controls for the heart of the sun"
}, {
  title: "one of these days"
}, {
  title: "echoes"
}, {
  title: "dogs"
}, {
  title: "sheep"
}, {
  title: "learning to fly"
}, {
  title: "coming back to life"
}, {
  title: "sorrow"
}, {
  title: "high hopes"
}, {
  title: "take it back"
}, {
  title: "keep talking"
}, {
  title: "on the turning away"
}, {
  title: "poles apart"
}, {
  title: "great day for freedom"
}, {
  title: "marooned"
}, {
  title: "what do you want..."
}, {
  title: "red sky at night"
}];

function addNewsLetterText(){
  console.log("hallo");
  /*document.getElementById('sideBarText').innerHTML += "<h4>" + newsLetter[0].title + "</h4>";
  document.getElementById('sideBarText').innerHTML += "<p>" + newsLetter[0].text + "</p>";
  document.getElementById('sideBarText').innerHTML += "<p>" + "<a href=\""+ newsLetter[0].email + "\">" + newsLetter[0].email + "</a>" + "</p>";
  document.getElementById('sideBarText').innerHTML += "<h4>"+ audio[0].title +"</h4>";
  document.getElementById('sideBarText').innerHTML += "<p>"+ audio[0].text +"</p>";
  document.getElementById('sideBarText').innerHTML += "<p>"+ "<a href=\""+ audio[0].link + "\">" + audio[0].link + "</a>" + "</p>";
  document.getElementById('sideBarText').innerHTML += "<p>"+ programmAuszugTitle[0].titleBand + "</p>";
  document.getElementById('sideBarText').innerHTML += "<p>"+ programmAuszugTitle[0].title + "</p>";
*/}
function addSongTitle(){
  for(let i=0;i<songTitle.length;i++){
    document.getElementById('sideBarText').innerHTML += "<p class=\"songTitleStyle\">"+ songTitle[i].title + "</p>";
  }
}
