import { Header } from '../header/Header';
import './Hero.scss';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero__description">
          <Header />
          <header>
            <h2>Welcome to the Rick and Morty fan App!</h2>
            <p>Embark on an interdimensional journey with Rick and Morty</p>
          </header>
        </div>
      </div>
    </section>
  );
};
