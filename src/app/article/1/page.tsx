'use client';
import './styles.css';
import Link from 'next/link';
import React, { useState } from 'react';
export default function Article1Page() {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div>
      <section className='memo_container p-2'>
        <h1 className='font-bold border-b-2 border-black pb-1 mb-1'>
          useState만 사용해서 만든 드롭다운
        </h1>
        <div className='memo flex flex-col gap-2'>
          <div>
            <p>&#91;CheckPoints&#93;</p>
            <ul className='pl-5 list-inside list-decimal'>
              <li>
                user1 버튼 클릭시, menu 드롭다운되는 것. (useState로 on off
                관리)
              </li>
              <li>
                css styling : opacity + visibility + transform + transition
                (visibility만 쓸 때보다 자연스러움)
              </li>
            </ul>
          </div>
          <div>
            <p>&#91;ImprovePoints&#93;</p>
            <ul className='pl-5 list-inside list-square'>
              <li>menu 드롭다운후, 외부 영역 누르면 드롭다운 닫히기</li>
              <li className='text-blue-500 hover:cursor-pointer hover:underline'>
                <Link href='/article/2'>
                  &#61;&#62; article 2) 외부 영역 클릭시, 드롭다운 닫히기
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className='menu-container'>
          <button onClick={onClick} className='menu-trigger'>
            <span>User1</span>
            <img
              src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg'
              alt='User avatar'
            />
          </button>
          <nav className={`menu ${isActive ? 'active' : 'inactive'}`}>
            <ul>
              <li>
                <a href='#'>Messages</a>
              </li>
              <li>
                <a href='#'>Trips</a>
              </li>
              <li>
                <a href='#'>Saved</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}
