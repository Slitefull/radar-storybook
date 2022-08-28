import wretch from "wretch";


export const baseAPI = wretch()
  .url(`${process.env.REACT_APP_API_URI}`)
  .options({ credentials: "include", mode: "cors" })
