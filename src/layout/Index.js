import React from "react";
import { useRouter } from "next/router";
import HeaderI from "../components/Header/HdIndex";
import { initLogInactive } from "../components/tools/Loginactivity";
import { useContextVenParadaiseSpa } from "../context/VenParadaiseSpaContext";
function Index({ children }) {
  const router = useRouter();
  const { authorized, Urlauthorized } = useContextVenParadaiseSpa();
  const publicoPaths = ["/"];
  let url = router.asPath;
  const path = url.split("?")[0];
  let UrlNotAuthorizeHeader = false;

  if (publicoPaths.includes(path)) {
    UrlNotAuthorizeHeader = true;
  }

  return (
    <>
      {/* <Loader></Loader> */}
      {/*Header */}
      {authorized && !Urlauthorized && !UrlNotAuthorizeHeader ? (
        <HeaderI />
      ) : (
        ""
      )}

      {/*body */}
      {authorized && !Urlauthorized ? (
        <main onLoad={initLogInactive()}>{children}</main>
      ) : (
        <main>{children}</main>
      )}
      {/* <Suspense fallback={<Loader />}>
        <main onLoad={initLogInactive()}>{children}</main>
      </Suspense> */}
      {/* <FooterIndex /> */}
    </>
  );
}

export default Index;
