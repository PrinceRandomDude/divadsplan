// Function to load and display JSON data
async function authenticate(username, password) {
  try {
    const response = await fetch('secrets.json');
    if (!response.ok) {
      throw new Error('Failed to load JSON file');
    }
    const data = await response.json();

    if (data[username] === password) {
        return true;
    }
    else {
        return false;
    }
    
  } catch (error) {
    console.error('Error loading JSON:', error);
    return false;
  }
}

