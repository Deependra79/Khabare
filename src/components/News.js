import React, { Component } from 'react'
import Newsitem from './Newsitem';
import alter from './alt.png';
import buff from './Buffer.js';

export default class News extends Component {

    async componentDidMount(){
      let url1= "https://newsapi.org/v2/top-headlines?country=us&apiKey=044d6813d11c4fe1b544e729a9eb2f58&pagesize=8";
      let data = await fetch(url1);
      let parsedData = await data.json();
      this.setState({toDisplay:parsedData.articles});
    }
    constructor() {
        super();
        this.state = {toDisplay:[],page:1,buff:false};
    }

    handleNextClick= async ()=>
    {
     buff:true;
      let url1= `https://newsapi.org/v2/top-headlines?country=us&apiKey=044d6813d11c4fe1b544e729a9eb2f58&page=${this.state.page+1}&pagesize=8`;
      let data = await fetch(url1);
      let parsedData = await data.json();
      this.setState({toDisplay:parsedData.articles, page:this.state.page+1});
 buff:false;

    }

    handlePreviousClick= async()=>
    {
      buff:true;
      let url1= `https://newsapi.org/v2/top-headlines?country=us&apiKey=044d6813d11c4fe1b544e729a9eb2f58&page=${this.state.page-1}&pagesize=8`;
      let data = await fetch(url1);
      let parsedData = await data.json();
      this.setState({toDisplay:parsedData.articles, page:this.state.page-1});
      buff:false;
    }

    
  render() {
    return (
      <div className='container'>
        <div className='row'>
            {

                
                this.state.toDisplay.map((i)=>{
                    return (
                    <div className="col-sm-3">
                        <Newsitem title={i.title} discription={i.discription} imageurl={i.urlToImage? i.urlToImage:alter} url={i.url} />
                    </div>
                    )
                })
            }
        </div>
        <div className="d-flex justify-content-between">
          <button className='btn btn-secondary' onClick={this.handlePreviousClick} disabled={this.state.page===1} >&larr; Previous</button>
          <button  className='btn btn-secondary' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}