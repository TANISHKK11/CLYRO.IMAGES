module.exports = [
"[project]/components/BackgroundPopup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/backgrounds.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Swatch({ label, selected, onClick, style, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": label,
        title: label,
        "aria-pressed": selected,
        onClick: onClick,
        style: style,
        className: `h-8 w-8 shrink-0 rounded-full transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${selected ? "ring-2 ring-white ring-offset-2 ring-offset-black" : "ring-1 ring-white/25"} ${className}`
    }, void 0, false, {
        fileName: "[project]/components/BackgroundPopup.js",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function Row({ label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-[58px] shrink-0 text-[11px] text-white/50",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/BackgroundPopup.js",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-scrollbar -my-1 flex min-w-0 flex-1 items-center gap-2 overflow-x-auto px-1 py-1.5",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/BackgroundPopup.js",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BackgroundPopup.js",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
function BackgroundPopup({ value, onChange, onClose }) {
    const [hue, setHue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(220);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "aria-label": "Change background",
        className: "absolute inset-x-2 bottom-2 z-10 rounded-2xl border border-white/15 bg-black/60 p-3.5 shadow-lift backdrop-blur-2xl animate-rise",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1.5 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-medium",
                        children: "Change background"
                    }, void 0, false, {
                        fileName: "[project]/components/BackgroundPopup.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        "aria-label": "Close background options",
                        className: "grid h-7 w-7 place-items-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            name: "close",
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/BackgroundPopup.js",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BackgroundPopup.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BackgroundPopup.js",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                label: "Colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Swatch, {
                        label: "Transparent",
                        selected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameBackground"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]),
                        onClick: ()=>onChange(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]),
                        className: "checker"
                    }, void 0, false, {
                        fileName: "[project]/components/BackgroundPopup.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["solids"].map((s)=>{
                        const bg = {
                            type: "solid",
                            color: s.color
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Swatch, {
                            label: s.name,
                            selected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameBackground"])(value, bg),
                            onClick: ()=>onChange(bg),
                            style: {
                                background: s.color
                            }
                        }, s.color, false, {
                            fileName: "[project]/components/BackgroundPopup.js",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        title: "Pick any color",
                        className: "relative h-8 w-8 shrink-0 cursor-pointer overflow-hidden rounded-full ring-1 ring-white/25 transition hover:scale-110 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-white",
                        style: {
                            background: "conic-gradient(#f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Pick any color"
                            }, void 0, false, {
                                fileName: "[project]/components/BackgroundPopup.js",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "color",
                                value: value.type === "solid" ? value.color : "#3b82f6",
                                onChange: (e)=>onChange({
                                        type: "solid",
                                        color: e.target.value
                                    }),
                                className: "absolute inset-0 h-full w-full cursor-pointer opacity-0"
                            }, void 0, false, {
                                fileName: "[project]/components/BackgroundPopup.js",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BackgroundPopup.js",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BackgroundPopup.js",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                label: "Photo",
                children: [
                    value.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Swatch, {
                        label: "Uploaded background",
                        selected: true,
                        onClick: ()=>{},
                        style: {
                            backgroundImage: `url("${value.url}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/BackgroundPopup.js",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        title: "Upload a background photo",
                        className: "inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 text-[11px] text-white/75 transition hover:bg-white/15 hover:text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                name: "image",
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/BackgroundPopup.js",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            "Upload photo",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/png,image/jpeg,image/webp",
                                className: "sr-only",
                                onChange: (e)=>{
                                    const file = e.target.files?.[0];
                                    if (!file) return;
                                    const url = URL.createObjectURL(file);
                                    onChange({
                                        type: "image",
                                        url,
                                        name: file.name
                                    });
                                    e.target.value = "";
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/BackgroundPopup.js",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BackgroundPopup.js",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    value.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onChange(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]),
                        className: "rounded-full px-3 py-2 text-[11px] text-white/50 hover:bg-white/10 hover:text-white",
                        children: "Remove"
                    }, void 0, false, {
                        fileName: "[project]/components/BackgroundPopup.js",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/BackgroundPopup.js",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                label: "Gradients",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gradients"].map((g)=>{
                    const bg = {
                        type: "gradient",
                        ...g
                    };
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Swatch, {
                        label: g.name,
                        selected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameBackground"])(value, bg),
                        onClick: ()=>onChange(bg),
                        style: {
                            backgroundImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gradientCss"])(g)
                        }
                    }, g.id, false, {
                        fileName: "[project]/components/BackgroundPopup.js",
                        lineNumber: 139,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/BackgroundPopup.js",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1.5 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-[58px] shrink-0 text-[11px] text-white/50",
                        children: "Color bar"
                    }, void 0, false, {
                        fileName: "[project]/components/BackgroundPopup.js",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: "0",
                        max: "360",
                        value: hue,
                        "aria-label": "Color bar: choose a hue",
                        className: "hue-range flex-1",
                        onChange: (e)=>{
                            const h = Number(e.target.value);
                            setHue(h);
                            onChange({
                                type: "solid",
                                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hslToHex"])(h, 85, 55)
                            });
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/BackgroundPopup.js",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BackgroundPopup.js",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BackgroundPopup.js",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/DropZone.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DropZone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const { accept, maxSizeMB } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].upload;
const formats = Object.values(accept).join(", ");
function DropZone({ onFile, error }) {
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pick = (files)=>{
        const file = files && files[0];
        if (file) onFile(file);
    };
    const onDrag = (e)=>{
        e.preventDefault();
        setDragging(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: "clyro-file-input",
                type: "file",
                accept: Object.keys(accept).join(","),
                className: "peer sr-only",
                onChange: (e)=>{
                    pick(e.target.files);
                    e.target.value = "";
                }
            }, void 0, false, {
                fileName: "[project]/components/DropZone.js",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "clyro-file-input",
                onDragEnter: onDrag,
                onDragOver: onDrag,
                onDragLeave: ()=>setDragging(false),
                onDrop: (e)=>{
                    e.preventDefault();
                    setDragging(false);
                    pick(e.dataTransfer.files);
                },
                className: `group relative flex min-h-[380px] cursor-pointer flex-col items-center justify-center gap-2 rounded-[1.5rem] px-6 py-10 text-center transition duration-300 peer-focus-visible:ring-2 peer-focus-visible:ring-white sm:min-h-[440px] ${dragging ? "scale-[0.985] bg-accent-soft" : "bg-white/[0.04] hover:bg-white/[0.08]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: `pointer-events-none absolute transition-all duration-300 ${dragging ? "inset-3" : "inset-5 group-hover:inset-4"}`,
                        children: [
                            "left-0 top-0 border-l-2 border-t-2 rounded-tl-xl",
                            "right-0 top-0 border-r-2 border-t-2 rounded-tr-xl",
                            "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl",
                            "bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl"
                        ].map((pos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `absolute h-7 w-7 transition-colors duration-300 ${pos} ${dragging ? "border-accent" : "border-fg/20 group-hover:border-accent/70"}`
                            }, pos, false, {
                                fileName: "[project]/components/DropZone.js",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/DropZone.js",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `mb-3 grid h-16 w-16 place-items-center rounded-2xl bg-accent-soft text-accent transition-transform duration-300 ${dragging ? "-translate-y-1.5" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            name: "upload",
                            className: "h-7 w-7"
                        }, void 0, false, {
                            fileName: "[project]/components/DropZone.js",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DropZone.js",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-display text-2xl font-semibold tracking-tight sm:text-[1.7rem]",
                        children: dragging ? "Release to upload" : "Drop your image here"
                    }, void 0, false, {
                        fileName: "[project]/components/DropZone.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base text-fg/55",
                        children: "or click to browse"
                    }, void 0, false, {
                        fileName: "[project]/components/DropZone.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-5 inline-flex items-center rounded-full bg-white px-6 py-3.5 text-base font-medium text-black shadow-lift transition group-hover:bg-neutral-200",
                        children: "Choose an image"
                    }, void 0, false, {
                        fileName: "[project]/components/DropZone.js",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-5 text-sm text-fg/45",
                        children: [
                            formats,
                            " • up to ",
                            maxSizeMB,
                            " MB"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DropZone.js",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DropZone.js",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "mt-3 flex items-start gap-2.5 rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        name: "alert",
                        className: "mt-0.5 h-4 w-4 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/DropZone.js",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/components/DropZone.js",
                lineNumber: 96,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DropZone.js",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/GoogleAdSense.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoogleAdSense
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function GoogleAdSense({ client, slot }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!client || !slot) return;
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.error("AdSense initialization failed:", error);
        }
    }, [
        client,
        slot
    ]);
    if (!client || !slot) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ins", {
        className: "adsbygoogle block min-h-[90px] w-full",
        style: {
            display: "block"
        },
        "data-ad-client": client,
        "data-ad-slot": slot,
        "data-ad-format": "auto",
        "data-full-width-responsive": "true"
    }, void 0, false, {
        fileName: "[project]/components/GoogleAdSense.js",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Hero.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icon.js [app-ssr] (ecmascript)");
"use client";
;
;
/** Opens the file picker if the drop zone is showing, otherwise just scrolls to the tool. */ function openPicker() {
    const input = document.getElementById("clyro-file-input");
    if (input) input.click();
    else document.getElementById("tool")?.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "top",
        className: "animate-rise",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-display text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem]",
                children: [
                    "Remove backgrounds.",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/Hero.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    "Keep what matters."
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.js",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-5 max-w-md text-lg leading-relaxed text-fg/65",
                children: "Create clean transparent images in seconds. Free, simple, and designed for everyday image editing."
            }, void 0, false, {
                fileName: "[project]/components/Hero.js",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: openPicker,
                className: "mt-8 hidden items-center gap-2.5 rounded-full bg-white px-7 py-4 text-base font-medium text-black shadow-lift transition hover:-translate-y-0.5 hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:inline-flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        name: "upload",
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.js",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    "Upload an Image"
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.js",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-sm text-fg/50 lg:mt-5",
                children: "No signup required • PNG output • Fast processing"
            }, void 0, false, {
                fileName: "[project]/components/Hero.js",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const paths = {
    upload: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 16V5m0 0L8 9m4-4 4 4"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 4,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 16v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 5,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    download: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M12 4v11m0 0-4-4m4 4 4-4M4 20h16"
    }, void 0, false, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 8,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    refresh: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"
    }, void 0, false, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 9,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    alert: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8v5M12 16v.01"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    check: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "m5 12 5 5L20 7"
    }, void 0, false, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 16,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    menu: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M4 7h16M4 12h16M4 17h16"
    }, void 0, false, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 17,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    close: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M6 6l12 12M18 6 6 18"
    }, void 0, false, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 18,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    plus: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M12 5v14M5 12h14"
    }, void 0, false, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    bolt: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M13 2 4 14h7l-1 8 9-12h-7z"
    }, void 0, false, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 20,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    "circle-check": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m8 12 3 3 5-6"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    user: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "8",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 21c0-4 3.5-6 8-6s8 2 8 6"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "user-slash": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "8",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 21c0-4 3.5-6 8-6s8 2 8 6M3 3l18 18"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    transparent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4",
                y: "4",
                width: "16",
                height: "16",
                rx: "4"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 12h8V4M12 20v-8h8"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    bag: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 8h14l-1 12H6z"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 8V6a3 3 0 0 1 6 0v2"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    hexagon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "m12 3 8 4.5v9L12 21l-8-4.5v-9z"
    }, void 0, false, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 51,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    share: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6",
                cy: "12",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "6",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "18",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    store: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 9l1.5-5h13L20 9"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 9a2.67 2.67 0 0 0 5.33 0 2.67 2.67 0 0 0 5.34 0A2.67 2.67 0 0 0 20 9"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 12v8h14v-8"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    compress: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"
    }, void 0, false, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 67,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    resize: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M4 9V4h5M20 15v5h-5M4 4l6 6M20 20l-6-6"
    }, void 0, false, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 68,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    swap: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M4 8h14l-3-3M20 16H6l3 3"
    }, void 0, false, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 69,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    image: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3.5",
                y: "4.5",
                width: "17",
                height: "15",
                rx: "3"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "10",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m4 17 5-4.5 4 3.5 3-2.5 4 3.5"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    crop: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 3v12a3 3 0 0 0 3 3h12"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 6h12a3 3 0 0 1 3 3v12"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 78,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    rotate: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 11a8 8 0 0 0-14.5-4.5L3 9"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 4v5h5"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 13a8 8 0 0 0 14.5 4.5L21 15"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 20v-5h-5"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    sparkles: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m12 3 1.2 4.3L17 9l-3.8 1.7L12 15l-1.2-4.3L7 9l3.8-1.7z"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7z"
            }, void 0, false, {
                fileName: "[project]/components/Icon.js",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 92,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
function Icon({ name, className = "h-5 w-5", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        className: className,
        ...props,
        children: paths[name]
    }, void 0, false, {
        fileName: "[project]/components/Icon.js",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Logo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.js [app-ssr] (ecmascript)");
;
;
function Logo({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "#top",
        "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].name} home`,
        className: `group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 32 32",
                className: "h-8 w-8",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "32",
                        height: "32",
                        rx: "10",
                        fill: "#FFFFFF"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.js",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22.5 11.2A7.5 7.5 0 1 0 22.5 20.8",
                        fill: "none",
                        stroke: "#000",
                        strokeWidth: "3.2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "22.6",
                        cy: "16",
                        r: "2",
                        fill: "#000",
                        fillOpacity: ".55"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Logo.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-display text-xl font-semibold tracking-tight",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].name
            }, void 0, false, {
                fileName: "[project]/components/Logo.js",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Logo.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Navbar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Logo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Navbar() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 border-b border-fg/5 bg-paper/75 backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Main",
                className: "mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto] items-center px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden items-center gap-1 md:flex",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].nav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    className: "rounded-full px-4 py-2 text-sm text-fg/70 transition-colors hover:bg-fg/5 hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-self-end gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-deep",
                                children: "Free"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "grid h-10 w-10 place-items-center rounded-full text-fg/80 hover:bg-fg/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent md:hidden",
                                "aria-expanded": open,
                                "aria-controls": "mobile-menu",
                                "aria-label": open ? "Close menu" : "Open menu",
                                onClick: ()=>setOpen((v)=>!v),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    name: open ? "close" : "menu"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                id: "mobile-menu",
                className: "border-t border-fg/5 px-5 py-2 md:hidden",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].nav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            onClick: ()=>setOpen(false),
                            className: "block rounded-xl px-3 py-3 text-base text-fg/80 hover:bg-fg/5",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this)
                    }, item.href, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/OtherTools.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OtherTools
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.js [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
const BatchBackgroundRemover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/BatchBackgroundRemover.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const TOOL_INFO = {
    "Batch Background Remover": {
        icon: "transparent",
        description: "Remove backgrounds from up to 10 images in a browser-safe queue.",
        action: "batch-background"
    },
    "Image Compressor": {
        icon: "compress",
        description: "Shrink image size while keeping it looking sharp.",
        action: "compression"
    },
    "Image Resizer": {
        icon: "resize",
        description: "Set exact width and height, then download instantly.",
        action: "resize"
    },
    "JPG to PNG": {
        icon: "swap",
        description: "Convert JPG images to PNG directly in your browser.",
        action: "convert-png"
    },
    "PNG to JPG": {
        icon: "swap",
        description: "Convert PNG images to a lightweight JPG.",
        action: "convert-jpg"
    },
    "WebP Converter": {
        icon: "image",
        description: "Convert common images to WebP for smaller websites.",
        action: "convert-webp"
    },
    "Image Cropper": {
        icon: "crop",
        description: "Crop and frame an image before downloading it.",
        action: "crop"
    },
    "Image Rotator": {
        icon: "rotate",
        description: "Rotate or flip an image without opening another app.",
        action: "rotate"
    },
    "Photo Editor": {
        icon: "sparkles",
        description: "Adjust, filter, add text and build full compositions.",
        action: "soon"
    }
};
function downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    setTimeout(()=>URL.revokeObjectURL(url), 1000);
}
function loadImage(file) {
    return new Promise((resolve, reject)=>{
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = ()=>{
            URL.revokeObjectURL(url);
            resolve(img);
        };
        img.onerror = ()=>{
            URL.revokeObjectURL(url);
            reject(new Error("Could not read this image."));
        };
        img.src = url;
    });
}
function extFor(type) {
    if (type === "image/jpeg") return "jpg";
    if (type === "image/webp") return "webp";
    return "png";
}
function OtherTools() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quality, setQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.82);
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1200);
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(800);
    const [angle, setAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(90);
    const [keepRatio, setKeepRatio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const info = open ? TOOL_INFO[open] : null;
    function close() {
        setOpen(null);
        setFile(null);
        setPreview("");
        setBusy(false);
    }
    function openTool(name) {
        setOpen(name);
        setFile(null);
        setPreview("");
    }
    async function chooseFile(e) {
        const selected = e.target.files?.[0];
        if (!selected) return;
        setFile(selected);
        setPreview(URL.createObjectURL(selected));
        try {
            const img = await loadImage(selected);
            setWidth(img.naturalWidth);
            setHeight(img.naturalHeight);
        } catch  {}
    }
    async function process() {
        if (!file || !info || info.action === "soon") return;
        setBusy(true);
        try {
            const img = await loadImage(file);
            let outW = Number(width) || img.naturalWidth;
            let outH = Number(height) || img.naturalHeight;
            if (info.action === "resize" && keepRatio) {
                const ratio = img.naturalHeight / img.naturalWidth;
                outH = Math.max(1, Math.round(outW * ratio));
            }
            const convertType = info.action === "convert-jpg" ? "image/jpeg" : info.action === "convert-webp" ? "image/webp" : "image/png";
            if (info.action === "compression") {
                outW = img.naturalWidth;
                outH = img.naturalHeight;
            }
            const rotate = info.action === "rotate" ? Number(angle) : 0;
            const swap = rotate === 90 || rotate === 270;
            const canvas = document.createElement("canvas");
            canvas.width = swap ? outH : outW;
            canvas.height = swap ? outW : outH;
            const ctx = canvas.getContext("2d");
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            if (convertType === "image/jpeg") {
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            ctx.save();
            if (rotate) {
                ctx.translate(canvas.width / 2, canvas.height / 2);
                ctx.rotate(rotate * Math.PI / 180);
                ctx.drawImage(img, -outW / 2, -outH / 2, outW, outH);
            } else {
                ctx.drawImage(img, 0, 0, outW, outH);
            }
            ctx.restore();
            const blob = await new Promise((resolve)=>canvas.toBlob(resolve, convertType, info.action === "compression" ? quality : 0.92));
            if (!blob) throw new Error("Export failed.");
            const base = file.name.replace(/\.[^/.]+$/, "");
            const suffix = info.action === "compression" ? "-compressed" : "-clyro";
            downloadBlob(blob, `${base}${suffix}.${extFor(convertType)}`);
        } catch (error) {
            console.error(error);
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "tools",
                "aria-labelledby": "tools-title",
                className: "mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent/80",
                                children: "More tools on the way"
                            }, void 0, false, {
                                fileName: "[project]/components/OtherTools.js",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "tools-title",
                                className: "font-display text-3xl font-semibold tracking-tight sm:text-4xl",
                                children: "All your image tools, opening right here."
                            }, void 0, false, {
                                fileName: "[project]/components/OtherTools.js",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm leading-6 text-fg/55 sm:text-base",
                                children: "Click an app and it opens as a glass workspace. Finish your job, close it, and you are back on CLYRO."
                            }, void 0, false, {
                                fileName: "[project]/components/OtherTools.js",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/OtherTools.js",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4",
                        children: [
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].tools,
                            {
                                icon: "crop",
                                name: "Image Cropper",
                                launched: true
                            },
                            {
                                icon: "rotate",
                                name: "Image Rotator",
                                launched: true
                            },
                            {
                                icon: "sparkles",
                                name: "Photo Editor",
                                launched: false
                            }
                        ].map((t)=>{
                            const data = TOOL_INFO[t.name];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>openTool(t.name),
                                    className: "tool-launch group flex w-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left ring-1 ring-white/[0.03] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_-35px_rgba(124,92,255,.8)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.07] text-fg/70 transition group-hover:scale-105 group-hover:text-fg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                name: data?.icon || t.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/OtherTools.js",
                                                lineNumber: 226,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/OtherTools.js",
                                            lineNumber: 225,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[15px] font-medium leading-snug",
                                                    children: t.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/OtherTools.js",
                                                    lineNumber: 229,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1.5 line-clamp-2 text-xs leading-5 text-fg/45",
                                                    children: data?.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/OtherTools.js",
                                                    lineNumber: 230,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-3 inline-flex rounded-full bg-fg/[0.06] px-2.5 py-1 text-[11px] text-fg/55",
                                                    children: t.launched ? "Open app" : "Coming soon"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/OtherTools.js",
                                                    lineNumber: 231,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/OtherTools.js",
                                            lineNumber: 228,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/OtherTools.js",
                                    lineNumber: 220,
                                    columnNumber: 17
                                }, this)
                            }, t.name, false, {
                                fileName: "[project]/components/OtherTools.js",
                                lineNumber: 219,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/OtherTools.js",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/OtherTools.js",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tool-modal fixed inset-0 z-[80] grid place-items-center p-4 sm:p-8",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": open,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute inset-0 cursor-default bg-black/45 backdrop-blur-md",
                        "aria-label": "Close",
                        onClick: close
                    }, void 0, false, {
                        fileName: "[project]/components/OtherTools.js",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `tool-window relative z-10 w-full overflow-hidden rounded-[28px] border border-white/20 bg-[#17151d]/90 shadow-[0_40px_120px_-35px_rgba(0,0,0,.9)] backdrop-blur-3xl ${info.action === "batch-background" ? "max-w-5xl" : "max-w-2xl"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-14 items-center gap-3 border-b border-white/10 px-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: close,
                                                "aria-label": "Close",
                                                className: "h-3 w-3 rounded-full bg-[#ff5f57]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/OtherTools.js",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-3 w-3 rounded-full bg-[#febc2e]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/OtherTools.js",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-3 w-3 rounded-full bg-[#28c840]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/OtherTools.js",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/OtherTools.js",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 text-center text-sm font-medium text-white/80",
                                        children: open
                                    }, void 0, false, {
                                        fileName: "[project]/components/OtherTools.js",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/OtherTools.js",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/OtherTools.js",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-[75vh] overflow-y-auto p-5 sm:p-7",
                                children: info.action === "batch-background" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BatchBackgroundRemover, {}, void 0, false, {
                                    fileName: "[project]/components/OtherTools.js",
                                    lineNumber: 258,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs uppercase tracking-[0.18em] text-white/35",
                                                    children: "CLYRO mini app"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/OtherTools.js",
                                                    lineNumber: 262,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-1 text-2xl font-semibold text-white",
                                                    children: open
                                                }, void 0, false, {
                                                    fileName: "[project]/components/OtherTools.js",
                                                    lineNumber: 263,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-sm leading-6 text-white/50",
                                                    children: info.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/OtherTools.js",
                                                    lineNumber: 264,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/OtherTools.js",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this),
                                        info.action === "soon" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white/[0.07] text-white/70",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        name: "sparkles"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/OtherTools.js",
                                                        lineNumber: 269,
                                                        columnNumber: 120
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/OtherTools.js",
                                                    lineNumber: 269,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "mt-5 text-lg font-medium text-white",
                                                    children: "This app is on the way."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/OtherTools.js",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mx-auto mt-2 max-w-sm text-sm leading-6 text-white/45",
                                                    children: "The workspace will open here in a future CLYRO update. No new window, no redirect."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/OtherTools.js",
                                                    lineNumber: 271,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: close,
                                                    className: "mt-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black",
                                                    children: "Back to CLYRO"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/OtherTools.js",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/OtherTools.js",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex min-h-56 items-center justify-center rounded-3xl border border-white/10 bg-black/20 p-5",
                                                    children: preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: preview,
                                                        alt: "Selected",
                                                        className: "max-h-64 max-w-full rounded-2xl object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/OtherTools.js",
                                                        lineNumber: 278,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>inputRef.current?.click(),
                                                        className: "rounded-2xl border border-dashed border-white/15 px-8 py-10 text-center text-white/55 transition hover:border-white/30 hover:bg-white/[0.03]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-base text-white/80",
                                                                children: "Choose an image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/OtherTools.js",
                                                                lineNumber: 281,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 block text-xs",
                                                                children: "Everything runs in this tab."
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/OtherTools.js",
                                                                lineNumber: 282,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/OtherTools.js",
                                                        lineNumber: 280,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/OtherTools.js",
                                                    lineNumber: 276,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: inputRef,
                                                    type: "file",
                                                    accept: "image/*",
                                                    className: "hidden",
                                                    onChange: chooseFile
                                                }, void 0, false, {
                                                    fileName: "[project]/components/OtherTools.js",
                                                    lineNumber: 287,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-5 flex flex-wrap items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>inputRef.current?.click(),
                                                            className: "rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/80",
                                                            children: "Choose image"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/OtherTools.js",
                                                            lineNumber: 290,
                                                            columnNumber: 21
                                                        }, this),
                                                        info.action === "compression" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-white/60",
                                                            children: [
                                                                "Quality ",
                                                                Math.round(quality * 100),
                                                                "%",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "range",
                                                                    min: "0.3",
                                                                    max: "1",
                                                                    step: "0.01",
                                                                    value: quality,
                                                                    onChange: (e)=>setQuality(Number(e.target.value))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/OtherTools.js",
                                                                    lineNumber: 295,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/OtherTools.js",
                                                            lineNumber: 293,
                                                            columnNumber: 23
                                                        }, this),
                                                        info.action === "resize" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-white/55",
                                                                    children: [
                                                                        "W ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            className: "w-20 bg-transparent pl-2 text-white outline-none",
                                                                            type: "number",
                                                                            value: width,
                                                                            onChange: (e)=>setWidth(e.target.value)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/OtherTools.js",
                                                                            lineNumber: 301,
                                                                            columnNumber: 130
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/OtherTools.js",
                                                                    lineNumber: 301,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-white/55",
                                                                    children: [
                                                                        "H ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            className: "w-20 bg-transparent pl-2 text-white outline-none",
                                                                            type: "number",
                                                                            value: height,
                                                                            onChange: (e)=>setHeight(e.target.value)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/OtherTools.js",
                                                                            lineNumber: 302,
                                                                            columnNumber: 130
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/OtherTools.js",
                                                                    lineNumber: 302,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setKeepRatio((v)=>!v),
                                                                    className: `rounded-full border px-3 py-2 text-xs ${keepRatio ? "border-white/25 bg-white/10 text-white" : "border-white/10 text-white/45"}`,
                                                                    children: "Keep ratio"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/OtherTools.js",
                                                                    lineNumber: 303,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/OtherTools.js",
                                                            lineNumber: 300,
                                                            columnNumber: 23
                                                        }, this),
                                                        info.action === "rotate" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-white/55",
                                                            children: [
                                                                "Rotate ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: angle,
                                                                    onChange: (e)=>setAngle(Number(e.target.value)),
                                                                    className: "ml-2 bg-transparent text-white outline-none",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "90",
                                                                            children: "90°"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/OtherTools.js",
                                                                            lineNumber: 308,
                                                                            columnNumber: 262
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "180",
                                                                            children: "180°"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/OtherTools.js",
                                                                            lineNumber: 308,
                                                                            columnNumber: 293
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "270",
                                                                            children: "270°"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/OtherTools.js",
                                                                            lineNumber: 308,
                                                                            columnNumber: 326
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/OtherTools.js",
                                                                    lineNumber: 308,
                                                                    columnNumber: 133
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/OtherTools.js",
                                                            lineNumber: 308,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/OtherTools.js",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 flex justify-end gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: close,
                                                            className: "rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/60",
                                                            children: "Close"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/OtherTools.js",
                                                            lineNumber: 313,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            disabled: !file || busy,
                                                            onClick: process,
                                                            className: "rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-40",
                                                            children: busy ? "Working…" : "Download"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/OtherTools.js",
                                                            lineNumber: 314,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/OtherTools.js",
                                                    lineNumber: 312,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/OtherTools.js",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/OtherTools.js",
                                    lineNumber: 260,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/OtherTools.js",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/OtherTools.js",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/OtherTools.js",
                lineNumber: 243,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/OtherTools.js",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ProcessingView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessingView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ProcessingView({ originalUrl, progress, stage, onCancel }) {
    const pct = progress == null ? null : Math.round(progress * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-[380px] flex-col items-center justify-center gap-7 rounded-[1.5rem] bg-white/[0.04] px-6 py-8 text-center sm:min-h-[440px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-2xl shadow-lift",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: originalUrl,
                        alt: "Your uploaded image",
                        className: "max-h-52 w-auto max-w-full object-contain sm:max-h-64"
                    }, void 0, false, {
                        fileName: "[project]/components/ProcessingView.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/30"
                    }, void 0, false, {
                        fileName: "[project]/components/ProcessingView.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": "true",
                        className: "absolute inset-0 animate-scan border-b-2 border-accent bg-gradient-to-b from-transparent via-transparent to-accent/30"
                    }, void 0, false, {
                        fileName: "[project]/components/ProcessingView.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProcessingView.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-2xl font-semibold tracking-tight",
                        children: "Removing background..."
                    }, void 0, false, {
                        fileName: "[project]/components/ProcessingView.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-sm text-fg/55",
                        children: stage === "loading" ? "Getting ready. The first image takes a little longer." : "This usually takes a few seconds."
                    }, void 0, false, {
                        fileName: "[project]/components/ProcessingView.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProcessingView.js",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-xs",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "progressbar",
                    "aria-label": "Background removal progress",
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-valuenow": pct ?? undefined,
                    className: "h-1.5 overflow-hidden rounded-full bg-fg/10",
                    children: pct == null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full w-1/3 animate-indeterminate rounded-full bg-accent"
                    }, void 0, false, {
                        fileName: "[project]/components/ProcessingView.js",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full rounded-full bg-accent transition-[width] duration-300 ease-out",
                        style: {
                            width: `${pct}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ProcessingView.js",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ProcessingView.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProcessingView.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onCancel,
                className: "rounded-full px-4 py-2 text-sm text-fg/55 transition hover:bg-fg/5 hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent",
                children: "Cancel"
            }, void 0, false, {
                fileName: "[project]/components/ProcessingView.js",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProcessingView.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/RefinePopup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RefinePopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icon.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function loadImage(url) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve(img);
        img.onerror = ()=>reject(new Error("Could not load image."));
        img.src = url;
    });
}
function RefinePopup({ originalUrl, resultUrl, onApply, onClose }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const originalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const undoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const drawingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [tool, setTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("remove");
    const [brushSize, setBrushSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(48);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        async function init() {
            const [original, cutout] = await Promise.all([
                loadImage(originalUrl),
                loadImage(resultUrl)
            ]);
            if (cancelled) return;
            originalRef.current = original;
            const canvas = canvasRef.current;
            canvas.width = cutout.naturalWidth || cutout.width;
            canvas.height = cutout.naturalHeight || cutout.height;
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(cutout, 0, 0, canvas.width, canvas.height);
            setReady(true);
        }
        init().catch(console.error);
        return ()=>{
            cancelled = true;
        };
    }, [
        originalUrl,
        resultUrl
    ]);
    function snapshot() {
        const canvas = canvasRef.current;
        undoRef.current.push(canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height));
        if (undoRef.current.length > 8) undoRef.current.shift();
    }
    function undo() {
        const canvas = canvasRef.current;
        const previous = undoRef.current.pop();
        if (!previous) return;
        canvas.getContext("2d").putImageData(previous, 0, 0);
    }
    function pointFromEvent(e) {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left) / rect.width * canvas.width,
            y: (e.clientY - rect.top) / rect.height * canvas.height
        };
    }
    function paint(e) {
        if (!ready) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const { x, y } = pointFromEvent(e);
        const radius = brushSize / 2 * (canvas.width / canvas.getBoundingClientRect().width);
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.clip();
        if (tool === "remove") {
            ctx.globalCompositeOperation = "destination-out";
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
        } else {
            ctx.globalCompositeOperation = "source-over";
            ctx.drawImage(originalRef.current, 0, 0, canvas.width, canvas.height);
        }
        ctx.restore();
    }
    function start(e) {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        snapshot();
        drawingRef.current = true;
        e.currentTarget.setPointerCapture?.(e.pointerId);
        paint(e);
    }
    function move(e) {
        if (drawingRef.current) paint(e);
    }
    function stop(e) {
        drawingRef.current = false;
        e.currentTarget.releasePointerCapture?.(e.pointerId);
    }
    function apply() {
        const canvas = canvasRef.current;
        onApply(canvas.toDataURL("image/png"));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-30 flex flex-col rounded-2xl bg-black/85 p-3 backdrop-blur-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold",
                                children: "Refine cutout"
                            }, void 0, false, {
                                fileName: "[project]/components/RefinePopup.js",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-white/45",
                                children: "Paint over areas to remove or restore them."
                            }, void 0, false, {
                                fileName: "[project]/components/RefinePopup.js",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RefinePopup.js",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/70 hover:bg-white/15 hover:text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            name: "close",
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/RefinePopup.js",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RefinePopup.js",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RefinePopup.js",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: wrapRef,
                className: "relative min-h-0 flex-1 overflow-hidden rounded-xl checker ring-1 ring-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        onPointerDown: start,
                        onPointerMove: move,
                        onPointerUp: stop,
                        onPointerCancel: stop,
                        className: "absolute inset-0 h-full w-full touch-none object-contain",
                        style: {
                            opacity: ready ? 1 : 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/RefinePopup.js",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    !ready && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 grid place-items-center text-sm text-white/50",
                        children: "Preparing refine tool…"
                    }, void 0, false, {
                        fileName: "[project]/components/RefinePopup.js",
                        lineNumber: 132,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RefinePopup.js",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] p-2 backdrop-blur-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setTool("remove"),
                        className: `rounded-full px-3 py-2 text-xs font-medium ${tool === "remove" ? "bg-white text-black" : "bg-white/10 text-white/70 hover:text-white"}`,
                        children: "✕ Remove"
                    }, void 0, false, {
                        fileName: "[project]/components/RefinePopup.js",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setTool("restore"),
                        className: `rounded-full px-3 py-2 text-xs font-medium ${tool === "restore" ? "bg-white text-black" : "bg-white/10 text-white/70 hover:text-white"}`,
                        children: "↺ Restore"
                    }, void 0, false, {
                        fileName: "[project]/components/RefinePopup.js",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: undo,
                        disabled: !undoRef.current.length,
                        className: "rounded-full bg-white/10 px-3 py-2 text-xs text-white/70 hover:text-white disabled:opacity-30",
                        children: "Undo"
                    }, void 0, false, {
                        fileName: "[project]/components/RefinePopup.js",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex min-w-[150px] items-center gap-2 px-2 text-xs text-white/55",
                        children: [
                            "Size",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "12",
                                max: "180",
                                value: brushSize,
                                onChange: (e)=>setBrushSize(Number(e.target.value)),
                                className: "flex-1"
                            }, void 0, false, {
                                fileName: "[project]/components/RefinePopup.js",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RefinePopup.js",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "rounded-full px-3 py-2 text-xs text-white/60 hover:text-white",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/components/RefinePopup.js",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: apply,
                        disabled: !ready,
                        className: "rounded-full bg-white px-4 py-2 text-xs font-semibold text-black disabled:opacity-50",
                        children: "Apply"
                    }, void 0, false, {
                        fileName: "[project]/components/RefinePopup.js",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RefinePopup.js",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RefinePopup.js",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ResultView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BackgroundPopup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BackgroundPopup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RefinePopup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RefinePopup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/backgrounds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$exportImage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/exportImage.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ResultView({ originalUrl, resultUrl, fileName, onReset }) {
    const [bg, setBg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NONE"]);
    const [popupOpen, setPopupOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [refineOpen, setRefineOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editedUrl, setEditedUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(resultUrl);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [transform, setTransform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50,
        width: 62
    });
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setEditedUrl(resultUrl), [
        resultUrl
    ]);
    const base = (fileName || "image").replace(/\.[^.]+$/, "");
    const downloadName = `${base}-clyro.png`;
    const transparent = bg.type === "none";
    function startDrag(e) {
        if (e.button !== 0) return;
        const stage = stageRef.current?.getBoundingClientRect();
        if (!stage) return;
        dragRef.current = {
            startX: e.clientX,
            startY: e.clientY,
            x: transform.x,
            y: transform.y,
            stage
        };
        e.currentTarget.setPointerCapture?.(e.pointerId);
    }
    function drag(e) {
        const d = dragRef.current;
        if (!d) return;
        setTransform((t)=>({
                ...t,
                x: Math.max(0, Math.min(100, d.x + (e.clientX - d.startX) / d.stage.width * 100)),
                y: Math.max(0, Math.min(100, d.y + (e.clientY - d.startY) / d.stage.height * 100))
            }));
    }
    function stopDrag() {
        dragRef.current = null;
    }
    function resize(e) {
        e.stopPropagation();
        const stage = stageRef.current?.getBoundingClientRect();
        if (!stage) return;
        const startWidth = transform.width;
        const startX = e.clientX;
        const onMove = (ev)=>{
            const next = startWidth + (ev.clientX - startX) / stage.width * 100;
            setTransform((t)=>({
                    ...t,
                    width: Math.max(12, Math.min(100, next))
                }));
        };
        const onUp = ()=>{
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerup", onUp);
        };
        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp, {
            once: true
        });
    }
    async function download() {
        setBusy(true);
        setError(null);
        try {
            const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$exportImage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderWithBackground"])(editedUrl, bg, transform);
            const a = document.createElement("a");
            a.href = URL.createObjectURL(url);
            a.download = downloadName;
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(()=>URL.revokeObjectURL(a.href), 1000);
        } catch (err) {
            console.error(err);
            setError("We couldn't prepare that download. Try again.");
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-rise rounded-[1.5rem] bg-white/[0.04] p-3 sm:p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 sm:grid-cols-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "min-w-0 sm:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-[240px] items-center justify-center overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/10 sm:h-[440px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: originalUrl,
                                    alt: "Original image",
                                    className: "h-full w-full object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/components/ResultView.js",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ResultView.js",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                className: "mt-2.5 text-center text-sm text-white/55",
                                children: "Original"
                            }, void 0, false, {
                                fileName: "[project]/components/ResultView.js",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ResultView.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "min-w-0 sm:col-span-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: stageRef,
                                className: `relative h-[430px] overflow-hidden rounded-2xl ring-1 ring-white/10 sm:h-[440px] ${transparent ? "checker" : ""}`,
                                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backgroundStyle"])(bg),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute cursor-grab touch-none active:cursor-grabbing",
                                        style: {
                                            left: `${transform.x}%`,
                                            top: `${transform.y}%`,
                                            width: `${transform.width}%`,
                                            transform: "translate(-50%, -50%)"
                                        },
                                        onPointerDown: startDrag,
                                        onPointerMove: drag,
                                        onPointerUp: stopDrag,
                                        onPointerCancel: stopDrag,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: editedUrl,
                                                alt: "Image with the background removed",
                                                className: "block h-auto w-full select-none",
                                                draggable: "false"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.js",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-label": "Resize cutout",
                                                onPointerDown: resize,
                                                className: "absolute -bottom-2 -right-2 h-5 w-5 cursor-nwse-resize rounded-full border-2 border-white bg-black/80 shadow-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.js",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ResultView.js",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-3 top-3 z-10 flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setRefineOpen(true),
                                                className: "rounded-full border border-white/15 bg-black/55 px-3 py-2 text-xs font-medium text-white backdrop-blur-xl hover:bg-black/75",
                                                children: "✦ Refine"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.js",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setTransform({
                                                        x: 50,
                                                        y: 50,
                                                        width: 62
                                                    }),
                                                className: "rounded-full border border-white/15 bg-black/55 px-3 py-2 text-xs text-white/70 backdrop-blur-xl hover:text-white",
                                                children: "Reset position"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.js",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ResultView.js",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    refineOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RefinePopup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        originalUrl: originalUrl,
                                        resultUrl: editedUrl,
                                        onApply: (url)=>{
                                            setEditedUrl(url);
                                            setRefineOpen(false);
                                        },
                                        onClose: ()=>setRefineOpen(false)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.js",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this) : popupOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BackgroundPopup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        value: bg,
                                        onChange: setBg,
                                        onClose: ()=>setPopupOpen(false)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.js",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setPopupOpen(true),
                                        className: "absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2.5 text-sm font-medium backdrop-blur-xl transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                name: "image",
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.js",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            " Change background"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ResultView.js",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ResultView.js",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                className: "mt-2.5 text-center text-sm text-white/55",
                                children: "Drag the cutout to move it • drag the corner to resize"
                            }, void 0, false, {
                                fileName: "[project]/components/ResultView.js",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ResultView.js",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ResultView.js",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: download,
                        disabled: busy,
                        className: "inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-medium text-black shadow-lift transition hover:-translate-y-0.5 hover:bg-neutral-200 disabled:opacity-60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                name: "download"
                            }, void 0, false, {
                                fileName: "[project]/components/ResultView.js",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            " ",
                            busy ? "Preparing..." : "Download PNG"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ResultView.js",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onReset,
                        className: "inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-medium text-white/70 transition hover:bg-white/10 hover:text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                name: "refresh",
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ResultView.js",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            " Remove another background"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ResultView.js",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ResultView.js",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "mt-3 text-center text-sm text-red-300",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/ResultView.js",
                lineNumber: 139,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ResultView.js",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/UploadCard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DropZone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DropZone.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProcessingView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProcessingView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ResultView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ResultView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useBackgroundRemover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useBackgroundRemover.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const announcements = {
    processing: "Removing background.",
    success: "Background removed. Your PNG is ready to download."
};
function UploadCard() {
    const remover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useBackgroundRemover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBackgroundRemover"])();
    const { status } = remover;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "tool",
        className: "scroll-mt-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass rounded-[2rem] p-2.5 shadow-card sm:p-3.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "sr-only",
                    "aria-live": "polite",
                    children: announcements[status] ?? ""
                }, void 0, false, {
                    fileName: "[project]/components/UploadCard.js",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                (status === "idle" || status === "error") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DropZone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onFile: remover.process,
                    error: remover.error
                }, void 0, false, {
                    fileName: "[project]/components/UploadCard.js",
                    lineNumber: 26,
                    columnNumber: 11
                }, this),
                status === "processing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProcessingView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    originalUrl: remover.originalUrl,
                    progress: remover.progress,
                    stage: remover.stage,
                    onCancel: remover.reset
                }, void 0, false, {
                    fileName: "[project]/components/UploadCard.js",
                    lineNumber: 30,
                    columnNumber: 11
                }, this),
                status === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ResultView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    originalUrl: remover.originalUrl,
                    resultUrl: remover.resultUrl,
                    fileName: remover.fileName,
                    onReset: remover.reset
                }, void 0, false, {
                    fileName: "[project]/components/UploadCard.js",
                    lineNumber: 39,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/UploadCard.js",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/UploadCard.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/backgrounds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Background options for the result image.
 *
 * A background value is one of:
 *   { type: "none" }
 *   { type: "solid", color: "#rrggbb" }
 *   { type: "gradient", id, angle, stops: ["#..", "#.."] }
 *   { type: "image", url, name }
 *
 * The same value drives both the on-screen preview (CSS) and the
 * downloaded file (canvas), so what you see is what you get.
 */ __turbopack_context__.s([
    "NONE",
    ()=>NONE,
    "backgroundStyle",
    ()=>backgroundStyle,
    "drawBackground",
    ()=>drawBackground,
    "gradientCss",
    ()=>gradientCss,
    "gradients",
    ()=>gradients,
    "hslToHex",
    ()=>hslToHex,
    "isSameBackground",
    ()=>isSameBackground,
    "solids",
    ()=>solids
]);
const NONE = {
    type: "none"
};
const solids = [
    {
        name: "White",
        color: "#ffffff"
    },
    {
        name: "Light gray",
        color: "#e5e5e5"
    },
    {
        name: "Gray",
        color: "#737373"
    },
    {
        name: "Black",
        color: "#000000"
    },
    {
        name: "Red",
        color: "#ef4444"
    },
    {
        name: "Orange",
        color: "#f97316"
    },
    {
        name: "Yellow",
        color: "#facc15"
    },
    {
        name: "Green",
        color: "#22c55e"
    },
    {
        name: "Blue",
        color: "#3b82f6"
    },
    {
        name: "Violet",
        color: "#8b5cf6"
    },
    {
        name: "Pink",
        color: "#ec4899"
    }
];
const gradients = [
    {
        id: "graphite",
        name: "Graphite",
        angle: 160,
        stops: [
            "#0a0a0a",
            "#525252"
        ]
    },
    {
        id: "silver",
        name: "Silver",
        angle: 160,
        stops: [
            "#ffffff",
            "#a3a3a3"
        ]
    },
    {
        id: "sunset",
        name: "Sunset",
        angle: 135,
        stops: [
            "#f97316",
            "#ec4899"
        ]
    },
    {
        id: "ocean",
        name: "Ocean",
        angle: 135,
        stops: [
            "#06b6d4",
            "#3b82f6"
        ]
    },
    {
        id: "aurora",
        name: "Aurora",
        angle: 135,
        stops: [
            "#22c55e",
            "#3b82f6"
        ]
    },
    {
        id: "dusk",
        name: "Dusk",
        angle: 135,
        stops: [
            "#8b5cf6",
            "#ec4899"
        ]
    },
    {
        id: "peach",
        name: "Peach",
        angle: 135,
        stops: [
            "#fde68a",
            "#fca5a5"
        ]
    },
    {
        id: "midnight",
        name: "Midnight",
        angle: 135,
        stops: [
            "#1e1b4b",
            "#4338ca"
        ]
    }
];
function gradientCss(g) {
    return `linear-gradient(${g.angle}deg, ${g.stops.join(", ")})`;
}
function backgroundStyle(bg) {
    if (bg.type === "solid") return {
        background: bg.color
    };
    if (bg.type === "gradient") return {
        backgroundImage: gradientCss(bg)
    };
    if (bg.type === "image") {
        return {
            backgroundImage: `url("${bg.url}")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        };
    }
    return undefined;
}
function isSameBackground(a, b) {
    if (a.type !== b.type) return false;
    if (a.type === "solid") return a.color.toLowerCase() === b.color.toLowerCase();
    if (a.type === "gradient") return a.id === b.id;
    return true;
}
function drawBackground(ctx, w, h, bg) {
    if (bg.type === "solid") {
        ctx.fillStyle = bg.color;
        ctx.fillRect(0, 0, w, h);
    } else if (bg.type === "gradient") {
        const rad = bg.angle * Math.PI / 180;
        const dx = Math.sin(rad);
        const dy = -Math.cos(rad);
        const len = Math.abs(w * dx) + Math.abs(h * dy);
        const cx = w / 2;
        const cy = h / 2;
        const grad = ctx.createLinearGradient(cx - dx * len / 2, cy - dy * len / 2, cx + dx * len / 2, cy + dy * len / 2);
        bg.stops.forEach((color, i)=>grad.addColorStop(i / (bg.stops.length - 1), color));
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
    }
}
function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    const k = (n)=>(n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n)=>l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const hex = (x)=>Math.round(x * 255).toString(16).padStart(2, "0");
    return `#${hex(f(0))}${hex(f(8))}${hex(f(4))}`;
}
}),
"[project]/lib/config.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Everything editable about the site lives here: copy, limits, ad settings, links.
 * Icon values are keys from components/Icon.js.
 */ __turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: "CLYRO.IMAGES",
    contactEmail: "contacts-clyroimages@gmail.com",
    upload: {
        maxSizeMB: 10,
        // MIME type -> label shown to people
        accept: {
            "image/jpeg": "JPG",
            "image/png": "PNG",
            "image/webp": "WebP"
        }
    },
    /**
   * Advertising. One quiet slot sits below the tool, never inside it and never
   * while an image is processing. Set `enabled: true` and render your ad
   * network's code as children of <AdSlot /> in app/page.js.
   */ ads: {
        // Ads activate automatically when both values are supplied in production:
        // NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx
        // NEXT_PUBLIC_ADSENSE_SLOT=1234567890
        clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "",
        slotId: process.env.NEXT_PUBLIC_ADSENSE_SLOT || "",
        enabled: Boolean(process.env.NEXT_PUBLIC_ADSENSE_CLIENT && process.env.NEXT_PUBLIC_ADSENSE_SLOT),
        label: "Advertisement",
        // Keep the reserved placeholder during setup so the layout does not jump.
        showPlaceholder: true
    },
    nav: [
        {
            label: "Background Remover",
            href: "#tool"
        },
        {
            label: "Image Tools",
            href: "#tools"
        },
        {
            label: "How It Works",
            href: "#how-it-works"
        }
    ],
    features: [
        {
            icon: "circle-check",
            title: "Free to use",
            text: "Remove as many backgrounds as you need at no cost."
        },
        {
            icon: "user-slash",
            title: "No signup required",
            text: "Open the page, add an image, download the result."
        },
        {
            icon: "transparent",
            title: "Transparent PNG",
            text: "Keep it transparent, or swap in a color or gradient before you download."
        },
        {
            icon: "bolt",
            title: "Fast processing",
            text: "Most images are ready in a few seconds."
        }
    ],
    steps: [
        {
            title: "Upload",
            text: "Drop in a JPG, PNG or WebP image."
        },
        {
            title: "Remove",
            text: "CLYRO cuts out the background automatically."
        },
        {
            title: "Download",
            text: "Pick a new background if you like, then save your PNG."
        }
    ],
    useCases: [
        {
            icon: "bag",
            title: "Product photos",
            text: "Isolate products on a clean, consistent backdrop for listings and catalogs."
        },
        {
            icon: "user",
            title: "Profile pictures",
            text: "Lift yourself out of a busy photo and drop in a color that suits you."
        },
        {
            icon: "hexagon",
            title: "Logos",
            text: "Strip the white box from a logo so it sits cleanly on any page."
        },
        {
            icon: "share",
            title: "Social media",
            text: "Build posts, thumbnails and stories around a sharp cutout."
        },
        {
            icon: "store",
            title: "Online stores",
            text: "Keep every item in your shop looking uniform without a studio."
        }
    ],
    tools: [
        {
            icon: "transparent",
            name: "Batch Background Remover",
            launched: true
        },
        {
            icon: "compress",
            name: "Image Compressor",
            launched: true
        },
        {
            icon: "resize",
            name: "Image Resizer",
            launched: true
        },
        {
            icon: "swap",
            name: "JPG to PNG",
            launched: true
        },
        {
            icon: "swap",
            name: "PNG to JPG",
            launched: true
        },
        {
            icon: "image",
            name: "WebP Converter",
            launched: true
        }
    ],
    // Keep answers accurate for your real deployment. Edit freely.
    faqs: [
        {
            q: "Is the background remover free?",
            a: "Yes. You can remove backgrounds and download the results without paying."
        },
        {
            q: "What image formats are supported?",
            a: "You can upload JPG, PNG and WebP images up to 10 MB. Results are downloaded as PNG files with a transparent background."
        },
        {
            q: "Does the downloaded image have a watermark?",
            a: "No. Your PNG is exactly the cutout you see in the preview."
        },
        {
            q: "Do I need an account?",
            a: "No. There is nothing to sign up for. Add an image and download the result."
        },
        {
            q: "What happens to my uploaded image?",
            a: "Your image is processed to create the transparent result. For details on how images are handled and how long they are kept, read our Privacy page."
        },
        {
            q: "Can I use the result commercially?",
            a: "You are responsible for having the rights to any image you upload. See our Terms for how results may be used."
        }
    ],
    footer: {
        product: [
            {
                label: "Background Remover",
                href: "#tool"
            },
            {
                label: "Image Tools",
                href: "#tools"
            }
        ],
        company: [
            {
                label: "Privacy",
                href: "/privacy"
            },
            {
                label: "Terms",
                href: "/terms"
            },
            {
                label: "Contact",
                href: "/contact"
            }
        ]
    }
};
}),
"[project]/lib/exportImage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderWithBackground",
    ()=>renderWithBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/backgrounds.js [app-ssr] (ecmascript)");
;
function loadImage(url) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve(img);
        img.onerror = ()=>reject(new Error("Could not load the image."));
        img.src = url;
    });
}
function drawCover(ctx, img, w, h) {
    const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
}
async function renderWithBackground(imageUrl, bg, transform = {
    x: 50,
    y: 50,
    width: 100
}) {
    const img = await loadImage(imageUrl);
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    if (bg.type === "image") {
        const background = await loadImage(bg.url);
        drawCover(ctx, background, canvas.width, canvas.height);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$backgrounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawBackground"])(ctx, canvas.width, canvas.height, bg);
    }
    const targetWidth = canvas.width * (transform.width / 100);
    const targetHeight = targetWidth * (img.naturalHeight / img.naturalWidth);
    const x = canvas.width * (transform.x / 100) - targetWidth / 2;
    const y = canvas.height * (transform.y / 100) - targetHeight / 2;
    ctx.drawImage(img, x, y, targetWidth, targetHeight);
    return new Promise((resolve, reject)=>{
        canvas.toBlob((blob)=>blob ? resolve(blob) : reject(new Error("Export failed.")), "image/png");
    });
}
}),
"[project]/lib/removeBackground.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * THE ONLY FILE THAT KNOWS HOW BACKGROUNDS ARE REMOVED.
 *
 * Contract:
 *   removeBackground(file: File, options?: { onProgress?: (fraction, stage) => void }) => Promise<Blob>
 *
 *   - `fraction` is 0..1
 *   - `stage` is "loading" (fetching the model, first run only) or "processing"
 *   - resolves with a transparent PNG Blob
 *
 * The default implementation runs entirely in the browser using
 * @imgly/background-removal. Check that library's license terms before using it
 * commercially. To use your own backend instead, replace the body with the
 * server example at the bottom of this file. Nothing else in the UI changes.
 */ __turbopack_context__.s([
    "removeBackground",
    ()=>removeBackground
]);
async function removeBackground(file, { onProgress } = {}) {
    const { removeBackground: run } = await __turbopack_context__.A("[project]/node_modules/@imgly/background-removal/dist/index.mjs [app-ssr] (ecmascript, async loader)");
    // Model files arrive as several downloads; sum them for one smooth number.
    const downloads = new Map();
    return run(file, {
        output: {
            format: "image/png"
        },
        progress: (key, current, total)=>{
            if (!onProgress || !total) return;
            if (key.startsWith("fetch:")) {
                downloads.set(key, {
                    current,
                    total
                });
                let c = 0;
                let t = 0;
                downloads.forEach((d)=>{
                    c += d.current;
                    t += d.total;
                });
                onProgress(0.8 * (c / t), "loading");
            } else {
                onProgress(0.8 + 0.2 * (current / total), "processing");
            }
        }
    });
} /* ---------------------------------------------------------------------------
 * Server-side alternative (POST to your own API route):
 *
 * export async function removeBackground(file, { onProgress } = {}) {
 *   const body = new FormData();
 *   body.append("image", file);
 *   const res = await fetch("/api/remove-background", { method: "POST", body });
 *   if (!res.ok) throw new Error("Background removal failed");
 *   onProgress?.(1, "processing");
 *   return res.blob(); // must be a PNG with alpha
 * }
 * ------------------------------------------------------------------------- */ 
}),
"[project]/lib/useBackgroundRemover.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBackgroundRemover",
    ()=>useBackgroundRemover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$removeBackground$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/removeBackground.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validateImage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validateImage.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const initial = {
    status: "idle",
    progress: null,
    stage: null,
    error: null,
    fileName: "",
    originalUrl: null,
    resultUrl: null
};
function useBackgroundRemover() {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial);
    const urls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const runId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const revokeAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        urls.current.forEach((u)=>URL.revokeObjectURL(u));
        urls.current = [];
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>revokeAll, [
        revokeAll
    ]);
    const process = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (file)=>{
        const problem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validateImage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateImage"])(file);
        if (problem) {
            runId.current++;
            revokeAll();
            setState({
                ...initial,
                status: "error",
                error: problem
            });
            return;
        }
        revokeAll();
        const id = ++runId.current;
        const originalUrl = URL.createObjectURL(file);
        urls.current.push(originalUrl);
        setState({
            ...initial,
            status: "processing",
            fileName: file.name,
            originalUrl
        });
        try {
            const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$removeBackground$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeBackground"])(file, {
                onProgress: (progress, stage)=>{
                    if (id === runId.current) setState((s)=>({
                            ...s,
                            progress,
                            stage
                        }));
                }
            });
            if (id !== runId.current) return; // cancelled
            const resultUrl = URL.createObjectURL(blob);
            urls.current.push(resultUrl);
            setState((s)=>({
                    ...s,
                    status: "success",
                    progress: 1,
                    resultUrl
                }));
        } catch (err) {
            if (id !== runId.current) return;
            console.error(err);
            revokeAll();
            setState({
                ...initial,
                status: "error",
                error: "We couldn't remove the background from that image. Try a different file."
            });
        }
    }, [
        revokeAll
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        runId.current++;
        revokeAll();
        setState(initial);
    }, [
        revokeAll
    ]);
    return {
        ...state,
        process,
        reset
    };
}
}),
"[project]/lib/validateImage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateImage",
    ()=>validateImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.js [app-ssr] (ecmascript)");
;
function validateImage(file) {
    const { accept, maxSizeMB } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].upload;
    if (!file) return "No file was selected.";
    if (!accept[file.type]) {
        const list = new Intl.ListFormat("en", {
            type: "disjunction"
        }).format(Object.values(accept));
        return `That file type isn't supported. Upload a ${list} image.`;
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
        return `That image is larger than ${maxSizeMB} MB. Choose a smaller file.`;
    }
    return null;
}
}),
];

//# sourceMappingURL=_0nrjhzf._.js.map