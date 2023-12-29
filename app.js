// app.js
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files (CSS, images, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form at the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle form submissions
app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  console.log("Form submitted:", { name, email });

  // Display a confirmation message and log it on the browser console
  const confirmationMessage = `
	  <div style="
	    font-family: 'Arial', sans-serif;
	    background-color: #f2f2f2;
	    margin: 0;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    height: 100vh; 
		flex-direction : column;">
		<h1>Form submitted successfully!</h1>
		<p>Thank you, ${name}, for submitting your email: ${email}</p>
		<button style="
		background-color: #4caf50;
		color: #fff;
		padding: 10px 15px;
		border: none;
		border-radius: 4px;
		cursor: pointer;" 
		onclick="goBack()">Go Back to Form</button>
		<script>
		console.log('Form submitted:','${name}, ${email}');

		function goBack() {
			window.location.href = '/';
		}
		</script>
	  </div>
	`;
  res.send(confirmationMessage);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
