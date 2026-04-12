const ball = document.getElementById('ball');
document.addEventListener('keydown', handelKeyPress);

let position = 0;
let situation = 0;

function handelKeyPress(e){
    if (e.code === 'ArrowLeft') {
        position = position - 10;
    }
    if (e.code === 'ArrowRight') {
        position = position + 10;
    }
	 if (e.code === 'ArrowUp') {
		 situation = situation - 10;
	 }
	 if (e.code === 'ArrowDown') {
		  situation = situation + 10;
	 }
	 if (e.code === 'KeyM') {
		  situation = situation + 10;
		  position = position + 10;
	 }
	 if (e.code === 'KeyQ') {
		  situation = situation - 10;
		  position = position - 10;
	 }
	 
	 
    if (position < 0) {
        position = 0;
    }
	 if (situation < 0) {
        situation = 0;
    }

    refresh();
}

function refresh() {
    ball.style.left = position + 'px';
	 ball.style.top = situation + 'px';	 
}