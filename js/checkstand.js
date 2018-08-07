// 支付提示弹出框
document.querySelector('.pay-top a').onclick = function(e) {
        document.querySelector('.pay-box').style.display = 'none';

    }
    // 支付方式选择
var aplyway = document.querySelectorAll('.aplyway a');
for (var i = 0; i < aplyway.length; i++) {
    aplyway[i].onclick = function(e) {
        for (var j = 0; j < aplyway.length; j++) {

            removeClass(aplyway[j], 'active');

        }
        addClass(this, 'active');
    }

}
//判断以何种方式付款
document.querySelector('.aplysubmit a').onclick = function(e) {
    for (var i = 0; i < aplyway.length; i++) {
        if (transform(aplyway[i], 'active')) {
            marknum = i;
        }
    }
    if (marknum === 0) {
        location.href = '../page/wechat.html';
    } else if (marknum === 1) {
        // alert('ewr')
        document.querySelector('.pay-box').style.display = 'flex';
    }
}