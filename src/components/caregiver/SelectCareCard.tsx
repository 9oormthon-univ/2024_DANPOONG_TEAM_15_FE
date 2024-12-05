import * as R from '@/styles/caregiver/SelectCareCardStyle';

interface SelectChildCardProps {
  applyDate: string;
  careDate: string;
  careTime: string;
  carePlace: string;
  isSelected: boolean;
  onClick: () => void;
}

const SelectCareCard = ({
  applyDate,
  careDate,
  careTime,
  carePlace,
  isSelected,
  onClick,
}: SelectChildCardProps) => {
  return (
    <R.CardContainer $isSelected={isSelected} onClick={onClick}>
      <R.Name>{applyDate} 돌봄 활동</R.Name>
      <R.TextContainer>
        <R.TextSubContainer>
          <R.OneLineContainer>
            <>돌봄 일정</>
            <R.Line />
            <R.SubContainer>
              <div>{careDate}</div>
              <div>{careTime}</div>
            </R.SubContainer>
          </R.OneLineContainer>
          <R.OneLineContainer>
            <>돌봄 장소</>
            <R.Line />
            <>{carePlace}</>
          </R.OneLineContainer>
        </R.TextSubContainer>
      </R.TextContainer>
    </R.CardContainer>
  );
};

export default SelectCareCard;
