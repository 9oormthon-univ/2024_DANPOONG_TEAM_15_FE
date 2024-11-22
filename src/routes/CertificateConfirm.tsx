import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/CertificateConfirmStyle';

import TopBackXBar from '@/components/common/TopBackXBar';
import ProgressBar from '@/components/request/ProgressBar';
import CheckIcon from '@/assets/icons/request/green-check.svg';

interface CertificateData {
  name: string;
  parentName: string;
  address: string;
  date: string;
  disease: string;
  content: string;
  doctorName: string;
}

function CertificateConfirm() {
  const navigate = useNavigate();

  // 더미 데이터
  const [certificateData, setCertificateData] = useState<CertificateData>({
    name: '홍길동',
    parentName: '김구름',
    address: '서울시 oo구 oo동 123-4',
    date: '0000-00-00',
    disease: '병명',
    content: `내용`,
    doctorName: 'ooo',
  });

  // 데이터 가공
  const processedCertificateData = {
    ...certificateData,
    doctorName: certificateData.doctorName.includes('의사')
      ? certificateData.doctorName
      : `${certificateData.doctorName} 의사`,
  };

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
                  <ProgressBar isStatus={0} />
                  <S.NumTitle>1. 서류 제출</S.NumTitle>
                  <S.Title>진단서 제출</S.Title>
                  <S.InformList>
                    {Object.entries(processedCertificateData).map(
                      ([key, value]) => (
                        <S.TitleText key={key}>
                          <S.InformTitle>{getFieldTitle(key)}</S.InformTitle>
                          <S.InformText>{value}</S.InformText>
                        </S.TitleText>
                      ),
                    )}
                  </S.InformList>
                </S.Container>
                <S.FooterContainer>
                  <S.Badge>
                    <S.BadgeCircle src={CheckIcon} alt="올바른 서류" />
                    올바른 서류입니다!
                  </S.Badge>
                  <S.Button
                    onClick={() => handleNavLinkClick('/request/absent')}>
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
    parentName: '보호자 이름',
    address: '주소',
    date: '진료 날짜',
    disease: '진단명',
    content: '진료 내용',
    doctorName: '의료진 정보',
  };
  return fieldTitles[key] || key; // 필드 제목이 없으면 키 그대로 반환
};

export default CertificateConfirm;
