import  NavBar  from "../components/NavBar";
import FormRicetta from "../components/FormRicetta";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import RicettaItem from "../components/RicettaItem";

function CreaRicetta(){
    const ricette = useSelector((state) => state.addRicetta.value);

    useEffect(() => {
        console.log("Lo stato delle ricette è cambiato:", ricette);
    }, [ricette]); 

    return (
        <>
            <NavBar />
            <div className="justify-center">
                <h1>CREA LA TUA RICETTA</h1>
                <FormRicetta />
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {ricette.map((ricetta) => (
                        <RicettaItem
                            key={ricetta.id}
                            name={ricetta.name}
                            ingredienti={ricetta.ingredienti}
                            descrizione={ricetta.descrizione}
                            imageUrl={ricetta.img}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default CreaRicetta