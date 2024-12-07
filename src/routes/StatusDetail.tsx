import {useEffect, useState} from 'react';
import styled from 'styled-components';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/RequestStyle';
import TopBackBar from '@/components/application-list/TopBackBar';
import {COLOR} from '@/const/color';
import StatusCard from '@/components/application-list/StatusCard';
import CaregiverCard from '@/components/application-list/CaregiverCard';
import RegistrationCard from '@/components/application-list/RegistrationCard';
import {getChildDetailStatus} from '@/utils/mainApi';

const Container = styled.div`
  padding: 8px 20px 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HeaderText = styled.div`
  font-size: 20px;
  padding: 8px 0px 12px;
  font-weight: 600;
  color: ${COLOR.BLACK_01};
`;

const GrayBoldText = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

const BlackText = styled.div`
  color: ${COLOR.BLACK_01};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
  white-space: pre-line;
`;

const GrayText = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
  white-space: pre-line;
`;

const GrayBigBoldText = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.35px;
`;

const OrangeText = styled.span`
  padding-left: 8px;
  color: ${COLOR.ORANGE_02};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.35px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SmallLine = styled.div`
  width: 1px;
  height: 10px;
  background-color: ${COLOR.GRAY_09};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FlexRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CostContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

const Divider = styled.div`
  border-bottom: 1px solid ${COLOR.WHITE_LIGHT};
`;
function StatusDetail() {
  const params = new URLSearchParams(window.location.search);
  const applyId = params.get('applyId');
  console.log(applyId);
  const [applicationDetailData, setApplicationDetailData] = useState<any>(null);
  console.log(
    '🚀 ~ file: StatusDetail.tsx:77 ~ StatusDetail ~ applicationDetailData:',
    applicationDetailData,
  );

  useEffect(() => {
    if (!applyId) {
      return;
    }

    const fetchData = async () => {
      try {
        const appData = await getChildDetailStatus(applyId);
        setApplicationDetailData(appData.data); // 실제 데이터를 상태에 저장
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [applyId]);

  if (!applicationDetailData) {
    return;
  }

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <TopBackBar />
              <Container>
                <HeaderText>
                  {applicationDetailData.applyDate}에 신청했어요
                </HeaderText>
                <ContentContainer>
                  <GrayBoldText>서비스 신청 현황</GrayBoldText>
                  <StatusCard status={applicationDetailData.status} />
                </ContentContainer>
                <ContentContainer>
                  <GrayBoldText>매칭된 돌보미</GrayBoldText>
                  <CaregiverCard
                    status={applicationDetailData.status}></CaregiverCard>
                </ContentContainer>
                <ContentContainer>
                  <GrayBoldText>등록한 서류</GrayBoldText>
                  <RegistrationCard
                    medicalCertificate={
                      applicationDetailData.medicalCertificates
                    }
                    absenceCertificate={
                      applicationDetailData.absenceCertificates
                    }
                  />
                </ContentContainer>
                <InfoContainer>
                  <GrayBoldText>이름</GrayBoldText>
                  <BlackText>{applicationDetailData.name}</BlackText>
                </InfoContainer>
                <InfoContainer>
                  <GrayBoldText>생년월일</GrayBoldText>
                  <BlackText>
                    {applicationDetailData.birthDate}
                    <OrangeText>(만 {applicationDetailData.age}세)</OrangeText>
                  </BlackText>
                </InfoContainer>
                <InfoContainer>
                  <GrayBoldText>정부지원 유형</GrayBoldText>
                  <BlackText>{applicationDetailData.incomeType}</BlackText>
                </InfoContainer>
                <InfoContainer>
                  <GrayBoldText>돌봄 일정</GrayBoldText>
                  <BlackText>
                    <DateContainer>
                      {applicationDetailData.careDate}
                      <SmallLine />
                      {applicationDetailData.careTime}
                    </DateContainer>
                  </BlackText>
                </InfoContainer>
                <InfoContainer>
                  <GrayBoldText>돌봄 메모</GrayBoldText>
                  {applicationDetailData.memo ? (
                    <BlackText>{applicationDetailData.memo}</BlackText>
                  ) : (
                    <GrayText>작성된 메모 없음</GrayText>
                  )}
                </InfoContainer>
                <Divider />
                <GrayBigBoldText>총 합계</GrayBigBoldText>
                <FlexRowContainer>
                  <GrayBoldText>기본요금</GrayBoldText>
                  <BlackText>{applicationDetailData.totalAmount}원</BlackText>
                </FlexRowContainer>
                <FlexRowContainer>
                  <GrayBoldText>정부지원 판정금</GrayBoldText>
                  <BlackText>{applicationDetailData.subsidy}원</BlackText>
                </FlexRowContainer>
                <FlexRowContainer>
                  <GrayBoldText>본인 부담금</GrayBoldText>
                  <CostContainer>
                    <OrangeText>{applicationDetailData.copay}</OrangeText>
                    <BlackText>원</BlackText>
                  </CostContainer>
                </FlexRowContainer>
              </Container>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default StatusDetail;
