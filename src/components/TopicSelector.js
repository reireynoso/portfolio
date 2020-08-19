import React from 'react';
import {withRouter}  from 'react-router-dom'

const TopicSelector = ({match,history}) => {
    // console.log(location)
    return (
       <select defaultValue={match.url} onChange={(e) => history.push(`${match.url}?${e.target.value}`)}>
           <option value="all">All</option>
           <option value="javascript">Javascript</option>
       </select>
    )
}

export default withRouter(TopicSelector)