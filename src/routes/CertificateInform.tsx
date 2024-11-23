import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/CertificateInformStyle';

import TopBackLeftArrowBar from '@/components/common/TopBackLeftArrowBar';
import {getMedicalCertificateDetails} from '@/utils/requestApi';

interface CertificateData {
  name: string;
  address: string;
  diagnosisDate: string;
  diagnosisName: string;
  diagnosisContent: string;
  doctorName: string;
}

function CertificateInform() {
  const navigate = useNavigate();
  const {medicalCertificateId} = useParams(); // URL에서 medicalCertificateId 가져오기
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

        // API 호출
        const data = await getMedicalCertificateDetails(
          Number(childId),
          Number(medicalCertificateId),
        );

        // id 필드를 제외하고 나머지 데이터만 저장
        const {id, ...rest} = data;
        setCertificateData(rest);
      } catch (error) {
        console.error('진단서 세부 조회 실패:', error);
      }
    };

    fetchCertificateDetails();
  }, [medicalCertificateId]);

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

  // 데이터 가공
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
                  <S.Title>{certificateData.diagnosisDate} 진단서</S.Title>
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
  return fieldTitles[key] || key; // 필드 제목이 없으면 키 그대로 반환
};

export default CertificateInform;
