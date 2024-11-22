import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const FileContainer = styled.div`
  width: 300px;
  height: calc(400px - 200px);
  padding: 100px 0;
  border-radius: 8px;
  background-color: ${COLOR.ORANGE_05};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  color: ${COLOR.BLACK_03};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
`;

export const FileUploadButton = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${COLOR.ORANGE_01};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  input[type='file'] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  .upload-label {
    position: absolute;
    width: 48px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    cursor: pointer;

    img {
      width: 24px;
    }
  }

  #file-preview img {
    width: 300px;
    height: 400px;
    background-color: ${COLOR.ORANGE_05};
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    object-fit: cover;
    z-index: 15;
  }

  #file-preview {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 152px;
  }
`;

export const FileListButton = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${COLOR.ORANGE_01};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const BoxIcon = styled.img`
  width: 24px;
`;

export const AgainButton = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
  margin-top: 24px;
  text-decoration: underline;
  cursor: pointer;
`;
