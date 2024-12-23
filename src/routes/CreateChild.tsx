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
    formData.name !== '' && formData.birthDate !== '' && formData.gender !== '';

  const handleSubmit = async () => {
    if (!isButtonActive) {
      console.warn('조건이 충족되지 않음:', {isButtonActive});
      return;
    }

    try {
      console.log('API로 보낼 데이터:', formData);

      const formDataToSend = new FormData();
      formDataToSend.append('childName', formData.name);
      formDataToSend.append('birthDate', formData.birthDate);
      formDataToSend.append('gender', formData.gender);

      // 이미지가 없을 경우 기본 이미지 추가
      if (formData.image instanceof File) {
        formDataToSend.append('image', formData.image);
      } else {
        const defaultImageBlob = await fetch('/pwa-512x512.png', {
          method: 'GET',
        }).then(response => {
          if (!response.ok) {
            throw new Error('기본 이미지 로드 실패');
          }
          return response.blob();
        });

        formDataToSend.append('image', defaultImageBlob, 'pwa-512x512.png');
      }

      // FormData 디버깅 출력
      console.log('FormData에 추가된 데이터:');
      for (let pair of formDataToSend.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      await addChild(formDataToSend);
      console.log('등록 성공, 메인으로 이동합니다.');
      navigate('/main'); 
    } catch (error: any) {
      console.error('등록 중 에러:', error);
      navigate('/main');
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
