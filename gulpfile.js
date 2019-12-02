let m = {};
m.gulp = require("gulp");
m.plugins = require("gulp-load-plugins")();
m.plugins.colors = require("colors");

require("./build/gulp-tasks/svg")(m);
