import './footer.css'

const Footer = (props) => {

    const logo = [
        "./assets/fb.png",
        "./assets/ig.png",
        "./assets/tw.png",
    ]

    const listImg = logo.map(logos =>
        <li className='logos' key={logos}>
            <img src={logos} />
        </li>
    );

    return (
        <>
            <footer className='footer'>
                <div>
                    <ul className='listaDeLogos'>{listImg}</ul>
                </div>

                <div>
                    <img src='./assets/logo.png'></img>
                </div>

                <div>
                    <p>Desenvolvido por gabswyl</p>
                </div>
            </footer>
        </>

    )
}

export default Footer