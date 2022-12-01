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
    title: 'You are looking for something?',
    Svg: require('@site/static/img/light-bulb.svg').default,
    description: (
      <>
        Well then we hope you find it here! If not and you think it would fit well in here, but do not want to create a doc yourself create a 
        <a href="https://github.com/Datenschmutz/docs/issues"><code>GitHub Issue</code></a>. Maybe we will take care of it then.
      </>
    ),
  },
  {
    title: 'You got the missing piece?',
    Svg: require('@site/static/img/idea.svg').default,
    description: (
      <>
        You' ve found a bug or can add something to a documentation?
        Feel free to use the <br/><code>Edit this page</code> button at the bottom of the page and share your knowledge with others!
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
