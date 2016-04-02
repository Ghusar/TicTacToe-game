
function getstarted(){

fr1 = document.getElementById("fr1");
fr2 = document.getElementById("fr2");
fr3 = document.getElementById("fr3");
sr3 = document.getElementById("sr3");
sr1 = document.getElementById("sr1");
sr2 = document.getElementById("sr2");
tr1 = document.getElementById("tr1");
tr2 = document.getElementById("tr2");
tr3 = document.getElementById("tr3");

alertbox = document.getElementById("alertbox");

pturn = Math.floor(Math.random()*100)%2+1;
player_turn = pturn;

alertbox.innerHTML= player_turn + " wins toss his turn to choose and play firts ";

moves = 0;

arr = new Array(3);
arr2 = new Array(3);
can = new Array(3);
for (x = 0 ; x<3 ; x++){
		arr[x] = new Array(3);
		can[x] = new Array(3);
		arr2[x] = new Array(3);
}

for(x = 0;x<3;x++){
		for(y=0;y<3;y++){
			arr[x][y]=0;
		}
	}



can[0][0] = document.getElementById("can00");                 //getting all the canvas element ids of all rows and coloumns
can[0][1] = document.getElementById("can01");
can[0][2] = document.getElementById("can02");
can[1][0] = document.getElementById("can10");
can[1][1] = document.getElementById("can11");
can[1][2] = document.getElementById("can12");
can[2][0] = document.getElementById("can20");
can[2][1] = document.getElementById("can21");
can[2][2] = document.getElementById("can22");

for(x = 0;x<3;x++){
		for(y=0;y<3;y++){
			arr2[x][y]=can[x][y];
		}
	}


}

function turn_change(){
	moves++;
	var p = check_win();
	if(p ==1){
		gametable.style.display = "none"; 
	}
	else{
	if(player_turn == 1){
		player_turn = 2;
	}
	else
		player_turn = 1;
	turn_alert();
}
}
function turn_alert(){
	
	alertbox.innerHTML="player "+player_turn+ " turn";
}

function reset(){
	for(x = 0;x<3;x++){
		for(y=0;y<3;y++){
			arr2[x][y].style.backgroundColor="blue";
			clearcan(arr2[x][y]);
			arr[x][y]=0;
		}
	}
	startingwindow();
}

function clearcan(x){
	cont = x.getContext('2d');
	cont.clearRect(0,0,50,50);
}


function draw(x){
	if(player_turn == pturn){
		if(taken == 1)
			MakeRound(x);
		else
			MakeCross(x);
	}
	else{
		if(taken == 1)
			MakeCross(x);
		else
			MakeRound(x);
	}
}


function circle(){
	taken = 1;
	selectionbox.style.display = "none";
	gametable.style.display="block";
}
function cross(){
	taken = 0;
		selectionbox.style.display = "none";
		gametable.style.display="block";
}


function startingwindow(){
	startbox = document.getElementById("startbox");
	startbox.style.display="none";
	
	gametable = document.getElementById('gametable');
	restart=document.getElementById("restart");
	getstarted();
	selectionbox = document.getElementById("selectionbox");
	selectionmessage = document.getElementById("selectionm");
	selectionm.innerHTML = "player" + player_turn +" do you want circle or cross";
	selectionbox.style.display = "block";
	
	
	
	
	
	
	
	
	
		

	
	

	//var conf = confirm("player "+player_turn+" do you want circle then click ok else cancle");
	
	
	
	
}

function MakeRound(canvas){
	
var cnt = canvas.getContext("2d");
	cnt.lineWidth=10;
	cnt.strokeStyle = "red";
	cnt.arc(25,25,20,0,Math.PI*2);
	cnt.stroke();
}

function MakeCross(canvas){
	var cnt = canvas.getContext("2d");
	cnt.lineWidth=10;
	cnt.strokeStyle= "red";
	cnt.beginPath();
	cnt.moveTo(1,1);
	cnt.lineTo(49,49);
	cnt.moveTo(1,49);
	cnt.lineTo(49,1);
	cnt.stroke();
}
function click00(){
	if(arr[0][0]==0){
	if(player_turn == 1)
		arr[0][0]=1;
	else
		arr[0][0]=2;
	draw(can[0][0]);
	turn_change();
	}
	else
		alertbox.innerHTML="cant put there";
}

function click01(){
	if(arr[0][1]==0){
	if(player_turn == 1)
		arr[0][1]=1;
	else
		arr[0][1]=2;
	draw(can[0][1]);
	turn_change();
	}
	else
		alertbox.innerHTML="cant put there";
}

function click02(){
	if(arr[0][2]==0){
	if(player_turn == 1)
		arr[0][2]=1;
	else
		arr[0][2]=2;
	draw(can[0][2]);
	turn_change();
	}
	else
		alertbox.innerHTML="cant put there";
}
function click10(){
	if(arr[1][0]==0){
	if(player_turn == 1)
		arr[1][0]=1;
	else
		arr[1][0]=2;
	draw(can[1][0]);
	turn_change();
	}
	else
		alertbox.innerHTML="cant put there";
}
function click11(){
	if(arr[1][1]==0){
	if(player_turn == 1)
		arr[1][1]=1;
	else
		arr[1][1]=2;
	draw(can[1][1]);
	turn_change();
	}
	else
		alertbox.innerHTML="cant put there";
}
function click12(){
	if(arr[1][2]==0){
	if(player_turn == 1)
		arr[1][2]=1;
	else
		arr[1][2]=2;
	draw(can[1][2]);
	turn_change();
	}
	else
		alertbox.innerHTML="cant put there";
}
function click20(){
	if(arr[2][0]==0){
	if(player_turn == 1)
		arr[2][0]=1;
	else
		arr[2][0]=2;
	draw(can[2][0]);
	turn_change();
	}
	else
		alertbox.innerHTML="cant put there";
}
function click21(){
	if(arr[2][1]==0){
	if(player_turn == 1)
		arr[2][1]=1;
	else
		arr[2][1]=2;
	draw(can[2][1]);
	turn_change();
	}
	else
		alertbox.innerHTML="cant put there";
}
function click22(){
	if(arr[2][2]==0){
	if(player_turn == 1)
		arr[2][2]=1;
	else
		arr[2][2]=2;
	draw(can[2][2]);
	turn_change();
	}
	else
		alertbox.innerHTML="cant put there";
}

function check_win(){
	if(moves>=9){
		showdraw();
		return 1;
	}
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[0][x]==1)counter1++;
		if(arr[0][x]==2)counter2++;
	}
	if(counter1==3){
		winmessage(1);
		return 1;
	}
	else if(counter2==3){
		winmessage(2);;
		return 1;
	}
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[1][x]==1)counter1++;
		if(arr[1][x]==2)counter2++;
	}
	if(counter1==3){
		winmessage(1);
		return 1;
	}
	else if(counter2==3){
		winmessage(2);;
		return 1;
	}
	
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[2][x]==1)counter1++;
		if(arr[2][x]==2)counter2++;
	}
	if(counter1==3){
		winmessage(1);
		return 1;
	}
	else if(counter2==3){
		winmessage(2);;
		return 1;
	}
	
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[x][0]==1)counter1++;
		if(arr[x][0]==2)counter2++;
	}
	if(counter1==3){
		winmessage(1);
		return 1;
	}
	else if(counter2==3){
		winmessage(2);;
		return 1;
	}
	
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[x][1]==1)counter1++;
		if(arr[x][1]==2)counter2++;
	}
	if(counter1==3){
		winmessage(1);
		return;
	}
	else if(counter2==3){
		winmessage(2);;
		return 1;
	}
	
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[x][2]==1)counter1++;
		if(arr[x][2]==2)counter2++;
	}
	if(counter1==3){
		winmessage(1);
		return 1; 
	}
	else if(counter2==3){
		winmessage(2);;
		return 1;
	}
	
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[x][x]==1)counter1++;
		if(arr[x][x]==2)counter2++;
	}
	if(counter1==3){
		winmessage(1);
		return 1;
	}
	else if(counter2==3){
		winmessage(2);;
		return 1;
	}
	
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[x][2-x]==1)counter1++;
		if(arr[x][2-x]==2)counter2++;
	}
	if(counter1==3){
		winmessage(1);
		return 1;
	}
	else if(counter2==3){
		winmessage(2);;
		return 1;
	}
	return 0;
}

function winmessage(x){
	winbox = document.getElementById("winbox");
	winm  = document.getElementById("winm");
	winm.innerHTML = "player " + x +" you won" + "do you want to play again?";
	winbox.style.display = "block";
	
	
}

function rok(){
	winbox.style.display = "none";
	reset();
}
function rno(){
	winbox.style.display = "none";
	alertbox.style.display = "none";
}
function showdraw(){
	winbox = document.getElementById("winbox");
	winm  = document.getElementById("winm");
	winm.innerHTML = "Game is Draw" + " do you want to play again?";
	winbox.style.display = "block";
}


