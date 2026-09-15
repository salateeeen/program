import { NavLink, useSearchParams } from "react-router-dom";
const id = 2231413;
function Id() {
  const [searchParams, setSearchParams] = useSearchParams();
  const co = searchParams.get(`co`);
  const dig = searchParams.get(`dig`);
  console.log(co, dig);

  return (
    <>
      <h1>sultan omar {`${id}`}</h1>
      <button onClick={()=> {setSearchParams({co:`A+`, dig:`A-`})}} >ABC</button>
    </>
  );
}

export default Id;
