export type Article = {
  id: number;
  title: string;
  date_created: string;
};

export const articleList: Article[] = [
  {
    id: 1,
    title: 'useState만 사용해서 만든 드롭다운',
    date_created: '2023-12-27',
  },
];
