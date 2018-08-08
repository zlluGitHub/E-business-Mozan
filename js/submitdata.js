var interval = 59;
times = setInterval(function() {
    interval--;
    if (interval <= -1) {
        // timeContent.innerHTML = '请刷新！';
        clearInterval(times);
        document.querySelector('.pay-box').style.display = 'flex';
    } else {
        if (interval < 10) {
            document.querySelector('.moddle-title span').innerText = `${'0' + interval}`;
        } else {
            document.querySelector('.moddle-title span').innerText = interval;
        };
    }
}, 1000);