// const BudgetController = require("../controllers/budget.controller");
const UserCont = require('../controllers/user.controllers');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  app.get("/api/Budget/", UserCont.findAllAuthors);
  app.get("/api/Budget/month", UserCont.findAccordingMonth);
  app.get("/api/Budget/:id", UserCont.findOneSingleAuthor);
  app.put("/api/Budget/update/:id", UserCont.updateExistingAuthor);
  app.post("/api/Budget/new", UserCont.createNewAuthor);
  app.delete("/api/Budget/delete/:id", UserCont.deleteAnExistingAuthor);

  app.post('/api/user', UserCont.createUser);
  app.post('/api/user/reg', UserCont.reg);
  app.get('/api/logout', UserCont.logout);
    app.post('/api/login', UserCont.loginUser);
    app.get("/api/users", authenticate, UserCont.getAllUsers);
};