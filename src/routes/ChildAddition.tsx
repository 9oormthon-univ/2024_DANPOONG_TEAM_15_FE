import React, {useState} from 'react';
import styled from 'styled-components';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/StatusStyle';
import ChildAdditionForm from '@/components/main/ChildAdditionForm';
import {COLOR} from '@/const/color';
import TopBackLeftArrowBar from '@/components/common/TopBackLeftArrowBar';

const PageSpace = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  padding: 0px 20px 50px;
`;

const HeaderSubText = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${COLOR.BLACK_01};
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  font-size: 1rem;
  border-radius: 8px;
  cursor: ${props => (props.$isActive ? 'pointer' : 'not-allowed')};

  &:hover {
    background-color: ${props =>
      props.$isActive ? COLOR.ORANGE_02 : COLOR.GRAY_04};
    transition: background-color 0.2s;
  }
`;

function ChildAddition() {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    gender: '',
    image: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({...prev, [key]: value}));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      handleInputChange('image', base64 as string);
    }
  };

  const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const isButtonActive =
    formData.name !== '' && formData.birthDate !== '' && formData.gender !== '';

  const handleSubmit = () => {
    console.log('API로 보낼 데이터:', formData);
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
                  <HeaderSubText>아이 추가 등록</HeaderSubText>
                  <ChildAdditionForm
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleImageUpload={handleImageUpload}
                  />
                </Container>
                <FooterContainer>
                  <PayButton $isActive={isButtonActive} onClick={handleSubmit}>
                    추가 완료
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

export default ChildAddition;
