//购物车商品统计
var numreduce = document.querySelectorAll('.list-num a:nth-child(1)');
var numadd = document.querySelectorAll('.list-num a:nth-child(3)');
var numfill = document.querySelectorAll('.list-num span:nth-child(2)');
var listprice = document.querySelectorAll('.list-price');
var listsum = document.querySelectorAll('.list-sum');
for (var i = 0; i < numreduce.length; i++) {
    changeSum(numreduce[i], numadd[i], numfill[i], listprice[i], listsum[i]);
}

// 登录
login();


//全选判断
var listallinput = document.querySelectorAll('.list-input input');
var selectallinputtop = document.querySelector('.select-all input');
var selectallinputbottom = document.querySelector('.select-all-ipt input');
selectallinputtop.onchange = function(e) {
    var allchange = this.checked;
    for (var i = 0; i < listallinput.length; i++) {
        listallinput[i].checked = allchange;
    }
    selectallinputbottom.checked = allchange;
    selectallsum();
    allListprice();
};
selectallinputbottom.onchange = function(e) {
    var allchange = this.checked;
    for (var i = 0; i < listallinput.length; i++) {
        listallinput[i].checked = allchange;
    }
    selectallinputtop.checked = allchange;
    selectallsum();
    allListprice();
};

for (var i = 0; i < listallinput.length; i++) {
    listallinput[i].onchange = function(e) {
        var listallinput = document.querySelectorAll('.list-input input');
        var mark = true;
        for (var j = 0; j < listallinput.length; j++) {
            if (!listallinput[j].checked) {
                mark = false;
                break;
            }
        }
        if (mark) {
            selectallinputtop.checked = true;
            selectallinputbottom.checked = true;
        } else {
            selectallinputtop.checked = false;
            selectallinputbottom.checked = false;
        }
        selectallsum();
        allListprice();
    }
}

//单个商品删除操作
var tooltips = document.querySelectorAll('.tooltips a:nth-child(1)');
for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].onclick = function(e) {
        var delectmark = confirm('您确定要删除此商品吗？');
        if (delectmark) {
            var delecteleparent = this.parentNode.parentNode.parentNode.parentNode;
            var delectelechild = this.parentNode.parentNode.parentNode;
            delecteleparent.removeChild(delectelechild);
            clearallgoods();
        }

    }
}

//多个商品删除操作
document.querySelector('.bottom-delect a').onclick = function(e) {
        var listallinput = document.querySelectorAll('.list-input input');
        if (listallinput.length >= 0) {
            var delectmark = confirm('您确定要删除所选商品吗？');
            if (delectmark) {
                for (let i = 0; i < listallinput.length; i++) {
                    if (listallinput[i].checked) {
                        var delecteleparent = listallinput[i].parentNode.parentNode.parentNode;
                        var delectelechild = listallinput[i].parentNode.parentNode;
                        delecteleparent.removeChild(delectelechild);
                        clearallgoods();

                    };

                };
            }

        } else {
            confirm('请选择您要删除的商品！')
        };


    }
    // 清空购物车
function clearallgoods() {
    //判断购物车是否为空
    var listallinputs = document.querySelectorAll('.list-input input');
    if (listallinputs.length <= 0) {
        var sectionbox = document.querySelector('.section-box');
        var cartcontent = document.querySelector('.cart-content');
        var cartbottom = document.querySelector('.cart-bottom');
        sectionbox.removeChild(cartbottom);
        cartcontent.innerHTML = '<div class="box-wukong"><img src="../images/wukong_03.jpg" alt=""></div>';
        // window.location.href = '../page/cartempty.html';
    };
}



//单个购买数量
function changeSum(reduce, add, fill, listprice, listsum) {

    var sum = 1;
    var singleprice = 0;
    reduce.onclick = function(e) {
        if (sum <= 0) {
            alert('不能小于零！')
        } else {
            sum--;
            fill.innerText = sum;
        }
        singleprice = listprice.innerText.replace('￥', '') * 1;
        listsum.innerText = '￥' + (sum * singleprice).toFixed(2);
        allListprice();
        selectallsum();
        getallnum();
    }
    add.onclick = function(e) {
        sum++;
        fill.innerText = sum;
        //单个商品总价
        singleprice = listprice.innerText.replace('￥', '') * 1;
        listsum.innerText = '￥' + (sum * singleprice).toFixed(2);
        allListprice();
        selectallsum();
        getallnum();
    }
}
//所有商品总个数
getallnum();

function getallnum() {
    var getnum = document.querySelectorAll('.list-num span');
    var allsum = 0;
    for (var i = 0; i < getnum.length; i++) {
        allsum = allsum + getnum[i].innerText * 1;
    }
    document.querySelector('.allunm').innerText = allsum;
    document.querySelector('.top-left span strong').innerText = allsum;
}
//选中的商品总个数
selectallsum();

function selectallsum() {
    var listallinput = document.querySelectorAll('.list-input input');
    var selectallnum = 0;
    for (var i = 0; i < listallinput.length; i++) {
        if (listallinput[i].checked) {
            selectallnum = selectallnum + listallinput[i].parentNode.parentNode.querySelector('.list-num span').innerText * 1;

        };

    };
    document.querySelector('.selectsum').innerText = selectallnum;
}

//购物车中所有商品总价
allListprice();

function allListprice() {
    var listallinput = document.querySelectorAll('.list-input input');
    var alllistsum = document.querySelectorAll('.list-sum');
    var allprice = 0;
    for (var i = 0; i < alllistsum.length; i++) {
        if (listallinput[i].checked) {
            allprice = allprice + alllistsum[i].innerText.replace('￥', '') * 1;
        }
    }
    document.querySelector('.right-price').innerText = '￥' + allprice.toFixed(2);
}
//去结算时判断是否选择商品
document.querySelector('.bottom-right a').onclick = function(e) {
    marknum = false;
    var listallinput = document.querySelectorAll('.list-input input');
    for (var i = 0; i < listallinput.length; i++) {
        // console.log(listallinput);

        if (listallinput[i].checked) {
            marknum = true;
        }
    }
    if (marknum) {
        location.href = '../page/fillorder.html';
    } else {
        alert('请选择您要购买的商品！');

    }
}