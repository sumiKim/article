'use client';
import { useState, useEffect, SetStateAction } from 'react';

type UseDetectOutsideClick = (
  el: React.RefObject<HTMLDivElement>,
  initialState: boolean
) => [boolean, React.Dispatch<SetStateAction<boolean>>];

export const useDetectOutsideClick: UseDetectOutsideClick = (
  el,
  initialState
) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    console.log(isActive);
    console.log(el);

    const pageClickEvent = (e: MouseEvent) => {
      // useRef 설정한 el에 클릭한게 포함되지 않으면 상태전환
      if (el.current !== null && !el.current.contains(e.target as Node)) {
        setIsActive(!isActive);
      }
    };

    // 내부를 눌렀을 때, window에 listener를 달아둔다.
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    // 컴포넌트가 제거될 때, 이벤트 리스너 제거
    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};
