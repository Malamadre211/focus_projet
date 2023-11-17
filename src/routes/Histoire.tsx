import './histoire.css';
export function Histoire () {

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
                <div className="container_player">
                    <h1>TITRE</h1>
                    <div className="player">
                        <div className="play">
                            <img src="/images/play.png" alt="" width="40px" height="40px" />
                            </div>
                        <div className="pause">
                            <img src="/images/pause.png" alt="" width="40px" height="40px" />
                            </div>
                    </div>
                </div>
                <div className="text_histoire">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta soluta velit ducimus fugit voluptatum! Sint porro natus sapiente maiores. Est amet ex blanditiis voluptatem quam autem, soluta itaque ducimus.</p>
                    <br />
                    <div className="text_img">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptas cum eum facilis reiciendis earum? Accusantium expedita error et delectus aliquid deleniti sit, repudiandae optio. Quisquam beatae perspiciatis saepe deserunt!</p>
                    <img src="/images/imghistoire.png" alt="" width="200px" height="200px"/>
                    </div>
                    <div className="animation">
                        <div className="img_animation">ANIMATION</div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero debitis aliquam totam atque repellat magnam asperiores velit expedita. Libero dolore, molestiae voluptate ex fugiat fuga est vero molestias sed.</p>
                    </div>
                </div>
                <div className="bar_exp">
                    <p className="text_bar">0 EXP</p>
                    <div className="progression">
                    </div>
                </div>
            </div>
        </>
    )
}