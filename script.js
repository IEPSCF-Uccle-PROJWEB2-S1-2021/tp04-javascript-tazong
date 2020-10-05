//fonction qui affiche le Min
function Min(a,b)
{
  if(a<b)
    return a;
  else if(a>b)
    return b;
  else
    return a;
}
let resultMin=Min(10,5);
console.log("le minimum est" + resultMin);

//fonction qui affiche le Max

function Max(a,b)
{
  if(a>=b)
    return a;
  else
  return b;
}
let resultMax=Max(8,5);
console.log("le maximum est" + resultMax);

//Fonction `reduce`

function reduce(numbers,fn){
  if(numbers.length<2){
    return null;
  }else{
    let reslt=fn(numbers[0],numbers[1]);
    if(numbers.length>2);
    for(let i=2; i<numbers.length; i++){
      reslt=fn(numbers[i],result);
    }
    return result;
  }
}
let y=function filter(numbers,fn){
  let x=[];
  let k=0;
    for(let i=0; i<numbers.length;i++){
      if(fn(numbers[i])===true){
        x[k]=numbers[i];
        k++;
      }
    }
}
return x;
