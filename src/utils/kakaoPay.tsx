import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const postPayment = async (applyId: number) => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const response = await axios.post(`${BASE_URL}/apply/payments/${applyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response; // 응답 데이터 반환
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '결제 요청 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('결제 요청 중 알 수 없는 오류 발생:', error);
      throw new Error('결제 요청 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};

export const handleSuccessPayment = async (pgToken: string) => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const response = await axios.post(
      `${BASE_URL}/apply/payments/success?pg_token=${pgToken}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 200 || response.status === 201) {
      console.log('결제 성공:', response.data);
      return response.data;
    } else {
      throw new Error(
        `결제 실패: 상태 코드 ${response.status}, 메시지 ${
          response.data?.message || '응답 없음'
        }`,
      );
    }
  } catch (error: any) {
    console.error('결제 완료 요청 실패:', error);
    throw new Error(error.message || '결제 완료 요청 중 문제가 발생했습니다.');
  }
};
