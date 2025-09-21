
export default function Header (){
    return(
        <>
        <section className="flex justify-around mt-8 ">
            <img className="w-[300px]" src={"/logo.png"} alt=""/>
            <nav className="flex justify-between items-center gap-10 text-[25px]">
                <a className="hover:bg-red-700 p-4 rounded-xl hover:text-white"  href="">Menú</a>
                <a className="hover:bg-red-700 p-4 rounded-xl hover:text-white" href="">Categorias</a>
                <a className="hover:bg-red-700 p-4 rounded-xl hover:text-white" href="">Puntos de ventas oficiales</a>
                <a className="hover:bg-red-700 p-4 rounded-xl hover:text-white" href="">Blogs</a>
            </nav>
        </section>
        </>
    )
}