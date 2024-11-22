import {useState} from 'react';
import * as C from '@/styles/CommonStyle';
import * as S from '@/styles/JoinStyle';
import CreateAccountFirst from '@/components/user/CreateAccountFirst';
import CreateAccountSecond from '@/components/user/CreateAccountSecond';
import {SignUpRequestBody} from '@/types';

function CreateAccount() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<SignUpRequestBody>({
    email: '',
    name: '',
    password: '',
    incomeType: 'A',
  });
  const handleNextStep = (data: Partial<typeof formData>) => {
    setFormData(prev => ({...prev, ...data}));
    setCurrentStep(prevStep => prevStep + 1); // 다음 단계로 이동
  };

  const handlePreviousStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/endpoint', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('회원가입이 성공적으로 완료되었습니다!');
      } else {
        alert('회원가입에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <C.Page>
      <C.Center>
        <S.Background>
          <C.PageSpace>
            {currentStep === 1 && (
              <CreateAccountFirst onNext={handleNextStep} formData={formData} />
            )}
            {currentStep === 2 && (
              <CreateAccountSecond
                onPrevious={handlePreviousStep}
                onSubmit={handleSubmit}
                formData={formData}
              />
            )}
          </C.PageSpace>
        </S.Background>
      </C.Center>
    </C.Page>
  );
}

export default CreateAccount;
