import React from 'react';
import ReactDom from 'react-dom/client';
import "./index.css"
import pizzas from "../public/data"

//*the convintion of components is start with Capital
//*each components return just one HTML element
function App() {
    /// dont FUCKING nest function pizza(){} here
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Menu() {
    const numPizzas = pizzas.length
    return (
        <main className='menu'>
            <h1>Our menu</h1>
            { /* reusability of components */}
            <ul className='pizzas'>
                {/* [<pizza/>, <pizza/>, <pizza/>] */}
                {numPizzas > 0 && pizzas.map(pizza => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
            </ul>
        </main>

    )
}

function Pizza({ pizzaObj: { name, photoName, ingredients, price, soldOut } }) {
    //! error properties read only
    //* properties.price =35;
    return (
        <li className={`pizza ${soldOut ? `sold-out` : ``}`}>
            <img src={photoName} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{soldOut ? `SOLD OUT` : price}</span>
            </div>
        </li >)
}

function Header() {
    /// for JS->{CSSobj->{}}
    const style = { color: "crimson", fontSize: "36" };

    return (
        <header className='header'>
            <h1> Hello From Your Sultan Rest</h1>
        </header>
    )
}

function Order(props) {
    return (
        <div className='order'>
            <p>The hour is {props.hour}, we`re currently open</p>
            <button className="btn">order</button>
        </div>
    )
}

function Footer() {
    const hour = new Date().getHours()
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour

    return (
        <footer footer className='footer' >
            <div>
                {/* {} => for write js code */}
                {isOpen ? (
                    <React.Fragment>
                        {/* JSX expressions must have one parent element which is footer*/}
                        <p>react fragment</p>
                        <Order hour={hour} />
                    </React.Fragment>
                ) :
                    <p>We are happy to welcom you between 8:00-22:00</p>}
            </div>
        </footer>
    )
};
// console.log(Footer());


const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
