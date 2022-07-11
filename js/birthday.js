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
	let options = {
		timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		month: 'numeric',
		day: 'numeric',
	},
	formatter = new Intl.DateTimeFormat([], options);
	let today = formatter.format(new Date());

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