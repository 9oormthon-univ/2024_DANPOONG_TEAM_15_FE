import axios from "axios";
import { BASE_URL, LOCAL_URL } from "./config/config";

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

// 로그인 요청 데이터 타입
interface LoginRequest {
    email: string;
    password: string;
}

// 로그인 응답 데이터 타입 (필요 시 수정 가능)
interface LoginResponse {
    success: boolean;
    message: string;
    data: {
        accessToken: string;
        refreshToken?: string; // 필요에 따라 추가
    };
}

// 회원가입
export const createAccountApi = async (formData: SignUpRequest): Promise<void> => {
    console.log(formData);
    try {
        const response = await axios.post<SignUpResponse>(`${BASE_URL}/api/v1/auth/sign-up`, formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response.data);
    } catch (error: any) {
        console.error("error!", error.response?.data || error.message);
    }
};

// 로그인 함수 정의
export const loginApi = async (email: string, password: string): Promise<void> => {
    try {
        const payload: LoginRequest = { email, password };

        const response = await axios.post<LoginResponse>(
            `${LOCAL_URL}/api/v1/auth/login`,
            payload,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log(response.data);

        // 로그인으로 발급받은 accessToken을 AsyncStorage에 저장
        const accessToken = response.data.data.accessToken;
        await localStorage.setItem("accessToken", accessToken);

    } catch (error: any) {
        console.error("error!", error.response?.data || error.message);
    }
};