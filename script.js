/*
console.log("second file");

let x=123;
let number=1;
let string="123";
message();

function message(m) {
console.log(x);
}
*/



console.log(output); /*šis f12 Consolē parāda darbības*/

addButton(1) /*fukcija sāksies ar norādīto ciparu-0*/
let lastNumber=42; /*norāda pēdējo ciparu, lai var ar pogu pievienot nākošo*/



function addButton(i){
    let output=document.getElementById("output");/*definē jaunu mainīgo, kuru paņem no html faila*/
    let button=document.createElement("button");/*izveido pašu pogu šajā failā, kuru nosaucam par button*/
    
    
    if(i%3==0){
        button.style.background="green"
        button.setAttribute("data-number", i)
        button.addEventListener("click", function(){
            let nextNumber=Number(button.getAttribute("data-number", i))+1;
            button.setAttribute("data-number", nextNumber); 
            button.textContent = "button"+nextNumber
        });
        
    }
   
    button.textContent = i; /*izveido pogai nosaukumu un klāt liek n-to reizi klāt cik funkcija atkārtojas*/
    /*let counter=button.addEventListener("click", function(){
        alert("Button was pressed");*/
    output.append(button);/*šis pievieno pogu(šīs lapas outputu) html kodam, kur ir button*/
    
    i=i+1; 
    if(i<=42){   
        addButton(i); /*šis fikciju atkārto sevi tik reizes, kamēr i>42*/
    }
    
}

let add_button=document.getElementById("add");/*Paņemam no index faila "add" pogu. poga pievieno klāt jaunu ciparu*/
add_button.addEventListener("click", function(){
    lastNumber=lastNumber+1;
    addButton(lastNumber)
    
});


    
    
