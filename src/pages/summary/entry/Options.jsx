import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ScoopOption from './ScoopOptions';

export default function Options({optionType}){
    const [items, setItens] = useState([]);

    useEffect(()=> {
        axios
        .get('http://localhost:3030/${optionType}')
        .then((response) => setItens(response.data))
        .catch((error) => {
            //TODO: (handle error response)
        });
    }, [optionType]);
    const ItemComponent =  optionType == 'scoops' ? ScoopOption : null;
    
    const optionsItems = items.map(item=> 
    <ItemComponent 
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
         
    />
    );

    return <Row>(optionItems);</Row>
}