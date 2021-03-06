//登录
function login() {

    var login = document.querySelector('.login-shade');
    document.querySelector('.log-in div a:nth-child(1)').onclick = function (e) {
        login.style.display = 'flex';

    }
    document.querySelector('.login-delect a').onclick = function (e) {
        login.style.display = 'none';
    }

}

//添加class
function addClass(ele, classname) {
    var classArr = ele.className.split(' ');
    var newClassArr = '';
    var mark = true;
    for (var i = 0; i < classArr.length; i++) {
        var newstr = trim(classArr[i]);
        if (newstr === classname) {
            mark = false;
            break;
        } else {
            newClassArr = newClassArr + ' ' + newstr;
        }
    }
    if (mark) {
        newClassArr = newClassArr + ' ' + classname;
        ele.className = trim(newClassArr);
    }
}
//删除class
function removeClass(ele, classname) {
    var classArr = ele.className.split(' ');
    var newStr = '';
    for (var i = 0; i < classArr.length; i++) {
        var singleStr = trim(classArr[i]);
        if (classArr[i] !== classname) {
            newStr = newStr + ' ' + singleStr;
        }
    }
    ele.className = trim(newStr);

}
//判断是否含有指定class
function transform(ele, classname) {
    mark = false;
    var classArr = ele.className.split(' ');
    for (var i = 0; i < classArr.length; i++) {
        var singleStr = trim(classArr[i]);
        if (classArr[i] === classname) {
            mark = true;
            break;
        }
    }
    return mark;
}

// 去掉首尾空白字符
function trim(str) {
    // null、undefined、NaN、0、false、''
    if (!str) {
        return str;
    }
    // 优先使用原生的
    if (str.trim) {
        return str.trim();
    }
    return str.replace(/^\s+|\s+$/g, '');
}


// 登录验证
var phonetest = document.querySelector('.phone-test');
phonetest.onblur = function () {
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
passwordtest.onblur = function () {
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
codetest.onblur = function () {
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
document.querySelector('.cleck-submit').onclick = function () {

    if (phonetest.value === '18230086651' && passwordtest.value === '123456') {
        location.href = 'page/cart.html';
    } else {
        alert('账号或密码输入有误，请重新输入！')
    }

    //数据提交
};



/**
 * 获取相邻元素
 * @param ele 参考物元素
 * @param type 类型，上一个(1)or下一个(0)
 * @return 返回查找到的元素Dom对象，无则返回null
 */
function getNearEle(ele, type) {
    type = type == 1 ? "previousSibling" : "nextSibling";
    var nearEle = ele[type];
    while (nearEle) {
        if (nearEle.nodeType === 1) {
            return nearEle;
        }
        nearEle = nearEle[type];
        if (!nearEle) {
            break;
        }
    }
    return null;
}
/**
 * 获取当前执行对象的上一个元素
 */
function prev() {
    return getNearEle(this, 1);
}
/**
 * 获取当前执行对象的下一个元素
 */
function next() {
    return getNearEle(this, 0);
}
// var ele = document.getElementById("xxx");
// var prevElement = prev.call(ele);
// var nextElement = next.call(ele);

// 商品配送信息动态样式
function shippingInformation() {
    //支付边框样式选择
    document.querySelector('.sd-pay a').onclick = function (e) {
        //判断是否含有指定class
        if (transform(this, 'active')) {
            removeClass(this, 'active');
        } else {
            addClass(this, 'active');
        }

    }
    document.querySelector('.sd-logistics a').onclick = function (e) {
        //判断是否含有指定class
        if (transform(this, 'active')) {
            removeClass(this, 'active');
        } else {
            addClass(this, 'active');
        }

    }

    var invoices = document.querySelectorAll('.sd-invoice .invoice');
    for (var i = 0; i < invoices.length; i++) {

        invoices[i].onclick = function (e) {
            for (var j = 0; j < invoices.length; j++) {
                removeClass(invoices[j], 'active');
            }

            addClass(this, 'active');

        }
    }
}