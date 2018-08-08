/**
Merge sort devides array from middle
**/
function mergeSort(arr){
	if(arr.length > 1){
		return merge(mergeSort(arr.slice(0, arr.length/2)), mergeSort(arr.slice(arr.length/2, arr.length)))
	}
	return arr
}

function merge(a, b){
	const ret = []
	let i=0,j=0
	while(i<a.length && j < b.length){
		if(a[i] > b[j]){
			ret.push(b[j])
			j++
		} else{
			ret.push(a[i])
			i++
		}
	}

	while(i<a.length){
		ret.push(a[i])
		i++
	}

	while(j<b.length){
		ret.push(b[j])
		j++
	}

	return ret
}

function assert(condition, msg){
	console.log(`Statement - ${msg} is ${condition}`)
}

function main(){
	assert(JSON.stringify(mergeSort([1,2,3,-3,4,-1])) === "[-3,-1,1,2,3,4]", "Sorted [1,2,3,-3,4,-1] is [-3,-1,1,2,3,4]")
	assert(JSON.stringify(mergeSort([1,-1])) === "[-1,1]", "Sorted [1,-1] is [-1,1]")
	assert(JSON.stringify(mergeSort([11111,1221212,-1,-1,-3])) === "[-3,-1,-1,11111,1221212]", "Sorted [11111,1221212,-1,-1,-3] is [-3,-1,-1,11111,1221212]")
}


main()