import {useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/StatusStyle';
import {COLOR} from '@/const/color';
import TopBackLeftArrowBar from '@/components/common/TopBackLeftArrowBar';
import {ArrowRightIcon} from '@/assets/icons/common';

const PageSpace = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  padding: 0px 20px 50px;
`;

const HeaderSubText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${COLOR.BLACK_01};
`;

const Dropdown = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 16px;
  border: 1px solid ${COLOR.ORANGE_01};
  border-radius: 100px;
  background-color: ${COLOR.WHITE_01};
  color: ${COLOR.BLACK_01};
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownMenu = styled.ul<{$isOpen: boolean}>`
  /* 수정: $isOpen 사용 */
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-radius: 20px;
  margin-top: 4px;
  padding: 0;
  list-style: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${COLOR.WHITE_01};
  overflow: hidden;

  max-height: ${props => (props.$isOpen ? '200px' : '0')};
  transition: max-height 0.2s ease-in-out;
`;

const DropdownItem = styled.li`
  padding: 12px 16px;
  font-size: 14px;
  color: ${COLOR.BLACK_01};
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: ${COLOR.WHITE_LIGHT};
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: ${COLOR.WHITE_01};
  padding: 16px 20px 50px;
`;

const PayButton = styled.button<{$isActive: boolean}>`
  padding: 16px;
  border: none;
  background-color: ${props =>
    props.$isActive ? COLOR.ORANGE_01 : COLOR.GRAY_04};
  color: ${COLOR.WHITE_01};
  font-weight: 600;
  border-radius: 8px;
  cursor: ${props => (props.$isActive ? 'pointer' : 'not-allowed')};

  &:hover {
    background-color: ${props =>
      props.$isActive ? COLOR.ORANGE_02 : COLOR.GRAY_04};
    transition: background-color 0.2s;
  }
`;

const BottomDirectionButton = styled.button`
  font-size: 14px;
  color: ${COLOR.GRAY_04};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${COLOR.WHITE_01};
  margin: 0 auto;
  gap: 8px;
  cursor: pointer;
`;

function IncomeType() {
  const initialSelectedType = '가형 (중위 소득 기준 75% 이하)';
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(initialSelectedType);
  const [isOpen, setIsOpen] = useState(false);

  const incomeTypes = [
    '가형 (중위 소득 기준 75% 이하)',
    '나형 (중위 소득 기준 120% 이하)',
    '다형 (중위 소득 기준 150% 이하)',
    '라형 (중위 소득 기준 150% 초과)',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (type: string) => {
    setSelectedType(type);
    setIsOpen(false);
  };

  const isButtonActive = selectedType !== initialSelectedType;

  // 완료 클릭
  const onClickComplete = () => {
    if (isButtonActive) {
      // API 호출
      console.log(selectedType);
      navigate('/mypage');
    }
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <PageSpace>
                <TopBackLeftArrowBar />
                <Container>
                  <HeaderSubText>소득 유형 변경</HeaderSubText>
                  <Dropdown>
                    <DropdownButton onClick={toggleDropdown}>
                      {selectedType}
                      <span>{isOpen ? '▲' : '▼'}</span>
                    </DropdownButton>
                    <DropdownMenu $isOpen={isOpen}>
                      {incomeTypes.map(type => (
                        <DropdownItem
                          key={type}
                          onClick={() => handleSelect(type)}>
                          {type}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                </Container>
                <FooterContainer>
                  <BottomDirectionButton>
                    우리 가족 소득 유형 조회하기
                    <ArrowRightIcon />
                  </BottomDirectionButton>
                  <PayButton
                    $isActive={isButtonActive}
                    onClick={onClickComplete}>
                    완료
                  </PayButton>
                </FooterContainer>
              </PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default IncomeType;
