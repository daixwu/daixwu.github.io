// window.addEventListener("deviceorientation", function(event) {
//     // 处理event.alpha、event.beta及event.gamma
//     alert("alpha" + event.alpha)
//     alert("event" + event.beta)
//     alert("gamma" + event.gamma)
// }, true);


window.addEventListener("compassneedscalibration", function(event) {
    alert('您的罗盘需要校准，请将设备沿数字8方向移动。');
    event.preventDefault();
}, true);