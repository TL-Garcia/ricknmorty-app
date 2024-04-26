import { Link } from '../../components/link/Link';

export default function Home() {
  return (
    <>
      <header>
        <h2>Welcome to the Rick and Morty fan App!</h2>
        <p>Embark on an interdimensional journey with Rick and Morty</p>
      </header>

      <section className="episodes">
        <h3>Episodes</h3>
        <p>
          Relive the mind-bending escapades of Rick and Morty through our
          comprehensive episode guide. From the surreal to the sublime, each
          episode offers a unique blend of humor, satire, and existential
          musings. Prepare to laugh, gasp, and question the nature of reality
          itself.
        </p>
        <Link href="episodes.html">Explore Episodes</Link>
      </section>
      <section className="locations">
        <h3>Locations</h3>
        <p>
          Explore the vast and diverse landscapes of the Rick and Morty
          universe. From the bustling streets of Earth to the bizarre dimensions
          beyond, each location has its own story to tell. Discover hidden
          secrets, encounter strange inhabitants, and uncover the mysteries of
          the multiverse.
        </p>
        <Link href="locations.html">Explore Locations</Link>
      </section>
    </>
  );
}
