import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Audio, video, and everything in between</>,
    imageUrl: 'img/pack/010-sound waves.svg',
    description: (
      <>
        Can You Hear Me is a site for both the aspiring network musician and stir-crazy Luddite who wants to connect with friends and family over the web. Here you'll find a range of softwares, guides and tools for comparison that should allow you to make an educated decision without leaving the url.
      </>
    ),
  },
  {
    title: <>Friendly and accessible</>,
    imageUrl: 'img//pack/042-shuffle.svg',
    description: (
      <>
        Knowledge about networked media shouldn't be kept in an ivory tower or scattered across the net. The information presented here is accessible across every background.
      </>
    ),
  },
  {
    title: <>Created by the best minds in the business</>,
    imageUrl: 'img/pack/031-musical note.svg',
    description: (
      <>
        Written by students in the Music, Communications, and Technology master's programme at the University of Oslo and Norwegian University of Science and Technology. Can You Hear Me is a work in progress for a constantly changing technological world.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} style={{ filter: "hue-rotate(190deg)" }} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
