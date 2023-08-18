import { useEffect, useState } from "react"

const useFetch = (url) => {
   const [data, setData] = useState(null)
   const [error, setError] = useState(null)
   const [isPending, setIsPending] = useState(true)

   useEffect(() => {
      const abortCon = new AbortController()

      setTimeout(() => {
         console.log("Running Use Effect")
         fetch(url, { signal: abortCon.signal })
            .then((res) => {
               console.log(res)
               if (!res.ok) {
                  throw Error("Could not fetch the data for that Resource") // will throw to bottom error to catch
               }
               return res.json()
            })
            .then((data) => {
               setData(data)
               setIsPending(false)
               setError(null)
            })
            .catch((err) => {
               if (err.name === "AbortError") {
                  console.log("fetch aborted")
               } else {
                  setIsPending(false)
                  setError(err.message)
               }
            })
      }, 1000)
      return () => abortCon.abort()
   }, [url])

   return { data, isPending, error }
}

export default useFetch
