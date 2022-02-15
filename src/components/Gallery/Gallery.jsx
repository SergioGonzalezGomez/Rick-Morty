import "./Gallery.css";
import { useContext } from 'react';
import ProfileContext from '../../contexts/ProfileContext';
import { Link } from 'react-router-dom'
export default function Gallery({ list }) {
    const {setProfile} = useContext(ProfileContext);
    return <div className="gallery">

        {list.map(item => <figure class="figure-gallery" key={item.id}>

            
            <Link to={"/characters/" + item.id}>
            <img className="gallery-img" src={item.image} alt={item.name} />

            <figcaption className="gallery-card">

                {item.name}
                <button className="btn-mutar" onClick={() => setProfile(item)}>Elegir</button>

            </figcaption>
            
            </Link>
        </figure>)}

    </div>

}