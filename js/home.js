let login_button = document.getElementById("login-button")
let login_form = document.getElementById("login-form")
let login_error_div = document.getElementById("login-error-div")
let display_login_form = false

function check_if_logged_in() {
	// just checking for the sake of displaying relevant content
	// when uploading, server will check cookie
	let url = window.location.href
	url = new URL(url);
	return url.searchParams.get("loggedin")
}

function toggle_login_form() {
	// toggle login form
	if (display_login_form) {
		login_form.style.display = "none"
		display_login_form = false
	}else{
		login_form.style.display = "block"
		display_login_form = true
	}
}

function toggle_login_error_div(){
	login_error_div.classList.toggle('is-visible')
}

function configure_home_page() {
	// configure logged in page
	if (check_if_logged_in() === 'true') {
		login_button.text = "Logged In"
		login_button.style.pointerEvents = "none"
	}else if(check_if_logged_in() === 'error'){
		login_error_div.classList.add('is-visible')
	}else{
		login_button.text = "Login"
	}
}

configure_home_page()
