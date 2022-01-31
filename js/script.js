const bgm1 = document.querySelector("#bgm1");
const bgm2 = document.querySelector("#bgm2");

$("#btn1").on("click", function () {
    $(".res").html(
        `<<進撃の巨人 エレン・イェーガー>><br>
            <img id="ele" src="./img/atack/elen.jpg" alt="">`
    );
    $("#btn").css("display", "block");
});

$("#btn2").on("click", function () {
    $(".res").html(
        `<<鬼滅の刃 竈門炭治郎>>
            <br><img id="ita" src="./img/kimetsu/tanjiro.jpg" alt="">`
    );
    $("#btn").css("display", "block");
});

$("#btn3").on("click", function () {
    $(".res").html(
        `<<ＳＬＡＭ ＤＵＮＫ 桜木花道>><br>
            <img id="sak" src="./img/slum/sakuragi.jpg" alt="">`
    );
    $("#btn").css("display", "block");
});

$("#btn").on("click", function () {
    const mainPlayer = document.querySelector("#imgs-wrap .res img");
    console.log("mainPlayer.id: " + mainPlayer.id);
    const num = Math.ceil(Math.random() * 3);
    console.log(num);

    //進撃の巨人(ミカサ)の場合
    if (num == 1) {
        const images = `<<進撃の巨人 ミカサ>><br>
            <img id="img-mikasa" src="./img/atack/mikasa.jpg" alt="">`;
        $("#heroin").html(images);
        $("#imgs-wrap").css({
            display: "flex",
            "justify-content": "space-around",
        });

        const doc = document.querySelector("#heroin img");
        console.log("doc.id: " + doc.id);
        if (mainPlayer.id == "ele" && doc.id == "img-mikasa") {
            console.log(true);
            bgm1.pause();
            bgm1.currentTime = 0;
            bgm2.pause();
            bgm2.currentTime = 0;

            bgm1.play();
        } else {
            bgm1.pause();
            bgm1.currentTime = 0;
            bgm2.pause();
            bgm2.currentTime = 0;

            bgm2.play();
        }

        //進撃の場合
    } else if (num == 2) {
        const images =
            '<<鬼滅の刃 カナヲ>><br><img id="img-knw" src="./img/kimetsu/kanawo.jpg" alt="">';
        $("#heroin").html(images);
        $("#imgs-wrap").css({
            display: "flex",
            "justify-content": "space-around",
        });

        const doc = document.querySelector("#heroin img");
        console.log("doc.id: " + doc.id);
        if (mainPlayer.id == "ita" && doc.id == "img-knw") {
            console.log(true);
            // 正解と不正解を停止
            bgm1.pause();
            bgm1.currentTime = 0;
            bgm2.pause();
            bgm2.currentTime = 0;

            // 正解を再生
            bgm1.play();
        } else {
            // 正解と不正解を停止
            bgm1.pause();
            bgm1.currentTime = 0;
            bgm2.pause();
            bgm2.currentTime = 0;

            // 正解を再生
            bgm2.play();
        }
    } else {
        const images =
            '<<スラムダンク 晴子さん>><br><img id="img-haruko" src="./img/slum/haruko.jpeg" alt="">';
        $("#heroin").html(images);
        $("#imgs-wrap").css({
            display: "flex",
            "justify-content": "space-around",
        });

        const doc = document.querySelector("#heroin img");
        console.log("doc.id: " + doc.id);
        if (mainPlayer.id == "sak" && doc.id == "img-haruko") {
            console.log(true);
            // 正解と不正解を停止
            bgm1.pause();
            bgm1.currentTime = 0;
            bgm2.pause();
            bgm2.currentTime = 0;

            // 正解を再生
            bgm1.play();
        } else {
            // 正解と不正解を停止
            bgm1.pause();
            bgm1.currentTime = 0;
            bgm2.pause();
            bgm2.currentTime = 0;

            // 不正解を再生
            bgm2.play();
        }
    }
});
