window.addEventListener("deviceorientation", function(event) {
    // 处理event.alpha、event.beta及event.gamma
    alert(event.alpha)
    alert(event.beta)
    alert(event.gamma)
}, true);