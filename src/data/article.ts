export type Article = {
  id: number;
  title: string;
  date_created: string;
  check_points: Point[];
  improve_points: Point[];
};

type Point = {
  type: 'text' | 'hyperlink';
  hyperlink?: string;
  content: string;
};

export const articleList: Article[] = [
  {
    id: 1,
    title: 'useState만 사용해서 만든 드롭다운',
    date_created: '2023-12-27',
    check_points: [
      {
        type: 'text',
        content:
          'user1 버튼 클릭시, menu 드롭다운되는 것. (useState로 on off 관리)',
      },
      {
        type: 'text',
        content:
          'css styling : opacity + visibility + transform + transition (visibility만 쓸 때보다 자연스러움)',
      },
    ],
    improve_points: [
      {
        type: 'text',
        content: 'menu 드롭다운후, 외부 영역 누르면 드롭다운 닫히기',
      },
      {
        type: 'hyperlink',
        hyperlink: '/article/2',
        content: 'Article 2) 외부 영역 클릭시, 드롭다운 닫히기',
      },
    ],
  },
];

export function getArticle(id: number): Article {
  const articles = articleList.filter(article => article.id === id);
  return articles[0];
}
