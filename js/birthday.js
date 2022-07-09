const birthdays = {
	"1/25": "Zicheng Guo",
	"7/10": "Che Chen",
	"7/24": "Xiao Yu",
	"8/11": "Buyi Chen",
	"8/31": "Yi Gan",
	"10/15": "Yuhao Shen",
}
var birthday_block = document.getElementById("birthday_block")
var birthday_text = document.getElementById("birthday_text")
var birthday_close = document.getElementById("birthday_close")

function display_birthday(){
	var dateObj = new Date();
	var month = dateObj.getUTCMonth() + 1; //months from 1-12
	var day = dateObj.getUTCDate();

	let today = month + "/" + day;
	let person = birthdays[today]
	if (person) {
		birthday_block.style.display = "block"
		birthday_text.innerText = `Dear ${person},`
	}else {
		birthday_block.style.display = "none"
	}
}

birthday_close.addEventListener("click", function(){
	birthday_block.style.display = "none"
})

display_birthday()