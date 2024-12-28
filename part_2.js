
function fetchUser() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ userId: 1, name: 'John Doe' });
      }, 1000);
    });
  }
  
  
  function fetchPosts() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { postId: 1, title: 'Post 1' },
          { postId: 2, title: 'Post 2' }
        ]);
      }, 1000);
    });
  }
  
  
  async function fetchAllData() {
    try {
      const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
      console.log('User:', user);
      console.log('Posts:', posts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  
  fetchAllData();
  // Function that resolves successfully after 1 second
function fetchSuccess() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Success: Data fetched successfully!');
      }, 1000);
    });
  }
  
  // Function that rejects with an error after 1 second
  function fetchFailure() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Failure: Something went wrong!'));
      }, 1000);
    });
  }
  
  // Function that handles both promises using Promise.all
  async function handlePromises() {
    try {
      // Using Promise.all to wait for both promises to settle
      const results = await Promise.all([fetchSuccess(), fetchFailure()]);
  
      // If both promises resolve successfully, log the results
      console.log('Results:', results);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  
  handlePromises();
  
  