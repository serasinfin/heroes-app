import {HeroList} from "../heroe/HeroList";

const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel screen</h1>
            <hr/>
            <HeroList publisher={'Marvel Comics'}/>
        </div>
    );
};

export {MarvelScreen};
