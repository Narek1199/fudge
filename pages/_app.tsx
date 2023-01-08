import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AppPropsWithLayout } from "utils/types/layout.type";
import Loader from "components/organisms/Loader";

import "styles/globals.css";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    router.events.on("routeChangeStart", (url: string) => {
      setIsLoading(true);
    });
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);
  return isLoading ? <Loader /> : getLayout(<Component {...pageProps} />);
}
