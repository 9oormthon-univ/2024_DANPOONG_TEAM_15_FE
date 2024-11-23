import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/CertificateInformStyle';

import TopBackLeftArrowBar from '@/components/common/TopBackLeftArrowBar';
import {getMedicalCertificateDetails} from '@/utils/requestApi';

interface CertificateData {
  id?: number; // id를 포함
  name: string;
  address: string;
  diagnosisDate: string;
  diagnosisName: string;
  diagnosisContent: string;
  doctorName: string;
}

function CertificateInform() {
  const navigate = useNavigate();
  const {medicalCertificateId} = useParams();
  const [certificateData, setCertificateData] =
    useState<CertificateData | null>(null);

  useEffect(() => {
    const fetchCertificateDetails = async () => {
      try {
        const childId = localStorage.getItem('childId');
        if (!childId) {
          throw new Error('선택된 아이의 정보가 없습니다.');
        }
        if (!medicalCertificateId) {
          throw new Error('진단서 ID가 누락되었습니다.');
        }

        const data = await getMedicalCertificateDetails(
          Number(childId),
          Number(medicalCertificateId),
        );

        const {id, ...rest} = data;
        setCertificateData(rest as CertificateData);
      } catch (error) {
        console.error('진단서 세부 조회 실패:', error);
      }
    };

    fetchCertificateDetails();
  }, [medicalCertificateId]);

  const onClickBack = () => {
    navigate(-1);
  };

  // 날짜 형식 변환 함수
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
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
    ...certificateData,
    doctorName: certificateData.doctorName.includes('의사')
      ? certificateData.doctorName
      : `${certificateData.doctorName} 의사`,
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
                  {/* 진단서 제목에 형식화된 날짜 사용 */}
                  <S.Title>
                    {formatDate(certificateData.diagnosisDate)} 진단서
                  </S.Title>
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

// 필드 제목 매핑 함수
const getFieldTitle = (key: string): string => {
  const fieldTitles: Record<string, string> = {
    name: '이름',
    address: '주소',
    diagnosisDate: '진료 날짜',
    diagnosisName: '진단명',
    diagnosisContent: '진료 내용',
    doctorName: '의료진 정보',
  };
  return fieldTitles[key] || key;
};

export default CertificateInform;
