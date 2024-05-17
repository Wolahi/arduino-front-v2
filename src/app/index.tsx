import './styles/style.scss';
import AppRouter from './router/router';
import useTheme from '../shared/switcherTheme/useTheme';

const App = () => {
  useTheme();
  return (
    <div className="app">
      <main>
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
