export function rander(dom, ...style) {
    for (const s of style) {
        for (const p in s) {
            dom.style[p] = s[p]
        }
    }
}