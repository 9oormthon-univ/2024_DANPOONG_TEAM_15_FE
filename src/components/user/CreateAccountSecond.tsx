import {useState} from 'react';

interface CreateAccountSecondProps {
  onPrevious: () => void;
  onSubmit: () => void;
  formData: {
    email: string;
    name: string;
    password: string;
    incomeType: string;
  };
}

function CreateAccountSecond({
  onPrevious,
  onSubmit,
  formData,
}: CreateAccountSecondProps) {
  const [incomeType, setIncomeType] = useState(formData.incomeType);

  const handleFinish = () => {
    if (incomeType) {
      onSubmit();
    } else {
      alert('소득 유형을 선택해주세요.');
    }
  };

  return (
    <div>
      <h1>회원가입 - 소득 유형 선택</h1>
      <select value={incomeType} onChange={e => setIncomeType(e.target.value)}>
        <option value="">소득 유형 선택</option>
        <option value="A">A형</option>
        <option value="B">B형</option>
        <option value="C">C형</option>
      </select>
      <button onClick={onPrevious}>이전</button>
      <button onClick={handleFinish}>제출</button>
    </div>
  );
}

export default CreateAccountSecond;
