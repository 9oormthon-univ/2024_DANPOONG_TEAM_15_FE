import * as R from '@/styles/components/RequestCardStyle';

interface RequestCardProps {
  icon: string;
  title: string;
  text: string;
}

const RequestCard = ({icon, title, text}: RequestCardProps) => {
  return (
    <R.CardContainer>
      <R.Circle>
        <R.Icon src={icon} alt="아이콘" />
      </R.Circle>
      <R.TextContainer>
        <R.Title>{title}</R.Title>
        <R.Text>{text}</R.Text>
      </R.TextContainer>
    </R.CardContainer>
  );
};

export default RequestCard;
