import {useNavigate} from 'react-router-dom';
import * as C from '@/styles/CommonStyle';
import * as S from '@/styles/caregiver/CaregiverDoneStyle';
import {CircleCheckIcon, DoneIvoryIcon} from '@/assets/icons/request';

function CaregiverDone() {
  const navigate = useNavigate();

  const handleNavLinkClick = (path: string): void => {
    navigate(path);
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.PageSpace>
                <S.PaddingTop />
                <S.Container>
                  <S.BodyContainer>
                    <CircleCheckIcon />
                    <S.BlackBoldText>
                      정상적으로 돌봄 활동 신청이
                      <br />
                      완료되었습니다!
                    </S.BlackBoldText>
                    <S.GrayText>
                      곧이어 아이 부모님께 돌보미 매칭 알림이 갈거에요!
                    </S.GrayText>
                  </S.BodyContainer>
                </S.Container>
                <S.FooterContainer>
                  <DoneIvoryIcon />
                  <S.HomeButton
                    onClick={() => handleNavLinkClick('/caregiver-main')}>
                    홈으로 가기
                  </S.HomeButton>
                </S.FooterContainer>
              </S.PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default CaregiverDone;
