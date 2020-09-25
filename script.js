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

addButton(0) /*fukcija sāksies ar norādīto ciparu-0*/

function addButton(i){
    let output=document.getElementById("output");/*definē jaunu mainīgo, kuru paņem no html faila*/
    let button=document.createElement("button");/*izveido pašu pogu šajā failā, kuru nosaucam par button*/
    button.style.background="green"
    
    i=i+1; 
    button.textContent = "button"+i; /*izveido pogai nosaukumu un klāt liek n-to reizi klāt cik funkcija atkārtojas*/
    output.append(button);/*šis pievieno pogu(šīs lapas outputu) html kodam, kur ir button*/
   
    if(i<42){
        if(i%3){
            button.style.background="white"
        }
        
        addButton(i); /*šis fikciju atkārto sevi tik reizes, kamēr i>42*/
        
    }
}