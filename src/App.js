function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={93} height={85} src="/img/logo.png" />
          <ul className="leftMenu">
            <li>
              <img width={12} height={12} src="/img/menu.svg" />
              <span> Меню </span>
            </li>
          </ul>
        </div>
        <ul className="headerRight">
          <li>
            <img width={20} height={30} src="/img/person.svg" />
            <span> Войти </span>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1 className="mb-40"> Меню</h1>

       <div className="all_cards">
       <div className="card">
         <img width={250} height={200} src="/card/1.jpg" alt="product" />
         <h5>Овсянка</h5>
          <div className="cardB">
            <div className="price">
             <span>Цена: </span>
             <b>110 руб.</b>
            </div>
            <button className="button">
             <img width="" height="" src="" alt="Plus"/>
            </button>
          </div>
        </div>

        <div className="card">
         <img width={250} height={200} src="/card/2.jpg" alt="product" />
         <h5>Сырники</h5>
          <div className="cardB">
            <div className="price">
             <span>Цена: </span>
             <b>90 руб.</b>
            </div>
            <button className="button">
             <img width="" height="" src="" alt="Plus"/>
            </button>
          </div>
        </div>

        <div className="card">
         <img width={250} height={200} src="/card/3.jpg" alt="product" />
         <h5>Омлет</h5>
          <div className="cardB">
            <div className="price">
             <span>Цена: </span>
             <b>100 руб.</b>
            </div>
            <button className="button">
             <img width="" height="" src="" alt="Plus"/>
            </button>
          </div>
        </div>

        <div className="card">
         <img width={250} height={200} src="/card/4.jpg" alt="product" />
         <h5>Какао</h5>
          <div className="cardB">
            <div className="price">
             <span>Цена: </span>
             <b>60 руб.</b>
            </div>
            <button className="button">
             <img width="" height="" src="" alt="Plus"/>
            </button>
          </div>
        </div>
       </div>

      </div>
    </div>
  );
}

export default App;
