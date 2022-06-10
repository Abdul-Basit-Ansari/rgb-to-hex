document.addEventListener("DOMContentLoaded", init)

function init() {

// variables
const colorBox = document.getElementById("colorBox")
const colorBoxLabel = document.getElementById("colorBoxLabel")
const colorBars = document.getElementsByClassName("colorBars")
const colorTexts = document.getElementsByClassName("color-text")
 

//Event
for(let bar of colorBars) {
   bar.addEventListener("input", handleChangeColorBar)
}
for(let textbox of colorTexts) {
   textbox.addEventListener("input", handleChangeColorText)
}

// exec
convertRGBToHex()


function handleChangeColorBar() {
this.previousSibling.previousSibling.value = this.value
    convertRGBToHex()
}


function handleChangeColorText() {     
    if(this.value === "") {
        this.value = 0
    }
    if(Number(this.value)
 > 255) {
        this.value = 255
    }
    if(Number(this.value)
 < 0) {
        this.value = 0
    }
    this.value = Number(this.value)
    this.nextSibling.nextSibling.value = this.value
    convertRGBToHex();
}


function hex(num) {
   let hex = num.toString(16);
   
   if(hex.length === 1) {
      hex = "0" + hex;
   }
   return hex;
}


function convertRGBToHex() {
    let hexColor = "#";
    
	for(let el of colorTexts) {
        let val = Number(el.value);
        
        
        hexColor +=
            hex(val)
    }
    r_val = document.getElementById('r').value;    
    g_val = document.getElementById('g').value;    
    b_val = document.getElementById('b').value;    
    rgb_val = `rgb(${r_val},${g_val},${b_val})`;
    const rgbbg=document.getElementById('rgbbg')
    const hexbg=document.getElementById('hexbg')
    rgbbg.innerText = rgb_val;
    colorBox.style.backgroundColor = hexColor;
    hexbg.innerHTML = hexColor;
    colorBoxLabel.style.backgroundColor = hexColor;
    console.log(colorBox.innerText)
}
}


function copyhex(){
	let text= document.getElementById('colorBoxLabel').innerText;
	console.log(text)

  navigator.clipboard.writeText(text);
  
	alert('Text Copied! your color code is : '+text )
	}
function copyrgb(){
	let text= document.getElementById('colorBox').innerText;
	console.log(text)

  navigator.clipboard.writeText(text);
  
	alert('Text Copied! your color code is : '+text )
	}

