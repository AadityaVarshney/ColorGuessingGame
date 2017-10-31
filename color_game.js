var colors=[];var numSquares = 6;

var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var newColor=document.querySelector("#newColor");
var modeButton=document.querySelectorAll(".modeButton");
var colorDisplay=document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");var pickedColor;
reset();
	for(var i=0;i<squares.length;i++)
{

	
	squares[i].addEventListener("click",function()
	{
if(this.style.backgroundColor===pickedColor)
	{ 
message.textContent="correct!";
changeColor(pickedColor);h1.style.backgroundColor=pickedColor;
newColor.textContent="Play Again?";
		} 
		else {
			this.style.background = "#232323";
		message.textContent="Try Again!";

	}
 });
}

for(var i=0;i<modeButton.length;i++)
{

	modeButton[i].addEventListener("click",function()
	{
		modeButton[0].classList.remove("Selected");
		modeButton[1].classList.remove("Selected");
		this.classList.add("Selected");	
		this.textContent === "Easy" ?	numSquares=3 : numSquares = 6;
		
		reset();

});}
newColor.addEventListener("click",function()
	{
		reset();
	});


function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b+")";
}
function randomPick()
{
	var i=Math.floor(Math.random()*numSquares);
	return colors[i];
}
function changeColor(c)
{
for(var i=0;i<squares.length;i++)
{
squares[i].style.backgroundColor=c;
}}
function reset()
{
	colors=[];newColor.textContent="New Colors";
h1.style.backgroundColor= "steelblue"; 
	message.textContent=" ";

for(var i=0;i<numSquares;i++)
{
	colors[i]=randomColor();
}
	 pickedColor=randomPick();colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
{
if(colors[i])
{	squares[i].style.display = "block";
	squares[i].style.backgroundColor=colors[i];
}
else
{squares[i].style.display = "none";}
}
}