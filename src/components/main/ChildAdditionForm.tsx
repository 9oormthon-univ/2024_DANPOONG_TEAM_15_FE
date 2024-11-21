import React from 'react';
import styled from 'styled-components';
import {COLOR} from '@/const/color';
import {IvoryRemoveBgIcon} from '@/assets/icons/common';

const Card = styled.div`
  padding: 16px;
  background-color: ${COLOR.ORANGE_LIGHT};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionHeader = styled.div`
  padding-top: 8px;
  font-weight: 600;
  color: ${COLOR.BLACK_03};
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${COLOR.GRAY_04};
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${COLOR.ORANGE_01};
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  position: relative;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;

  input {
    appearance: none;
    width: 24px;
    height: 24px;
    border: 3px solid ${COLOR.WHITE_08};
    border-radius: 50%;
    background-color: ${COLOR.WHITE_01};
    cursor: pointer;
    margin: 0;
    position: relative;

    &:checked {
      border: 3px solid ${COLOR.ORANGE_01};
      background-color: ${COLOR.WHITE_01};
    }

    &:checked::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: ${COLOR.ORANGE_01};
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  span {
    font-size: 1rem;
    font-weight: 400;
    color: ${COLOR.BLACK_03};
  }
`;

const ImagePreview = styled.div`
  height: 200px;
  width: auto;
  border-radius: 12px;
  background-color: ${COLOR.ORANGE_03};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLOR.GRAY_04};

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 12px;
  }
`;

const AddImageButton = styled.label`
  display: inline-block;
  margin-top: 8px;
  padding: 4px 12px;
  color: ${COLOR.ORANGE_01};
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid ${COLOR.ORANGE_01};
  border-radius: 12px;
  cursor: pointer;
  text-align: center;

  input {
    display: none;
  }
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

interface ChildAdditionFormProps {
  formData: {
    name: string;
    birthDate: string;
    gender: string;
    image: string;
  };
  handleInputChange: (key: string, value: string) => void;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ChildAdditionForm = ({
  formData,
  handleInputChange,
  handleImageUpload,
}: ChildAdditionFormProps) => {
  return (
    <Card>
      <SectionHeader>아이 이름</SectionHeader>
      <Input
        type="text"
        placeholder="아이 이름"
        value={formData.name}
        onChange={e => handleInputChange('name', e.target.value)}
      />
      <SectionHeader>아이 생년월일</SectionHeader>
      <Input
        type="date"
        placeholder="아이 생년월일"
        value={formData.birthDate}
        onChange={e => handleInputChange('birthDate', e.target.value)}
      />
      <SectionHeader>아이 성별</SectionHeader>
      <RadioGroup>
        <RadioLabel>
          <input
            type="radio"
            value="남성"
            checked={formData.gender === '남성'}
            onChange={e => handleInputChange('gender', e.target.value)}
          />
          <span>남성</span>
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            value="여성"
            checked={formData.gender === '여성'}
            onChange={e => handleInputChange('gender', e.target.value)}
          />
          <span>여성</span>
        </RadioLabel>
      </RadioGroup>
      <RowFlex>
        <SectionHeader>아이 사진 (선택)</SectionHeader>
        <AddImageButton>
          + 추가
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </AddImageButton>
      </RowFlex>
      <ImagePreview>
        {formData.image ? (
          <img src={formData.image} alt="아이 사진" />
        ) : (
          <IvoryRemoveBgIcon height={150} width={'auto'} />
        )}
      </ImagePreview>
    </Card>
  );
};

export default ChildAdditionForm;
