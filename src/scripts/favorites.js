// import { saveToLocalStorage, removeFromLocalStorage, getLocalStorage } from "./localstorage";
// import star from '../Assets/stars/Star (1).png';

// let location = document.getElementById("location");
// let injectHere = document.getElementById("injectHere");
// let starBtn = document.getElementById("starBtn");

// starBtn.addEventListener("click", function(){
//         let favorites = getLocalStorage();
//         if(favorites.indexOf(location.value) < -1){
//             saveToLocalStorage(location.value);
//         }else if(favorites.indexOf(location.value) > -1){
//             removeFromLocalStorage(location.value);
//         }
//     })


// export default function CreateElements(){
//     let favorites = getLocalStorage();

//     favorites.map( city => {
//         let p = document.createElement('p');
//         p.textContent = city;

//         let deleteBtn = document.createElement('button');
//         deleteBtn.className = 'img';
//         deleteBtn.type = 'button';
//         deleteBtn.src = star;

//         deleteBtn.addEventListener("click", function(){
//             removeFromLocalStorage(city);
//         })
//         injectHere.appendChild(p);
//         injectHere.appendChild(deleteBtn);
//     })
// }





import { useState } from 'react';
import { saveToLocalStorage, removeFromLocalStorage, getLocalStorage } from './localstorage';
import star from '../Assets/stars/Star (1).png';
import { useLocation } from './location';
import StarBtn from './starBtn';

export default function CreateElements() {
    const [favorites, setFavorites] = useState(getLocalStorage());
    const [location, setLocation] = useLocation();

    function handleStarClick() {
        if (favorites.indexOf(location) < -1) {
            saveToLocalStorage(location);
            setFavorites(getLocalStorage());
        } else if (favorites.indexOf(location) > -1) {
            removeFromLocalStorage(location);
            setFavorites(getLocalStorage());
        }
    }

    function handleDeleteClick(city) {
        removeFromLocalStorage(city);
        setFavorites(getLocalStorage());
    }

    return (
        <>
            {favorites.map(city => (
                <div key={city}>
                    <p>{city}</p>
                    <button className="img" type="button" onClick={() => handleDeleteClick(city)}>
                        <img src={star} alt="star icon" />
                    </button>
                </div>
            ))}

        </>
    );
}