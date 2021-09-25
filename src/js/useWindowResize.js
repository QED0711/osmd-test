import {useState, useEffect} from "react"; 

const useWindowResize = (options={}) => {

    options = {resize: true, scroll: true, ...options}
  
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
      scrollX: undefined,
      scrollY: undefined
    });
  
    useEffect(() => {
      // Handler to call on window resize
      function handleWindowChange() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          scrollX: window.scrollX,
          scrollY: window.scrollY
        });
      }
      
      // Add event listener
      options.resize && window.addEventListener("resize", handleWindowChange);
      options.scroll && window.addEventListener("scroll", handleWindowChange)
      
      // Call handler right away so state gets updated with initial window size
      handleWindowChange();
      
      // Remove event listener on cleanup
      return () => {
        options.resize && window.removeEventListener("resize", handleWindowChange)
        options.scroll && window.removeEventListener("scroll", handleWindowChange)
      };
    }, []); // Empty array ensures that effect is only run on mount
  
    return windowSize;
  }


  export default useWindowResize;