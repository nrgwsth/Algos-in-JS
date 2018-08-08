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

BFS traversal - 5->6->16->8->18->9->10->5->3->8->8->4->2->5->3

**/

function BFS(root){
	const q = []
	q.push(root)
	while(q.length != 0){
		const node = q.shift()
		console.log(node.value)
		if(node.left){
			q.push(node.left)
		}
		if(node.right){
			q.push(node.right)
		}
	}
}

function main(){
	BFS(tree)
}

main()