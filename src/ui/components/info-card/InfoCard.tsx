import { randomIntFromInterval } from './utils';
import './InfoCard.scss';
import { InfoItem } from './types';
import { Link } from '../link/Link';

interface InfoCardProps {
  item: InfoItem;
  type: string;
}

export const InfoCard = ({ item, type }: InfoCardProps) => {
  return (
    <div
      className="info-card"
      style={{
        backgroundImage: `url(background-0${randomIntFromInterval(1, 5)}.jpg)`,
      }}
    >
      <div className="overlay">
        <Link href={`/${type}/${item.id}`} variant="fake">
          <article className="info-card__content">
            <h4 className="info-card__title">{item.title}</h4>
            <p>{item.type}</p>
            <p>{item.detail}</p>
          </article>
        </Link>
      </div>
    </div>
  );
};
