import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IArtwork } from '../lib/artwork';

import Details from './artwork_page/Details';
import Image from './artwork_page/Image';
import Carousel from './artwork_page/Carousel';
import Description from './artwork_page/Description';
import Info from './artwork_page/Info';
  
  
export const Artwork = (p: {setArtworkName: React.Dispatch<React.SetStateAction<string>>}) => {
    const { id } = useParams();
    const url = `https://storage.googleapis.com/ya-misc/interviews/front/examples/${id}.json`

    const [artwork, setArtwork] = useState({} as IArtwork);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const art = data as IArtwork
                p.setArtworkName(art.fullname)
                setArtwork(art);
                setLoading(false);
            })
            .catch(error => {
                console.log(error)
                setError(error);
                setLoading(false);
            });
    }, []);  
    
    if (loading) return <div>Loading...</div>;
    if (error !== null) return <div>Error!</div>;
    
    return <div className="artwork-page">
        <div className="row">
          <div className="column" style={{ width: '70%' }}>
            <Image imageUrl={artwork.imageUrl} />
            <Description description={artwork.description}/>
            <Info artwork={artwork}/>
          </div>
          <div className="column" style={{ width: '30%' }}>
            <Details artwork={artwork}/>
          </div>
        </div>
        <div className="row">
          <Carousel images={artwork.otherArtworkImages} />
        </div>
    </div>
}

export default Artwork;