var card = document.getElementById('card')

$('#card').click(function(){
	flip();
});

function flip() {
	card.className = card.className === '' ? 'open' : '';
}

var words=[
	{'en':'バイトは？','ja':'喫茶店'},
	{'en':'部活は？','ja':'アメフト'},
	{'en':'好きな音楽は？','ja':'エルレ'}
]

var cf = $('#card-front');
var cb = $('#card-back');


$('#btn').click(function(){
	next();
});

next();

  function next() {
      if (card.className === 'open') {
          card.addEventListener('transitionend', setcard);
			flip();
	  }else{
		  setcard();
	  }
  }

  function setcard(){
	    var num = Math.floor(Math.random() * words.length);
	    cf.text(words[num]['en']);
	    cb.text(words[num]['ja']);
	    card.removeEventListener('transitionend', setcard);
  }


