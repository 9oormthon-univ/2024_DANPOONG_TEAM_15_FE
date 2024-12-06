import {useEffect, useState} from 'react';
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

const useWebSocket = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket(SOCKET_URL);

    ws.onopen = () => {
      console.log('WebSocket 연결 성공');
      ws.send(JSON.stringify({message: 'hello server!'}));
    };

    ws.onmessage = event => {
      console.log('받은 메시지:', event.data);
      setMessages(prev => [...prev, event.data]);
    };

    ws.onerror = error => {
      console.error('WebSocket 오류:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket 연결 종료');
    };

    return () => {
      ws.close();
    };
  }, []);
  return messages;
};

export default useWebSocket;
