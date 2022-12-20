/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/10/21
 * Description: 文件描述
 */
import {Plugin} from "vue";

export type withInstallSFC<T> = T & Plugin;

export function withInstall<T extends Record<string, any>>(component: T) {
    (component as withInstallSFC<T>).install = function (app) {
        app.component(component.name, component)
    };
    return component as withInstallSFC<T>;

}
export function mainInstall(components, ) {
    return function (app) {
        components.forEach(function (item) {
            if (item.install) {
                app.use(item);
            }
        });
    }
}

