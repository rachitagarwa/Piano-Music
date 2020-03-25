for (var i = 0; i < document.querySelectorAll(".piano").length; i++) {
    document.querySelectorAll(".piano")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var Cs = new Audio("audio/Cs_chord.mp3");
            Cs.play();
            break;

        case "e":
            var Ds = new Audio("audio/Ds_chord.mp3");
            Ds.play();
            break;

        case "t":
            var Fs = new Audio("audio/Fs_chord.mp3");
            Fs.play();
            break;

        case "y":
            var Gs = new Audio("audio/Gs_chord.mp3");
            Gs.play();
            break;

        case "u":
            var As = new Audio("audio/As_chord.mp3");
            As.play();
            break;

        case "o":
            var HighCs= new Audio("audio/HighCs_chord.mp3");
            HighCs.play();
            break;

        case "a":
            var C = new Audio("audio/C_chord.mp3");
            C.play();
            break;

        case "s":
            var D = new Audio("audio/D_chord.mp3");
            D.play();
            break;

        case "d":
            var E = new Audio("audio/E_chord.mp3");
            E.play();
            break;

        case "f":
            var F = new Audio("audio/F_chord.mp3");
            F.play();
            break;

        case "g":
            var G = new Audio("audio/G_chord.mp3");
            G.play();
            break;

        case "h":
            var H = new Audio("audio/A_chord.mp3");
            H.play();
            break;

        case "j":
            var B = new Audio("audio/B_chord.mp3");
            B.play();
            break;

        case "k":
            var C = new Audio("audio/HighC_chord.mp3");
            C.play();
            break;


    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}