import {useEffect, useState} from 'react';
import styled from 'styled-components';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/StatusStyle';
import {COLOR} from '@/const/color';
import TopBackBar from '@/components/application-list/TopBackBar';
import ApplicationCard from '@/components/application-list/ApplicationCard';
import {getChildStatus} from '@/utils/mainApi';
import {ApplicationDataSchema} from '@/types';

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
  const params = new URLSearchParams(window.location.search);
  const childId = params.get('childId');
  const [applicationListData, setAppListData] =
    useState<ApplicationDataSchema[]>();
  console.log(
    '🚀 ~ file: Status.tsx:47 ~ Status ~ appListData:',
    applicationListData,
  );

  useEffect(() => {
    if (!childId) {
      return;
    }

    const fetchData = async () => {
      try {
        const appData = await getChildStatus(childId);
        setAppListData(appData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [childId]);

  if (!applicationListData) {
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
                <Header>
                  <HeaderText>
                    {applicationListData[0]?.name ?? '아이 이름'}
                  </HeaderText>
                  <HeaderSubText>서비스 신청 내역</HeaderSubText>
                </Header>
                <ApplicationCardContainer>
                  {applicationListData.map((item, index) => (
                    <ApplicationCard
                      key={index}
                      applyId={item.id}
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
