import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/CertificateListStyle';

import TopBackLeftArrowBar from '@/components/common/TopBackLeftArrowBar';
import CertificateCard from '@/components/request/CertificateCard';

function CertificateList() {
  const navigate = useNavigate();
  const [selectedPaper, setSelectedPaper] = useState<string | null>(null);
  const [certificateList, setCertificateList] = useState<
    {id: string; title: string}[]
  >([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const mockCertificates = [
          {id: '1', title: '0000년 0월 0일', date: '0000-00-00'},
          {id: '2', title: '0000년 0월 0일', date: '0000-00-00'},
          {id: '3', title: '0000년 0월 0일', date: '0000-00-00'},
        ];
        setCertificateList(mockCertificates);
      } catch (error) {
        console.error('Failed to fetch certificates:', error);
      }
    };

    fetchCertificates();
  }, []);

  const handleNavLinkClick = (path: string): void => {
    if (selectedPaper !== null) {
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
