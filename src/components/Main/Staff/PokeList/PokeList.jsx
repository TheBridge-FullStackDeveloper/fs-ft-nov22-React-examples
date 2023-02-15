import React, { Component, Fragment } from 'react';

class PokeList extends Component {
    constructor(props) {
        super(props);
        this.state = { pokeLista: this.props.defaultList }
        // Event binding (Bindear eventos)
        console.log('CONSTRUCTOR')
    }
    
    async componentDidMount(){
        //Petición HTTP
        // fetch('https://pokeapi.co/api/v2/pokemon')
        //     .then(resp => resp.json())
        //     .then(data => data)
        await new Promise((resolve, reject) => setTimeout(resolve, 3000, "esperando..."))
        
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await resp.json();
        this.setState({
          pokeLista: data.results
        })

        // Hace lo mismo que lo anterior
        //await this.handlerLoadPokemons()

        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState){
        console.log("****DATOS DEL PASADO****");
        console.log('prevProps: ', prevProps, 'prevState: ', prevState)
        
        console.log("****DATOS DEL PRESENTE****");
        console.log("++PROPS++");
        console.log(this.props);
        
        console.log("++STATE++");
        console.log(this.state);
        // length será 0, 5 o 20
        if(this.props.defaultList.length !== prevProps.defaultList.length){
          this.setState({pokeLista:this.props.defaultList});
        }

        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handlerLoadPokemons = async () => {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await resp.json();
        this.setState({
            pokeLista: data.results
        })
    }

    handlerResetPokemons = () => {
        this.setState({
          pokeLista: []
        })
    }

    handlerUpdate = () => {
        this.forceUpdate()
    }

    render() {
        console.log('RENDER')
        return (
            <div>
                <h1>Lista Pokemon</h1>
                {
                  this.state.pokeLista.map(pokemon => 
                    <Fragment key={pokemon.name} >
                        <a href={pokemon.url} alt={pokemon.name + 'image'}> {pokemon.name} </a>
                        <p>{pokemon.url}</p>
                    </Fragment>
                  )
                }
                <button onClick={this.handlerLoadPokemons}>Load Pokemons</button>
                <button onClick={this.handlerResetPokemons}>Reset Pokemons</button>
                <button onClick={this.handlerUpdate}>Force Update</button>
            </div>        
        );
    }
}

PokeList.defaultProps = {
    defaultList: []
}

export default PokeList;