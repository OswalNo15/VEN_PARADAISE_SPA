import "../styles/global.css";
import "../styles/highlight.css"
import "../styles/perfect-scrollbar.css"
import "../styles/apex-charts.css"
import "../styles/boxicons.css"
import "../styles/theme-default.css"
import ErrorBoundary from "../components/tools/ErrorBoundary";
import { usePageLoading } from "../components/tools/usePageloading";
import { VenParadaiseSpaContextProvider } from "../context/VenParadaiseSpaContext";
import Layout from "../layout/Index";
import Loading from "../components/tools/Loading";

export default function App({ Component, pageProps }) {
  const { isPageLoading } = usePageLoading();
  return (
    <ErrorBoundary>
      <VenParadaiseSpaContextProvider>
        {isPageLoading ? (
          <Loading></Loading>
        ) : (
          <Layout>
            <div id="fb-root"></div>
            
            <Component {...pageProps} />
          </Layout>
        )}
      </VenParadaiseSpaContextProvider>
    </ErrorBoundary>
  );
}
