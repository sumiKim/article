'use client';
import { Article, getArticle } from '@/data/article';
import Link from 'next/link';
export default function ArticleMemo({ article_id }: { article_id: number }) {
  const { id, title, date_created, check_points, improve_points }: Article =
    getArticle(article_id);

  return (
    <section className='memo_container p-2'>
      <h1 className='font-bold border-b-2 border-black pb-1 mb-1 flex justify-between'>
        <span>
          {id}) {title}
        </span>
        <span className='text-sm flex items-end'>{date_created}</span>
      </h1>
      <div className='memo flex flex-col gap-2'>
        <div>
          <p>&#91;CheckPoints&#93;</p>
          <ul className='pl-5 list-inside list-decimal'>
            {check_points.map((point, index) => (
              <li key={`check_points_${index}`}>{point.content}</li>
            ))}
          </ul>
        </div>
        <div className={improve_points.length === 0 ? 'hidden' : 'block'}>
          <p>&#91;ImprovePoints&#93;</p>
          <ul className='pl-5 list-inside list-square'>
            {improve_points.map((point, index) =>
              point.type === 'text' ? (
                <li key={`check_points_${index}`}>{point.content}</li>
              ) : (
                <li
                  key={`improve_points_${index}`}
                  className='text-blue-500 hover:cursor-pointer hover:underline'
                >
                  <Link href={point.hyperlink ?? ''}>
                    &#61;&#62; {point.content}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
