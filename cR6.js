document.writeln();
var Dvd = [{
    Titel:'City lights',
    Author:'Charlie Chaplin',
    Genre:"Romantic comedy",
    Pulisher: "United Artists",
    Minutes: 87,
    Photo:"img/citylights_image.jpg",

    },{
    Titel:'Lawrence of Arabia',
    Author:'T.E.Lawrence',
    Genre:"historical drama",
    Pulisher:"Columbia Pictures",
    Minutes:222,
    Photo:"img/Lawrence_of_arabia.jpg",       
    
}];

for(var i=0; i<Dvd.length; i++){
document.getElementById("Dvd").innerHTML += ('<div class="col-lg-4"> <img src=" '+ Dvd[i].Photo +' " class="img-fluid alt="Responsive image"> <h2>'+ Dvd[i].Titel +'</h2> <p> Author : ' + Dvd[i].Author + '</p> <p> Genre : '+ Dvd[i].Genre +' </p> <p> Pulisher : '+ Dvd[i].Pulisher +' </p> <P> Minutes : ' + Dvd[i].Minutes + '</P> <hr></div>'); 
};
function mDVD() {
    Title = document.getElementById("Title").value;
    Author = document.getElementById("Author").value;
    Genre = document.getElementById("Genre").value;
    Publisher = document.getElementById("Publisher").value;
    Image = document.getElementById("img");
    Weight = document.getElementById("Weight").value;
    
    var elementT = document.getElementById("Title"),
        elementA = document.getElementById("Author"),
        elementI = document.getElementById("Image");
    
    x = ('<div class="col-lg-4"> <img src=" '+ Image +' " class="img-fluid alt="Responsive image"> <h2>'+ Title +'</h2> <p> Author : ' + Author + '</p> <p> Genre : '+ Genre +' </p> <p> Pulisher : '+ Publisher +' </p><hr></div>'); 
    
    y = Dvd.push(x);

    if (Title == "" || Author == "" || Image == "") {
        document.getElementById("massage").innerHTML = "Please complete the entries...";
        elementT.classList.add("sorry");
        elementA.classList.add("sorry");

    } else {
        document.getElementById("massage").style.color = "#8EEA90";
        document.getElementById("massage").innerHTML = "Successfully added";
        elementT.classList.remove("sorry");
        elementA.classList.remove("sorry");
        document.getElementById("Dvd").innerHTML += x;
        myReset()
    }
}

/* ======== ========= */
var CD = [{
    Titel:'Dylan',
    Author:'Bob Dylan',
    Genre:"rock",
    Minutes: 34,
    Photo:"img/Bob_Dylan_-_Dylan_(1973_album).jpg",
    },{
    Titel:'Diamond Life',
    Author:'Sade',
    Genre:"smooth soul",
    Pulisher:"Epic",
    Minutes:5,
    Photo:"img/sade-diamond-life.jpg", 
    },{ 
    Titel:'Dylan',
    Author:'Bob Dylan',
    Genre:"rock",
    Minutes: 34,
    Photo:"img/Bob_Dylan_-_Dylan_(1973_album).jpg",     
    
}]
for(var i=0; i<CD.length; i++){
document.getElementById("CD").innerHTML += ('<div class="col-lg-4"> <img src=" '+ CD[i].Photo +' " class="img-fluid alt="Responsive image"> <h2>'+ CD[i].Titel +'</h2> <p> Author : ' + CD[i].Author + '</p> <p> Genre : '+ CD[i].Genre +' </p> <p> Pulisher : '+ CD[i].Pulisher +' </p> <P> Minutes : ' + CD[i].Minutes + '</P> <hr></div>'); 
};
function mCD() {
    Title = document.getElementById("Title").value;
    Author = document.getElementById("Author").value;
    Genre = document.getElementById("Genre").value;
    Publisher = document.getElementById("Publisher").value;
    Image = document.getElementById("img");
    Weight = document.getElementById("Weight").value;
    
    var elementT = document.getElementById("Title"),
        elementA = document.getElementById("Author"),
        elementI = document.getElementById("Image");
    
    x = ('<div class="col-lg-4"> <img src=" '+ Image +' " class="img-fluid alt="Responsive image"> <h2>'+ Title +'</h2> <p> Author : ' + Author + '</p> <p> Genre : '+ Genre +' </p> <p> Pulisher : '+ Publisher +' </p><hr></div>'); 
    
    y = CD.push(x);

    if (Title == "" || Author == "" || Image == "") {
        document.getElementById("massage").innerHTML = "Please complete the entries...";
        elementT.classList.add("sorry");
        elementA.classList.add("sorry");

    } else {
        document.getElementById("massage").style.color = "#8EEA90";
        document.getElementById("massage").innerHTML = "Successfully added";
        elementT.classList.remove("sorry");
        elementA.classList.remove("sorry");
        document.getElementById("CD").innerHTML += x;
        myReset()
    }
}

var Book = [{
    Titel:'Woodwalkers',
    Author:'Katja Brandis',
    Genre:"belletristik",
    Publisher: "Bild",
    Weight: "1 kg",
    Photo:"img/woodwalkers.jpg",
    },{
    Titel:'Foundation',
    Author:'Isaac Asimov',
    Genre:"belletristik",
    Publisher: "Heyne",
    Weight: "2 kg",
    Photo:"img/fondation-asimov.jpg",       
    
}]
for(var i=0; i<Book.length; i++){
document.getElementById("Book").innerHTML += ('<div class="col-lg-4"> <img src=" '+ Book[i].Photo +' " class="img-fluid alt="Responsive image">  <h2>'+ Book[i].Titel +'</h2> <p> Author : ' + Book[i].Author + '</p> <p> Genre : '+ Book[i].Genre +' </p> <p> Pulisher : '+ Book[i].Pulisher +' </p> <P> Weight : ' + Book[i].Weight + '</P> <hr></div>'); 
};
function mBOOK() {
    Title = document.getElementById("Title").value;
    Author = document.getElementById("Author").value;
    Genre = document.getElementById("Genre").value;
    Publisher = document.getElementById("Publisher").value;
    Image = document.getElementById("img");
    Weight = document.getElementById("Weight").value;
    
    var elementT = document.getElementById("Title"),
        elementA = document.getElementById("Author"),
        elementI = document.getElementById("Image");
    
    x = ('<div class="col-lg-4"> <img src=" '+ Image +' " class="img-fluid alt="Responsive image"> <h2>'+ Title +'</h2> <p> Author : ' + Author + '</p> <p> Genre : '+ Genre +' </p> <p> Pulisher : '+ Publisher +' </p><hr></div>'); 
    
    y = Book.push(x);

    if (Title == "" || Author == "" || Image == "") {
        document.getElementById("massage").innerHTML = "Please complete the entries...";
        elementT.classList.add("sorry");
        elementA.classList.add("sorry");

    } else {
        document.getElementById("massage").style.color = "#8EEA90";
        document.getElementById("massage").innerHTML = "Successfully added";
        elementT.classList.remove("sorry");
        elementA.classList.remove("sorry");
        document.getElementById("Book").innerHTML += x;
        myReset()
    }
};
var Comics = [{
    Titel:'Modesty Blaise',
    Author:"Peter O'Donnell",
    Genre:"mystery",
    Pulisher:"Titan Books",
    Photo:"img/modesty1.jpg",
    },{
    Titel:'The Sandman',
    Author:'Neil Gaiman',
    Genre:"fantasy",
    Pulisher:"Vertigo",
    Photo:"img/Sandman.jpg",       
    
}]
for(var i=0; i<Comics.length; i++){
document.getElementById("Comic").innerHTML += ('<div class="col-lg-4"> <img src=" '+ Comics[i].Photo +' " class="img-fluid alt="Responsive image"> <h2>'+ Comics[i].Titel +'</h2> <p> Author : ' + Comics[i].Author + '</p> <p> Genre : '+ Comics[i].Genre +' </p> <p> Pulisher : '+ Comics[i].Pulisher +' </p> <hr></div>'); 
};
function mCOMIC() {
    Title = document.getElementById("Title").value;
    Author = document.getElementById("Author").value;
    Genre = document.getElementById("Genre").value;
    Publisher = document.getElementById("Publisher").value;
    Image = document.getElementById("img");
    Weight = document.getElementById("Weight").value;
    
    var elementT = document.getElementById("Title"),
        elementA = document.getElementById("Author"),
        elementI = document.getElementById("Image");
    
    x = ('<div class="col-lg-4"> <img src=" '+ Image +' " class="img-fluid alt="Responsive image"> <h2>'+ Title +'</h2> <p> Author : ' + Author + '</p> <p> Genre : '+ Genre +' </p> <p> Pulisher : '+ Publisher +' </p><hr></div>'); 
    
    y = Comics.push(x);

    if (Title == "" || Author == "" || Image == "") {
        document.getElementById("massage").innerHTML = "Please complete the entries...";
        elementT.classList.add("sorry");
        elementA.classList.add("sorry");

    } else {
        document.getElementById("massage").style.color = "#8EEA90";
        document.getElementById("massage").innerHTML = "Successfully added";
        elementT.classList.remove("sorry");
        elementA.classList.remove("sorry");
        document.getElementById("Comic").innerHTML += x;
        myReset()
    }
}
