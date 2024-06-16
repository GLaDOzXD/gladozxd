document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('atisForm');
    const output = document.getElementById('output');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Fetch values from form fields
        const atisCode = document.getElementById('atisCode').value;
        const icaoCode = document.getElementById('icaoCode').value;
        // Fetch other form fields similarly

        // Simulate fetching METAR and new format
        const metar = 'METAR data'; // Replace with actual METAR data
        const newFormat = 'New format data'; // Replace with actual new format data

        // Display METAR and new format
        output.innerText = `METAR:\n${metar}\n\nNew Format:\n${newFormat}`;
        output.classList.remove('hidden');
    });
});
