/*let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
    console.log(e.target)
    string= string + e.target.innerHTML;
    document.querySelector('.input').value =string;
})
})*/

/*let display=document.querySelector(".display");
let buttons=Array.from(document.querySelectorAll(".button"));

buttons.map((button)=>{
    button.addEventListener("click",(e)=>{
        let value=e.target.innerHTML;
        if(value=="c"){
            display.innerHTML="";
        }else if(value=="="){
            try{
                display.innerHTML=eval(display.innerHTML);
            }
            catch{
                display.innerHTML="error";
            }
            withoutEval(display.innerHTML);
        }else{
            display.innerHTML+=value;
        }
    });
});
function withoutEval(x){
// }*/


// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })
//console.log("hello");
let string = "";
let buttons = document.querySelectorAll('.btn');
// console.log(buttons);

Array.from(buttons).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
      if(e.target.innerHTML == "="){
        string = evl(string);
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML=='c'){
        string = '';
        document.querySelector('input').value = string; 
      }
      else
      {
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
      }
    })
})

function evl(exp){
let b= exp.split('');
let values=[];
let p=[];

for(let i=0;i<b.length;i++){
    if(b[i]==''){
        continue;
    }
    if(b[i]>= '0'&& b[i]<='9'){
        let s="";

        while(i<b.length && b[i]>='0' && b[i]<='9'){
            s=s+b[i++];
        }
        values.push(parseInt(s,10));
        i--;
    }
    else if(b[i]=='('){
            p.push(b[i]);
    }
    else if(b[i]==')'){
        while(p[p.length-1]!='(')
        {
            value.push(app(p.pop(),values.pop(),values.pop()));
        }
        p.pop();
    }
    else if(b[i]=='+' || b[i]=='-'|| b[i]=='*' || b[i]=='/'){
        while(p.length>0 && (b[i],p[p.length-1])){
            values.push(app(p.pop(),values.pop(),values.pop()))
        }
        p.push(b[i]);
    }
}
while(p.length>0){
    values.push(app(p.pop(),values.pop(),values.pop()))
}
return values.pop();
}
function pre(p1,p2){
    if(p2=='(' || p2==')'){
        return false;
    }
    if((p1=='*'||p1=='/')&&(p2=='+'||p2=='-'))
    {
        return false;
    }
    else{
        return true;
    }
}

function app(x,y,z){
    switch(x){
        case '+':
            return y+z;
        case '-':
            return y-z;
        case '*':
            return y*z;
        case '/':
            if(z==0){
                document.write("devide by zero erro");
            }
            return parent(y/z,10);
    }
    return 0;
}