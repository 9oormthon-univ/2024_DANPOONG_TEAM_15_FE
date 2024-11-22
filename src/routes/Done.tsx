import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/RequestStyle';
import {COLOR} from '@/const/color';
import {CircleCheckIcon, DoneIvoryIcon} from '@/assets/icons/request';
import ProgressBar from '@/components/request/ProgressBar';

const PageSpace = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
`;

const PaddingTop = styled.div`
  height: 80px;
`;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 50px;
`;

const GrayBoldText = styled.div`
  font-weight: 600;
  color: ${COLOR.GRAY_04};
`;

const BlackBoldText = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${COLOR.BLACK_03};
`;

const GrayText = styled.div`
  color: ${COLOR.GRAY_04};
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${COLOR.WHITE_01};
  padding: 16px 20px 50px;
`;

const HomeButton = styled.button`
  padding: 16px;
  border: none;
  background-color: ${COLOR.ORANGE_01};
  color: ${COLOR.WHITE_01};
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.ORANGE_02};
    transition: background-color 0.2s;
  }
`;

function Done() {
  const navigate = useNavigate();

  const handleNavLinkClick = (path: string): void => {
    navigate(path);
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <PageSpace>
                {/* <TopBackBar /> */}
                <PaddingTop />
                <Container>
                  <ProgressBar isStatus={4} />
                  <InfoContainer>
                    <GrayBoldText>4. 신청 완료</GrayBoldText>
                  </InfoContainer>
                  <BodyContainer>
                    <CircleCheckIcon />
                    <BlackBoldText>
                      정상적으로 서비스 신청이
                      <br />
                      완료되었습니다!
                    </BlackBoldText>
                    <GrayText>일정에 맞추어 돌보미를 매칭해드릴게요</GrayText>
                  </BodyContainer>
                </Container>
                <FooterContainer>
                  <DoneIvoryIcon />
                  <HomeButton onClick={() => handleNavLinkClick('/main')}>
                    홈으로 가기
                  </HomeButton>
                </FooterContainer>
              </PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Done;
