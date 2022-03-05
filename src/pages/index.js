import Head from "next/head";
import Navbar from "../components/Navbar";
import NavbarDown from "../components/NavbarDown";
import Banner from "../components/Banner";
import ProdctFeed from "../components/ProdctFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100 relative">
      <Head>
        <title>Amazon by Keval</title>
      </Head>
      <div className="fixed z-50 w-full top-0 left-0">
        <Navbar />
        <NavbarDown />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <ProdctFeed products={products} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
