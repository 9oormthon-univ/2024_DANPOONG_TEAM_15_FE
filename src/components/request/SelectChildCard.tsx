import * as R from '@/styles/components/SelectChildCardStyle';

function SelectChildCard({name, age, gender, isSelected, onClick}) {
  return (
    <>
      <R.CardContainer $isSelected={isSelected} onClick={onClick}>
        <R.Name>{name}</R.Name>
        <R.TextContainer>
          <>만 {age}세</>
          <R.Line />
          <>{gender}</>
        </R.TextContainer>
      </R.CardContainer>
    </>
  );
}

export default SelectChildCard;
