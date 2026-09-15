
export default async function Page() {
  const res = await fetch(`http://localhost:3800/api/v1/farms`);
  const farms = await res.json()

  console.log(farms);
  return (
    <div>
      <ul>

        {farms.data.map(farm => {
          return (
            <div key={farm._id}>
              <li >{farm.city.name}</li>
              <img src={farm.coverImage} width={50} height={50} />
            </div>
            )
        })}

      </ul>
    </div>
  );
}
