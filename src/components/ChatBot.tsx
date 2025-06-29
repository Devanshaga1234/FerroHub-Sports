import React, { useState } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hi there! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    let botReply = "I'm not sure I understand.";
    if (input.toLowerCase().includes('hello')) botReply = 'Hello! 😊';
    else if (input.toLowerCase().includes('help')) botReply = 'Sure! What do you need help with?';
    else if (input.toLowerCase().includes('bye')) botReply = 'Goodbye! 👋';

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 500);

    setInput('');
  };

  return (
    <div style={styles.wrapper}>
      {/* Floating toggle button */}
      <button onClick={() => setIsOpen(!isOpen)} style={styles.floatingButton}>
        {isOpen ? '×' : '💬'}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.header}>FERROBot 🤖</div>
          <div style={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.messageBubble,
                  ...(msg.sender === 'user' ? styles.userBubble : styles.botBubble),
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div style={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              style={styles.input}
            />
            <button onClick={handleSend} style={styles.sendButton}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 9999,
  },
  floatingButton: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    fontSize: '24px',
    border: 'none',
    color: '#fff',
    background: 'linear-gradient(135deg, #ff7e5f, #00c6ff)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  chatWindow: {
    width: '360px',
    maxHeight: '500px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
    marginBottom: '12px',
  },
  header: {
    background: 'linear-gradient(135deg, #ff7e5f, #00c6ff)',
    color: '#fff',
    padding: '16px',
    fontWeight: 600,
    fontSize: '18px',
  },
  messages: {
    flex: 1,
    padding: '12px',
    overflowY: 'auto',
    backgroundColor: '#f9f9f9',
  },
  messageBubble: {
    padding: '10px 14px',
    marginBottom: '10px',
    borderRadius: '20px',
    maxWidth: '80%',
    fontSize: '14px',
    lineHeight: '1.4',
    wordWrap: 'break-word',
  },
  userBubble: {
    backgroundColor: '#e0f7ff',
    alignSelf: 'flex-end',
    color: '#0077b6',
    textAlign: 'right',
    marginLeft: 'auto',
  },
  botBubble: {
    backgroundColor: '#eeeeee',
    alignSelf: 'flex-start',
    color: '#444',
    marginRight: 'auto',
  },
  inputArea: {
    display: 'flex',
    borderTop: '1px solid #ddd',
    padding: '10px',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    padding: '10px 14px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '14px',
  },
  sendButton: {
    marginLeft: '8px',
    background: 'linear-gradient(135deg, #ff7e5f, #00c6ff)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export default ChatBot;
