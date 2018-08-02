function kadane(arr){
	let max_so_far = 0, max_till_here = 0
	for(let i =0; i<arr.length;i++){
		max_till_here = max_till_here + arr[i]
		if(max_till_here < 0){
			max_till_here = 0
		}
		if(max_so_far < max_till_here){
			max_so_far = max_till_here
		}
	}
	return max_so_far
}


function assert(condition, msg){
	console.log(`Statement - ${msg} is ${condition}`)
}

function main(){
	assert(kadane([1,2,3,-3,4,-1]) === 7, "Max contigous sum for [1,2,3,-3,4,-1] should be 7")
	assert(kadane([-1,-2,-3,-3,-4,1]) === 1, "Max contigous sum for [-1,-2,-3,-3,-4,-1] should be -1")
	assert(kadane([1,-2,3,-3,4,-1]) === 4, "Max contigous sum for [1,-2,3,-3,4,-1] should be 4")
}

main()