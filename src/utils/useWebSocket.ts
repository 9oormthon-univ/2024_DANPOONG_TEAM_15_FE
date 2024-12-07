import {useEffect, useState} from 'react';
import {Stomp} from '@stomp/stompjs';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

const useWebSocket = (userId: string) => {
  const [messages, setMessages] = useState<string>();
  const [childNames, setChildNames] = useState<string>();
  const [startDates, setStartDates] = useState<string>();

  useEffect(() => {
    const client = Stomp.client(SOCKET_URL);

    client.connect({}, () => {
      console.log('WebSocket 연결 성공');

      // 특정 경로 구독
      const subscriptionPath = `/topic/notifications/users/${userId}`;
      client.subscribe(subscriptionPath, message => {
        console.log(message);
        try {
          const data = JSON.parse(message.body); // JSON 파싱
          console.log('받은 메시지:', data);

          // 상태 업데이트
          setMessages(data.message);
          setChildNames(data.childName);
          setStartDates(data.startDate);
        } catch (error) {
          console.error('메시지 처리 중 오류:', error);
        }
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

  // 상태값 반환
  return {messages, childNames, startDates};
};

export default useWebSocket;
