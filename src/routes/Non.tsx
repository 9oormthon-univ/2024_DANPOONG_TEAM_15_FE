import {useNavigate} from 'react-router-dom';
import * as C from '@/styles/CommonStyle';
import * as S from '@/styles/NonStyle';
import CustomIcon from '@/assets/icons/common/custom-404.svg';

function Non() {
  const navigate = useNavigate();

  const handleNavLinkClick = (): void => {
    const accessToken = localStorage.getItem('accessToken');
    const authority = localStorage.getItem('authority');

    if (!accessToken) {
      navigate('/');
    }

    // 권한에 따라 경로 변경
    if (authority === 'ROLE_CAREGIVER') {
      navigate('/caregiver-main');
    } else {
      navigate('/main');
    }
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.PageSpace>
                <S.Container>
                  <S.CustomIcon src={CustomIcon} alt="404 페이지" />
                  <S.TextContainer>
                    <S.Title>찾을 수 없는 페이지 입니다.</S.Title>
                    <S.Text>
                      요청하신 페이지가 사라졌거나,
                      <br />
                      잘못된 경로를 이용하셨어요 :)
                    </S.Text>
                  </S.TextContainer>
                </S.Container>
                <S.FooterContainer>
                  <S.Button onClick={() => handleNavLinkClick()}>
                    홈으로 가기
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

export default Non;
