window.addEventListener("deviceorientation", function(event) {
    // 处理event.alpha、event.beta及event.gamma
    alert("alpha" + event.alpha)
    alert("event" + event.beta)
    alert("gamma" + event.gamma)
}, true);