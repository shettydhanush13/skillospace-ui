export default {
    baseUrl : process.env.NODE_ENV !== 'development' ? "http://localhost:8000/api" : "https://skillospace-service.herokuapp.com/api"
}