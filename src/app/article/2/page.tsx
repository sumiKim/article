'use client';
import { useDetectOutsideClick } from '@/hooks/useDetectOutsideClick';
import './styles.css';
import React, { useCallback, useRef } from 'react';
export default function Article2Page() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onClick = useCallback(() => setIsActive(!isActive), [isActive]);

  return (
    <div className='container'>
      <div ref={dropdownRef} className='menu-container'>
        <button onClick={onClick} className='menu-trigger'>
          <span>User2</span>
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
    </div>
  );
}
