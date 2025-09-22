greet();

function greet() {
    let username = prompt("Please enter your name:");

    document.getElementById('username').innerText = username;
}

function validateForm() {
    let name = document.getElementById('name-input').value;

    if (name === "") {
        alert("Name must be filled out");
    } else {
        alert("Thank you, " + name + "!");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const resultsFieldset = document.getElementById('results');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const nama = document.getElementById('nama').value;
        const tanggal = document.getElementById('tanggal').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const pesan = document.getElementById('pesan').value;

        let resultText = `
            Nama: ${nama}
            Tanggal Lahir: ${tanggal}
            Jenis Kelamin: ${gender ? gender.id : 'Tidak dipilih'}
            Pesan: ${pesan}
        `;

        resultsFieldset.innerHTML = `
            <legend>
                <h3>Results</h3>
            </legend>
            <pre>${resultText}</pre>
        `;
    });
});