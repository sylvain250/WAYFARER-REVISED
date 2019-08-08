// the server
import http from 'http';
import app from './app';

const server = http.createServer(app);

const port = process.env.PORT || 8000;
server.listen(port,()=>{
    console.log (`you are listening to port ${port}`);
});