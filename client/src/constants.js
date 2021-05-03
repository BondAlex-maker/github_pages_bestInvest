const env = process.env.NODE_ENV || 'development';
const serverIP = 'localhost';
const serverPort = env === 'production' ? 3000 : 9632;
export default {

    STATIC_IMAGES_PATH: '/staticImages/',
    ANONYM_IMAGE_PATH: '/staticImages/anonym.png',
    BASE_URL: `http://${ serverIP }:${ serverPort }/`,
    publicURL: env === 'production'
        ? `http://${ serverIP }:80/images/`
        : `http://${ serverIP }:${ serverPort }/public/images/`}