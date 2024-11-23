import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {handleSuccessPayment} from '@/utils/kakaoPay';

const PaySuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pgToken = searchParams.get('pg_token');

    if (pgToken) {
      const processPayment = async () => {
        try {
          await handleSuccessPayment(pgToken);
          navigate('/request/done');
        } catch (error: any) {
          console.error('결제 완료 처리 중 오류:', error.message);
          alert('결제 완료 처리 중 오류가 발생했습니다.');
          navigate('/main');
        }
      };

      processPayment();
    } else {
      console.error('pg_token이 URL에 없습니다.');
      alert('결제 인증 토큰이 필요합니다.');
      navigate('/main'); // pg_token이 없으면 메인 페이지로 이동
    }
  }, [location, navigate]);

  return (
    <div>
      <p>결제 처리 중입니다. 잠시만 기다려주세요...</p>
    </div>
  );
};

export default PaySuccess;
