import { InfoCard } from './InfoCard';
import { InfoItem } from './types';
import './InfoCardList.scss';

interface InfoCardListProps {
  items: InfoItem[];
  type: string;
}

export const InfoCardList = ({ items, type }: InfoCardListProps) => {
  return (
    <ul className="info-card-list">
      {items.map((item) => (
        <li className="info-card-list__item" key={item.id}>
          <InfoCard item={item} type={type} />
        </li>
      ))}
    </ul>
  );
};
