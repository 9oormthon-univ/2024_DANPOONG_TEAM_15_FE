import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {DotLottieReact} from '@lottiefiles/dotlottie-react';
import * as C from '@/styles/CommonStyle';
import * as S from '@/styles/caregiver/CaregiverMainStyle';
import CareHeader from '@/components/CareHeader';
import RequestCareButton from '@/components/main/RequestCareButton';
import RightIcon from '@/assets/icons/request/arrow-right.svg';
import NoneCareCard from '@/components/main/NonCareCard';
import CareCard from '@/components/main/CareCard';
import DefaultImage from '@/assets/default-child.svg';
import {getCare} from '@/utils/caregiverApi';

interface CareData {
  id: number;
  date: string;
  time: string;
  place?: string;
  name: string;
  age: number;
  image: string;
}

function CaregiverMain() {
  const navigate = useNavigate();
  const [care, setCare] = useState<CareData | null>(null); // 단일 객체로 변경

  useEffect(() => {
    const fetchData = async () => {
      try {
        const careResponse = await getCare();
        console.log('자녀 목록:', careResponse);

        // 상태 업데이트
        setCare({
          id: careResponse.id,
          date: careResponse.careDate,
          time: careResponse.careTime,
          name: careResponse.childName,
          age: careResponse.age,
          image: careResponse.image || DefaultImage, // 이미지 없으면 기본 이미지
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleNavLinkClick = (): void => {
    navigate(`/caregiver-inform`);
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Main>
                <CareHeader />
                <S.Container>
                  <S.Title>
                    <S.Name>
                      <S.Bold>
                        구르미 <S.Brown>보리</S.Brown>
                      </S.Bold>
                      님
                    </S.Name>
                    <S.SubTitle>오늘도 따뜻한 돌봄을 전해주세요!</S.SubTitle>
                  </S.Title>
                  <S.ImgSpace>
                    <S.LottieContainer>
                      <DotLottieReact
                        src="https://lottie.host/4a0ced8f-4a78-4df8-a5cd-8d6a7fa256cf/u4G7etyXbb.json"
                        loop
                        autoplay
                      />
                    </S.LottieContainer>
                  </S.ImgSpace>
                  <RequestCareButton />
                  <S.CareContainer>
                    <S.CareTitleContainer>
                      <S.Care>매칭된 돌봄 활동</S.Care>
                      <S.Button onClick={handleNavLinkClick}>
                        상세보기
                        <S.RightIcon src={RightIcon} alt="상세보기" />
                      </S.Button>
                    </S.CareTitleContainer>
                    {care ? (
                      <CareCard
                        date={care.date}
                        time={care.time}
                        place="서울특별시 성북구 고려대로 97번길"
                        name={care.name}
                        age={care.age}
                        image={care.image}
                      />
                    ) : (
                      <NoneCareCard />
                    )}
                  </S.CareContainer>
                </S.Container>
              </S.Main>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default CaregiverMain;
