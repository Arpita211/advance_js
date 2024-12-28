
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
  