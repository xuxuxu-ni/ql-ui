import { ExtractPropTypes } from 'vue';
import { buttonProps } from './src/types';
export type { buttonProps } from './src/types';
export declare const QlButton: import("@ql-ui/utils/withInstall").withInstallSFC<import("vue").DefineComponent<{
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
}, {
    bem: {
        b: (blockName?: any) => any;
        e: (elementName: any) => any;
        m: (modifierName: any) => any;
        be: (blockName: any, elementName: any) => any;
        bm: (blockName: any, modifierName: any) => any;
        em: (elementName: any, modifierName: any) => any;
        bem: (blockName: any, elementName: any, modifierName: any) => any;
        is: (name: any, state?: any) => string;
    };
    props: any;
    classList: import("vue").ComputedRef<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
}>>, {
    readonly plain: boolean;
    readonly round: boolean;
    readonly disabled: boolean;
}>>;
export default QlButton;
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
