import { randomIntFromInterval } from './utils';
import './InfoCard.scss';
import { InfoItem } from './types';

interface InfoCardProps {
  item: InfoItem;
}

export const InfoCard = ({ item: { title, type, detail } }: InfoCardProps) => {
  return (
    <div
      className="info-card"
      style={{
        backgroundImage: `url(background-0${randomIntFromInterval(1, 5)}.jpg)`,
      }}
    >
      <div className="overlay">
        <article className="info-card__content">
          <h4 className="info-card__title">{title}</h4>
          <p>{type}</p>
          <p>{detail}</p>
        </article>
      </div>
    </div>
  );
};
