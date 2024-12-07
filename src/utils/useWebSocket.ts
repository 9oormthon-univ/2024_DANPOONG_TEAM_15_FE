import {useEffect, useState} from 'react';
import {Stomp} from '@stomp/stompjs';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

const useWebSocket = (userId: string) => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const client = Stomp.client(SOCKET_URL);

    client.connect({}, () => {
      console.log('WebSocket 연결 성공');

      // 특정 경로 구독
      const subscriptionPath = `/topic/notifications/users/${userId}`;
      client.subscribe(subscriptionPath, message => {
        console.log('받은 메시지:', message.body);
        setMessages(prev => [...prev, message.body]); // 메시지 저장
      });
    });

    client.onStompError = frame => {
      console.error('WebSocket 오류:', frame);
    };

    return () => {
      if (client.connected) {
        client.disconnect(() => console.log('WebSocket 연결 종료'));
      }
    };
  }, [userId]);

  return messages;
};

export default useWebSocket;
