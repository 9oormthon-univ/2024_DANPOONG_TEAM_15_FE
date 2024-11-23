import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/AbsentListStyle';

import TopBackLeftArrowBar from '@/components/common/TopBackLeftArrowBar';
import AbsentCard from '@/components/request/AbsentCard';
import {getAbsent} from '@/utils/requestApi';

function AbsentList() {
  const navigate = useNavigate();
  const [selectedPaper, setSelectedPaper] = useState<string | null>(null);
  const [certificateList, setCertificateList] = useState<
    {id: string; title: string; startDate: string; endDate: string}[]
  >([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const childId = localStorage.getItem('childId');
        if (!childId) {
          throw new Error('선택된 아이의 정보가 없습니다.');
        }

        // API 호출
        const certificates = await getAbsent(Number(childId));

        // 데이터 가공
        const mappedCertificates = certificates.map(certificate => ({
          id: certificate.id.toString(),
          title: certificate.title,
          startDate: certificate.startDate,
          endDate: certificate.endDate,
        }));

        setCertificateList(mappedCertificates);
      } catch (error) {
        console.error('미등원 확인서 목록 조회 실패:', error);
      }
    };

    fetchCertificates();
  }, []);

  // 선택된 미등원 확인서의 ID 업데이트
  const handleSelectPaper = (id: string) => {
    setSelectedPaper(id);
  };

  const handleNavLinkClick = (path: string): void => {
    if (selectedPaper !== null) {
      localStorage.setItem('absenceCertificateId', selectedPaper);
      navigate(path);
    }
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.PageSpace>
                <TopBackLeftArrowBar />
                <S.Container>
                  <S.Title>미등원 확인서 가져오기</S.Title>
                  <S.SubTitle>서류 1개를 선택해 주세요</S.SubTitle>
                  <S.PaperContainer>
                    {certificateList.map(certificate => (
                      <AbsentCard
                        key={certificate.id}
                        certificate={certificate}
                        isSelected={selectedPaper === certificate.id}
                        onSelect={handleSelectPaper}
                      />
                    ))}
                  </S.PaperContainer>
                </S.Container>
                <S.FooterContainer>
                  <S.Button
                    $isActive={selectedPaper !== null}
                    onClick={() => handleNavLinkClick('/request/schedule')}>
                    선택 완료
                  </S.Button>
                </S.FooterContainer>
              </S.PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default AbsentList;
