import {useState, useEffect} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/AbsentInformStyle';
import TopBackLeftArrowBar from '@/components/common/TopBackLeftArrowBar';
import {getAbsentDetails} from '@/utils/requestApi';

interface CertificateData {
  name: string;
  absenceStartDate: string;
  absenceEndDate: string;
  absenceReason: string;
  note: string;
}

function AbsentInform() {
  const navigate = useNavigate();
  const {absenceCertificateId} = useParams();
  const location = useLocation();
  const [certificateData, setCertificateData] =
    useState<CertificateData | null>(null);

  const title = location.state?.title || '미등원 확인서';

  useEffect(() => {
    const fetchCertificateDetails = async () => {
      try {
        const childId = localStorage.getItem('childId');
        if (!childId) {
          throw new Error('선택된 아이의 정보가 없습니다.');
        }
        if (!absenceCertificateId) {
          throw new Error('미등원 확인서 ID가 누락되었습니다.');
        }
        const data = await getAbsentDetails(
          Number(childId),
          Number(absenceCertificateId),
        );
        setCertificateData(data); // 그대로 저장
      } catch (error) {
        console.error('미등원 확인서 세부 조회 실패:', error);
      }
    };

    fetchCertificateDetails();
  }, [absenceCertificateId]);

  const onClickBack = () => {
    navigate(-1);
  };

  if (!certificateData) {
    return (
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.PageSpace>
                <TopBackLeftArrowBar />
                <S.Container>
                  <S.Title>진단서 정보를 불러올 수 없습니다.</S.Title>
                  <S.FooterContainer>
                    <S.Button onClick={onClickBack}>목록으로 가기</S.Button>
                  </S.FooterContainer>
                </S.Container>
              </S.PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    );
  }

  const processedCertificateData = {
    name: certificateData.name,
    period: `${certificateData.absenceStartDate} ~ ${certificateData.absenceEndDate}`,
    reason: certificateData.absenceReason,
    content: certificateData.note,
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
                  <S.Title>{title} 미등원 확인서</S.Title>
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

const getFieldTitle = (key: string): string => {
  const fieldTitles: Record<string, string> = {
    name: '이름',
    period: '결석 기간',
    reason: '결석 사유',
    content: '비고',
  };
  return fieldTitles[key] || key;
};

export default AbsentInform;
