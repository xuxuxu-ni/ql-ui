declare const _sfc_main: import("vue").DefineComponent<{
    readonly type: {
        readonly type: StringConstructor;
        readonly validator: (value: string) => boolean;
    };
    readonly href: StringConstructor;
    readonly underline: BooleanConstructor;
    readonly disabled: BooleanConstructor;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: StringConstructor;
        readonly validator: (value: string) => boolean;
    };
    readonly href: StringConstructor;
    readonly underline: BooleanConstructor;
    readonly disabled: BooleanConstructor;
}>>, {
    readonly disabled: boolean;
    readonly underline: boolean;
}>;
export default _sfc_main;
