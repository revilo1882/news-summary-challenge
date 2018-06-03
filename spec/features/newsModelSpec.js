document.addEventListener('DOMContentLoaded', () => {
  expect(document.documentElement).toHaveContent('News Summary');
  expect(document.documentElement).toHaveContent('News1');
  expect(document.documentElement).toHaveContent('News2');
});
