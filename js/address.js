//  新增地址
document.querySelector('.receive-box a').onclick = function(e) {
    //清空所有数据
    document.querySelector('.md-lf input').value = '';
    document.querySelector('.de-middle input').value = '';
    document.querySelector('.md-ri input').value = '';
    // 新增地址区输入框验证
    var mdlf = document.querySelector('.md-lf .lf-tip');
    var mdri = document.querySelector('.md-ri .lf-tip');
    var sltip = document.querySelector('.selecttip .sl-tip');
    var demiddle = document.querySelector('.de-middle .lf-tip');
    mdlf.innerText = '请填写收货人！';
    mdlf.style.color = 'red';
    mdri.innerText = '请填写手机号！';
    mdri.style.color = 'red';
    sltip.innerText = '请填写完整的所在地区！';
    sltip.style.color = 'red';
    demiddle.innerText = '请填写详细地址！';
    demiddle.style.color = 'red';
    document.querySelector('.address-box').style.display = 'flex';

}
document.querySelector('.aw-top a').onclick = function(e) {
        document.querySelector('.address-box').style.display = 'none';
    }
    //事件动态绑定
eventBinding();

function eventBinding() {
    //地址是否是默认
    var listri = document.querySelectorAll('.list-ri>a:nth-child(1)');
    for (var i = 0; i < listri.length; i++) {

        listri[i].onclick = function(event) {
            eve = event || window.event;
            if (event) {
                // 非 ie
                event.stopPropagation();
            } else {
                // ie
                window.event.cancelBubble = true;
            }
            //判断是否含有指定class
            for (var j = 0; j < listri.length; j++) {
                removeClass(listri[j], 'active');
                listri[j].innerText = '设为默认';
            }
            addClass(this, 'active');
            this.innerText = '默认';
        };
    };
    //列表边框样式
    var listinner = document.querySelectorAll('.list-inner');
    for (var i = 0; i < listinner.length; i++) {
        listinner[i].onclick = function(e) {

            var prevElement = prev.call(this);

            for (var j = 0; j < listinner.length; j++) {
                listinner[j].style.borderBottom = '2px solid #d1d7e3';
                removeClass(listinner[j], 'active');
            }

            if (prevElement !== null) {
                prevElement.style.borderBottom = '2px solid #fff';
            }

            this.style.borderBottom = '2px solid #fdd900';
            addClass(this, 'active');
        }
    }
    // 商品配送信息动态样式
    shippingInformation();
    // 气泡提示删除
    var tooltips = document.querySelectorAll('.tooltips>a:nth-child(1)');
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].onclick = function(e) {
            var clickele = this.parentNode.parentNode.parentNode.parentNode;
            document.querySelector('.receive-list').removeChild(clickele);
        }
    };
    //地址编辑
    var listritwo = document.querySelectorAll('.list-ri>a:nth-child(2)');
    for (var i = 0; i < listritwo.length; i++) {
        listritwo[i].onclick = function(e) {

            // 显示新增地址框
            document.querySelector('.address-box').style.display = 'flex';
            //获取本例所需值
            var people = this.parentNode.parentNode.querySelector('.list-lf .people').innerText;

            var addrss = this.parentNode.parentNode.querySelector('.list-lf .addrss').innerText;
            var phone = this.parentNode.parentNode.querySelector('.list-lf .phone').innerText;
            //将当前需要修改的数据同步到修改框
            document.querySelector('.md-lf input').value = people;
            document.querySelector('.de-middle input').value = addrss;
            document.querySelector('.md-ri input').value = phone;
            // 新增地址区输入框验证 
            var mdlf = document.querySelector('.md-lf .lf-tip');
            var mdri = document.querySelector('.md-ri .lf-tip');
            var demiddle = document.querySelector('.de-middle .lf-tip');
            mdlf.style.color = 'green';
            mdlf.innerText = '请修改联系人！';
            mdri.style.color = 'green';
            mdri.innerText = '请修改联系电话！';
            demiddle.style.color = 'green';
            demiddle.innerText = '请修改详细联系地址！';
            //删除旧地址
            var clickele = this.parentNode.parentNode;
            document.querySelector('.receive-list').removeChild(clickele);
        }

    }
};


//新增地址添加
document.querySelector('.bs-ri a').onclick = function(e) {
    var mdlfinput = document.querySelector('.md-lf input');
    var mdriinput = document.querySelector('.md-ri input');
    var sheng = document.querySelector('#sheng');
    var shengtext = sheng.options[sheng.selectedIndex].text;
    var shi = document.querySelector('#shi');
    var shitext = shi.options[shi.selectedIndex].text;
    var xian = document.querySelector('#xian');
    var xiantext = xian.options[xian.selectedIndex].text;
    var demiddle = document.querySelector('.de-middle input');
    // var aslfinput = document.querySelector('.as-lf input');

    var template = `<div class="list-lf">
                        <P class="people">${mdlfinput.value}</P>
                        <P class="addrss">${shengtext + shitext + xiantext + demiddle.value}</P>
                        <P class="phone">${mdriinput.value}</P>
                    </div>
                    <div class="list-ri">
                        <a href="javascript:void:(0);">设为默认</a>
                        <a href="javascript:void:(0);">编辑</a>
                        <div class="list-delect">
                            <a href="javascript:void:(0);">删除</a>
                            <!-- 提示信息框 -->
                            <div class="tooltips">
                                <a class="yes-delect" href="javascript:void(0);">确定删除</a>
                                <a class="no-delect" href="javascript:void(0);">不删除</a>
                                <i></i>
                            </div>
                        </div>
                    </div>
                    <i></i>`;

    var receivelist = document.querySelector('.receive-list');
    // var listinner = document.querySelectorAll('.list-inner');
    var creatediv = document.createElement('div');
    creatediv.setAttribute('class', 'list-inner');
    creatediv.innerHTML = template;
    receivelist.prepend(creatediv);
    //判断填写是否正确
    var mdlf = document.querySelector('.md-lf .lf-tip');
    var mdri = document.querySelector('.md-ri .lf-tip');
    var sltip = document.querySelector('.selecttip .sl-tip');

    if (mdlf.style.color === 'red') {
        alert('收货人填写不正确，请重新输入！')
    } else if (mdri.style.color === 'red') {
        alert('联系电话填写不正确，请重新输入！')
    } else if (sltip.style.color === 'red') {
        alert('详细地址填写不正确，请重新输入！')
    } else {
        document.querySelector('.address-box').style.display = 'none';
    }
    //事件动态绑定
    eventBinding();
};

//省市区三级联动用到的省市区具体数据
var osheng = document.getElementById("sheng");
var oshi = document.getElementById("shi");
var oxian = document.getElementById("xian");

// < !--创建一个一维数组， 存入省的值-- >
var arr_sheng = ["陕西省", "云南省", "四川省", "山西省"];
//  < !--创建一个二维数组， 最外层每一个元素对应省-- > < !--数组中的第一个元素内又定义一个数组存的市的值-- >
var arr_shi = [
    ["西安市", "咸阳市", "宝鸡市", "渭南市"],
    ["昆明市", "大理市", "丽江市", "西双版纳市"],
    ["乐山市", "成都市", "大同市", "高新市"],
    ["太原市", "屏显市", "乐宝市", "李伟市"]
];
// < !--创建一个三维数组， 最外层每一个元素（ 对应省）-- > < !--数组中定义四个数组（ 对应市）-- > < !--数组中定义两个元素（ 对应县）-- >
var arr_xian = [
    [
        ["西安县1", "西安县2"],
        ["咸阳市1", "咸阳市2"],
        ["宝鸡市1", "宝鸡市2"],
        ["渭南市1", "渭南市2"]
    ],
    [
        ["昆明市1", "昆明市2"],
        ["大理市1", "大理市2"],
        ["丽江市1", "丽江市2"],
        ["西双版纳市1", "西双版纳市2"]
    ],
    [
        ["乐山市1", "乐山市2"],
        ["成都市1", "成都市2"],
        ["大同市1", "大同市2"],
        ["高新市1", "高新市2"]
    ],
    [
        ["太原市1", "太原市2"],
        ["屏显市1", "屏显市2"],
        ["乐宝市1", "乐宝市2"],
        ["李伟市1", "李伟市2"]
    ]
];

var quanju_arr; //创建一个全局对象，用于存储一个中间数组

function input_arr(arr, event) { //封装一个函数，用于向下拉栏中添加元素
    for (var i = 0; i < arr.length; i++) { //下拉栏内的元素来源于数组中的元素，遍历数组
        var option = new Option(arr[i], i); //创建Option对象（这个O要大写），存入值
        event.appendChild(option); //把option添加到event对象的末尾
    }
}

input_arr(arr_sheng, osheng); //调用,给省下拉栏添元素

osheng.onchange = function() { //给下拉栏绑定事件（当下拉栏元素改变时执行）
    oshi.options.length = 1; //当省下拉栏改变时，清空市的下拉栏内元素
    oxian.options.length = 1; //当省下拉栏改变时，清空县的下拉栏内元素
    var index = this.value; //每一个option标签都有一个value值索引，获取索引，用于数组中元素的选择
    var arr_shi_next = arr_shi[index]; //获取当前选择省的市元素并赋给一个数组
    quanju_arr = arr_xian[index]; //获取当前选择省中市的县元素并赋给定义的中间数组
    input_arr(arr_shi_next, oshi); //调用,给市下拉栏添元素
}

oshi.onchange = function() {
        oxian.options.length = 1;
        var index = this.value;
        var arr_xian_next = quanju_arr[index];
        input_arr(arr_xian_next, oxian); //调用,给县下拉栏添元素
    }
    // 新增地址区输入框验证
newAddaddressverify();

//地址别名选择
var riselect = document.querySelectorAll('.ri-select a');
for (var i = 0; i < riselect.length; i++) {

    riselect[i].onclick = function(e) {
        for (var j = 0; j < riselect.length; j++) {
            removeClass(riselect[j], 'active');
        }
        document.querySelector('.as-lf input').value = this.innerText;
        addClass(this, 'active');

    }
}
// 新增地址区输入框验证
function newAddaddressverify() {
    var mdlf = document.querySelector('.md-lf .lf-tip');
    var mdri = document.querySelector('.md-ri .lf-tip');
    var sltip = document.querySelector('.selecttip .sl-tip');
    var demiddle = document.querySelector('.de-middle .lf-tip');

    document.querySelector('.md-lf input').onblur = function() {
        if (this.value === '') {
            mdlf.innerText = '请填写收货人！';
            mdlf.style.color = 'red';


        } else {
            mdlf.innerText = '填写正确！';
            mdlf.style.color = 'green';
        }

    }
    document.querySelector('.md-ri input').onblur = function() {
        if (this.value === '') {
            mdri.innerText = '请填写手机号！';
            mdri.style.color = 'red';



        } else {
            mdri.innerText = '填写正确！';
            mdri.style.color = 'green';
        }

    }

    document.querySelector('#city select:nth-child(3)').onchange = function() {
        if (this.value === '请选择') {
            sltip.innerText = '请填写完整的所在地区！';
            sltip.style.color = 'red';



        } else {
            sltip.innerText = '填写正确！';
            sltip.style.color = 'green';
            var demiddle1 = document.querySelector('.de-middle input');
            var sheng1 = document.querySelector('.shengji');
            var shengtext1 = sheng1.options[sheng.selectedIndex].text;
            var shi1 = document.querySelector('.shiji');
            var shitext1 = shi1.options[shi.selectedIndex].text;
            var xian1 = document.querySelector('.xianji');
            var xiantext1 = xian1.options[xian.selectedIndex].text;

            demiddle1.value = shengtext1 + shitext1 + xiantext1;
        }

    }
    document.querySelector('.de-middle input').onblur = function() {
        if (this.value === '') {
            demiddle.innerText = '请填写详细地址！';
            demiddle.style.color = 'red';

        } else {
            demiddle.innerText = '填写正确！';
            demiddle.style.color = 'green';
        }

    }
}

//显示更多
document.querySelector('.showmore a').onclick = function(e) {
        alert('对不起！已没有更多！')
    }
    //判断是否选择支付方式
document.querySelector('.submit-order a').onclick = function(e) {
    var sdpay = document.querySelector('.sd-pay a')
    if (!transform(sdpay, 'active')) {
        alert('请选择支付方式！')
    } else {
        location.href = '../page/tip.html';
    }
}