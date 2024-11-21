import {useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/RequestStyle';

import TopBackXBar from '@/components/common/TopBackXBar';
import RequestCard from '@/components/request/RequestCard';
import PaperIcon from '@/assets/icons/request/paper.svg';
import CalenderIcon from '@/assets/icons/request/calender.svg';
import CardIcon from '@/assets/icons/request/card.svg';
import HeartIcon from '@/assets/icons/request/heart.svg';

function Request() {
  const navigate = useNavigate();

  const handleNavLinkClick = path => {
    navigate(path);
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.PageSpace>
                <TopBackXBar />
                <S.Container>
                  <S.Title>
                    질병감염아동 아이돌봄
                    <br />
                    서비스 신청은 이렇게 진행돼요
                  </S.Title>
                  <S.SubTitle>절차에 따라 친절히 도와드릴게요!</S.SubTitle>
                  <S.CardContainer>
                    <RequestCard
                      icon={PaperIcon}
                      title="1. 서류 제출"
                      text="진단서, 미등원확인서 서류가 필요해요"
                    />
                    <RequestCard
                      icon={CalenderIcon}
                      title="2. 일정 선택"
                      text="돌봄이 필요한 일정을 선택해요"
                    />
                    <RequestCard
                      icon={CardIcon}
                      title="3. 결제"
                      text="카카오페이로 편하게 결제가 가능해요"
                    />
                    <RequestCard
                      icon={HeartIcon}
                      title="4. 신청 완료"
                      text="일정에 맞춰 돌보미가 매칭될 거에요"
                    />
                  </S.CardContainer>
                </S.Container>
                <S.FooterContainer>
                  <S.Button
                    onClick={() => handleNavLinkClick('/request/child')}>
                    확인했어요
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

export default Request;
