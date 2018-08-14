function SelectionSort(arr){
	for(let i = 0;i<arr.length;i++){
		let min = i
		for(let j = i+1;j<arr.length;j++){
			if(arr[j] < arr[min]){
				min = j
			}
		}
		const temp = arr[i]
		arr[i] = arr[min]
		arr[min] = temp
	}
	return arr
}

function assert(condition, msg){
	console.log(`Statement - ${msg} is ${condition}`)
}

function main(){
	assert(JSON.stringify(SelectionSort([1,2,3,-3,4,-1])) === "[-3,-1,1,2,3,4]", "Sorted [1,2,3,-3,4,-1] is [-3,-1,1,2,3,4]")
	assert(JSON.stringify(SelectionSort([1,-1])) === "[-1,1]", "Sorted [1,-1] is [-1,1]")
	assert(JSON.stringify(SelectionSort([11111,1221212,-1,-1,-3])) === "[-3,-1,-1,11111,1221212]", "Sorted [11111,1221212,-1,-1,-3] is [-3,-1,-1,11111,1221212]")
}


main()