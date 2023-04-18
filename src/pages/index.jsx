import Head from "next/head";
import Anchor from "@/components/Anchor";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        {/* head title */}
        <title>Shop R Us</title>
      </Head>
      {/* Dette fungere som en template der retunere indholdet til produkterne ved at mappe igennem de forkellige produkter */}
      <section className="products">
        {data.map((obj) => {
          return (
            <Anchor href={"/products/" + obj.id + obj.category}>
              <article>
                <h2>{obj.productdisplayname}</h2>
                <p>{obj.category}</p>
              </article>
            </Anchor>
          );
        })}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const api = "https://kea-alt-del.dk/t7/api/products/?limit=10";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data: data,
    },
  };
}
