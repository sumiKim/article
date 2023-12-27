'use client';
import ArticleMemo from '@/components/ArticleMemo';
import './styles.css';

import React, { useState } from 'react';
export default function Article1Page() {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div>
      <ArticleMemo article_id={1} />
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
