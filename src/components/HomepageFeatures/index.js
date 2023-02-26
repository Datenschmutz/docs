import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id='Homepage.left.text.title' description="Homepage left text section Title">By all for all</Translate>,
    Svg: require('@site/static/img/by-all-for-all.svg').default,
    description: (
      <Translate id='Homepage.left.text' description="Homepage left text section conent">
        Our platform thrives on the contributions of a vibrant community of tech enthusiasts and experts. 
        Whether you're a seasoned IT professional or just starting out, you can share your knowledge and help others by adding content to our site. 
        Together, we can create a valuable resource for everyone in the tech community.
      </Translate>
    ),
  },
  {
    title: <Translate id='Homepage.middle.text.title' description="Homepage middle text section Title">You are looking for something?</Translate>,
    Svg: require('@site/static/img/looking.svg').default,
    description: (
      <Translate id='Homepage.middle.text' description="Homepage middle text section">
        Well then we hope you find it here! Our community is constantly adding and updating content to provide the most current and accurate information available. If not and you think it would fit well in here, but do not want to create a doc yourself create a GitHub Issue. Maybe we will take care of it then.
      </Translate>
    ),
  },
  {
    title: <Translate id='Homepage.right.text.title' description="Homepage right text section Title">You got the missing piece?</Translate>,
    Svg: require('@site/static/img/missing-piece.svg').default,
    description: (
      <Translate id='Homepage.right.text' description="Homepage right text section conent">
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
