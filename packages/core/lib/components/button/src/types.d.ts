/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/11/21
 * Description: 文件描述
 */
export declare const ButtonType: string[];
export declare const ButtonSize: string[];
export declare const buttonProps: {
    readonly type: {
        readonly type: StringConstructor;
        readonly validator: (value: string) => boolean;
    };
    readonly plain: BooleanConstructor;
    readonly round: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly size: {
        readonly type: StringConstructor;
        readonly validator: (value: string) => boolean;
    };
};
