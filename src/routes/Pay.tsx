import {useEffect, useState} from 'react';
import styled from 'styled-components';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/RequestStyle';
import {COLOR} from '@/const/color';
import TopBackXBar from '@/components/common/TopBackXBar';
import {KakaoPayIcon} from '@/assets/icons/request';
import ProgressBar from '@/components/request/ProgressBar';
import {postPayment} from '@/utils/kakaoPay';
import {getChildDetailStatus} from '@/utils/mainApi';

const PageSpace = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
`;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;

const GrayBoldText = styled.div`
  font-weight: 600;
  color: ${COLOR.GRAY_04};
`;

const BlackText = styled.div`
  color: ${COLOR.BLACK_01};
`;

const BlackBigText = styled.div`
  font-size: 20px;
  color: ${COLOR.BLACK_01};
  padding-bottom: 8px;
`;

const OrangeText = styled.span`
  padding-left: 8px;
  color: ${COLOR.ORANGE_02};
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

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${COLOR.WHITE_01};
  padding: 16px 20px 50px;
`;

const KakaoPayContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${COLOR.WHITE_08};
  padding: 12px 16px;
  border-radius: 100px;
  margin: 0 auto;
`;

const KakaoPayText = styled.div`
  font-size: 14px;
  color: ${COLOR.BLACK_01};
`;

const PayButton = styled.button`
  padding: 16px;
  border: none;
  background-color: ${COLOR.ORANGE_01};
  color: ${COLOR.WHITE_01};
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.ORANGE_02};
    transition: background-color 0.2s;
  }
`;

function Pay() {
  const params = new URLSearchParams(window.location.search);
  const applyId = params.get('applyId');
  const [applicationDetailData, setApplicationDetailData] = useState<any>(null);
  console.log(
    '🚀 ~ file: Pay.tsx:126 ~ Pay ~ applicationDetailData:',
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

  const makePayment = async () => {
    try {
      // const applyId = 2;
      const applyId = Number(params.get('applyId'));
      const response = await postPayment(applyId);
      // 모바일 환경 감지
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      const redirectUrl = isMobile
        ? response.data.next_redirect_mobile_url
        : response.data.next_redirect_pc_url;

      window.location.href = redirectUrl;
    } catch (error: any) {
      console.error('에러 발생:', error.message);
    }
  };

  // 결제하기 클릭
  const handlePay = () => {
    makePayment();
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <PageSpace>
                <TopBackXBar />
                <Container>
                  <ProgressBar isStatus={3} />
                  <InfoContainer>
                    <GrayBoldText>3. 결제</GrayBoldText>
                    <BlackBigText>
                      선택한 일정에 따라 계산된 금액이에요
                    </BlackBigText>
                  </InfoContainer>
                  <InfoContainer>
                    <GrayBoldText>이름</GrayBoldText>
                    <BlackText>{applicationDetailData.name}</BlackText>
                  </InfoContainer>
                  <InfoContainer>
                    <GrayBoldText>생년월일</GrayBoldText>
                    <BlackText>
                      {applicationDetailData.birthDate}
                      <OrangeText>
                        (만 {applicationDetailData.age}세)
                      </OrangeText>
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
                  <GrayBoldText>총 합계</GrayBoldText>
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
                <FooterContainer>
                  <KakaoPayContainer>
                    <KakaoPayIcon />
                    <KakaoPayText>카카오페이로 간편결제!</KakaoPayText>
                  </KakaoPayContainer>
                  <PayButton onClick={handlePay}>
                    {applicationDetailData.copay}원 결제하기
                  </PayButton>
                </FooterContainer>
              </PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Pay;
