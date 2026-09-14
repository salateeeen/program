import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!res.ok) throw new Error("Network response was not ok");
  return await res.json();
}

async function deleteData() {
  console.log(`delete data`);
  return null;
}

function Query() {
  const queryClint = useQueryClient();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["user"],
    queryFn: fetchData,
  });

  const { isSuccess, status, mutate } = useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
        queryClint.invalidateQueries({
            queryKey:[`user`]
        })
    }
  });

  function mutation(e) {
    e.preventDefault();
    console.log(status);
    mutate();
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <>
      <div>DATA</div>
      <button onClick={mutation}>mutate</button>
    </>
  );
}

export default Query;
