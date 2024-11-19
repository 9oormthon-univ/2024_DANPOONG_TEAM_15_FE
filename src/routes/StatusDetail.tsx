import styled from 'styled-components';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/RequestStyle';
import TopBackBar from '@/components/application-list/TopBackBar';
import {dummyApplicationDetailList} from '@/const/dummy_data/dummy_application_detail_list';
import {COLOR} from '@/const/color';

const Container = styled.div`
  padding: 8px 20px 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HeaderText = styled.div`
  font-size: 1.25rem;
  padding: 8px 0px 12px;
  font-weight: 600;
  color: ${COLOR.BLACK_01};
`;

const GrayBoldText = styled.div`
  font-weight: 600;
  color: ${COLOR.GRAY_04};
`;

const GrayBoldBigText = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${COLOR.GRAY_04};
`;

const BlackText = styled.div`
  color: ${COLOR.BLACK_01};
`;

const OrangeText = styled.span`
  padding-left: 8px;
  color: ${COLOR.ORANGE_02};
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
  font-size: 1.2rem;
  font-weight: 600;
`;

const Divider = styled.div`
  border-bottom: 1px solid ${COLOR.WHITE_LIGHT};
`;

function StatusDetail() {
  const applicationDetailData = dummyApplicationDetailList;

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
                  <GrayBoldText> ~~ 정보 컨테이너 ~~ </GrayBoldText>
                </ContentContainer>
                <ContentContainer>
                  <GrayBoldText>매칭된 돌보미</GrayBoldText>
                  <GrayBoldText> ~~ 정보 컨테이너 ~~ </GrayBoldText>
                </ContentContainer>
                <ContentContainer>
                  <GrayBoldText>등록한 서류</GrayBoldText>
                  <GrayBoldText> ~~ 정보 컨테이너 ~~ </GrayBoldText>
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
                    {applicationDetailData.careDate} |{' '}
                    {applicationDetailData.careTime}
                  </BlackText>
                </InfoContainer>
                <Divider />
                <GrayBoldBigText>총 합계</GrayBoldBigText>
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
                    <OrangeText>{applicationDetailData.subsidy}</OrangeText>
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
