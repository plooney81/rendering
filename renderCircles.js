
function renderCircles(circles) {
    let circle = '';
    for (let index = 0; index < circles.length; index++){
        circle += `
            <div style=" width: ${circles[index].radius}px; height: ${circles[index].radius}px; background-color: ${circles[index].color}; border-radius: ${circles[index].radius}px"></div>
        `
    }
    return `
        <div class="text-center mt-5" style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; height:200px">
            ${circle}
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}