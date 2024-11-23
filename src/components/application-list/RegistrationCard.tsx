import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {COLOR} from '@/const/color';
import {ArrowRightIcon} from '@/assets/icons/common';

const CardContainer = styled.div`
  background-color: ${COLOR.WHITE_07};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 10px;
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Black3Text = styled.div`
  color: ${COLOR.BLACK_03};
  font-weight: 600;
`;

const GrayText = styled.div`
  color: ${COLOR.GRAY_04};
`;

const PointerStyle = styled.div`
  color: ${COLOR.GRAY_04};
  cursor: pointer;
`;

interface RegistrationCardProps {
  medicalCertificate: {
    id: number;
    title: string;
    createdAt: string;
  };
  absenceCertificate: {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
  };
}

export default function RegistrationCard({
  medicalCertificate,
  absenceCertificate,
}: RegistrationCardProps) {
  const navigate = useNavigate();
  const onClickMedicalDetail = () => {
    console.log(`진단서 상세보기 클릭 - ID: ${medicalCertificate.id}`);
    navigate(`/certificate-list/information/${medicalCertificate.id}`);
  };

  const onClickAbsenceDetail = () => {
    console.log(`결석계 상세보기 클릭 - ID: ${absenceCertificate.id}`);
    navigate(`/absent-list/information/${absenceCertificate.id}`);
  };

  return (
    <>
      <CardContainer>
        <HeaderInfo>
          <Black3Text>{medicalCertificate.title} 진단서</Black3Text>
          <PointerStyle onClick={onClickMedicalDetail}>
            상세보기 <ArrowRightIcon />
          </PointerStyle>
        </HeaderInfo>
        <GrayText>{medicalCertificate.createdAt}</GrayText>
      </CardContainer>
      <CardContainer>
        <HeaderInfo>
          <Black3Text>{absenceCertificate.title} 미등원 확인서</Black3Text>
          <PointerStyle onClick={onClickAbsenceDetail}>
            상세보기 <ArrowRightIcon />
          </PointerStyle>
        </HeaderInfo>
        <GrayText>
          {absenceCertificate.startDate} ~ {absenceCertificate.endDate}
        </GrayText>
      </CardContainer>
    </>
  );
}
