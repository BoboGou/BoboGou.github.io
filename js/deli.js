let upload_div = document.getElementById("upload-div")
let upload_img = document.getElementById("upload-img")
let upload_file = document.getElementById("upload-file")
let upload_submit = document.getElementById("upload-button")

upload_img.addEventListener("click", function(event){
	event.preventDefault()
	upload_file.click()
	toggle_submit_button()
});

function toggle_submit_button(){
	upload_submit.classList.toggle('invisible')
}

function is_logged_in(){
	return true;
}

if (is_logged_in()) {
	upload_div.classList.remove('invisible')
}