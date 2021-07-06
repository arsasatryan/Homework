// var s=[1,4,7,9,10]
// var arr=[false,"array",89]
// var arr1=arr.concat(s)
// console.log(arr1)

// var arr=[1,7,9,6,-5,85]
// for(var i=0;i<arr.length;i++){
//     for(var j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             var c=arr[i]
//             arr[i]=arr[j]
//             arr[j]=c
//         }
//     }
// }
// console.log(arr)


// var arr=[[1,2,3],[4,5,6],[6,7,8]]
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr[i].length;j++){
//         console.log(arr[i][j])
//     }
// }

// var arr=[[1,2,3],
//         [4,5,6],
//         [7,8,9]]
//  for(var i=0;i<arr.length;i++){
//      for(var j=0;j<arr.length;j++){
//          console.log(arr[i][j])
//      }
//  }     

// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// for(i=0;i<arr.length;i++){
//     if(arr[i]=arr[i][i]){
//         console.log(arr[i])
//     }
// }

// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// for(i=0;i<arr.length;i++){
//     if(arr[i]=arr[i][i]){
//         console.log(arr[i])
//     }
// }

// var gumar=0
// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// for( i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(arr[i][j]%2===0){
//             gumar+=arr[i][j]
//         }
//     }
// }
// console.log(gumar)


// var gumar=0
// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// for(i=0;i<arr.length;i++){
//     if(arr[i]=arr[i][i]){
//        gumar+=arr[i]
//     }
// }
// var gumar1=0
// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// for(i=0;i<arr.length;i++){
//     if(arr[i]=arr[i][arr.length-1-i]){
//        gumar1+=arr[i]
       
//     }
// }

// gumar2=(gumar1+gumar)/(arr.length*2)
// console.log(gumar2)



var sum=1
var arr=[[1,2,-3],[4,-7,8],[10,5,6]]
for(i=0;i<arr.length;i++){
    if((arr[i]=arr[i][arr.length-1-i]) && (arr[i] < 0)){
        sum*=arr[i]
    }
}
console.log(sum)