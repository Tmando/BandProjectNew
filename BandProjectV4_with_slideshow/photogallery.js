var fotos = [{text:"04.02.2017 - Burg Mylau / Deutschland",link:"http://www.muellerphotos.com/music1/Floyd%20Division/04.08.17/FD%2004.08.17%20start.html",img:"http://www.muellerphotos.com/music1/Floyd%20Division/04.08.17/slides/FD%20170804_(c)_Andreas_Mueller_005.jpg",linktext:"zu den Fotos von Andreas Müller"},
{text:"04.02.2017 - Simm City Wien",link:"http://www.muellerphotos.com/music1/Floyd%20Division/04.02.17/FD%2004.02.17%20start.html",img:"http://www.muellerphotos.com/music1/Floyd%20Division/04.02.17/slides/FD%20170204_(c)_Andreas_Mueller_005.jpg",linktext:"zu den Fotos von Andreas Müller"},
{text:"25.05.2015 - Gasometer Wien - Seventies forever",link:"http://www.muellerphotos.com/music1/Floyd%20Division/25.04.15/FD%2025.04.15%20start.html",img:"http://www.muellerphotos.com/music1/Floyd%20Division/25.04.15/slides/FD%20150425_(c)%20Andreas_Mueller_002.jpg",linktext:"zu den Fotos von Andreas Müller"},
{text:"07.11.2014 - Kulturhaus Pottschach",link:"http://www.muellerphotos.com/music1/Floyd%20Division/07.11.14/FD%2007.11.14%20start.html",img:"http://www.muellerphotos.com/music1/Floyd%20Division/07.11.14/slides/FD%20141107_(c)%20Andreas_Mueller_007.jpg",linktext:"zu den Fotos von Andreas Müller"},
{text:"01.03.2014 - Szene Wien",link:"http://www.muellerphotos.com/music1/Floyd%20Division/01.03.14/FD%2001.03.14%20start.html",img:"http://www.muellerphotos.com/music1/Floyd%20Division/01.03.14/slides/FD%20140301_(c)%20Andreas_Mueller_027-3.jpg",linktext:"zu den Fotos von Andreas Müller"},
{text:"25.10.2013 - EMS Lounge",link:"http://www.muellerphotos.com/music1/Floyd%20Division/25.10.13/Floyd%20Division%2025.10.13%20start.html",img:"http://www.muellerphotos.com/music1/Floyd%20Division/25.10.13/slides/FD_131025_(c)%20Andreas_Mueller_009.jpg",linktext:"zu den Fotos von Andreas Müller"},
{text:"16.02.2013 - Szene Wien",link:"http://www.muellerphotos.com/music1/Floyd%20Division/16.02.13/FD%2016.02.13%20start.html",img:"http://www.muellerphotos.com/music1/Floyd%20Division/16.02.13/slides/FD_130216_(c)%20Andreas_Mueller_050.jpg",linktext:"zu den Fotos von Andreas Müller"},
{text:"17.11.2012 - Pottschach Kulturhaus Support: Ulli Bäer",link:"http://www.muellerphotos.com/music1/Floyd%20Division/10.11.12/FD%2010.11.12%20start.html",img:"http://www.muellerphotos.com/music1/Floyd%20Division/10.11.12/slides/FD_121110_(c)%20Andreas_Mueller_023.jpg",linktext:"zu den Fotos von Andreas Müller"},
{text:"11.08.2012 - Kriebstein Open Air - Deutschland",link:"http://www.muellerphotos.com/music1/Floyd%20Division/10.08.12/FD%2010.08.12%20start.html",img:"http://www.muellerphotos.com/music1/Floyd%20Division/10.08.12/slides/FD_120810_(c)%20Andreas_Mueller_051.jpg",linktext:"zu den Fotos von Andreas Müller"}];


function appendFotoGallery(){
  tag="";
  for(let i= 0;i<fotos.length;i++){
    tag += "<div class=\"row photocontainerRow\">";
      tag+= "<div class=\"col-lg-7 col-xs-7 col-md-7 col-xl-7 col-sm-7\">"
      tag+= "<a href=\""+fotos[i].link+"\""+" target=\"_blank\">"+"<img class=\"img-responsive\" src=\""+ fotos[i].img + "\">"+"</a>";
      tag+= "</div>";
      tag+= "<div class=\"col-lg-5 col-xs-5 col-md-5 col-xl-5 col-sm-7\">"
      tag+= "<p>"+ fotos[i].text +"</p>";
      tag+= "<a href=\""+fotos[i].link +"\""+ " target=\"_blank\"" +">"+ fotos[i].linktext +"</a>";
      tag+= "</div>";
    tag += "</div>";
  }
  document.getElementById('photocontainer').innerHTML += tag;
}
