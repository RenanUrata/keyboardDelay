let startTime, endTime, data = []
const latencyHolder = document.getElementById('latencyHolder');

function keyDown(e) {
    e.preventDefault();
    startTime = Date.now()
}
function keyUp(e) {
    endTime = Date.now()
    latency = endTime - startTime
    data.push(latency)
    avg = Math.round(data.reduce((a, b) => a + b, 0) / data.length) || 0
    latencyHolder.textContent = `key: ${e.key === ' ' ? 'Space' : e.key} | now: ${latency} ms | avg: ${avg} ms`;
    console.clear()
    console.table(data)
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);


