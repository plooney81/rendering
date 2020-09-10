
function renderNametags(nametags) {
    let names = '';
    for (let index = 0; index < nametags.length; index++){
        names += `
            <div class="${nametags[index]}" style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 10px;">
                <h7 style="color: white; background-color: blue; height: 35px; width: 200px; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">Hello my name is:</h7>
                <p style="width:200px; height: 50px; color: black; border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black;">${nametags[index]}</p>
            </div>
        `
    }
    return `
        <div class="text-center mt-5">
            ${names}
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}