import React from 'react'
import { Footer,Goal} from '../components'
import ServiceCards from "../components/serviceCard/serviceMaker";
import Form from '../components/form/form';
import SeriesPOST from "../components/seriesPost/Post";
export const Series = () => {
    return (
        <div>
            
          
            <SeriesPOST/>
            <Footer/>
            
        </div>
    )
}
