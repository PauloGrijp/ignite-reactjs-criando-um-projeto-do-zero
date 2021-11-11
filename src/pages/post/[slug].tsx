import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';
import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps): ReactElement {
  return (
    <>
      <Header />
      <img src="/Banner.png" alt="imagem" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.top}>
            <h1>Lorem</h1>
            <ul>
              <li>
                <FiCalendar />
                25 mai 2021
              </li>
              <li>
                <FiUser />
                Paulo Xavier
              </li>
              <li>
                <FiClock />5 min
              </li>
            </ul>
          </div>
          <article>
            <h2>Lorem ipsum dolor sit</h2>
            <p className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              accusamus nihil magnam <strong>lorem lorem</strong> possimus sit
              aliquid quia officia. Quos culpa odio, doloribus aliquam incidunt
              saepe repellendus ullam earum, modi adipisci quo voluptate.
              Molestias, repudiandae <a href="/">lorem</a> voluptas excepturi ex
              qui unde recusandae distinctio exercitationem nam aliquam maiores
              optio sapiente nesciunt culpa doloribus, quaerat officiis
              voluptate asperiores consequatur dolores facere nobis minima. Ex
              fugit accusantium expedita, officiis optio deleniti reiciendis
              nemo ab magnam ducimus, libero culpa vitae! Dolor debitis nostrum
              non, temporibus aut obcaecati!
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
