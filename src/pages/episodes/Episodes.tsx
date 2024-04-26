import React from 'react';
import './Episodes.scss';
import { useGetEpisodes } from './hooks/useGetEpisodes';

interface InfoCardProps {
  title: string;
  detail: string;
  date: string; // ISO String
}

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const InfoCard = ({ title, detail, date }: InfoCardProps) => {
  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: `url(background-0${randomIntFromInterval(1, 5)}.jpg)`,
      }}
    >
      <article className="info-card">
        <h4 className="info-card__title">{title}</h4>
        <p>{detail}</p>
        <p>{new Date(date).toDateString()}</p>
      </article>
    </div>
  );
};

export default function Episodes() {
  const { data, error, isLoading } = useGetEpisodes();

  if (isLoading) {
    return '...';
  }

  if (error) {
    return 'error';
  }

  return (
    <>
      <h2>Episodes</h2>
      <ul className="info-card-list">
        {data?.map((r) => (
          <li className="info-card-list__item">
            <InfoCard
              title={r.name}
              detail={r.episode}
              date={r.created}
              key={r.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
