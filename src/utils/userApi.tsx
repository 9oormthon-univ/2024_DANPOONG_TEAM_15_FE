import axios from 'axios';
// import { BASE_URL } from "./config/config";
import {LOCAL_URL} from './config/config';

// 요청 데이터 타입 정의
interface SignUpRequest {
  email: string;
  name: string;
  password: string;
  incomeType: string;
}

// 응답 데이터 타입 정의
interface SignUpResponse {
  success: boolean;
  message: string;
  data?: any; // 데이터 구조를 알면 구체적으로 정의 가능
}

// 회원가입
export const createAccountApi = async (
  formData: SignUpRequest,
): Promise<void> => {
  console.log(formData);
  try {
    const response = await axios.post<SignUpResponse>(
      `${LOCAL_URL}/api/v1/auth/sign-up`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log(response.data);
  } catch (error: any) {
    console.error('error!', error.response?.data || error.message);
  }
};

// 로그인
