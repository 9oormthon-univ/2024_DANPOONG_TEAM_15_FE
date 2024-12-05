import {useEffect, useState} from 'react';
import {useNavigate, useParams, useLocation} from 'react-router-dom';
import * as C from '@/styles/CommonStyle';
import * as S from '@/styles/caregiver/CaregiverDetailStyle';
import TopBackLeftArrowBar from '@/components/common/TopBackLeftArrowBar';
import {getCaregiversDetails, postCaregiver} from '@/utils/caregiverApi';

interface CaregiversData {
  applyDate: string;
  careDate: string;
  careTime: string;
  memo: string;
  childName: string;
  birthDate: string;
  age: number;
  diagnosisName: string;
  image: string;
}

function CaregiverDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const {applyId} = useParams();
  const {carePlace} = location.state || {};
  const [caregiversData, setCaregiversData] = useState<CaregiversData | null>(
    null,
  );

  useEffect(() => {
    const fetchCaregiversDetails = async () => {
      try {
        if (!applyId) {
          throw new Error('돌봄 ID가 누락되었습니다.');
        }

        const data = await getCaregiversDetails(Number(applyId));

        setCaregiversData(data);
      } catch (error) {
        console.error('돌봄 세부 조회 실패:', error);
      }
    };

    fetchCaregiversDetails();
  }, [applyId]);

  const onClickBack = () => {
    navigate(-1);
  };

  const handleApplyCaregiver = async () => {
    try {
      if (!applyId) {
        throw new Error('돌봄 ID가 누락되었습니다.');
      }
      await postCaregiver(Number(applyId));
      navigate('/caregiver-done');
    } catch (error) {
      console.error('돌봄 신청 실패:', error);
      alert('돌봄 신청에 실패했습니다. 다시 시도해주세요.');
    }
  };

  if (!caregiversData) {
    return (
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.PageSpace>
                <TopBackLeftArrowBar />
                <S.Container>
                  <S.Title>돌봄 신청 정보를 불러올 수 없습니다.</S.Title>
                  <S.FooterContainer>
                    <S.Button onClick={onClickBack}>목록으로 가기</S.Button>
                  </S.FooterContainer>
                </S.Container>
              </S.PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    );
  }

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.PageSpace>
                <TopBackLeftArrowBar />
                <S.Container>
                  <S.Title>{caregiversData.applyDate} 돌봄 활동</S.Title>
                  <S.InformList>
                    <S.TitleText>
                      <S.InformTitle>돌봄 일정</S.InformTitle>
                      <S.DateContainer>
                        <S.InformText>{caregiversData.careDate}</S.InformText>
                        <S.SmallLine />
                        <S.InformText>{caregiversData.careTime}</S.InformText>
                      </S.DateContainer>
                    </S.TitleText>
                    <S.TitleText>
                      <S.InformTitle>돌봄 장소</S.InformTitle>
                      <S.InformText>
                        {carePlace || '돌봄 장소 정보 없음'}
                      </S.InformText>
                    </S.TitleText>
                    <S.TitleText>
                      <S.InformTitle>돌봄 메모</S.InformTitle>
                      <S.InformText>{caregiversData.memo}</S.InformText>
                    </S.TitleText>
                    <S.Line />
                    <S.BigTitle>돌봄 아이 정보</S.BigTitle>
                    <S.TitleText>
                      <S.InformTitle>아이 이름</S.InformTitle>
                      <S.InformText>{caregiversData.childName}</S.InformText>
                    </S.TitleText>
                    <S.TitleText>
                      <S.InformTitle>아이 생년월일</S.InformTitle>
                      <S.DateContainer>
                        <S.InformText>{caregiversData.birthDate}</S.InformText>
                        <S.OrangeText>(만 {caregiversData.age}세)</S.OrangeText>
                      </S.DateContainer>
                    </S.TitleText>
                    <S.TitleText>
                      <S.InformTitle>아이 진단명</S.InformTitle>
                      <S.InformText>
                        {caregiversData.diagnosisName}
                      </S.InformText>
                    </S.TitleText>
                    <S.TitleText>
                      <S.InformTitle>아이 사진</S.InformTitle>
                      <S.CardContainer>
                        <S.DefaultImg
                          src={caregiversData.image}
                          alt="아이 사진"
                        />
                      </S.CardContainer>
                    </S.TitleText>
                  </S.InformList>
                </S.Container>
                <S.FooterContainer>
                  <S.Button onClick={handleApplyCaregiver}>
                    돌봄 활동 신청하기
                  </S.Button>
                </S.FooterContainer>
              </S.PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default CaregiverDetail;
