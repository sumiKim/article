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
      // useRef로 저장한 HtmlDivElement : button + dropdown list
      console.log(el.current);
      // 마우스 클릭한 target
      console.log(e.target);

      // console.log(el.current.contains(e.target as Node));

      // useRef 설정한 el에 클릭한게 포함되지 않으면 상태전환
      if (el.current !== null && !el.current.contains(e.target as Node)) {
        console.log('외부를 눌렀을 때');
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      console.log('내부를 눌렀을 때');
      window.addEventListener('click', pageClickEvent);
    }

    // 컴포넌트가 제거될 때, 이벤트 리스너 제거
    return () => {
      console.log('제거');
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};
