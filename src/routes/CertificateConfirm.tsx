import {useNavigate, useLocation} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/CertificateConfirmStyle';
import TopBackXBar from '@/components/common/TopBackXBar';
import ProgressBar from '@/components/request/ProgressBar';
import CheckIcon from '@/assets/icons/request/green-check.svg';
import AlarmToast from '@/components/alarm/AlarmToast';

interface CertificateData {
  name: string;
  address: string;
  diagnosisDate: string;
  diagnosisName: string;
}

function CertificateConfirm() {
  const navigate = useNavigate();
  const location = useLocation();

  // location.state에서 전달받은 데이터 가져오기
  const certificateData: Omit<CertificateData, 'id'> | undefined =
    location.state;

  // 데이터가 없을 경우 처리
  if (!certificateData) {
    return (
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.PageSpace>
                <TopBackXBar />
                <S.Container>
                  <S.Title>진단서 정보를 찾을 수 없습니다.</S.Title>
                  <S.FooterContainer>
                    <S.Button onClick={() => navigate(-1)}>뒤로 가기</S.Button>
                  </S.FooterContainer>
                </S.Container>
              </S.PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    );
  }

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
                    {Object.entries(certificateData).map(([key, value]) => (
                      <S.TitleText key={key}>
                        <S.InformTitle>{getFieldTitle(key)}</S.InformTitle>
                        <S.InformText>{value}</S.InformText>
                      </S.TitleText>
                    ))}
                  </S.InformList>
                </S.Container>
                <S.FooterContainer>
                  <AlarmToast text="올바른 서류입니다!" imageSrc={CheckIcon} />
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
    address: '주소',
    diagnosisDate: '진료 날짜',
    diagnosisName: '진단명',
  };
  return fieldTitles[key] || key; // 필드 제목이 없으면 키 그대로 반환
};

export default CertificateConfirm;
