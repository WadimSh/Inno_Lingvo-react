import React from 'react';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

import './App.css';

function App() {
  const [isBanner, setBanner] = React.useState(true);

  return (
    <div className="page">
      <Header />
      <Banner 
        onBanner={isBanner}
        onTitle={'Хотите быть первыми? Запишитесь!'}
        onSubtitle={'Мы открыли возможность для новых клиентов попробовать сервис в течение месяца бесплатно. Вам стоит просто оставить свой email в указанной форме. Мы обещаем — никакой рекламы и спама, только письмо по существу открытия сервиса'}
      />
      <Footer />
    </div>
  );
}

export default App;
