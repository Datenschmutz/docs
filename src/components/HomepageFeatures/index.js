import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id='Homepage.1.text.title' description="Homepage 1left text section Title">Dive into the World of IT</Translate>,
    Svg: require('@site/static/img/it-world.svg').default,
    description: (
      <Translate id='Homepage.1.text' description="Homepage 1left text section conent">
        No matter your background or level of expertise, there's always something new to learn in the fast-paced field of Information Technology. 
        Our platform provides a wealth of resources on a broad range of topics - from networking and programming, to cybersecurity and server management. Get started on your journey of discovery and enhance your skills today.
      </Translate>
    ),
  },
  {
    title: <Translate id='Homepage.2.text.title' description="Homepage 1middle text section Title">Learn, Contribute, Repeat</Translate>,
    Svg: require('@site/static/img/learn_contribute.svg').default,
    description: (
      <Translate id='Homepage.2.text' description="Homepage 1middle text section">
        Every contribution - big or small - makes a difference. Whether you're updating an existing article, adding a new guide, or simply pointing out a bug, your efforts help improve the quality and breadth of our content. 
        Remember, in the world of tech, learning is a lifelong journey. Dive in, contribute, learn, and then repeat the cycle!
      </Translate>
    ),
  },
  {
    title: <Translate id='Homepage.3.text.title' description="Homepage 1right text section Title">A Platform, Shaped by the Community, for the Community</Translate>,
    Svg: require('@site/static/img/by-all-for-all.svg').default,
    description: (
      <Translate id='Homepage.3.text' description="Homepage 1right text section Title">
        Datenschmutz.dev is a thriving platform, powered by a community of tech enthusiasts and experts. 
        We provide a wealth of documentations, guides, and cheat sheets on topics like Windows and Linux Server, Scripts, Programms, and much more.
      </Translate>
    ),
  },
  {
    title: <Translate id='Homepage.4.text.title' description="Homepage 2left text section Title">Looking for Something Specific?</Translate>,
    Svg: require('@site/static/img/looking.svg').default,
    description: (
      <Translate id='Homepage.4.text' description="Homepage 2left text section conent">
        Our community is constantly expanding and updating our content to provide you with the most current and accurate information. 
        If you can't find what you're looking for, don't hesitate to create a GitHub Issue. We value your feedback and contributions!
      </Translate>
    ),
  },
  {
    title: <Translate id='Homepage.5.text.title' description="Homepage 2middle text section Title">Have Something to Contribute?</Translate>,
    Svg: require('@site/static/img/missing-piece.svg').default,
    description: (
      <Translate id='Homepage.5.text' description="Homepage 2middle text section content">
      If you've encountered a bug or have discovered something that could enhance our documentation, we encourage you to take action and contribute to the community. Use the "Edit this page" button to make changes or additions to the content. 
      Your insights are valuable to us and to the entire tech community. So don't be shy - take the initiative and start contributing today!
      </Translate>
    ),
  },
  {
    title: <Translate id='Homepage.6.text.title' description="Homepage 2right text section Title">Join Our Growing Community</Translate>,
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <Translate id='Homepage.6.text' description="Homepage 2right text section conent">
      The strength of our platform lies in the contributions of our community members. Each article, guide, and cheat sheet is a testament to our collective passion for technology and learning. 
      Join us, add to the conversation, and help make Datenschmutz.dev an even more valuable resource for the tech community worldwide.
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
