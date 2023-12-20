require('dotenv').config()
const express = require('express');
const RegistrationRoutes = require('./routes/registration.routes')
const LoginRoutes = require('./routes/login.routes')
const LogoutRoutes = require('./routes/logout.routes')
const UsersRoutes = require('./routes/users.routes')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const errorMiddleware = require('./middleware/error.midleware')

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_DEV_URL
}))
app.use(fileUpload())
app.use(express.static('static'))
app.use('/api',RegistrationRoutes, LoginRoutes, LogoutRoutes, UsersRoutes)
app.use(errorMiddleware)
const startApp = async() => {
    try {
        await mongoose.connect(process.env.DB_CONNECT)
        app.listen(PORT, () => {
            console.log(`Server work on port: ${PORT}`);
          });
      
    } catch (error) {
        console.log(error)
    }
} 
startApp()