import {useState} from 'react';

export function useLocation(){
     const [location, setLocation] = useState('');
     return [location, setLocation];
}