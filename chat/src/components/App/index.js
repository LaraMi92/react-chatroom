// == Import npm
import React, { useState, useEffect, useRef } from 'react';
import socketClient from 'socket.io-client';
import axios from 'axios';

// == Local Imports
import './app.scss';
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

// == Composant
const App = () => {
  const [yourId, setId] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [infos, setInfos] = useState([]);
  const [error, setError] = useState('');

  const socketRef = useRef();

  const receivedMessage = (message) => {
    setMessages((oldMesg) => [...oldMesg, message]);
  };

  useEffect(() => {
    socketRef.current = socketClient.connect('http://localhost:3001', { transports: ['websocket', 'polling', 'flashsocket'] });
    socketRef.current.on('your id', (id) => {
      setId(id);
    });
    socketRef.current.on('message', (message) => {
      console.log(message);
      receivedMessage(message);
    });
    axios.get('https://randomuser.me/api/')
      .then((data) => setInfos(data.data.results[0]))
      .catch((err) => setError('Oops we couldnt catch your name because', err));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    const messageObject = {
      body: message,
      id: yourId,
      pseudo: infos,
    };
    socketRef.current.emit('send message', messageObject);
    setMessage('');
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="app">
      <Messages messages={messages} id={yourId} identity={infos} />
      <Form handleChange={handleChange} submitForm={sendMessage} inputValue={message} />
    </div>
  );
};

// == Export
export default App;
