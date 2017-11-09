(function (config) {
    var aa = navigator.userAgent.toLowerCase(), ca = window, ea = document, fa = ea.documentElement;

    function ja(a) {
        return -1 !== aa.indexOf(a)
    }

    var ka = /([a-z0-9]*\d+[a-z0-9]*)/;

    function ma() {
        var a = na;
        if (!a) return null;
        var a = a.toLowerCase(), b = null;
        if (b = a.match(/angle \((.*)\)/)) a = b[1], a = a.replace(/\s*direct3d.*$/, "");
        a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
        if (0 <= a.indexOf("intel")) {
            b = ["Intel"];
            0 <= a.indexOf("mobile") && b.push("Mobile");
            (0 <= a.indexOf("gma") || 0 <= a.indexOf("graphics media accelerator")) && b.push("GMA");
            if (0 <= a.indexOf("haswell")) b.push("Haswell"); else if (0 <= a.indexOf("ivy")) b.push("HD 4000"); else if (0 <= a.indexOf("sandy")) b.push("HD 3000"); else if (0 <= a.indexOf("ironlake")) b.push("HD");
            else {
                0 <= a.indexOf("hd") && b.push("HD");
                var c = a.match(ka);
                c && b.push(c[1].toUpperCase())
            }
            return b = b.join(" ")
        }
        return 0 <= a.indexOf("nvidia") || 0 <= a.indexOf("quadro") || 0 <= a.indexOf("geforce") || 0 <= a.indexOf("nvs") ? (b = ["nVidia"], 0 <= a.indexOf("geforce") && b.push("geForce"), 0 <= a.indexOf("quadro") && b.push("Quadro"), 0 <= a.indexOf("nvs") && b.push("NVS"), a.match(/\bion\b/) && b.push("ION"), a.match(/gtx\b/) ? b.push("GTX") : a.match(/gts\b/) ? b.push("GTS") : a.match(/gt\b/) ? b.push("GT") : a.match(/gs\b/) ? b.push("GS") : a.match(/ge\b/) ?
            b.push("GE") : a.match(/fx\b/) && b.push("FX"), (c = a.match(ka)) && b.push(c[1].toUpperCase().replace("GS", "")), 0 <= a.indexOf("titan") ? b.push("TITAN") : 0 <= a.indexOf("ti") && b.push("Ti"), b = b.join(" ")) : 0 <= a.indexOf("amd") || 0 <= a.indexOf("ati") || 0 <= a.indexOf("radeon") || 0 <= a.indexOf("firegl") || 0 <= a.indexOf("firepro") ? (b = ["AMD"], 0 <= a.indexOf("mobil") && b.push("Mobility"), c = a.indexOf("radeon"), 0 <= c && b.push("Radeon"), 0 <= a.indexOf("firepro") ? b.push("FirePro") : 0 <= a.indexOf("firegl") && b.push("FireGL"), 0 <= a.indexOf("hd") &&
        b.push("HD"), 0 <= c && (a = a.substring(c)), (c = a.match(ka)) && b.push(c[1].toUpperCase().replace("HD", "")), b = b.join(" ")) : a.substring(0, 100)
    }

    var oa = "microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965".split(";"),
        pa = "ActiveXObject" in ca,
        qa = "devicePixelRatio" in ca && 1 < ca.devicePixelRatio || pa && "matchMedia" in ca && ca.matchMedia("(min-resolution:144dpi)") && ca.matchMedia("(min-resolution:144dpi)").matches,
        ra = ja("windows nt"), sa = -1 !== aa.search(/windows nt [1-5]\./), ua = -1 !== aa.search(/windows nt 5\.[12]/),
        xa = sa && !ua;
    ja("windows nt 10");
    var ya = ja("windows phone"), za = ja("macintosh"), Aa = ja("Mb2345Browser"), Ba = ja("ipad;") || ja("ipad "),
        Ca = Ba && qa, Da = ja("ipod touch;"), Ea = ja("iphone;") || ja("iphone "), Fa = Ea || Ba || Da,
        Ga = Fa && -1 !== aa.search(/ os [456]_/);
    Fa && aa.search(/ os [4-8]_/);
    var Ha = Fa && -1 !== aa.search(/ os [78]_/);
    Fa && ja("os 8_");
    var Ia = Fa && ja("os 10_"), Ja = ja("android"), Ka = -1 !== aa.search(/android [123]/), La = ja("android 4");
    Ja && -1 === aa.search(/android [1-4]/) || aa.search(/android 4.4/);
    var Ma = Ja ? "android" : Fa ? "ios" : ra ? "windows" : za ? "mac" : "other", Na = pa && !ca.XMLHttpRequest,
        Oa = pa && !ea.querySelector, Ra = pa && !ea.addEventListener, Sa = pa && ja("ie 9"), Ta = pa && ja("msie 10"),
        Ua = pa && ja("rv:11"), Va = ja("edge"), Wa = ja("qtweb"), Xa = ja("ucbrowser"), Ya = ja("alipay") || Ja && Xa,
        Za = ja("miuibrowser"), $a = ja("micromessenger"), ab = ja("mqqbrowser"), bb = ja("baidubrowser"),
        chrome = (ja("chrome") || ja("crios")) && !$a && !bb && !ab && !Va && !Za, cb = chrome && ja("chromium"),
        db = chrome && !cb && 30 < parseInt(aa.split("chrome/")[1]), eb = ja("firefox"),
        fb = eb && 27 < parseInt(aa.split("firefox/")[1]), gb = (za || Fa) && ja("safari") && ja("version/"),
        hb = za && gb && 7 < parseInt(aa.split("version/")[1]), ib = Fa && ja("aliapp"),
        jb = Fa && (!ab && !Xa && !$a && !chrome && !eb && !gb || ib && !Xa), kb = Ja || Fa || ya || ja("mobile"),
        lb = ca.navigator && ca.navigator.msPointerEnabled && !!ca.navigator.msMaxTouchPoints,
        mb = ca.navigator && ca.navigator.pointerEnabled && !!ca.navigator.maxTouchPoints, nb = mb || lb,
        ob = "ontouchstart" in ea || nb, pb = function () {
            if (!kb) return ca.devicePixelRatio || 1;
            var a = document.getElementsByTagName("meta");
            if (window.parent && window.parent !== window) try {
                if (window.parent.location.origin === window.location.origin) a = window.parent.document.getElementsByTagName("meta"); else return 1
            } catch (b) {
                return 1
            }
            for (var c = a.length - 1; 0 <= c; c -= 1) if ("viewport" === a[c].name) {
                var c = a[c].content, d;
                -1 !== c.indexOf("initial-scale") && (d = parseFloat(c.split("initial-scale=")[1]));
                a = -1 !== c.indexOf("minimum-scale") ? parseFloat(c.split("minimum-scale=")[1]) : 0;
                c = -1 !== c.indexOf("maximum-scale") ? parseFloat(c.split("maximum-scale=")[1]) : Infinity;
                if (d) {
                    if (c >= a) return d > c ? c : d < a ? a : d
                } else if (c >= a) return 1 <= a ? 1 : Math.min(c, 1);
                console && console.log && console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5");
                return null
            }
        }(), qb = qa && (!kb || !!pb && 1 <= pb), rb = pa && "transition" in fa.style,
        sb = !!ea.createElementNS && !!ea.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        tb = ea.createElement("canvas"), ub = !(!tb || !tb.getContext), vb = window.URL || window.webkitURL,
        wb = !pa && !(Xa && Ja) && window.Worker && vb && vb.createObjectURL && window.Blob, xb = "", na = "", Ab = 0,
        Bb = {
            alpha: !0,
            antialias: !0, depth: !0, failIfMajorPerformanceCaveat: !0, preserveDrawingBuffer: !0, stencil: !1
        }, Cb = function () {
            if (!ub || !wb || jb && ib && !Xa) return !1;
            for (var a = ["webgl", "experimental-webgl", "moz-webgl"], b = null, c = 0; c < a.length; c += 1) {
                try {
                    b = tb.getContext(a[c], Bb)
                } catch (d) {
                }
                if (b) {
                    if (b.drawingBufferWidth !== tb.width || b.drawingBufferHeight !== tb.height) break;
                    if (!b.getShaderPrecisionFormat || !b.getParameter || !b.getExtension) break;
                    Ab = b.getParameter(b.MAX_RENDERBUFFER_SIZE);
                    var e = b.getParameter(b.MAX_VIEWPORT_DIMS);
                    if (!e) break;
                    Ab = Math.min(Ab, e[0], e[1]);
                    gb && "mac" === Ma && (Ab = Math.min(Ab, 4096));
                    e = Math.max(screen.width, screen.height);
                    qb && (e *= Math.min(2, window.devicePixelRatio || 1));
                    if (e > Ab) break;
                    if (23 > b.getShaderPrecisionFormat(35632, 36338).precision || 23 > b.getShaderPrecisionFormat(35633, 36338).precision) break;
                    na = b.getExtension("WEBGL_debug_renderer_info") ? b.getParameter(37446) : null;
                    if ((b = ma()) && -1 !== oa.indexOf(b)) break;
                    xb = a[c];
                    return !0
                }
            }
            return !1
        }(), Db = Cb && (db || fb || hb) && ("mac" === Ma || "windows" === Ma) && !kb, Eb = !ub || Wa || ya || kb && eb ||
        Sa || Ga || Ca || Da || Ka || ja("gt-n710") || xa, Fb = !Eb && !Db && (La || Ha || Fa && $a || !kb),
        Gb = Db ? "vw" : Eb ? "d" : Fb ? "dv" : "v", Hb = ja("webkit"),
        Ib = "WebKitCSSMatrix" in ca && "m11" in new window.WebKitCSSMatrix, Jb = "MozPerspective" in fa.style,
        Kb = "OTransition" in fa.style, Lb = rb || Ib || Jb || Kb, Mb = void 0 !== config[8] ? config[8] : !0,
        Nb = void 0 !== config[9] ? config[9] : !0, Ob = void 0 !== config[10] ? config[10] : !0,
        Pb = void 0 !== config[11] ? config[11] : !0, Qb = void 0 !== config[12] ? config[12] : null,
        Rb = !sb && kb && ub, Sb = !0;
    try {
        if ("undefined" === typeof ca.localStorage) Sb = !1; else {
            var Tb = (new Date).getTime() + "";
            ca.localStorage.setItem("_test", Tb);
            ca.localStorage.getItem("_test") !== Tb && (Sb = !1);
            ca.localStorage.removeItem("_test")
        }
    } catch (Ub) {
        Sb = !1
    }
    config.q = {
        size: Ea ? 100 : Ja ? 200 : 500,
        uy: za,
        lga: ra,
        qF: Fa,
        Yda: Ia,
        ih: Ja,
        zca: Ka,
        YO: Ya,
        ar: Ma,
        sD: bb,
        bfa: ab,
        xS: gb,
        cba: $a,
        Gq: pa,
        th: Na,
        $t: Oa,
        Vda: Sa,
        H6: Ta,
        Qd: Ra,
        J6: pa && !Ua,
        C7: Aa,
        cl: Sb,
        oe: Sb && Pb && !kb && chrome,
        ek: Qb,
        geolocation: kb || pa && !Ra || Va,
        Gz: Xa && !chrome,
        chrome: chrome,
        kE: qa && chrome,
        WO: eb,
        W: kb,
        xea: kb && Hb,
        H7: kb && Ib,
        wea: kb && ca.opera,
        bd: qa,
        Mz: pb,
        da: qb,
        be: ob,
        N7: lb,
        JR: mb,
        KR: nb,
        H3: 57 <= parseInt(aa.split("chrome/")[1]),
        aba: Hb,
        Uda: rb,
        bba: Ib,
        mda: Jb,
        Gea: Kb,
        lD: Lb,
        Xk: sb,
        Hq: ub,
        wQ: wb,
        Br: Ob,
        Re: Db,
        MT: xb,
        OT: Bb,
        $E: na,
        B7: Ab,
        tba: !1,
        MO: Mb,
        xx: Mb && !Eb,
        e3: Mb ? Gb : "d",
        Dk: Mb ? Cb : !1,
        iu: Mb && (!Eb || Cb),
        Fm: Nb && !!ca.WebSocket && !bb,
        Eea: Rb,
        t8: ub || Rb ? "c" : "d"
    };
    var ca = window, Vb = {
        overlay: ["style"],
        "AMap.IndoorMap": ["AMap.CustomLayer", "cvector"],
        "AMap.MarkerList": ["AMap.TplUtils"],
        Map3D: ["vectorlayer", "wgl"]
    }, Wb = "http map anip layers overlay0 brender mrender".split(" ");
    config.ze = "main";
    config.q.be && (Wb += ",touch", config.ze += "t");
    config.q.W || (Wb += ",mouse", config.ze += "m");
    config.ze += "c";
    config.q.iu && (config.ze += "v", Wb += ",vectorlayer,overlay", config.q.Re ? (config.ze += "w", Wb += ",wgl") : (config.ze += "cg", Wb += ",cmng,cgl"));
    if (config[7]) {
        for (var Xb = [], Yb = config[7].split(","), Zb = 0; Zb < Yb.length; Zb += 1) {
            var $b = Yb[Zb];
            Vb[$b] && Xb.push.apply(Xb, Vb[$b]);
            Xb.push($b)
        }
        Wb += "," + Xb.join(",");
        config.ze += config[7].replace(",", "").replace(eval("/AMap./gi"), "")
    }
    config.mq = Vb;
    Wb += ",sync";
    config.uT = Wb.split(",");
    window.AMap = window.AMap || {version: "v1.4.1"};
    config.Hh = "1509024629605";
    var ac = window.AMap.RH = {}, bc = config[2].split(",")[0],
        cc = bc + "/css/v" + config[4] + "/style1509024629605.css",
        dc = document.head || document.getElementsByTagName("head")[0];
    if (dc) {
        var ec = document.createElement("link");
        ec.setAttribute("rel", "stylesheet");
        ec.setAttribute("type", "text/css");
        ec.setAttribute("href", cc);
        dc.insertBefore(ec, dc.firstChild)
    } else document.write("<link rel='stylesheet' href='" + cc + "'/>");

    function fc(a) {
        var b = document, c = b.createElement("script");
        c.charset = "utf-8";
        c.src = a;
        (a = b.body || dc) && a.appendChild(c)
    }

    function gc() {
        for (var a = bc + "/maps/main?v=" + config[4] + "&key=" + config[0] + "&m=" + config.uT.join(",") + "&vrs=1509024629605", b = document.getElementsByTagName("script"), c, d = 0; d < b.length; d += 1) if (0 === b[d].src.indexOf(bc.split(":")[1] + "/maps?")) {
            c = b[d];
            break
        }
        config[5] || c && c.async ? fc(a) : (document.write('<script crossorigin="anonymous" id="amap_main_js" src=\'' + a + "' type='text/javascript'>\x3c/script>"), setTimeout(function () {
            document.getElementById("amap_main_js") || fc(a)
        }, 1))
    }

    var tc = (new Date).getTime();
    ac.__load__ = function (a) {
        a(config, tc);
        ac.__load__ = null
    };
    try {
        if (window.localStorage) {
            var uc = window.localStorage["_AMap_" + config.ze], vc = !1;
            uc ? (uc = JSON.parse(uc), uc.version === config.Hh ? (eval(uc.script), ac.loaded = !0) : vc = !0) : vc = !0;
            if (vc) for (Zb in window.localStorage) window.localStorage.hasOwnProperty(Zb) && 0 === Zb.indexOf("_AMap_") && window.localStorage.removeItem(Zb)
        }
    } catch (wc) {
    }
    ac.loaded || (gc(), delete config.uT);
})(["您申请的key值", [112.958507, 22.51436, 114.059957, 23.932988, 113.280637, 23.125178], "http://webapi.amap.com", 1, "1.4.1", null, "440100", "", true, true, true, true, "1510060997-1"])