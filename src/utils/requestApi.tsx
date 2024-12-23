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

export const getMedicalCertificates = async (
  childId: number,
): Promise<
  Array<{
    id: number;
    title: string;
    createdAt: string;
  }>
> => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const response = await axios.get(
      `${BASE_URL}/children/${childId}/medical-certificates`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data.data.certificates; // 진단서 목록 반환
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '진단서 목록 조회 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('진단서 목록 조회 중 알 수 없는 오류 발생:', error);
      throw new Error('진단서 목록 조회 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};

export const getMedicalCertificateDetails = async (
  childId: number,
  medicalCertificateId: number,
): Promise<{
  id: string;
  name: string;
  address: string;
  diagnosisDate: string;
  diagnosisName: string;
}> => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const response = await axios.get(
      `${BASE_URL}/children/${childId}/medical-certificates/${medicalCertificateId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data.data; // 진단서 세부 데이터 반환
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '진단서 세부 조회 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('진단서 세부 조회 중 알 수 없는 오류 발생:', error);
      throw new Error('진단서 세부 조회 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};

export const uploadAbsent = async (
  childId: number,
  file: File,
): Promise<{
  id: number;
  name: string;
  absenceStartDate: string;
  absenceEndDate: string;
  absenceReason: string;
  note: string;
}> => {
  try {
    const token = localStorage.getItem('accessToken'); // accessToken 가져오기

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(
      `${BASE_URL}/children/${childId}/absence-certificates`,
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
        '미등원 확인서 등록 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('미등원 확인서 등록 중 알 수 없는 오류 발생:', error);
      throw new Error('미등원 확인서 등록 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};

export const getAbsent = async (
  childId: number,
): Promise<
  Array<{
    id: number;
    title: string;
    startDate: string;
    endDate: string;
  }>
> => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const response = await axios.get(
      `${BASE_URL}/children/${childId}/absence-certificates`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data.data.certificates; // 진단서 목록 반환
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '미등원 확인서 목록 조회 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('미등원 확인서 목록 조회 중 알 수 없는 오류 발생:', error);
      throw new Error(
        '미등원 확인서 목록 조회 중 알 수 없는 오류가 발생했습니다.',
      );
    }
  }
};

export const getAbsentDetails = async (
  childId: number,
  absenceCertificateId: number,
): Promise<{
  name: string;
  absenceStartDate: string;
  absenceEndDate: string;
  absenceReason: string;
  note: string;
}> => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const response = await axios.get(
      `${BASE_URL}/children/${childId}/absence-certificates/${absenceCertificateId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data.data; // 미등원 확인서 세부 데이터 반환
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '미등원 확인서 세부 조회 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('미등원 확인서 세부 조회 중 알 수 없는 오류 발생:', error);
      throw new Error(
        '미등원 확인서 세부 조회 중 알 수 없는 오류가 발생했습니다.',
      );
    }
  }
};

export const applyService = async (data: {
  childId: number;
  medicalCertificateId: number;
  absenceCertificateId: number;
  startDate: string;
  endDate: string;
  memo: string;
}): Promise<number> => {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      throw new Error('로그인이 필요합니다.');
    }

    const response = await axios.post(`${BASE_URL}/apply`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('서비스 신청 성공:', response.data.message);
    return response.data.data.applyId;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        '서비스 신청 실패:',
        `상태코드: ${error.response.status}, 메시지:`,
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    } else {
      console.error('서비스 신청 중 알 수 없는 오류 발생:', error);
      throw new Error('서비스 신청 중 알 수 없는 오류가 발생했습니다.');
    }
  }
};
