(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/BatchBackgroundRemover.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BatchBackgroundRemover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$removeBackground$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/removeBackground.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validateImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validateImage.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MAX_IMAGES = 10;
const MAX_CONCURRENT_JOBS = 2;
function formatFileSize(bytes) {
    if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function outputName(fileName) {
    const base = fileName.replace(/\.[^/.]+$/, "") || "image";
    return `${base}-no-background.png`;
}
function uniqueName(name, usedNames) {
    const lastDot = name.lastIndexOf(".");
    const base = lastDot === -1 ? name : name.slice(0, lastDot);
    const extension = lastDot === -1 ? "" : name.slice(lastDot);
    let candidate = name;
    let count = 2;
    while(usedNames.has(candidate)){
        candidate = `${base}-${count}${extension}`;
        count += 1;
    }
    usedNames.add(candidate);
    return candidate;
}
function downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = name;
    anchor.click();
    window.setTimeout(()=>URL.revokeObjectURL(url), 1000);
}
function StatusBadge({ item }) {
    const states = {
        waiting: {
            label: "Waiting",
            className: "bg-white/[0.08] text-white/55"
        },
        processing: {
            label: "Processing",
            className: "bg-white/[0.12] text-white/75"
        },
        completed: {
            label: "Completed",
            className: "bg-emerald-400/15 text-emerald-200"
        },
        failed: {
            label: "Failed",
            className: "bg-red-400/15 text-red-200"
        }
    };
    const state = states[item.status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${state.className}`,
        children: [
            item.status === "processing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-1.5 w-1.5 animate-pulse rounded-full bg-current"
            }, void 0, false, {
                fileName: "[project]/components/BatchBackgroundRemover.js",
                lineNumber: 58,
                columnNumber: 40
            }, this),
            item.status === "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "check",
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/components/BatchBackgroundRemover.js",
                lineNumber: 59,
                columnNumber: 39
            }, this),
            item.status === "failed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "alert",
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/components/BatchBackgroundRemover.js",
                lineNumber: 60,
                columnNumber: 36
            }, this),
            state.label
        ]
    }, void 0, true, {
        fileName: "[project]/components/BatchBackgroundRemover.js",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c = StatusBadge;
function BatchBackgroundRemover() {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectionError, setSelectionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [zipError, setZipError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isCreatingZip, setIsCreatingZip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const activeJobsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const queueStoppedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const nextItemIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const nextJobIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scheduleQueueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const updateItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BatchBackgroundRemover.useCallback[updateItems]": (updater)=>{
            const next = typeof updater === "function" ? updater(itemsRef.current) : updater;
            itemsRef.current = next;
            setItems(next);
        }
    }["BatchBackgroundRemover.useCallback[updateItems]"], []);
    const revokeItemUrls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BatchBackgroundRemover.useCallback[revokeItemUrls]": (item)=>{
            if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
            if (item.resultUrl) URL.revokeObjectURL(item.resultUrl);
        }
    }["BatchBackgroundRemover.useCallback[revokeItemUrls]"], []);
    const startJob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BatchBackgroundRemover.useCallback[startJob]": (itemId)=>{
            const item = itemsRef.current.find({
                "BatchBackgroundRemover.useCallback[startJob].item": (entry)=>entry.id === itemId
            }["BatchBackgroundRemover.useCallback[startJob].item"]);
            if (!item || item.status !== "waiting" || queueStoppedRef.current) return;
            const jobId = ++nextJobIdRef.current;
            activeJobsRef.current.set(jobId, itemId);
            updateItems({
                "BatchBackgroundRemover.useCallback[startJob]": (current)=>current.map({
                        "BatchBackgroundRemover.useCallback[startJob]": (entry)=>entry.id === itemId ? {
                                ...entry,
                                status: "processing",
                                progress: 0,
                                error: "",
                                jobId
                            } : entry
                    }["BatchBackgroundRemover.useCallback[startJob]"])
            }["BatchBackgroundRemover.useCallback[startJob]"]);
            const run = {
                "BatchBackgroundRemover.useCallback[startJob].run": async ()=>{
                    try {
                        const resultBlob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$removeBackground$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeBackground"])(item.file, {
                            onProgress: {
                                "BatchBackgroundRemover.useCallback[startJob].run": (progress)=>{
                                    const current = itemsRef.current.find({
                                        "BatchBackgroundRemover.useCallback[startJob].run.current": (entry)=>entry.id === itemId
                                    }["BatchBackgroundRemover.useCallback[startJob].run.current"]);
                                    if (current?.jobId !== jobId) return;
                                    updateItems({
                                        "BatchBackgroundRemover.useCallback[startJob].run": (entries)=>entries.map({
                                                "BatchBackgroundRemover.useCallback[startJob].run": (entry)=>entry.id === itemId && entry.jobId === jobId ? {
                                                        ...entry,
                                                        progress
                                                    } : entry
                                            }["BatchBackgroundRemover.useCallback[startJob].run"])
                                    }["BatchBackgroundRemover.useCallback[startJob].run"]);
                                }
                            }["BatchBackgroundRemover.useCallback[startJob].run"]
                        });
                        const current = itemsRef.current.find({
                            "BatchBackgroundRemover.useCallback[startJob].run.current": (entry)=>entry.id === itemId
                        }["BatchBackgroundRemover.useCallback[startJob].run.current"]);
                        if (current?.jobId !== jobId) return;
                        const resultUrl = URL.createObjectURL(resultBlob);
                        if (current.previewUrl) URL.revokeObjectURL(current.previewUrl);
                        updateItems({
                            "BatchBackgroundRemover.useCallback[startJob].run": (entries)=>entries.map({
                                    "BatchBackgroundRemover.useCallback[startJob].run": (entry)=>entry.id === itemId && entry.jobId === jobId ? {
                                            ...entry,
                                            file: null,
                                            previewUrl: "",
                                            status: "completed",
                                            progress: 1,
                                            resultBlob,
                                            resultUrl,
                                            error: ""
                                        } : entry
                                }["BatchBackgroundRemover.useCallback[startJob].run"])
                        }["BatchBackgroundRemover.useCallback[startJob].run"]);
                    } catch (error) {
                        console.error(error);
                        const current = itemsRef.current.find({
                            "BatchBackgroundRemover.useCallback[startJob].run.current": (entry)=>entry.id === itemId
                        }["BatchBackgroundRemover.useCallback[startJob].run.current"]);
                        if (current?.jobId !== jobId) return;
                        updateItems({
                            "BatchBackgroundRemover.useCallback[startJob].run": (entries)=>entries.map({
                                    "BatchBackgroundRemover.useCallback[startJob].run": (entry)=>entry.id === itemId && entry.jobId === jobId ? {
                                            ...entry,
                                            status: "failed",
                                            progress: 0,
                                            error: "Background removal failed. Please try again."
                                        } : entry
                                }["BatchBackgroundRemover.useCallback[startJob].run"])
                        }["BatchBackgroundRemover.useCallback[startJob].run"]);
                    } finally{
                        activeJobsRef.current.delete(jobId);
                        scheduleQueueRef.current?.();
                    }
                }
            }["BatchBackgroundRemover.useCallback[startJob].run"];
            void run();
        }
    }["BatchBackgroundRemover.useCallback[startJob]"], [
        updateItems
    ]);
    const scheduleQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BatchBackgroundRemover.useCallback[scheduleQueue]": ()=>{
            if (queueStoppedRef.current) return;
            const freeSlots = MAX_CONCURRENT_JOBS - activeJobsRef.current.size;
            if (freeSlots <= 0) return;
            itemsRef.current.filter({
                "BatchBackgroundRemover.useCallback[scheduleQueue]": (item)=>item.status === "waiting"
            }["BatchBackgroundRemover.useCallback[scheduleQueue]"]).slice(0, freeSlots).forEach({
                "BatchBackgroundRemover.useCallback[scheduleQueue]": (item)=>startJob(item.id)
            }["BatchBackgroundRemover.useCallback[scheduleQueue]"]);
        }
    }["BatchBackgroundRemover.useCallback[scheduleQueue]"], [
        startJob
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BatchBackgroundRemover.useEffect": ()=>{
            scheduleQueueRef.current = scheduleQueue;
            scheduleQueue();
        }
    }["BatchBackgroundRemover.useEffect"], [
        items,
        scheduleQueue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BatchBackgroundRemover.useEffect": ()=>({
                "BatchBackgroundRemover.useEffect": ()=>{
                    queueStoppedRef.current = true;
                    itemsRef.current.forEach(revokeItemUrls);
                    itemsRef.current = [];
                }
            })["BatchBackgroundRemover.useEffect"]
    }["BatchBackgroundRemover.useEffect"], [
        revokeItemUrls
    ]);
    const addFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BatchBackgroundRemover.useCallback[addFiles]": (fileList)=>{
            const selectedFiles = Array.from(fileList || []);
            if (!selectedFiles.length) return;
            const validFiles = [];
            const problems = [];
            selectedFiles.forEach({
                "BatchBackgroundRemover.useCallback[addFiles]": (file)=>{
                    const problem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validateImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateImage"])(file);
                    if (problem) {
                        problems.push(`${file.name}: ${problem}`);
                    } else {
                        validFiles.push(file);
                    }
                }
            }["BatchBackgroundRemover.useCallback[addFiles]"]);
            const available = MAX_IMAGES - itemsRef.current.length;
            const acceptedFiles = validFiles.slice(0, Math.max(0, available));
            const skippedForLimit = validFiles.length - acceptedFiles.length;
            if (problems.length || skippedForLimit) {
                const messages = [
                    ...problems
                ];
                if (skippedForLimit) {
                    messages.push(`Only ${MAX_IMAGES} images can be added to one batch. ${skippedForLimit} image${skippedForLimit === 1 ? "" : "s"} was not added.`);
                }
                setSelectionError(messages.join(" "));
            } else {
                setSelectionError("");
            }
            if (!acceptedFiles.length) return;
            queueStoppedRef.current = false;
            const additions = acceptedFiles.map({
                "BatchBackgroundRemover.useCallback[addFiles].additions": (file)=>({
                        id: ++nextItemIdRef.current,
                        file,
                        fileName: file.name,
                        fileSize: file.size,
                        previewUrl: URL.createObjectURL(file),
                        resultBlob: null,
                        resultUrl: "",
                        status: "waiting",
                        progress: 0,
                        error: "",
                        jobId: null
                    })
            }["BatchBackgroundRemover.useCallback[addFiles].additions"]);
            updateItems({
                "BatchBackgroundRemover.useCallback[addFiles]": (current)=>[
                        ...current,
                        ...additions
                    ]
            }["BatchBackgroundRemover.useCallback[addFiles]"]);
        }
    }["BatchBackgroundRemover.useCallback[addFiles]"], [
        updateItems
    ]);
    const removeItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BatchBackgroundRemover.useCallback[removeItem]": (itemId)=>{
            const item = itemsRef.current.find({
                "BatchBackgroundRemover.useCallback[removeItem].item": (entry)=>entry.id === itemId
            }["BatchBackgroundRemover.useCallback[removeItem].item"]);
            if (!item) return;
            revokeItemUrls(item);
            updateItems({
                "BatchBackgroundRemover.useCallback[removeItem]": (current)=>current.filter({
                        "BatchBackgroundRemover.useCallback[removeItem]": (entry)=>entry.id !== itemId
                    }["BatchBackgroundRemover.useCallback[removeItem]"])
            }["BatchBackgroundRemover.useCallback[removeItem]"]);
        }
    }["BatchBackgroundRemover.useCallback[removeItem]"], [
        revokeItemUrls,
        updateItems
    ]);
    const retryItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BatchBackgroundRemover.useCallback[retryItem]": (itemId)=>{
            queueStoppedRef.current = false;
            updateItems({
                "BatchBackgroundRemover.useCallback[retryItem]": (current)=>current.map({
                        "BatchBackgroundRemover.useCallback[retryItem]": (item)=>item.id === itemId && item.status === "failed" ? {
                                ...item,
                                status: "waiting",
                                progress: 0,
                                error: "",
                                jobId: null
                            } : item
                    }["BatchBackgroundRemover.useCallback[retryItem]"])
            }["BatchBackgroundRemover.useCallback[retryItem]"]);
        }
    }["BatchBackgroundRemover.useCallback[retryItem]"], [
        updateItems
    ]);
    const clearBatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BatchBackgroundRemover.useCallback[clearBatch]": ()=>{
            queueStoppedRef.current = true;
            itemsRef.current.forEach(revokeItemUrls);
            updateItems([]);
            setZipError("");
            setSelectionError(activeJobsRef.current.size ? "The queue was cleared. Images already processing will finish in this browser, but their results will be discarded." : "");
        }
    }["BatchBackgroundRemover.useCallback[clearBatch]"], [
        revokeItemUrls,
        updateItems
    ]);
    const downloadAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BatchBackgroundRemover.useCallback[downloadAll]": async ()=>{
            const completedItems = itemsRef.current.filter({
                "BatchBackgroundRemover.useCallback[downloadAll].completedItems": (item)=>item.status === "completed" && item.resultBlob
            }["BatchBackgroundRemover.useCallback[downloadAll].completedItems"]);
            if (!completedItems.length) return;
            setIsCreatingZip(true);
            setZipError("");
            try {
                const JSZip = (await __turbopack_context__.A("[project]/node_modules/jszip/lib/index.js [app-client] (ecmascript, async loader)")).default;
                const zip = new JSZip();
                const usedNames = new Set();
                completedItems.forEach({
                    "BatchBackgroundRemover.useCallback[downloadAll]": (item)=>{
                        zip.file(uniqueName(outputName(item.fileName), usedNames), item.resultBlob);
                    }
                }["BatchBackgroundRemover.useCallback[downloadAll]"]);
                const zipBlob = await zip.generateAsync({
                    type: "blob",
                    compression: "DEFLATE",
                    compressionOptions: {
                        level: 6
                    }
                });
                downloadBlob(zipBlob, "clyro-backgrounds.zip");
            } catch (error) {
                console.error(error);
                setZipError("We couldn't create the ZIP file. Please try downloading the images individually.");
            } finally{
                setIsCreatingZip(false);
            }
        }
    }["BatchBackgroundRemover.useCallback[downloadAll]"], []);
    const completedCount = items.filter((item)=>item.status === "completed").length;
    const failedCount = items.filter((item)=>item.status === "failed").length;
    const processingCount = items.filter((item)=>item.status === "processing").length;
    const waitingCount = items.filter((item)=>item.status === "waiting").length;
    const finished = items.length > 0 && processingCount === 0 && waitingCount === 0;
    const summary = !items.length ? `Add up to ${MAX_IMAGES} images` : finished ? failedCount ? `${completedCount} completed · ${failedCount} failed` : "All images processed" : `${completedCount} of ${items.length} completed`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-[0.18em] text-white/35",
                                children: "CLYRO mini app"
                            }, void 0, false, {
                                fileName: "[project]/components/BatchBackgroundRemover.js",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-1 text-2xl font-semibold text-white",
                                children: "Batch Background Remover"
                            }, void 0, false, {
                                fileName: "[project]/components/BatchBackgroundRemover.js",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 max-w-2xl text-sm leading-6 text-white/50",
                                children: [
                                    "Remove up to ",
                                    MAX_IMAGES,
                                    " backgrounds at once. Images are processed in this browser, with no more than ",
                                    MAX_CONCURRENT_JOBS,
                                    " running at a time."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BatchBackgroundRemover.js",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BatchBackgroundRemover.js",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-white",
                                children: summary
                            }, void 0, false, {
                                fileName: "[project]/components/BatchBackgroundRemover.js",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this),
                            !finished && (processingCount || waitingCount) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 block text-xs text-white/45",
                                children: [
                                    processingCount ? `${processingCount} processing` : "",
                                    processingCount && waitingCount ? " · " : "",
                                    waitingCount ? `${waitingCount} waiting` : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BatchBackgroundRemover.js",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BatchBackgroundRemover.js",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BatchBackgroundRemover.js",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                type: "file",
                multiple: true,
                accept: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].upload.accept).join(","),
                className: "sr-only",
                onChange: (event)=>{
                    addFiles(event.target.files);
                    event.target.value = "";
                }
            }, void 0, false, {
                fileName: "[project]/components/BatchBackgroundRemover.js",
                lineNumber: 354,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDragEnter: (event)=>{
                    event.preventDefault();
                    setDragging(true);
                },
                onDragOver: (event)=>event.preventDefault(),
                onDragLeave: (event)=>{
                    if (event.currentTarget === event.target) setDragging(false);
                },
                onDrop: (event)=>{
                    event.preventDefault();
                    setDragging(false);
                    addFiles(event.dataTransfer.files);
                },
                className: `rounded-3xl border border-dashed p-5 transition sm:p-6 ${dragging ? "border-white/60 bg-white/[0.09]" : "border-white/15 bg-black/20"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium text-white",
                                    children: "Drop images here, or add them from your device."
                                }, void 0, false, {
                                    fileName: "[project]/components/BatchBackgroundRemover.js",
                                    lineNumber: 386,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-white/45",
                                    children: [
                                        Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].upload.accept).join(", "),
                                        " · up to ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].upload.maxSizeMB,
                                        " MB each · ",
                                        items.length,
                                        "/",
                                        MAX_IMAGES,
                                        " added"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BatchBackgroundRemover.js",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BatchBackgroundRemover.js",
                            lineNumber: 385,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>inputRef.current?.click(),
                            disabled: items.length >= MAX_IMAGES,
                            className: "inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    name: "plus",
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/BatchBackgroundRemover.js",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this),
                                "Add images"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BatchBackgroundRemover.js",
                            lineNumber: 391,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BatchBackgroundRemover.js",
                    lineNumber: 384,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/BatchBackgroundRemover.js",
                lineNumber: 366,
                columnNumber: 7
            }, this),
            selectionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "rounded-2xl bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-200",
                children: selectionError
            }, void 0, false, {
                fileName: "[project]/components/BatchBackgroundRemover.js",
                lineNumber: 404,
                columnNumber: 9
            }, this),
            items.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-3",
                "aria-label": "Batch image queue",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "rounded-3xl border border-white/10 bg-black/20 p-3 sm:p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "checker h-20 w-full shrink-0 overflow-hidden rounded-2xl bg-white/[0.06] sm:w-24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.resultUrl || item.previewUrl,
                                        alt: "",
                                        className: "h-full w-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BatchBackgroundRemover.js",
                                        lineNumber: 415,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/BatchBackgroundRemover.js",
                                    lineNumber: 414,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "max-w-full truncate text-sm font-medium text-white",
                                                    children: item.fileName
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BatchBackgroundRemover.js",
                                                    lineNumber: 423,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                                    item: item
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BatchBackgroundRemover.js",
                                                    lineNumber: 424,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BatchBackgroundRemover.js",
                                            lineNumber: 422,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-white/45",
                                            children: formatFileSize(item.fileSize)
                                        }, void 0, false, {
                                            fileName: "[project]/components/BatchBackgroundRemover.js",
                                            lineNumber: 426,
                                            columnNumber: 19
                                        }, this),
                                        item.status === "processing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 max-w-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-1.5 overflow-hidden rounded-full bg-white/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full rounded-full bg-white transition-[width] duration-300",
                                                        style: {
                                                            width: `${Math.max(4, Math.round((item.progress || 0) * 100))}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BatchBackgroundRemover.js",
                                                        lineNumber: 431,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BatchBackgroundRemover.js",
                                                    lineNumber: 430,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1.5 text-xs text-white/45",
                                                    children: [
                                                        "Removing background… ",
                                                        Math.round((item.progress || 0) * 100),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BatchBackgroundRemover.js",
                                                    lineNumber: 436,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BatchBackgroundRemover.js",
                                            lineNumber: 429,
                                            columnNumber: 21
                                        }, this),
                                        item.status === "failed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-red-200",
                                            children: item.error
                                        }, void 0, false, {
                                            fileName: "[project]/components/BatchBackgroundRemover.js",
                                            lineNumber: 440,
                                            columnNumber: 48
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BatchBackgroundRemover.js",
                                    lineNumber: 421,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex shrink-0 flex-wrap gap-2 sm:justify-end",
                                    children: [
                                        item.status === "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>downloadBlob(item.resultBlob, outputName(item.fileName)),
                                            className: "inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-black hover:bg-neutral-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    name: "download",
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BatchBackgroundRemover.js",
                                                    lineNumber: 449,
                                                    columnNumber: 23
                                                }, this),
                                                "Download"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BatchBackgroundRemover.js",
                                            lineNumber: 444,
                                            columnNumber: 21
                                        }, this),
                                        item.status === "failed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>retryItem(item.id),
                                            className: "inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-xs font-medium text-white/80 hover:bg-white/[0.08]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    name: "refresh",
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BatchBackgroundRemover.js",
                                                    lineNumber: 459,
                                                    columnNumber: 23
                                                }, this),
                                                "Retry"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BatchBackgroundRemover.js",
                                            lineNumber: 454,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>removeItem(item.id),
                                            className: "rounded-full border border-white/10 px-3.5 py-2 text-xs text-white/55 hover:bg-white/[0.08] hover:text-white",
                                            children: "Remove"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BatchBackgroundRemover.js",
                                            lineNumber: 463,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BatchBackgroundRemover.js",
                                    lineNumber: 442,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BatchBackgroundRemover.js",
                            lineNumber: 413,
                            columnNumber: 15
                        }, this)
                    }, item.id, false, {
                        fileName: "[project]/components/BatchBackgroundRemover.js",
                        lineNumber: 412,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/BatchBackgroundRemover.js",
                lineNumber: 410,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-3xl border border-white/10 bg-black/20 px-5 py-10 text-center text-sm text-white/45",
                children: [
                    "Add up to ",
                    MAX_IMAGES,
                    " JPG, PNG, or WebP images to begin."
                ]
            }, void 0, true, {
                fileName: "[project]/components/BatchBackgroundRemover.js",
                lineNumber: 476,
                columnNumber: 9
            }, this),
            zipError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-200",
                children: zipError
            }, void 0, false, {
                fileName: "[project]/components/BatchBackgroundRemover.js",
                lineNumber: 481,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: clearBatch,
                        disabled: !items.length,
                        className: "rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/60 hover:bg-white/[0.08] hover:text-white disabled:cursor-not-allowed disabled:opacity-40",
                        children: "Clear all"
                    }, void 0, false, {
                        fileName: "[project]/components/BatchBackgroundRemover.js",
                        lineNumber: 484,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: downloadAll,
                        disabled: !completedCount || isCreatingZip,
                        className: "inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                name: "download",
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/BatchBackgroundRemover.js",
                                lineNumber: 498,
                                columnNumber: 11
                            }, this),
                            isCreatingZip ? "Creating ZIP…" : "Download all"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BatchBackgroundRemover.js",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BatchBackgroundRemover.js",
                lineNumber: 483,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BatchBackgroundRemover.js",
        lineNumber: 333,
        columnNumber: 5
    }, this);
}
_s(BatchBackgroundRemover, "FKLirTvJZQkFHneTbkueKg8o+eA=");
_c1 = BatchBackgroundRemover;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatusBadge");
__turbopack_context__.k.register(_c1, "BatchBackgroundRemover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BatchBackgroundRemover.js [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/BatchBackgroundRemover.js [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_BatchBackgroundRemover_07bu157.js.map