import {useState} from 'react';
import styled from 'styled-components';
import TopBackMentBar from '../common/TopBackMentBar';
import {COLOR} from '@/const/color';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 100vh;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
  padding: 16px 20px 50px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  display: flex;
  font-weight: 600;
  color: ${COLOR.BLACK_03};
`;

const Input = styled.input`
  padding: 14px 16px;
  border: 1px solid ${COLOR.WHITE_07};
  border-radius: 12px;
  font-size: 14px;
  color: ${COLOR.BLACK_03};
  background-color: ${COLOR.WHITE_07};
  font-family: 'Pretendard';
  &::placeholder {
    color: ${COLOR.GRAY_04};
  }

  &:focus {
    outline: none;
    border: 1px solid ${COLOR.ORANGE_01};
  }
`;

const ErrorMessage = styled.div`
  font-size: 14px;
  color: ${COLOR.RED_01};
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: ${COLOR.ORANGE_01};
  border: none;
  border-radius: 8px;
  color: ${COLOR.WHITE_01};
  font-weight: 600;
  font-family: 'Pretendard';
  cursor: pointer;

  &:disabled {
    background-color: ${COLOR.GRAY_04};
    cursor: not-allowed;
  }

  &:disabled :hover {
    background-color: ${COLOR.ORANGE_02};
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${COLOR.WHITE_01};
  padding: 16px 20px 50px;
`;

interface CreateAccountFirstProps {
  onNext: (data: {email: string; name: string; password: string}) => void;
  formData: {email: string; name: string; password: string};
}

function CreateAccountFirst({onNext, formData}: CreateAccountFirstProps) {
  const [email, setEmail] = useState(formData.email);
  const [name, setName] = useState(formData.name);
  const [password, setPassword] = useState(formData.password);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const validateInputs = () => {
    const newErrors = {
      name: name.length > 8 ? '이름은 최대 8자까지 입력 가능합니다.' : '',
      email: email.length < 8 ? '최소 8자 이상 입력해주세요' : '',
      password: password.length < 10 ? '최소 10자 이상 입력해주세요' : '',
    };
    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.password;
  };

  const handleNext = () => {
    if (validateInputs()) {
      onNext({email, name, password});
    }
  };

  return (
    <Container>
      <TopBackMentBar titleText="가입하기" />
      <FormContainer>
        <InputContainer>
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="이름을 입력해주세요"
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요 (최소 8자 이상)"
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요 (최소 10자 이상)"
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputContainer>
      </FormContainer>
      <FooterContainer>
        <SubmitButton
          onClick={handleNext}
          disabled={!email || !name || !password}>
          다음
        </SubmitButton>
      </FooterContainer>
    </Container>
  );
}

export default CreateAccountFirst;
