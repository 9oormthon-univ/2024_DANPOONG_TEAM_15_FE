import React, {PropsWithChildren, useEffect, useState} from 'react';
import * as T from '@/styles/components/TimePickerObserverRootStyle';

interface TimePickerObserverRootProps {
  observees: HTMLLIElement[];
  handler: {[key: string]: (type: string, value: string) => void};
}

interface TimePickerChildProps {
  activeStates: {[key: string]: boolean};
}

export default function TimePickerObserverRoot({
  children,
  observees,
  handler,
}: PropsWithChildren<TimePickerObserverRootProps>) {
  const [activeStates, setActiveStates] = useState<{[key: string]: boolean}>(
    {},
  );

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = observerEntries => {
      const newActiveStates: {[key: string]: boolean} = {};

      observerEntries.forEach(entry => {
        const element = entry.target as HTMLLIElement;
        const type = element.classList.contains('ampm')
          ? 'ampm'
          : element.classList.contains('hours')
            ? 'hours'
            : 'minutes';

        const key = `${type}-${element.innerHTML}`; // type과 값 조합으로 key 생성

        if (entry.isIntersecting) {
          handler.handleSetTimes(type, element.innerHTML);
          newActiveStates[key] = true; // 활성화된 요소
        } else {
          newActiveStates[key] = false; // 비활성화된 요소
        }
      });

      setActiveStates(prev => ({...prev, ...newActiveStates}));
    };

    const observerOptions = {
      root: document.querySelector('.time-picker__observer-root'),
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    observees.forEach(observee => observer.observe(observee));

    return () => {
      observer.disconnect();
    };
  }, [observees, handler]);

  return (
    <T.ObserverRoot className="time-picker__observer-root">
      {children &&
        React.Children.map(children, child => {
          if (!React.isValidElement<TimePickerChildProps>(child)) return child;

          return React.cloneElement<TimePickerChildProps>(child, {
            activeStates, // activeStates 전달
          });
        })}
    </T.ObserverRoot>
  );
}
