const bgm1 = document.querySelector("#bgm1");
const bgm2 = document.querySelector("#bgm2");
const bgm3 = document.querySelector("#bgm3");
const bgm4 = document.querySelector("#bgm4");

$("#btn1").on("click", function () {
    $(".res").html('<img id="ele" src="./img/atack/elen.jpg" alt="">');
    $("#btn").css("display", "block");
});

$("#btn2").on("click", function () {
    $(".res").html('<img id="ita" src="./img/juju/itadori.png" alt="">');
    $("#btn").css("display", "block");
});

$("#btn3").on("click", function () {
    $(".res").html('<img id="sak" src="./img/slum/sakuragi.jpg" alt="">');
    $("#btn").css("display", "block");
});

$("#btn").on("click", function () {
    const mainPlayer = document.querySelector("#imgs-wrap .res img");
    console.log("mainPlayer.id: " + mainPlayer.id);
    const num = Math.ceil(Math.random() * 3);
    console.log(num);

    //進撃の巨人(ミカサ)の場合
    if (num == 1) {
        const images =
            '<img id="img-mikasa" src="./img/atack/mikasa.jpg" alt="">';
        $("#heroin").html(images);
        $("#imgs-wrap").css({
            display: "flex",
            "justify-content": "space-around",
        });

        const doc = document.querySelector("#heroin img");
        console.log("doc.id: " + doc.id);
        if (mainPlayer.id == "ele" && doc.id == "img-mikasa") {
            console.log(true);
            bgm4.pause();
            bgm4.currentTime = 0;

            bgm1.play();
        } else {
            console.log("Not ele");
            bgm1.pause();
            bgm1.currentTime = 0;
            
            bgm4.play();
        }

        //呪術廻戦の場合
    } else if (num == 2) {
        const images = '<img id="img-rika" src="./img/juju/rika.jpg" alt="">';
        $("#heroin").html(images);
        $("#imgs-wrap").css({
            display: "flex",
            "justify-content": "space-around",
        });

        const doc = document.querySelector("#heroin img");
        console.log("doc.id: " + doc.id);
        if (mainPlayer.id == "ita" && doc.id == "img-rika") {
            console.log(true);
            bgm4.pause();
            bgm4.currentTime = 0;

            bgm2.play();
        } else {
            bgm2.pause();
            bgm2.currentTime = 0;

            bgm4.play();
        }
    } else {
        const images =
            '<img id="img-haruko" src="./img/slum/haruko.jpeg" alt="">';
        $("#heroin").html(images);
        $("#imgs-wrap").css({
            display: "flex",
            "justify-content": "space-around",
        });

        const doc = document.querySelector("#heroin img");
        console.log("doc.id: " + doc.id);
        if (mainPlayer.id == "sak" && doc.id == "img-haruko") {
            // bgm1.stop();
            // bgm2.stop();
            // bgm4.stop();
            bgm4.pause();
            bgm4.currentTime = 0;

            bgm3.play();
        } else {
            bgm3.pause();
            bgm3.currentTime = 0;

            bgm4.play();
        }
    }
});

audioArray = {
    bgm1: "./audio/at.mp3",
    bgm2: "./audio/jk.mp3",
    bgm3: "./audio/sd.mp3",
    bgm4: "./audio/notgood.mp3",
};

const audio = function (audioFile) {
    if (audioFile === audioArray.bgm1) {
        console.log(true);
    }
    const bgm1 = new Audio("op.ogg");

    btn.addEventListener("click", () => {
        bgm1.play();
    });
};
