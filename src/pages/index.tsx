import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
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

export default function Home(): ReactElement {
  return (
    <>
      <main>
        <Header />
        <div>
          <Link href="/">
            <a>
              <strong>Título</strong>
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
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
