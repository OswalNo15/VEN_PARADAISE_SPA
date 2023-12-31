import Head from "next/head";
import IndexComponents from "../components/Body/IndexComponents";
export default function Home() {
  return (
    <>
      <Head>
        <title>{"Inicio | VENParadaise-SPA"}</title>
        <meta
          name="description"
          content={"Inicio donde indicaras el core y la sede que quieres ver"}
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <meta name="google" content="notranslate" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta property="og:type" content="website" />
        <meta name="language" content="spanish" />
        <meta name="geo.region" content="CO" />
        <meta name="twitter:title" content="Inicio | VENParadaise-SPA" />
        <meta
          name="twitter:description"
          content="Inicio donde indicaras el core y la sede que quieres ver"
        ></meta>
        <meta property="og:title" content="Inicio | VENParadaise-SPA" />
        <meta
          property="og:description"
          content="Inicio donde indicaras el core y la sede que quieres ver"
        />
        <meta property="og:site_name" content="VENParadaise-SPA" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:locale:alternate" content="es_CO" />
      </Head>
      <IndexComponents></IndexComponents>
    </>
  );
}

// export async function getServerSideProps(ctx) {
//   const cookie = ctx.req.cookies["tokenUserCookie"];
//   if (cookie) {
//     // const ListadoGrupoActivo = await QueryActivegroup(cookie);
//     // const ListadoGrupoInactivo = await QueryInactivegroup(cookie);
//     return {
//       props: {
//         HOla: null,
//       },
//     };
//   } else {
//     return {
//       redirect: {
//         destination: "/Account/Login",
//       },
//     };
//   }
// }
