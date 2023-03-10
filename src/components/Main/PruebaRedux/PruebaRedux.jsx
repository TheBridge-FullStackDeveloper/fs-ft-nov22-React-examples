import React from 'react'
import CounterContainer from './CounterContainer'
import MessageContainer from './MessageContainer'
import UserContainer from './UserContainer'

function PruebaRedux() {
    return (
        <section>
            <h1>Prueba Redux</h1>
            <CounterContainer/>
            <MessageContainer/>
            <UserContainer/>
        </section>
    )
}

export default PruebaRedux