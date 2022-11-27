import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';

const Projects = [
  {
    name: '🎮 Gaming-Lounge',
    image: require('@site/static/img/Projects/Gaming-Lounge.png'),
    url: 'https://gaming-lounge.at',
    description: (
      <a>
        A gaming project by Fabian with associated Teamspeak and forum
      </a>
    ),
  },
  {
    name: '🎮 Simulatronics',
    image: require('@site/static/img/Projects/Simulatronics.png'),
    url: 'https://simulatronics.com',
    description: (
      <a>
        A 3D printing store run by Thomas(T4KUUY4) which is currently under construction.
      </a>
    ),
  },
  {
    name: '🎮 Datenschmutz.org',
    image: require('@site/static/img/dmz-logo-main-350x-border.png'),
    url: 'https://datenschmutz.org',
    description: (
      <a>
        Main website of datenschmutz.
      </a>
    ),
  },
];

interface Props {
  name: string;
  image: string;
  url: string;
  description: JSX.Element;
}

function ProjectsCard({name, image, url, description}: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
      <div className={clsx('card__image')}>
          <Link to={url}>
            <Image img={image} alt={`${name}'s image`} />
          </Link>
        </div>
        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
              <a>Check it out!</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsCardsRow(): JSX.Element {
  return (
    <div className="row">
      {Projects.map((Project) => (
        <ProjectsCard key={Project.name} {...Project} />
      ))}
    </div>
  );
}