import InputOnlyOption from "../inputOnlyOption/inputOnlyOption";
import planDeViajes from "../../dataBase/dataBase";
import './containerCategories.css'

function ContainerCategories() {
    return (
        <>
            <div className="categories1">
            <h1>Categoria 1</h1>
                <div className="food">
                    {planDeViajes.alimentacion.map((item, index) => (
                        <InputOnlyOption
                            key={index}
                            Category="Alimentación" 
                            img={item.imagen} 
                            titulo={item.titulo} 
                            precio={`${item.precio} Pesitos`} />
                    ))}
                </div>
            </div>

            <div className="categories2">
            <h1>Categoria 2</h1>
                <div className="hotel">
                    {planDeViajes.hoteles.map((item, index) => (
                        <InputOnlyOption
                            key={index}
                            Category="Alimentación" 
                            img={item.imagen} 
                            titulo={item.titulo} 
                            precio={`${item.precio} Pesitos`} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ContainerCategories;