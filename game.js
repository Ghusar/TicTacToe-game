
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


arr = new Array(3);
arr2 = new Array(3);
can = new Array(3);
for (x = 0 ; x<3 ; x++){
		arr[x] = new Array(3);
		can[x] = new Array(3);
		arr2[x] = new Array(3);
}

arr2[0][1]=fr1;                  //first time this are declared as blocks of tables because to change their colors when reset is happened
arr2[0][2]=fr2;
arr2[0][3]=fr3;
arr2[1][1]=sr1;
arr2[1][1]=sr2;
arr2[1][2]=sr3;
arr2[2][0]=tr1;
arr2[2][1]=tr2;
arr2[2][2]=tr3;


can[0][0] = document.getElementById("can00");                 //getting all the canvas element ids of all rows and coloumns
can[0][1] = document.getElementById("can01");
can[0][2] = document.getElementById("can02");
can[1][0] = document.getElementById("can10");
can[1][1] = document.getElementById("can11");
can[1][2] = document.getElementById("can12");
can[2][0] = document.getElementById("can20");
can[2][1] = document.getElementById("can21");
can[2][2] = document.getElementById("can22");



}

function turn_change(){
	var p = check_win();
	if(p ==1)reset();
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
			arr2[x][y].style.backgroundColor="black";
		}
	}
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

function startingwindow(){
	startbox = document.getElementById("startbox");
	startbox.style.display="none";
	gametable = document.getElementById('gametable');
	gametable.style.display="block";
	getstarted();
	var conf = confirm("player "+player_turn+" do you want circle then click ok else cancle");
	
	if(conf == true){
		taken = 1;
	}
	else 
		taken = 0;

	
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
	draw(can[0][0]);
	if(player_turn == 1)
		arr[0][0]=1;
	else
		arr[0][0]=2;
	turn_change();
}

function click01(){
	draw(can[0][1]);
	if(player_turn == 1)
		arr[0][1]=1;
	else
		arr[0][1]=2;
	turn_change();
}

function click02(){
	draw(can[0][2]);
	if(player_turn == 1)
		arr[0][2]=1;
	else
		arr[0][2]=2;
	turn_change();
}
function click10(){
	draw(can[1][0]);
	if(player_turn == 1)
		arr[1][0]=1;
	else
		arr[1][0]=2;
	turn_change();
}
function click11(){
	draw(can[1][1]);
	if(player_turn == 1)
		arr[1][1]=1;
	else
		arr[1][1]=2;
	turn_change();
}
function click12(){
	draw(can[1][2]);
	if(player_turn == 1)
		arr[1][2]=1;
	else
		arr[1][2]=2;
	turn_change();
}
function click20(){
	draw(can[2][0]);
	if(player_turn == 1)
		arr[2][0]=1;
	else
		arr[2][0]=2;
	turn_change();
}
function click21(){
	draw(can[2][1]);
	if(player_turn == 1)
		arr[2][1]=1;
	else
		arr[2][1]=2;
	turn_change();
}
function click22(){
	draw(can[2][2]);
	if(player_turn == 1)
		arr[2][2]=1;
	else
		arr[2][2]=2;
	turn_change();
}

function check_win(){
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[0][x]==1)counter1++;
		if(arr[0][x]==2)counter2++;
	}
	if(counter1==3){
		player1win();
		return 1;
	}
	else if(counter2==3){
		player2win();
		return 1;
	}
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[1][x]==1)counter1++;
		if(arr[1][x]==2)counter2++;
	}
	if(counter1==3){
		player1win();
		return 1;
	}
	else if(counter2==3){
		player2win();
		return 1;
	}
	
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[2][x]==1)counter1++;
		if(arr[2][x]==2)counter2++;
	}
	if(counter1==3){
		player1win();
		return 1;
	}
	else if(counter2==3){
		player2win();
		return 1;
	}
	
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[x][0]==1)counter1++;
		if(arr[x][0]==2)counter2++;
	}
	if(counter1==3){
		player1win();
		return 1;
	}
	else if(counter2==3){
		player2win();
		return 1;
	}
	
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[x][1]==1)counter1++;
		if(arr[x][1]==2)counter2++;
	}
	if(counter1==3){
		player1win();
		return;
	}
	else if(counter2==3){
		player2win();
		return 1;
	}
	
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[x][2]==1)counter1++;
		if(arr[x][2]==2)counter2++;
	}
	if(counter1==3){
		player1win();
		return 1; 
	}
	else if(counter2==3){
		player2win();
		return 1;
	}
	
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[x][x]==1)counter1++;
		if(arr[x][x]==2)counter2++;
	}
	if(counter1==3){
		player1win();
		return 1;
	}
	else if(counter2==3){
		player2win();
		return 1;
	}
	
	counter1=0;
	counter2=0;
	for(x = 0;x<3;x++){
		if(arr[x][2-x]==1)counter1++;
		if(arr[x][2-x]==2)counter2++;
	}
	if(counter1==3){
		player1win();
		return 1;
	}
	else if(counter2==3){
		player2win();
		return 1;
	}
	return 0;
}

function player1win(){
	alertbox.innerHTML="player 1 wins";
	gametable.style.display="none";
}
function player2win(){
	alertbox.innerHTML="player 2 wins";
	gametable.style.display="none";
}
