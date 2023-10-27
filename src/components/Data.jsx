export async function getData() {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );

  return await data.json();
}
