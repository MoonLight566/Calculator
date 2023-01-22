let num1='';
let num2= '';
let operator='';
document.addEventListener("DOMContentLoaded",function(){
    let number=document.querySelectorAll(".num");
    let operaters=document.querySelectorAll(".opreter");
    let equal=document.querySelector(".equal");
    let decimal=document.querySelector(".decimal");
    let clear=document.querySelector(".AC");
    let screan=document.querySelector(".dis1");
    let delet=document.querySelector(".delete");
    number.forEach((numbers)=>numbers.addEventListener("click",function(e){
        StoreNumber(e.target.textContent);
        screan.textContent=num1+ operator+ num2;
    }))

    operaters.forEach((ope)=>ope.addEventListener("click",function(e){
        StoreOperator(e.target.textContent);
        screan.textContent+=operator;
    }))
    delet.addEventListener('click',()=>{
       num2=num2.slice(0, -1);
       screan.textContent=num1+operator+ num2;
    });
    clear.addEventListener('click',()=>{
        num2='';
        num1="";
        screan.textContent="0" 
        operator='';});
    equal.addEventListener('click',()=>{
        if(num2!=''&&num1!=''){
        caculator();

        screan.textContent=num1;}  
        
    });
    decimal.addEventListener('click',()=>{
        Decimal();
    });
    })

    function StoreNumber(num){
        if(num2.length<=7){
        num2 +=num;}
    }
    function StoreOperator(ope){
        operator =ope;
        num1 =num2;
        num2="";
    }
    function caculator(){
     num1=Number(num1);
     num2=Number(num2);
        if(operator==="+"){
                  num1+=num2;
                }
                else if(operator==="-"){
                      num1-=num2;
                }
                else if(operator==="*"){
                      num1*=num2;
                }
                else if(operator==="/"){
                      num1/=num2; 
                }
               num1=round(num1);
               num1=num1.toString();
               num2=num1.toString();    
    }
    
function round(num){
return Math.round(num*1000)/1000;
}

function Decimal(){
if(!num2.includes('.')){
    num2 +='.';      
}
}



