import { products } from "../data";

export default function Card() {
  return (
    <>
      <h2 className="mt-16 text-center text-[40px]">Carritos de compras</h2>
      <main className="grid grid-cols-3 gap-6 w-[1200px] mx-auto ">

        {products.map((product, index) => (
          <Producto  
          key={product.id}
          productProp={product}
          index={index}/>
        ))}

      </main>
    </>
  );
}

function Producto({productProp,index}) {
  return (
    <>
      <figure 
      className={`bg-gray-200 flex flex-col items-center mb-8 rounded-[20px] p-6 
      ${
        index % 2===0 
        ? "col-span-2" 
        : "col-span-1"
      }
      `}>
        <img className="w-[60%] object-contain" src={productProp.imagen} alt={productProp.nombre} />
        <section className="flex flex-col items-center gap-4">
          <h3 className="text-[35px] text-center">{productProp.nombre}</h3>
          <p className="text-[20px]">{productProp.descripcion}</p>
          <a
            className="bg-red-700 py-4 px-4 rounded-xl text-white text-[20px]"
            href=""
          >
            Add Carr
          </a>
        </section>
      </figure>
    </>
  );
}
