import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mission',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Promote scientific computing by offering its users advanced and shared computing resources for supercomputing and data exploitation.
      </>
    ),
  },
  {
    title: 'Services',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Access to hours of CPU and GPU computing for sequential and parallel computing alongwith high-performance and volumetric data storage.
      </>
    ),
  },
  {
    title: 'Users',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
There are around 400 to 500 active users in GLiCID which inlcude reserachers from all laboratories in the region from all disciplines.
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
