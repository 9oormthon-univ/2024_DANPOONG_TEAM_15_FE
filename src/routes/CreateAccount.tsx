import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as C from '@/styles/CommonStyle';
import * as S from '@/styles/JoinStyle';
import CreateAccountFirst from '@/components/user/CreateAccountFirst';
import CreateAccountSecond from '@/components/user/CreateAccountSecond';
import {SignUpRequestBody} from '@/types';

function CreateAccount() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<SignUpRequestBody>({
    email: '',
    name: '',
    password: '',
    incomeType: 'A',
  });

  const handleNextStep = (data: Partial<SignUpRequestBody>) => {
    setFormData(prev => ({...prev, ...data}));
    setCurrentStep(prevStep => prevStep + 1);
  };

  // 최종 제출
  const handleSubmit = async (data: {incomeType: string}) => {
    setFormData(prev => ({...prev, ...data}));
    const submitData = {...formData, ...data};
    console.log(
      '🚀 ~ file: CreateAccount.tsx:27 ~ handleSubmit ~ newData:',
      submitData,
    );
    // 아이등록 페이지로 이동
    navigate('/create-account/child-addition');
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
