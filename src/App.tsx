import { Routes, Route } from "react-router-dom";
import "./App.css";

import Splash from "./routes/Splash";

import Join from "./routes/Join";
import JoinSecond from "./routes/JoinSecond";
import Login from "./routes/Login";
import Mypage from "./routes/Mypage";

import Main from "./routes/Main";
import Request from "./routes/Request";
import SelectChild from "./routes/SelectChild";
import Certificate from "./routes/Certificate";
import Absent from "./routes/Absent";
import Schedule from "./routes/Schedule";
import Pay from "./routes/Pay";
import Done from "./routes/Done";

import CertificateList from "./routes/CertificateList";
import CertificateInform from "./routes/CertificateInform";
import AbsentList from "./routes/AbsentList";
import AbsentInform from "./routes/AbsentInform";

import Status from "./routes/Status";
import Non from "./routes/Non";

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route exact path="/" element={<Splash />} />

        {/* 회원가입, 로그인, 마이페이지 */}
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/join-second" element={<JoinSecond />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/mypage" element={<Mypage />} />

        {/* 메인, 서비스 신청 */}
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/request" element={<Request />} />
        <Route exact path="/request/child" element={<SelectChild />} />
        <Route exact path="/request/certificate" element={<Certificate />} />
        <Route exact path="/request/absent" element={<Absent />} />
        <Route exact path="/request/schedule" element={<Schedule />} />
        <Route exact path="/request/pay" element={<Pay />} />
        <Route exact path="/request/done" element={<Done />} />

        {/* 진단서, 미등원 확인서 */}
        <Route exact path="/certificate-list" element={<CertificateList />} />
        <Route exact path="/certificate-list/information" element={<CertificateInform />} />
        <Route exact path="/absent-list" element={<AbsentList />} />
        <Route exact path="/absent-list/information" element={<AbsentInform />} />

        {/* 신청 현황 */}
        <Route exact path="/status" element={<Status />} />

        {/* 404 */}
        <Route exact path="/*" element={<Non />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
