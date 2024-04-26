import { InfoCard } from './InfoCard';
import { InfoItem } from './types';
import './InfoCardList.scss';

interface InfoCardListProps {
  items: InfoItem[];
}

export const InfoCardList = ({ items }: InfoCardListProps) => {
  return (
    <ul className="info-card-list">
      {items.map((item) => (
        <li className="info-card-list__item">
          <InfoCard item={item} />
        </li>
      ))}
    </ul>
  );
};
