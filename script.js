let input=document.querySelector("input");
console.log(input.value);
 let size=input.value;
let array=[size];
const container=document.querySelector(".container");
function newarray(){
 size=input.value;
  for(let i=0;i<size;i++){
  let num=Math.random()*(100-0)+1;
  array[i]=parseInt(Math.floor(num));
}
barstyle();
}
newarray();
input.addEventListener("input",()=>{
  newarray();
})
function bubblesort(array2){
  const moves=[];
  for(let i=0;i<size;i++){
  for(let j=0;j<(size-i);j++){
  
    if(array2 [j]>array2[j+1]){
      moves.push([j+1,j])
      let temp=array2[j+1];
      array2[j+1]=array2[j];
      array2[j]=temp;
    }
  }

}
  return moves;
}
function sortarray(){
  const copy=[...array];
const moves=  bubblesort(copy);
  animate(moves)
}

function animate(moves){
  if(moves.length==0) {
    barstyle();
    return ;
  }
const [i,j]=moves.shift();
  
    [array[i],array[j]]=[array[j],array[i]];
  
  barstyle([i,j]);
  setTimeout(function(){
    animate(moves); 
  },50);
}

function barstyle(indices){
  container.innerHTML='';
  for(let i=0;i<size;i++){
  const bar=document.createElement("div");
  bar.classList.add("bar");
  bar.style.height=array[i]+"%";
  if(indices && indices.includes(i)){
    bar.style.backgroundColor="red";
  }
  container . appendChild(bar);
}
}