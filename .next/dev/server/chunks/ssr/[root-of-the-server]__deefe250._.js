module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Private/wataru-okada-portfolio/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Private/wataru-okada-portfolio/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Private/wataru-okada-portfolio/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Private/wataru-okada-portfolio/hooks/use-canvas-animation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanvasAnimation",
    ()=>useCanvasAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCanvasAnimation(canvasRef, containerRef, options = {}) {
    const { particleCount = 40, connectionDistance = 150, isVisible = true } = options;
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;
        const ctx = canvas.getContext('2d', {
            alpha: false
        }) // alpha: falseでパフォーマンス向上
        ;
        if (!ctx) return;
        const updateCanvasSize = ()=>{
            if (container) {
                canvas.width = container.offsetWidth;
                canvas.height = container.offsetHeight;
            }
        };
        updateCanvasSize();
        const neonColors = [
            'rgba(255, 51, 153, 0.4)',
            'rgba(0, 255, 255, 0.4)',
            'rgba(0, 255, 128, 0.4)',
            'rgba(138, 43, 226, 0.4)'
        ];
        // パーティクルを初期化
        particlesRef.current = [];
        for(let i = 0; i < particleCount; i++){
            particlesRef.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                radius: Math.random() * 2 + 1,
                color: neonColors[Math.floor(Math.random() * neonColors.length)]
            });
        }
        let lastTime = 0;
        const targetFPS = 30 // 60fpsから30fpsに下げる
        ;
        const frameInterval = 1000 / targetFPS;
        function animate(currentTime) {
            if (!isVisible) {
                // 画面外の時はアニメーションを停止
                return;
            }
            if (!ctx || !canvas) return;
            const deltaTime = currentTime - lastTime;
            // フレームレート制限
            if (deltaTime < frameInterval) {
                animationFrameRef.current = requestAnimationFrame(animate);
                return;
            }
            lastTime = currentTime - deltaTime % frameInterval;
            // クリア（透明度を上げて軽量化）
            ctx.fillStyle = 'rgba(8, 8, 20, 0.15)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            const particles = particlesRef.current;
            // パーティクルの更新と描画
            particles.forEach((particle)=>{
                particle.x += particle.vx;
                particle.y += particle.vy;
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                // shadowBlurを減らして軽量化
                ctx.shadowBlur = 5;
                ctx.shadowColor = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
                ctx.shadowBlur = 0;
            });
            // 接続線の描画（最適化）
            ctx.beginPath();
            let hasLines = false;
            for(let i = 0; i < particles.length; i++){
                const p1 = particles[i];
                for(let j = i + 1; j < particles.length; j++){
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < connectionDistance) {
                        if (!hasLines) {
                            ctx.beginPath();
                            hasLines = true;
                        }
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                    }
                }
            }
            if (hasLines) {
                ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 * (1 - 0)}`;
                ctx.lineWidth = 0.5;
                ctx.shadowBlur = 3;
                ctx.shadowColor = 'rgba(0, 255, 255, 0.3)';
                ctx.stroke();
                ctx.shadowBlur = 0;
            }
            animationFrameRef.current = requestAnimationFrame(animate);
        }
        if (isVisible) {
            animationFrameRef.current = requestAnimationFrame(animate);
        }
        const handleResize = ()=>{
            updateCanvasSize();
            // リサイズ時にパーティクルを再配置
            particlesRef.current.forEach((particle)=>{
                particle.x = Math.min(particle.x, canvas.width);
                particle.y = Math.min(particle.y, canvas.height);
            });
        };
        window.addEventListener('resize', handleResize, {
            passive: true
        });
        return ()=>{
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [
        canvasRef,
        containerRef,
        particleCount,
        connectionDistance,
        isVisible
    ]);
}
}),
"[project]/Private/wataru-okada-portfolio/components/hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-ssr] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$hooks$2f$use$2d$canvas$2d$animation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/hooks/use-canvas-animation.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const Hero = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function Hero() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true) // Heroは常に表示
    ;
    const fullText = 'Full-Stack Engineer';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let index = 0;
        const timer = setInterval(()=>{
            if (index <= fullText.length) {
                setDisplayedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);
        return ()=>clearInterval(timer);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$hooks$2f$use$2d$canvas$2d$animation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasAnimation"])(canvasRef, sectionRef, {
        particleCount: 50,
        isVisible
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative min-h-screen flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-6xl md:text-8xl font-bold mb-6 animate-fadeInUp neon-glow-pink animate-neon-flicker",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-balance",
                                children: "Wataru Okada"
                            }, void 0, false, {
                                fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl md:text-2xl text-secondary mb-4 animate-fadeInUp delay-200 font-mono neon-glow-cyan",
                            children: [
                                displayedText,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "animate-pulse",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-300",
                            children: "Building exceptional web experiences with modern technologies. Passionate about creating elegant, performant, and accessible applications."
                        }, void 0, false, {
                            fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-4 mb-12 animate-fadeInUp delay-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    asChild: true,
                                    className: "animate-pulse-glow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        children: "Get In Touch"
                                    }, void 0, false, {
                                        fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    variant: "outline",
                                    asChild: true,
                                    className: "hover-tilt",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#projects",
                                        children: "View Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-6 animate-fadeInUp delay-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover-tilt animate-float",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://linkedin.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-125 hover-tilt animate-float delay-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:your.email@example.com",
                                    className: "text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-125 hover-tilt animate-float delay-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#about",
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                    size: 32,
                    className: "text-muted-foreground neon-glow-cyan"
                }, void 0, false, {
                    fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Private/wataru-okada-portfolio/components/hero.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
});
}),
"[project]/Private/wataru-okada-portfolio/components/navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Private/wataru-okada-portfolio/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
'use client';
;
;
;
;
;
// throttle関数
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
}
const Navigation = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function Navigation() {
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsScrolled(window.scrollY > 50);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const throttledHandleScroll = throttle(handleScroll, 100) // 100msごとに実行
        ;
        window.addEventListener('scroll', throttledHandleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', throttledHandleScroll);
    }, [
        handleScroll
    ]);
    const navItems = [
        {
            href: '#about',
            label: 'About'
        },
        {
            href: '#experience',
            label: 'Experience'
        },
        {
            href: '#projects',
            label: 'Projects'
        },
        {
            href: '#skills',
            label: 'Skills'
        },
        {
            href: '#contact',
            label: 'Contact'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "font-mono text-lg font-bold",
                            children: '<WO />'
                        }, void 0, false, {
                            fileName: "[project]/Private/wataru-okada-portfolio/components/navigation.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-8",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/Private/wataru-okada-portfolio/components/navigation.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Private/wataru-okada-portfolio/components/navigation.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "md:hidden",
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/Private/wataru-okada-portfolio/components/navigation.tsx",
                                lineNumber: 77,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/Private/wataru-okada-portfolio/components/navigation.tsx",
                                lineNumber: 77,
                                columnNumber: 51
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Private/wataru-okada-portfolio/components/navigation.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Private/wataru-okada-portfolio/components/navigation.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden py-4 border-t border-border animate-fadeIn",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Private$2f$wataru$2d$okada$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/Private/wataru-okada-portfolio/components/navigation.tsx",
                                lineNumber: 86,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Private/wataru-okada-portfolio/components/navigation.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Private/wataru-okada-portfolio/components/navigation.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Private/wataru-okada-portfolio/components/navigation.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Private/wataru-okada-portfolio/components/navigation.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
});
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__deefe250._.js.map