$(document).ready(function () {
    $("body").ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.005
    });
    jQuery('a[href^="#"]').lightweightScrollTo({
        offset: 40
    });
    drawPercentage("skill1", "grey", "#d9534f");
    drawPercentage("skill2", "grey", "#5cb85c");
    drawPercentage("skill3", "grey", "#f0ad4e");
    drawPercentage("skill4", "grey", "#5bc0de");
    drawPercentage("skill5", "grey", "#337ab7");
});

function drawPercentage(id, color1, color2) {
    var elment = document.getElementById(id);
    var options = {
        percent: elment.getAttribute('data-percent') || 25,
        size: elment.getAttribute('data-size') || 150,
        lineWidth: elment.getAttribute('data-line') || 15,
        rotate: elment.getAttribute('data-rotate') || 0
    };

    var canvas = document.createElement('canvas');
    var span = document.createElement('span');
    span.textContent = options.percent;

    var ctx = canvas.getContext('2d');
    canvas.width = canvas.height = options.size;

    elment.appendChild(span);
    elment.appendChild(canvas);

    ctx.translate(options.size / 2, options.size / 2); // change center
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

    var radius = (options.size - options.lineWidth) / 2;

    var drawCircle = function (color, lineWidth, percent) {
        percent = Math.min(Math.max(0, percent || 1), 1);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round'; // butt, round or square
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    };

    drawCircle(color1, options.lineWidth, 100 / 100);
    drawCircle(color2, options.lineWidth, options.percent / 100);
}