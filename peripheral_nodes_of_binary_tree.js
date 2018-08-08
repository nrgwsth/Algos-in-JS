const tree = {
	value: 5,
	left: {
		value: 6,
		left: {
			value: 8,
			left: {
				value: 5,
				left: null,
				right: null
			},
			right: {
				value: 3,
				left: null,
				right: null
			}
		},
		right:{
			value: 18,
			left: {
				value: 8,
				left: {
					value: 4,
					left: null,
					right: null
				},
				right: {
					value: 2,
					left: null,
					right: null
				}
			},
			right: {
				value: 8,
				left: {
					value: 5,
					left: null,
					right: null
				},
				right: {
					value: 3,
					left: null,
					right: null
				}
			}
		}
	},
	right: {
		value: 16,
		left: {
			value: 9,
			left: null,
			right: null
		},
		right:{
			value: 10,
			left: null,
			right: null
		}
	}
}


/**
							5
		6										16
	8			18							9		10
5		3	8		8
			4 2		5 3

should output 5->6->8->5->3->4->2->5->3->9->10->16		
**/


function printLeafNodes(root){
	if(!root.left && !root.right){
		console.log(root.value + "->")
	} else{
		if(root.left){
			printLeafNodes(root.left)
		}
		if(root.right){
			printLeafNodes(root.right)
		}
	}
}

function printLeftTree(root){
	if(root.left){
		console.log(root.value + "->")
		printLeftTree(root.left)
	} else if(root.right){
		console.log(root.value + "->")
		printLeftTree(root.right)
	}
}

function printRightTree(root){
	if(root.right){
		printLeftTree(root.right)
		console.log(root.value + "->")
	} else if(root.left){
		printLeftTree(root.left)
		console.log(root.value + "->")
	}
}

function main(){
	console.log(tree.value)
	printLeftTree(tree.left)
	printLeafNodes(tree)
	printRightTree(tree.right)
}