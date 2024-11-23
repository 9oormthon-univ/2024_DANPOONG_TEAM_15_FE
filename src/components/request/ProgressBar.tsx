import * as P from '@/styles/components/ProgressBarStyle';

interface ProgressBarProps {
  isStatus: number; // 현재 상태를 나타내는 숫자 (0부터 시작)
}

const ProgressBar = ({isStatus}: ProgressBarProps) => {
  return (
    <P.ProgressBar>
      <P.LeftHalfBar $isActive={isStatus >= 0} />
      <P.RightHalfBar $isActive={isStatus >= 1} />
      <P.Bar $isActive={isStatus >= 2} />
      <P.Bar $isActive={isStatus >= 3} />
      <P.Bar $isActive={isStatus >= 4} />
    </P.ProgressBar>
  );
};

export default ProgressBar;
