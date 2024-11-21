import {useState, useEffect} from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/MainStyle';

import Header from '../components/Header';
import BoryBaby from '../assets/bory-baby.svg';
import RequestButton from '@/components/main/RequestButton';
import ChildCard from '@/components/main/ChildCard';
import ChildCardAdd from '@/components/main/ChildCardAdd';

interface ChildData {
  id: number;
  name: string;
  age: number;
  image?: string;
  status: string;
}

function Main() {
  const [userName, setUserName] = useState<string>(''); // 사용자 이름
  const [children, setChildren] = useState<ChildData[]>([]); // 아이 목록

  useEffect(() => {
    // 사용자 이름 및 아이 목록을 API 호출로 가져오기
    const fetchData = async () => {
      // Mock API 호출
      const userResponse = {name: '김구름'}; // 실제 API로 대체
      const childrenResponse: (ChildData & {image: string | null})[] = [
        {
          id: 1,
          name: '홍길동',
          age: 8,
          image: null,
          status: '아직 신청 내역이 없습니다',
        },
        {
          id: 2,
          name: '김구름',
          age: 6,
          image: null,
          status: '돌봄 서비스 이용 중',
        },
      ];

      // null을 undefined로 변환
      const updatedChildrenResponse: ChildData[] = childrenResponse.map(
        child => ({
          ...child,
          image: child.image || undefined, // null을 undefined로 변환
        }),
      );

      // 상태 업데이트
      setUserName(userResponse.name);
      setChildren(updatedChildrenResponse);
    };

    fetchData();
  }, []);

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
                      <S.Bold>{userName}</S.Bold>님
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
                      {children.map(child => (
                        <ChildCard
                          key={child.id}
                          name={child.name}
                          age={child.age}
                          image={child.image}
                          status={child.status}
                        />
                      ))}
                      <ChildCardAdd />
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
