import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/AbsentStyle';

import TopBackXBar from '@/components/common/TopBackXBar';
import ProgressBar from '@/components/request/ProgressBar';
import FileContainer from '@/components/request/FileContainer';
import RequestLoading from '@/components/request/RequestLoading';
import {uploadAbsent} from '@/utils/requestApi';

function Absent() {
  const navigate = useNavigate();
  const [selectedPaper, setSelectedPaper] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNavLinkClick = async (): Promise<void> => {
    if (!selectedPaper) return;

    setIsLoading(true);

    try {
      const childId = localStorage.getItem('childId');
      if (!childId) {
        throw new Error('선택된 아이의 정보가 없습니다.');
      }

      // 진단서 업로드 API 호출
      const response = await uploadAbsent(Number(childId), selectedPaper);

      console.log('미등원 확인서 응답 데이터:', response);

      // absenceCertificateId를 로컬 스토리지에 저장
      localStorage.setItem('absenceCertificateId', response.id.toString());

      // 다음 페이지로 이동하며 응답 데이터를 전달
      navigate('/request/absent-confirm', {
        state: {
          name: response.name,
          startdate: response.absenceStartDate,
          enddate: response.absenceEndDate,
          reason: response.absenceReason,
          content: response.note,
        },
      });
    } catch (error: any) {
      alert(error.message || '미등원 확인서 업로드 중 문제가 발생했습니다.');
    } finally {
      setIsLoading(false);
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
                  <ProgressBar isStatus={1} />
                  <S.NumTitle>1. 서류 제출</S.NumTitle>
                  <S.Title>미등원 확인서 제출</S.Title>
                  <S.FileSpace>
                    <FileContainer
                      setSelectedPaper={setSelectedPaper}
                      fileListPath="/absent-list"
                    />
                  </S.FileSpace>
                </S.Container>
                <S.FooterContainer>
                  <S.Button
                    $isActive={selectedPaper !== null}
                    onClick={handleNavLinkClick}>
                    서류 검증하기
                  </S.Button>
                </S.FooterContainer>
              </S.PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>

      {/* 로딩 모달 */}
      {isLoading && <RequestLoading />}
    </>
  );
}

export default Absent;
