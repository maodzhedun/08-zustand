// app/not-found.tsx
import css from './Home.module.css';

// import Link from 'next/link';

const NotFound = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p className={css.description}>Sorry, the page you&#39;re looking for doesn&#39;t exist.</p>
      {/* <Link href="/">Go back home</Link> */}
    </div>
  );
};

export default NotFound;
