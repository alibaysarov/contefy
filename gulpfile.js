import gulp from 'gulp';
//Импорт путей
import {path} from "./gulp/config/path.js";
//Импорт общих плагинов
import {plugins} from "./gulp/config/plugins.js";

global.app={
    isBuild:process.argv.includes('--build'),
    isDev:!process.argv.includes('--build'),
    path:path,
    gulp:gulp,
    plugins:plugins,

}
//Импорт задач
import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
import {images} from "./gulp/tasks/images.js";
import {svgSprive} from "./gulp/tasks/svgSprive.js";
import {zip} from "./gulp/tasks/zip.js";
import {ftp} from "./gulp/tasks/ftp.js";
//Наблюдатель
function watcher(){
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export {svgSprive}

const mainTasks=gulp.parallel(copy,html,scss,js,images);
const beforeMainTasks=gulp.parallel(copy,html,scss,js);
//Построение сценариев для выполнения задач
const dev=gulp.series(reset, mainTasks, gulp.parallel(watcher,server));
const build=gulp.series(reset,mainTasks);
const prevBuild=gulp.series(reset,beforeMainTasks);
const deployZIP=gulp.series(reset,mainTasks,zip);
const deployFTP=gulp.series(reset,mainTasks,ftp);
const imgMinify=gulp.series(images);
export {dev}
export {build}
export {deployZIP}
export {deployFTP}
export{prevBuild}
export {imgMinify}


//Выполнение сценария
gulp.task('default',dev);

