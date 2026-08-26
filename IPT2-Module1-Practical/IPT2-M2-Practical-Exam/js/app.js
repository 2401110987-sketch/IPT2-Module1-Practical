document.addEventListener('DOMContentLoaded', function () {
	const studentForm = document.getElementById('studentForm');
	const tableContent = document.getElementById('table-content');

	if (!studentForm || !tableContent) {
		return;
	}

	studentForm.addEventListener('submit', function (event) {
		event.preventDefault();
		addStudent();
	});

	document.getElementById('addStudentButton').addEventListener('click', addStudent);

	function addStudent() {
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
	}
});
