// const BudgetController = require("../controllers/budget.controller");
const UserCont = require('../controllers/user.controllers');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  app.get("/api/Suggested", UserCont.findAllSuggested);
  app.get("/api/Budget", UserCont.findAllAuthors);
  app.get("/api/Budget/month/:month", UserCont.findAccordingMonth);
  app.get("/api/Budget/:id", UserCont.findOneSingleAuthor);
  app.get("/api/user/:id", UserCont.findOneSingleUser);
  app.put("/api/Budget/update/:id", UserCont.updateExistingAuthor);
  app.post("/api/Budget/new/:id", UserCont.createNewAuthor);
  app.delete("/api/Budget/delete/:id", UserCont.deleteAnExistingAuthor);
  app.post("/api/Suggested/new/:id", UserCont.createNewSuggested);
  app.delete("/api/Suggested/delete/:id", UserCont.deleteAnExistingSuggested);

  app.post('/api/user', UserCont.createUser);
  
  app.post('/api/user/reg', UserCont.reg);
  app.get('/api/logout', UserCont.logout);
    app.post('/api/login', UserCont.loginUser);
    app.get("/api/users",  UserCont.getAllUsers);
};