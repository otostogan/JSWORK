import React, {Fragment} from 'react'
import Form from '../components/form'
import Notes from '../components/notes'
const Home = () => {
    const notes = new Array(3)
    .fill('')
    .map((i)=>({id: i, title:`Note${i + 1}`}))
    return (
        <Fragment>
            <Form/>

            <hr/>

            <Notes notes={notes}/>
        </Fragment>
    )
}

export default Home