import { GetStaticProps } from 'next';
import { ReactElement, useState } from 'react';
import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
import Prismic from '@prismicio/client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Header from '../components/Header';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): ReactElement {
  const formattedDatePost = postsPagination.results.map(post => {
    return {
      ...post,
      first_publication_date: format(
        new Date(post.first_publication_date),
        'dd MM YYYY',
        {
          locale: ptBR,
        }
      ),
    };
  });

  const [posts, setPosts] = useState(formattedDatePost);
  console.log(posts);
  return (
    <>
      <main className={commonStyles.container}>
        <Header />

        <div className={styles.posts}>
          <Link href="/">
            <a className={styles.post}>
              <h3>Título</h3>
              <p>Subtítulo: Descrição do subtitulo</p>
              <ul>
                <li>
                  <FiCalendar />
                  25 mai 2021
                </li>
                <li>
                  <FiUser />
                  Paulo Xavier
                </li>
              </ul>
            </a>
          </Link>
          <Link href="/">
            <a className={styles.post}>
              <h3>Título</h3>
              <p>Subtítulo: Descrição do subtitulo</p>
              <ul>
                <li>
                  <FiCalendar />
                  25 mai 2021
                </li>
                <li>
                  <FiUser />
                  Paulo Xavier
                </li>
              </ul>
            </a>
          </Link>
          <button type="button">Carregar mais posts</button>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'posts')],
    { pageSize: 2 }
  );

  const posts = postsResponse.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: post.first_publication_date,
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author,
      },
    };
  });

  const postsPaginations = {
    next_page: postsResponse.next_page,
    results: posts,
  };

  return {
    props: { postsPaginations },
  };
};
