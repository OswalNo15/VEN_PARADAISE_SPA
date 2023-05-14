import React,{useEffect} from "react";
import LoginComponents from "../../components/Account/LoginComponents";
import Head from "next/head";
import { userService } from "../../services/UserService";
function Login(cookie) {
  if (cookie) {
    useEffect(() => {
      userService.logoutLogin();
    }, []);
  }
  return (
    <>
      <Head>
        <title>{"Inicio de sesión | VENParadaise-SPA"}</title>
        <meta
          name="description"
          content={"Inicia sesión en VENParadaise-SPA"}
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <meta name="google" content="notranslate" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta property="og:type" content="website" />
        <meta name="language" content="spanish" />
        <meta name="geo.region" content="CO" />
        <meta
          name="twitter:title"
          content="Inicio de sesión | VENParadaise-SPA"
        />
        <meta
          name="twitter:description"
          content="Inicia sesión en VENParadaise-SPA"
        ></meta>
        <meta
          property="og:title"
          content="Inicio de sesión | VENParadaise-SPA"
        />
        <meta
          property="og:description"
          content="Inicia sesión en VENParadaise-SPA"
        />
        <meta property="og:site_name" content="VENParadaise-SPA" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:locale:alternate" content="es_CO" />
      </Head>
      <LoginComponents></LoginComponents>
    </>
  );
}

export default Login;

export async function getServerSideProps(ctx) {
  const cookie = ctx.req.cookies["tokenUserCookie"];
  if (!cookie) {
    return {
      props: {
        cookie: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}
