import { Article } from '../../../src/entities/Article'

const defaultArticle = {
  title: 'How to become a true warrior and change the game',
  subtitle: '... and make others lives harder',
  image:
    'https://t4.ftcdn.net/jpg/05/72/75/99/360_F_572759975_8Tku6l3E3PAytqoLLRij9xwt1vybvbbi.jpg',
  views: 1023,
  created: '26.02.2022',
  userId: '1',
  type: ['IT'],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Ніндзя код',
      paragraphs: [
        'Ніндзя-програмісти минулого використовували деякі хитрощі, щоб загострити розум тих, хто буде підтримувати їх код.\n\nГуру, що перевіряють код, шукають їх у тестових завданнях.\n\nПочатківці іноді використовують їх краще за ніндзя-програмістів.\n\nУважно перечитайте ці хитрощі і вирішіть хто ви є — ніндзя, початківець, чи може гуру перевірки коду?',
        'Ніндзя-програмісти минулого використовували деякі хитрощі, щоб загострити розум тих, хто буде підтримувати їх код.',
      ],
    },
  ],
}

export const createArticle = () => {
  cy.request({
    method: 'POST',
    body: defaultArticle,
    headers: { Authorization: 'asdf' },
    url: 'http://localhost:8000/articles',
  }).then((response) => response.body)
}
export const removeArticle = (articleId: string) => {
  cy.request({
    method: 'DELETE',
    body: defaultArticle,
    headers: { Authorization: 'asdf' },
    url: `http://localhost:8000/articles/${articleId}`,
  })
}

// @ts-ignore
declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(): Chainable<Article>
      removeArticle(articleId: string): Chainable<void>
    }
  }
}
