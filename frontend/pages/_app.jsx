import "@/public/assets/template/dist/css/fullcalendar.css"
import '../styles/globals.css'

import SEO from '@/contents/components/seo/Seo'
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { NavigationProgress } from '@mantine/nprogress';
import { ProfileProvider } from '@/contexts/ProfileContext';

function MyApp({ Component, pageProps }) {
  return <MantineProvider withNormalizeCSS withGlobalStyles>
    <NavigationProgress autoReset={true} zIndex={10000} />
    <Notifications position="top-right" zIndex={9999} />
    <ProfileProvider>
      <SEO />
      <Component {...pageProps} />
    </ProfileProvider>
  </MantineProvider>
}

export default MyApp
