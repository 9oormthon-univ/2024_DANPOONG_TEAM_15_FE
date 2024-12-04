import * as A from '@/styles/components/AlarmCardStyle';

interface AlarmCardProps {
  name: string;
  status: string;
  date: string;
}

// 날짜 형식을 변환하는 함수
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1 필요
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
}

function AlarmCard({name, status, date}: AlarmCardProps) {
  return (
    <>
      <A.TotalContainer>
        <A.TitleContainer>
          {name} 아이
          <A.Bold>{status}</A.Bold>
        </A.TitleContainer>
        <A.DateContainer>{formatDate(date)} 돌봄 신청건</A.DateContainer>
      </A.TotalContainer>
    </>
  );
}

export default AlarmCard;
