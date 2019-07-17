import React,{Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';
class Series extends Component{
  state={
    series:[],
    seriesName:'',
    isFetching:false
  }
  //componentDidMount(){
  //  const series=["Vikings","Game of Thrones"];

  //  setTimeout(()=>{this.setState({series:series})}, 3000);
//  fetch('http://api.tvmaze.com/search/shows?q=Vikings')
//  .then(response=>response.json())
//  .then(json=>this.setState({series:json}))
//  }


onSeriesInputChanges = e =>{
  this.setState({seriesName:e.target.value,isFetching:true});
  fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
  .then(response=>response.json())
  .then(json=>this.setState({series:json,isFetching:false}))

  console.log(e)
  console.log(e.target)
  console.log(e.target.value)
}
  render(){

    const {series,seriesName,isFetching} =this.state;
    return(
      <div>
        <Intro message ="Here you can find all of your most loved series"/>
      <div>

      <input type="text" value={seriesName} onChange={this.onSeriesInputChanges} />
      </div>
      {series.length===0 && seriesName.trim()===''
      &&
      <p>Please enter series name into the input</p>
      }
      {series.length===0 && seriesName.trim()!=='' && !isFetching
      &&
      <p>No TV series have been found on this Name</p>
      }
      {
        isFetching && <Loader/>
      }
      {
        !isFetching && <SeriesList list={this.state.series}/>
      }

      </div>
    )
  }
}
export default Series;
