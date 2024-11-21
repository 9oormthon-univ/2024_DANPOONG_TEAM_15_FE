import * as C from '../styles/CommonStyle';
import * as S from '../styles/MainStyle';

import Header from '../components/Header';
import BoryBaby from '../assets/bory-baby.svg';
import RequestButton from '@/components/main/RequestButton';
import ChildCard from '@/components/main/ChildCard';

function Main() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Main>
                <Header />
                <S.Container>
                  <S.Title>
                    <S.Name>
                      <S.Bold>이주연</S.Bold>님
                    </S.Name>
                    <S.SubTitle>오늘도 마음 편히 보내세요!</S.SubTitle>
                  </S.Title>
                  <S.ImgSpace>
                    <S.BoryImg src={BoryBaby} alt="보리와 아기" />
                  </S.ImgSpace>
                  <RequestButton />
                  <S.ChildContainer>
                    <S.Child>우리 아이</S.Child>
                    <S.ChildList>
                      <ChildCard />
                      <ChildCard />
                    </S.ChildList>
                  </S.ChildContainer>
                </S.Container>
              </S.Main>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Main;
