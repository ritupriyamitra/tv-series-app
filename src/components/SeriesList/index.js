import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const SeriesListItem=({series})=>(
    <li >
    <Link to={`/series/${series.show.id}`}>
    {series.show.name}
    </Link>
    </li>
)

const SeriesList=(props)=>{
  return(
    <div>
    <ul className="Series-list">
    {
      props.list.map(series=>(

        < SeriesListItem series={series} key={series.show.id}/>
      ))
    }
    </ul>
    </div>
  )
}

function a(proprs){

}
a=function(){

}
a=(props)=>{

}

export default SeriesList;
