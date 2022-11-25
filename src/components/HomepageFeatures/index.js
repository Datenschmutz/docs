import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Work in progress',
    Svg: require('@site/static/img/work-in-progress.svg').default,
    description: (
      <>
        We are just getting started with this website. So not everything is in place yet. We are working on it. 
        Please get involved and share your knowledge, e.g. about tools not covered, bugs or improvements.
      </>
    ),
  },
  {
    title: 'TBD',
    Svg: require('@site/static/img/dmz-logo.svg').default,
    description: (
      <>
       <code>TBD</code>.
      </>
    ),
  },
  {
    title: 'You got the missing piece?',
    Svg: require('@site/static/img/idea.svg').default,
    description: (
      <>
        You' ve found a bug or can add something to a documentation?
        Feel free to use the <code>Edit this page</code> button at the bottom of the page and share your knowledge with others!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
