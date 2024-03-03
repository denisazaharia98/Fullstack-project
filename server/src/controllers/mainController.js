const mainController = {
    getHome: (req, res) => {
      res.json({ message: 'Welcome to your API!' });
    },
    createItem: (req, res) => {
      // Handle item creation logic
    },
    // Add more controller methods as needed
  };
  
  module.exports = mainController;
  