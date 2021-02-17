'use strict';
const path = require('path');
function resolve(dir){
  return path.join(__dirname,dir);
}
module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    overlay: {
     warning: false,
     errors: false
   }
  },
  configureWebpack: config => {
    return {
      resolve: {
        alias: {
          '@': resolve('src'),
          '@styles': resolve('src/assets/styles'),
        }
      }
    }
  }
};
