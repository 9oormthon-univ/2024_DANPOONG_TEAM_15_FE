import {useNavigate} from 'react-router-dom';
import * as S from '@/styles/components/AbsentCardStyle';
import RightIcon from '@/assets/icons/request/arrow-right.svg';

interface AbsentCardProps {
  certificate: {id: string; title: string; startDate: string; endDate: string};
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const AbsentCard = ({certificate, isSelected, onSelect}: AbsentCardProps) => {
  const navigate = useNavigate();

  const handleNavLinkClick = (path: string): void => {
    navigate(path);
  };

  return (
    <S.AbsentCardContainer
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
          <S.Title>{certificate.title} 미등원 확인서</S.Title>
          <S.Date>
            결석 기간: {certificate.startDate} ~ {certificate.endDate}
          </S.Date>
        </S.Text>
        <S.Button
          onClick={() => handleNavLinkClick('/absent-list/information')}>
          상세보기
          <S.RightIcon src={RightIcon} alt="상세보기" />
        </S.Button>
      </S.CardContainer>
    </S.AbsentCardContainer>
  );
};

export default AbsentCard;
