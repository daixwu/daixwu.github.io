// window.addEventListener("deviceorientation", function(event) {
//     // 处理event.alpha、event.beta及event.gamma
//     alert("alpha" + event.alpha)
//     alert("event" + event.beta)
//     alert("gamma" + event.gamma)
// }, true);


// window.addEventListener("compassneedscalibration", function(event) {
//     alert('您的罗盘需要校准，请将设备沿数字8方向移动。');
//     event.preventDefault();
// }, true);


window.addEventListener("devicemotion", function(event) {
    // 处理event.acceleration、event.accelerationIncludingGravity、
    // event.rotationRate和event.interval
    alert("第一个" + event.acceleration)
    alert("第二个" + event.accelerationIncludingGravity)
    alert("第三个" + event.rotationRate)
    alert("第四个" + event.event.interval)
}, true);