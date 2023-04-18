import Head from "next/head";

export default function Products({ data }) {
  return (
    <>
      <Head>
        <title>{data.productdisplayname}</title>
      </Head>
      <h1>{data.productdisplayname}</h1>
      <p>{data.gender}</p>
      <p>{data.category}</p>
      <p>{data.brandname}</p>
      <p>{data.price}</p>
    </>
  );
}

/* Makes a list of all the pages that is needed to be remebered by the server meaninng  */
/* SERVER SITE BACKEND */
export async function getStaticProps(context) {
  /* slug kommer her fra [slug].jsx */
  const id = context.params.slug;
  /* const category = context.params.slug.category; */
  /*  const api = "https://kea-alt-del.dk/t7/api/products/" + id + category; */
  const api = "https://kea-alt-del.dk/t7/api/products/" + id;
  const res = await fetch(api);
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  console.log(data);

  return {
    /*this makes sure we run the request only once */
    props: {
      data: data,
    },
  };
}

/* Generates one static page */
/* CLIENT SITE BACKEND */
export async function getStaticPaths() {
  const api = "https://kea-alt-del.dk/t7/api/products?limit=10";
  const res = await fetch(api);
  const data = await res.json();
  /* generates a page for each "dog" */
  const paths = data.map((object) => {
    console.log(object.id);
    return { params: { slug: String(object.id) } };
  });

  return {
    paths,
    fallback: false,
  };
}
