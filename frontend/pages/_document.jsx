import { Html, Head, Main, NextScript } from "next/document";
import { useViewportSize } from '@mantine/hooks';

export default function Document() {
  const { width } = useViewportSize();
  return (
    <Html>
      <Head />
      <body className={`sidebar-mini layout-fixed ${width < 992 ? 'sidebar-open' : ''}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
