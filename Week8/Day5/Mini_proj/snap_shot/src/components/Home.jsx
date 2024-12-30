import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()


    return(
        <div>
            <h1>SnapShot</h1>
            4
            <ul>
                <li><Link to="/gallery/mountain">Mountain</Link></li>
                <li><Link to="/gallery/beaches">Beaches</Link></li>
                <li><Link to="/gallery/birds">Birds</Link></li>
                <li><Link to="/gallery/food">Food</Link></li>
            </ul>
        </div>
    )
}