import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Read Cooked Content',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The editor allows for reading of existing files that are shipped with TSW.
      </>
    ),
  },
  {
    title: 'Based on UE4 Editor',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The editor is simply a modification of the standard UE4 editor. With additional
        types of assets such as formations, and some tweaks to allow for cooked content
        in editor.
      </>
    ),
  },
  {
    title: 'Still in development...',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The tools aren't at a stable point yet and are still being worked on, so to begin
        with it is limited to only editing of data assets.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
