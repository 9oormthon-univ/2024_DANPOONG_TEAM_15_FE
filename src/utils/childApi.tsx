import axios from "axios";
import { LOCAL_URL } from "./config/config";

// 아이 목록 응답 데이터 타입 정의
interface Child {
    id: string;
    name: string;
    age: number;
    [key: string]: any; // 추가 필드가 있을 경우
}

interface GetChildrenResponse {
    success: boolean;
    message: string;
    data: Child[];
}

// 아이 목록 조회 함수 정의
export const getChildren = async (): Promise<Child[] | void> => {
    try {
        // 로컬 스토리지에서 토큰 가져오기
        const token = localStorage.getItem("accessToken");

        if (token) {
            const response = await axios.get<GetChildrenResponse>(
                `${import.meta.env.VITE_BASE_URL}/api/v1/children`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // 헤더에 토큰 추가
                    },
                }
            );
            return response.data.data; // 응답 데이터 반환
        } else {
            console.log("토큰이 없습니다.");
        }
    } catch (error: any) {
        console.error("error!", error.response?.data || error.message);
    }
};
