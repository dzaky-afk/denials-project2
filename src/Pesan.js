import React, { useState } from 'react';

function Pesan() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Admin', message: 'Halo, ada yang bisa saya bantu?' },
    { id: 2, sender: 'Customer', message: 'Saya ingin bertanya tentang produk Anda.' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { id: messages.length + 1, sender: 'Customer', message: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="pesan-container">
      <h2>Chat dengan Admin</h2>
      <div className="chat-box">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender.toLowerCase()}`}>
            <strong>{msg.sender}: </strong>{msg.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          placeholder="Tulis pesan..." 
        />
        <button onClick={handleSendMessage}>Kirim</button>
      </div>
    </div>
  );
}

export default Pesan;
