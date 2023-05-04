import "@/styles/globals.css";
import ErrorBoundary from "@/components/tools/ErrorBoundary";
import { usePageLoading } from "@/components/tools/usePageloading";
import { VenParadaiseSpaContextProvider } from "@/context/VenParadaiseSpaContext";
import Loading from "@/components/tools/Loading";

export default function App({ Component, pageProps }) {
  const { isPageLoading } = usePageLoading();

  return (
    <ErrorBoundary>
      <VenParadaiseSpaContextProvider>
        {isPageLoading ? <Loading></Loading> : <Component {...pageProps} />}
      </VenParadaiseSpaContextProvider>
    </ErrorBoundary>
  );
}
