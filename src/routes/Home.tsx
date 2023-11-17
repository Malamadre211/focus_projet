import './home.css';
export function Home () {

    return (
        <>
            <div className="header">
                <div className="navbar">
                    <div className="menu_burger">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    </div>
                    <div className="logo">LOGO</div>
                    <div className="avatar">
                        <img src="/images/profile.png" alt="" width="30px" height="30px" />
                    </div>
                </div>
                <div className="container_histoire">
                <h1>Ma bibliothèque</h1>
                <h2>Mes histoires générées</h2>
                <h3>3-5 ans</h3>
                <div className="slide_histoire">
                    <div className="histoire">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                    <div className="histoire">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                    <div className="histoire">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                </div>
                <h3>6-9 ans</h3>
                <div className="slide_histoire">
                    <div className="histoire">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                    <div className="histoire">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                    <div className="histoire">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                </div>
                <h3>10-13 ans</h3>
                <div className="slide_histoire">
                    <div className="histoire">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                    <div className="histoire">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                    <div className="histoire">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                </div>
                <h3>14-16 ans</h3>
                <div className="slide_histoire">
                    <div className="histoire">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                    <div className="histoire">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                    <div className="histoire">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                </div>
                </div>
                <div className="container_ebook">
                    <h2 className='second'>Mes e-books importés</h2>
                <div className="slide_ebook">
                    <div className="ebook">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                    <div className="ebook">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                    <div className="ebook">
                        <p>Titre</p>
                        <p>Durée</p>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    )
}