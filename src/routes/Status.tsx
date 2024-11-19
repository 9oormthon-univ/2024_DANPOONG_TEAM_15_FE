import styled from 'styled-components';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/StatusStyle';
import {dummyApplicationList} from '@/const/dummy_data/dummy_application_list';
import {COLOR} from '@/const/color';
import TopBackBar from '@/components/application-list/TopBackBar';

const HelloText = styled.div`
  font-size: 1.5rem;
  font-weight: 600; /* Semibold */
  color: ${COLOR.BLACK_01};
`;

function Status() {
  const applicationList = dummyApplicationList;
  console.log(
    '🚀 ~ file: Status.tsx:6 ~ Status ~ applicationList:',
    applicationList,
  );

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Status>
                <TopBackBar />
                <HelloText>hello</HelloText>
              </S.Status>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Status;
