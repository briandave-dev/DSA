function generateApiKey(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let apiKey = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      apiKey += characters.charAt(randomIndex);
    }
    return apiKey;
  }
  
  // Example usage:
  const newApiKey = generateApiKey(84); // Generates an API key of 84 characters
  console.log(newApiKey);  