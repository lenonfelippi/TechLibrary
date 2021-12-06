import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { LibraryProvider } from '@contexts/LibraryContext';
import { GlobalStyle } from "@styles/global";

export function App() {
  return (
    <LibraryProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </LibraryProvider>
  );
}
