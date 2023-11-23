import Checklist from "@/contents/components/improvements/Checklist";
import Roadmap from "@/contents/components/improvements/Roadmap";
import Layout from "@/contents/layout/Layout";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useEffect, useState } from "react";


function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined as any,
      height: undefined as any,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight - 145,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount


    return windowSize;
  }

export default function JavaImprovementRoadmap() {

    const windowSize = useWindowSize();

    
    return <Layout>
        
        <div className="flow-root h-full" style={{height:`${windowSize.height}px`}}>
            <Roadmap />
            <Checklist />
        </div>
    </Layout>
}