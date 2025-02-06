export async function GET() {
  return await fetchInstagramMedia();
}

export async function fetchInstagramMedia() {
  const baseURL = `https://jsonplaceholder.typicode.com/todos/1`;

  try {
    const response = await fetch(baseURL);
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch content");
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error fetching content:", error);
    return new Response("Forbidden POST", { status: 403 });
  }
}
