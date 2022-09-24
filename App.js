import Routes from './src/routes';
import { VideosProvider } from './src/contexts/VideosContext';

export default function App() {
  return (
    <VideosProvider>
      <Routes />
    </VideosProvider>
  );
}
