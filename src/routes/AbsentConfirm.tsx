import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/AbsentConfirmStyle';

import TopBackXBar from '@/components/common/TopBackXBar';
import ProgressBar from '@/components/request/ProgressBar';
import CheckIcon from '@/assets/icons/request/green-check.svg';

interface CertificateData {
  name: string;
  date: string;
  reason: string;
  content: string;
}

function AbsentConfirm() {
  const navigate = useNavigate();

  // 더미 데이터
  const [certificateData] = useState<CertificateData>({
    name: '홍길동',
    date: '0000-00-00 ~ 0000-00-00',
    reason: '병명',
    content: '내용',
  });

  const handleNavLinkClick = (path: string): void => {
    navigate(path);
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.PageSpace>
                <TopBackXBar />
                <S.Container>
                  <ProgressBar isStatus={1} />
                  <S.NumTitle>1. 서류 제출</S.NumTitle>
                  <S.Title>미등원 확인서 제출</S.Title>
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
                  <S.Badge>
                    <S.BadgeCircle src={CheckIcon} alt="올바른 서류" />
                    올바른 서류입니다!
                  </S.Badge>
                  <S.Button
                    onClick={() => handleNavLinkClick('/request/schedule')}>
                    다음
                  </S.Button>
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

export default AbsentConfirm;