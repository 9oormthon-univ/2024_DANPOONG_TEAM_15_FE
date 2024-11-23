import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getChildren = async (): Promise<
  Array<{
    childId: number;
    childName: string;
    age: number;
    gender: string;
    image: string;
    recentApplyStatus: string;
  }>
> => {
  try {
    const token = localStorage.getItem('accessToken'); // accessToken 가져오기

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const response = await axios.get(`${BASE_URL}/children`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200 && response.data.success) {
      console.log('자녀 목록 조회 성공:', response.data.message);
      return response.data.data; // 자녀 데이터 반환
    }
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '자녀 목록 조회 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('자녀 목록 조회 중 알 수 없는 오류 발생:', error);
      throw new Error('자녀 목록 조회 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};

export const addChild = async (data: {
  childName: string;
  birthDate: string; // YYYY-MM-DD 형식
  gender: string;
  image: File;
}): Promise<void> => {
  try {
    const token = localStorage.getItem('accessToken'); // accessToken 가져오기

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    // FormData 객체 생성
    const formData = new FormData();
    formData.append('childName', data.childName);
    formData.append('birthDate', data.birthDate);
    formData.append('gender', data.gender);
    formData.append('image', data.image);

    const response = await axios.post(`${BASE_URL}/children`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 201 && response.data.success) {
      console.log('자녀 등록 성공:', response.data.message);
      return;
    }
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '자녀 등록 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('자녀 등록 중 알 수 없는 오류 발생:', error);
      throw new Error('자녀 등록 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};
