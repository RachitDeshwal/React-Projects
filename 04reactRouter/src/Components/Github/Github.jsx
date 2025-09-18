import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  return (
    <>
      <div className="bg-gray-600 text-center p-4 text-white text-3xl m-3">
        <p> Github followers:{data.followers}</p>
        <p>Repos:{data.public_repos}</p>
        <img className=" rounded-lg" src={data.avatar_url} alt="" width={300} />
      </div>
    </>
  );
}
async function getData() {
  let response = await fetch("https://api.github.com/users/RachitDeshwal");
  return response.json();
}
export { Github, getData };
