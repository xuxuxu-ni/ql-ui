/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/11/21
 * Description: 文件描述
 */
export declare const LinkType: string[];
export declare const linkProps: {
    readonly type: {
        readonly type: StringConstructor;
        readonly validator: (value: string) => boolean;
    };
    readonly href: StringConstructor;
    readonly underline: BooleanConstructor;
    readonly disabled: BooleanConstructor;
};
