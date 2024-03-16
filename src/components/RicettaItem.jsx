function RicettaItem({ name, ingredienti, descrizione, imageUrl }) {
    const ingrediente = ingredienti.split(",");
    const imgUrl = imageUrl ? imageUrl : "https://cdn.pixabay.com/photo/2018/09/17/16/12/mango-3684156_1280.jpg";

    return (

        <div className="cardRicetta rounded-lg shadow-lg bg-white overflow-hidden p-3 mr-5 text-justify">
            <img className="w-full h-48 object-cover" src={imgUrl} alt="Immagine piatto" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 uppercase">{name}</h2>
                <ul className="mb-4">
                    {ingrediente.map((ing, index) => (
                        <li key={index} className="mb-1 font-bold">{ing}</li>
                    ))}
                </ul>
                <hr></hr>
                <p className="text-gray-700 mt-3">{descrizione}</p>
            </div>
        </div>
    )
}

export default RicettaItem;
