import {getHeroByPublisher} from "../../selectors/getHeroByPublisher";
import {HeroCard} from "./HeroCard";
import {useMemo} from "react";

const HeroList = ({publisher}) => {
    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])
    return (
        <div className={"rows row-col-1 row-cols-md-3 g-3 animate__animated animate__fadeIn"}>
            <ul>
                {
                    heroes.map(hero => (
                        <HeroCard key={hero.id} {...hero} />
                    ))
                }
            </ul>
        </div>
    );
};

export {HeroList};
