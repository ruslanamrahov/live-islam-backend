const axios = require('axios');

// URL for your Strapi API endpoint for the Tag collection
const url = 'http://localhost:1337/api/tags'; // Make sure the endpoint is correct

// Authorization token
const headers = {
  'Authorization': 'Bearer 26fcd467748993d1bd895d7671ca6bb7ca7165b8dcf2f506be049ecca345b24a051534c60034ae29b346df0da68512ff9bc2717c8608a3a2093b09612923ec134afe294826f7b6f8d87c8cde81ecfb690ccffa64905ebf269fa2abf289fe7321745817408da769e8896cdf02ca60ce91de3ed7f79523dc1896a6396f15095f0c'
};

// List of Islam-related tags
const tags = [
  "Matn", "Book Translation", "Fiqh", "Aqeedah", "Hadith Science",
  "Tafsir", "Ilm al-Kalam", "Usul al-Fiqh", "Falsafah", "Tawhid",
  "Ijtihad", "Shariah", "Fatwa", "Sunnah", "Tasfiyah"
];

// Create entries in Strapi for each tag
async function createTags() {
  for (const tag of tags) {
    const data = {
      data: {
        name: tag
      }
    };

    try {
      const response = await axios.post(url, data, { headers });
      console.log(`Successfully created tag: ${tag}`);
    } catch (error) {
      if (error.response) {
        console.error(`Failed to create tag: ${tag}, Status: ${error.response.status}, Error: ${error.response.data}`);
      } else {
        console.error(`Failed to create tag: ${tag}, Error: ${error.message}`);
      }
    }

    // Short timeout of 500ms between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

// Run the function to create tags
createTags();
