//轮播初始化

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});


// 登录验证
var phonetest = document.querySelector('.phone-test');
phonetest.onblur = function() {
    var getvalue = this.value;
    var regex = /^1(3[0-9]|5[012345789]|6[6]|7[135678]|8[0-9]|9[89])[0-9]{8}$/;
    if (!regex.test(getvalue)) {
        this.value = '';
        this.setAttribute('placeholder', '请您填写正确的手机号！');
        addClass(this, 'active');
        addClass(this, 'pladerecolo');
    } else {
        removeClass(this, 'active');
        removeClass(this, 'pladerecolo');
    };
}

var passwordtest = document.querySelector('.password-test');
passwordtest.onblur = function() {
    var getvalue = this.value;
    var regex = /[0-9]+/;
    if (!regex.test(getvalue)) {
        this.value = '';
        this.setAttribute('placeholder', '请您填写密码！');
        addClass(this, 'active');
        addClass(this, 'pladerecolo');
    } else {
        removeClass(this, 'active');
        removeClass(this, 'pladerecolo');
    }

}

var codetest = document.querySelector('.code-test');
codetest.onblur = function() {
        var getvalue = this.value;
        var regex = /HvdHN/;
        if (!regex.test(getvalue)) {
            this.value = '';
            this.setAttribute('placeholder', '请填写正确的验证码！');
            addClass(this, 'active');
            addClass(this, 'pladerecolo');
        } else {
            removeClass(this, 'active');
            removeClass(this, 'pladerecolo');
        }

    }
    //判断是否登录
document.querySelector('.cleck-submit').onclick = function() {

    if (phonetest.value === '18230086651' && passwordtest.value === '123456') {
        location.href = 'page/cart.html';
    } else {
        alert('账号或密码输入有误，请重新输入！')
    }

    //数据提交
};


//样式变化
var stylea = document.querySelectorAll('.style a');
for (var i = 0; i < stylea.length; i++) {
    stylea[i].onclick = function(e) {
        for (var j = 0; j < stylea.length; j++) {
            removeClass(stylea[j], 'active');
        };
        addClass(this, 'active');
    };
};

var sizea = document.querySelectorAll('.size a');
for (var i = 0; i < sizea.length; i++) {
    sizea[i].onclick = function(e) {
        for (var j = 0; j < sizea.length; j++) {
            removeClass(sizea[j], 'active');
        };
        addClass(this, 'active');
    };
};

//购买数量
var reduce = document.querySelector('.reduce');
var add = document.querySelector('.add');
var fill = document.querySelector('.fill');
var selectstrong = document.querySelector('.select strong');
var selectspan = document.querySelector('.select span');
changesingleSum(reduce, add, fill);

function changesingleSum(reduce, add, fill) {

    var sum = 1;
    var singleprice = 0;
    reduce.onclick = function(e) {
        if (sum <= 0) {
            alert('不能小于零！')
        } else {
            sum--;

            fill.innerText = sum;
            selectspan.innerText = `全款金额:￥${selectstrong.innerText.replace('￥', '') * sum.toFixed()}`;
        };
    };
    add.onclick = function(e) {
        sum++;
        fill.innerText = sum;
        var allprice =
            selectspan.innerText = `全款金额:￥${selectstrong.innerText.replace('￥', '') * sum.toFixed()}`;
    };
};

// 登录
login();

// 倒计时
Countdown(11, 23, 42, 59);

function Countdown(targetDateTime, targetHoursTime, targetMinutesTime, targetSecondsTime) {

    var dates = document.querySelector('.dates');
    var houers = document.querySelector('.houers');
    var minutes = document.querySelector('.minutes');
    var secouds = document.querySelector('.secouds');
    var timeContent = document.querySelector('.time-content');
    Timekeeping();
    var Time = setInterval(Timekeeping, 1000);

    function Timekeeping() {
        var date = new Date();
        var nowDateTime = date.getDate();
        var nowHoursTime = date.getHours();
        var nowMinutesTime = date.getMinutes();
        var nowSecondsTime = date.getSeconds();
        var getDateTime = targetDateTime - nowDateTime;
        var getHoursTime = targetHoursTime - nowHoursTime;
        var getMinutesTime = targetMinutesTime - nowMinutesTime;
        var getSecondsTime = targetSecondsTime - nowSecondsTime;
        if (getHoursTime === 0 && getMinutesTime === -1 && getSecondsTime === 59) {
            timeContent.innerHTML = '时间到！';
            clearInterval(Time);
        };

        if (getDateTime < 10) {

            dates.innerText = `${'0' + getDateTime}`;
        } else {
            dates.innerText = getDateTime;
        };
        if (getHoursTime < 10) {

            houers.innerText = `${'0' + getHoursTime}`;
        } else {
            houers.innerText = getHoursTime;
        };
        if (getMinutesTime < 10) {
            minutes.innerText = `${'0' + getMinutesTime}`;
        } else {
            minutes.innerText = getMinutesTime;
        };
        if (getSecondsTime < 10) {
            secouds.innerText = `${'0' + getSecondsTime}`;
        } else {
            secouds.innerText = getSecondsTime;
        };
    };
};
document.querySelector('.sb-line').onclick = function(e) {
    var marklogin = confirm('请您登录后添加！');
    if (marklogin) {
        document.querySelector('.login-shade').style.display = 'flex';
        // location.href = 'page/addcarte.html';
    }
}
document.querySelector('.share').onclick = function(e) {
    var marklogin = confirm('请您登录后添加！');
    if (marklogin) {
        document.querySelector('.login-shade').style.display = 'flex';
        // location.href = 'page/addcarte.html';
    }
}