function solve() {
   let message = document.getElementById(`chat_input`);
   let sendButton = document.getElementById(`send`);
   let messageWindow = document.getElementById(`chat_messages`);

   sendButton.addEventListener(`click`, event => {

      let newMessageElement = document.createElement(`div`);

      newMessageElement.innerHTML = message.value;

      newMessageElement.classList.add(`message`,`my-message`);

      messageWindow.appendChild(newMessageElement);

      message.value = ``;
   });
}