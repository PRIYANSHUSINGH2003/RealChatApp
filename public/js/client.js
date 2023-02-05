const socket = io()

let name1;
let textarea = document.querySelector('textarea')
let message_area = document.querySelector('.chats')
var users_list = document.querySelector('.users-list')
var users_count = document.querySelector('.users-count')
var mess_send=document.querySelector('#user-send')
var user_msg=document.querySelector('.user-msg')

do{
    name1 = prompt('Please enter your name : ')
}while(!name1)

socket.emit('new-user-joined',name1);
socket.on('user-connected',(socket_name)=>{
    userJoinLeft(socket_name,'joined');
});

function userJoinLeft(usernames,status){
    let div1=document.createElement("div");
    div1.classList.add('user-join');
    let contents1 = `<p><b>${usernames}</b> ${status} the chat</p>`;
    div1.innerHTML=contents1;
    message_area.appendChild(div1);
}
socket.on('user-disconnected',(user5)=>{
    userJoinLeft(user5,'Left');
});

socket.on("user-list",(users)=>{
    users_list.innerHTML="";
    users_arr=Object.values(users);
    for(i=0;i<users_arr.length;i++){
        let p =document.createElement('p');
        p.innerText=users_arr[i];
        users_list.appendChild(p);
    }
    users_count.innerHTML=users_arr.length;
});

mess_send.addEventListener('click',()=>{
    let data={
        user:name1,
        msg: user_msg.value
    };
    if(user_msg.value!=''){
        appendMessage1(data,'right');
        socket.emit('message',data);
        user_msg.value='';
    }
});

function appendMessage1(data,status){
    let div=document.createElement('div');
    div.classList.add('message',status);
    let contents1=`
    <h4>${data.user}</h4>
    <p>${data.msg}</p>
    `;
    div.innerHTML=contents1;
    message_area.appendChild(div);
}
socket.on('message',(data)=>{
    appendMessage1(data,'left');
})

textarea.addEventListener('keyup',(e) =>{
    if(e.key === 'Enter'){
        sendMessage(e.target.value)
    }
})
// mess_send.addEventListener('keyup',(e)=>{
//     if(e.key === 'click'){
//         sendMessage(e.target.value)
//     }
// })
// function sendMessage(message) {
//     let msg = {
//         user: name1,
//         message: message.trim()
//     }
//     // Append
//     appendMessage(msg,'right')
//     textarea.value = ''
//     scrollToBottom()
//     // send to server
//     socket.emit('message', msg)
// }

// function appendMessage(msg, type){
//     let mainDiv = document.createElement('div')
//     let className = type
//     mainDiv.classList.add(className,'message')

//     let markup = `
//         <h4>${msg.user}</h4>
//         <p>${msg.message}</p>
//     `

//     mainDiv.innerHTML = markup

//     message_area.appendChild(mainDiv)
// }


// Recive message 
// socket.on('message', (msg) =>{
//     appendMessage(msg,'left')
// })

function scrollToBottom(){
    message_area.scrollTop = message_area.scrollHeight
}
