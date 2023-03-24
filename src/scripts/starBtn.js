import {useState} from 'react';
import starFilled from '../Assets/stars/Star (1).png';
import { useLocation } from './location';

export default function StarBtn(){
    const [location, setLocation] = useLocation();

    let fav = false;

    function isFavorite() {
        if (fav == true) {
            fav = false;
        } else if (fav == false) {
            fav = true;
        }
        console.log(fav)
    }
    const LocationCheck = () => {
        if (location != '') {
            isFavorite();
        }
    }

    return (
        <img onClick={LocationCheck} id='starBtn' src={starFilled} style={{ width: '50px', marginTop: '30px' }}></img>
    )
}