import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import * as C from '@/styles/CommonStyle';
import * as S from '@/styles/caregiver/CaregiverListStyle';
import TopXBar from '@/components/common/TopXBar';
import SelectCareCard from '@/components/caregiver/SelectCareCard';
import {getCareList} from '@/utils/caregiverApi';
import {CareInfoSchema} from '@/types';

interface CareData {
  id: number;
  applyDate: string;
  careDate: string;
  careTime: string;
  carePlace: string;
}

function CaregiverList() {
  const navigate = useNavigate();
  const [care, setCare] = useState<CareData[]>([]);
  const [selectedCare, setSelectedCare] = useState<number | null>(null);

  const handleCardClick = (id: number): void => {
    setSelectedCare(prev => (prev === id ? null : id));
    setTimeout(() => {
      navigate(`/caregiver-detail/${id}`);
    }, 300);
  };

  useEffect(() => {
    const fetchCare = async () => {
      try {
        const response = await getCareList();
        const addressList = [
          '서울특별시 성북구 고려대로 97번길',
          '서울특별시 성북구 종암로 23번길',
          '서울특별시 성북구 보문로 112번길',
          '서울특별시 성북구 동소문로 32길',
          '서울특별시 성북구 안암로 145번길',
          '서울특별시 성북구 삼선동1가 101번지',
          '서울특별시 성북구 상월곡동 11길',
          '서울특별시 성북구 길음동 33길',
          '서울특별시 성북구 돈암동 45길',
        ];

        const mappedCare = response.map(
          (care: CareInfoSchema, index: number) => ({
            id: care.applyId,
            applyDate: care.applyDate,
            careDate: care.careDate,
            careTime: care.careTime,
            carePlace:
              index === 0
                ? '서울특별시 성북구 고려대로 97번길'
                : addressList[Math.floor(Math.random() * addressList.length)],
          }),
        );
        setCare(mappedCare);
      } catch (error) {
        console.error('돌봄 목록 조회 중 오류 발생:', error);
      }
    };

    fetchCare();
  }, []);

  return (
    <C.Page>
      <C.Center>
        <S.Background>
          <C.PageSpace>
            <S.PageSpace>
              <TopXBar />
              <S.Container>
                <S.Title>돌봄 활동 안내</S.Title>
                <S.SubTitle>보리의 돌봄이 필요한 아이들이에요!</S.SubTitle>
                <S.CardContainer>
                  {care.map(care => (
                    <SelectCareCard
                      key={care.id}
                      applyDate={care.applyDate}
                      careDate={care.careDate}
                      careTime={care.careTime}
                      carePlace={care.carePlace}
                      isSelected={selectedCare === care.id}
                      onClick={() => handleCardClick(care.id)}
                    />
                  ))}
                </S.CardContainer>
              </S.Container>
            </S.PageSpace>
          </C.PageSpace>
        </S.Background>
      </C.Center>
    </C.Page>
  );
}

export default CaregiverList;
