// A mock API service that simulates fetching data from an API.
// This is useful for testing and development when a real API isn't available.

export const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock response data
      const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
      ];
      resolve(users); // Simulating a successful API response
    }, 1000); // Simulate network delay
  });
};
