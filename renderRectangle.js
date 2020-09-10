
function renderRectangle(rectangle) {
    return `
        <div class="text-center mt-5" style="display: flex; justify-content: center;">
            <div style="width:${rectangle.width}px; height:${rectangle.height}px; background-color:${rectangle.color};"></div>
        </div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}