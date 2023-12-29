function validateForm() {
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	console.log("validateForm called...");
	if (name.trim() === '' || email.trim() === '') {
	  alert('Name and email are required!');
	  return false;
	}
	
	return true;
}