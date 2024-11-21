import * as R from '@/styles/components/RequestCardStyle';

function RequestCard({icon, title, text}) {
  return (
    <>
      <R.CardContainer>
        <R.Circle>
          <R.Icon src={icon} alt="아이콘" />
        </R.Circle>
        <R.TextContainer>
          <R.Title>{title}</R.Title>
          <R.Text>{text}</R.Text>
        </R.TextContainer>
      </R.CardContainer>
    </>
  );
}

export default RequestCard;
