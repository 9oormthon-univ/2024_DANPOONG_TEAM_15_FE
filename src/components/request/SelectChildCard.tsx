import * as R from '@/styles/components/SelectChildCardStyle';

interface SelectChildCardProps {
  name: string;
  age: number;
  gender: string;
  isSelected: boolean;
  onClick: () => void;
}

const SelectChildCard = ({
  name,
  age,
  gender,
  isSelected,
  onClick,
}: SelectChildCardProps) => {
  return (
    <R.CardContainer $isSelected={isSelected} onClick={onClick}>
      <R.Name>{name}</R.Name>
      <R.TextContainer>
        <>만 {age}세</>
        <R.Line />
        <>{gender}</>
      </R.TextContainer>
    </R.CardContainer>
  );
};

export default SelectChildCard;
