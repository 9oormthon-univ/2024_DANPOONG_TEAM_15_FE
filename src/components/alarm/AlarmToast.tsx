import * as A from '@/styles/components/AlarmToastStyle';

interface AlarmToastProps {
  text: string;
  imageSrc: string;
}

function AlarmToast({text, imageSrc}: AlarmToastProps) {
  return (
    <>
      <A.TotalContainer>
        <A.Icon src={imageSrc} alt="알람" />
        {text}
      </A.TotalContainer>
    </>
  );
}

export default AlarmToast;
