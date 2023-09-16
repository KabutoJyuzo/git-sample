/* #wachBoxの中にあるボタンの要素を取得する*/
const watchBox = document.getElementById('watchBox');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
/*タイマーの経過時間を管理する変数*/
let elapsedTime = 0;
/*タイマーのIDを管理する変数*/
let timerId;
/*タイマーをストップするための変数*/
let timeToadd = 0;

console.log('watchBox');

/*タイマーを開始する関数*/
function countUp() {
    /*10ミリ秒毎にupdateTime関数を実行する*/
    timerId = setTimeout(function () {
        elapsedTime = Date.now() - startTime + timeToadd;
        updateTime(elapsedTime);
        countUp();
    }, 10);
}
/*タイマーを更新する関数*/
function updateTime(time) {
    /*timeをミリ秒から分、秒、ミリ秒に変換する*/
    const d = new Date(time);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    /*HTML上の表示を時間に合わせて書き換える*/
    document.getElementById('timer').textContent = `${m}:${s}.${ms}`;
}
/*スタートボタンをクリックしたときの関数*/
startBtn.addEventListener('click', function (e) {
    console.log('startBtn');
    /*ボタンの無効化*/
    setButtonStateInitial();
    /*タイマーのスタート*/
    startTime = Date.now();
    countUp();
}
);
/*ストップボタンをクリックしたときの関数*/
stopBtn.addEventListener('click', function (e) {
    console.log('stopBtn');
    /*ボタンの無効化*/
    setButtonStateRunning();
    /*タイマーのストップ*/
    clearTimeout(timerId);
    /*ストップした時の時間を保持する*/
    timeToadd += Date.now() - startTime;

});
/*リセットボタンをクリックしたときの関数*/
resetBtn.addEventListener('click', function (e) {
    console.log('resetBtn');
    /*ボタンの無効化*/
    setButtonStateStopped();
    /*タイマーのリセット*/
    elapsedTime = 0;
    timeToadd = 0;
    updateTime(elapsedTime);

}
);
/*ボタンの無効化をする関数*/
function setButtonStateInitial() {
    /*ボタンの無効化*/
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
}
/*ボタンの有効化をする関数*/
function setButtonStateRunning() {
    /*ボタンの無効化*/
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
}
/*ボタンの無効化をする関数*/
function setButtonStateStopped() {
    /*ボタンの無効化*/
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
} 
