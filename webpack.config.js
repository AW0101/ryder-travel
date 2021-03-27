module.exports = {
    entry:'./app/scripts/App.js',
    watch: true,
    module: {
        rules: [
            {
             test: /\.css$/i,
             use: ['style-loader','css-loader']   
            }
        ]
    }
}