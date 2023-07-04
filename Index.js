


function move()
{
    var rand = Math.floor(Math.random()*1280);
    console.log(rand);
    document.getElementById("CheSchifo").style.marginLeft = rand + "px";
    var randy = Math.floor(Math.random()*300);
    document.getElementById("CheSchifo").style.marginTop = randy + "px";
}

function jumpscare()
{

    var audio = new Audio("party2.mp3");
    aleert();
    document.getElementById("Droga").style.display = "block";
    audio.play();
}

function aleert()
{

    alert('Grazie mille, andiamo avanti...');

}
