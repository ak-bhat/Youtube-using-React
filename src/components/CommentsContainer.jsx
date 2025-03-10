import React from 'react'
import Comments from './Comments'
import CommentsList from './CommentsList'

const CommentsContainer = () => {
    const commentsData = [{
        name:"Ananthu",
        comment:"Lorem ipsum dollar once go to the moon",
        replies:[{
            name:"Ananthu",
            comment:"Lorem ipsum dollar once go to the moon",
            replies:[
                {
                    name:"Ananthu",
                    comment:"Lorem ipsum dollar once go to the moon",
                    replies:[]
                },
            ]
        },{
            name:"Ananthu",
            comment:"Lorem ipsum dollar once go to the moon",
            replies:[]
        },{
            name:"Ananthu",
            comment:"Lorem ipsum dollar once go to the moon",
            replies:[]
        }]
    },
    {
        name:"Ananthu",
        comment:"Lorem ipsum dollar once go to the moon",
        replies:[{
            name:"Ananthu",
            comment:"Lorem ipsum dollar once go to the moon",
            replies:[]
        },{
            name:"Ananthu",
            comment:"Lorem ipsum dollar once go to the moon",
            replies:[]
        },{
            name:"Ananthu",
            comment:"Lorem ipsum dollar once go to the moon",
            replies:[]
        }]
    },
    {
        name:"Ananthu",
        comment:"Lorem ipsum dollar once go to the moon",
        replies:[{
            name:"Ananthu",
            comment:"Lorem ipsum dollar once go to the moon",
            replies:[]
        },{
            name:"Ananthu",
            comment:"Lorem ipsum dollar once go to the moon",
            replies:[]
        },{
            name:"Ananthu",
            comment:"Lorem ipsum dollar once go to the moon",
            replies:[]
        }]
    }]


  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold text-xl'>Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer