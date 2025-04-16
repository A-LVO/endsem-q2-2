// script.js
document.addEventListener('DOMContentLoaded', () => {
    const courseContainer = document.getElementById('courseContainer');
    const addCourseBtn = document.getElementById('addCourse');
    const calculateBtn = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');

    // Add new course row
    addCourseBtn.addEventListener('click', () => {
        const newRow = document.createElement('div');
        newRow.className = 'course-row';
        newRow.innerHTML = `
            <input type="text" placeholder="Course name" required>
            <select class="grade" required>
                <option value="">Select Grade</option>
                <option value="4">A</option>
                <option value="3">B</option>
                <option value="2">C</option>
                <option value="1">D</option>
                <option value="0">F</option>
            </select>
        `;
        courseContainer.appendChild(newRow);
    });

    // Calculate GPA
    calculateBtn.addEventListener('click', () => {
        const grades = document.querySelectorAll('.grade');
        let totalPoints = 0;
        let validEntries = true;

        grades.forEach(gradeSelect => {
            const courseInput = gradeSelect.previousElementSibling;
            
            // Validate inputs
            if (!courseInput.value || !gradeSelect.value) {
                validEntries = false;
                courseInput.style.borderColor = gradeSelect.value ? '' : '#ff4444';
                gradeSelect.style.borderColor = gradeSelect.value ? '' : '#ff4444';
            } else {
                courseInput.style.borderColor = '';
                gradeSelect.style.borderColor = '';
                totalPoints += parseFloat(gradeSelect.value);
            }
        });

        if (!validEntries || grades.length === 0) {
            resultDiv.textContent = 'Please fill all course names and grades!';
            resultDiv.style.color = '#ff4444';
            return;
        }

        const gpa = totalPoints / grades.length;
        resultDiv.textContent = `Your GPA is: ${gpa.toFixed(2)}`;
        resultDiv.style.color = '#003366';
    });
});
