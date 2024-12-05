import * as C from '@/styles/components/CareCardStyle';

interface CareCardProps {
  date: string;
  time: string;
  place: string;
  name: string;
  age: number;
  image: string;
}

function CareCard({date, time, place, name, age, image}: CareCardProps) {
  return (
    <>
      <C.TotalContainer>
        <C.InformContainer>
          <C.Title>돌봄 일정</C.Title>
          <C.TextContainer>
            <C.Text>{date}</C.Text>
            <C.TextLine />
            <C.Text>{time}</C.Text>
          </C.TextContainer>
        </C.InformContainer>
        <C.InformContainer>
          <C.Title>돌봄 장소</C.Title>
          <C.Text>{place}</C.Text>
        </C.InformContainer>
        <C.InformContainer>
          <C.Title>돌봄 아이</C.Title>
          <C.CardContainer>
            <C.DefaultImg src={image} alt="아이 사진" />
          </C.CardContainer>
          <C.Information>
            <>{name}</>
            <C.Line />
            <>{age}살</>
          </C.Information>
        </C.InformContainer>
      </C.TotalContainer>
    </>
  );
}

export default CareCard;
