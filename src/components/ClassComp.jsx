import React, { Component } from 'react';

class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
        }
    }
    componentDidMount() {
         fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=biqWpbD7SkiKPqzYFqGdj7ZlzMxmAWqR")
         .then(res => res.json())
         .then(jsonData => {
             console.log(jsonData);
            this.setState({reviews: jsonData. results})
         })
         .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <h1 className='cent'>Reviews</h1>
                <hr/>
                <div>
                   {this.state.reviews.map(reviews => 
                   <div className='cent'>
                       <p><b>Title:</b> {reviews.display_title}</p>
                       <p><b>Headline:</b> {reviews.headline}</p>
                       <p><b>Critics Pick:</b> {reviews.critics_pick}</p>
                       <p><b>Byline: </b>{reviews.byline}</p>
                       <hr/>
                   </div>)}
                </div>    
             </div>   
        );
    }
}

export default ClassComp;