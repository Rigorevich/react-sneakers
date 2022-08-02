function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
              <img className="mr-15" alt="logo" width={40} height={40} src="/img/logo.png"/>
              <div>
                  <h3 className="text-uppercase">React Sneakers</h3>
                  <p className="opacity-5">Магазин лучших кроссовок</p>
              </div>
          </div>
        <ul className="d-flex">
            <li className="mr-30">
                <img alt="cart" width={18} height={18} src="/img/cart.svg"/>
                <span className="ml-10">1205 руб.</span>
            </li>
            <li className="mr-30">
                <img alt="like" width={19} height={19} src="/img/like.svg"/>
            </li>
            <li>
                <img alt="profile" width={20} height={20} src="/img/user.svg"/>
            </li>
        </ul>
      </header>
      <div className="content p-40">
          <h1 className="mb-40">Все кроссовки</h1>
          <div className="d-flex">
              <div className="card">
                  <img width={133} height={112} src="/img/sneakers/sneakers1.jpg" alt="Sneakers"/>
                  <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                  <div className="d-flex justify-between align-center">
                      <div className="d-flex flex-column">
                          <span>Цена:</span>
                          <b>12 999 руб.</b>
                      </div>
                      <button className="button">
                          <img width={11} height={11} src="/img/plus.svg" alt="add"/>
                      </button>
                  </div>
              </div>

              <div className="card">
                  <img width={133} height={112} src="/img/sneakers/sneakers2.jpg" alt="Sneakers"/>
                  <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                  <div className="d-flex justify-between align-center">
                      <div className="d-flex flex-column">
                          <span>Цена:</span>
                          <b>12 999 руб.</b>
                      </div>
                      <button className="button">
                          <img width={11} height={11} src="/img/plus.svg" alt="add"/>
                      </button>
                  </div>
              </div>

              <div className="card">
                  <img width={133} height={112} src="/img/sneakers/sneakers3.jpg" alt="Sneakers"/>
                  <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                  <div className="d-flex justify-between align-center">
                      <div className="d-flex flex-column">
                          <span>Цена:</span>
                          <b>12 999 руб.</b>
                      </div>
                      <button className="button">
                          <img width={11} height={11} src="/img/plus.svg" alt="add"/>
                      </button>
                  </div>
              </div>

              <div className="card">
                  <img width={133} height={112} src="/img/sneakers/sneakers4.jpg" alt="Sneakers"/>
                  <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                  <div className="d-flex justify-between align-center">
                      <div className="d-flex flex-column">
                          <span>Цена:</span>
                          <b>12 999 руб.</b>
                      </div>
                      <button className="button">
                          <img width={11} height={11} src="/img/plus.svg" alt="add"/>
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
