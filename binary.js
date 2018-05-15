// var binary = {
// 	data: 1,
// 	left: {
// 		data: 2,
// 		left: {
// 			data: 4,
// 			left: null,
// 			right: null
// 		},
// 		right: {
// 			data: 5,
// 			left: {
// 				data: 7,
// 				left: null,
// 				right: {
// 					data: 8,
// 					left: null,
// 					right: null
// 				}
// 			}
// 		}
// 	},
// 	right: {
// 		data: 3,
// 		left: null,
// 		right: {
// 			data: 6,
// 			left: null,
// 			right: null
// 		}
// 	}
// };
function Node() {  
    this.data = '';           //节点的文本  
    this.left = null;    //节点的左孩子引用  
    this.right = null;   //节点右孩子引用  
}
var charecters = [1,2,3,4,5,null,null,6,7,8,9]
function buildTree(node, i) {  
               var leftIndex = 2*i+1,                          //左孩子节点的索引  
                   rightIndex = 2*i+2;                         //右孩子节点的索引  
               if(leftIndex < charecters.length) {             //判断索引的长度是否超过了charecters数组的大小  
                   var childNode = new Node();                 //创建一个新的节点对象  
                   childNode.data = charecters[leftIndex];     //给节点赋值  
                   node.left = childNode;                 //给当前节点node加入左孩子节点  
                   buildTree(childNode, leftIndex);            //递归创建左孩子  
               }  
               if(rightIndex < charecters.length) {            //下面注释参照上面的构建左孩子的节点  
                   var childNode = new Node();  
                   childNode.data = charecters[rightIndex];  
                   node.right = childNode;  
                   buildTree(childNode, rightIndex);  
               }  
           }  
           //下面构造二叉树  
           var node = new Node();  
           node.data = charecters[0];  
           buildTree(node, 0)

console.log(node);

function DLR (binary) {
	if(binary != null){
		console.log(binary.data);
		DLR(binary.left);
		DLR(binary.right);
	}
}

function LDR (binary) {
	if(binary != null){
		LDR(binary.left);
		console.log(binary.data);
		LDR(binary.right);
	}
}

function RLD (binary) {
	if(binary != null){
		RLD(binary.left);
		RLD(binary.right);
		console.log(binary.data);
	}
}

function searchDLR (binary, data) {
	if(binary != null && binary.data == data){
		// console.log(binary.data);
		// if(){
		// 	return binary;
		// }else{
		searchDLR(binary.left, data);
		searchDLR(binary.right, data);
// }
	}
}

console.log(searchDLR(node, 4))
// DLR(binary);
// LDR(binary);
// RLD(binary);