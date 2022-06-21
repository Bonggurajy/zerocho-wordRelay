const playerNumber = parseInt(prompt('참가자가 몇명입니까?'), 10);
const confirmOrNot = confirm(`총 ${playerNumber}명이 맞습니까?`);

let word ; //제시어
let newWord ; //입력어


const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');

//input event가 발생했을 때 그것을 감지하고 newWord 변수에 값을 담기.
function onInput(event) {
	newWord = event.target.value ;
}

$input.addEventListener('input',onInput);


//입력 button을 'click' 했을 때 제시어가 비어있다면, 비어있지 않다면 ~
function onClickBtn () {
	if(!word || word[word.length-1] === newWord[0]) {		//제시어가 비어 있는가? 또는 유효성 검사 시 유효한가?
		word = newWord ;
		$word.textContent = word;
		const order = parseInt($order.textContent); //함수 내부에서 선언을 해줘야 값을 계속해서 받아올 수 있음
		if(order === playerNumber) {
			$order.textContent = 1;
		}
		else {
			$order.textContent = order + 1;
		}
	}
	else {
		alert('틀렸습니다!');
		$order.textContent = 1;
	}
	
	$input.focus();
	$input.value ='';
}

$button.addEventListener('click',onClickBtn);

