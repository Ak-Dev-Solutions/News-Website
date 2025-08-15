// lib/fetchNews.js

export async function fetchNews(category) {
  try {
    // Replace with your real API or data fetching logic
    // Example: fetch news by category from an API or your data source
    const response = await fetch(`https://your-api.com/news?category=${category}`);

    if (!response.ok) {
      return []; // return empty array if API fails
    }

    const data = await response.json();

    // Assume data.articles is the array of news items
    return data.articles || [];
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return []; // fallback empty array on error
  }
}
