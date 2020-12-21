let text = `/* 画一只哆啦A梦~ */

/* 开始了~*/
.D-fly {
    width: 20px;
    height: 10px;
    background: rgb(252, 193, 54);
    border: 2px solid #000;
    border-radius: 100px 100px 0 0;
}

.D-fly:before {
    width: 7px;
    height: 12px;
    border: 2px solid #000;
    top: 8px;
    left: 5px;
    border-top: 0;
    background: rgb(252, 193, 54);
}

/* 画个头~ */
.D-head {
    width: 200px;
    height: 200px;
    border: 2px solid #000;
    background: rgb(53, 161, 201);
    top: 19px;
    border-radius: 50%;
}

.D-head::before {
    width: 174px;
    height: 174px;
    background: #fff;
    border: 2px solid #000;
    left: 11px;
    top: 11px;
    border-radius: 50%;
    overflow: hidden;
}

/* 画眼睛~ */
.D-eye {
    width: 48px;
    height: 48px;
    background: #fff;
    border: 1px solid #000;
    border-radius: 50%;
    top: 14px;
    overflow: hidden;
}

.D-eye.left {
    right: 50%;
}

.D-eye.right {
    left: 50%;
}

.D-eye.left::after {
    width: 15px;
    height: 24px;
    border: 6px solid #000;
    border-top-width: 9px;
    border-bottom-width: 9px;
    border-radius: 100%;
    right: 5px;
    bottom: 8px;
}

.D-eye.right::after {
    width: 22px;
    height: 22px;
    border: 3px solid #000;
    border-radius: 50%;
    bottom: -13px;
    left: 12px;
}

/* 画鼻子~ */
.D-nose {
    width: 34px;
    height: 34px;
    background: rgb(177, 23, 53);
    border: 1px solid #000;
    top: 54px;
    border-radius: 50%;
}

.D-nose::after {
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    top: 7px;
    left: 6px;
}

.D-nose::before {
    width: 1px;
    height: 18px;
    border: 1px solid #000;
    left: 15px;
    top: 33px;
}

/* 画胡须~ */
.D-beard {
    width: 61px;
    height: 1px;
    border: 1px solid #000;
    top: 80px;
}

.D-beard.left {
    right: 61%;
}

.D-beard.right {
    left: 61%;
}

.D-beard.left::before,
.D-beard.left::after,
.D-beard.right::after,
.D-beard.right::before {
    width: 61px;
    height: 1px;
    border: 1px solid #000;
    top: -20px;
}

.D-beard.left::after,
.D-beard.right::after {
    top: 13px;
}

.D-beard.left::before {
    transform: rotate(20deg)
}

.D-beard.left::after {
    transform: rotate(-15deg)
}

.D-beard.right::before {
    transform: rotate(-20deg)
}

.D-beard.right::after {
    transform: rotate(15deg)
}

/* 画个大嘴~ */
.D-lip {
    width: 140px;
    height: 70px;
    background: rgb(177, 22, 53);
    border-radius: 0 0 70px 70px;
    top: 105px;
    overflow: hidden;
}

.D-lip::before,
.D-lip::after {
    width: 50px;
    height: 100px;
    background: rgb(202, 37, 51);
    border-radius: 25px 25px;
    top: 25px;
}

.D-lip::before {
    left: 40%;
    transform: rotate(35deg);
}

.D-lip::after {
    left: 25%;
    transform: rotate(-35deg);
}

/* 来个围巾~ */
.D-scarf {
    width: 116px;
    height: 102px;
    background: rgb(161, 23, 46);
    border-radius: 41%;
    top: 119px;
}

/* 配个铃铛~ */
.D-bell {
    width: 34px;
    height: 34px;
    background: rgb(241, 150, 41);
    border: 2px solid #000;
    border-radius: 50%;
    top: 215px;
}

.D-bell::after {
    width: 8px;
    height: 8px;
    background: #000;
    border-radius: 50%;
    bottom: 7px;
    left: 11px;
}

.D-bell:before {
    border: 1px solid #000;
    border-right-width: 13px;
    bottom: 4px;
    left: 8px;
}

/* 大肚子~ */
.D-belly {
    width: 130px;
    height: 120px;
    background: rgb(53, 161, 201);
    border-radius: 60%;
    border: 2px solid #000;
    top: 160px;
}

.D-belly::before {
    width: 80px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    top: 50px;
    left: 50%;
    transform: translateX(-50%)
}

.D-belly::after {
    width: 56px;
    height: 28px;
    border: 2px solid #000;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 56px 56px;
}

/* 画胳膊~ */
.D-arm {
    width: 100px;
    height: 60px;
    background: rgb(53, 161, 201);
    border: 2px solid #000;
    top: 140px;
    border-radius: 50%;
}

.D-arm.right {
    right: 5px;
    transform: rotate(-50deg);
}

.D-arm.left {
    left: 5px;
    transform: rotate(50deg);
}

.D-arm.left::after,
.D-arm.right::after {
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    border: 2px solid #000;
    top: 5px;
}

.D-arm.left::after {
    left: -10px
}

.D-arm.right::after {
    right: -10px;
}

/* 画脚~ */ 
.D-foot {
    width: 45px;
    height: 65px;
    background: #fff;
    border: 2px solid #000;
    top: 242px;
    border-radius: 46%;
}

.D-foot.left {
    right: 50%;
}

.D-foot.right {
    left: 50%;
}

/* 竹蜻蜓~ */
.D-move.center {
    width: 80px;
    height: 4px;
    background: rgba(0, 0, 0, .5);
    top: 10px;
    margin-left: -40px;
    animation: fly .1s infinite;
}

/* 飞起来~ */ 
.D-wrapper {
    animation: move .6s ease infinite alternate-reverse;
}

/* 结束~ */

`

let duration = 40,
    timer = null,
    rest = "",
    pre = '',
btnControl = null;

btnControl = BtnControl();
addCode(pre, text, btnControl.finish);



btn.onclick = (e) => {
    switch (e.target) {
        case lower:
            duration = 80;
            break;
        case faster:
            duration = 1;
            break;
        case retry:
            duration = 40;
            btnControl.recover();
            timer && clearTimeout(timer);
            addCode("", text);
            break;
        case change:
            if (change.classList.contains("pause")) {
                timer && clearTimeout(timer);
                change.innerText = 'Go';
                change.classList.remove('pause')
            } else {
                pre = code.innerHTML;
                rest = text.slice(pre.length, text.length)
                addCode(pre, rest, btnControl.finish);
                change.innerText = 'Pause';
                change.classList.add('pause')
            }
            break;
        case skip:
            clearTimeout(timer);
            btnControl.finish();
            code.innerHTML = text;
            styleTag.innerHTML = text;
            code.scrollTop = code.scrollHeight;
            break;
        
    }
}



function BtnControl() {
    let btnModeDom = btn.querySelectorAll(".mode");
    return {
        finish: function () {
            code.scrollTop = code.scrollHeight;//解决代码显示滚动条问题
            btnModeDom.forEach((item) => {
                item.disabled = true
            })
        },
        recover() {
            btnModeDom.forEach((item) => {
                item.disabled = false
            })
        }
    }
};

function addCode(pre, str, fn) {
    let i = 0;
    timer = setTimeout(function run() {
        i++;
        code.innerHTML = pre + str.slice(0, i);
        styleTag.innerHTML = pre + str.slice(0, i);
        code.scrollTop = code.scrollHeight;
        if (i < str.length) {
            timer = setTimeout(run, duration)
        } else {
            fn && fn.call()
        }
    }, duration)
}
