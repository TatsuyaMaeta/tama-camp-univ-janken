const bgm1 = document.querySelector("#bgm1");
const bgm2 = document.querySelector("#bgm2");

const mangaIndex = {
    btn1: 0,
    btn2: 1,
    btn3: 2,
};
// オブジェクトのindexでの操作方法
// https://takabus.com/tips/102/
const mangaObj = {
    atackOfTitan: {
        title: "進撃の巨人",
        hero: {
            name: "エレン・イェーガー",
            id: "ele",
            imageURL: "./img/atack/elen.jpg",
        },
        heroin: {
            name: "ミカサ",
            id: "mikasa",
            imageURL: "./img/atack/mikasa.jpg",
        },
    },
    evilSlayer: {
        title: "鬼滅の刃",
        hero: {
            name: "竈門炭治郎",
            id: "tnjr",
            imageURL: "./img/kimetsu/tanjiro.jpg",
        },
        heroin: {
            name: "カナヲ",
            id: "knw",
            imageURL: "./img/kimetsu/kanawo.jpg",
        },
    },
    slamDunk: {
        title: "ＳＬＡＭ ＤＵＮＫ",
        hero: {
            name: "桜木花道",
            id: "sak",
            imageURL: "./img/slum/sakuragi.jpg",
        },
        heroin: {
            name: "赤木晴子",
            id: "haruko",
            imageURL: "./img/slum/haruko.jpeg",
        },
    },
};

function addImage(btn) {
    console.log(btn);
    // console.log(mangaTitle[btn]);

    // mangaIndexのValueを変数に格納している
    const mangaNumber = mangaIndex[btn];
    console.log(mangaNumber);
    console.log(Object.values(mangaObj)[mangaNumber].title);
    //mangaNumberの型を調べている
    console.log(typeof mangaNumber);

    // ヒロイン画像がすでにあるかどうかを判別する
    const heroinImage = document.querySelector("#heroin img");
    console.log(heroinImage);

    if (heroinImage == null) {
        console.log("null");
    } else {
        console.log("not null");
        $("#heroin").html("");
        $("#imgs-wrap").css("display", "block");
    }
    $(".res").html(
        `<<` +
            `${Object.values(mangaObj)[mangaNumber].title} 
            ${Object.values(mangaObj)[mangaNumber].hero.name}` +
            `>><br>
            <img id="${Object.values(mangaObj)[mangaNumber].hero.id}" 
            src="${Object.values(mangaObj)[mangaNumber].hero.imageURL}" alt="">`
    );
    $("#btn").css("display", "block");
}

$("#btn1").on("click", function () {
    console.log(this.id);
    // https://takabus.com/tips/102/
    console.log(Object.keys(mangaObj)[0]);
    console.log(Object.values(mangaObj)[0]);
    console.log(Object.values(mangaObj)[0].hero.name);

    addImage(this.id);
    // 上の関数に下の６行を収めてスッキリさせています。
    // $(".res").html(
    //     `<<${mangaObj.atackOfTitan.title} ${mangaObj.atackOfTitan.hero.name}>><br>
    //         <img id="${mangaObj.atackOfTitan.hero.id}"
    //         src="${mangaObj.atackOfTitan.hero.imageURL}" alt="">`
    // );
    // $("#btn").css("display", "block");
});

$("#btn2").on("click", function () {
    addImage(this.id);
    // $(".res").html(
    //     `<<鬼滅の刃 竈門炭治郎>>
    //         <br><img id="tnjr" src="./img/kimetsu/tanjiro.jpg" alt="">`
    // );
    // $("#btn").css("display", "block");
});

$("#btn3").on("click", function () {
    addImage(this.id);
    // $(".res").html(
    //     `<<ＳＬＡＭ ＤＵＮＫ 桜木花道>><br>
    //         <img id="sak" src="./img/slum/sakuragi.jpg" alt="">`
    // );
    // $("#btn").css("display", "block");
});

function addHeroinImage(mangaIndex) {
    // console.log(typeof mangaIndex);
    console.log(Object.values(mangaObj)[mangaIndex].heroin.name);
    const images = `<<${Object.values(mangaObj)[mangaIndex].title} 
                        ${Object.values(mangaObj)[mangaIndex].heroin.name}>><br>
                        <img id="${
                            Object.values(mangaObj)[mangaIndex].heroin.id
                        }" 
                        src="${
                            Object.values(mangaObj)[mangaIndex].heroin.imageURL
                        }"
                        alt="">`;
    $("#heroin").html(images);
    $("#imgs-wrap").css({
        display: "flex",
        "justify-content": "space-around",
    });
}
function reverseImage(flg) {
    if (flg) {
        $("#heroin").removeClass("reverse");
    } else {
        $("#heroin").addClass("reverse");
    }
}
function controlAudio(flg) {
    if (flg) {
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
}

$("#btn").on("click", function () {
    const mainPlayer = document.querySelector("#imgs-wrap .res img");

    const numA = Math.random() * 3 - 1;
    const numB = Math.ceil(numA);
    const num = Math.abs(numB);
    // 下１行の内容は上３行と同じことをやっています
    // const num = Math.abs(Math.ceil(Math.random() * 3 - 1));

    // console.log(num);
    // console.log("mainPlayer.id: " + mainPlayer.id);
    // console.log(Object.values(mangaObj)[num].hero.id);

    addHeroinImage(num);

    const doc = document.querySelector("#heroin img");
    console.log("heroin.id; " + doc.id);
    // ランダムで取得された数値に紐付いたキャラクターの漫画が同じかどうかを判定
    // 変数のjudge_flgにはtrueかfalseが入る
    const judge_flg =
        mainPlayer.id == Object.values(mangaObj)[num].hero.id &&
        doc.id == Object.values(mangaObj)[num].heroin.id;
    console.log(judge_flg);

    reverseImage(judge_flg);

    controlAudio(judge_flg);

    //進撃の巨人(ミカサ)の場合
    // if (num == 0) {
    //     const images = `<<進撃の巨人 ミカサ>><br>
    //         <img id="mikasa" src="./img/atack/mikasa.jpg" alt="">`;
    //     $("#heroin").html(images);
    //     $("#imgs-wrap").css({
    //         display: "flex",
    //         "justify-content": "space-around",
    //     });

    //     const doc = document.querySelector("#heroin img");
    //     const judge_flg =
    //         mainPlayer.id == Object.values(mangaObj)[0].hero.id &&
    //         doc.id == Object.values(mangaObj)[0].heroin.name;

    //     console.log(judge_flg);
    //     console.log("doc.id: " + doc.id);

    //     controlAudio(judge_flg);

    //     if (mainPlayer.id == "ele" && doc.id == "mikasa") {
    //         console.log(true);
    //         bgm1.pause();
    //         bgm1.currentTime = 0;
    //         bgm2.pause();
    //         bgm2.currentTime = 0;

    //         bgm1.play();
    //     } else {
    //         bgm1.pause();
    //         bgm1.currentTime = 0;
    //         bgm2.pause();
    //         bgm2.currentTime = 0;

    //         bgm2.play();
    //     }

    //     //進撃の場合
    // } else if (num == 1) {
    //     const images =
    //         '<<鬼滅の刃 カナヲ>><br><img id="knw" src="./img/kimetsu/kanawo.jpg" alt="">';
    //     $("#heroin").html(images);
    //     $("#imgs-wrap").css({
    //         display: "flex",
    //         "justify-content": "space-around",
    //     });

    //     const doc = document.querySelector("#heroin img");
    //     console.log("doc.id: " + doc.id);
    //     if (mainPlayer.id == "tnjr" && doc.id == "knw") {
    //         console.log(true);
    //         // 正解と不正解を停止
    //         bgm1.pause();
    //         bgm1.currentTime = 0;
    //         bgm2.pause();
    //         bgm2.currentTime = 0;

    //         // 正解を再生
    //         bgm1.play();
    //     } else {
    //         // 正解と不正解を停止
    //         bgm1.pause();
    //         bgm1.currentTime = 0;
    //         bgm2.pause();
    //         bgm2.currentTime = 0;

    //         // 正解を再生
    //         bgm2.play();
    //     }
    // } else {
    //     const images =
    //         '<<スラムダンク 晴子さん>><br><img id="haruko" src="./img/slum/haruko.jpeg" alt="">';
    //     $("#heroin").html(images);
    //     $("#imgs-wrap").css({
    //         display: "flex",
    //         "justify-content": "space-around",
    //     });

    //     const doc = document.querySelector("#heroin img");
    //     console.log("doc.id: " + doc.id);
    //     if (mainPlayer.id == "sak" && doc.id == "haruko") {
    //         console.log(true);
    //         // 正解と不正解を停止
    //         bgm1.pause();
    //         bgm1.currentTime = 0;
    //         bgm2.pause();
    //         bgm2.currentTime = 0;

    //         // 正解を再生
    //         bgm1.play();
    //     } else {
    //         // 正解と不正解を停止
    //         bgm1.pause();
    //         bgm1.currentTime = 0;
    //         bgm2.pause();
    //         bgm2.currentTime = 0;

    //         // 不正解を再生
    //         bgm2.play();
    //     }
    // }
});
