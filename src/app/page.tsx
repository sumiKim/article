import { articleList } from '@/data/article';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <header></header>
      <main>
        <section className='m-1'>
          <ul className='flex flex-col gap-1'>
            {articleList.map(article => (
              <li
                key={`article_${article.id}`}
                className='h-10 flex items-center gap-5'
              >
                <span className='w-10 h-10 border-2 border-black flex items-center justify-center'>
                  {article.id}
                </span>
                <Link
                  href={`/article/${article.id}`}
                  className='w-96 hover:underline cursor-pointer font-bold'
                >
                  {article.title}
                </Link>
                <span>{article.date_created}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
