import styled from 'styled-components';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/RequestStyle';
import TopBackBar from '@/components/application-list/TopBackBar';

const Container = styled.div`
  padding: 8px 20px 50px;
`;

function StatusDetail() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <TopBackBar />
              <Container>hello</Container>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default StatusDetail;
