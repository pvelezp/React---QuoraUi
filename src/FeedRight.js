import React from 'react'
import './FeedRight.css'
const FeedRight = () => {
    return (
        <div className="feedRight">
           <div className="followFeed">
               <div className="followFeed__1">
  
                   <h4>Improve your feed</h4>
               </div>
               <div className="followFeed__2">
                   <input type="checkbox"/>
                   <h4>Follow 5 more spaces</h4>
               </div>
               <div className="followFeed__3">
                   <input type="checkbox"/>
                   <h4>Follow 8 more spaces</h4>
               </div>
               <div className="followFeed__4">
                   <input type="checkbox"/>
                   <h4>Upvote 5 more good answers</h4>
               </div>
               <div className="followFeed__5">
                   <input type="checkbox"/>
                   <h4>Ask a question</h4>
               </div>
               <div className="followFeed__6">
                   <input type="checkbox"/>
                   <h4>Add 3 credentials</h4>
               </div>
               <div className="followFeed__7">
                   <input type="checkbox"/>
                   <h4>Answer a question</h4>
               </div>
           </div>
        </div>
    )
}

export default FeedRight
