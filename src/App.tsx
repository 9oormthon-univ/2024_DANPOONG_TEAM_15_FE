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
        <Route path="/" element={<Splash />} />

        {/* 회원가입, 로그인, 마이페이지 */}
        <Route path="/join" element={<Join />} />
        <Route path="/join-second" element={<JoinSecond />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />

        {/* 메인, 서비스 신청 */}
        <Route path="/main" element={<Main />} />
        <Route path="/request" element={<Request />} />
        <Route path="/request/child" element={<SelectChild />} />
        <Route path="/request/certificate" element={<Certificate />} />
        <Route path="/request/absent" element={<Absent />} />
        <Route path="/request/schedule" element={<Schedule />} />
        <Route path="/request/pay" element={<Pay />} />
        <Route path="/request/done" element={<Done />} />

        {/* 진단서, 미등원 확인서 */}
        <Route path="/certificate-list" element={<CertificateList />} />
        <Route path="/certificate-list/information" element={<CertificateInform />} />
        <Route path="/absent-list" element={<AbsentList />} />
        <Route path="/absent-list/information" element={<AbsentInform />} />

        {/* 신청 현황 */}
        <Route path="/status" element={<Status />} />

        {/* 404 */}
        <Route path="/*" element={<Non />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
