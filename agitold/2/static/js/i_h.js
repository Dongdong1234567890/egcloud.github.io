console.log('传输模块加载完成');

var pla = 'p1';

function pc(pl) {
    console.log(pla);
    pla = pl
    console.log(pla)
}

function sc() {
    console.log(pla)
    var pl_2 = pla
    console.log(pl_2)
    var t1, t2, t4;
    t1 = document.getElementById('t1');
    t2 = document.getElementById('t2');
    name = t1.value;
    ms = t2.value;
    console.log(name, ms, pl_2)
    const data = {
        n: String(name),
        ms: String(ms),
        place: String(pl_2)
    };
    if (data.n == '') {
        alert('必填标题！')
    } else {
        fetch('/submit_data', {
                method: 'POST', // 使用POST方法
                headers: {
                    'Content-Type': 'application/json' // 设置头部信息，表示发送JSON数据
                },
                body: JSON.stringify(data) // 将数据转换为JSON字符串
            })
            .then(response => response.text())
            .then(text => console.log(text))
            .catch(error => console.error('Error:', error));
        window.location.replace('/m_space');
    }
}