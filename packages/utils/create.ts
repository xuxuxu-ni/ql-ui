/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/10/19
 * Description:创建bem: block 代码块, element 元素,  modifier 装饰
 */

/**
 *
 * @param prefixName 前缀名
 * @param blockName 代码块名
 * @param elementName 元素名
 * @param modifierName 装饰符名
 */
function _bem(prefixName, blockName, elementName, modifierName) {
    if (blockName) {
        prefixName += `-${blockName}`;
    }
    if (elementName) {
        prefixName += `__${elementName}`;
    }
    if (modifierName) {
        prefixName += `--${modifierName}`;
    }
    return prefixName;
}

/**
 *
 * @param prefixName 前缀
 * @returns
 */
function createBEM(prefixName: string) {
    const b = (blockName?) => _bem(prefixName, blockName, "", "");

    const e = (elementName) =>
        elementName ? _bem(prefixName, "", elementName, "") : "";

    const m = (modifierName) =>
        modifierName ? _bem(prefixName, "", "", modifierName) : "";

    const be = (blockName, elementName) =>
        blockName && elementName
            ? _bem(prefixName, blockName, elementName, "")
            : "";
    const bm = (blockName, modifierName) =>
        blockName && modifierName
            ? _bem(prefixName, blockName, "", modifierName)
            : "";
    const em = (elementName, modifierName) =>
        elementName && modifierName
            ? _bem(prefixName, "", elementName, modifierName)
            : "";
    const bem = (blockName, elementName, modifierName) =>
        blockName && elementName && modifierName
            ? _bem(prefixName, blockName, elementName, modifierName)
            : "";
    const is = (name, state?) => (state ? `is-${name}` : "");
    return {
        b,
        e,
        m,
        be,
        bm,
        em,
        bem,
        is,
    };
}

export function createNamespace(name: string) {
    const prefixName = `ql-${name}`;
    return createBEM(prefixName);
}
