import { useState } from "react";
import { add } from "../redux/ricettaSlice";
import { useDispatch } from "react-redux";

function FormRicetta(){
const dispatch = useDispatch();
    
const [formData, setFormData] = useState({
    name: "",
    ingredienti: "",
    descrizione: "",
    img: ""
});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    })
};

const handleSubmit = (e) => {
    e.preventDefault();
    const ricetta ={
        id: Math.random(),
        name: formData.name,
        ingredienti: formData.ingredienti,
        descrizione: formData.descrizione,
        img: formData.img
    }
    dispatch(add(ricetta));

    setFormData({
        name: "",
        ingredienti: "",
        descrizione: "",
        img: ""
    })
}

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-10 p-10 rounded-xl bg-slate-200 mt-10">
            <div className="flex flex-col">
                <label>Nome ricetta</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange}></input>
            </div>
            <div className="flex flex-col">
                <label>Ingredienti</label>
                <textarea 
                name="ingredienti" 
                placeholder="Inserisci ingredienti separati dalla virgola"
                value={formData.ingredienti} 
                onChange={handleInputChange}
                ></textarea>
            </div>
            <div className="flex flex-col">
                <label>Descrizione</label>
                <textarea name="descrizione" value={formData.descrizione} onChange={handleInputChange}></textarea>
            </div>
            <div className="flex flex-col">
                <label>Immagine</label>
                <input name="img" value={formData.img} onChange={handleInputChange} placeholder="Inserisci l'url dell'immagine"></input>
            </div>
            <button type="submit" className="border-2 border-black">Crea</button>
        </form>
    )
}

export default FormRicetta;