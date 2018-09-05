var theArray = [];
var max = 1000;

function randomize(len){
	theArray = [];
	for (var i = 0; i<len;i++){
		let num = (Math.floor(Math.random()*Math.floor(max)));
		while (theArray.includes(num)){
		num = (Math.floor(Math.random()*Math.floor(max)));
		}
		theArray.push(num);
	}
}

	
function	merge(array1, array2){
		let result = [];
		let left = 0;
		let right =0;

		//While our index for left and right arrays are in bounds
		while(left<array1.length && right <array2.length){
			//if left entry is smaller than the right entry
			//raise that index, and put the value into result
			if (array1[left] < array2[right]){
				result.push(array1[left]);
				left++;
			}else{
				result.push(array2[right]);
				right++;
			}
		}
		//now take the resultant array, and dump the rest on the end
		let temp= result.concat(array1.slice(left)).concat(array2.slice(right));	
		return temp;
	}

	function sort(array,left,right){
		//split until we have single arrays
		if (array.length > 1){
			//find middle
			const middle = Math.floor(array.length/2);
			const left =  array.slice(0,middle);
			const right = array.slice(middle)
			return this.merge(sort(left),sort(right)); 
		}else{
			return array;
		}
	}

function addHex(a,b){
	let hex = (parseInt(a,10)+parseInt(b,10)).toString(16);
	while (hex.length < 6){hex='0'+hex}
	return hex;
}

function mapToHex(num){
	return	256/max*num;
}

randomize(max);
for (let i = 0; i<max;i++){
var tile = document.getElementById("merge").appendChild(document.createElement("div"));
	tile.id = "merge"+i;
  tile.classList.add("tile");
	tile.style.backgroundColor="#"+addHex(0,2*theArray[i]);
}

console.log(theArray);

//theArray = (sort(theArray,0,theArray.length-1));

//window.onload = function(){alert(d.getTime()-a);}


document.getElementById("mergeBtn").addEventListener("mousedown",function(event){
	d=new Date();
	const a = d.getTime();
	
	theArray = (sort(theArray,0,theArray.length-1));
	d=new Date();
	document.getElementById("mergeElapse").innerHTML="Time Elapsed: "+(d.getTime()-a)+"ms";
	for (let i = 0; i<max; i++){
		let tile = document.getElementById("merge"+i);
		tile.style.backgroundColor="#"+addHex(0,mapToHex(theArray[i]));
	}

});

document.getElementById("mergeMessBtn").addEventListener("mousedown",function(){
	randomize(max);
	for (let i = 0; i<max; i++){
		let tile = document.getElementById("merge"+i);
		tile.style.backgroundColor="#"+addHex(0,mapToHex(theArray[i]));
	}
});

