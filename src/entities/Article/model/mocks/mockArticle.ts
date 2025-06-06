import { ArticleBlockType } from '../consts/consts'
import { Article } from '../types/article'

export const mockArticle: Article = {
  id: '1',
  title: 'How to become a true ninja...',
  subtitle: '... and make others lives harder',
  image:
    'https://yt3.googleusercontent.com/ytc/AGIKgqND5OpZ3zBGI_CFfNpPWs1PDQu_OmNG2IFXPcxf=s900-c-k-c0x00ffffff-no-rj',
  views: 1023,
  created: '26.02.2022',
  userId: '1',
  type: ['ECONOMICS'],
  user: { username: 'username' },
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Ніндзя код',
      paragraphs: [
        'Ніндзя-програмісти минулого використовували деякі хитрощі, щоб загострити розум тих, хто буде підтримувати їх код.\n\nГуру, що перевіряють код, шукають їх у тестових завданнях.\n\nПочатківці іноді використовують їх краще за ніндзя-програмістів.\n\nУважно перечитайте ці хитрощі і вирішіть хто ви є — ніндзя, початківець, чи може гуру перевірки коду?',
        'Ніндзя-програмісти минулого використовували деякі хитрощі, щоб загострити розум тих, хто буде підтримувати їх код.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.TEXT,
      title: 'Стислість – сестра таланту',
      paragraphs: [
        'Пишіть якомога коротший код. Покажіть, наскільки ви розумні. Пишіть якомога коротший код. Покажіть, наскільки ви розумні. Пишіть якомога коротший код. Покажіть, наскільки ви розумні.',
        "Нехай стислі та неочевидні можливості мови стануть вам посібником.\n\nНаприклад, розглянемо таке застосування тернарного оператора '?'",
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!doctype html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport"\n          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n</head>\n<body>\n<div id="root"></div>\n</body>\n</html>',
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Стислість – брат таланту',
      paragraphs: [
        'Круто, правда? Якщо ви напишете подібне, розробник, який натрапить на цей рядок і намагатиметься зрозуміти, яке ж значення має i, пізнає неабияку радість. І врешті-решт, прийде до вас за відповідю.',
        'Скажіть йому, що коротше – це завжди краще. Допоможіть і йому стати на шлях ніндзя.',
      ],
    },
    {
      id: '35',
      type: ArticleBlockType.TEXT,
      title: '',
      paragraphs: [
        'Скажіть йому, що коротше – це завжди краще. Допоможіть і йому стати на шлях ніндзя.',
      ],
    },
    {
      id: '8',
      type: ArticleBlockType.IMAGE,
      src: 'https://1.zt.ua/wp-content/uploads/2022/07/js.jpg',
      title: 'Picture 1 - painted workflow concept',
    },
    {
      id: '23',
      type: ArticleBlockType.TEXT,
      title: '',
      paragraphs: [
        'Екзотична змінна у якості лічильника особоливо доречна, коли тіло циклу займає одну-дві сторінки (чим більше, тим краще). У такому випадку, ті, хто зануриться глибоко у код циклу, не зможуть швидко здогадатись, що змінна x насправді є лічильником.',
      ],
    },
  ],
}
