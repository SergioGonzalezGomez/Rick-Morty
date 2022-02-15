import './InfoLocation.css';
export default function InfoLocation({ list }) {

    return <div class="locations">

        {list.map(item => 
        
        
        <figure class="figure-location" key={item.id}>

            
            <img class="image-location" src="./images/planet.jpg" alt="planetimg"/>
            <h3 className="title-location" >Name: {item.name}</h3>
            <h4 className="title-location" >Type: {item.type}</h4>
            <h4 className="title-location" >Dimension: {item.dimension}</h4>

        </figure>)}

    </div>

}