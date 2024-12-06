import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/RequestStyle';
import {COLOR} from '@/const/color';
import {
  ArrowRightIcon,
  IvoryRemoveBgIcon,
  IvoryTextIcon,
} from '@/assets/icons/common';
import TopMentBar from '@/components/common/TopMentBar';
import {getUserInfo} from '@/utils/userApi';

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
  gap: 14px;
`;

const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLOR.ORANGE_01};
  padding: 0px 0px 0px 20px;
  border-radius: 12px;
  gap: 20px;
  height: 90px;
  overflow: hidden;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${COLOR.WHITE_01};
`;

const UserType = styled.div`
  color: ${COLOR.WHITE_01};
`;

const ListContainer = styled.div`
  border-radius: 12px;
  background-color: ${COLOR.WHITE_07};
  display: flex;
  flex-direction: column;
`;

const BlackText = styled.div`
  font-size: 14px;
  color: ${COLOR.BLACK_03};
`;

const ListCard = styled.button`
  background-color: ${COLOR.WHITE_07};
  display: flex;
  overflow: hidden;
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.WHITE_LIGHT};
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 20px 50px;
`;

const OrangeSmallText = styled.div`
  font-size: 14px;
  color: ${COLOR.ORANGE_01};
`;

function Mypage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await getUserInfo();
        setUserName(userResponse.name);
        setUserType(userResponse.incomeType);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // 소득 유형 변경 페이지로 이동
  const onClickIncomeType = () => {
    navigate('/mypage/income-type');
  };

  // 미등원 확인서 파일 다운로드 페이지로 이동
  const onClickCertificateDownload = () => {
    navigate('/mypage/certificate-download');
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <PageSpace>
                {/* 상단 제목 */}
                <TopMentBar titleText="마이페이지" />

                {/* 사용자 카드 */}
                <Container>
                  <UserCard>
                    <UserInfo>
                      <UserName>{userName || '\u00A0\u00A0\u00A0'}님</UserName>
                      <UserType>소득유형 | {userType}</UserType>
                    </UserInfo>
                    <IvoryRemoveBgIcon width={110} height={110} />
                  </UserCard>

                  {/* 리스트 */}
                  <ListContainer>
                    <ListCard onClick={onClickIncomeType}>
                      <BlackText>소득 유형 변경</BlackText>
                      <ArrowRightIcon width={20} height={20} />
                    </ListCard>
                    <ListCard onClick={onClickCertificateDownload}>
                      <BlackText>미등원 확인서 파일 다운로드</BlackText>
                      <ArrowRightIcon width={20} height={20} />
                    </ListCard>
                  </ListContainer>

                  <ListContainer>
                    <ListCard>
                      <BlackText>이용약관</BlackText>
                      <ArrowRightIcon width={20} height={20} />
                    </ListCard>
                    <ListCard>
                      <BlackText>개인 정보 처리 방침</BlackText>
                      <ArrowRightIcon width={20} height={20} />
                    </ListCard>
                    <ListCard>
                      <BlackText>버전 정보</BlackText>
                      <ArrowRightIcon width={20} height={20} />
                    </ListCard>
                  </ListContainer>
                </Container>

                {/* 하단 로고 */}
                <FooterContainer>
                  <OrangeSmallText>
                    우리 아이의 안심케어를 약속하는
                  </OrangeSmallText>
                  <IvoryTextIcon />
                </FooterContainer>
              </PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Mypage;
