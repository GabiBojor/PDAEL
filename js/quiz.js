var score = 0; //Set score to 0
var total = 5; //Total number of questions
var point = 2; //Points per correct answer
var highest = total * point;

//Initializer
function init(){
	//set correct answers
	sessionStorage.setItem('a1','a');
	sessionStorage.setItem('a2','b');
	sessionStorage.setItem('a3','c');
	sessionStorage.setItem('a4','d');
	sessionStorage.setItem('a5','a');
}

$(document).ready(function(){
	//Hide all questions
	$('.questionForm').hide();
	
	//Show first question
	$('#q1').show();
	
	$('.questionForm #submit').click(function(){
		//Get data attributes
		current = $(this).parents('form:first').data('question');
		next = $(this).parents('form:first').data('question')+1;
		//Hide all questions
		$('.questionForm').hide();
		//Show next question
		$('#q'+next+'').fadeIn(300);
		process(''+current+'');
		return false;
	});
});

//Process the answers
function process(n){
	//Get input value
	var submitted = $('input[name=q'+n+']:checked').val();
	if(submitted == sessionStorage.getItem('a'+n+'')){
			score = score + point;
	}
		
	if(n == total){	
		$('#results').html('<h3>Nota ta este: '+score+' din '+highest+'</h3><a class="btn" href="test.html">Reia Testul</a> <a class="btn2" href="index.html">Repeta Cursul</a>');
		if(score == highest){
			$('#results').append('<p>BRAVO, esti un adevarat web developer!');
		} else if(score == highest - point || score == highest - point - point){
			$('#results').append('<p>Felicitari!');
		}
	}
	return false;
}

//Add event listener
window.addEventListener('load',init,false);