import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id='Homepage.left.text.title' description="Homepage left text section Title">A Platform, Shaped by the Community, for the Community</Translate>,
    Svg: require('@site/static/img/by-all-for-all.svg').default,
    description: (
      <Translate id='Homepage.left.text' description="Homepage left text section conent">
        Datenschmutz.dev is a thriving platform, powered by a community of tech enthusiasts and experts. 
        We provide a wealth of documentations, guides, and cheat sheets on topics like Windows and Linux Server, Scripts, Programms, and much more.
      </Translate>
    ),
  },
  {
    title: <Translate id='Homepage.middle.text.title' description="Homepage middle text section Title">Looking for Something Specific?</Translate>,
    Svg: require('@site/static/img/looking.svg').default,
    description: (
      <Translate id='Homepage.middle.text' description="Homepage middle text section">
        Our community is constantly expanding and updating our content to provide you with the most current and accurate information. 
        If you can't find what you're looking for, don't hesitate to create a GitHub Issue. We value your feedback and contributions!
      </Translate>
    ),
  },
  {
    title: <Translate id='Homepage.right.text.title' description="Homepage right text section Title">Have Something to Contribute?</Translate>,
    Svg: require('@site/static/img/missing-piece.svg').default,
    description: (
      <Translate id='Homepage.right.text' description="Homepage right text section conent">
      If you've encountered a bug or have discovered something that could enhance our documentation, we encourage you to take action and contribute to the community. Use the "Edit this page" button to make changes or additions to the content. 
      Your insights are valuable to us and to the entire tech community. So don't be shy - take the initiative and start contributing today!
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
