import InputOnlyOption from "../inputOnlyOption/inputOnlyOption";

function ContainerCategories(){
    return (
        <>
        <InputOnlyOption tituloCate="Categoria 1" img="https://picsum.photos/200/300" text="Desayunito" price="20 pesitos"></InputOnlyOption>
        <InputOnlyOption tituloCate="Categoria 2" img="https://picsum.photos/200/300" text="Hotel" price="2000 pesitos"></InputOnlyOption>
        <InputOnlyOption tituloCate="Categoria 3" img="https://picsum.photos/200/300" text="Destino" price="200 pesitos"></InputOnlyOption>
        </>
    )
}

export default ContainerCategories;