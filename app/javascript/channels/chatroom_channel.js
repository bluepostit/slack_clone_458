import consumer from "./consumer";

const initChatroomCable = () => {
  const messagesContainer = document.getElementById('messages');
  if (messagesContainer) {
    const id = messagesContainer.dataset.chatroomId;

    consumer.subscriptions.create({ channel: "ChatroomChannel", id: id }, {
      received(data) {
        // called when data is broadcast in the cable
        messagesContainer.insertAdjacentHTML('beforeend', data);
        window.scrollTo(0, document.body.scrollHeight)
      },
    });
  }
}

export { initChatroomCable };
