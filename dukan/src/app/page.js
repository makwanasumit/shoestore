// "use client"
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Wrapper from "./components/Wrapper";
import ProductCard from "./components/ProductCard";
import { fetchDataFromApi } from "../../utils/api";




export default async function  Home({products}) {
  

  
  const {data} = await fetchDataFromApi('/api/products?populate=*');
  console.log(data);
 
  
  return (
    <main className="">
      <HeroBanner/>
      <Wrapper>
        <h1>{data?.[0]?.attributes?.name}</h1>
        {/* Heading and paragraph Start */}
        <div className="text-center font-medium flex justify-center items-center flex-col my-[5vh] md:my-[10vh]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold">
            Coshioning For Your Miles
          </div>
          <div className="text-md md:text-xl">
            A Lightweight Nike Zoomx midsole is combined with increased stack heights to help provide coshioning during extended stretches of running.
          </div>
        </div>
        {/* Heading and paragraph End */}

        {/* Product grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:py-0">
          {data?.map((data) => (
            <ProductCard key={data?.id} data={data}/>
          ))}
        </div>
        {/* Product grid end */}

      </Wrapper>
    </main>
  );
}

