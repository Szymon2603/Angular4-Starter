module.exports = function(env) {
    if(env == undefined) {
        console.log('Env variable is undefined, use dev config!')
        env = 'dev';
    } else {
        console.log(`Building for ${env} environment.`)
    }
    return require(`./config/webpack.${env}.js`);
}
