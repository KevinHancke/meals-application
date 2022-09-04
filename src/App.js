import './App.css';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Search from './components/Search';
import Modal from './components/Modal';

export default function App() {
  return (
    <main>
      <Search/>
      {/*<Favorites/>*/}
      <Meals/>
      {/*<Modal/>*/}
    </main>
  );
}

