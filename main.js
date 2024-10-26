let input = document.querySelector('#input');
let add = document.querySelector('#add');

let tasks = document.querySelector('.tasks');
if(window.localStorage.getItem('tasks')){
    tasks.innerHTML = localStorage.getItem('tasks');

    document.querySelectorAll('#del').forEach(button => {
        button.onclick = function() {
            button.parentElement.remove();
            localStorage.setItem('tasks', tasks.innerHTML);
        };
    })
}



add.onclick = function(){
    if(input.value !== ''){
        let content = document.createElement('div');
        content.className = 'content';
        content.innerHTML = input.value;

        tasks.appendChild(content);

        let del = document.createElement('button');
        del.id = 'del';
        del.innerHTML = 'Delete';

        content.appendChild(del);

        localStorage.setItem('tasks', tasks.innerHTML);
        tasks.appendChild(content);



        if(content){
            content.style.width= "93%";
            content.style.height= "4rem";
            content.style.backgroundColor= "white";
            content.style.borderRadius= "13px";
            content.style.display= "flex";
            content.style.alignItems= "center";
            content.style.fontSize= "25px";
            content.style.textIndent="20px";
            content.style.position= "relative";
            content.style.margin= "20px";
            content.style.fontWeight= "500";


        }

        if(del){
            del.style.width= "78px";
            del.style.height= "30px";
            del.style.backgroundColor= "orangered";
            del.style.color= "white";
            del.style.fontWeight= "500";
            del.style.border= "none";
            del.style.fontSize= "16px";
            del.style.borderRadius= "7px";
            del.style.marginRight= "17px";
            del.style.position= "absolute";
            del.style.right= "10px";
            del.style.cursor= "pointer";
        }
        input.value = '';
        localStorage.setItem('tasks', tasks.innerHTML);


        del.onclick = function(){
            tasks.removeChild(content);
        }
    }

    input.onfocus = function() {
        input.style.border = "none";
    };
    

}


input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        add.onclick(); }})


        input.onfocus = function() {
            input.style.outline = "none"; 
            input.style.border = "none"; 
        };

