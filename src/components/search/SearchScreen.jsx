import {useForm} from "../../hooks/useForm";
import {getHeroesByName} from "../../selectors/getHeroesByName";
import {HeroCard} from "../heroe/HeroCard";
import {useLocation, useNavigate} from "react-router-dom";
import {useMemo} from "react";

const SearchScreen = () => {
    const navigate = useNavigate()
    const location  = useLocation()

    const params = new URLSearchParams(location.search)
    const q = params.get('q')

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });
    const {searchText} = formValues;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])//

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ searchText}`)
    };
    
    return (
        <>
            <h1>Busqueda</h1>
            <hr/>
            <div className={'row'}>
                <div className={'col-5'}>
                    <h4>Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            type={"text"}
                            placeholder={"Heroe"}
                            className={'form-control'}
                            name={'searchText'}
                            autoComplete={"off"}
                            value={ searchText }
                            onChange={handleInputChange}
                        />
                        <button 
                            type={'submit'} 
                            className={'btn btn-outline-primary mt-3 btn-block'}
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className={'col-7'}>
                    <h4>Resultados</h4>
                    <hr/>
                    {
                        (q === '')
                            ? <div className={'alert alert-info'}>Ingresa nombre</div>
                            : (heroesFiltered.length === 0) && <div className={'alert alert-danger'}>No se encontro: {q}</div>
                    }
                    {
                        heroesFiltered.map(
                            hero => (
                                <HeroCard
                                    key={hero.id}
                                    {...hero}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </>
    );
};

export {SearchScreen};
