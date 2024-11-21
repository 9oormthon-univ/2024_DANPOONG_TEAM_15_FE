import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/SelectChildStyle';

import TopBackXBar from '@/components/common/TopBackXBar';
import SelectChildCard from '@/components/request/SelectChildCard';

function SelectChild() {
  const navigate = useNavigate();
  const [children, setChildren] = useState([]); // 아이 목록 상태
  const [selectedChild, setSelectedChild] = useState(null); // 선택된 아이 상태

  // 나중에 실제 API로 변경
  useEffect(() => {
    // 임시 데이터
    const mockData = [
      {id: 1, name: '아이 이름', age: 6, gender: '남성'},
      {id: 2, name: '아이 이름', age: 7, gender: '여성'},
      {id: 3, name: '아이 이름', age: 8, gender: '남성'},
    ];

    setChildren(mockData);
  }, []);

  const handleNavLinkClick = path => {
    if (selectedChild !== null) {
      navigate(path);
    }
  };

  const handleCardClick = id => {
    if (selectedChild === id) {
      setSelectedChild(null); // 같은 아이를 클릭하면 선택 취소
    } else {
      setSelectedChild(id); // 다른 아이를 클릭하면 선택
    }
  };

  return (
    <>
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
                    onClick={() => handleNavLinkClick('/request/certificate')}>
                    선택 완료
                  </S.Button>
                </S.FooterContainer>
              </S.PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default SelectChild;
