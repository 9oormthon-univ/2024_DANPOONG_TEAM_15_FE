import {useState, ChangeEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import * as F from '@/styles/components/FileContainerStyle';

import FolderIcon from '@/assets/icons/request/folder.svg';
import BoxIcon from '@/assets/icons/request/box.svg';

interface FileContainerProps {
  setSelectedPaper: (file: File) => void;
  fileListPath: string;
}

const FileContainer: React.FC<FileContainerProps> = ({
  setSelectedPaper,
  fileListPath,
}) => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const setImageFn = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setSelectedPaper(file); // 파일을 부모 상태로 전달
    }
  };

  return (
    <>
      <F.FileContainer>
        <F.ButtonContainer>
          <F.FileUploadButton>
            <label htmlFor="file" className="upload-label">
              <img src={FolderIcon} alt="이미지 업로드" />
            </label>
            <input
              type="file"
              name="file"
              id="file"
              accept="image/*"
              onChange={setImageFn}
            />
            <div id="file-preview">
              {imagePreview && <img src={imagePreview} alt="Preview" />}
            </div>
          </F.FileUploadButton>
          서류 파일 불러오기
        </F.ButtonContainer>
        <F.ButtonContainer>
          <F.FileListButton onClick={() => navigate(fileListPath)}>
            <F.BoxIcon src={BoxIcon} alt="서류 목록" />
          </F.FileListButton>
          서류 목록에서 가져오기
        </F.ButtonContainer>
      </F.FileContainer>
      {imagePreview && (
        <label htmlFor="file">
          <F.AgainButton>서류 다시 올리기</F.AgainButton>
        </label>
      )}
    </>
  );
};

export default FileContainer;
