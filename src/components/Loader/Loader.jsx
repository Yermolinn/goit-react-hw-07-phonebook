// import { ThreeDots } from 'react-loader-spinner';

// export const Loader = () => (
//   <div
//     style={{
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%,-50%)',
//     }}
//   >
//     <ThreeDots
//       height="80"
//       width="80"
//       radius="9"
//       color="grey"
//       ariaLabel="three-dots-loading"
//       visible={true}
//     />
//   </div>
// );

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Loader = () => {
  const isLoading = true; // Задайте це значення відповідно до вашої логіки завантаження

  return (
    <div>
      {isLoading ? (
        <Skeleton count={3} /> // Кількість скелетонів, які ви хочете відобразити
      ) : (
        // Ваш вміст, який буде показуватись, коли завантаження виконане
        <div>
          <h1>Заголовок</h1>
          <p>Текст</p>
        </div>
      )}
    </div>
  );
};
