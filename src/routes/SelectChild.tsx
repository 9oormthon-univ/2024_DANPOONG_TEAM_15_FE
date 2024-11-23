import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/SelectChildStyle';
import TopBackXBar from '@/components/common/TopBackXBar';
import SelectChildCard from '@/components/request/SelectChildCard';
import {getChildren} from '@/utils/childApi';
import {ChildInfoSchema} from '@/types';

interface ChildData {
  id: number;
  name: string;
  age: number;
  gender: string;
}

function SelectChild() {
  const navigate = useNavigate();
  const [children, setChildren] = useState<ChildData[]>([]);
  const [selectedChild, setSelectedChild] = useState<number | null>(null);

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await getChildren();
        // API 응답 데이터를 컴포넌트에 맞게 변환
        const mappedChildren = response.map((child: ChildInfoSchema) => ({
          id: child.childId,
          name: child.childName,
          age: child.age,
          gender: child.gender,
        }));
        setChildren(mappedChildren);
      } catch (error) {
        console.error('아이 목록 조회 중 오류 발생:', error);
      }
    };

    fetchChildren();
  }, []);

  const handleSaveToLocalStorage = (): void => {
    if (selectedChild !== null) {
      // 선택한 아이의 ID를 localStorage에 저장
      localStorage.setItem('childId', selectedChild.toString());
      navigate('/request/certificate'); // 다음 페이지로 이동
    }
  };

  const handleCardClick = (id: number): void => {
    setSelectedChild(prev => (prev === id ? null : id));
  };

  return (
    <C.Page>
      <C.Center>
        <S.Background>
          <C.PageSpace>
            <S.PageSpace>
              <TopBackXBar />
              <S.Container>
                <S.Title>
                  서비스 신청할 아이를
                  <br />
                  선택해 주세요
                </S.Title>
                <S.SubTitle>한 명만 선택이 가능합니다</S.SubTitle>
                <S.CardContainer>
                  {children.map(child => (
                    <SelectChildCard
                      key={child.id}
                      name={child.name}
                      age={child.age}
                      gender={child.gender}
                      isSelected={selectedChild === child.id}
                      onClick={() => handleCardClick(child.id)}
                    />
                  ))}
                </S.CardContainer>
              </S.Container>
              <S.FooterContainer>
                <S.Button
                  $isActive={selectedChild !== null}
                  onClick={handleSaveToLocalStorage}>
                  선택 완료
                </S.Button>
              </S.FooterContainer>
            </S.PageSpace>
          </C.PageSpace>
        </S.Background>
      </C.Center>
    </C.Page>
  );
}

export default SelectChild;
