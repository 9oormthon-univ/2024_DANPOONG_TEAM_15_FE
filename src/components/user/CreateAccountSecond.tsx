import {useState} from 'react';
import styled from 'styled-components';
import TopBackLeftArrowBar from '../common/TopBackLeftArrowBar';
import {COLOR} from '@/const/color';
import {ArrowRightIcon} from '@/assets/icons/common';
import {SignUpRequestBody} from '@/types';

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

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 12px;
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
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-radius: 8px;
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

const PayButton = styled.button`
  padding: 16px;
  border: none;
  background-color: ${COLOR.ORANGE_01};
  color: ${COLOR.WHITE_01};
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.ORANGE_02};
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

const BlackText = styled.div`
  font-size: 14px;
  color: ${COLOR.BLACK_03};
`;

interface CreateAccountSecondProps {
  onSubmit: (data: {incomeType: string}) => void;
  formData: SignUpRequestBody;
}

const incomeTypes = [
  {key: 'A', text: '가형 (중위 소득 기준 75% 이하)'},
  {key: 'B', text: '나형 (중위 소득 기준 120% 이하)'},
  {key: 'C', text: '다형 (중위 소득 기준 150% 이하)'},
  {key: 'D', text: '라형 (중위 소득 기준 150% 초과)'},
];

function CreateAccountSecond({onSubmit, formData}: CreateAccountSecondProps) {
  const [selectedType, setSelectedType] = useState(
    incomeTypes.find(type => type.key === formData.incomeType) ||
      incomeTypes[0],
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (key: 'A' | 'B' | 'C' | 'D', text: string) => {
    setSelectedType({key, text});
    setIsOpen(false);
  };

  const handleFinish = () => {
    onSubmit({incomeType: selectedType.key});
  };

  return (
    <PageSpace>
      <TopBackLeftArrowBar />
      <Container>
        <HeaderContainer>
          <HeaderSubText>소득 유형 등록</HeaderSubText>
          <BlackText>
            아이돌봄서비스 지원금을 받기 위해 필요한 절차에요!
          </BlackText>
        </HeaderContainer>
        <Dropdown>
          <DropdownButton onClick={toggleDropdown}>
            {selectedType.text}
            <span>{isOpen ? '▲' : '▼'}</span>
          </DropdownButton>
          <DropdownMenu $isOpen={isOpen}>
            {incomeTypes.map(type => (
              <DropdownItem
                key={type.key}
                onClick={() =>
                  handleSelect(type.key as 'A' | 'B' | 'C' | 'D', type.text)
                }>
                {type.text}
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
        <PayButton onClick={handleFinish}>다음</PayButton>
      </FooterContainer>
    </PageSpace>
  );
}

export default CreateAccountSecond;
