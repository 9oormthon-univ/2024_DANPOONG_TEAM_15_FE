import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getCare = async () => {
  try {
    const token = localStorage.getItem('accessToken'); // accessToken 가져오기

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const response = await axios.get(`${BASE_URL}/caregivers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200 && response.data.success) {
      console.log('매칭 목록 조회 성공:', response.data.message);
      return response.data.data; // 자녀 데이터 반환
    } else {
      // 요청이 성공하지 않았을 때 빈 배열 반환
      console.warn('매칭 목록 조회 실패:', response.data.message);
      return [];
    }
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '매칭 목록 조회 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('매칭 목록 조회 중 알 수 없는 오류 발생:', error);
      throw new Error('매칭 목록 조회 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};

export const getCareList = async () => {
  try {
    const token = localStorage.getItem('accessToken'); // accessToken 가져오기

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const response = await axios.get(`${BASE_URL}/caregivers/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200 && response.data.success) {
      console.log('돌봄 목록 조회 성공:', response.data.message);
      return response.data.data; // 자녀 데이터 반환
    } else {
      // 요청이 성공하지 않았을 때 빈 배열 반환
      console.warn('돌봄 목록 조회 실패:', response.data.message);
      return [];
    }
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '돌봄 목록 조회 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('돌봄 목록 조회 중 알 수 없는 오류 발생:', error);
      throw new Error('돌봄 목록 조회 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};

export const getCaregiversDetails = async (
  applyId: number,
): Promise<{
  applyDate: string;
  careDate: string;
  careTime: string;
  memo: string;
  childName: string;
  birthDate: string;
  age: number;
  diagnosisName: string;
  image: string;
}> => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const response = await axios.get(`${BASE_URL}/caregivers/${applyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data; // 세부 데이터 반환
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '돌봄 활동 세부 조회 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('돌봄 활동 조회 중 알 수 없는 오류 발생:', error);
      throw new Error('돌봄 활동 조회 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};

export const postCaregiver = async (applyId: number): Promise<void> => {
  try {
    const token = localStorage.getItem('accessToken'); // 토큰 가져오기

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    await axios.post(
      `${BASE_URL}/caregivers/${applyId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '돌봄 신청 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('돌봄 신청 중 알 수 없는 오류 발생:', error);
      throw new Error('돌봄 신청 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};

export const deleteCaregiver = async (): Promise<void> => {
  try {
    const token = localStorage.getItem('accessToken'); // 토큰 가져오기

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    await axios.put(
      `${BASE_URL}/caregivers`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '초기화 신청 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('초기화 중 알 수 없는 오류 발생:', error);
      throw new Error('초기화 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};
