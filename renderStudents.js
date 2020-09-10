
function renderStudents(students) {
    let names = '';
        for (let index = 0; index < students.length; index++){
            present = '';
            color = '';
            if (students[index].isPresent){
                present = 'Present';
                color = 'green';
            } else {
                present = 'Absent';
                color = 'red';
            }
            names += `
            <div class="d-flex flex-column border border-dark" style="background-color: ${color}">
                <div class="h6">${students[index].name}</div>
                <div class="h7">${present}</div>
            </div>
            `
        }
    
    return `
        <div class="text-center mt-5" style="width: 500px; height: 500px;">
            <div class="rollCall" style="width: 100px; height: 100px;">
                <p class="h1">Roll Call!</p>
                ${names}
            </div>
        </div>
    `;
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ];

    content.innerHTML = renderStudents(studentsAbstraction);
};