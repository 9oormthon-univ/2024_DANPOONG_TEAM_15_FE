import styled from 'styled-components';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/StatusStyle';
import {dummyApplicationList} from '@/const/dummy_data/dummy_application_list';
import {COLOR} from '@/const/color';
import TopBackBar from '@/components/application-list/TopBackBar';
import ApplicationCard from '@/components/application-list/ApplicationCard';

const Container = styled.div`
  padding: 8px 20px 50px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0px 32px;
  gap: 8px;
`;

const HeaderText = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${COLOR.BLACK_01};
`;

const HeaderSubText = styled.div`
  font-size: 24px;
  color: ${COLOR.BLACK_01};
`;

const ApplicationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function Status() {
  const applicationListData = dummyApplicationList;
  console.log(
    '🚀 ~ file: Status.tsx:40 ~ Status ~ applicationListData:',
    applicationListData,
  );

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <TopBackBar />
              <Container>
                <Header>
                  <HeaderText>{applicationListData[0].name}</HeaderText>
                  <HeaderSubText>서비스 신청 내역</HeaderSubText>
                </Header>
                <ApplicationCardContainer>
                  {applicationListData.map((item, index) => (
                    <ApplicationCard
                      key={index}
                      applyDate={item.applyDate}
                      careDate={item.careDate}
                      careTime={item.careTime}
                      status={item.status}
                    />
                  ))}
                </ApplicationCardContainer>
              </Container>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Status;
