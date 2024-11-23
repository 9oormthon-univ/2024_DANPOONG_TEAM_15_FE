import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/NonStyle';
import {handleSuccessPayment} from '@/utils/kakaoPay';
import {COLOR} from '@/const/color';
import {LoadingIcon} from '@/assets/icons/common';

const Container = styled.div`
  padding: 200px 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const HeaderMainText = styled.div`
  padding-top: 32px;
  font-size: 28px;
  font-weight: 600;
  color: ${COLOR.BLACK_01};
`;

const HeaderSubText = styled.div`
  color: ${COLOR.BLACK_01};
`;

const PaySuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pgToken = searchParams.get('pg_token');

    if (pgToken) {
      const processPayment = async () => {
        try {
          await handleSuccessPayment(pgToken);
          navigate('/request/done');
        } catch (error: any) {
          console.error('결제 완료 처리 중 오류:', error.message);
          alert('결제 완료 처리 중 오류가 발생했습니다.');
          navigate('/main');
        }
      };

      processPayment();
    } else {
      console.error('pg_token이 URL에 없습니다.');
      alert('결제 인증 토큰이 필요합니다.');
      navigate('/main');
    }
  }, [location, navigate]);

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <Container>
                <LoadingIcon />
                <HeaderMainText>서비스 결제 중</HeaderMainText>
                <HeaderSubText>잠시만 기다려주세요 :)</HeaderSubText>
              </Container>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
};

export default PaySuccess;
