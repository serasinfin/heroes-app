import {Route, Routes} from "react-router-dom";
import {MarvelScreen} from "../components/marvel/MarvelScreen";
import {DcScreen} from "../components/dc/DcScreen";
import {SearchScreen} from "../components/search/SearchScreen";
import {NavBar} from "../components/ui/NavBar";
import {HeroeScreen} from "../components/heroe/HeroeScreen";

const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />

                    <Route path="search" element={<SearchScreen />} />
                    <Route path="heroe/:heroeId" element={<HeroeScreen />} />

                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>
    );
};

export {DashboardRoutes};
