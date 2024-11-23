import {useState, useEffect} from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/MainStyle';
import Header from '@/components/Header';
import BoryBaby from '@/assets/bory-baby.svg';
import RequestButton from '@/components/main/RequestButton';
import ChildCard from '@/components/main/ChildCard';
import ChildCardAdd from '@/components/main/ChildCardAdd';
import DefaultImage from '@/assets/default-child.svg';
import {getChildren} from '@/utils/childApi';
import {getUserInfo} from '@/utils/userApi';

interface ChildData {
  id: number;
  name: string;
  age: number;
  image: string;
  status: string;
}

function Main() {
  const [userName, setUserName] = useState<string>(''); // 사용자 이름
  const [children, setChildren] = useState<ChildData[]>([]); // 아이 목록

  useEffect(() => {
    const fetchData = async () => {
      try {
        // `getUserInfo` 호출
        const userResponse = await getUserInfo();
        setUserName(userResponse.name); // 사용자 이름 설정

        // `getChildren` API 호출
        const childrenResponse = await getChildren();
        console.log('자녀 목록:', childrenResponse);

        // 상태 업데이트
        if (childrenResponse) {
          setChildren(
            childrenResponse.map(child => ({
              id: child.childId,
              name: child.childName,
              age: child.age,
              image: child.image || DefaultImage, // 이미지 없으면 기본 이미지 사용
              status: child.recentApplyStatus || '상태 정보 없음', // 상태 없으면 기본 메시지
            })),
          );
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
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
