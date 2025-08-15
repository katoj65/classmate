async function fetchData() {
  try {
    const response = await http.request({
      url: 'https://YOUR_PROJECT.supabase.co/rest/v1/your_endpoint',
      method: 'GET',
      headers: {
        apikey: 'YOUR_PUBLIC_API_KEY',
        Authorization: 'Bearer YOUR_PUBLIC_API_KEY',
        'Content-Type': 'application/json'
      }
    });

    const data = response.content.toJSON();
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}