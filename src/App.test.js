import { render } from '@testing-library/react';
import App from './App';

test('unit test', () => {
  const containerTest = document.createElement('div');
  containerTest.id = 'react_app_test';
  render(<App />, containerTest);
  containerTest.remove();
});
