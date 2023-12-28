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
  {
    id: 2,
    title: 'useRef 사용해서 만든 드롭다운',
    date_created: '2023-12-28',
    check_points: [
      {
        type: 'text',
        content:
          'button과 nav태그를 감싸고 있는 div에 ref를 걸어줘야한다. 클릭시 이 영역이 포함되냐 안되냐를 확인하기 때문에',
      },
      {
        type: 'text',
        content:
          'useDetectOutsideClick에서 27-29 line, 상태가 true가 되면서 드롭다운이 열릴 때, 윈도우에 리스너를 달아주는게 포인트',
      },
    ],
    improve_points: [],
  },
];

export function getArticle(id: number): Article {
  const articles = articleList.filter(article => article.id === id);
  return articles[0];
}
