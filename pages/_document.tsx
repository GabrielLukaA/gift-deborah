import { Html, Head, Main, NextScript } from "next/document";
import ThemeContextProvider from "../hooks/useTheme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[#fcfcfc] dark:bg-[#272727]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
