import {heroes} from "../data/heroes";

const getHeroesByName = (name= '') => {
    if (name.length === 0){
        return []
    }
    name = name.toLowerCase();
    console.log(name)
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
}

export {getHeroesByName}