import {Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Splash from './routes/Splash';
import Login from './routes/Login';
import Mypage from './routes/Mypage';
import Main from './routes/Main';
import Request from './routes/Request';
import SelectChild from './routes/SelectChild';
import Certificate from './routes/Certificate';
import CertificateConfirm from './routes/CertificateConfirm';
import Absent from './routes/Absent';
import AbsentConfirm from './routes/AbsentConfirm';
import Schedule from './routes/Schedule';
import Time from './routes/Time';
import Pay from './routes/Pay';
import Done from './routes/Done';
import CertificateList from './routes/CertificateList';
import CertificateInform from './routes/CertificateInform';
import AbsentList from './routes/AbsentList';
import AbsentInform from './routes/AbsentInform';
import Status from './routes/Status';
import Non from './routes/Non';
import StatusDetail from './routes/StatusDetail';
import CertificateDownload from './routes/CertificateDownload';
import IncomeType from './routes/IncomeType';
import ChildAddition from './routes/ChildAddition';
import CreateAccount from './routes/CreateAccount';
import CreateChild from './routes/CreateChild';
import PaySuccess from './routes/PaySuccess';

function App() {
  return (
    <>
      <div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Splash />} />
          {/* 시작화면 */}
          <Route path="/splash" element={<Splash />} />
          {/* 회원가입, 로그인, 마이페이지 */}
          <Route path="/create-account/" element={<CreateAccount />} />
          <Route
            path="/create-account/child-addition"
            element={<CreateChild />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route
            path="/mypage/certificate-download"
            element={<CertificateDownload />}
          />
          <Route path="/mypage/income-type" element={<IncomeType />} />
          {/* 메인, 서비스 신청 */}
          <Route path="/main" element={<Main />} />
          <Route path="/main/child-addition" element={<ChildAddition />} />
          <Route path="/request" element={<Request />} />
          <Route path="/request/child" element={<SelectChild />} />
          <Route path="/request/certificate" element={<Certificate />} />
          <Route
            path="/request/certificate-confirm"
            element={<CertificateConfirm />}
          />
          <Route path="/request/absent" element={<Absent />} />
          <Route path="/request/absent-confirm" element={<AbsentConfirm />} />
          <Route path="/request/schedule" element={<Schedule />} />
          <Route path="/request/time" element={<Time />} />
          <Route path="/request/pay" element={<Pay />} />
          {/* /apply/payments/success */}
          <Route path="/apply/payments/success" element={<PaySuccess />} />
          <Route path="/request/done" element={<Done />} />
          {/* 진단서, 미등원 확인서 */}
          <Route path="/certificate-list" element={<CertificateList />} />
          <Route
            path="/certificate-list/information"
            element={<CertificateInform />}
          />
          <Route path="/absent-list" element={<AbsentList />} />
          <Route path="/absent-list/information" element={<AbsentInform />} />
          {/* 신청 현황 */}
          <Route path="/status" element={<Status />} />
          <Route path="/status/detail" element={<StatusDetail />} />
          {/* 404 */}
          <Route path="/*" element={<Non />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
