import trendimg from '../../assets/home-trends.jpg'
import careimg from '../../assets/home-care.jpg'
import './Home.css';

export default function Home(){
    return(
        <div className="home">
            <h1 className="home-title">Shoppe</h1>
            <p className="home-subtitle">Who we are and why we do what we do!</p>
            <p className="home-description">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. </p>
            <div className="home_div-container">
                <div className="home_div-title">Top Trends</div>
                <img src={trendimg} className="home_div-image"/>
                <div className='home_div-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. </div>
                <ul className='home_div-ul'>
                    <li>consectetur adipiscing elit. Aliquam placerat</li>
                    <li>Lorem ipsum dolor sit amet consectetur </li>
                </ul>
            </div>
            <div className='home_div-container'>
                <div className="home_div-title">Produced with Care</div>
                <img src={careimg} className="home_div-image"/>
                <div className='home_div-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu.</div>
            </div>

        </div>
    )
}