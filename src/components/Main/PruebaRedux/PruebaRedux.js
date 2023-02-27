import React from 'react'
import CounterContainer from './CounterCointainer'
import MessageContainer from './MessageContainer'
import UserContainer from './UserContainer'

function PruebaRedux() {
    return (
        <div>
            <h1>Pruebas con Redux</h1>
            <CounterContainer/>
            <MessageContainer/>
            <UserContainer/>
        </div>
    )
}

export default PruebaRedux