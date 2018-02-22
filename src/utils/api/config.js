// Config file

module.exports = {
    api_base_url: process.env.NODE_ENV == 'production' ? 'http://localhost:54531/api' : 'http://company.yooin.me:54531/api',
    auth_base_url: process.env.NODE_ENV == 'production' ? 'http://localhost:54531/auth' : 'http://company.yooin.me:54531/auth',
    app_base_url: process.env.NODE_ENV == 'production' ? 'https://company.yooin.me' : 'http://localhost:3000'
}
