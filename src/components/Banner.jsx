export default function Banner () {
    return(
        <>
            <section className=" relative w-[1200px] mx-auto my-8">
                <section 
                    className="h-[450px] bg-cover bg-no-repeat rounded-[20px]"
                    style={{backgroundImage:`url(${"/postresyponques.jpg"})`}}
                    >
                </section>
                <section className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40 rounded-[20px] gap-4">
                    <h2 className="font-bold text-[50px]">Para los gustos los sabores</h2>
                    <p className=" text-[30px]">Ahora piña colada</p>
                    <a className="bg-red-700 py-4 px-4 rounded-xl text-white text-[20px]" href="">Compra YA </a>
                </section>
            </section>
        </>
    )
}