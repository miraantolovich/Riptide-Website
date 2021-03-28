/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState,} from "react"
import {vh, vw} from "./../util.js"

function useSticky() {
  const [isSticky, setSticky] = useState(false)

  const handleScroll = () => {
    window.scrollY > vh(10)
      ? setSticky(true)
      : setSticky(false);
  }

  // This function handles the scroll performance issue
  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [debounce, handleScroll])

  return { isSticky }
}

export default useSticky;