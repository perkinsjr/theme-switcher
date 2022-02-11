import '../styles/globals.css'
import {useEffect} from "react"
import {themeChange} from "theme-change";


function MyApp({ Component, pageProps }) {
  const themeValues = [
    "Dark",
    "Cupcake",
    "Bumblebee",
    "Emerald",
    "Corporate",
    "Synthwave",
    "Retro",
    "Cyberpunk",
    "Valentine",
    "Halloween",
    "Garden",
    "Forest",
    "Aqua",
    "Lofi",
    "Pastel",
    "Fantasy",
    "Wireframe",
    "Black",
    "Luxury",
    "Dracula",
    "Cmyk"
  ]

  useEffect(()=> {
    themeChange(false)
  });
  return (
    <>
    <select className="text-primary" data-choose-theme>
      <option className="text-primary" option value="">Default Value</option>
      {themeValues.map((value) => (
        <option className="text-primary" key={value.toLowerCase()} value={value.toLowerCase()}>{value}</option>
      ))}
    </select>
    <Component {...pageProps}/>
    </>
  )
}

export default MyApp
