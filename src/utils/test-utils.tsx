import React, { FC } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../stores/index';

const Wrappar: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) => {
  return render(ui, { wrapper: Wrappar, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
