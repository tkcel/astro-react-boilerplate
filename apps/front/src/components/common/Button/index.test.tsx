import { cleanup, render, screen } from '@testing-library/react';

import { Button } from '.';

afterEach(cleanup);

describe('<Button/ >', () => {
  describe('表示確認', () => {
    it('正しくレンダリングされること', () => {
      render(<Button />, {});
      expect(screen.getByRole('button')).toHaveTextContent('button');
    });
  });
});
