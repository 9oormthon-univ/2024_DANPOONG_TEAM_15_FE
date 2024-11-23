import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/StatusStyle';
import ChildAdditionForm from '@/components/main/ChildAdditionForm';
import {COLOR} from '@/const/color';
import TopBackMentBar from '@/components/common/TopBackMentBar';
import {addChild} from '@/utils/childApi';

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
  font-size: 20px;
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
  border-radius: 8px;
  cursor: ${props => (props.$isActive ? 'pointer' : 'not-allowed')};

  &:hover {
    background-color: ${props =>
      props.$isActive ? COLOR.ORANGE_02 : COLOR.GRAY_04};
    transition: background-color 0.2s;
  }
`;

function CreateChild() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<{
    name: string;
    birthDate: string;
    gender: string;
    image: string | File | null;
  }>({
    name: '',
    birthDate: '',
    gender: '',
    image: null,
  });

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({...prev, [key]: value}));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({...prev, image: file}));
    }
  };

  const isButtonActive =
    formData.name !== '' &&
    formData.birthDate !== '' &&
    formData.gender !== '' &&
    formData.image !== null;

  const handleSubmit = async () => {
    if (!isButtonActive || !formData.image) return;

    try {
      console.log('API로 보낼 데이터:', formData);

      const formDataToSend = new FormData();
      formDataToSend.append('childName', formData.name);
      formDataToSend.append('birthDate', formData.birthDate);
      formDataToSend.append('gender', formData.gender);
      if (formData.image instanceof File) {
        formDataToSend.append('image', formData.image);
      }

      await addChild(formDataToSend);

      alert('아이 등록이 완료되었습니다.');
      navigate('/main');
    } catch (error: any) {
      alert(error.message || '아이 등록 중 문제가 발생했습니다.');
    }
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <PageSpace>
                <TopBackMentBar titleText="가입하기" />
                <Container>
                  <HeaderSubText>아이 등록</HeaderSubText>
                  <ChildAdditionForm
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleImageUpload={handleImageUpload}
                  />
                </Container>
                <FooterContainer>
                  <PayButton $isActive={isButtonActive} onClick={handleSubmit}>
                    가입 완료
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

export default CreateChild;
