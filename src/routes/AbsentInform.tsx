import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/AbsentInformStyle';
import TopBackLeftArrowBar from '@/components/common/TopBackLeftArrowBar';

interface CertificateData {
  name: string;
  date: string;
  reason: string;
  content: string;
}

function AbsentInform() {
  const navigate = useNavigate();

  // 더미 데이터
  const [certificateData] = useState<CertificateData>({
    name: '홍길동',
    date: '0000-00-00 ~ 0000-00-00',
    reason: '병명',
    content: '내용',
  });

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.PageSpace>
                <TopBackLeftArrowBar />
                <S.Container>
                  <S.Title>0000년 0월 0일 미등원 확인서</S.Title>
                  <S.InformList>
                    {Object.entries(certificateData).map(([key, value]) => (
                      <S.TitleText key={key}>
                        <S.InformTitle>{getFieldTitle(key)}</S.InformTitle>
                        <S.InformText>{value}</S.InformText>
                      </S.TitleText>
                    ))}
                  </S.InformList>
                </S.Container>
                <S.FooterContainer>
                  <S.Button onClick={onClickBack}>목록으로 가기</S.Button>
                </S.FooterContainer>
              </S.PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

// 필드 제목 매핑 함수
const getFieldTitle = (key: string): string => {
  const fieldTitles: Record<string, string> = {
    name: '이름',
    date: '결석 기간',
    reason: '결석 사유',
    content: '비고',
  };
  return fieldTitles[key] || key; // 필드 제목이 없으면 키 그대로 반환
};

export default AbsentInform;
