import * as C from '../styles/CommonStyle';
import * as S from '../styles/StatusStyle';
import {dummyApplicationList} from '@/const/dummy_data/dummy_application_list';

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
                <div>hello</div>
              </S.Status>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Status;
