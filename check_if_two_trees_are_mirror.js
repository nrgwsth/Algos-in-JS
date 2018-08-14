const tree1 = {
	value: 1,
	left: 3,
	right: {
		value: 2,
		left: {
			value: 5,
			left: null,
			right: null
		},
		right: {
			value: 4,
			left: null,
			right: null
		}
	}
}

const tree2 = {
	value: 1,
	left: {
		value: 2,
		left: {
			value: 4,
			left: null,
			right: null
		},
		right: {
			value: 5,
			left: null,
			right: null
		}
	},
	right: 3 
}


function compare(tree1, tree2){
	if(!tree1 && !tree2){
		return true
	}

	if(!tree1 || !tree2){
		return false
	}

	return tree1.value === tree2.value && compare(tree1.left, tree2.right) && compare(tree1.right, tree2.left) 
}

function main(){
	console.log(compare(tree1, tree2))
}

main()