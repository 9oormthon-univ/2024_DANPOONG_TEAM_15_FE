import {useState, ChangeEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import heic2any from 'heic2any';
import * as F from '@/styles/components/FileContainerStyle';
import FolderIcon from '@/assets/icons/request/folder.svg';
import BoxIcon from '@/assets/icons/request/box.svg';

interface FileContainerProps {
  setSelectedPaper: (file: File) => void;
  fileListPath: string;
}

const FileContainer = ({
  setSelectedPaper,
  fileListPath,
}: FileContainerProps) => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const setImageFn = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];
    if (file) {
      const isHeic = file.type === 'image/heic' || file.name.endsWith('.heic');

      if (isHeic) {
        try {
          const imageBuffer = await file.arrayBuffer();
          const imageBlob = new Blob([imageBuffer]);
          const jpegBlob = await heic2any({
            blob: imageBlob,
            toType: 'image/jpeg',
          });

          // Ensure jpegBlob is a single Blob
          const finalBlob = Array.isArray(jpegBlob) ? jpegBlob[0] : jpegBlob;
          const imageUrl = URL.createObjectURL(finalBlob);

          setImagePreview(imageUrl);
        } catch (error) {
          console.error('HEIC 이미지 처리 중 오류가 발생했습니다.', error);
        }
      } else {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
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
              accept="image/*, .heic"
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
