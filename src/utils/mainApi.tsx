import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getChildStatus = async (childId: string) => {
  try {
    const token = localStorage.getItem('accessToken'); // accessToken 가져오기

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const response = await axios.get(`${BASE_URL}/apply`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        childId,
      },
    });

    if (response.status === 200 && response.data.success) {
      console.log('신청 조회 성공:', response.data.message);
      return response.data;
    }
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '신청 조회 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('신청 조회 중 알 수 없는 오류 발생:', error);
      throw new Error('신청 조회 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};
