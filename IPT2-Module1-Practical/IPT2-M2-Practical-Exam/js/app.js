document.addEventListener('DOMContentLoaded', function () {
	const studentForm = document.getElementById('studentForm');

	if (studentForm) {
		const tableContent = document.getElementById('table-content');
		const addStudent = function () {
			const values = [
				document.getElementById('idNumber').value.trim(),
				document.getElementById('firstName').value.trim(),
				document.getElementById('middleName').value.trim(),
				document.getElementById('lastName').value.trim()
			];

			if (values.some(function (value) { return value === ''; })) {
				return;
			}

			const row = tableContent.insertRow();
			values.forEach(function (value) {
				row.insertCell().textContent = value;
			});

			studentForm.reset();
		};

		studentForm.addEventListener('submit', function (event) {
			event.preventDefault();
			addStudent();
		});

		document.getElementById('addStudentButton').addEventListener('click', addStudent);
	}

	const subjectForm = document.getElementById('subjectForm');
	if (subjectForm) {
		const subjectTableContent = document.getElementById('table-content');
		const addSubject = function () {
			const values = [
				document.getElementById('subjectCode').value.trim(),
				document.getElementById('subjectName').value.trim(),
				document.getElementById('units').value.trim()
			];

			if (values.some(function (value) { return value === ''; })) {
				return;
			}

			const row = subjectTableContent.insertRow();
			values.forEach(function (value) {
				row.insertCell().textContent = value;
			});

			subjectForm.reset();
		};

		subjectForm.addEventListener('submit', function (event) {
			event.preventDefault();
			addSubject();
		});

		document.getElementById('addSubject').addEventListener('click', addSubject);
	}
});
