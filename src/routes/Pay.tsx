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

const NumTitle = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
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

const BlackBigText = styled.div`
  padding-bottom: 8px;
  color: ${COLOR.BLACK_01};
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.45px;
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
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  font-family: 'Pretendard';
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
                    <NumTitle>3. 결제</NumTitle>
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
