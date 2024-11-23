import {useNavigate} from 'react-router-dom';
import * as S from '@/styles/components/CertificateCardStyle';

import RightIcon from '@/assets/icons/request/arrow-right.svg';

interface CertificateCardProps {
  certificate: {id: string; title: string; date: string};
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  isSelected,
  onSelect,
}) => {
  const navigate = useNavigate();

  const handleNavLinkClick = (path: string): void => {
    navigate(path);
  };

  return (
    <S.CertificateCardContainer
      $isSelected={isSelected}
      onClick={() => onSelect(certificate.id)}>
      <input
        type="radio"
        name="certificate"
        value={certificate.id}
        checked={isSelected}
        readOnly
      />
      <S.CardContainer
        $isSelected={isSelected}
        onClick={() => onSelect(certificate.id)}>
        <S.Text>
          <S.Title>{certificate.title} 진단서</S.Title>
          <S.Date>{certificate.date} 생성</S.Date>
        </S.Text>
        <S.Button
          onClick={() => handleNavLinkClick('/certificate-list/information')}>
          상세보기
          <S.RightIcon src={RightIcon} alt="상세보기" />
        </S.Button>
      </S.CardContainer>
    </S.CertificateCardContainer>
  );
};

export default CertificateCard;
