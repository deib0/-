!function(t1) {
    var e1, n, o, c, i, a = '<svg><symbol id="icon-delete" viewBox="0 0 1024 1024"><path d="M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z"  ></path><path d="M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z"  ></path><path d="M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z"  ></path><path d="M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z"  ></path></symbol><symbol id="icon-addto" viewBox="0 0 1024 1024"><path d="M544 480h112a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-112v112a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-112h-112a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h112v-112a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v112z m-32 320c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z"  ></path></symbol><symbol id="icon-add" viewBox="0 0 1024 1024"><path d="M800 480l-256 0L544 224c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 256L224 480c-17.664 0-32 14.336-32 32s14.336 32 32 32l256 0 0 256c0 17.696 14.336 32 32 32s32-14.304 32-32l0-256 256 0c17.696 0 32-14.336 32-32S817.696 480 800 480z"  ></path></symbol></svg>', d = (d = document.getElementsByTagName("script"))[d.length - 1].getAttribute("data-injectcss"), l = function(t, e) {
        e.parentNode.insertBefore(t, e);
    };
    if (d && !t1.__iconfont__svg__cssinject__) {
        t1.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
        } catch (t) {
            console && console.log(t);
        }
    }
    function s() {
        i || (i = !0, o());
    }
    function h() {
        try {
            c.documentElement.doScroll("left");
        } catch (t) {
            return void setTimeout(h, 50);
        }
        s();
    }
    e1 = function() {
        var t, e = document.createElement("div");
        e.innerHTML = a, a = null, (e = e.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", (t = document.body).firstChild ? l(e, t.firstChild) : t.appendChild(e));
    }, document.addEventListener ? ~[
        "complete",
        "loaded",
        "interactive"
    ].indexOf(document.readyState) ? setTimeout(e1, 0) : (n = function() {
        document.removeEventListener("DOMContentLoaded", n, !1), e1();
    }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = e1, c = t1.document, i = !1, h(), c.onreadystatechange = function() {
        "complete" == c.readyState && (c.onreadystatechange = null, s());
    });
}(window);

//# sourceMappingURL=index.97bbf34e.js.map
