import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/CertificateListStyle';
import TopBackLeftArrowBar from '@/components/common/TopBackLeftArrowBar';
import CertificateCard from '@/components/request/CertificateCard';
import {getMedicalCertificates} from '@/utils/requestApi';

function CertificateList() {
  const navigate = useNavigate();
  const [selectedPaper, setSelectedPaper] = useState<string | null>(null);
  const [certificateList, setCertificateList] = useState<
    {id: string; title: string; date: string}[]
  >([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const childId = localStorage.getItem('childId');
        if (!childId) {
          throw new Error('선택된 아이의 정보가 없습니다.');
        }

        // API 호출
        const certificates = await getMedicalCertificates(Number(childId));

        // 데이터 가공
        const mappedCertificates = certificates.map(certificate => ({
          id: certificate.id.toString(),
          title: certificate.title,
          date: certificate.createdAt,
        }));

        setCertificateList(mappedCertificates);
      } catch (error) {
        console.error('진단서 목록 조회 실패:', error);
      }
    };

    fetchCertificates();
  }, []);

  const handleNavLinkClick = (path: string): void => {
    if (selectedPaper !== null) {
      localStorage.setItem('medicalCertificateId', selectedPaper);
      navigate(path);
    }
  };

  const handleSelectPaper = (id: string) => {
    setSelectedPaper(id);
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
                  <S.Title>진단서 가져오기</S.Title>
                  <S.SubTitle>서류 1개를 선택해 주세요</S.SubTitle>
                  <S.PaperContainer>
                    {certificateList.map(certificate => (
                      <CertificateCard
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
                    onClick={() => handleNavLinkClick('/request/absent')}>
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

export default CertificateList;
