// import the main principal page
import app from "./app"; 

// import the port from envorinement file .env
const PORT = process.env.PORT;  

// Running the Server
app.listen(PORT, () => console.log(`listing on localhost:${PORT}`));