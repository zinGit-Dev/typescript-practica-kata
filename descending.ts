




    let n:number = 44848774  
  const order:string[] = n.toString().split('') 

console.log('>order:', order)




const sortedArray: string[] = order.sort((n1:any,n2:any) => n2 - n1);

console.log('>sorte:', sortedArray)
 
const result: number = Number(sortedArray.join(''))

console.log('>result:', result)