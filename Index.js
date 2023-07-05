


function move()
{
    var rand = Math.floor(Math.random()*1280);
    console.log(rand);
    document.getElementById("Tasto").style.marginLeft = rand + "px";
    var randy = Math.floor(Math.random()*300);
    document.getElementById("Tasto").style.marginTop = randy + "px";
}

function jumpscare()
{

    var audio = new Audio("party2.mp3");
    aleert();
    document.getElementById("Tasto2").style.display = "block";
    audio.play();
}

function aleert()
{

    alert('Grazie mille, andiamo avanti...');

}
