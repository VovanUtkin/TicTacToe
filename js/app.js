const block = document.querySelectorAll(".container__block")

/* block.addEventListener("click", (event) =>{
	console.log(event.target.innerHTML)
}) */

//block-id

let check = true
let end = 0

// Получаем все 9 блоков на id
const blockId1 = document.querySelector("#block-id1")
const blockId2 = document.querySelector("#block-id2")
const blockId3 = document.querySelector("#block-id3")

const blockId4 = document.querySelector("#block-id4")
const blockId5 = document.querySelector("#block-id5")
const blockId6 = document.querySelector("#block-id6")

const blockId7 = document.querySelector("#block-id7")
const blockId8 = document.querySelector("#block-id8")
const blockId9 = document.querySelector("#block-id9")


//Проверка победы X
function checkX () {

	// Победа X по 3 горизонталям
	if(blockId1.innerHTML == "X" && blockId2.innerHTML == "X" && blockId3.innerHTML == "X")
		{
		endGame ("X - WIN (1 горизонталь)")
	}
	if(blockId4.innerHTML == "X" && blockId5.innerHTML == "X" && blockId6.innerHTML == "X")
		{
		endGame ("X - WIN (2 горизонталь)")
	}
	if(blockId7.innerHTML == "X" && blockId8.innerHTML == "X" && blockId9.innerHTML == "X")
		{
		endGame ("X - WIN (3 горизонталь)")
	}

	// Победа X по 3 вертикалям
	if(blockId1.innerHTML == "X" && blockId4.innerHTML == "X" && blockId7.innerHTML == "X")
		{
		endGame ("X - WIN (1 вертикаль)")
	}
	if(blockId2.innerHTML == "X" && blockId5.innerHTML == "X" && blockId8.innerHTML == "X")
		{
		endGame ("X - WIN (2 вертикаль)")
	}
	if(blockId3.innerHTML == "X" && blockId6.innerHTML == "X" && blockId9.innerHTML == "X")
		{
		endGame ("X - WIN (3 вертикаль)")
	}
	// Победа X по 2 диоганалям

	if(blockId1.innerHTML == "X" && blockId5.innerHTML == "X" && blockId9.innerHTML == "X")
		{
		endGame ("X - WIN (диогональ слево в право)")
	}
	if(blockId3.innerHTML == "X" && blockId5.innerHTML == "X" && blockId7.innerHTML == "X")
		{
		endGame ("X - WIN (диогональ спараво в налево)")
	}
}


//Проверка победы O
function checkO () {

	// Победа X по 3 горизонталям
	if(blockId1.innerHTML == "O" && blockId2.innerHTML == "O" && blockId3.innerHTML == "O")
		{
		endGame ("O - WIN (1 горизонталь)")
	}
	if(blockId4.innerHTML == "O" && blockId5.innerHTML == "O" && blockId6.innerHTML == "O")
		{
		endGame ("O - WIN (2 горизонталь)")
	}
	if(blockId7.innerHTML == "O" && blockId8.innerHTML == "O" && blockId9.innerHTML == "O")
		{
		endGame ("O - WIN (3 горизонталь)")
	}

	// Победа O по 3 вертикалям
	if(blockId1.innerHTML == "O" && blockId4.innerHTML == "O" && blockId7.innerHTML == "O")
		{
		endGame ("O - WIN (1 вертикаль)")
	}
	if(blockId2.innerHTML == "O" && blockId5.innerHTML == "O" && blockId8.innerHTML == "O")
		{
		endGame ("O - WIN (2 вертикаль)")
	}
	if(blockId3.innerHTML == "O" && blockId6.innerHTML == "O" && blockId9.innerHTML == "O")
		{
		endGame ("O - WIN (3 вертикаль)")
	}
	// Победа O по 2 диоганалям

	if(blockId1.innerHTML == "O" && blockId5.innerHTML == "O" && blockId9.innerHTML == "O")
		{
		endGame ("O - WIN (диогональ слево в право)")
	}
	if(blockId3.innerHTML == "O" && blockId5.innerHTML == "O" && blockId7.innerHTML == "O")
		{
		endGame ("O - WIN (диогональ спараво в налево)")
	}
}

function endGame (result = "Draw"){
	setTimeout(()=>{
		alert (result)
		location.reload()
	}, 1000)
}

block.forEach((elem) => {
	elem.addEventListener("click", (event) =>{

		if(event.target.innerHTML == " "){

			if (check) {
				event.target.innerHTML = "X"
				event.target.classList.add("X")
				check = false
			}
			else {
				event.target.innerHTML = "O"
				event.target.classList.add("O")
				check = true
			}
			checkX ()
			checkO ()

			end++
			if (end == 9) {
				endGame ()
			}
		}
		else {
			console.log(2)
		}
	})
})