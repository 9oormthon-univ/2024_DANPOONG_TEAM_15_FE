import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const createAccountApi = async (data: {
  email: string;
  name: string;
  password: string;
  incomeType: string;
}): Promise<void> => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/sign-up`, data);

    // accessToken 저장
    const {accessToken} = response.data.data;
    localStorage.setItem('accessToken', accessToken);
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      // 서버에서 반환된 에러 메시지 처리
      console.error(
        '회원가입 요청 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message); // 에러 메시지 전달
    } else {
      // 기타 알 수 없는 오류 처리
      console.error('회원가입 요청 중 알 수 없는 오류 발생:', error);
      throw new Error('회원가입 요청 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};

export const loginApi = async (
  email: string,
  password: string,
): Promise<void> => {
  try {
    const payload = {email, password};

    const response = await axios.post(`${BASE_URL}/auth/login`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // 상태 코드가 200이고 success가 true인 경우 처리
    if (response.status === 200 && response.data.success) {
      console.log('로그인 성공:', response.data.message);

      // accessToken 저장
      const {accessToken} = response.data.data;
      localStorage.setItem('accessToken', accessToken);

      return; // 성공 종료
    }
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '로그인 요청 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('로그인 요청 중 알 수 없는 오류 발생:', error);
      throw new Error('로그인 요청 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};

export const getUserInfo = async (): Promise<{
  name: string;
  incomeType: string;
}> => {
  try {
    const token = localStorage.getItem('accessToken'); // accessToken 가져오기

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const response = await axios.get(`${BASE_URL}/members/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200 && response.data.success) {
      console.log('회원 정보 조회 성공:', response.data.message);
      return response.data.data; // 사용자 데이터 반환
    }
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '회원 정보 조회 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('회원 정보 조회 중 알 수 없는 오류 발생:', error);
      throw new Error('회원 정보 조회 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};
