import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate description="Homepage left text section Title">Work in progress</Translate>,
    Svg: require('@site/static/img/work-in-progress.svg').default,
    description: (
      <Translate description="Homepage left text section conent">
        We are just getting started with this website. 
        Please get involved and share your knowledge, e.g. about tools not covered, bugs or improvements.
      </Translate>
    ),
  },
  {
    title: <Translate description="Homepage middle text section Title">You are looking for something?</Translate>,
    Svg: require('@site/static/img/light-bulb.svg').default,
    description: (
      <Translate description="Homepage middle text section Title">
        Well then we hope you find it here! If not and you think it would fit well in here, but do not want to create a doc yourself create a GitHub Issue. Maybe we will take care of it then.
      </Translate>
    ),
  },
  {
    title: <Translate description="Homepage right text section Title">You got the missing piece?</Translate>,
    Svg: require('@site/static/img/idea.svg').default,
    description: (
      <Translate id="Homepage.right.txt.cont" description="Homepage right text section conent">
          You' ve found a bug or can add something to a documentation?
          Feel free to use the "Edit this page" button at the bottom of the page and share your knowledge with others!
      </Translate>
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
