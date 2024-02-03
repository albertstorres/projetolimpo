import './styles.css';
import Counter from '../../components/Counter';

function Main() {
  return (
    <div className="container-main">
      <h1>
        <Counter tittle="Contador 1" />
        <Counter tittle="Contador 2" initialValue={10} />
      </h1>
    </div>
  );
}

export default Main;
