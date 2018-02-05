'use strict'

var gulp = require('gulp')
var merge = require('merge-stream')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var argv = require('yargs').alias('p', 'production').argv
var exec = require('child_process').exec
var ghPages = require('gulp-gh-pages')
var fs = require('fs')
var path = require('path')
var express = require('express')


// Load gulp plugins
var $ = require('gulp-load-plugins')()

// Clean
gulp.task('clean', function () {
  return gulp.src(['dist'], {read: false}).pipe($.clean())
})

// Build
gulp.task('build', ['clean'], function() {
  // run webpack
  return gulp.src('')
    .pipe($.webpack(require('./webpack.config')))
    .pipe(gulp.dest('dist/'))
})

gulp.task('webpack-dev-server', function(callback) {
  // run webpack
  var config = Object.create(require('./webpack.config'))
  config.watch = true
  gulp.src('')
    .pipe($.webpack(config))
    .pipe(gulp.dest('dist/'))

  // Start a webpack-dev-server
  var port = 9090
  var testConfig = Object.create(config)
  var compiler = webpack({
    watch: true,
    entry: "mocha!./test/test.js",
    output: {
      path: __dirname,
      filename: 'bundle.js'
    }
  })
  var server = new WebpackDevServer(compiler, {
    noInfo: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  })

  server.listen(port, function(err) {
    if(err) throw new $.util.PluginError('webpack-dev-server', err)
    $.util.log('[webpack-dev-server]', 'http://localhost:'+port+'/webpack-dev-server/index.html')
    // keep the server alive or continue?
    // callback()
  })

})

// for local development w/ argon-browser-ui repo...
gulp.task('copyToOtherArgonRepos', function(cb) {
  // copy the build into varous argon repos (should be siblings to this repo)
  // TODO: check if the repos are actually there,
  // and only copy into the ones that are...
  return gulp.src('dist/argonManager.js')
    .pipe(gulp.dest('../argon-ui/vendor'))
})

// Watch
gulp.task('watchThenCopy', function () {
  return gulp.watch('dist/*.**', ['copyToOtherArgonRepos'])
    .on('error', function(error) {
      $.util.log("[watch]", error)
    })
})

// Dev
gulp.task('dev', ['webpack-dev-server' , 'watchThenCopy'])

// Default task
gulp.task('default', ['build'])


/**
 * Semver tasks
 */

// Bump major
gulp.task('bump-major', function(){
  gulp.src('./*.json')
  .pipe($.bump({type:'major'}))
  .pipe(gulp.dest('./'));
});

// Bump minor
gulp.task('bump-minor', function(){
  gulp.src('./*.json')
  .pipe($.bump({type:'minor'}))
  .pipe(gulp.dest('./'));
});

// Bump patch
gulp.task('bump', function(){
  gulp.src('./*.json')
  .pipe($.bump({type:'patch'}))
  .pipe(gulp.dest('./'));
});


/**
 * Documentation tasks
 */


gulp.task('jsdoc', function(cb){
  exec('./node_modules/.bin/jsdoc src/ -r -t ./node_modules/ink-docstrap/template -c ./node_modules/jsdoc/conf.json -d docs', function (err, stdout, stderr) {
    $.util.log(stdout);
    if (err) $.util.log($.util.colors.red(stderr), err.message)
    cb(err);
  });
});

// gulp.task('yuidoc', function(cb){
//   exec('./node_modules/.bin/yuidoc src/ -C -o docs', function (err, stdout, stderr) {
//     $.util.log(stdout);
//     if (err) $.util.log($.util.colors.red(stderr), err.message)
//     cb(err);
//   });
// });

gulp.task('yuidoc', function(cb){
  exec('./node_modules/.bin/yuidoc src/ -C -t ./node_modules/yuidoc-bootstrap-theme -H ./node_modules/yuidoc-bootstrap-theme/helpers/helpers.js -o docs', function (err, stdout, stderr) {
    $.util.log(stdout);
    if (err) $.util.log($.util.colors.red(stderr), err.message)
    cb(err);
  });
});

gulp.task('docs', ['yuidoc'])

gulp.task('push-docs', ['docs'], function() {
  return gulp.src("./docs/**/*")
          .pipe(ghPages())
})
