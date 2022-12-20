/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/10/21
 * Description: 文件描述
 */
import { Plugin } from "vue";
export declare type withInstallSFC<T> = T & Plugin;
export declare function withInstall<T extends Record<string, any>>(component: T): withInstallSFC<T>;
export declare function mainInstall(components: any): (app: any) => void;
