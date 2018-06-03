document.addEventListener('DOMContentLoaded', () => {
  let newsArticles = new NewsArticles();
  let currentArticles = newsArticles.headlines;
  let newsContainer = document.getElementById('newsContainer');

  let news = document.getElementById('news');
  currentArticles.forEach((text) => {
    let article = document.createElement('article');
    let story = document.createTextNode(text);
    article.appendChild(story);
    news.appendChild(article);
  });
});
