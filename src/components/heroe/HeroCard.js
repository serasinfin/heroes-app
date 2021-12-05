import {Link} from "react-router-dom";

const HeroCard = (
    {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    }
) => {
    const imagePath = `assets/images/Heroes/${id}.jpg`
    return (
        <div className={"col"}>
            <div className={"card"}>
                <div className={"row no-gutters"}>
                    <div className={'col-4'}>
                        <img src={imagePath} className={"card-img"} alt=""/>
                    </div>
                    <div className={'col-8'}>
                        <div className={'card-title'}>{superhero}</div>
                        <p className={'card-text'}>{alter_ego}</p>
                        <p className={'card-text'}>
                            <small className={'text-muted'}>{first_appearance}</small>
                        </p>
                        <Link to={`/heroe/${id}`}>Mas infor...</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export {HeroCard};
