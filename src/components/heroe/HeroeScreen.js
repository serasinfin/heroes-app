import {Navigate, useNavigate, useParams} from "react-router-dom";
import {getHeroById} from "../../selectors/getHeroById";
import {useMemo} from "react";

const HeroeScreen = () => {
    const {heroeId} = useParams()
    const getHeroe = useMemo(() => getHeroById(heroeId), [heroeId])

    const navigate = useNavigate()
    const handleReturn = () => {
        navigate(-1)
    };


    if(!getHeroe){
        return <Navigate to={'/'} />
    }

    const imagePath = `/assets/images/Heroes/${getHeroe.id}.jpg`

    return (
        <div className={'row mt-5'}>
            <div className={'col-4'}>
                <img src={imagePath} alt={getHeroe.superhero} className={'img-thumbnail animate__animated animate__fadeInLeft'}/>
            </div>
            <div className={'col-8'}>
                <h3>{getHeroe.superhero}</h3>
                <ul className={'list-group'}>
                    <li className={'list-group-item'}><b>Alter ego:</b> {getHeroe.alter_ego}</li>
                    <li className={'list-group-item'}><b>Publisher:</b> {getHeroe.publisher}</li>
                    <li className={'list-group-item'}><b>First appearance:</b> {getHeroe.first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{getHeroe.characters}</p>
                <button
                    className={'btn btn-outline-info'}
                    onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>
        </div>
    );
};

export {HeroeScreen};
