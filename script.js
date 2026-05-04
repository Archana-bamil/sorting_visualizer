const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",(e)=>{
    cursor.style .left=e.clientX +"px";
    cursor.style .top=e.clientY+"px"
})
document.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
});
document.addEventListener("mouseenter", () => {
  cursor.style.display = "block";
});
let arraysize=40;
let array=[arraysize];
let sortedarray=[arraysize];


function generateram(){
    let num= Math.random()*(100-0)+0;
    return parseInt(Math.floor(num));
}
function generatearray(){
    for(let i=0;i<arraysize;i++){
         array[i]=generateram(0,100);
    }
}
generatearray();
function newArray(){
    generatearray();
    chart.data.datasets[0].data=array;
    chart.update();
}
function bubblesort(){
    sortedarray=Array.from(array);
    for(let i=0;i<arraysize;i++){
        for(let j=0;j<(arraysize-i);j++){
           if(sortedarray[j]>sortedarray[j+1]){
             let temp=sortedarray[j];
            sortedarray[j]=sortedarray[j+1];
            sortedarray[j+1]=temp;
           }
        }
    }
    
}
function sortArray(){
    bubblesort();
    chart.data.datasets[0].data=sortedarray;
    chart.update();
}

let myChart=document.querySelector("#myChart").getContext("2d");
var chart=new Chart(myChart,{
    type:"bar",
    data:{
        labels:[
             "Element 1",
'Element 2',
'Element 3',
'Element 4',
'Element 5',
'Element 6',
'Element 7',
'Element 8',
'Element 9',
'Element 10',
'Element 11',
'Element 12',
'Element 13',
'Element 14',
'Element 15',
'Element 16',
'Element 17',
'Element 18',
'Element 19',
'Element 20',
'Element 21',
'Element 22',
'Element 23',
'Element 24',
'Element 25',
'Element 26',
'Element 27',
'Element 28',
'Element 29',
'Element 30',
'Element 31',
'Element 32',
'Element 33',
'Element 34',
'Element 35',
'Element 36',
'ELement 37',
'Element 38',
'Element 39',
'Element 40',

        ],
datasets:[
    {
        label:"Array",
        data:array,
        fill:false,
        borderColor:"#009688",
       
        borderWidth:5,
    },
],
},
options:{
    responsive:true,
    maintainAspectRatio:false,
    scales:{
        x:{
            ticks:{
               autoSkip: false,
                color:"black",
        maxRotation: 60,      
        minRotation: 45
      }
            },
        
        y:{
            ticks:{
                color: "white"
            },
        },
    }

    }}
)
