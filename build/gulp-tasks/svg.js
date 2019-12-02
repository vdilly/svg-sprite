// @TODO : env.json variable wordpress ? pour le sprite.svg.php
module.exports = function(m) {
  config = {
    svg: {
      // General options for created SVG files
      xmlDeclaration: false, // Add XML declaration to SVG sprite
      doctypeDeclaration: false // Add DOCTYPE declaration to SVG sprite
    },
    mode: {
      symbol: {
        dest: "",
        example: {
          dest: "sprite.html"
        },
        sprite: "sprite.svg.php" // add extension.php pour inclusion dans wordpress, retirer .php si inutile
      }
    }
  };
  m.gulp.task("svg", function() {
    return m.gulp
      .src("**/*.svg", { cwd: "./src" })
      .pipe(m.plugins.plumber())
      .pipe(m.plugins.svgSprite(config))
      .on("error", function(error) {
        console.log(error);
      })
      .pipe(m.gulp.dest("../dist/sprites"));
  });
  m.gulp.task(
    "svg:watch",
    m.gulp.series([
      "svg",
      function() {
        m.gulp.watch("./src/img/svg/**/*.svg", m.gulp.series("svg"));
      }
    ])
  );
};
