import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const uploadMedicalCertificate = async (
  childId: number,
  file: File,
): Promise<{
  id: number;
  name: string;
  address: string;
  diagnosisDate: string;
  diagnosisName: string;
  diagnosisContent: string;
  doctorName: string;
}> => {
  try {
    const token = localStorage.getItem('accessToken'); // accessToken 가져오기

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(
      `${BASE_URL}/children/${childId}/medical-certificates`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '진단서 등록 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('진단서 등록 중 알 수 없는 오류 발생:', error);
      throw new Error('진단서 등록 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};