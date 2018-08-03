//登录
function login() {

    var login = document.querySelector('.login-shade');
    document.querySelector('.log-in div a:nth-child(1)').onclick = function(e) {
        login.style.display = 'flex';
    }
    document.querySelector('.login-delect a').onclick = function(e) {
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