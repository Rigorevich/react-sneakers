function Header () {
    return (
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
    );
}

export default Header;