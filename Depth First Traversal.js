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

/***
								5
			 6											16
	8					18							9		10
5		3		8				8
			4	 	2		5 		3

DFS traversal - 5 6 8 5 3 18 8 4 2 8 5 3 16 9 10

**/

function DFS(root){
	console.log(root.value)
	if(root->left){
		DFS(root.left)
	}
	if(root.right){
		DFS(root.right)
	}
}

function main(){
	DFS(tree)
}

main()