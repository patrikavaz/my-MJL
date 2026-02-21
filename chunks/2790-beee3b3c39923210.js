(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2790], {
        92849: e => {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = Object.prototype.toString,
                r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                s = function(e) {
                    return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
                },
                o = function(e) {
                    if (!e || "[object Object]" !== n.call(e)) return !1;
                    var r, i = t.call(e, "constructor"),
                        s = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !i && !s) return !1;
                    for (r in e);
                    return void 0 === r || t.call(e, r)
                },
                a = function(e, t) {
                    r && "__proto__" === t.name ? r(e, t.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: t.newValue,
                        writable: !0
                    }) : e[t.name] = t.newValue
                },
                l = function(e, n) {
                    if ("__proto__" === n) {
                        if (!t.call(e, n)) return;
                        if (i) return i(e, n).value
                    }
                    return e[n]
                };
            e.exports = function e() {
                var t, n, r, i, u, c, d = arguments[0],
                    h = 1,
                    p = arguments.length,
                    f = !1;
                for ("boolean" == typeof d && (f = d, d = arguments[1] || {}, h = 2), (null == d || "object" != typeof d && "function" != typeof d) && (d = {}); h < p; ++h)
                    if (t = arguments[h], null != t)
                        for (n in t) r = l(d, n), d !== (i = l(t, n)) && (f && i && (o(i) || (u = s(i))) ? (u ? (u = !1, c = r && s(r) ? r : []) : c = r && o(r) ? r : {}, a(d, {
                            name: n,
                            newValue: e(f, c, i)
                        })) : void 0 !== i && a(d, {
                            name: n,
                            newValue: i
                        }));
                return d
            }
        },
        19788: e => {
            var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                n = /\n/g,
                r = /^\s*/,
                i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                s = /^:\s*/,
                o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                a = /^[;\s]*/,
                l = /^\s+|\s+$/g;

            function u(e) {
                return e ? e.replace(l, "") : ""
            }
            e.exports = function(e, l) {
                if ("string" != typeof e) throw TypeError("First argument must be a string");
                if (!e) return [];
                l = l || {};
                var c = 1,
                    d = 1;

                function h(e) {
                    var t = e.match(n);
                    t && (c += t.length);
                    var r = e.lastIndexOf("\n");
                    d = ~r ? e.length - r : d + e.length
                }

                function p() {
                    var e = {
                        line: c,
                        column: d
                    };
                    return function(t) {
                        return t.position = new f(e), y(r), t
                    }
                }

                function f(e) {
                    this.start = e, this.end = {
                        line: c,
                        column: d
                    }, this.source = l.source
                }
                f.prototype.content = e;
                var m = [];

                function g(t) {
                    var n = Error(l.source + ":" + c + ":" + d + ": " + t);
                    if (n.reason = t, n.filename = l.source, n.line = c, n.column = d, n.source = e, l.silent) m.push(n);
                    else throw n
                }

                function y(t) {
                    var n = t.exec(e);
                    if (n) {
                        var r = n[0];
                        return h(r), e = e.slice(r.length), n
                    }
                }

                function v(e) {
                    var t;
                    for (e = e || []; t = b();) !1 !== t && e.push(t);
                    return e
                }

                function b() {
                    var t = p();
                    if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                        for (var n = 2;
                            "" != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
                        if (n += 2, "" === e.charAt(n - 1)) return g("End of comment missing");
                        var r = e.slice(2, n - 2);
                        return d += 2, h(r), e = e.slice(n), d += 2, t({
                            type: "comment",
                            comment: r
                        })
                    }
                }
                return y(r),
                    function() {
                        var e, n = [];
                        for (v(n); e = function() {
                                var e = p(),
                                    n = y(i);
                                if (n) {
                                    if (b(), !y(s)) return g("property missing ':'");
                                    var r = y(o),
                                        l = e({
                                            type: "declaration",
                                            property: u(n[0].replace(t, "")),
                                            value: r ? u(r[0].replace(t, "")) : ""
                                        });
                                    return y(a), l
                                }
                            }();) !1 !== e && (n.push(e), v(n));
                        return n
                    }()
            }
        },
        74508: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/angular.a5b3feb0.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRrwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDkAAAABYBPbVpxbMRjAAN1mBQW0KIASsjpImTquoiIO9niIiAngX4RtNMB6PjPMrwrpFUHv53l4QJZF8Q8AVlA4IFwAAAAQAgCdASoIAAgAAkA4JbACdG1/DxANS8wAAP5M9UJB0xdBT6JCm9iH59ux5Z5ZzcJA14+GuRcxTX6F381mwJUVz+1HU6f/xzO3+sB8+uG9m9oN+5ySfns/z/MAAA==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        45413: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/django.48c9f695.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRsAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAAAAAEBAAAAAABTudA4AAABYbnZpi8AAD77sNriTwAAP/CP2uNPAAACbbaf9kcAAAAAAF3KDQAAAAAAAAAAAABWUDggWAAAAJABAJ0BKggACAACQDglsAJ0ALswAADOJDCzdUrsYlJ0pXqn0707if4nqF3+N+/vLFL+8LSdf/jeeYNrUFtdVxmoNZCD//nbeA7s+Gc77Ye9rC9+pdwAAAA=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        99638: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/docker.b2ec7792.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRsQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD0AAAABYFTbtpL7Dc3wFwmcKREoQwRCUMBn3oE4lsAhQ0RMAP5a2kuSS5tApM2UzS2Vx3EcewhaHscSA6BBZOIvAFZQOCBgAAAAcAIAnQEqCAAIAAJAOCWwAnRSgAqEvsvE+3hyAAD+5fW2pP2TYaZtmf7K1TkMDpa7Ql9e76cda1Ky0a93yZxcf2MM9/77K+bKr7nJJkrDZH/Mhn+y53rgztu2qMz5AAAA",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        19992: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/dotnet.249831b1.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRqIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABYFNbe5PfRMrai4mMUZCtgYjqgQ0xHCYssFY/sRARCW3P01BGA+t+/+GiaDue357gsu4XFqENAFZQOCBEAAAAMAIAnQEqCAAIAAJAOCWQAnRZAAHNlopCH5AA/s25zquDkUY/D7Lcl4NTsiVJcr6/lJPimPi/9/N9jPq5/JvlhrAAAAA=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        77281: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/elastic.48e0a4df.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRsIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAAAAAAAAAAAAS2Sm0AAAAAi7f//+iMAADKBgYE1AAAAZenp6W4AAAARz9bW0TYAAABJzuSVCQAAAAAAAAAAAABWUDggWgAAANABAJ0BKggACAACQDglmAJ0MpVI5KAAAPlfbmZxM6Y/yl/8yJO5ztFvu2edaLQFIyOqs+mfkVyBPYxz2/LdX2VlTBmfqkxMHWrp6X3k582IDB6P4j9fqGAAAA==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        28793: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/flask.bc44c841.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDgAAAABYBrbdpSXiU0BqSJ97JsN4LB0g6IFFJIK6Ae///QQEROAttTUeBSinjOh7p1gyzUJBoAP2xrQBlZQOCBOAAAAcAEAnQEqCAAIAAJAOCWwAnQALSAAzisEaPx95fNlb0RB8z5XZEktp9fkymiH6+EUnNJOj5w3s1ly6FfqO24Er7xyN5g0w/1rmDPNRwAA",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        3752: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/golang.6a9ba5b8.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRq4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDgAAAABYFNbe5MvbcvUDWSMhEYRAB5wwY6EMjFighF0oAckRETiB2lCHITul+161hn+2N/7nAA5qtTgG1ZQOCBQAAAA8AEAnQEqCAAIAAJAOCWQAnQBDwgrO4AAAP6o6XgfV19tjMG/MWasL13obwCXjSKeyw4xefjIkNdLTi7ZLYrtlRXH7Vu/6XTiciPwLP+wAAA=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        6103: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/laravel.58306139.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRsQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAABcBvbtlIdCGnAJSLy0CGkB++FPqiJBjwn9O/aQ0RMAP6qpfAjfg4UbBlE86xQLyaS597cWhqEb83PyQQAJSLxHwBWUDggXAAAAPABAJ0BKggACAACQDglsAJ0APSjVFaSAAD+5fGXmXkpG2hOj0wv5fjgG1dKedHn7w7by9z8uznOHIKsvfhDSANPxpWBWCv/EPj/3/x/CECPoOf/F/xbtn+DJAAA",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        78306: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/mariadb.a4530910.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRsAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDsAAAABYBPZtpNDps20DA7QEF1gAh9YiDIYWoyggSpnDRExAfxXM+MhdJMDmMWeg1guxxHgj301Dx56iBzxFwBWUDggXgAAALABAJ0BKggACAACQDgloAJ0APRhNAAA+wWKdLLtuh141q0DtQKjT4HlWl0li/cHiHT+NOLUT+ilwn2/ZMj+x+497rOVvU2MwsiarhVP3EHf+TXEyZ9Fhu8yrrsAAAA=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        79304: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/mongodb.6af198d1.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRrAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABYFTbtpKLu1OHFIwpwcwjeQNKUOavJVxCRMQEAMhMcPxuBq1SdvRIedMm5UWNEC2hH/Dr1QAAAFZQOCBSAAAA0AEAnQEqCAAIAAJAOCWQAnQBFjeuTEAA/ZzsTwYxsaooi/GwHDMsrUFLqe/roE3b5jPFcZFmcu46ikgHkizLr7+wJQhafQvT+GTwIC9vgAAAAA==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        20614: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/mssql.40797ce5.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDwAAAABYBrbdpT7o7dG4lJCJLS1WTwSjWdwtEALeDrI2kRETAAg9LLtqmNM7+QAn/9rAP3kA+DMee3i/YUOBABWUDggVgAAALABAJ0BKggACAACQDglsAJ0ALngOIAAzijTtJ00Z6uNb896JLu6pJBHfnU+k0hnoR1Fxyojv57HSFLGZTITEjr//dwob9p9uizTsO/mjWNv8flMFwAA",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        78364: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/mysql.41dfd1dd.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRrwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABYFTbtpLz0SB0oAANHPIw1woMHUqQgixfQ0TEBCBwd2surPiXby2ARcrPB5J0kxnOq3e1gwsAAFZQOCBeAAAA8AEAnQEqCAAIAAJAOCWwAnS6AAM3bw4AAP6J02rY15t98vT4/w4Fa+gLvYnC89kg8vmY41K6Y8e2j9Vtr8f3cjkbm5zgrZDubwP+99mfz/x7BQHJj6h2C6NuzXQAAA==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        16112: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/nextjs.3a462af3.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRp4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCsAAAABYBTJVqP30MKRwgAi8jF7wAJuksxdCRGR+CQEKYBidppL0uc3slUaIP4BAFZQOCBMAAAAsAEAnQEqCAAIAAJAOCWYAnQA8xvgAAD+ov/iwej8nUsRfpX8rfAOktxETvJrtvzQSH8WJY2ZCBnFtz375wx+ZDP+CL89Qb/0cdQAAA==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        10138: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/nodejs.fab872cf.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRrIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDkAAAABYFNbe5MvCSCi+2FmhYmVER0ddFQdmGlrejRExATAMexyrXo4vwJg45zz0tIC9c/53QDI1rnwYAcAVlA4IFIAAACwAQCdASoIAAgAAkA4JbACdAYoBGxwAOJgBKjkUCn/T8xc2u/h7x2v28sUzWbLriYea+6AQciKe+cH+IOZVwlP+wI+baiJug1+JvsF3/b9zAAA",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        14080: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/nuxtjs.c17d043d.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD8AAAABYFNbe5M/oVcJjChgZWPCC6yYw0Z2JPRe0qMhIiYADIta4ZCxaQGgo5SeOWQrpZT2qHwGQimtkOf6aZIg0AIAVlA4IFQAAACwAQCdASoIAAgAAkA4JagCdADa+HAAAP5M/retbFtUSH6fM3fLkQqs6GnJy5Cf1H+hWnyg3lrR4fzYAvWcCbtkPe8oQ/x1/v7KO6xwxwE/WUXgAAA=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        57038: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/php.fb6fa8cb.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRrAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDgAAAABYFJr25N/7x/QlEBvxSEKEUgFAfaQuCVRBCDHXyEiErg5bTRlIDjHb3/bsniObv77KK4gDGsI3FZQOCBSAAAAEAIAnQEqCAAIAAJAOCWgAnRZAAHNrz0rAAD9v3pSASOhj7syMuSA3lBQw6H263m04ynLCnUZ9DsJACd+j+zDB0OWQVcAZr+uL+VD+rn+AAAAAA==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        76780: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/postgresql.5390d867.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRrQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDkAAAABYBPZtpPj4EcHX8EntbQIASP0DApSRUeV3WXQEBETwLcfmml00BzHcVRQPgpIHjmQ1UcvAOye8hMAVlA4IFQAAADQAQCdASoIAAgAAkA4JbACdEcAC3ABtADOIwl15m6QCA4nJ19z/4W8/tZvHDun4th57JQqYZ9A1y/6FfngPBn49HsLdcaVj8d/7IKK986Ad4MgAAA=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        34768: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/python.514d2b54.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRsQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD4AAAABcFvbthJdnAKILKMr64AG3MncKYrxqWHiqeBl1BARiQuzGVgAan0nSwT6//f8eYD/IqIcYF2iRAEgL4eBC1ZQOCBgAAAAMAIAnQEqCAAIAAJAOCUAToWiAPQALjcuEAAA/sAGgy48kiWn42d4iqMSRvvQAAD/dllS3COSA8kJiy8yj9iW+ERuniIf+bUjtTOH18bVvp+ERy38M/FPKY3wrpJz7wAA",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        99580: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/rabbitmq.dbf0e14a.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRrAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDgAAAABYBvZtpI785v4oeW/FcWlgFcYltEWQ0zo0kNETAD+ja30q9im7mNfl5kDxXmeZwL444u1RCTwD1ZQOCBSAAAA8AEAnQEqCAAIAAJAOCWwAnQGKAWyNB9oAP6pznFgxQaJOzhAOdZj+BRzZTeN5Yddv5/LgcZfe6888QfzePoGkG/+JCN9R+VO8Gn0H+T3XPAAAA==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        90493: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/react.da024f9b.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSC4AAAABYBPZtpNT/SAmSyIZYKhAacbJ7Z6GiJgAjH5bHVAu6UywSNJg6b/0VSAee8QIVlA4IFgAAAAQAwCdASoIAAgAAkA4JZgCdFkAbYB+gAuARAAcfJMDhIAA/sJPJzuq2fKZAcDorFgll+uKs7FuiKuIi4Ee/UYm3IAcP0znrOeMWt/fubf8cowWPFe5w0AA",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        75577: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/redis.220c0d5b.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRsIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDwAAAABcBTJtlrdMDNnGYO4JRHxQB7iipk+aIiICYA/dT/3AKhmua6jpd3luq5r4vX9Y+OpcrmuriAA7CSW4E9WUDggYAAAAPABAJ0BKggACAACQDglsAJ0bX8CfMuOYAD+3fo0bdFFLUbfx/reeICSqVSMU6ErC19NeZm+gbZL22jsbEgSHf9cFmS+/cVk7GgqFU//8cXv3gPnwkH2e7+L/4Cf7AAAAA==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        74385: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = {
                src: "/_next/static/media/vuejs.227dce56.webp",
                height: 275,
                width: 275,
                blurDataURL: "data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDsAAAABYFvbtozzR2Qy2Zj+VAE6UYFKNKAwuQJmmWymhoiYAL5jF8QugPpoly0Crz+OPQeq42gAVDeED4qSvwBWUDggVgAAAPABAJ0BKggACAACQDglkALDtigFSZtegAD+h8imu/9s8g44ckfVAxrzd9lvMAZKqGChTvsVrZ3/0tHmAEOSPkdZJJBa/iV8/fHvWSAVRcWP1VvgAAAA",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        96247: (e, t, n) => {
            "use strict";

            function r() {
                throw Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled.")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "forbidden", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(33167).HTTP_ERROR_FALLBACK_ERROR_CODE, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        90958: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    DynamicServerError: function() {
                        return r
                    },
                    isDynamicServerError: function() {
                        return i
                    }
                });
            let n = "DYNAMIC_SERVER_USAGE";
            class r extends Error {
                constructor(e) {
                    super("Dynamic server usage: " + e), this.description = e, this.digest = n
                }
            }

            function i(e) {
                return "object" == typeof e && null !== e && "digest" in e && "string" == typeof e.digest && e.digest === n
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        63750: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    ReadonlyURLSearchParams: function() {
                        return l.ReadonlyURLSearchParams
                    },
                    RedirectType: function() {
                        return l.RedirectType
                    },
                    ServerInsertedHTMLContext: function() {
                        return c.ServerInsertedHTMLContext
                    },
                    forbidden: function() {
                        return l.forbidden
                    },
                    notFound: function() {
                        return l.notFound
                    },
                    permanentRedirect: function() {
                        return l.permanentRedirect
                    },
                    redirect: function() {
                        return l.redirect
                    },
                    unauthorized: function() {
                        return l.unauthorized
                    },
                    unstable_rethrow: function() {
                        return l.unstable_rethrow
                    },
                    useParams: function() {
                        return f
                    },
                    usePathname: function() {
                        return h
                    },
                    useRouter: function() {
                        return p
                    },
                    useSearchParams: function() {
                        return d
                    },
                    useSelectedLayoutSegment: function() {
                        return g
                    },
                    useSelectedLayoutSegments: function() {
                        return m
                    },
                    useServerInsertedHTML: function() {
                        return c.useServerInsertedHTML
                    }
                });
            let r = n(96540),
                i = n(99258),
                s = n(18519),
                o = n(94365),
                a = n(70274),
                l = n(14531),
                u = n(88228),
                c = n(30465);

            function d() {
                let e = (0, r.useContext)(s.SearchParamsContext);
                return (0, r.useMemo)(() => e ? new l.ReadonlyURLSearchParams(e) : null, [e])
            }

            function h() {
                return (0, u.useDynamicRouteParams)("usePathname()"), (0, r.useContext)(s.PathnameContext)
            }

            function p() {
                let e = (0, r.useContext)(i.AppRouterContext);
                if (null === e) throw Error("invariant expected app router to be mounted");
                return e
            }

            function f() {
                return (0, u.useDynamicRouteParams)("useParams()"), (0, r.useContext)(s.PathParamsContext)
            }

            function m(e) {
                void 0 === e && (e = "children"), (0, u.useDynamicRouteParams)("useSelectedLayoutSegments()");
                let t = (0, r.useContext)(i.LayoutRouterContext);
                return t ? function e(t, n, r, i) {
                    let s;
                    if (void 0 === r && (r = !0), void 0 === i && (i = []), r) s = t[1][n];
                    else {
                        var l;
                        let e = t[1];
                        s = null != (l = e.children) ? l : Object.values(e)[0]
                    }
                    if (!s) return i;
                    let u = s[0],
                        c = (0, o.getSegmentValue)(u);
                    return !c || c.startsWith(a.PAGE_SEGMENT_KEY) ? i : (i.push(c), e(s, n, !1, i))
                }(t.tree, e) : null
            }

            function g(e) {
                void 0 === e && (e = "children"), (0, u.useDynamicRouteParams)("useSelectedLayoutSegment()");
                let t = m(e);
                if (!t || 0 === t.length) return null;
                let n = "children" === e ? t[0] : t[t.length - 1];
                return n === a.DEFAULT_SEGMENT_KEY ? null : n
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        14531: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    ReadonlyURLSearchParams: function() {
                        return c
                    },
                    RedirectType: function() {
                        return i.RedirectType
                    },
                    forbidden: function() {
                        return o.forbidden
                    },
                    notFound: function() {
                        return s.notFound
                    },
                    permanentRedirect: function() {
                        return r.permanentRedirect
                    },
                    redirect: function() {
                        return r.redirect
                    },
                    unauthorized: function() {
                        return a.unauthorized
                    },
                    unstable_rethrow: function() {
                        return l.unstable_rethrow
                    }
                });
            let r = n(68600),
                i = n(58923),
                s = n(67966),
                o = n(96247),
                a = n(54730),
                l = n(48542);
            class u extends Error {
                constructor() {
                    super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")
                }
            }
            class c extends URLSearchParams {
                append() {
                    throw new u
                }
                delete() {
                    throw new u
                }
                set() {
                    throw new u
                }
                sort() {
                    throw new u
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        67966: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "notFound", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = "" + n(33167).HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";

            function i() {
                let e = Error(r);
                throw e.digest = r, e
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        68600: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    getRedirectError: function() {
                        return o
                    },
                    getRedirectStatusCodeFromError: function() {
                        return d
                    },
                    getRedirectTypeFromError: function() {
                        return c
                    },
                    getURLFromRedirectError: function() {
                        return u
                    },
                    permanentRedirect: function() {
                        return l
                    },
                    redirect: function() {
                        return a
                    }
                });
            let r = n(47860),
                i = n(24357),
                s = n(58923);

            function o(e, t, n) {
                void 0 === n && (n = i.RedirectStatusCode.TemporaryRedirect);
                let r = Error(s.REDIRECT_ERROR_CODE);
                return r.digest = s.REDIRECT_ERROR_CODE + ";" + t + ";" + e + ";" + n + ";", r
            }

            function a(e, t) {
                let n = r.actionAsyncStorage.getStore();
                throw o(e, t || ((null == n ? void 0 : n.isAction) ? s.RedirectType.push : s.RedirectType.replace), i.RedirectStatusCode.TemporaryRedirect)
            }

            function l(e, t) {
                throw void 0 === t && (t = s.RedirectType.replace), o(e, t, i.RedirectStatusCode.PermanentRedirect)
            }

            function u(e) {
                return (0, s.isRedirectError)(e) ? e.digest.split(";").slice(2, -2).join(";") : null
            }

            function c(e) {
                if (!(0, s.isRedirectError)(e)) throw Error("Not a redirect error");
                return e.digest.split(";", 2)[1]
            }

            function d(e) {
                if (!(0, s.isRedirectError)(e)) throw Error("Not a redirect error");
                return Number(e.digest.split(";").at(-2))
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        94365: (e, t) => {
            "use strict";

            function n(e) {
                return Array.isArray(e) ? e[1] : e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getSegmentValue", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        61480: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    StaticGenBailoutError: function() {
                        return r
                    },
                    isStaticGenBailoutError: function() {
                        return i
                    }
                });
            let n = "NEXT_STATIC_GEN_BAILOUT";
            class r extends Error {
                constructor(...e) {
                    super(...e), this.code = n
                }
            }

            function i(e) {
                return "object" == typeof e && null !== e && "code" in e && e.code === n
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        54730: (e, t, n) => {
            "use strict";

            function r() {
                throw Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled.")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "unauthorized", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(33167).HTTP_ERROR_FALLBACK_ERROR_CODE, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        48542: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "unstable_rethrow", {
                enumerable: !0,
                get: function() {
                    return function e(t) {
                        if ((0, o.isNextRouterError)(t) || (0, s.isBailoutToCSRError)(t) || (0, r.isDynamicUsageError)(t) || (0, i.isPostpone)(t)) throw t;
                        t instanceof Error && "cause" in t && e(t.cause)
                    }
                }
            });
            let r = n(78837),
                i = n(89222),
                s = n(28431),
                o = n(87643);
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        15157: (e, t, n) => {
            "use strict";

            function r(e, t, n, r) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(2063), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        36526: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return A
                }
            });
            let r = n(87677),
                i = n(40544),
                s = n(74848),
                o = i._(n(96540)),
                a = r._(n(40961)),
                l = r._(n(86085)),
                u = n(87282),
                c = n(72105),
                d = n(59641);
            n(27679);
            let h = n(47644),
                p = r._(n(15472)),
                f = n(1903),
                m = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image/",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                };

            function g(e, t, n, r, i, s, o) {
                let a = null == e ? void 0 : e.src;
                e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && i(!0), null == n ? void 0 : n.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let r = !1,
                                i = !1;
                            n.current({
                                ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => r,
                                isPropagationStopped: () => i,
                                persist: () => {},
                                preventDefault: () => {
                                    r = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    i = !0, t.stopPropagation()
                                }
                            })
                        }(null == r ? void 0 : r.current) && r.current(e)
                    }
                }))
            }

            function y(e) {
                return o.use ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let v = (0, o.forwardRef)((e, t) => {
                let {
                    src: n,
                    srcSet: r,
                    sizes: i,
                    height: a,
                    width: l,
                    decoding: u,
                    className: c,
                    style: d,
                    fetchPriority: h,
                    placeholder: p,
                    loading: m,
                    unoptimized: v,
                    fill: b,
                    onLoadRef: A,
                    onLoadingCompleteRef: w,
                    setBlurComplete: x,
                    setShowAltText: S,
                    sizesInput: k,
                    onLoad: E,
                    onError: T,
                    ...C
                } = e, P = (0, o.useCallback)(e => {
                    e && (T && (e.src = e.src), e.complete && g(e, p, A, w, x, v, k))
                }, [n, p, A, w, x, T, v, k]), O = (0, f.useMergedRef)(t, P);
                return (0, s.jsx)("img", {
                    ...C,
                    ...y(h),
                    loading: m,
                    width: l,
                    height: a,
                    decoding: u,
                    "data-nimg": b ? "fill" : "1",
                    className: c,
                    style: d,
                    sizes: i,
                    srcSet: r,
                    src: n,
                    ref: O,
                    onLoad: e => {
                        g(e.currentTarget, p, A, w, x, v, k)
                    },
                    onError: e => {
                        S(!0), "empty" !== p && x(!0), T && T(e)
                    }
                })
            });

            function b(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: n
                } = e, r = {
                    as: "image",
                    imageSrcSet: n.srcSet,
                    imageSizes: n.sizes,
                    crossOrigin: n.crossOrigin,
                    referrerPolicy: n.referrerPolicy,
                    ...y(n.fetchPriority)
                };
                return t && a.default.preload ? (a.default.preload(n.src, r), null) : (0, s.jsx)(l.default, {
                    children: (0, s.jsx)("link", {
                        rel: "preload",
                        href: n.srcSet ? void 0 : n.src,
                        ...r
                    }, "__nimg-" + n.src + n.srcSet + n.sizes)
                })
            }
            let A = (0, o.forwardRef)((e, t) => {
                let n = (0, o.useContext)(h.RouterContext),
                    r = (0, o.useContext)(d.ImageConfigContext),
                    i = (0, o.useMemo)(() => {
                        var e;
                        let t = m || r || c.imageConfigDefault,
                            n = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
                            i = t.deviceSizes.sort((e, t) => e - t),
                            s = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
                        return {
                            ...t,
                            allSizes: n,
                            deviceSizes: i,
                            qualities: s
                        }
                    }, [r]),
                    {
                        onLoad: a,
                        onLoadingComplete: l
                    } = e,
                    f = (0, o.useRef)(a);
                (0, o.useEffect)(() => {
                    f.current = a
                }, [a]);
                let g = (0, o.useRef)(l);
                (0, o.useEffect)(() => {
                    g.current = l
                }, [l]);
                let [y, A] = (0, o.useState)(!1), [w, x] = (0, o.useState)(!1), {
                    props: S,
                    meta: k
                } = (0, u.getImgProps)(e, {
                    defaultLoader: p.default,
                    imgConf: i,
                    blurComplete: y,
                    showAltText: w
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(v, {
                        ...S,
                        unoptimized: k.unoptimized,
                        placeholder: k.placeholder,
                        fill: k.fill,
                        onLoadRef: f,
                        onLoadingCompleteRef: g,
                        setBlurComplete: A,
                        setShowAltText: x,
                        sizesInput: e.sizes,
                        ref: t
                    }), k.priority ? (0, s.jsx)(b, {
                        isAppRouter: !n,
                        imgAttributes: S
                    }) : null]
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6397: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let r = n(87677),
                i = n(74848),
                s = r._(n(96540)),
                o = n(56847),
                a = n(27785),
                l = n(42772),
                u = n(1278),
                c = n(26185),
                d = n(47644),
                h = n(56334),
                p = n(15157),
                f = n(90296),
                m = n(1903),
                g = new Set;

            function y(e, t, n, r) {
                if ((0, a.isLocalURL)(t)) {
                    if (!r.bypassPrefetchedCheck) {
                        let i = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
                        if (g.has(i)) return;
                        g.add(i)
                    }
                    e.prefetch(t, n, r).catch(e => {})
                }
            }

            function v(e) {
                return "string" == typeof e ? e : (0, l.formatUrl)(e)
            }
            let b = s.default.forwardRef(function(e, t) {
                let n, r;
                let {
                    href: l,
                    as: g,
                    children: b,
                    prefetch: A = null,
                    passHref: w,
                    replace: x,
                    shallow: S,
                    scroll: k,
                    locale: E,
                    onClick: T,
                    onMouseEnter: C,
                    onTouchStart: P,
                    legacyBehavior: O = !1,
                    ...M
                } = e;
                n = b, O && ("string" == typeof n || "number" == typeof n) && (n = (0, i.jsx)("a", {
                    children: n
                }));
                let R = s.default.useContext(d.RouterContext),
                    I = !1 !== A,
                    {
                        href: D,
                        as: L
                    } = s.default.useMemo(() => {
                        if (!R) {
                            let e = v(l);
                            return {
                                href: e,
                                as: g ? v(g) : e
                            }
                        }
                        let [e, t] = (0, o.resolveHref)(R, l, !0);
                        return {
                            href: e,
                            as: g ? (0, o.resolveHref)(R, g) : t || e
                        }
                    }, [R, l, g]),
                    j = s.default.useRef(D),
                    _ = s.default.useRef(L);
                O && (r = s.default.Children.only(n));
                let B = O ? r && "object" == typeof r && r.ref : t,
                    [F, N, V] = (0, h.useIntersection)({
                        rootMargin: "200px"
                    }),
                    z = s.default.useCallback(e => {
                        (_.current !== L || j.current !== D) && (V(), _.current = L, j.current = D), F(e)
                    }, [L, D, V, F]),
                    U = (0, m.useMergedRef)(z, B);
                s.default.useEffect(() => {
                    R && N && I && y(R, D, L, {
                        locale: E
                    })
                }, [L, D, N, E, I, null == R ? void 0 : R.locale, R]);
                let $ = {
                    ref: U,
                    onClick(e) {
                        O || "function" != typeof T || T(e), O && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), R && !e.defaultPrevented && function(e, t, n, r, i, s, o, l) {
                            let {
                                nodeName: u
                            } = e.currentTarget;
                            "A" === u.toUpperCase() && (function(e) {
                                let t = e.currentTarget.getAttribute("target");
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) || !(0, a.isLocalURL)(n)) || (e.preventDefault(), (() => {
                                let e = null == o || o;
                                "beforePopState" in t ? t[i ? "replace" : "push"](n, r, {
                                    shallow: s,
                                    locale: l,
                                    scroll: e
                                }) : t[i ? "replace" : "push"](r || n, {
                                    scroll: e
                                })
                            })())
                        }(e, R, D, L, x, S, k, E)
                    },
                    onMouseEnter(e) {
                        O || "function" != typeof C || C(e), O && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), R && y(R, D, L, {
                            locale: E,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    },
                    onTouchStart: function(e) {
                        O || "function" != typeof P || P(e), O && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), R && y(R, D, L, {
                            locale: E,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    }
                };
                if ((0, u.isAbsoluteUrl)(L)) $.href = L;
                else if (!O || w || "a" === r.type && !("href" in r.props)) {
                    let e = void 0 !== E ? E : null == R ? void 0 : R.locale,
                        t = (null == R ? void 0 : R.isLocaleDomain) && (0, p.getDomainLocale)(L, e, null == R ? void 0 : R.locales, null == R ? void 0 : R.domainLocales);
                    $.href = t || (0, f.addBasePath)((0, c.addLocale)(L, e, null == R ? void 0 : R.defaultLocale))
                }
                return O ? s.default.cloneElement(r, $) : (0, i.jsx)("a", {
                    ...M,
                    ...$,
                    children: n
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        56334: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let r = n(96540),
                i = n(74959),
                s = "function" == typeof IntersectionObserver,
                o = new Map,
                a = [];

            function l(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: l
                } = e, u = l || !s, [c, d] = (0, r.useState)(!1), h = (0, r.useRef)(null), p = (0, r.useCallback)(e => {
                    h.current = e
                }, []);
                return (0, r.useEffect)(() => {
                    if (s) {
                        if (u || c) return;
                        let e = h.current;
                        if (e && e.tagName) return function(e, t, n) {
                            let {
                                id: r,
                                observer: i,
                                elements: s
                            } = function(e) {
                                let t;
                                let n = {
                                        root: e.root || null,
                                        margin: e.rootMargin || ""
                                    },
                                    r = a.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = o.get(r))) return t;
                                let i = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = i.get(e.target),
                                                n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        })
                                    }, e),
                                    elements: i
                                }, a.push(n), o.set(n, t), t
                            }(n);
                            return s.set(e, t), i.observe(e),
                                function() {
                                    if (s.delete(e), i.unobserve(e), 0 === s.size) {
                                        i.disconnect(), o.delete(r);
                                        let e = a.findIndex(e => e.root === r.root && e.margin === r.margin);
                                        e > -1 && a.splice(e, 1)
                                    }
                                }
                        }(e, e => e && d(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                    } else if (!c) {
                        let e = (0, i.requestIdleCallback)(() => d(!0));
                        return () => (0, i.cancelIdleCallback)(e)
                    }
                }, [u, n, t, c, h.current]), [p, c, (0, r.useCallback)(() => {
                    d(!1)
                }, [])]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1903: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useMergedRef", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(96540);

            function i(e, t) {
                let n = (0, r.useRef)(() => {}),
                    i = (0, r.useRef)(() => {});
                return (0, r.useMemo)(() => e && t ? r => {
                    null === r ? (n.current(), i.current()) : (n.current = s(e, r), i.current = s(t, r))
                } : e || t, [e, t])
            }

            function s(e, t) {
                if ("function" != typeof e) return e.current = t, () => {
                    e.current = null
                };
                {
                    let n = e(t);
                    return "function" == typeof n ? n : () => e(null)
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        87282: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return a
                }
            }), n(27679);
            let r = n(89197),
                i = n(72105);

            function s(e) {
                return void 0 !== e.default
            }

            function o(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function a(e, t) {
                var n, a;
                let l, u, c, {
                        src: d,
                        sizes: h,
                        unoptimized: p = !1,
                        priority: f = !1,
                        loading: m,
                        className: g,
                        quality: y,
                        width: v,
                        height: b,
                        fill: A = !1,
                        style: w,
                        overrideSrc: x,
                        onLoad: S,
                        onLoadingComplete: k,
                        placeholder: E = "empty",
                        blurDataURL: T,
                        fetchPriority: C,
                        decoding: P = "async",
                        layout: O,
                        objectFit: M,
                        objectPosition: R,
                        lazyBoundary: I,
                        lazyRoot: D,
                        ...L
                    } = e,
                    {
                        imgConf: j,
                        showAltText: _,
                        blurComplete: B,
                        defaultLoader: F
                    } = t,
                    N = j || i.imageConfigDefault;
                if ("allSizes" in N) l = N;
                else {
                    let e = [...N.deviceSizes, ...N.imageSizes].sort((e, t) => e - t),
                        t = N.deviceSizes.sort((e, t) => e - t),
                        r = null == (n = N.qualities) ? void 0 : n.sort((e, t) => e - t);
                    l = {
                        ...N,
                        allSizes: e,
                        deviceSizes: t,
                        qualities: r
                    }
                }
                if (void 0 === F) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let V = L.loader || F;
                delete L.loader, delete L.srcSet;
                let z = "__next_img_default" in V;
                if (z) {
                    if ("custom" === l.loader) throw Error('Image with src "' + d + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let e = V;
                    V = t => {
                        let {
                            config: n,
                            ...r
                        } = t;
                        return e(r)
                    }
                }
                if (O) {
                    "fill" === O && (A = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    } [O];
                    e && (w = {
                        ...w,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    } [O];
                    t && !h && (h = t)
                }
                let U = "",
                    $ = o(v),
                    q = o(b);
                if ((a = d) && "object" == typeof a && (s(a) || void 0 !== a.src)) {
                    let e = s(d) ? d.default : d;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                    if (u = e.blurWidth, c = e.blurHeight, T = T || e.blurDataURL, U = e.src, !A) {
                        if ($ || q) {
                            if ($ && !q) {
                                let t = $ / e.width;
                                q = Math.round(e.height * t)
                            } else if (!$ && q) {
                                let t = q / e.height;
                                $ = Math.round(e.width * t)
                            }
                        } else $ = e.width, q = e.height
                    }
                }
                let W = !f && ("lazy" === m || void 0 === m);
                (!(d = "string" == typeof d ? d : U) || d.startsWith("data:") || d.startsWith("blob:")) && (p = !0, W = !1), l.unoptimized && (p = !0), z && !l.dangerouslyAllowSVG && d.split("?", 1)[0].endsWith(".svg") && (p = !0);
                let H = o(y),
                    G = Object.assign(A ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: M,
                        objectPosition: R
                    } : {}, _ ? {} : {
                        color: "transparent"
                    }, w),
                    Q = B || "empty" === E ? null : "blur" === E ? 'url("data:image/svg+xml;charset=utf-8,' + (0, r.getImageBlurSvg)({
                        widthInt: $,
                        heightInt: q,
                        blurWidth: u,
                        blurHeight: c,
                        blurDataURL: T || "",
                        objectFit: G.objectFit
                    }) + '")' : 'url("' + E + '")',
                    Y = Q ? {
                        backgroundSize: G.objectFit || "cover",
                        backgroundPosition: G.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: Q
                    } : {},
                    K = function(e) {
                        let {
                            config: t,
                            src: n,
                            unoptimized: r,
                            width: i,
                            quality: s,
                            sizes: o,
                            loader: a
                        } = e;
                        if (r) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: u
                        } = function(e, t, n) {
                            let {
                                deviceSizes: r,
                                allSizes: i
                            } = e;
                            if (n) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let r; r = e.exec(n); r) t.push(parseInt(r[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: i.filter(t => t >= r[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: i,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof t ? {
                                widths: r,
                                kind: "w"
                            } : {
                                widths: [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))],
                                kind: "x"
                            }
                        }(t, i, o), c = l.length - 1;
                        return {
                            sizes: o || "w" !== u ? o : "100vw",
                            srcSet: l.map((e, r) => a({
                                config: t,
                                src: n,
                                quality: s,
                                width: e
                            }) + " " + ("w" === u ? e : r + 1) + u).join(", "),
                            src: a({
                                config: t,
                                src: n,
                                quality: s,
                                width: l[c]
                            })
                        }
                    }({
                        config: l,
                        src: d,
                        unoptimized: p,
                        width: $,
                        quality: H,
                        sizes: h,
                        loader: V
                    });
                return {
                    props: {
                        ...L,
                        loading: W ? "lazy" : m,
                        fetchPriority: C,
                        width: $,
                        height: q,
                        decoding: P,
                        className: g,
                        style: {
                            ...G,
                            ...Y
                        },
                        sizes: K.sizes,
                        srcSet: K.srcSet,
                        src: x || K.src
                    },
                    meta: {
                        unoptimized: p,
                        priority: f,
                        placeholder: E,
                        fill: A
                    }
                }
            }
        },
        89197: (e, t) => {
            "use strict";

            function n(e) {
                let {
                    widthInt: t,
                    heightInt: n,
                    blurWidth: r,
                    blurHeight: i,
                    blurDataURL: s,
                    objectFit: o
                } = e, a = r ? 40 * r : t, l = i ? 40 * i : n, u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        22364: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function() {
                        return l
                    },
                    getImageProps: function() {
                        return a
                    }
                });
            let r = n(87677),
                i = n(87282),
                s = n(36526),
                o = r._(n(15472));

            function a(e) {
                let {
                    props: t
                } = (0, i.getImgProps)(e, {
                    defaultLoader: o.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image/",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !0
                    }
                });
                for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
                return {
                    props: t
                }
            }
            let l = s.Image
        },
        15472: (e, t) => {
            "use strict";

            function n(e) {
                var t;
                let {
                    config: n,
                    src: r,
                    width: i,
                    quality: s
                } = e, o = s || (null == (t = n.qualities) ? void 0 : t.reduce((e, t) => Math.abs(t - 75) < Math.abs(e - 75) ? t : e)) || 75;
                return n.path + "?url=" + encodeURIComponent(r) + "&w=" + i + "&q=" + o + (r.startsWith("/_next/static/media/"), "")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n.__next_img_default = !0;
            let r = n
        },
        30465: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    ServerInsertedHTMLContext: function() {
                        return i
                    },
                    useServerInsertedHTML: function() {
                        return s
                    }
                });
            let r = n(40544)._(n(96540)),
                i = r.default.createContext(null);

            function s(e) {
                let t = (0, r.useContext)(i);
                t && t(e)
            }
        },
        8905: () => {},
        79690: () => {},
        78837: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isDynamicUsageError", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = n(90958),
                i = n(28431),
                s = n(87643),
                o = n(88228),
                a = e => (0, r.isDynamicServerError)(e) || (0, i.isBailoutToCSRError)(e) || (0, s.isNextRouterError)(e) || (0, o.isDynamicPostpone)(e)
        },
        78126: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    METADATA_BOUNDARY_NAME: function() {
                        return n
                    },
                    OUTLET_BOUNDARY_NAME: function() {
                        return i
                    },
                    VIEWPORT_BOUNDARY_NAME: function() {
                        return r
                    }
                });
            let n = "__next_metadata_boundary__",
                r = "__next_viewport_boundary__",
                i = "__next_outlet_boundary__"
        },
        21913: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "actionAsyncStorageInstance", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = (0, n(98626).createAsyncLocalStorage)()
        },
        47860: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "actionAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return r.actionAsyncStorageInstance
                }
            });
            let r = n(21913)
        },
        98626: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    bindSnapshot: function() {
                        return o
                    },
                    createAsyncLocalStorage: function() {
                        return s
                    },
                    createSnapshot: function() {
                        return a
                    }
                });
            let n = Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
            class r {
                disable() {
                    throw n
                }
                getStore() {}
                run() {
                    throw n
                }
                exit() {
                    throw n
                }
                enterWith() {
                    throw n
                }
                static bind(e) {
                    return e
                }
            }
            let i = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;

            function s() {
                return i ? new i : new r
            }

            function o(e) {
                return i ? i.bind(e) : r.bind(e)
            }

            function a() {
                return i ? i.snapshot() : function(e, ...t) {
                    return e(...t)
                }
            }
        },
        88228: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    Postpone: function() {
                        return S
                    },
                    abortAndThrowOnSynchronousRequestDataAccess: function() {
                        return w
                    },
                    abortOnSynchronousPlatformIOAccess: function() {
                        return b
                    },
                    accessedDynamicData: function() {
                        return R
                    },
                    annotateDynamicAccess: function() {
                        return _
                    },
                    consumeDynamicAccess: function() {
                        return I
                    },
                    createDynamicTrackingState: function() {
                        return d
                    },
                    createDynamicValidationState: function() {
                        return h
                    },
                    createPostponedAbortSignal: function() {
                        return j
                    },
                    formatDynamicAPIAccesses: function() {
                        return D
                    },
                    getFirstDynamicReason: function() {
                        return p
                    },
                    isDynamicPostpone: function() {
                        return T
                    },
                    isPrerenderInterruptedError: function() {
                        return M
                    },
                    markCurrentScopeAsDynamic: function() {
                        return f
                    },
                    postponeWithTracking: function() {
                        return k
                    },
                    throwIfDisallowedDynamic: function() {
                        return $
                    },
                    throwToInterruptStaticGeneration: function() {
                        return g
                    },
                    trackAllowedDynamicAccess: function() {
                        return U
                    },
                    trackDynamicDataInDynamicRender: function() {
                        return y
                    },
                    trackFallbackParamAccessed: function() {
                        return m
                    },
                    trackSynchronousPlatformIOAccessInDev: function() {
                        return A
                    },
                    trackSynchronousRequestDataAccessInDev: function() {
                        return x
                    },
                    useDynamicRouteParams: function() {
                        return B
                    }
                });
            let r = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(96540)),
                i = n(90958),
                s = n(61480),
                o = n(53074),
                a = n(27305),
                l = n(52249),
                u = n(78126),
                c = "function" == typeof r.default.unstable_postpone;

            function d(e) {
                return {
                    isDebugDynamicAccesses: e,
                    dynamicAccesses: [],
                    syncDynamicExpression: void 0,
                    syncDynamicErrorWithStack: null
                }
            }

            function h() {
                return {
                    hasSuspendedDynamic: !1,
                    hasDynamicMetadata: !1,
                    hasDynamicViewport: !1,
                    hasSyncDynamicErrors: !1,
                    dynamicErrors: []
                }
            }

            function p(e) {
                var t;
                return null == (t = e.dynamicAccesses[0]) ? void 0 : t.expression
            }

            function f(e, t, n) {
                if ((!t || "cache" !== t.type && "unstable-cache" !== t.type) && !e.forceDynamic && !e.forceStatic) {
                    if (e.dynamicShouldError) throw new s.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${n}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
                    if (t) {
                        if ("prerender-ppr" === t.type) k(e.route, n, t.dynamicTracking);
                        else if ("prerender-legacy" === t.type) {
                            t.revalidate = 0;
                            let r = new i.DynamicServerError(`Route ${e.route} couldn't be rendered statically because it used ${n}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
                            throw e.dynamicUsageDescription = n, e.dynamicUsageStack = r.stack, r
                        }
                    }
                }
            }

            function m(e, t) {
                let n = o.workUnitAsyncStorage.getStore();
                n && "prerender-ppr" === n.type && k(e.route, t, n.dynamicTracking)
            }

            function g(e, t, n) {
                let r = new i.DynamicServerError(`Route ${t.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
                throw n.revalidate = 0, t.dynamicUsageDescription = e, t.dynamicUsageStack = r.stack, r
            }

            function y(e, t) {
                t && "cache" !== t.type && "unstable-cache" !== t.type && ("prerender" === t.type || "prerender-legacy" === t.type) && (t.revalidate = 0)
            }

            function v(e, t, n) {
                let r = O(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`);
                n.controller.abort(r);
                let i = n.dynamicTracking;
                i && i.dynamicAccesses.push({
                    stack: i.isDebugDynamicAccesses ? Error().stack : void 0,
                    expression: t
                })
            }

            function b(e, t, n, r) {
                let i = r.dynamicTracking;
                return i && null === i.syncDynamicErrorWithStack && (i.syncDynamicExpression = t, i.syncDynamicErrorWithStack = n), v(e, t, r)
            }

            function A(e) {
                e.prerenderPhase = !1
            }

            function w(e, t, n, r) {
                let i = r.dynamicTracking;
                throw i && null === i.syncDynamicErrorWithStack && (i.syncDynamicExpression = t, i.syncDynamicErrorWithStack = n, !0 === r.validating && (i.syncDynamicLogged = !0)), v(e, t, r), O(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`)
            }
            let x = A;

            function S({
                reason: e,
                route: t
            }) {
                let n = o.workUnitAsyncStorage.getStore();
                k(t, e, n && "prerender-ppr" === n.type ? n.dynamicTracking : null)
            }

            function k(e, t, n) {
                L(), n && n.dynamicAccesses.push({
                    stack: n.isDebugDynamicAccesses ? Error().stack : void 0,
                    expression: t
                }), r.default.unstable_postpone(E(e, t))
            }

            function E(e, t) {
                return `Route ${e} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`
            }

            function T(e) {
                return "object" == typeof e && null !== e && "string" == typeof e.message && C(e.message)
            }

            function C(e) {
                return e.includes("needs to bail out of prerendering at this point because it used") && e.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")
            }
            if (!1 === C(E("%%%", "^^^"))) throw Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js");
            let P = "NEXT_PRERENDER_INTERRUPTED";

            function O(e) {
                let t = Error(e);
                return t.digest = P, t
            }

            function M(e) {
                return "object" == typeof e && null !== e && e.digest === P && "name" in e && "message" in e && e instanceof Error
            }

            function R(e) {
                return e.length > 0
            }

            function I(e, t) {
                return e.dynamicAccesses.push(...t.dynamicAccesses), e.dynamicAccesses
            }

            function D(e) {
                return e.filter(e => "string" == typeof e.stack && e.stack.length > 0).map(({
                    expression: e,
                    stack: t
                }) => (t = t.split("\n").slice(4).filter(e => !(e.includes("node_modules/next/") || e.includes(" (<anonymous>)") || e.includes(" (node:"))).join("\n"), `Dynamic API Usage Debug - ${e}:
${t}`))
            }

            function L() {
                if (!c) throw Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js")
            }

            function j(e) {
                L();
                let t = new AbortController;
                try {
                    r.default.unstable_postpone(e)
                } catch (e) {
                    t.abort(e)
                }
                return t.signal
            }

            function _(e, t) {
                let n = t.dynamicTracking;
                n && n.dynamicAccesses.push({
                    stack: n.isDebugDynamicAccesses ? Error().stack : void 0,
                    expression: e
                })
            }

            function B(e) {
                if ("undefined" == typeof window) {
                    let t = a.workAsyncStorage.getStore();
                    if (t && t.isStaticGeneration && t.fallbackRouteParams && t.fallbackRouteParams.size > 0) {
                        let n = o.workUnitAsyncStorage.getStore();
                        n && ("prerender" === n.type ? r.default.use((0, l.makeHangingPromise)(n.renderSignal, e)) : "prerender-ppr" === n.type ? k(t.route, e, n.dynamicTracking) : "prerender-legacy" === n.type && g(e, t, n))
                    }
                }
            }
            let F = /\n\s+at Suspense \(<anonymous>\)/,
                N = RegExp(`\\n\\s+at ${u.METADATA_BOUNDARY_NAME}[\\n\\s]`),
                V = RegExp(`\\n\\s+at ${u.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),
                z = RegExp(`\\n\\s+at ${u.OUTLET_BOUNDARY_NAME}[\\n\\s]`);

            function U(e, t, n, r, i) {
                if (!z.test(t)) {
                    if (N.test(t)) {
                        n.hasDynamicMetadata = !0;
                        return
                    }
                    if (V.test(t)) {
                        n.hasDynamicViewport = !0;
                        return
                    }
                    if (F.test(t)) {
                        n.hasSuspendedDynamic = !0;
                        return
                    }
                    if (r.syncDynamicErrorWithStack || i.syncDynamicErrorWithStack) {
                        n.hasSyncDynamicErrors = !0;
                        return
                    } else {
                        let r = function(e, t) {
                            let n = Error(e);
                            return n.stack = "Error: " + e + t, n
                        }(`Route "${e}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`, t);
                        n.dynamicErrors.push(r);
                        return
                    }
                }
            }

            function $(e, t, n, r) {
                let i, o, a;
                if (n.syncDynamicErrorWithStack ? (i = n.syncDynamicErrorWithStack, o = n.syncDynamicExpression, a = !0 === n.syncDynamicLogged) : r.syncDynamicErrorWithStack ? (i = r.syncDynamicErrorWithStack, o = r.syncDynamicExpression, a = !0 === r.syncDynamicLogged) : (i = null, o = void 0, a = !1), t.hasSyncDynamicErrors && i) throw a || console.error(i), new s.StaticGenBailoutError;
                let l = t.dynamicErrors;
                if (l.length) {
                    for (let e = 0; e < l.length; e++) console.error(l[e]);
                    throw new s.StaticGenBailoutError
                }
                if (!t.hasSuspendedDynamic) {
                    if (t.hasDynamicMetadata) {
                        if (i) throw console.error(i), new s.StaticGenBailoutError(`Route "${e}" has a \`generateMetadata\` that could not finish rendering before ${o} was used. Follow the instructions in the error for this expression to resolve.`);
                        throw new s.StaticGenBailoutError(`Route "${e}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`)
                    }
                    if (t.hasDynamicViewport) {
                        if (i) throw console.error(i), new s.StaticGenBailoutError(`Route "${e}" has a \`generateViewport\` that could not finish rendering before ${o} was used. Follow the instructions in the error for this expression to resolve.`);
                        throw new s.StaticGenBailoutError(`Route "${e}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`)
                    }
                }
            }
        },
        72528: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorageInstance", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = (0, n(98626).createAsyncLocalStorage)()
        },
        27305: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return r.workAsyncStorageInstance
                }
            });
            let r = n(72528)
        },
        38379: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workUnitAsyncStorageInstance", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = (0, n(98626).createAsyncLocalStorage)()
        },
        53074: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    getExpectedRequestStore: function() {
                        return i
                    },
                    getPrerenderResumeDataCache: function() {
                        return s
                    },
                    getRenderResumeDataCache: function() {
                        return o
                    },
                    workUnitAsyncStorage: function() {
                        return r.workUnitAsyncStorageInstance
                    }
                });
            let r = n(38379);

            function i(e) {
                let t = r.workUnitAsyncStorageInstance.getStore();
                if (t) {
                    if ("request" === t.type) return t;
                    if ("prerender" === t.type || "prerender-ppr" === t.type || "prerender-legacy" === t.type) throw Error(`\`${e}\` cannot be called inside a prerender. This is a bug in Next.js.`);
                    if ("cache" === t.type) throw Error(`\`${e}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`);
                    if ("unstable-cache" === t.type) throw Error(`\`${e}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`)
                }
                throw Error(`\`${e}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`)
            }

            function s(e) {
                return "prerender" === e.type || "prerender-ppr" === e.type ? e.prerenderResumeDataCache : null
            }

            function o(e) {
                return "prerender-legacy" !== e.type && "cache" !== e.type && "unstable-cache" !== e.type ? "request" === e.type ? e.renderResumeDataCache : e.prerenderResumeDataCache : null
            }
        },
        52249: (e, t) => {
            "use strict";

            function n(e, t) {
                let n = new Promise((n, r) => {
                    e.addEventListener("abort", () => {
                        r(Error(`During prerendering, ${t} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${t} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`))
                    }, {
                        once: !0
                    })
                });
                return n.catch(r), n
            }

            function r() {}
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "makeHangingPromise", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        89222: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isPostpone", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let n = Symbol.for("react.postpone");

            function r(e) {
                return "object" == typeof e && null !== e && e.$$typeof === n
            }
        },
        13368: (e, t, n) => {
            e.exports = n(86085)
        },
        29965: (e, t, n) => {
            e.exports = n(22364)
        },
        91106: (e, t, n) => {
            e.exports = n(6397)
        },
        76424: (e, t, n) => {
            e.exports = n(63750)
        },
        86715: (e, t, n) => {
            e.exports = n(88440)
        },
        2694: (e, t, n) => {
            "use strict";
            var r = n(6925);

            function i() {}

            function s() {}
            s.resetWarningCache = i, e.exports = function() {
                function e(e, t, n, i, s, o) {
                    if (o !== r) {
                        var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: s,
                    resetWarningCache: i
                };
                return n.PropTypes = n, n
            }
        },
        5556: (e, t, n) => {
            e.exports = n(2694)()
        },
        6925: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        2833: e => {
            e.exports = function(e, t, n, r) {
                var i = n ? n.call(r, e, t) : void 0;
                if (void 0 !== i) return !!i;
                if (e === t) return !0;
                if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                var s = Object.keys(e),
                    o = Object.keys(t);
                if (s.length !== o.length) return !1;
                for (var a = Object.prototype.hasOwnProperty.bind(t), l = 0; l < s.length; l++) {
                    var u = s[l];
                    if (!a(u)) return !1;
                    var c = e[u],
                        d = t[u];
                    if (!1 === (i = n ? n.call(r, c, d, u) : void 0) || void 0 === i && c !== d) return !1
                }
                return !0
            }
        },
        51133: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var n = null;
                if (!e || "string" != typeof e) return n;
                var r = (0, i.default)(e),
                    s = "function" == typeof t;
                return r.forEach(function(e) {
                    if ("declaration" === e.type) {
                        var r = e.property,
                            i = e.value;
                        s ? t(r, i, e) : i && ((n = n || {})[r] = i)
                    }
                }), n
            };
            var i = r(n(19788))
        },
        33540: (e, t, n) => {
            "use strict";
            n.d(t, {
                DU: () => tg,
                AH: () => th,
                Ay: () => tf,
                i7: () => ty
            });
            var r = function() {
                return (r = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function i(e, t, n) {
                if (n || 2 == arguments.length)
                    for (var r, i = 0, s = t.length; i < s; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }
            Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
            var s = n(96540),
                o = n(2833),
                a = n.n(o),
                l = "-ms-",
                u = "-moz-",
                c = "-webkit-",
                d = "comm",
                h = "rule",
                p = "decl",
                f = "@keyframes",
                m = Math.abs,
                g = String.fromCharCode,
                y = Object.assign;

            function v(e, t) {
                return (e = t.exec(e)) ? e[0] : e
            }

            function b(e, t, n) {
                return e.replace(t, n)
            }

            function A(e, t, n) {
                return e.indexOf(t, n)
            }

            function w(e, t) {
                return 0 | e.charCodeAt(t)
            }

            function x(e, t, n) {
                return e.slice(t, n)
            }

            function S(e) {
                return e.length
            }

            function k(e, t) {
                return t.push(e), e
            }

            function E(e, t) {
                return e.filter(function(e) {
                    return !v(e, t)
                })
            }
            var T = 1,
                C = 1,
                P = 0,
                O = 0,
                M = 0,
                R = "";

            function I(e, t, n, r, i, s, o, a) {
                return {
                    value: e,
                    root: t,
                    parent: n,
                    type: r,
                    props: i,
                    children: s,
                    line: T,
                    column: C,
                    length: o,
                    return: "",
                    siblings: a
                }
            }

            function D(e, t) {
                return y(I("", null, null, "", null, null, 0, e.siblings), e, {
                    length: -e.length
                }, t)
            }

            function L(e) {
                for (; e.root;) e = D(e.root, {
                    children: [e]
                });
                k(e, e.siblings)
            }

            function j() {
                return M = O < P ? w(R, O++) : 0, C++, 10 === M && (C = 1, T++), M
            }

            function _() {
                return w(R, O)
            }

            function B(e) {
                switch (e) {
                    case 0:
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        return 5;
                    case 33:
                    case 43:
                    case 44:
                    case 47:
                    case 62:
                    case 64:
                    case 126:
                    case 59:
                    case 123:
                    case 125:
                        return 4;
                    case 58:
                        return 3;
                    case 34:
                    case 39:
                    case 40:
                    case 91:
                        return 2;
                    case 41:
                    case 93:
                        return 1
                }
                return 0
            }

            function F(e) {
                var t, n;
                return (t = O - 1, n = function e(t) {
                    for (; j();) switch (M) {
                        case t:
                            return O;
                        case 34:
                        case 39:
                            34 !== t && 39 !== t && e(M);
                            break;
                        case 40:
                            41 === t && e(t);
                            break;
                        case 92:
                            j()
                    }
                    return O
                }(91 === e ? e + 2 : 40 === e ? e + 1 : e), x(R, t, n)).trim()
            }

            function N(e, t) {
                for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
                return n
            }

            function V(e, t, n, r) {
                switch (e.type) {
                    case "@layer":
                        if (e.children.length) break;
                    case "@import":
                    case p:
                        return e.return = e.return || e.value;
                    case d:
                        return "";
                    case f:
                        return e.return = e.value + "{" + N(e.children, r) + "}";
                    case h:
                        if (!S(e.value = e.props.join(","))) return ""
                }
                return S(n = N(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
            }

            function z(e, t, n, r) {
                if (e.length > -1 && !e.return) switch (e.type) {
                    case p:
                        e.return = function e(t, n, r) {
                            var i;
                            switch (i = n, 45 ^ w(t, 0) ? (((i << 2 ^ w(t, 0)) << 2 ^ w(t, 1)) << 2 ^ w(t, 2)) << 2 ^ w(t, 3) : 0) {
                                case 5103:
                                    return c + "print-" + t + t;
                                case 5737:
                                case 4201:
                                case 3177:
                                case 3433:
                                case 1641:
                                case 4457:
                                case 2921:
                                case 5572:
                                case 6356:
                                case 5844:
                                case 3191:
                                case 6645:
                                case 3005:
                                case 6391:
                                case 5879:
                                case 5623:
                                case 6135:
                                case 4599:
                                case 4855:
                                case 4215:
                                case 6389:
                                case 5109:
                                case 5365:
                                case 5621:
                                case 3829:
                                    return c + t + t;
                                case 4789:
                                    return u + t + t;
                                case 5349:
                                case 4246:
                                case 4810:
                                case 6968:
                                case 2756:
                                    return c + t + u + t + l + t + t;
                                case 5936:
                                    switch (w(t, n + 11)) {
                                        case 114:
                                            return c + t + l + b(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                                        case 108:
                                            return c + t + l + b(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
                                        case 45:
                                            return c + t + l + b(t, /[svh]\w+-[tblr]{2}/, "lr") + t
                                    }
                                case 6828:
                                case 4268:
                                case 2903:
                                    return c + t + l + t + t;
                                case 6165:
                                    return c + t + l + "flex-" + t + t;
                                case 5187:
                                    return c + t + b(t, /(\w+).+(:[^]+)/, c + "box-$1$2" + l + "flex-$1$2") + t;
                                case 5443:
                                    return c + t + l + "flex-item-" + b(t, /flex-|-self/g, "") + (v(t, /flex-|baseline/) ? "" : l + "grid-row-" + b(t, /flex-|-self/g, "")) + t;
                                case 4675:
                                    return c + t + l + "flex-line-pack" + b(t, /align-content|flex-|-self/g, "") + t;
                                case 5548:
                                    return c + t + l + b(t, "shrink", "negative") + t;
                                case 5292:
                                    return c + t + l + b(t, "basis", "preferred-size") + t;
                                case 6060:
                                    return c + "box-" + b(t, "-grow", "") + c + t + l + b(t, "grow", "positive") + t;
                                case 4554:
                                    return c + b(t, /([^-])(transform)/g, "$1" + c + "$2") + t;
                                case 6187:
                                    return b(b(b(t, /(zoom-|grab)/, c + "$1"), /(image-set)/, c + "$1"), t, "") + t;
                                case 5495:
                                case 3959:
                                    return b(t, /(image-set\([^]*)/, c + "$1$`$1");
                                case 4968:
                                    return b(b(t, /(.+:)(flex-)?(.*)/, c + "box-pack:$3" + l + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + c + t + t;
                                case 4200:
                                    if (!v(t, /flex-|baseline/)) return l + "grid-column-align" + x(t, n) + t;
                                    break;
                                case 2592:
                                case 3360:
                                    return l + b(t, "template-", "") + t;
                                case 4384:
                                case 3616:
                                    if (r && r.some(function(e, t) {
                                            return n = t, v(e.props, /grid-\w+-end/)
                                        })) return ~A(t + (r = r[n].value), "span", 0) ? t : l + b(t, "-start", "") + t + l + "grid-row-span:" + (~A(r, "span", 0) ? v(r, /\d+/) : +v(r, /\d+/) - +v(t, /\d+/)) + ";";
                                    return l + b(t, "-start", "") + t;
                                case 4896:
                                case 4128:
                                    return r && r.some(function(e) {
                                        return v(e.props, /grid-\w+-start/)
                                    }) ? t : l + b(b(t, "-end", "-span"), "span ", "") + t;
                                case 4095:
                                case 3583:
                                case 4068:
                                case 2532:
                                    return b(t, /(.+)-inline(.+)/, c + "$1$2") + t;
                                case 8116:
                                case 7059:
                                case 5753:
                                case 5535:
                                case 5445:
                                case 5701:
                                case 4933:
                                case 4677:
                                case 5533:
                                case 5789:
                                case 5021:
                                case 4765:
                                    if (S(t) - 1 - n > 6) switch (w(t, n + 1)) {
                                        case 109:
                                            if (45 !== w(t, n + 4)) break;
                                        case 102:
                                            return b(t, /(.+:)(.+)-([^]+)/, "$1" + c + "$2-$3$1" + u + (108 == w(t, n + 3) ? "$3" : "$2-$3")) + t;
                                        case 115:
                                            return ~A(t, "stretch", 0) ? e(b(t, "stretch", "fill-available"), n, r) + t : t
                                    }
                                    break;
                                case 5152:
                                case 5920:
                                    return b(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, r, i, s, o, a) {
                                        return l + n + ":" + r + a + (i ? l + n + "-span:" + (s ? o : +o - +r) + a : "") + t
                                    });
                                case 4949:
                                    if (121 === w(t, n + 6)) return b(t, ":", ":" + c) + t;
                                    break;
                                case 6444:
                                    switch (w(t, 45 === w(t, 14) ? 18 : 11)) {
                                        case 120:
                                            return b(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + c + (45 === w(t, 14) ? "inline-" : "") + "box$3$1" + c + "$2$3$1" + l + "$2box$3") + t;
                                        case 100:
                                            return b(t, ":", ":" + l) + t
                                    }
                                    break;
                                case 5719:
                                case 2647:
                                case 2135:
                                case 3927:
                                case 2391:
                                    return b(t, "scroll-", "scroll-snap-") + t
                            }
                            return t
                        }(e.value, e.length, n);
                        return;
                    case f:
                        return N([D(e, {
                            value: b(e.value, "@", "@" + c)
                        })], r);
                    case h:
                        if (e.length) {
                            var i, s;
                            return i = n = e.props, s = function(t) {
                                switch (v(t, r = /(::plac\w+|:read-\w+)/)) {
                                    case ":read-only":
                                    case ":read-write":
                                        L(D(e, {
                                            props: [b(t, /:(read-\w+)/, ":" + u + "$1")]
                                        })), L(D(e, {
                                            props: [t]
                                        })), y(e, {
                                            props: E(n, r)
                                        });
                                        break;
                                    case "::placeholder":
                                        L(D(e, {
                                            props: [b(t, /:(plac\w+)/, ":" + c + "input-$1")]
                                        })), L(D(e, {
                                            props: [b(t, /:(plac\w+)/, ":" + u + "$1")]
                                        })), L(D(e, {
                                            props: [b(t, /:(plac\w+)/, l + "input-$1")]
                                        })), L(D(e, {
                                            props: [t]
                                        })), y(e, {
                                            props: E(n, r)
                                        })
                                }
                                return ""
                            }, i.map(s).join("")
                        }
                }
            }

            function U(e, t, n, r, i, s, o, a, l, u, c, d) {
                for (var p = i - 1, f = 0 === i ? s : [""], g = f.length, y = 0, v = 0, A = 0; y < r; ++y)
                    for (var w = 0, S = x(e, p + 1, p = m(v = o[y])), k = e; w < g; ++w)(k = (v > 0 ? f[w] + " " + S : b(S, /&\f/g, f[w])).trim()) && (l[A++] = k);
                return I(e, t, n, 0 === i ? h : a, l, u, c, d)
            }

            function $(e, t, n, r, i) {
                return I(e, t, n, p, x(e, 0, r), x(e, r + 1, -1), r, i)
            }
            var q = {
                    animationIterationCount: 1,
                    aspectRatio: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                },
                W = n(77836),
                H = void 0 !== W && void 0 !== W.env && (W.env.REACT_APP_SC_ATTR || W.env.SC_ATTR) || "data-styled",
                G = "active",
                Q = "data-styled-version",
                Y = "6.1.15",
                K = "/*!sc*/\n",
                J = "undefined" != typeof window && "HTMLElement" in window,
                X = !!("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : void 0 !== W && void 0 !== W.env && void 0 !== W.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== W.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== W.env.REACT_APP_SC_DISABLE_SPEEDY && W.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== W && void 0 !== W.env && void 0 !== W.env.SC_DISABLE_SPEEDY && "" !== W.env.SC_DISABLE_SPEEDY && "false" !== W.env.SC_DISABLE_SPEEDY && W.env.SC_DISABLE_SPEEDY),
                Z = {},
                ee = Object.freeze([]),
                et = Object.freeze({});

            function en(e, t, n) {
                return void 0 === n && (n = et), e.theme !== n.theme && e.theme || t || n.theme
            }
            var er = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]),
                ei = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                es = /(^-|-$)/g;

            function eo(e) {
                return e.replace(ei, "-").replace(es, "")
            }
            var ea = /(a)(d)/gi,
                el = function(e) {
                    return String.fromCharCode(e + (e > 25 ? 39 : 97))
                };

            function eu(e) {
                var t, n = "";
                for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = el(t % 52) + n;
                return (el(t % 52) + n).replace(ea, "$1-$2")
            }
            var ec, ed = function(e, t) {
                    for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
                    return e
                },
                eh = function(e) {
                    return ed(5381, e)
                };

            function ep(e) {
                return eu(eh(e) >>> 0)
            }

            function ef(e) {
                return "string" == typeof e
            }
            var em = "function" == typeof Symbol && Symbol.for,
                eg = em ? Symbol.for("react.memo") : 60115,
                ey = em ? Symbol.for("react.forward_ref") : 60112,
                ev = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                eb = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                eA = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                ew = ((ec = {})[ey] = {
                    $$typeof: !0,
                    render: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0
                }, ec[eg] = eA, ec);

            function ex(e) {
                return ("type" in e && e.type.$$typeof) === eg ? eA : "$$typeof" in e ? ew[e.$$typeof] : ev
            }
            var eS = Object.defineProperty,
                ek = Object.getOwnPropertyNames,
                eE = Object.getOwnPropertySymbols,
                eT = Object.getOwnPropertyDescriptor,
                eC = Object.getPrototypeOf,
                eP = Object.prototype;

            function eO(e) {
                return "function" == typeof e
            }

            function eM(e) {
                return "object" == typeof e && "styledComponentId" in e
            }

            function eR(e, t) {
                return e && t ? "".concat(e, " ").concat(t) : e || t || ""
            }

            function eI(e, t) {
                if (0 === e.length) return "";
                for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
                return n
            }

            function eD(e) {
                return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof)
            }

            function eL(e, t) {
                Object.defineProperty(e, "toString", {
                    value: t
                })
            }

            function ej(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""))
            }
            var e_ = function() {
                    function e(e) {
                        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
                    }
                    return e.prototype.indexOfGroup = function(e) {
                        for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                        return t
                    }, e.prototype.insertRules = function(e, t) {
                        if (e >= this.groupSizes.length) {
                            for (var n = this.groupSizes, r = n.length, i = r; e >= i;)
                                if ((i <<= 1) < 0) throw ej(16, "".concat(e));
                            this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
                            for (var s = r; s < i; s++) this.groupSizes[s] = 0
                        }
                        for (var o = this.indexOfGroup(e + 1), a = (s = 0, t.length); s < a; s++) this.tag.insertRule(o, t[s]) && (this.groupSizes[e]++, o++)
                    }, e.prototype.clearGroup = function(e) {
                        if (e < this.length) {
                            var t = this.groupSizes[e],
                                n = this.indexOfGroup(e),
                                r = n + t;
                            this.groupSizes[e] = 0;
                            for (var i = n; i < r; i++) this.tag.deleteRule(n)
                        }
                    }, e.prototype.getGroup = function(e) {
                        var t = "";
                        if (e >= this.length || 0 === this.groupSizes[e]) return t;
                        for (var n = this.groupSizes[e], r = this.indexOfGroup(e), i = r + n, s = r; s < i; s++) t += "".concat(this.tag.getRule(s)).concat(K);
                        return t
                    }, e
                }(),
                eB = new Map,
                eF = new Map,
                eN = 1,
                eV = function(e) {
                    if (eB.has(e)) return eB.get(e);
                    for (; eF.has(eN);) eN++;
                    var t = eN++;
                    return eB.set(e, t), eF.set(t, e), t
                },
                ez = function(e, t) {
                    eN = t + 1, eB.set(e, t), eF.set(t, e)
                },
                eU = "style[".concat(H, "][").concat(Q, '="').concat(Y, '"]'),
                e$ = new RegExp("^".concat(H, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
                eq = function(e, t, n) {
                    for (var r, i = n.split(","), s = 0, o = i.length; s < o; s++)(r = i[s]) && e.registerName(t, r)
                },
                eW = function(e, t) {
                    for (var n, r = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(K), i = [], s = 0, o = r.length; s < o; s++) {
                        var a = r[s].trim();
                        if (a) {
                            var l = a.match(e$);
                            if (l) {
                                var u = 0 | parseInt(l[1], 10),
                                    c = l[2];
                                0 !== u && (ez(c, u), eq(e, c, l[3]), e.getTag().insertRules(u, i)), i.length = 0
                            } else i.push(a)
                        }
                    }
                },
                eH = function(e) {
                    for (var t = document.querySelectorAll(eU), n = 0, r = t.length; n < r; n++) {
                        var i = t[n];
                        i && i.getAttribute(H) !== G && (eW(e, i), i.parentNode && i.parentNode.removeChild(i))
                    }
                },
                eG = function(e) {
                    var t, r = document.head,
                        i = e || r,
                        s = document.createElement("style"),
                        o = (t = Array.from(i.querySelectorAll("style[".concat(H, "]"))))[t.length - 1],
                        a = void 0 !== o ? o.nextSibling : null;
                    s.setAttribute(H, G), s.setAttribute(Q, Y);
                    var l = n.nc;
                    return l && s.setAttribute("nonce", l), i.insertBefore(s, a), s
                },
                eQ = function() {
                    function e(e) {
                        this.element = eG(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                                var i = t[n];
                                if (i.ownerNode === e) return i
                            }
                            throw ej(17)
                        }(this.element), this.length = 0
                    }
                    return e.prototype.insertRule = function(e, t) {
                        try {
                            return this.sheet.insertRule(t, e), this.length++, !0
                        } catch (e) {
                            return !1
                        }
                    }, e.prototype.deleteRule = function(e) {
                        this.sheet.deleteRule(e), this.length--
                    }, e.prototype.getRule = function(e) {
                        var t = this.sheet.cssRules[e];
                        return t && t.cssText ? t.cssText : ""
                    }, e
                }(),
                eY = function() {
                    function e(e) {
                        this.element = eG(e), this.nodes = this.element.childNodes, this.length = 0
                    }
                    return e.prototype.insertRule = function(e, t) {
                        if (e <= this.length && e >= 0) {
                            var n = document.createTextNode(t);
                            return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0
                        }
                        return !1
                    }, e.prototype.deleteRule = function(e) {
                        this.element.removeChild(this.nodes[e]), this.length--
                    }, e.prototype.getRule = function(e) {
                        return e < this.length ? this.nodes[e].textContent : ""
                    }, e
                }(),
                eK = function() {
                    function e(e) {
                        this.rules = [], this.length = 0
                    }
                    return e.prototype.insertRule = function(e, t) {
                        return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
                    }, e.prototype.deleteRule = function(e) {
                        this.rules.splice(e, 1), this.length--
                    }, e.prototype.getRule = function(e) {
                        return e < this.length ? this.rules[e] : ""
                    }, e
                }(),
                eJ = J,
                eX = {
                    isServer: !J,
                    useCSSOMInjection: !X
                },
                eZ = function() {
                    function e(e, t, n) {
                        void 0 === e && (e = et), void 0 === t && (t = {});
                        var i = this;
                        this.options = r(r({}, eX), e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && J && eJ && (eJ = !1, eH(this)), eL(this, function() {
                            return function(e) {
                                for (var t = e.getTag(), n = t.length, r = "", i = 0; i < n; i++)(function(n) {
                                    var i = eF.get(n);
                                    if (void 0 !== i) {
                                        var s = e.names.get(i),
                                            o = t.getGroup(n);
                                        if (void 0 !== s && s.size && 0 !== o.length) {
                                            var a = "".concat(H, ".g").concat(n, '[id="').concat(i, '"]'),
                                                l = "";
                                            void 0 !== s && s.forEach(function(e) {
                                                e.length > 0 && (l += "".concat(e, ","))
                                            }), r += "".concat(o).concat(a, '{content:"').concat(l, '"}').concat(K)
                                        }
                                    }
                                })(i);
                                return r
                            }(i)
                        })
                    }
                    return e.registerId = function(e) {
                        return eV(e)
                    }, e.prototype.rehydrate = function() {
                        !this.server && J && eH(this)
                    }, e.prototype.reconstructWithOptions = function(t, n) {
                        return void 0 === n && (n = !0), new e(r(r({}, this.options), t), this.gs, n && this.names || void 0)
                    }, e.prototype.allocateGSInstance = function(e) {
                        return this.gs[e] = (this.gs[e] || 0) + 1
                    }, e.prototype.getTag = function() {
                        var e, t, n;
                        return this.tag || (this.tag = (t = (e = this.options).useCSSOMInjection, n = e.target, new e_(e.isServer ? new eK(n) : t ? new eQ(n) : new eY(n))))
                    }, e.prototype.hasNameForId = function(e, t) {
                        return this.names.has(e) && this.names.get(e).has(t)
                    }, e.prototype.registerName = function(e, t) {
                        if (eV(e), this.names.has(e)) this.names.get(e).add(t);
                        else {
                            var n = new Set;
                            n.add(t), this.names.set(e, n)
                        }
                    }, e.prototype.insertRules = function(e, t, n) {
                        this.registerName(e, t), this.getTag().insertRules(eV(e), n)
                    }, e.prototype.clearNames = function(e) {
                        this.names.has(e) && this.names.get(e).clear()
                    }, e.prototype.clearRules = function(e) {
                        this.getTag().clearGroup(eV(e)), this.clearNames(e)
                    }, e.prototype.clearTag = function() {
                        this.tag = void 0
                    }, e
                }(),
                e0 = /&/g,
                e1 = /^\s*\/\/.*$/gm;

            function e2(e) {
                var t, n, r, i = void 0 === e ? et : e,
                    s = i.options,
                    o = void 0 === s ? et : s,
                    a = i.plugins,
                    l = void 0 === a ? ee : a,
                    u = function(e, r, i) {
                        return i.startsWith(n) && i.endsWith(n) && i.replaceAll(n, "").length > 0 ? ".".concat(t) : e
                    },
                    c = l.slice();
                c.push(function(e) {
                    e.type === h && e.value.includes("&") && (e.props[0] = e.props[0].replace(e0, n).replace(r, u))
                }), o.prefix && c.push(z), c.push(V);
                var p = function(e, i, s, a) {
                    void 0 === i && (i = ""), void 0 === s && (s = ""), void 0 === a && (a = "&"), t = a, n = i, r = RegExp("\\".concat(n, "\\b"), "g");
                    var l, u, h, p, f, y, v = e.replace(e1, ""),
                        E = (f = function e(t, n, r, i, s, o, a, l, u) {
                            for (var c, h = 0, p = 0, f = a, y = 0, v = 0, E = 0, P = 1, D = 1, L = 1, N = 0, V = "", z = s, q = o, W = i, H = V; D;) switch (E = N, N = j()) {
                                case 40:
                                    if (108 != E && 58 == w(H, f - 1)) {
                                        -1 != A(H += b(F(N), "&", "&\f"), "&\f", m(h ? l[h - 1] : 0)) && (L = -1);
                                        break
                                    }
                                case 34:
                                case 39:
                                case 91:
                                    H += F(N);
                                    break;
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    H += function(e) {
                                        for (; M = _();)
                                            if (M < 33) j();
                                            else break;
                                        return B(e) > 2 || B(M) > 3 ? "" : " "
                                    }(E);
                                    break;
                                case 92:
                                    H += function(e, t) {
                                        for (var n; --t && j() && !(M < 48) && !(M > 102) && (!(M > 57) || !(M < 65)) && (!(M > 70) || !(M < 97)););
                                        return n = O + (t < 6 && 32 == _() && 32 == j()), x(R, e, n)
                                    }(O - 1, 7);
                                    continue;
                                case 47:
                                    switch (_()) {
                                        case 42:
                                        case 47:
                                            k(I(c = function(e, t) {
                                                for (; j();)
                                                    if (e + M === 57) break;
                                                    else if (e + M === 84 && 47 === _()) break;
                                                return "/*" + x(R, t, O - 1) + "*" + g(47 === e ? e : j())
                                            }(j(), O), n, r, d, g(M), x(c, 2, -2), 0, u), u);
                                            break;
                                        default:
                                            H += "/"
                                    }
                                    break;
                                case 123 * P:
                                    l[h++] = S(H) * L;
                                case 125 * P:
                                case 59:
                                case 0:
                                    switch (N) {
                                        case 0:
                                        case 125:
                                            D = 0;
                                        case 59 + p:
                                            -1 == L && (H = b(H, /\f/g, "")), v > 0 && S(H) - f && k(v > 32 ? $(H + ";", i, r, f - 1, u) : $(b(H, " ", "") + ";", i, r, f - 2, u), u);
                                            break;
                                        case 59:
                                            H += ";";
                                        default:
                                            if (k(W = U(H, n, r, h, p, s, l, V, z = [], q = [], f, o), o), 123 === N) {
                                                if (0 === p) e(H, n, W, W, z, o, f, l, q);
                                                else switch (99 === y && 110 === w(H, 3) ? 100 : y) {
                                                    case 100:
                                                    case 108:
                                                    case 109:
                                                    case 115:
                                                        e(t, W, W, i && k(U(t, W, W, 0, 0, s, l, V, s, z = [], f, q), q), s, q, f, l, i ? z : q);
                                                        break;
                                                    default:
                                                        e(H, W, W, W, [""], q, 0, l, q)
                                                }
                                            }
                                    }
                                    h = p = v = 0, P = L = 1, V = H = "", f = a;
                                    break;
                                case 58:
                                    f = 1 + S(H), v = E;
                                default:
                                    if (P < 1) {
                                        if (123 == N) --P;
                                        else if (125 == N && 0 == P++ && 125 == (M = O > 0 ? w(R, --O) : 0, C--, 10 === M && (C = 1, T--), M)) continue
                                    }
                                    switch (H += g(N), N * P) {
                                        case 38:
                                            L = p > 0 ? 1 : (H += "\f", -1);
                                            break;
                                        case 44:
                                            l[h++] = (S(H) - 1) * L, L = 1;
                                            break;
                                        case 64:
                                            45 === _() && (H += F(j())), y = _(), p = f = S(V = H += function(e) {
                                                for (; !B(_());) j();
                                                return x(R, e, O)
                                            }(O)), N++;
                                            break;
                                        case 45:
                                            45 === E && 2 == S(H) && (P = 0)
                                    }
                            }
                            return o
                        }("", null, null, null, [""], (h = p = s || i ? "".concat(s, " ").concat(i, " { ").concat(v, " }") : v, T = C = 1, P = S(R = h), O = 0, p = []), 0, [0], p), R = "", f);
                    o.namespace && (E = function e(t, n) {
                        return t.map(function(t) {
                            return "rule" === t.type && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
                                return "".concat(n, " ").concat(e)
                            })), Array.isArray(t.children) && "@keyframes" !== t.type && (t.children = e(t.children, n)), t
                        })
                    }(E, o.namespace));
                    var D = [];
                    return N(E, (u = (l = c.concat((y = function(e) {
                        return D.push(e)
                    }, function(e) {
                        !e.root && (e = e.return) && y(e)
                    }))).length, function(e, t, n, r) {
                        for (var i = "", s = 0; s < u; s++) i += l[s](e, t, n, r) || "";
                        return i
                    })), D
                };
                return p.hash = l.length ? l.reduce(function(e, t) {
                    return t.name || ej(15), ed(e, t.name)
                }, 5381).toString() : "", p
            }
            var e4 = new eZ,
                e5 = e2(),
                e3 = s.createContext({
                    shouldForwardProp: void 0,
                    styleSheet: e4,
                    stylis: e5
                }),
                e6 = (e3.Consumer, s.createContext(void 0));

            function e8() {
                return (0, s.useContext)(e3)
            }

            function e9(e) {
                var t = (0, s.useState)(e.stylisPlugins),
                    n = t[0],
                    r = t[1],
                    i = e8().styleSheet,
                    o = (0, s.useMemo)(function() {
                        var t = i;
                        return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
                            target: e.target
                        }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
                            useCSSOMInjection: !1
                        })), t
                    }, [e.disableCSSOMInjection, e.sheet, e.target, i]),
                    l = (0, s.useMemo)(function() {
                        return e2({
                            options: {
                                namespace: e.namespace,
                                prefix: e.enableVendorPrefixes
                            },
                            plugins: n
                        })
                    }, [e.enableVendorPrefixes, e.namespace, n]);
                (0, s.useEffect)(function() {
                    a()(n, e.stylisPlugins) || r(e.stylisPlugins)
                }, [e.stylisPlugins]);
                var u = (0, s.useMemo)(function() {
                    return {
                        shouldForwardProp: e.shouldForwardProp,
                        styleSheet: o,
                        stylis: l
                    }
                }, [e.shouldForwardProp, o, l]);
                return s.createElement(e3.Provider, {
                    value: u
                }, s.createElement(e6.Provider, {
                    value: l
                }, e.children))
            }
            var e7 = function() {
                function e(e, t) {
                    var n = this;
                    this.inject = function(e, t) {
                        void 0 === t && (t = e5);
                        var r = n.name + t.hash;
                        e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
                    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, eL(this, function() {
                        throw ej(12, String(n.name))
                    })
                }
                return e.prototype.getName = function(e) {
                    return void 0 === e && (e = e5), this.name + e.hash
                }, e
            }();

            function te(e) {
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (1 === n && "-" === r && "-" === e[0]) return e;
                    r >= "A" && r <= "Z" ? t += "-" + r.toLowerCase() : t += r
                }
                return t.startsWith("ms-") ? "-" + t : t
            }
            var tt = function(e) {
                    return null == e || !1 === e || "" === e
                },
                tn = function(e) {
                    var t = [];
                    for (var n in e) {
                        var r = e[n];
                        e.hasOwnProperty(n) && !tt(r) && (Array.isArray(r) && r.isCss || eO(r) ? t.push("".concat(te(n), ":"), r, ";") : eD(r) ? t.push.apply(t, i(i(["".concat(n, " {")], tn(r), !1), ["}"], !1)) : t.push("".concat(te(n), ": ").concat(null == r || "boolean" == typeof r || "" === r ? "" : "number" != typeof r || 0 === r || n in q || n.startsWith("--") ? String(r).trim() : "".concat(r, "px"), ";")))
                    }
                    return t
                };

            function tr(e, t, n, r) {
                return tt(e) ? [] : eM(e) ? [".".concat(e.styledComponentId)] : eO(e) ? !eO(e) || e.prototype && e.prototype.isReactComponent || !t ? [e] : tr(e(t), t, n, r) : e instanceof e7 ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : eD(e) ? tn(e) : Array.isArray(e) ? Array.prototype.concat.apply(ee, e.map(function(e) {
                    return tr(e, t, n, r)
                })) : [e.toString()]
            }

            function ti(e) {
                for (var t = 0; t < e.length; t += 1) {
                    var n = e[t];
                    if (eO(n) && !eM(n)) return !1
                }
                return !0
            }
            var ts = eh(Y),
                to = function() {
                    function e(e, t, n) {
                        this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && ti(e), this.componentId = t, this.baseHash = ed(ts, t), this.baseStyle = n, eZ.registerId(t)
                    }
                    return e.prototype.generateAndInjectStyles = function(e, t, n) {
                        var r = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
                        if (this.isStatic && !n.hash) {
                            if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) r = eR(r, this.staticRulesId);
                            else {
                                var i = eI(tr(this.rules, e, t, n)),
                                    s = eu(ed(this.baseHash, i) >>> 0);
                                if (!t.hasNameForId(this.componentId, s)) {
                                    var o = n(i, ".".concat(s), void 0, this.componentId);
                                    t.insertRules(this.componentId, s, o)
                                }
                                r = eR(r, s), this.staticRulesId = s
                            }
                        } else {
                            for (var a = ed(this.baseHash, n.hash), l = "", u = 0; u < this.rules.length; u++) {
                                var c = this.rules[u];
                                if ("string" == typeof c) l += c;
                                else if (c) {
                                    var d = eI(tr(c, e, t, n));
                                    a = ed(a, d + u), l += d
                                }
                            }
                            if (l) {
                                var h = eu(a >>> 0);
                                t.hasNameForId(this.componentId, h) || t.insertRules(this.componentId, h, n(l, ".".concat(h), void 0, this.componentId)), r = eR(r, h)
                            }
                        }
                        return r
                    }, e
                }(),
                ta = s.createContext(void 0);
            ta.Consumer;
            var tl = {};

            function tu(e, t, n) {
                var i, o, a, l, u = eM(e),
                    c = !ef(e),
                    d = t.attrs,
                    h = void 0 === d ? ee : d,
                    p = t.componentId,
                    f = void 0 === p ? (i = t.displayName, o = t.parentComponentId, tl[a = "string" != typeof i ? "sc" : eo(i)] = (tl[a] || 0) + 1, l = "".concat(a, "-").concat(ep(Y + a + tl[a])), o ? "".concat(o, "-").concat(l) : l) : p,
                    m = t.displayName,
                    g = void 0 === m ? ef(e) ? "styled.".concat(e) : "Styled(".concat(e.displayName || e.name || "Component", ")") : m,
                    y = t.displayName && t.componentId ? "".concat(eo(t.displayName), "-").concat(t.componentId) : t.componentId || f,
                    v = u && e.attrs ? e.attrs.concat(h).filter(Boolean) : h,
                    b = t.shouldForwardProp;
                if (u && e.shouldForwardProp) {
                    var A = e.shouldForwardProp;
                    if (t.shouldForwardProp) {
                        var w = t.shouldForwardProp;
                        b = function(e, t) {
                            return A(e, t) && w(e, t)
                        }
                    } else b = A
                }
                var x = new to(n, y, u ? e.componentStyle : void 0);

                function S(e, t) {
                    return function(e, t, n) {
                        var i, o = e.attrs,
                            a = e.componentStyle,
                            l = e.defaultProps,
                            u = e.foldedComponentIds,
                            c = e.styledComponentId,
                            d = e.target,
                            h = s.useContext(ta),
                            p = e8(),
                            f = e.shouldForwardProp || p.shouldForwardProp,
                            m = en(t, h, l) || et,
                            g = function(e, t, n) {
                                for (var i, s = r(r({}, t), {
                                        className: void 0,
                                        theme: n
                                    }), o = 0; o < e.length; o += 1) {
                                    var a = eO(i = e[o]) ? i(s) : i;
                                    for (var l in a) s[l] = "className" === l ? eR(s[l], a[l]) : "style" === l ? r(r({}, s[l]), a[l]) : a[l]
                                }
                                return t.className && (s.className = eR(s.className, t.className)), s
                            }(o, t, m),
                            y = g.as || d,
                            v = {};
                        for (var b in g) void 0 === g[b] || "$" === b[0] || "as" === b || "theme" === b && g.theme === m || ("forwardedAs" === b ? v.as = g.forwardedAs : f && !f(b, y) || (v[b] = g[b]));
                        var A = (i = e8(), a.generateAndInjectStyles(g, i.styleSheet, i.stylis)),
                            w = eR(u, c);
                        return A && (w += " " + A), g.className && (w += " " + g.className), v[ef(y) && !er.has(y) ? "class" : "className"] = w, n && (v.ref = n), (0, s.createElement)(y, v)
                    }(k, e, t)
                }
                S.displayName = g;
                var k = s.forwardRef(S);
                return k.attrs = v, k.componentStyle = x, k.displayName = g, k.shouldForwardProp = b, k.foldedComponentIds = u ? eR(e.foldedComponentIds, e.styledComponentId) : "", k.styledComponentId = y, k.target = u ? e.target : e, Object.defineProperty(k, "defaultProps", {
                    get: function() {
                        return this._foldedDefaultProps
                    },
                    set: function(t) {
                        this._foldedDefaultProps = u ? function(e) {
                            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                            for (var r = 0; r < t.length; r++)(function e(t, n, r) {
                                if (void 0 === r && (r = !1), !r && !eD(t) && !Array.isArray(t)) return n;
                                if (Array.isArray(n))
                                    for (var i = 0; i < n.length; i++) t[i] = e(t[i], n[i]);
                                else if (eD(n))
                                    for (var i in n) t[i] = e(t[i], n[i]);
                                return t
                            })(e, t[r], !0);
                            return e
                        }({}, e.defaultProps, t) : t
                    }
                }), eL(k, function() {
                    return ".".concat(k.styledComponentId)
                }), c && function e(t, n, r) {
                    if ("string" != typeof n) {
                        if (eP) {
                            var i = eC(n);
                            i && i !== eP && e(t, i, r)
                        }
                        var s = ek(n);
                        eE && (s = s.concat(eE(n)));
                        for (var o = ex(t), a = ex(n), l = 0; l < s.length; ++l) {
                            var u = s[l];
                            if (!(u in eb || r && r[u] || a && u in a || o && u in o)) {
                                var c = eT(n, u);
                                try {
                                    eS(t, u, c)
                                } catch (e) {}
                            }
                        }
                    }
                    return t
                }(k, e, {
                    attrs: !0,
                    componentStyle: !0,
                    displayName: !0,
                    foldedComponentIds: !0,
                    shouldForwardProp: !0,
                    styledComponentId: !0,
                    target: !0
                }), k
            }

            function tc(e, t) {
                for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
                return n
            }
            var td = function(e) {
                return Object.assign(e, {
                    isCss: !0
                })
            };

            function th(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return eO(e) || eD(e) ? td(tr(tc(ee, i([e], t, !0)))) : 0 === t.length && 1 === e.length && "string" == typeof e[0] ? tr(e) : td(tr(tc(e, t)))
            }
            var tp = function(e) {
                    return function e(t, n, s) {
                        if (void 0 === s && (s = et), !n) throw ej(1, n);
                        var o = function(e) {
                            for (var r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
                            return t(n, s, th.apply(void 0, i([e], r, !1)))
                        };
                        return o.attrs = function(i) {
                            return e(t, n, r(r({}, s), {
                                attrs: Array.prototype.concat(s.attrs, i).filter(Boolean)
                            }))
                        }, o.withConfig = function(i) {
                            return e(t, n, r(r({}, s), i))
                        }, o
                    }(tu, e)
                },
                tf = tp;
            er.forEach(function(e) {
                tf[e] = tp(e)
            });
            var tm = function() {
                function e(e, t) {
                    this.rules = e, this.componentId = t, this.isStatic = ti(e), eZ.registerId(this.componentId + 1)
                }
                return e.prototype.createStyles = function(e, t, n, r) {
                    var i = r(eI(tr(this.rules, t, n, r)), ""),
                        s = this.componentId + e;
                    n.insertRules(s, s, i)
                }, e.prototype.removeStyles = function(e, t) {
                    t.clearRules(this.componentId + e)
                }, e.prototype.renderStyles = function(e, t, n, r) {
                    e > 2 && eZ.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r)
                }, e
            }();

            function tg(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var o = th.apply(void 0, i([e], t, !1)),
                    a = "sc-global-".concat(ep(JSON.stringify(o))),
                    l = new tm(o, a),
                    u = function(e) {
                        var t = e8(),
                            n = s.useContext(ta),
                            r = s.useRef(t.styleSheet.allocateGSInstance(a)).current;
                        return t.styleSheet.server && c(r, e, t.styleSheet, n, t.stylis), s.useLayoutEffect(function() {
                            if (!t.styleSheet.server) return c(r, e, t.styleSheet, n, t.stylis),
                                function() {
                                    return l.removeStyles(r, t.styleSheet)
                                }
                        }, [r, e, t.styleSheet, n, t.stylis]), null
                    };

                function c(e, t, n, i, s) {
                    if (l.isStatic) l.renderStyles(e, Z, n, s);
                    else {
                        var o = r(r({}, t), {
                            theme: en(t, i, u.defaultProps)
                        });
                        l.renderStyles(e, o, n, s)
                    }
                }
                return s.memo(u)
            }

            function ty(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var r = eI(th.apply(void 0, i([e], t, !1)));
                return new e7(ep(r), r)
            }! function() {
                function e() {
                    var e = this;
                    this._emitSheetCSS = function() {
                        var t = e.instance.toString();
                        if (!t) return "";
                        var r = n.nc,
                            i = eI([r && 'nonce="'.concat(r, '"'), "".concat(H, '="true"'), "".concat(Q, '="').concat(Y, '"')].filter(Boolean), " ");
                        return "<style ".concat(i, ">").concat(t, "</style>")
                    }, this.getStyleTags = function() {
                        if (e.sealed) throw ej(2);
                        return e._emitSheetCSS()
                    }, this.getStyleElement = function() {
                        if (e.sealed) throw ej(2);
                        var t, i = e.instance.toString();
                        if (!i) return [];
                        var o = ((t = {})[H] = "", t[Q] = Y, t.dangerouslySetInnerHTML = {
                                __html: i
                            }, t),
                            a = n.nc;
                        return a && (o.nonce = a), [s.createElement("style", r({}, o, {
                            key: "sc-0-0"
                        }))]
                    }, this.seal = function() {
                        e.sealed = !0
                    }, this.instance = new eZ({
                        isServer: !0
                    }), this.sealed = !1
                }
                e.prototype.collectStyles = function(e) {
                    if (this.sealed) throw ej(2);
                    return s.createElement(e9, {
                        sheet: this.instance
                    }, e)
                }, e.prototype.interleaveWithNodeStream = function(e) {
                    throw ej(3)
                }
            }()
        },
        89120: (e, t, n) => {
            "use strict";
            n.d(t, {
                xQ: () => s
            });
            var r = n(96540),
                i = n(86719);

            function s(e = !0) {
                let t = (0, r.useContext)(i.t);
                if (null === t) return [!0, null];
                let {
                    isPresent: n,
                    onExitComplete: o,
                    register: a
                } = t, l = (0, r.useId)();
                (0, r.useEffect)(() => {
                    if (e) return a(l)
                }, [e]);
                let u = (0, r.useCallback)(() => e && o && o(l), [l, o, e]);
                return !n && o ? [!1, u] : [!0]
            }
        },
        29473: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => r
            });
            let r = (0, n(96540).createContext)({})
        },
        35446: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => r
            });
            let r = (0, n(96540).createContext)({
                transformPagePoint: e => e,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        86719: (e, t, n) => {
            "use strict";
            n.d(t, {
                t: () => r
            });
            let r = (0, n(96540).createContext)(null)
        },
        90611: (e, t, n) => {
            "use strict";
            n.d(t, {
                I: () => o
            });
            var r = n(74668);
            let i = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
            var s = n(4283);

            function o(e, t) {
                let n = !1,
                    o = !0,
                    a = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    l = () => n = !0,
                    u = i.reduce((e, n) => (e[n] = function(e, t) {
                        let n = new Set,
                            r = new Set,
                            i = !1,
                            o = !1,
                            a = new WeakSet,
                            l = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            },
                            u = 0;

                        function c(t) {
                            a.has(t) && (d.schedule(t), e()), u++, t(l)
                        }
                        let d = {
                            schedule: (e, t = !1, s = !1) => {
                                let o = s && i ? n : r;
                                return t && a.add(e), o.has(e) || o.add(e), e
                            },
                            cancel: e => {
                                r.delete(e), a.delete(e)
                            },
                            process: e => {
                                if (l = e, i) {
                                    o = !0;
                                    return
                                }
                                i = !0, [n, r] = [r, n], n.forEach(c), t && s.Q.value && s.Q.value.frameloop[t].push(u), u = 0, n.clear(), i = !1, o && (o = !1, d.process(e))
                            }
                        };
                        return d
                    }(l, t ? n : void 0), e), {}),
                    {
                        read: c,
                        resolveKeyframes: d,
                        update: h,
                        preRender: p,
                        render: f,
                        postRender: m
                    } = u,
                    g = () => {
                        let i = r.W.useManualTiming ? a.timestamp : performance.now();
                        n = !1, r.W.useManualTiming || (a.delta = o ? 1e3 / 60 : Math.max(Math.min(i - a.timestamp, 40), 1)), a.timestamp = i, a.isProcessing = !0, c.process(a), d.process(a), h.process(a), p.process(a), f.process(a), m.process(a), a.isProcessing = !1, n && t && (o = !1, e(g))
                    },
                    y = () => {
                        n = !0, o = !0, a.isProcessing || e(g)
                    };
                return {
                    schedule: i.reduce((e, t) => {
                        let r = u[t];
                        return e[t] = (e, t = !1, i = !1) => (n || y(), r.schedule(e, t, i)), e
                    }, {}),
                    cancel: e => {
                        for (let t = 0; t < i.length; t++) u[i[t]].cancel(e)
                    },
                    state: a,
                    steps: u
                }
            }
        },
        10104: (e, t, n) => {
            "use strict";
            n.d(t, {
                Gt: () => i,
                PP: () => a,
                WG: () => s,
                uv: () => o
            });
            var r = n(41533);
            let {
                schedule: i,
                cancel: s,
                state: o,
                steps: a
            } = (0, n(90611).I)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : r.l, !0)
        },
        44582: (e, t, n) => {
            "use strict";
            let r;
            n.d(t, {
                k: () => a
            });
            var i = n(74668),
                s = n(10104);

            function o() {
                r = void 0
            }
            let a = {
                now: () => (void 0 === r && a.set(s.uv.isProcessing || i.W.useManualTiming ? s.uv.timestamp : performance.now()), r),
                set: e => {
                    r = e, queueMicrotask(o)
                }
            }
        },
        48067: (e, t, n) => {
            "use strict";

            function r(e) {
                return null !== e && "object" == typeof e && "function" == typeof e.start
            }

            function i(e, t, n, r) {
                if ("function" == typeof t || ("string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t)) {
                    let [i, s] = function(e) {
                        let t = [{}, {}];
                        return null == e || e.values.forEach((e, n) => {
                            t[0][n] = e.get(), t[1][n] = e.getVelocity()
                        }), t
                    }(r);
                    t = t(void 0 !== n ? n : e.custom, i, s)
                }
                return t
            }

            function s(e, t, n) {
                let r = e.getProps();
                return i(r, t, void 0 !== n ? n : r.custom, e)
            }
            n.d(t, {
                P: () => is
            });
            var o, a, l = n(35313);
            let u = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                c = new Set(u),
                d = new Set(["width", "height", "top", "left", "right", "bottom", ...u]),
                h = e => Array.isArray(e),
                p = e => !!(e && "object" == typeof e && e.mix && e.toValue),
                f = e => h(e) ? e[e.length - 1] || 0 : e;
            var m = n(24785);
            let g = e => !!(e && e.getVelocity);

            function y(e, t) {
                let n = e.getValue("willChange");
                if (g(n) && n.add) return n.add(t)
            }
            let v = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
                b = "data-" + v("framerAppearId");
            var A = n(77331),
                w = n(10104),
                x = n(74668);
            let S = {
                current: !1
            };
            var k = n(41533);
            let E = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

            function T(e, t, n, r) {
                if (e === t && n === r) return k.l;
                let i = t => (function(e, t, n, r, i) {
                    let s, o;
                    let a = 0;
                    do(s = E(o = t + (n - t) / 2, r, i) - e) > 0 ? n = o : t = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                    return o
                })(t, 0, 1, e, n);
                return e => 0 === e || 1 === e ? e : E(i(e), t, r)
            }
            let C = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
                P = e => t => 1 - e(1 - t),
                O = T(.33, 1.53, .69, .99),
                M = P(O),
                R = C(M),
                I = e => (e *= 2) < 1 ? .5 * M(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
                D = e => 1 - Math.sin(Math.acos(e)),
                L = P(D),
                j = C(D),
                _ = e => /^0[^.\s]+$/u.test(e);
            var B = n(30615),
                F = n(849);
            let N = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function V(e) {
                let [t, n] = e.slice(0, -1).split("(");
                if ("drop-shadow" === t) return e;
                let [r] = n.match(F.S) || [];
                if (!r) return e;
                let i = n.replace(r, ""),
                    s = N.has(t) ? 1 : 0;
                return r !== n && (s *= 100), t + "(" + s + i + ")"
            }
            let z = /\b([a-z-]*)\(.*?\)/gu,
                U = {
                    ...B.f,
                    getAnimatableNone: e => {
                        let t = e.match(z);
                        return t ? t.map(V).join(" ") : e
                    }
                };
            var $ = n(27739),
                q = n(82944),
                W = n(55269);
            let H = {
                    borderWidth: W.px,
                    borderTopWidth: W.px,
                    borderRightWidth: W.px,
                    borderBottomWidth: W.px,
                    borderLeftWidth: W.px,
                    borderRadius: W.px,
                    radius: W.px,
                    borderTopLeftRadius: W.px,
                    borderTopRightRadius: W.px,
                    borderBottomRightRadius: W.px,
                    borderBottomLeftRadius: W.px,
                    width: W.px,
                    maxWidth: W.px,
                    height: W.px,
                    maxHeight: W.px,
                    top: W.px,
                    right: W.px,
                    bottom: W.px,
                    left: W.px,
                    padding: W.px,
                    paddingTop: W.px,
                    paddingRight: W.px,
                    paddingBottom: W.px,
                    paddingLeft: W.px,
                    margin: W.px,
                    marginTop: W.px,
                    marginRight: W.px,
                    marginBottom: W.px,
                    marginLeft: W.px,
                    backgroundPositionX: W.px,
                    backgroundPositionY: W.px
                },
                G = {
                    rotate: W.uj,
                    rotateX: W.uj,
                    rotateY: W.uj,
                    rotateZ: W.uj,
                    scale: q.hs,
                    scaleX: q.hs,
                    scaleY: q.hs,
                    scaleZ: q.hs,
                    skew: W.uj,
                    skewX: W.uj,
                    skewY: W.uj,
                    distance: W.px,
                    translateX: W.px,
                    translateY: W.px,
                    translateZ: W.px,
                    x: W.px,
                    y: W.px,
                    z: W.px,
                    perspective: W.px,
                    transformPerspective: W.px,
                    opacity: q.X4,
                    originX: W.gQ,
                    originY: W.gQ,
                    originZ: W.px
                },
                Q = {
                    ...q.ai,
                    transform: Math.round
                },
                Y = {
                    ...H,
                    ...G,
                    zIndex: Q,
                    size: W.px,
                    fillOpacity: q.X4,
                    strokeOpacity: q.X4,
                    numOctaves: Q
                },
                K = {
                    ...Y,
                    color: $.y,
                    backgroundColor: $.y,
                    outlineColor: $.y,
                    fill: $.y,
                    stroke: $.y,
                    borderColor: $.y,
                    borderTopColor: $.y,
                    borderRightColor: $.y,
                    borderBottomColor: $.y,
                    borderLeftColor: $.y,
                    filter: U,
                    WebkitFilter: U
                },
                J = e => K[e];

            function X(e, t) {
                let n = J(e);
                return n !== U && (n = B.f), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
            }
            let Z = new Set(["auto", "none", "0"]),
                ee = e => e === q.ai || e === W.px,
                et = (e, t) => parseFloat(e.split(", ")[t]),
                en = (e, t) => (n, {
                    transform: r
                }) => {
                    if ("none" === r || !r) return 0;
                    let i = r.match(/^matrix3d\((.+)\)$/u);
                    if (i) return et(i[1], t);
                    {
                        let t = r.match(/^matrix\((.+)\)$/u);
                        return t ? et(t[1], e) : 0
                    }
                },
                er = new Set(["x", "y", "z"]),
                ei = u.filter(e => !er.has(e)),
                es = {
                    width: ({
                        x: e
                    }, {
                        paddingLeft: t = "0",
                        paddingRight: n = "0"
                    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
                    height: ({
                        y: e
                    }, {
                        paddingTop: t = "0",
                        paddingBottom: n = "0"
                    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
                    top: (e, {
                        top: t
                    }) => parseFloat(t),
                    left: (e, {
                        left: t
                    }) => parseFloat(t),
                    bottom: ({
                        y: e
                    }, {
                        top: t
                    }) => parseFloat(t) + (e.max - e.min),
                    right: ({
                        x: e
                    }, {
                        left: t
                    }) => parseFloat(t) + (e.max - e.min),
                    x: en(4, 13),
                    y: en(5, 14)
                };
            es.translateX = es.x, es.translateY = es.y;
            let eo = new Set,
                ea = !1,
                el = !1;

            function eu() {
                if (el) {
                    let e = Array.from(eo).filter(e => e.needsMeasurement),
                        t = new Set(e.map(e => e.element)),
                        n = new Map;
                    t.forEach(e => {
                        let t = function(e) {
                            let t = [];
                            return ei.forEach(n => {
                                let r = e.getValue(n);
                                void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                            }), t
                        }(e);
                        t.length && (n.set(e, t), e.render())
                    }), e.forEach(e => e.measureInitialState()), t.forEach(e => {
                        e.render();
                        let t = n.get(e);
                        t && t.forEach(([t, n]) => {
                            var r;
                            null === (r = e.getValue(t)) || void 0 === r || r.set(n)
                        })
                    }), e.forEach(e => e.measureEndState()), e.forEach(e => {
                        void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
                    })
                }
                el = !1, ea = !1, eo.forEach(e => e.complete()), eo.clear()
            }

            function ec() {
                eo.forEach(e => {
                    e.readKeyframes(), e.needsMeasurement && (el = !0)
                })
            }
            class ed {
                constructor(e, t, n, r, i, s = !1) {
                    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = s
                }
                scheduleResolve() {
                    this.isScheduled = !0, this.isAsync ? (eo.add(this), ea || (ea = !0, w.Gt.read(ec), w.Gt.resolveKeyframes(eu))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: e,
                        name: t,
                        element: n,
                        motionValue: r
                    } = this;
                    for (let i = 0; i < e.length; i++)
                        if (null === e[i]) {
                            if (0 === i) {
                                let i = null == r ? void 0 : r.get(),
                                    s = e[e.length - 1];
                                if (void 0 !== i) e[0] = i;
                                else if (n && t) {
                                    let r = n.readValue(t, s);
                                    null != r && (e[0] = r)
                                }
                                void 0 === e[0] && (e[0] = s), r && void 0 === i && r.set(e[0])
                            } else e[i] = e[i - 1]
                        }
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete() {
                    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), eo.delete(this)
                }
                cancel() {
                    this.isComplete || (this.isScheduled = !1, eo.delete(this))
                }
                resume() {
                    this.isComplete || this.scheduleResolve()
                }
            }
            var eh = n(8104);
            let ep = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
            var ef = n(40568);
            let em = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
                eg = e => t => t.test(e),
                ey = [q.ai, W.px, W.KN, W.uj, W.vw, W.vh, {
                    test: e => "auto" === e,
                    parse: e => e
                }],
                ev = e => ey.find(eg(e));
            class eb extends ed {
                constructor(e, t, n, r, i) {
                    super(e, t, n, r, i, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: e,
                        element: t,
                        name: n
                    } = this;
                    if (!t || !t.current) return;
                    super.readKeyframes();
                    for (let n = 0; n < e.length; n++) {
                        let r = e[n];
                        if ("string" == typeof r && (r = r.trim(), (0, ef.p)(r))) {
                            let i = function e(t, n, r = 1) {
                                (0, eh.V)(r <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                                let [i, s] = function(e) {
                                    let t = em.exec(e);
                                    if (!t) return [, ];
                                    let [, n, r, i] = t;
                                    return [`--${null!=n?n:r}`, i]
                                }(t);
                                if (!i) return;
                                let o = window.getComputedStyle(n).getPropertyValue(i);
                                if (o) {
                                    let e = o.trim();
                                    return ep(e) ? parseFloat(e) : e
                                }
                                return (0, ef.p)(s) ? e(s, n, r + 1) : s
                            }(r, t.current);
                            void 0 !== i && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !d.has(n) || 2 !== e.length) return;
                    let [r, i] = e, s = ev(r), o = ev(i);
                    if (s !== o) {
                        if (ee(s) && ee(o))
                            for (let t = 0; t < e.length; t++) {
                                let n = e[t];
                                "string" == typeof n && (e[t] = parseFloat(n))
                            } else this.needsMeasurement = !0
                    }
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: e,
                        name: t
                    } = this, n = [];
                    for (let t = 0; t < e.length; t++) {
                        var r;
                        ("number" == typeof(r = e[t]) ? 0 === r : null === r || "none" === r || "0" === r || _(r)) && n.push(t)
                    }
                    n.length && function(e, t, n) {
                        let r, i = 0;
                        for (; i < e.length && !r;) {
                            let t = e[i];
                            "string" == typeof t && !Z.has(t) && (0, B.V)(t).values.length && (r = e[i]), i++
                        }
                        if (r && n)
                            for (let i of t) e[i] = X(n, r)
                    }(e, n, t)
                }
                measureInitialState() {
                    let {
                        element: e,
                        unresolvedKeyframes: t,
                        name: n
                    } = this;
                    if (!e || !e.current) return;
                    "height" === n && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = es[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
                    let r = t[t.length - 1];
                    void 0 !== r && e.getValue(n, r).jump(r, !1)
                }
                measureEndState() {
                    var e;
                    let {
                        element: t,
                        name: n,
                        unresolvedKeyframes: r
                    } = this;
                    if (!t || !t.current) return;
                    let i = t.getValue(n);
                    i && i.jump(this.measuredOrigin, !1);
                    let s = r.length - 1,
                        o = r[s];
                    r[s] = es[n](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), (null === (e = this.removedTransforms) || void 0 === e ? void 0 : e.length) && this.removedTransforms.forEach(([e, n]) => {
                        t.getValue(e).set(n)
                    }), this.resolveNoneKeyframes()
                }
            }
            var eA = n(44582);
            let ew = (e, t) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (B.f.test(e) || "0" === e) && !e.startsWith("url(")),
                ex = e => null !== e;

            function eS(e, {
                repeat: t,
                repeatType: n = "loop"
            }, r) {
                let i = e.filter(ex),
                    s = t && "loop" !== n && t % 2 == 1 ? 0 : i.length - 1;
                return s && void 0 !== r ? r : i[s]
            }
            class ek {
                constructor({
                    autoplay: e = !0,
                    delay: t = 0,
                    type: n = "keyframes",
                    repeat: r = 0,
                    repeatDelay: i = 0,
                    repeatType: s = "loop",
                    ...o
                }) {
                    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = eA.k.now(), this.options = {
                        autoplay: e,
                        delay: t,
                        type: n,
                        repeat: r,
                        repeatDelay: i,
                        repeatType: s,
                        ...o
                    }, this.updateFinishedPromise()
                }
                calcStartTime() {
                    return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (ec(), eu()), this._resolved
                }
                onKeyframesResolved(e, t) {
                    this.resolvedAt = eA.k.now(), this.hasAttemptedResolve = !0;
                    let {
                        name: n,
                        type: r,
                        velocity: i,
                        delay: s,
                        onComplete: o,
                        onUpdate: a,
                        isGenerator: u
                    } = this.options;
                    if (!u && ! function(e, t, n, r) {
                            let i = e[0];
                            if (null === i) return !1;
                            if ("display" === t || "visibility" === t) return !0;
                            let s = e[e.length - 1],
                                o = ew(i, t),
                                a = ew(s, t);
                            return (0, eh.$)(o === a, `You are trying to animate ${t} from "${i}" to "${s}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${s} via the \`style\` property.`), !!o && !!a && (function(e) {
                                let t = e[0];
                                if (1 === e.length) return !0;
                                for (let n = 0; n < e.length; n++)
                                    if (e[n] !== t) return !0
                            }(e) || ("spring" === n || (0, l.WH)(n)) && r)
                        }(e, n, r, i)) {
                        if (S.current || !s) {
                            a && a(eS(e, this.options, t)), o && o(), this.resolveFinishedPromise();
                            return
                        }
                        this.options.duration = 0
                    }
                    let c = this.initPlayback(e, t);
                    !1 !== c && (this._resolved = {
                        keyframes: e,
                        finalKeyframe: t,
                        ...c
                    }, this.onPostResolved())
                }
                onPostResolved() {}
                then(e, t) {
                    return this.currentFinishedPromise.then(e, t)
                }
                flatten() {
                    this.options.type = "keyframes", this.options.ease = "linear"
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise(e => {
                        this.resolveFinishedPromise = e
                    })
                }
            }
            let eE = {
                layout: 0,
                mainThread: 0,
                waapi: 0
            };
            var eT = n(42464),
                eC = n(78955),
                eP = n(91339),
                eO = n(57177);

            function eM(e, t, n) {
                let r = Math.max(t - 5, 0);
                return (0, eO.f)(n - e(r), t - r)
            }
            let eR = {
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 0,
                duration: 800,
                bounce: .3,
                visualDuration: .3,
                restSpeed: {
                    granular: .01,
                    default: 2
                },
                restDelta: {
                    granular: .005,
                    default: .5
                },
                minDuration: .01,
                maxDuration: 10,
                minDamping: .05,
                maxDamping: 1
            };

            function eI(e, t) {
                return e * Math.sqrt(1 - t * t)
            }
            let eD = ["duration", "bounce"],
                eL = ["stiffness", "damping", "mass"];

            function ej(e, t) {
                return t.some(t => void 0 !== e[t])
            }

            function e_(e = eR.visualDuration, t = eR.bounce) {
                let n;
                let r = "object" != typeof e ? {
                        visualDuration: e,
                        keyframes: [0, 1],
                        bounce: t
                    } : e,
                    {
                        restSpeed: i,
                        restDelta: s
                    } = r,
                    o = r.keyframes[0],
                    a = r.keyframes[r.keyframes.length - 1],
                    u = {
                        done: !1,
                        value: o
                    },
                    {
                        stiffness: c,
                        damping: d,
                        mass: h,
                        duration: p,
                        velocity: f,
                        isResolvedFromDuration: m
                    } = function(e) {
                        let t = {
                            velocity: eR.velocity,
                            stiffness: eR.stiffness,
                            damping: eR.damping,
                            mass: eR.mass,
                            isResolvedFromDuration: !1,
                            ...e
                        };
                        if (!ej(e, eL) && ej(e, eD)) {
                            if (e.visualDuration) {
                                let n = 2 * Math.PI / (1.2 * e.visualDuration),
                                    r = n * n,
                                    i = 2 * (0, eT.q)(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(r);
                                t = {
                                    ...t,
                                    mass: eR.mass,
                                    stiffness: r,
                                    damping: i
                                }
                            } else {
                                let n = function({
                                    duration: e = eR.duration,
                                    bounce: t = eR.bounce,
                                    velocity: n = eR.velocity,
                                    mass: r = eR.mass
                                }) {
                                    let i, s;
                                    (0, eh.$)(e <= (0, A.f)(eR.maxDuration), "Spring duration must be 10 seconds or less");
                                    let o = 1 - t;
                                    o = (0, eT.q)(eR.minDamping, eR.maxDamping, o), e = (0, eT.q)(eR.minDuration, eR.maxDuration, (0, A.X)(e)), o < 1 ? (i = t => {
                                        let r = t * o,
                                            i = r * e;
                                        return .001 - (r - n) / eI(t, o) * Math.exp(-i)
                                    }, s = t => {
                                        let r = t * o * e,
                                            s = Math.pow(o, 2) * Math.pow(t, 2) * e,
                                            a = Math.exp(-r),
                                            l = eI(Math.pow(t, 2), o);
                                        return (r * n + n - s) * a * (-i(t) + .001 > 0 ? -1 : 1) / l
                                    }) : (i = t => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), s = t => e * e * (n - t) * Math.exp(-t * e));
                                    let a = function(e, t, n) {
                                        let r = n;
                                        for (let n = 1; n < 12; n++) r -= e(r) / t(r);
                                        return r
                                    }(i, s, 5 / e);
                                    if (e = (0, A.f)(e), isNaN(a)) return {
                                        stiffness: eR.stiffness,
                                        damping: eR.damping,
                                        duration: e
                                    };
                                    {
                                        let t = Math.pow(a, 2) * r;
                                        return {
                                            stiffness: t,
                                            damping: 2 * o * Math.sqrt(r * t),
                                            duration: e
                                        }
                                    }
                                }(e);
                                (t = {
                                    ...t,
                                    ...n,
                                    mass: eR.mass
                                }).isResolvedFromDuration = !0
                            }
                        }
                        return t
                    }({
                        ...r,
                        velocity: -(0, A.X)(r.velocity || 0)
                    }),
                    g = f || 0,
                    y = d / (2 * Math.sqrt(c * h)),
                    v = a - o,
                    b = (0, A.X)(Math.sqrt(c / h)),
                    w = 5 > Math.abs(v);
                if (i || (i = w ? eR.restSpeed.granular : eR.restSpeed.default), s || (s = w ? eR.restDelta.granular : eR.restDelta.default), y < 1) {
                    let e = eI(b, y);
                    n = t => a - Math.exp(-y * b * t) * ((g + y * b * v) / e * Math.sin(e * t) + v * Math.cos(e * t))
                } else if (1 === y) n = e => a - Math.exp(-b * e) * (v + (g + b * v) * e);
                else {
                    let e = b * Math.sqrt(y * y - 1);
                    n = t => {
                        let n = Math.exp(-y * b * t),
                            r = Math.min(e * t, 300);
                        return a - n * ((g + y * b * v) * Math.sinh(r) + e * v * Math.cosh(r)) / e
                    }
                }
                let x = {
                    calculatedDuration: m && p || null,
                    next: e => {
                        let t = n(e);
                        if (m) u.done = e >= p;
                        else {
                            let r = 0;
                            y < 1 && (r = 0 === e ? (0, A.f)(g) : eM(n, e, t));
                            let o = Math.abs(r) <= i,
                                l = Math.abs(a - t) <= s;
                            u.done = o && l
                        }
                        return u.value = u.done ? a : t, u
                    },
                    toString: () => {
                        let e = Math.min((0, l.tu)(x), l.YE),
                            t = (0, l.KZ)(t => x.next(e * t).value, e, 30);
                        return e + "ms " + t
                    }
                };
                return x
            }

            function eB({
                keyframes: e,
                velocity: t = 0,
                power: n = .8,
                timeConstant: r = 325,
                bounceDamping: i = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: c
            }) {
                let d, h;
                let p = e[0],
                    f = {
                        done: !1,
                        value: p
                    },
                    m = e => void 0 !== a && e < a || void 0 !== l && e > l,
                    g = e => void 0 === a ? l : void 0 === l ? a : Math.abs(a - e) < Math.abs(l - e) ? a : l,
                    y = n * t,
                    v = p + y,
                    b = void 0 === o ? v : o(v);
                b !== v && (y = b - p);
                let A = e => -y * Math.exp(-e / r),
                    w = e => b + A(e),
                    x = e => {
                        let t = A(e),
                            n = w(e);
                        f.done = Math.abs(t) <= u, f.value = f.done ? b : n
                    },
                    S = e => {
                        m(f.value) && (d = e, h = e_({
                            keyframes: [f.value, g(f.value)],
                            velocity: eM(w, e, f.value),
                            damping: i,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: c
                        }))
                    };
                return S(0), {
                    calculatedDuration: null,
                    next: e => {
                        let t = !1;
                        return (h || void 0 !== d || (t = !0, x(e), S(e)), void 0 !== d && e >= d) ? h.next(e - d) : (t || x(e), f)
                    }
                }
            }
            let eF = T(.42, 0, 1, 1),
                eN = T(0, 0, .58, 1),
                eV = T(.42, 0, .58, 1),
                ez = e => Array.isArray(e) && "number" != typeof e[0],
                eU = {
                    linear: k.l,
                    easeIn: eF,
                    easeInOut: eV,
                    easeOut: eN,
                    circIn: D,
                    circInOut: j,
                    circOut: L,
                    backIn: M,
                    backInOut: R,
                    backOut: O,
                    anticipate: I
                },
                e$ = e => {
                    if ((0, l.DW)(e)) {
                        (0, eh.V)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                        let [t, n, r, i] = e;
                        return T(t, n, r, i)
                    }
                    return "string" == typeof e ? ((0, eh.V)(void 0 !== eU[e], `Invalid easing type '${e}'`), eU[e]) : e
                };
            var eq = n(28844),
                eW = n(5621);

            function eH({
                duration: e = 300,
                keyframes: t,
                times: n,
                ease: r = "easeInOut"
            }) {
                let i = ez(r) ? r.map(e$) : e$(r),
                    s = {
                        done: !1,
                        value: t[0]
                    },
                    o = (n && n.length === t.length ? n : (0, eW.Z)(t)).map(t => t * e),
                    a = (0, eq.G)(o, t, {
                        ease: Array.isArray(i) ? i : t.map(() => i || eV).splice(0, t.length - 1)
                    });
                return {
                    calculatedDuration: e,
                    next: t => (s.value = a(t), s.done = t >= e, s)
                }
            }
            let eG = e => {
                    let t = ({
                        timestamp: t
                    }) => e(t);
                    return {
                        start: () => w.Gt.update(t, !0),
                        stop: () => (0, w.WG)(t),
                        now: () => w.uv.isProcessing ? w.uv.timestamp : eA.k.now()
                    }
                },
                eQ = {
                    decay: eB,
                    inertia: eB,
                    tween: eH,
                    keyframes: eH,
                    spring: e_
                },
                eY = e => e / 100;
            class eK extends ek {
                constructor(e) {
                    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
                        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                        this.teardown();
                        let {
                            onStop: e
                        } = this.options;
                        e && e()
                    };
                    let {
                        name: t,
                        motionValue: n,
                        element: r,
                        keyframes: i
                    } = this.options, s = (null == r ? void 0 : r.KeyframeResolver) || ed;
                    this.resolver = new s(i, (e, t) => this.onKeyframesResolved(e, t), t, n, r), this.resolver.scheduleResolve()
                }
                flatten() {
                    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
                }
                initPlayback(e) {
                    let t, n;
                    let {
                        type: r = "keyframes",
                        repeat: i = 0,
                        repeatDelay: s = 0,
                        repeatType: o,
                        velocity: a = 0
                    } = this.options, u = (0, l.WH)(r) ? r : eQ[r] || eH;
                    u !== eH && "number" != typeof e[0] && (t = (0, eP.F)(eY, (0, eC.j)(e[0], e[1])), e = [0, 100]);
                    let c = u({
                        ...this.options,
                        keyframes: e
                    });
                    "mirror" === o && (n = u({
                        ...this.options,
                        keyframes: [...e].reverse(),
                        velocity: -a
                    })), null === c.calculatedDuration && (c.calculatedDuration = (0, l.tu)(c));
                    let {
                        calculatedDuration: d
                    } = c, h = d + s;
                    return {
                        generator: c,
                        mirroredGenerator: n,
                        mapPercentToKeyframes: t,
                        calculatedDuration: d,
                        resolvedDuration: h,
                        totalDuration: h * (i + 1) - s
                    }
                }
                onPostResolved() {
                    let {
                        autoplay: e = !0
                    } = this.options;
                    eE.mainThread++, this.play(), "paused" !== this.pendingPlayState && e ? this.state = this.pendingPlayState : this.pause()
                }
                tick(e, t = !1) {
                    let {
                        resolved: n
                    } = this;
                    if (!n) {
                        let {
                            keyframes: e
                        } = this.options;
                        return {
                            done: !0,
                            value: e[e.length - 1]
                        }
                    }
                    let {
                        finalKeyframe: r,
                        generator: i,
                        mirroredGenerator: s,
                        mapPercentToKeyframes: o,
                        keyframes: a,
                        calculatedDuration: l,
                        totalDuration: u,
                        resolvedDuration: c
                    } = n;
                    if (null === this.startTime) return i.next(0);
                    let {
                        delay: d,
                        repeat: h,
                        repeatType: p,
                        repeatDelay: f,
                        onUpdate: m
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)), t ? this.currentTime = e : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
                    let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
                        y = this.speed >= 0 ? g < 0 : g > u;
                    this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                    let v = this.currentTime,
                        b = i;
                    if (h) {
                        let e = Math.min(this.currentTime, u) / c,
                            t = Math.floor(e),
                            n = e % 1;
                        !n && e >= 1 && (n = 1), 1 === n && t--, (t = Math.min(t, h + 1)) % 2 && ("reverse" === p ? (n = 1 - n, f && (n -= f / c)) : "mirror" === p && (b = s)), v = (0, eT.q)(0, 1, n) * c
                    }
                    let A = y ? {
                        done: !1,
                        value: a[0]
                    } : b.next(v);
                    o && (A.value = o(A.value));
                    let {
                        done: w
                    } = A;
                    y || null === l || (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                    let x = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
                    return x && void 0 !== r && (A.value = eS(a, this.options, r)), m && m(A.value), x && this.finish(), A
                }
                get duration() {
                    let {
                        resolved: e
                    } = this;
                    return e ? (0, A.X)(e.calculatedDuration) : 0
                }
                get time() {
                    return (0, A.X)(this.currentTime)
                }
                set time(e) {
                    e = (0, A.f)(e), this.currentTime = e, null !== this.holdTime || 0 === this.speed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(e) {
                    let t = this.playbackSpeed !== e;
                    this.playbackSpeed = e, t && (this.time = (0, A.X)(this.currentTime))
                }
                play() {
                    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
                        this.pendingPlayState = "running";
                        return
                    }
                    if (this.isStopped) return;
                    let {
                        driver: e = eG,
                        onPlay: t,
                        startTime: n
                    } = this.options;
                    this.driver || (this.driver = e(e => this.tick(e))), t && t();
                    let r = this.driver.now();
                    null !== this.holdTime ? this.startTime = r - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = r) : this.startTime = null != n ? n : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    var e;
                    if (!this._resolved) {
                        this.pendingPlayState = "paused";
                        return
                    }
                    this.state = "paused", this.holdTime = null !== (e = this.currentTime) && void 0 !== e ? e : 0
                }
                complete() {
                    "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.teardown(), this.state = "finished";
                    let {
                        onComplete: e
                    } = this.options;
                    e && e()
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel(), eE.mainThread--
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(e) {
                    return this.startTime = 0, this.tick(e, !0)
                }
            }
            let eJ = new Set(["opacity", "clipPath", "filter", "transform"]);
            var eX = n(4283);
            let eZ = (0, n(54435).p)(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                e0 = {
                    anticipate: I,
                    backInOut: R,
                    circInOut: j
                };
            class e1 extends ek {
                constructor(e) {
                    super(e);
                    let {
                        name: t,
                        motionValue: n,
                        element: r,
                        keyframes: i
                    } = this.options;
                    this.resolver = new eb(i, (e, t) => this.onKeyframesResolved(e, t), t, n, r), this.resolver.scheduleResolve()
                }
                initPlayback(e, t) {
                    var n;
                    let {
                        duration: r = 300,
                        times: i,
                        ease: s,
                        type: o,
                        motionValue: a,
                        name: u,
                        startTime: c
                    } = this.options;
                    if (!a.owner || !a.owner.current) return !1;
                    if ("string" == typeof s && (0, l.nL)() && s in e0 && (s = e0[s]), n = this.options, (0, l.WH)(n.type) || "spring" === n.type || !(0, l.yL)(n.ease)) {
                        let {
                            onComplete: t,
                            onUpdate: n,
                            motionValue: a,
                            element: l,
                            ...u
                        } = this.options, c = function(e, t) {
                            let n = new eK({
                                    ...t,
                                    keyframes: e,
                                    repeat: 0,
                                    delay: 0,
                                    isGenerator: !0
                                }),
                                r = {
                                    done: !1,
                                    value: e[0]
                                },
                                i = [],
                                s = 0;
                            for (; !r.done && s < 2e4;) i.push((r = n.sample(s)).value), s += 10;
                            return {
                                times: void 0,
                                keyframes: i,
                                duration: s - 10,
                                ease: "linear"
                            }
                        }(e, u);
                        1 === (e = c.keyframes).length && (e[1] = e[0]), r = c.duration, i = c.times, s = c.ease, o = "keyframes"
                    }
                    let d = function(e, t, n, {
                        delay: r = 0,
                        duration: i = 300,
                        repeat: s = 0,
                        repeatType: o = "loop",
                        ease: a = "easeInOut",
                        times: u
                    } = {}) {
                        let c = {
                            [t]: n
                        };
                        u && (c.offset = u);
                        let d = (0, l.TU)(a, i);
                        Array.isArray(d) && (c.easing = d), eX.Q.value && eE.waapi++;
                        let h = e.animate(c, {
                            delay: r,
                            duration: i,
                            easing: Array.isArray(d) ? "linear" : d,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                        });
                        return eX.Q.value && h.finished.finally(() => {
                            eE.waapi--
                        }), h
                    }(a.owner.current, u, e, {
                        ...this.options,
                        duration: r,
                        times: i,
                        ease: s
                    });
                    return d.startTime = null != c ? c : this.calcStartTime(), this.pendingTimeline ? ((0, l.vG)(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
                        let {
                            onComplete: n
                        } = this.options;
                        a.set(eS(e, this.options, t)), n && n(), this.cancel(), this.resolveFinishedPromise()
                    }, {
                        animation: d,
                        duration: r,
                        times: i,
                        type: o,
                        ease: s,
                        keyframes: e
                    }
                }
                get duration() {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return 0;
                    let {
                        duration: t
                    } = e;
                    return (0, A.X)(t)
                }
                get time() {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return 0;
                    let {
                        animation: t
                    } = e;
                    return (0, A.X)(t.currentTime || 0)
                }
                set time(e) {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: n
                    } = t;
                    n.currentTime = (0, A.f)(e)
                }
                get speed() {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return 1;
                    let {
                        animation: t
                    } = e;
                    return t.playbackRate
                }
                set speed(e) {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: n
                    } = t;
                    n.playbackRate = e
                }
                get state() {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return "idle";
                    let {
                        animation: t
                    } = e;
                    return t.playState
                }
                get startTime() {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return null;
                    let {
                        animation: t
                    } = e;
                    return t.startTime
                }
                attachTimeline(e) {
                    if (this._resolved) {
                        let {
                            resolved: t
                        } = this;
                        if (!t) return k.l;
                        let {
                            animation: n
                        } = t;
                        (0, l.vG)(n, e)
                    } else this.pendingTimeline = e;
                    return k.l
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: t
                    } = e;
                    "finished" === t.playState && this.updateFinishedPromise(), t.play()
                }
                pause() {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: t
                    } = e;
                    t.pause()
                }
                stop() {
                    if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                    this.resolveFinishedPromise(), this.updateFinishedPromise();
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: t,
                        keyframes: n,
                        duration: r,
                        type: i,
                        ease: s,
                        times: o
                    } = e;
                    if ("idle" === t.playState || "finished" === t.playState) return;
                    if (this.time) {
                        let {
                            motionValue: e,
                            onUpdate: t,
                            onComplete: a,
                            element: l,
                            ...u
                        } = this.options, c = new eK({
                            ...u,
                            keyframes: n,
                            duration: r,
                            type: i,
                            ease: s,
                            times: o,
                            isGenerator: !0
                        }), d = (0, A.f)(this.time);
                        e.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10)
                    }
                    let {
                        onStop: a
                    } = this.options;
                    a && a(), this.cancel()
                }
                complete() {
                    let {
                        resolved: e
                    } = this;
                    e && e.animation.finish()
                }
                cancel() {
                    let {
                        resolved: e
                    } = this;
                    e && e.animation.cancel()
                }
                static supports(e) {
                    let {
                        motionValue: t,
                        name: n,
                        repeatDelay: r,
                        repeatType: i,
                        damping: s,
                        type: o
                    } = e;
                    if (!t || !t.owner || !(t.owner.current instanceof HTMLElement)) return !1;
                    let {
                        onUpdate: a,
                        transformTemplate: l
                    } = t.owner.getProps();
                    return eZ() && n && eJ.has(n) && !a && !l && !r && "mirror" !== i && 0 !== s && "inertia" !== o
                }
            }
            let e2 = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                e4 = e => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                e5 = {
                    type: "keyframes",
                    duration: .8
                },
                e3 = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                e6 = (e, {
                    keyframes: t
                }) => t.length > 2 ? e5 : c.has(e) ? e.startsWith("scale") ? e4(t[1]) : e2 : e3,
                e8 = (e, t, n, r = {}, i, s) => o => {
                    let a = (0, l.rU)(r, e) || {},
                        u = a.delay || r.delay || 0,
                        {
                            elapsed: c = 0
                        } = r;
                    c -= (0, A.f)(u);
                    let d = {
                        keyframes: Array.isArray(n) ? n : [null, n],
                        ease: "easeOut",
                        velocity: t.getVelocity(),
                        ...a,
                        delay: -c,
                        onUpdate: e => {
                            t.set(e), a.onUpdate && a.onUpdate(e)
                        },
                        onComplete: () => {
                            o(), a.onComplete && a.onComplete()
                        },
                        name: e,
                        motionValue: t,
                        element: s ? void 0 : i
                    };
                    ! function({
                        when: e,
                        delay: t,
                        delayChildren: n,
                        staggerChildren: r,
                        staggerDirection: i,
                        repeat: s,
                        repeatType: o,
                        repeatDelay: a,
                        from: l,
                        elapsed: u,
                        ...c
                    }) {
                        return !!Object.keys(c).length
                    }(a) && (d = {
                        ...d,
                        ...e6(e, d)
                    }), d.duration && (d.duration = (0, A.f)(d.duration)), d.repeatDelay && (d.repeatDelay = (0, A.f)(d.repeatDelay)), void 0 !== d.from && (d.keyframes[0] = d.from);
                    let h = !1;
                    if (!1 !== d.type && (0 !== d.duration || d.repeatDelay) || (d.duration = 0, 0 !== d.delay || (h = !0)), (S.current || x.W.skipAnimations) && (h = !0, d.duration = 0, d.delay = 0), h && !s && void 0 !== t.get()) {
                        let e = eS(d.keyframes, a);
                        if (void 0 !== e) return w.Gt.update(() => {
                            d.onUpdate(e), d.onComplete()
                        }), new l.P6([])
                    }
                    return !s && e1.supports(d) ? new e1(d) : new eK(d)
                };

            function e9(e, t, {
                delay: n = 0,
                transitionOverride: r,
                type: i
            } = {}) {
                var o;
                let {
                    transition: a = e.getDefaultTransition(),
                    transitionEnd: u,
                    ...c
                } = t;
                r && (a = r);
                let h = [],
                    p = i && e.animationState && e.animationState.getState()[i];
                for (let t in c) {
                    let r = e.getValue(t, null !== (o = e.latestValues[t]) && void 0 !== o ? o : null),
                        i = c[t];
                    if (void 0 === i || p && function({
                            protectedKeys: e,
                            needsAnimating: t
                        }, n) {
                            let r = e.hasOwnProperty(n) && !0 !== t[n];
                            return t[n] = !1, r
                        }(p, t)) continue;
                    let s = {
                            delay: n,
                            ...(0, l.rU)(a || {}, t)
                        },
                        u = !1;
                    if (window.MotionHandoffAnimation) {
                        let n = e.props[b];
                        if (n) {
                            let e = window.MotionHandoffAnimation(n, t, w.Gt);
                            null !== e && (s.startTime = e, u = !0)
                        }
                    }
                    y(e, t), r.start(e8(t, r, i, e.shouldReduceMotion && d.has(t) ? {
                        type: !1
                    } : s, e, u));
                    let f = r.animation;
                    f && h.push(f)
                }
                return u && Promise.all(h).then(() => {
                    w.Gt.update(() => {
                        u && function(e, t) {
                            let {
                                transitionEnd: n = {},
                                transition: r = {},
                                ...i
                            } = s(e, t) || {};
                            for (let t in i = {
                                    ...i,
                                    ...n
                                }) {
                                let n = f(i[t]);
                                e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, (0, m.OQ)(n))
                            }
                        }(e, u)
                    })
                }), h
            }

            function e7(e, t, n = {}) {
                var r;
                let i = s(e, t, "exit" === n.type ? null === (r = e.presenceContext) || void 0 === r ? void 0 : r.custom : void 0),
                    {
                        transition: o = e.getDefaultTransition() || {}
                    } = i || {};
                n.transitionOverride && (o = n.transitionOverride);
                let a = i ? () => Promise.all(e9(e, i, n)) : () => Promise.resolve(),
                    l = e.variantChildren && e.variantChildren.size ? (r = 0) => {
                        let {
                            delayChildren: i = 0,
                            staggerChildren: s,
                            staggerDirection: a
                        } = o;
                        return function(e, t, n = 0, r = 0, i = 1, s) {
                            let o = [],
                                a = (e.variantChildren.size - 1) * r,
                                l = 1 === i ? (e = 0) => e * r : (e = 0) => a - e * r;
                            return Array.from(e.variantChildren).sort(te).forEach((e, r) => {
                                e.notify("AnimationStart", t), o.push(e7(e, t, {
                                    ...s,
                                    delay: n + l(r)
                                }).then(() => e.notify("AnimationComplete", t)))
                            }), Promise.all(o)
                        }(e, t, i + r, s, a, n)
                    } : () => Promise.resolve(),
                    {
                        when: u
                    } = o;
                if (!u) return Promise.all([a(), l(n.delay)]);
                {
                    let [e, t] = "beforeChildren" === u ? [a, l] : [l, a];
                    return e().then(() => t())
                }
            }

            function te(e, t) {
                return e.sortNodePosition(t)
            }

            function tt(e, t) {
                if (!Array.isArray(t)) return !1;
                let n = t.length;
                if (n !== e.length) return !1;
                for (let r = 0; r < n; r++)
                    if (t[r] !== e[r]) return !1;
                return !0
            }

            function tn(e) {
                return "string" == typeof e || Array.isArray(e)
            }
            let tr = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                ti = ["initial", ...tr],
                ts = ti.length,
                to = [...tr].reverse(),
                ta = tr.length;

            function tl(e = !1) {
                return {
                    isActive: e,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function tu() {
                return {
                    animate: tl(!0),
                    whileInView: tl(),
                    whileHover: tl(),
                    whileTap: tl(),
                    whileDrag: tl(),
                    whileFocus: tl(),
                    exit: tl()
                }
            }
            class tc {
                constructor(e) {
                    this.isMounted = !1, this.node = e
                }
                update() {}
            }
            class td extends tc {
                constructor(e) {
                    super(e), e.animationState || (e.animationState = function(e) {
                        let t = t => Promise.all(t.map(({
                                animation: t,
                                options: n
                            }) => (function(e, t, n = {}) {
                                let r;
                                if (e.notify("AnimationStart", t), Array.isArray(t)) r = Promise.all(t.map(t => e7(e, t, n)));
                                else if ("string" == typeof t) r = e7(e, t, n);
                                else {
                                    let i = "function" == typeof t ? s(e, t, n.custom) : t;
                                    r = Promise.all(e9(e, i, n))
                                }
                                return r.then(() => {
                                    e.notify("AnimationComplete", t)
                                })
                            })(e, t, n))),
                            n = tu(),
                            i = !0,
                            o = t => (n, r) => {
                                var i;
                                let o = s(e, r, "exit" === t ? null === (i = e.presenceContext) || void 0 === i ? void 0 : i.custom : void 0);
                                if (o) {
                                    let {
                                        transition: e,
                                        transitionEnd: t,
                                        ...r
                                    } = o;
                                    n = {
                                        ...n,
                                        ...r,
                                        ...t
                                    }
                                }
                                return n
                            };

                        function a(a) {
                            let {
                                props: l
                            } = e, u = function e(t) {
                                if (!t) return;
                                if (!t.isControllingVariants) {
                                    let n = t.parent && e(t.parent) || {};
                                    return void 0 !== t.props.initial && (n.initial = t.props.initial), n
                                }
                                let n = {};
                                for (let e = 0; e < ts; e++) {
                                    let r = ti[e],
                                        i = t.props[r];
                                    (tn(i) || !1 === i) && (n[r] = i)
                                }
                                return n
                            }(e.parent) || {}, c = [], d = new Set, p = {}, f = 1 / 0;
                            for (let t = 0; t < ta; t++) {
                                var m;
                                let s = to[t],
                                    g = n[s],
                                    y = void 0 !== l[s] ? l[s] : u[s],
                                    v = tn(y),
                                    b = s === a ? g.isActive : null;
                                !1 === b && (f = t);
                                let A = y === u[s] && y !== l[s] && v;
                                if (A && i && e.manuallyAnimateOnMount && (A = !1), g.protectedKeys = {
                                        ...p
                                    }, !g.isActive && null === b || !y && !g.prevProp || r(y) || "boolean" == typeof y) continue;
                                let w = (m = g.prevProp, "string" == typeof y ? y !== m : !!Array.isArray(y) && !tt(y, m)),
                                    x = w || s === a && g.isActive && !A && v || t > f && v,
                                    S = !1,
                                    k = Array.isArray(y) ? y : [y],
                                    E = k.reduce(o(s), {});
                                !1 === b && (E = {});
                                let {
                                    prevResolvedValues: T = {}
                                } = g, C = {
                                    ...T,
                                    ...E
                                }, P = t => {
                                    x = !0, d.has(t) && (S = !0, d.delete(t)), g.needsAnimating[t] = !0;
                                    let n = e.getValue(t);
                                    n && (n.liveStyle = !1)
                                };
                                for (let e in C) {
                                    let t = E[e],
                                        n = T[e];
                                    if (!p.hasOwnProperty(e))(h(t) && h(n) ? tt(t, n) : t === n) ? void 0 !== t && d.has(e) ? P(e) : g.protectedKeys[e] = !0 : null != t ? P(e) : d.add(e)
                                }
                                g.prevProp = y, g.prevResolvedValues = E, g.isActive && (p = {
                                    ...p,
                                    ...E
                                }), i && e.blockInitialAnimation && (x = !1);
                                let O = !(A && w) || S;
                                x && O && c.push(...k.map(e => ({
                                    animation: e,
                                    options: {
                                        type: s
                                    }
                                })))
                            }
                            if (d.size) {
                                let t = {};
                                if ("boolean" != typeof l.initial) {
                                    let n = s(e, Array.isArray(l.initial) ? l.initial[0] : l.initial);
                                    n && n.transition && (t.transition = n.transition)
                                }
                                d.forEach(n => {
                                    let r = e.getBaseTarget(n),
                                        i = e.getValue(n);
                                    i && (i.liveStyle = !0), t[n] = null != r ? r : null
                                }), c.push({
                                    animation: t
                                })
                            }
                            let g = !!c.length;
                            return i && (!1 === l.initial || l.initial === l.animate) && !e.manuallyAnimateOnMount && (g = !1), i = !1, g ? t(c) : Promise.resolve()
                        }
                        return {
                            animateChanges: a,
                            setActive: function(t, r) {
                                var i;
                                if (n[t].isActive === r) return Promise.resolve();
                                null === (i = e.variantChildren) || void 0 === i || i.forEach(e => {
                                    var n;
                                    return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
                                }), n[t].isActive = r;
                                let s = a(t);
                                for (let e in n) n[e].protectedKeys = {};
                                return s
                            },
                            setAnimateFunction: function(n) {
                                t = n(e)
                            },
                            getState: () => n,
                            reset: () => {
                                n = tu(), i = !0
                            }
                        }
                    }(e))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: e
                    } = this.node.getProps();
                    r(e) && (this.unmountControls = e.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: e
                    } = this.node.getProps(), {
                        animate: t
                    } = this.node.prevProps || {};
                    e !== t && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var e;
                    this.node.animationState.reset(), null === (e = this.unmountControls) || void 0 === e || e.call(this)
                }
            }
            let th = 0;
            class tp extends tc {
                constructor() {
                    super(...arguments), this.id = th++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: e,
                        onExitComplete: t
                    } = this.node.presenceContext, {
                        isPresent: n
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || e === n) return;
                    let r = this.node.animationState.setActive("exit", !e);
                    t && !e && r.then(() => {
                        t(this.id)
                    })
                }
                mount() {
                    let {
                        register: e,
                        onExitComplete: t
                    } = this.node.presenceContext || {};
                    t && t(this.id), e && (this.unmount = e(this.id))
                }
                unmount() {}
            }

            function tf(e, t, n, r = {
                passive: !0
            }) {
                return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
            }

            function tm(e) {
                return {
                    point: {
                        x: e.pageX,
                        y: e.pageY
                    }
                }
            }
            let tg = e => t => (0, l.Mc)(t) && e(t, tm(t));

            function ty(e, t, n, r) {
                return tf(e, t, tg(n), r)
            }

            function tv({
                top: e,
                left: t,
                right: n,
                bottom: r
            }) {
                return {
                    x: {
                        min: t,
                        max: n
                    },
                    y: {
                        min: e,
                        max: r
                    }
                }
            }
            var tb = n(39713);

            function tA(e) {
                return e.max - e.min
            }

            function tw(e, t, n, r = .5) {
                e.origin = r, e.originPoint = (0, tb.k)(t.min, t.max, e.origin), e.scale = tA(n) / tA(t), e.translate = (0, tb.k)(n.min, n.max, e.origin) - e.originPoint, (e.scale >= .9999 && e.scale <= 1.0001 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= -.01 && e.translate <= .01 || isNaN(e.translate)) && (e.translate = 0)
            }

            function tx(e, t, n, r) {
                tw(e.x, t.x, n.x, r ? r.originX : void 0), tw(e.y, t.y, n.y, r ? r.originY : void 0)
            }

            function tS(e, t, n) {
                e.min = n.min + t.min, e.max = e.min + tA(t)
            }

            function tk(e, t, n) {
                e.min = t.min - n.min, e.max = e.min + tA(t)
            }

            function tE(e, t, n) {
                tk(e.x, t.x, n.x), tk(e.y, t.y, n.y)
            }
            let tT = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                tC = () => ({
                    x: tT(),
                    y: tT()
                }),
                tP = () => ({
                    min: 0,
                    max: 0
                }),
                tO = () => ({
                    x: tP(),
                    y: tP()
                });

            function tM(e) {
                return [e("x"), e("y")]
            }

            function tR(e) {
                return void 0 === e || 1 === e
            }

            function tI({
                scale: e,
                scaleX: t,
                scaleY: n
            }) {
                return !tR(e) || !tR(t) || !tR(n)
            }

            function tD(e) {
                return tI(e) || tL(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
            }

            function tL(e) {
                var t, n;
                return (t = e.x) && "0%" !== t || (n = e.y) && "0%" !== n
            }

            function tj(e, t, n, r, i) {
                return void 0 !== i && (e = r + i * (e - r)), r + n * (e - r) + t
            }

            function t_(e, t = 0, n = 1, r, i) {
                e.min = tj(e.min, t, n, r, i), e.max = tj(e.max, t, n, r, i)
            }

            function tB(e, {
                x: t,
                y: n
            }) {
                t_(e.x, t.translate, t.scale, t.originPoint), t_(e.y, n.translate, n.scale, n.originPoint)
            }

            function tF(e, t) {
                e.min = e.min + t, e.max = e.max + t
            }

            function tN(e, t, n, r, i = .5) {
                let s = (0, tb.k)(e.min, e.max, i);
                t_(e, t, n, s, r)
            }

            function tV(e, t) {
                tN(e.x, t.x, t.scaleX, t.scale, t.originX), tN(e.y, t.y, t.scaleY, t.scale, t.originY)
            }

            function tz(e, t) {
                return tv(function(e, t) {
                    if (!t) return e;
                    let n = t({
                            x: e.left,
                            y: e.top
                        }),
                        r = t({
                            x: e.right,
                            y: e.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(e.getBoundingClientRect(), t))
            }

            function tU(e) {
                return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
            }
            let t$ = (e, t) => Math.abs(e - t);
            class tq {
                constructor(e, t, {
                    transformPagePoint: n,
                    dragSnapToOrigin: r = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let e = tG(this.lastMoveEventInfo, this.history),
                                t = null !== this.startEvent,
                                n = function(e, t) {
                                    return Math.sqrt(t$(e.x, t.x) ** 2 + t$(e.y, t.y) ** 2)
                                }(e.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!t && !n) return;
                            let {
                                point: r
                            } = e, {
                                timestamp: i
                            } = w.uv;
                            this.history.push({
                                ...r,
                                timestamp: i
                            });
                            let {
                                onStart: s,
                                onMove: o
                            } = this.handlers;
                            t || (s && s(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e)
                        }, this.handlePointerMove = (e, t) => {
                            if (e.target instanceof Element && e.target.hasPointerCapture && void 0 !== e.pointerId) try {
                                if (!e.target.hasPointerCapture(e.pointerId)) return
                            } catch (e) {}
                            this.lastMoveEvent = e, this.lastMoveEventInfo = tW(t, this.transformPagePoint), w.Gt.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (e, t) => {
                            (0, l.CD)(e, "release"), this.end();
                            let {
                                onEnd: n,
                                onSessionEnd: r,
                                resumeAnimation: i
                            } = this.handlers;
                            if (this.dragSnapToOrigin && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let s = tG("pointercancel" === e.type || "lostpointercapture" === e.type ? this.lastMoveEventInfo : tW(t, this.transformPagePoint), this.history);
                            this.startEvent && n && n(e, s), r && r(e, s)
                        }, !(0, l.Mc)(e)) return;
                    this.dragSnapToOrigin = r, this.handlers = t, this.transformPagePoint = n;
                    let i = tW(tm(e), this.transformPagePoint),
                        {
                            point: s
                        } = i,
                        {
                            timestamp: o
                        } = w.uv;
                    this.history = [{
                        ...s,
                        timestamp: o
                    }];
                    let {
                        onSessionStart: a
                    } = t;
                    a && a(e, tG(i, this.history)), (0, l.CD)(e, "set"), this.removeListeners = (0, eP.F)(ty(e.currentTarget, "pointermove", this.handlePointerMove), ty(e.currentTarget, "pointerup", this.handlePointerUp), ty(e.currentTarget, "pointercancel", this.handlePointerUp), ty(e.currentTarget, "lostpointercapture", this.handlePointerUp))
                }
                updateHandlers(e) {
                    this.handlers = e
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, w.WG)(this.updatePoint)
                }
            }

            function tW(e, t) {
                return t ? {
                    point: t(e.point)
                } : e
            }

            function tH(e, t) {
                return {
                    x: e.x - t.x,
                    y: e.y - t.y
                }
            }

            function tG({
                point: e
            }, t) {
                return {
                    point: e,
                    delta: tH(e, tQ(t)),
                    offset: tH(e, t[0]),
                    velocity: function(e, t) {
                        if (e.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let n = e.length - 1,
                            r = null,
                            i = tQ(e);
                        for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > (0, A.f)(.1)));) n--;
                        if (!r) return {
                            x: 0,
                            y: 0
                        };
                        let s = (0, A.X)(i.timestamp - r.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (i.x - r.x) / s,
                            y: (i.y - r.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(t, 0)
                }
            }

            function tQ(e) {
                return e[e.length - 1]
            }
            var tY = n(86896);

            function tK(e, t, n) {
                return {
                    min: void 0 !== t ? e.min + t : void 0,
                    max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
                }
            }

            function tJ(e, t) {
                let n = t.min - e.min,
                    r = t.max - e.max;
                return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
                    min: n,
                    max: r
                }
            }

            function tX(e, t, n) {
                return {
                    min: tZ(e, t),
                    max: tZ(e, n)
                }
            }

            function tZ(e, t) {
                return "number" == typeof e ? e : e[t] || 0
            }
            let t0 = new WeakMap;
            class t1 {
                constructor(e) {
                    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = tO(), this.visualElement = e
                }
                start(e, {
                    snapToCursor: t = !1
                } = {}) {
                    let {
                        presenceContext: n
                    } = this.visualElement;
                    if (n && !1 === n.isPresent) return;
                    let {
                        dragSnapToOrigin: r
                    } = this.getProps();
                    this.panSession = new tq(e, {
                        onSessionStart: e => {
                            let {
                                dragSnapToOrigin: n
                            } = this.getProps();
                            n ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(tm(e).point)
                        },
                        onStart: (e, t) => {
                            let {
                                drag: n,
                                dragPropagation: r,
                                onDragStart: i
                            } = this.getProps();
                            if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = (0, l.Wp)(n), !this.openDragLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), tM(e => {
                                let t = this.getAxisMotionValue(e).get() || 0;
                                if (W.KN.test(t)) {
                                    let {
                                        projection: n
                                    } = this.visualElement;
                                    if (n && n.layout) {
                                        let r = n.layout.layoutBox[e];
                                        r && (t = tA(r) * (parseFloat(t) / 100))
                                    }
                                }
                                this.originPoint[e] = t
                            }), i && w.Gt.postRender(() => i(e, t)), y(this.visualElement, "transform");
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (e, t) => {
                            let {
                                dragPropagation: n,
                                dragDirectionLock: r,
                                onDirectionLock: i,
                                onDrag: s
                            } = this.getProps();
                            if (!n && !this.openDragLock) return;
                            let {
                                offset: o
                            } = t;
                            if (r && null === this.currentDirection) {
                                this.currentDirection = function(e, t = 10) {
                                    let n = null;
                                    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
                                }(o), null !== this.currentDirection && i && i(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), s && s(e, t)
                        },
                        onSessionEnd: (e, t) => this.stop(e, t),
                        resumeAnimation: () => tM(e => {
                            var t;
                            return "paused" === this.getAnimationState(e) && (null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: r
                    })
                }
                stop(e, t) {
                    let n = this.isDragging;
                    if (this.cancel(), !n) return;
                    let {
                        velocity: r
                    } = t;
                    this.startAnimation(r);
                    let {
                        onDragEnd: i
                    } = this.getProps();
                    i && w.Gt.postRender(() => i(e, t))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: e,
                        animationState: t
                    } = this.visualElement;
                    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: n
                    } = this.getProps();
                    !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1)
                }
                updateAxis(e, t, n) {
                    let {
                        drag: r
                    } = this.getProps();
                    if (!n || !t2(e, r, this.currentDirection)) return;
                    let i = this.getAxisMotionValue(e),
                        s = this.originPoint[e] + n[e];
                    this.constraints && this.constraints[e] && (s = function(e, {
                        min: t,
                        max: n
                    }, r) {
                        return void 0 !== t && e < t ? e = r ? (0, tb.k)(t, e, r.min) : Math.max(e, t) : void 0 !== n && e > n && (e = r ? (0, tb.k)(n, e, r.max) : Math.min(e, n)), e
                    }(s, this.constraints[e], this.elastic[e])), i.set(s)
                }
                resolveConstraints() {
                    var e;
                    let {
                        dragConstraints: t,
                        dragElastic: n
                    } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout, i = this.constraints;
                    t && tU(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = function(e, {
                        top: t,
                        left: n,
                        bottom: r,
                        right: i
                    }) {
                        return {
                            x: tK(e.x, n, i),
                            y: tK(e.y, t, r)
                        }
                    }(r.layoutBox, t) : this.constraints = !1, this.elastic = function(e = .35) {
                        return !1 === e ? e = 0 : !0 === e && (e = .35), {
                            x: tX(e, "left", "right"),
                            y: tX(e, "top", "bottom")
                        }
                    }(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && tM(e => {
                        !1 !== this.constraints && this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
                            let n = {};
                            return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n
                        }(r.layoutBox[e], this.constraints[e]))
                    })
                }
                resolveRefConstraints() {
                    var e;
                    let {
                        dragConstraints: t,
                        onMeasureDragConstraints: n
                    } = this.getProps();
                    if (!t || !tU(t)) return !1;
                    let r = t.current;
                    (0, eh.V)(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: i
                    } = this.visualElement;
                    if (!i || !i.layout) return !1;
                    let s = function(e, t, n) {
                            let r = tz(e, n),
                                {
                                    scroll: i
                                } = t;
                            return i && (tF(r.x, i.offset.x), tF(r.y, i.offset.y)), r
                        }(r, i.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: tJ((e = i.layout.layoutBox).x, s.x),
                            y: tJ(e.y, s.y)
                        };
                    if (n) {
                        let e = n(function({
                            x: e,
                            y: t
                        }) {
                            return {
                                top: t.min,
                                right: e.max,
                                bottom: t.max,
                                left: e.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!e, e && (o = tv(e))
                    }
                    return o
                }
                startAnimation(e) {
                    let {
                        drag: t,
                        dragMomentum: n,
                        dragElastic: r,
                        dragTransition: i,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(tM(o => {
                        if (!t2(o, t, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: n ? e[o] : 0,
                            bounceStiffness: r ? 200 : 1e6,
                            bounceDamping: r ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...i,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    })).then(o)
                }
                startAxisValueAnimation(e, t) {
                    let n = this.getAxisMotionValue(e);
                    return y(this.visualElement, e), n.start(e8(e, n, 0, t, this.visualElement, !1))
                }
                stopAnimation() {
                    tM(e => this.getAxisMotionValue(e).stop())
                }
                pauseAnimation() {
                    tM(e => {
                        var t;
                        return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.pause()
                    })
                }
                getAnimationState(e) {
                    var t;
                    return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.state
                }
                getAxisMotionValue(e) {
                    let t = `_drag${e.toUpperCase()}`,
                        n = this.visualElement.getProps();
                    return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
                }
                snapToCursor(e) {
                    tM(t => {
                        let {
                            drag: n
                        } = this.getProps();
                        if (!t2(t, n, this.currentDirection)) return;
                        let {
                            projection: r
                        } = this.visualElement, i = this.getAxisMotionValue(t);
                        if (r && r.layout) {
                            let {
                                min: n,
                                max: s
                            } = r.layout.layoutBox[t];
                            i.set(e[t] - (0, tb.k)(n, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: e,
                        dragConstraints: t
                    } = this.getProps(), {
                        projection: n
                    } = this.visualElement;
                    if (!tU(t) || !n || !this.constraints) return;
                    this.stopAnimation();
                    let r = {
                        x: 0,
                        y: 0
                    };
                    tM(e => {
                        let t = this.getAxisMotionValue(e);
                        if (t && !1 !== this.constraints) {
                            let n = t.get();
                            r[e] = function(e, t) {
                                let n = .5,
                                    r = tA(e),
                                    i = tA(t);
                                return i > r ? n = (0, tY.q)(t.min, t.max - r, e.min) : r > i && (n = (0, tY.q)(e.min, e.max - i, t.min)), (0, eT.q)(0, 1, n)
                            }({
                                min: n,
                                max: n
                            }, this.constraints[e])
                        }
                    });
                    let {
                        transformTemplate: i
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), tM(t => {
                        if (!t2(t, e, null)) return;
                        let n = this.getAxisMotionValue(t),
                            {
                                min: i,
                                max: s
                            } = this.constraints[t];
                        n.set((0, tb.k)(i, s, r[t]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    t0.set(this.visualElement, this);
                    let e = ty(this.visualElement.current, "pointerdown", e => {
                            let {
                                drag: t,
                                dragListener: n = !0
                            } = this.getProps();
                            t && n && this.start(e)
                        }),
                        t = () => {
                            let {
                                dragConstraints: e
                            } = this.getProps();
                            tU(e) && e.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: n
                        } = this.visualElement,
                        r = n.addEventListener("measure", t);
                    n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), w.Gt.read(t);
                    let i = tf(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = n.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: t
                        }) => {
                            this.isDragging && t && (tM(t => {
                                let n = this.getAxisMotionValue(t);
                                n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        i(), e(), r(), s && s()
                    }
                }
                getProps() {
                    let e = this.visualElement.getProps(),
                        {
                            drag: t = !1,
                            dragDirectionLock: n = !1,
                            dragPropagation: r = !1,
                            dragConstraints: i = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = e;
                    return {
                        ...e,
                        drag: t,
                        dragDirectionLock: n,
                        dragPropagation: r,
                        dragConstraints: i,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function t2(e, t, n) {
                return (!0 === t || t === e) && (null === n || n === e)
            }
            class t4 extends tc {
                constructor(e) {
                    super(e), this.removeGroupControls = k.l, this.removeListeners = k.l, this.controls = new t1(e)
                }
                mount() {
                    let {
                        dragControls: e
                    } = this.node.getProps();
                    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || k.l
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let t5 = e => (t, n) => {
                e && w.Gt.postRender(() => e(t, n))
            };
            class t3 extends tc {
                constructor() {
                    super(...arguments), this.removePointerDownListener = k.l
                }
                onPointerDown(e) {
                    this.session = new tq(e, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint()
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: e,
                        onPanStart: t,
                        onPan: n,
                        onPanEnd: r
                    } = this.node.getProps();
                    return {
                        onSessionStart: t5(e),
                        onStart: t5(t),
                        onMove: n,
                        onEnd: (e, t) => {
                            delete this.session, r && w.Gt.postRender(() => r(e, t))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = ty(this.node.current, "pointerdown", e => this.onPointerDown(e))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var t6 = n(74848),
                t8 = n(96540),
                t9 = n(89120),
                t7 = n(29473);
            let ne = (0, t8.createContext)({}),
                nt = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function nn(e, t) {
                return t.max === t.min ? 0 : e / (t.max - t.min) * 100
            }
            let nr = {
                    correct: (e, t) => {
                        if (!t.target) return e;
                        if ("string" == typeof e) {
                            if (!W.px.test(e)) return e;
                            e = parseFloat(e)
                        }
                        let n = nn(e, t.target.x),
                            r = nn(e, t.target.y);
                        return `${n}% ${r}%`
                    }
                },
                ni = {},
                {
                    schedule: ns,
                    cancel: no
                } = (0, n(90611).I)(queueMicrotask, !1);
            class na extends t8.Component {
                componentDidMount() {
                    let {
                        visualElement: e,
                        layoutGroup: t,
                        switchLayoutGroup: n,
                        layoutId: r
                    } = this.props, {
                        projection: i
                    } = e;
                    ! function(e) {
                        for (let t in e) ni[t] = e[t], (0, ef.j)(t) && (ni[t].isCSSVariable = !0)
                    }(nu), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), i.setOptions({
                        ...i.options,
                        onExitComplete: () => this.safeToRemove()
                    })), nt.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(e) {
                    let {
                        layoutDependency: t,
                        visualElement: n,
                        drag: r,
                        isPresent: i
                    } = this.props, s = n.projection;
                    return s && (s.isPresent = i, r || e.layoutDependency !== t || void 0 === t ? s.willUpdate() : this.safeToRemove(), e.isPresent === i || (i ? s.promote() : s.relegate() || w.Gt.postRender(() => {
                        let e = s.getStack();
                        e && e.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: e
                    } = this.props.visualElement;
                    e && (e.root.didUpdate(), ns.postRender(() => {
                        !e.currentAnimation && e.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: e,
                        layoutGroup: t,
                        switchLayoutGroup: n
                    } = this.props, {
                        projection: r
                    } = e;
                    r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r))
                }
                safeToRemove() {
                    let {
                        safeToRemove: e
                    } = this.props;
                    e && e()
                }
                render() {
                    return null
                }
            }

            function nl(e) {
                let [t, n] = (0, t9.xQ)(), r = (0, t8.useContext)(t7.L);
                return (0, t6.jsx)(na, {
                    ...e,
                    layoutGroup: r,
                    switchLayoutGroup: (0, t8.useContext)(ne),
                    isPresent: t,
                    safeToRemove: n
                })
            }
            let nu = {
                borderRadius: {
                    ...nr,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: nr,
                borderTopRightRadius: nr,
                borderBottomLeftRadius: nr,
                borderBottomRightRadius: nr,
                boxShadow: {
                    correct: (e, {
                        treeScale: t,
                        projectionDelta: n
                    }) => {
                        let r = B.f.parse(e);
                        if (r.length > 5) return e;
                        let i = B.f.createTransformer(e),
                            s = "number" != typeof r[0] ? 1 : 0,
                            o = n.x.scale * t.x,
                            a = n.y.scale * t.y;
                        r[0 + s] /= o, r[1 + s] /= a;
                        let l = (0, tb.k)(o, a, .5);
                        return "number" == typeof r[2 + s] && (r[2 + s] /= l), "number" == typeof r[3 + s] && (r[3 + s] /= l), i(r)
                    }
                }
            };
            var nc = n(32358);
            let nd = (e, t) => e.depth - t.depth;
            class nh {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(e) {
                    (0, nc.Kq)(this.children, e), this.isDirty = !0
                }
                remove(e) {
                    (0, nc.Ai)(this.children, e), this.isDirty = !0
                }
                forEach(e) {
                    this.isDirty && this.children.sort(nd), this.isDirty = !1, this.children.forEach(e)
                }
            }
            var np = n(22606);

            function nf(e) {
                let t = g(e) ? e.get() : e;
                return p(t) ? t.toValue() : t
            }
            let nm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                ng = nm.length,
                ny = e => "string" == typeof e ? parseFloat(e) : e,
                nv = e => "number" == typeof e || W.px.test(e);

            function nb(e, t) {
                return void 0 !== e[t] ? e[t] : e.borderRadius
            }
            let nA = nx(0, .5, L),
                nw = nx(.5, .95, k.l);

            function nx(e, t, n) {
                return r => r < e ? 0 : r > t ? 1 : n((0, tY.q)(e, t, r))
            }

            function nS(e, t) {
                e.min = t.min, e.max = t.max
            }

            function nk(e, t) {
                nS(e.x, t.x), nS(e.y, t.y)
            }

            function nE(e, t) {
                e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
            }

            function nT(e, t, n, r, i) {
                return e -= t, e = r + 1 / n * (e - r), void 0 !== i && (e = r + 1 / i * (e - r)), e
            }

            function nC(e, t, [n, r, i], s, o) {
                ! function(e, t = 0, n = 1, r = .5, i, s = e, o = e) {
                    if (W.KN.test(t) && (t = parseFloat(t), t = (0, tb.k)(o.min, o.max, t / 100) - o.min), "number" != typeof t) return;
                    let a = (0, tb.k)(s.min, s.max, r);
                    e === s && (a -= t), e.min = nT(e.min, t, n, a, i), e.max = nT(e.max, t, n, a, i)
                }(e, t[n], t[r], t[i], t.scale, s, o)
            }
            let nP = ["x", "scaleX", "originX"],
                nO = ["y", "scaleY", "originY"];

            function nM(e, t, n, r) {
                nC(e.x, t, nP, n ? n.x : void 0, r ? r.x : void 0), nC(e.y, t, nO, n ? n.y : void 0, r ? r.y : void 0)
            }

            function nR(e) {
                return 0 === e.translate && 1 === e.scale
            }

            function nI(e) {
                return nR(e.x) && nR(e.y)
            }

            function nD(e, t) {
                return e.min === t.min && e.max === t.max
            }

            function nL(e, t) {
                return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
            }

            function nj(e, t) {
                return nL(e.x, t.x) && nL(e.y, t.y)
            }

            function n_(e) {
                return tA(e.x) / tA(e.y)
            }

            function nB(e, t) {
                return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
            }
            class nF {
                constructor() {
                    this.members = []
                }
                add(e) {
                    (0, nc.Kq)(this.members, e), e.scheduleRender()
                }
                remove(e) {
                    if ((0, nc.Ai)(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                        let e = this.members[this.members.length - 1];
                        e && this.promote(e)
                    }
                }
                relegate(e) {
                    let t;
                    let n = this.members.findIndex(t => e === t);
                    if (0 === n) return !1;
                    for (let e = n; e >= 0; e--) {
                        let n = this.members[e];
                        if (!1 !== n.isPresent) {
                            t = n;
                            break
                        }
                    }
                    return !!t && (this.promote(t), !0)
                }
                promote(e, t) {
                    let n = this.lead;
                    if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
                        n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
                        let {
                            crossfade: r
                        } = e.options;
                        !1 === r && n.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(e => {
                        let {
                            options: t,
                            resumingFrom: n
                        } = e;
                        t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(e => {
                        e.instance && e.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }
            let nN = {
                    nodes: 0,
                    calculatedTargetDeltas: 0,
                    calculatedProjections: 0
                },
                nV = ["", "X", "Y", "Z"],
                nz = {
                    visibility: "hidden"
                },
                nU = 0;

            function n$(e, t, n, r) {
                let {
                    latestValues: i
                } = t;
                i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
            }

            function nq({
                attachResizeListener: e,
                defaultParent: t,
                measureScroll: n,
                checkIsScrollRoot: r,
                resetTransform: i
            }) {
                return class {
                    constructor(e = {}, n = null == t ? void 0 : t()) {
                        this.id = nU++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, eX.Q.value && (nN.nodes = nN.calculatedTargetDeltas = nN.calculatedProjections = 0), this.nodes.forEach(nG), this.nodes.forEach(n0), this.nodes.forEach(n1), this.nodes.forEach(nQ), eX.Q.addProjectionMetrics && eX.Q.addProjectionMetrics(nN)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
                        for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new nh)
                    }
                    addEventListener(e, t) {
                        return this.eventHandlers.has(e) || this.eventHandlers.set(e, new np.v), this.eventHandlers.get(e).add(t)
                    }
                    notifyListeners(e, ...t) {
                        let n = this.eventHandlers.get(e);
                        n && n.notify(...t)
                    }
                    hasListeners(e) {
                        return this.eventHandlers.has(e)
                    }
                    mount(t, n = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
                        let {
                            layoutId: r,
                            layout: i,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (i || r) && (this.isLayoutDirty = !0), e) {
                            let n;
                            let r = () => this.root.updateBlockedByResize = !1;
                            e(t, () => {
                                this.root.updateBlockedByResize = !0, n && n(), n = function(e, t) {
                                    let n = eA.k.now(),
                                        r = ({
                                            timestamp: t
                                        }) => {
                                            let i = t - n;
                                            i >= 250 && ((0, w.WG)(r), e(i - 250))
                                        };
                                    return w.Gt.read(r, !0), () => (0, w.WG)(r)
                                }(r, 250), nt.hasAnimatedSinceResize && (nt.hasAnimatedSinceResize = !1, this.nodes.forEach(nZ))
                            })
                        }
                        r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && s && (r || i) && this.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: t,
                            hasRelativeLayoutChanged: n,
                            layout: r
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let i = this.options.transition || s.getDefaultTransition() || n8,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = s.getProps(),
                                u = !this.targetLayout || !nj(this.targetLayout, r),
                                c = !t && n;
                            if (this.options.layoutRoot || this.resumeFrom || c || t && (u || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, c);
                                let t = {
                                    ...(0, l.rU)(i, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t)
                            } else t || nZ(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = r
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let e = this.getStack();
                        e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, w.WG)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(n2), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: e
                        } = this.options;
                        return e && e.getProps().transformTemplate
                    }
                    willUpdate(e = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function e(t) {
                                if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
                                let {
                                    visualElement: n
                                } = t.options;
                                if (!n) return;
                                let r = n.props[b];
                                if (window.MotionHasOptimisedAnimation(r, "transform")) {
                                    let {
                                        layout: e,
                                        layoutId: n
                                    } = t.options;
                                    window.MotionCancelOptimisedAnimation(r, "transform", w.Gt, !(e || n))
                                }
                                let {
                                    parent: i
                                } = t;
                                i && !i.hasCheckedOptimisedAppear && e(i)
                            }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let e = 0; e < this.path.length; e++) {
                            let t = this.path[e];
                            t.shouldResetTransform = !0, t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1)
                        }
                        let {
                            layoutId: t,
                            layout: n
                        } = this.options;
                        if (void 0 === t && !n) return;
                        let r = this.getTransformTemplate();
                        this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(nK);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(nJ), this.isUpdating = !1, this.nodes.forEach(nX), this.nodes.forEach(nW), this.nodes.forEach(nH), this.clearAllSnapshots();
                        let e = eA.k.now();
                        w.uv.delta = (0, eT.q)(0, 1e3 / 60, e - w.uv.timestamp), w.uv.timestamp = e, w.uv.isProcessing = !0, w.PP.update.process(w.uv), w.PP.preRender.process(w.uv), w.PP.render.process(w.uv), w.uv.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, ns.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(nY), this.sharedNodes.forEach(n4)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, w.Gt.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        w.Gt.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        this.snapshot || !this.instance || (this.snapshot = this.measure(), !this.snapshot || tA(this.snapshot.measuredBox.x) || tA(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
                        let e = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = tO(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: t
                        } = this.options;
                        t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
                    }
                    updateScroll(e = "measure") {
                        let t = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t) {
                            let t = r(this.instance);
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: e,
                                isRoot: t,
                                offset: n(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : t
                            }
                        }
                    }
                    resetTransform() {
                        if (!i) return;
                        let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            t = this.projectionDelta && !nI(this.projectionDelta),
                            n = this.getTransformTemplate(),
                            r = n ? n(this.latestValues, "") : void 0,
                            s = r !== this.prevTransformTemplateValue;
                        e && (t || tD(this.latestValues) || s) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(e = !0) {
                        var t;
                        let n = this.measurePageBox(),
                            r = this.removeElementScroll(n);
                        return e && (r = this.removeTransform(r)), re((t = r).x), re(t.y), {
                            animationId: this.root.animationId,
                            measuredBox: n,
                            layoutBox: r,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        var e;
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return tO();
                        let n = t.measureViewportBox();
                        if (!((null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) || this.path.some(rn))) {
                            let {
                                scroll: e
                            } = this.root;
                            e && (tF(n.x, e.offset.x), tF(n.y, e.offset.y))
                        }
                        return n
                    }
                    removeElementScroll(e) {
                        var t;
                        let n = tO();
                        if (nk(n, e), null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) return n;
                        for (let t = 0; t < this.path.length; t++) {
                            let r = this.path[t],
                                {
                                    scroll: i,
                                    options: s
                                } = r;
                            r !== this.root && i && s.layoutScroll && (i.wasRoot && nk(n, e), tF(n.x, i.offset.x), tF(n.y, i.offset.y))
                        }
                        return n
                    }
                    applyTransform(e, t = !1) {
                        let n = tO();
                        nk(n, e);
                        for (let e = 0; e < this.path.length; e++) {
                            let r = this.path[e];
                            !t && r.options.layoutScroll && r.scroll && r !== r.root && tV(n, {
                                x: -r.scroll.offset.x,
                                y: -r.scroll.offset.y
                            }), tD(r.latestValues) && tV(n, r.latestValues)
                        }
                        return tD(this.latestValues) && tV(n, this.latestValues), n
                    }
                    removeTransform(e) {
                        let t = tO();
                        nk(t, e);
                        for (let e = 0; e < this.path.length; e++) {
                            let n = this.path[e];
                            if (!n.instance || !tD(n.latestValues)) continue;
                            tI(n.latestValues) && n.updateSnapshot();
                            let r = tO();
                            nk(r, n.measurePageBox()), nM(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r)
                        }
                        return tD(this.latestValues) && nM(t, this.latestValues), t
                    }
                    setTargetDelta(e) {
                        this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(e) {
                        this.options = {
                            ...this.options,
                            ...e,
                            crossfade: void 0 === e.crossfade || e.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== w.uv.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(e = !1) {
                        var t, n, r, i;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s;
                        if (!(e || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (a || l)) {
                            if (this.resolvedRelativeTargetAt = w.uv.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let e = this.getClosestProjectingParent();
                                e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = tO(), this.relativeTargetOrigin = tO(), tE(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), nk(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = tO(), this.targetWithTransforms = tO()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), n = this.target, r = this.relativeTarget, i = this.relativeParent.target, tS(n.x, r.x, i.x), tS(n.y, r.y, i.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nk(this.target, this.layout.layoutBox), tB(this.target, this.targetDelta)) : nk(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let e = this.getClosestProjectingParent();
                                    e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = tO(), this.relativeTargetOrigin = tO(), tE(this.relativeTargetOrigin, this.target, e.target), nk(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                eX.Q.value && nN.calculatedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || tI(this.parent.latestValues) || tL(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var e;
                        let t = this.getLead(),
                            n = !!this.resumingFrom || this !== t,
                            r = !0;
                        if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (r = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === w.uv.timestamp && (r = !1), r) return;
                        let {
                            layout: i,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(i || s)) return;
                        nk(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(e, t, n, r = !1) {
                            let i, s;
                            let o = n.length;
                            if (o) {
                                t.x = t.y = 1;
                                for (let a = 0; a < o; a++) {
                                    s = (i = n[a]).projectionDelta;
                                    let {
                                        visualElement: o
                                    } = i.options;
                                    (!o || !o.props.style || "contents" !== o.props.style.display) && (r && i.options.layoutScroll && i.scroll && i !== i.root && tV(e, {
                                        x: -i.scroll.offset.x,
                                        y: -i.scroll.offset.y
                                    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, tB(e, s)), r && tD(i.latestValues) && tV(e, i.latestValues))
                                }
                                t.x < 1.0000000000001 && t.x > .999999999999 && (t.x = 1), t.y < 1.0000000000001 && t.y > .999999999999 && (t.y = 1)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, n), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = tO());
                        let {
                            target: l
                        } = t;
                        if (!l) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (nE(this.prevProjectionDelta.x, this.projectionDelta.x), nE(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), tx(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === o && this.treeScale.y === a && nB(this.projectionDelta.x, this.prevProjectionDelta.x) && nB(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), eX.Q.value && nN.calculatedProjections++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(e = !0) {
                        var t;
                        if (null === (t = this.options.visualElement) || void 0 === t || t.scheduleRender(), e) {
                            let e = this.getStack();
                            e && e.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        this.prevProjectionDelta = tC(), this.projectionDelta = tC(), this.projectionDeltaWithTransform = tC()
                    }
                    setAnimationOrigin(e, t = !1) {
                        let n;
                        let r = this.snapshot,
                            i = r ? r.latestValues : {},
                            s = {
                                ...this.latestValues
                            },
                            o = tC();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
                        let a = tO(),
                            l = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            c = !u || u.members.length <= 1,
                            d = !!(l && !c && !0 === this.options.crossfade && !this.path.some(n6));
                        this.animationProgress = 0, this.mixTargetDelta = t => {
                            let r = t / 1e3;
                            if (n5(o.x, e.x, r), n5(o.y, e.y, r), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, h, p, f;
                                tE(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, f = this.relativeTargetOrigin, n3(p.x, f.x, a.x, r), n3(p.y, f.y, a.y, r), n && (u = this.relativeTarget, h = n, nD(u.x, h.x) && nD(u.y, h.y)) && (this.isProjectionDirty = !1), n || (n = tO()), nk(n, this.relativeTarget)
                            }
                            l && (this.animationValues = s, function(e, t, n, r, i, s) {
                                i ? (e.opacity = (0, tb.k)(0, void 0 !== n.opacity ? n.opacity : 1, nA(r)), e.opacityExit = (0, tb.k)(void 0 !== t.opacity ? t.opacity : 1, 0, nw(r))) : s && (e.opacity = (0, tb.k)(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                                for (let i = 0; i < ng; i++) {
                                    let s = `border${nm[i]}Radius`,
                                        o = nb(t, s),
                                        a = nb(n, s);
                                    (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || nv(o) === nv(a) ? (e[s] = Math.max((0, tb.k)(ny(o), ny(a), r), 0), (W.KN.test(a) || W.KN.test(o)) && (e[s] += "%")) : e[s] = a)
                                }(t.rotate || n.rotate) && (e.rotate = (0, tb.k)(t.rotate || 0, n.rotate || 0, r))
                            }(s, i, this.latestValues, r, d, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = r
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(e) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, w.WG)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = w.Gt.update(() => {
                            nt.hasAnimatedSinceResize = !0, eE.layout++, this.currentAnimation = function(e, t, n) {
                                let r = g(0) ? 0 : (0, m.OQ)(0);
                                return r.start(e8("", r, 1e3, n)), r.animation
                            }(0, 0, {
                                ...e,
                                onUpdate: t => {
                                    this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t)
                                },
                                onStop: () => {
                                    eE.layout--
                                },
                                onComplete: () => {
                                    eE.layout--, e.onComplete && e.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let e = this.getStack();
                        e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let e = this.getLead(),
                            {
                                targetWithTransforms: t,
                                target: n,
                                layout: r,
                                latestValues: i
                            } = e;
                        if (t && n && r) {
                            if (this !== e && this.layout && r && rt(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                                n = this.target || tO();
                                let t = tA(this.layout.layoutBox.x);
                                n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                                let r = tA(this.layout.layoutBox.y);
                                n.y.min = e.target.y.min, n.y.max = n.y.min + r
                            }
                            nk(t, n), tV(t, i), tx(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
                        }
                    }
                    registerSharedNode(e, t) {
                        this.sharedNodes.has(e) || this.sharedNodes.set(e, new nF), this.sharedNodes.get(e).add(t);
                        let n = t.options.initialPromotionConfig;
                        t.promote({
                            transition: n ? n.transition : void 0,
                            preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
                        })
                    }
                    isLead() {
                        let e = this.getStack();
                        return !e || e.lead === this
                    }
                    getLead() {
                        var e;
                        let {
                            layoutId: t
                        } = this.options;
                        return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                    }
                    getPrevLead() {
                        var e;
                        let {
                            layoutId: t
                        } = this.options;
                        return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: e
                        } = this.options;
                        if (e) return this.root.sharedNodes.get(e)
                    }
                    promote({
                        needsReset: e,
                        transition: t,
                        preserveFollowOpacity: n
                    } = {}) {
                        let r = this.getStack();
                        r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
                            transition: t
                        })
                    }
                    relegate() {
                        let e = this.getStack();
                        return !!e && e.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return;
                        let t = !1,
                            {
                                latestValues: n
                            } = e;
                        if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
                        let r = {};
                        n.z && n$("z", e, r, this.animationValues);
                        for (let t = 0; t < nV.length; t++) n$(`rotate${nV[t]}`, e, r, this.animationValues), n$(`skew${nV[t]}`, e, r, this.animationValues);
                        for (let t in e.render(), r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
                        e.scheduleRender()
                    }
                    getProjectionStyles(e) {
                        var t, n;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return nz;
                        let r = {
                                visibility: ""
                            },
                            i = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = nf(null == e ? void 0 : e.pointerEvents) || "", r.transform = i ? i(this.latestValues, "") : "none", r;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let t = {};
                            return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = nf(null == e ? void 0 : e.pointerEvents) || ""), this.hasProjected && !tD(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1), t
                        }
                        let o = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), r.transform = function(e, t, n) {
                            let r = "",
                                i = e.x.translate / t.x,
                                s = e.y.translate / t.y,
                                o = (null == n ? void 0 : n.z) || 0;
                            if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (1 !== t.x || 1 !== t.y) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
                                let {
                                    transformPerspective: e,
                                    rotate: t,
                                    rotateX: i,
                                    rotateY: s,
                                    skewX: o,
                                    skewY: a
                                } = n;
                                e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotateX(${i}deg) `), s && (r += `rotateY(${s}deg) `), o && (r += `skewX(${o}deg) `), a && (r += `skewY(${a}deg) `)
                            }
                            let a = e.x.scale * t.x,
                                l = e.y.scale * t.y;
                            return (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`), r || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, o), i && (r.transform = i(o, r.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let e in r.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, s.animationValues ? r.opacity = s === this ? null !== (n = null !== (t = o.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : r.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, ni) {
                            if (void 0 === o[e]) continue;
                            let {
                                correct: t,
                                applyTo: n,
                                isCSSVariable: i
                            } = ni[e], a = "none" === r.transform ? o[e] : t(o[e], s);
                            if (n) {
                                let e = n.length;
                                for (let t = 0; t < e; t++) r[n[t]] = a
                            } else i ? this.options.visualElement.renderState.vars[e] = a : r[e] = a
                        }
                        return this.options.layoutId && (r.pointerEvents = s === this ? nf(null == e ? void 0 : e.pointerEvents) || "" : "none"), r
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(e => {
                            var t;
                            return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                        }), this.root.nodes.forEach(nK), this.root.sharedNodes.clear()
                    }
                }
            }

            function nW(e) {
                e.updateLayout()
            }

            function nH(e) {
                var t;
                let n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
                if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
                    let {
                        layoutBox: t,
                        measuredBox: r
                    } = e.layout, {
                        animationType: i
                    } = e.options, s = n.source !== e.layout.source;
                    "size" === i ? tM(e => {
                        let r = s ? n.measuredBox[e] : n.layoutBox[e],
                            i = tA(r);
                        r.min = t[e].min, r.max = r.min + i
                    }) : rt(i, n.layoutBox, t) && tM(r => {
                        let i = s ? n.measuredBox[r] : n.layoutBox[r],
                            o = tA(t[r]);
                        i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o)
                    });
                    let o = tC();
                    tx(o, t, n.layoutBox);
                    let a = tC();
                    s ? tx(a, e.applyTransform(r, !0), n.measuredBox) : tx(a, t, n.layoutBox);
                    let l = !nI(o),
                        u = !1;
                    if (!e.resumeFrom) {
                        let r = e.getClosestProjectingParent();
                        if (r && !r.resumeFrom) {
                            let {
                                snapshot: i,
                                layout: s
                            } = r;
                            if (i && s) {
                                let o = tO();
                                tE(o, n.layoutBox, i.layoutBox);
                                let a = tO();
                                tE(a, t, s.layoutBox), nj(o, a) || (u = !0), r.options.layoutRoot && (e.relativeTarget = a, e.relativeTargetOrigin = o, e.relativeParent = r)
                            }
                        }
                    }
                    e.notifyListeners("didUpdate", {
                        layout: t,
                        snapshot: n,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeLayoutChanged: u
                    })
                } else if (e.isLead()) {
                    let {
                        onExitComplete: t
                    } = e.options;
                    t && t()
                }
                e.options.transition = void 0
            }

            function nG(e) {
                eX.Q.value && nN.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
            }

            function nQ(e) {
                e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
            }

            function nY(e) {
                e.clearSnapshot()
            }

            function nK(e) {
                e.clearMeasurements()
            }

            function nJ(e) {
                e.isLayoutDirty = !1
            }

            function nX(e) {
                let {
                    visualElement: t
                } = e.options;
                t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
            }

            function nZ(e) {
                e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
            }

            function n0(e) {
                e.resolveTargetDelta()
            }

            function n1(e) {
                e.calcProjection()
            }

            function n2(e) {
                e.resetSkewAndRotation()
            }

            function n4(e) {
                e.removeLeadSnapshot()
            }

            function n5(e, t, n) {
                e.translate = (0, tb.k)(t.translate, 0, n), e.scale = (0, tb.k)(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
            }

            function n3(e, t, n, r) {
                e.min = (0, tb.k)(t.min, n.min, r), e.max = (0, tb.k)(t.max, n.max, r)
            }

            function n6(e) {
                return e.animationValues && void 0 !== e.animationValues.opacityExit
            }
            let n8 = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                n9 = e => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
                n7 = n9("applewebkit/") && !n9("chrome/") ? Math.round : k.l;

            function re(e) {
                e.min = n7(e.min), e.max = n7(e.max)
            }

            function rt(e, t, n) {
                return "position" === e || "preserve-aspect" === e && !(.2 >= Math.abs(n_(t) - n_(n)))
            }

            function rn(e) {
                var t;
                return e !== e.root && (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
            }
            let rr = nq({
                    attachResizeListener: (e, t) => tf(e, "resize", t),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                ri = {
                    current: void 0
                },
                rs = nq({
                    measureScroll: e => ({
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }),
                    defaultParent: () => {
                        if (!ri.current) {
                            let e = new rr({});
                            e.mount(window), e.setOptions({
                                layoutScroll: !0
                            }), ri.current = e
                        }
                        return ri.current
                    },
                    resetTransform: (e, t) => {
                        e.style.transform = void 0 !== t ? t : "none"
                    },
                    checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
                });

            function ro(e, t, n) {
                let {
                    props: r
                } = e;
                e.animationState && r.whileHover && e.animationState.setActive("whileHover", "Start" === n);
                let i = r["onHover" + n];
                i && w.Gt.postRender(() => i(t, tm(t)))
            }
            class ra extends tc {
                mount() {
                    let {
                        current: e
                    } = this.node;
                    e && (this.unmount = (0, l.PT)(e, (e, t) => (ro(this.node, t, "Start"), e => ro(this.node, e, "End"))))
                }
                unmount() {}
            }
            class rl extends tc {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let e = !1;
                    try {
                        e = this.node.current.matches(":focus-visible")
                    } catch (t) {
                        e = !0
                    }
                    e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = (0, eP.F)(tf(this.node.current, "focus", () => this.onFocus()), tf(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }

            function ru(e, t, n) {
                let {
                    props: r
                } = e;
                if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
                e.animationState && r.whileTap && e.animationState.setActive("whileTap", "Start" === n);
                let i = r["onTap" + ("End" === n ? "" : n)];
                i && w.Gt.postRender(() => i(t, tm(t)))
            }
            class rc extends tc {
                mount() {
                    let {
                        current: e
                    } = this.node;
                    e && (this.unmount = (0, l.c$)(e, (e, t) => (ru(this.node, t, "Start"), (e, {
                        success: t
                    }) => ru(this.node, e, t ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let rd = new WeakMap,
                rh = new WeakMap,
                rp = e => {
                    let t = rd.get(e.target);
                    t && t(e)
                },
                rf = e => {
                    e.forEach(rp)
                },
                rm = {
                    some: 0,
                    all: 1
                };
            class rg extends tc {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: e = {}
                    } = this.node.getProps(), {
                        root: t,
                        margin: n,
                        amount: r = "some",
                        once: i
                    } = e, s = {
                        root: t ? t.current : void 0,
                        rootMargin: n,
                        threshold: "number" == typeof r ? r : rm[r]
                    };
                    return function(e, t, n) {
                        let r = function({
                            root: e,
                            ...t
                        }) {
                            let n = e || document;
                            rh.has(n) || rh.set(n, {});
                            let r = rh.get(n),
                                i = JSON.stringify(t);
                            return r[i] || (r[i] = new IntersectionObserver(rf, {
                                root: e,
                                ...t
                            })), r[i]
                        }(t);
                        return rd.set(e, n), r.observe(e), () => {
                            rd.delete(e), r.unobserve(e)
                        }
                    }(this.node.current, s, e => {
                        let {
                            isIntersecting: t
                        } = e;
                        if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
                        t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                        let {
                            onViewportEnter: n,
                            onViewportLeave: r
                        } = this.node.getProps(), s = t ? n : r;
                        s && s(e)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: e,
                        prevProps: t
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: e = {}
                    }, {
                        viewport: t = {}
                    } = {}) {
                        return n => e[n] !== t[n]
                    }(e, t)) && this.startObserver()
                }
                unmount() {}
            }
            let ry = (0, t8.createContext)({
                strict: !1
            });
            var rv = n(35446);
            let rb = (0, t8.createContext)({});

            function rA(e) {
                return r(e.animate) || ti.some(t => tn(e[t]))
            }

            function rw(e) {
                return !!(rA(e) || e.variants)
            }

            function rx(e) {
                return Array.isArray(e) ? e.join(" ") : e
            }
            var rS = n(98288);
            let rk = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                rE = {};
            for (let e in rk) rE[e] = {
                isEnabled: t => rk[e].some(e => !!t[e])
            };
            let rT = Symbol.for("motionComponentSymbol");
            var rC = n(86719),
                rP = n(25128);

            function rO(e, {
                layout: t,
                layoutId: n
            }) {
                return c.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!ni[e] || "opacity" === e)
            }
            let rM = (e, t) => t && "number" == typeof e ? t.transform(e) : e,
                rR = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                rI = u.length;

            function rD(e, t, n) {
                let {
                    style: r,
                    vars: i,
                    transformOrigin: s
                } = e, o = !1, a = !1;
                for (let e in t) {
                    let n = t[e];
                    if (c.has(e)) {
                        o = !0;
                        continue
                    }
                    if ((0, ef.j)(e)) {
                        i[e] = n;
                        continue
                    } {
                        let t = rM(n, Y[e]);
                        e.startsWith("origin") ? (a = !0, s[e] = t) : r[e] = t
                    }
                }
                if (!t.transform && (o || n ? r.transform = function(e, t, n) {
                        let r = "",
                            i = !0;
                        for (let s = 0; s < rI; s++) {
                            let o = u[s],
                                a = e[o];
                            if (void 0 === a) continue;
                            let l = !0;
                            if (!(l = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || n) {
                                let e = rM(a, Y[o]);
                                if (!l) {
                                    i = !1;
                                    let t = rR[o] || o;
                                    r += `${t}(${e}) `
                                }
                                n && (t[o] = e)
                            }
                        }
                        return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
                    }(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
                    let {
                        originX: e = "50%",
                        originY: t = "50%",
                        originZ: n = 0
                    } = s;
                    r.transformOrigin = `${e} ${t} ${n}`
                }
            }
            let rL = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function rj(e, t, n) {
                for (let r in t) g(t[r]) || rO(r, n) || (e[r] = t[r])
            }
            let r_ = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function rB(e) {
                return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || r_.has(e)
            }
            let rF = e => !rB(e);
            try {
                ! function(e) {
                    e && (rF = t => t.startsWith("on") ? !rB(t) : e(t))
                }(require("@emotion/is-prop-valid").default)
            } catch (e) {}
            let rN = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function rV(e) {
                if ("string" != typeof e || e.includes("-"));
                else if (rN.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
                return !1
            }
            let rz = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                rU = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function r$(e, t, n) {
                return "string" == typeof e ? e : W.px.transform(t + n * e)
            }

            function rq(e, {
                attrX: t,
                attrY: n,
                attrScale: r,
                originX: i,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, c, d) {
                if (rD(e, u, d), c) {
                    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                    return
                }
                e.attrs = e.style, e.style = {};
                let {
                    attrs: h,
                    style: p,
                    dimensions: f
                } = e;
                h.transform && (f && (p.transform = h.transform), delete h.transform), f && (void 0 !== i || void 0 !== s || p.transform) && (p.transformOrigin = function(e, t, n) {
                    let r = r$(t, e.x, e.width),
                        i = r$(n, e.y, e.height);
                    return `${r} ${i}`
                }(f, void 0 !== i ? i : .5, void 0 !== s ? s : .5)), void 0 !== t && (h.x = t), void 0 !== n && (h.y = n), void 0 !== r && (h.scale = r), void 0 !== o && function(e, t, n = 1, r = 0, i = !0) {
                    e.pathLength = 1;
                    let s = i ? rz : rU;
                    e[s.offset] = W.px.transform(-r);
                    let o = W.px.transform(t),
                        a = W.px.transform(n);
                    e[s.array] = `${o} ${a}`
                }(h, o, a, l, !1)
            }
            let rW = () => ({
                    ...rL(),
                    attrs: {}
                }),
                rH = e => "string" == typeof e && "svg" === e.toLowerCase();
            var rG = n(28601);
            let rQ = e => (t, n) => {
                let s = (0, t8.useContext)(rb),
                    o = (0, t8.useContext)(rC.t),
                    a = () => (function({
                        scrapeMotionValuesFromProps: e,
                        createRenderState: t,
                        onUpdate: n
                    }, s, o, a) {
                        let l = {
                            latestValues: function(e, t, n, s) {
                                let o = {},
                                    a = s(e, {});
                                for (let e in a) o[e] = nf(a[e]);
                                let {
                                    initial: l,
                                    animate: u
                                } = e, c = rA(e), d = rw(e);
                                t && d && !c && !1 !== e.inherit && (void 0 === l && (l = t.initial), void 0 === u && (u = t.animate));
                                let h = !!n && !1 === n.initial,
                                    p = (h = h || !1 === l) ? u : l;
                                if (p && "boolean" != typeof p && !r(p)) {
                                    let t = Array.isArray(p) ? p : [p];
                                    for (let n = 0; n < t.length; n++) {
                                        let r = i(e, t[n]);
                                        if (r) {
                                            let {
                                                transitionEnd: e,
                                                transition: t,
                                                ...n
                                            } = r;
                                            for (let e in n) {
                                                let t = n[e];
                                                if (Array.isArray(t)) {
                                                    let e = h ? t.length - 1 : 0;
                                                    t = t[e]
                                                }
                                                null !== t && (o[e] = t)
                                            }
                                            for (let t in e) o[t] = e[t]
                                        }
                                    }
                                }
                                return o
                            }(s, o, a, e),
                            renderState: t()
                        };
                        return n && (l.onMount = e => n({
                            props: s,
                            current: e,
                            ...l
                        }), l.onUpdate = e => n(e)), l
                    })(e, t, s, o);
                return n ? a() : (0, rG.M)(a)
            };

            function rY(e, t, n) {
                var r;
                let {
                    style: i
                } = e, s = {};
                for (let o in i)(g(i[o]) || t.style && g(t.style[o]) || rO(o, e) || (null === (r = null == n ? void 0 : n.getValue(o)) || void 0 === r ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
                return s
            }
            let rK = {
                useVisualState: rQ({
                    scrapeMotionValuesFromProps: rY,
                    createRenderState: rL
                })
            };

            function rJ(e, t) {
                try {
                    t.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                } catch (e) {
                    t.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }

            function rX(e, {
                style: t,
                vars: n
            }, r, i) {
                for (let s in Object.assign(e.style, t, i && i.getProjectionStyles(r)), n) e.style.setProperty(s, n[s])
            }
            let rZ = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function r0(e, t, n, r) {
                for (let n in rX(e, t, void 0, r), t.attrs) e.setAttribute(rZ.has(n) ? n : v(n), t.attrs[n])
            }

            function r1(e, t, n) {
                let r = rY(e, t, n);
                for (let n in e)(g(e[n]) || g(t[n])) && (r[-1 !== u.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = e[n]);
                return r
            }
            let r2 = ["x", "y", "width", "height", "cx", "cy", "r"],
                r4 = {
                    useVisualState: rQ({
                        scrapeMotionValuesFromProps: r1,
                        createRenderState: rW,
                        onUpdate: ({
                            props: e,
                            prevProps: t,
                            current: n,
                            renderState: r,
                            latestValues: i
                        }) => {
                            if (!n) return;
                            let s = !!e.drag;
                            if (!s) {
                                for (let e in i)
                                    if (c.has(e)) {
                                        s = !0;
                                        break
                                    }
                            }
                            if (!s) return;
                            let o = !t;
                            if (t)
                                for (let n = 0; n < r2.length; n++) {
                                    let r = r2[n];
                                    e[r] !== t[r] && (o = !0)
                                }
                            o && w.Gt.read(() => {
                                rJ(n, r), w.Gt.render(() => {
                                    rq(r, i, rH(n.tagName), e.transformTemplate), r0(n, r)
                                })
                            })
                        }
                    })
                },
                r5 = {
                    current: null
                },
                r3 = {
                    current: !1
                },
                r6 = [...ey, $.y, B.f],
                r8 = e => r6.find(eg(e)),
                r9 = new WeakMap,
                r7 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class ie {
                scrapeMotionValuesFromProps(e, t, n) {
                    return {}
                }
                constructor({
                    parent: e,
                    props: t,
                    presenceContext: n,
                    reducedMotionConfig: r,
                    blockInitialAnimation: i,
                    visualState: s
                }, o = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = ed, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let e = eA.k.now();
                        this.renderScheduledAt < e && (this.renderScheduledAt = e, w.Gt.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: a,
                        renderState: l,
                        onUpdate: u
                    } = s;
                    this.onUpdate = u, this.latestValues = a, this.baseTarget = {
                        ...a
                    }, this.initialValues = t.initial ? {
                        ...a
                    } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = o, this.blockInitialAnimation = !!i, this.isControllingVariants = rA(t), this.isVariantNode = rw(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
                    let {
                        willChange: c,
                        ...d
                    } = this.scrapeMotionValuesFromProps(t, {}, this);
                    for (let e in d) {
                        let t = d[e];
                        void 0 !== a[e] && g(t) && t.set(a[e], !1)
                    }
                }
                mount(e) {
                    this.current = e, r9.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), r3.current || function() {
                        if (r3.current = !0, rS.B) {
                            if (window.matchMedia) {
                                let e = window.matchMedia("(prefers-reduced-motion)"),
                                    t = () => r5.current = e.matches;
                                e.addListener(t), t()
                            } else r5.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || r5.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let e in this.projection && this.projection.unmount(), (0, w.WG)(this.notifyUpdate), (0, w.WG)(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[e].clear();
                    for (let e in this.features) {
                        let t = this.features[e];
                        t && (t.unmount(), t.isMounted = !1)
                    }
                    this.current = null
                }
                bindToMotionValue(e, t) {
                    let n;
                    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
                    let r = c.has(e);
                    r && this.onBindTransform && this.onBindTransform();
                    let i = t.on("change", t => {
                            this.latestValues[e] = t, this.props.onUpdate && w.Gt.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        s = t.on("renderRequest", this.scheduleRender);
                    window.MotionCheckAppearSync && (n = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
                        i(), s(), n && n(), t.owner && t.stop()
                    })
                }
                sortNodePosition(e) {
                    return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
                }
                updateFeatures() {
                    let e = "animation";
                    for (e in rE) {
                        let t = rE[e];
                        if (!t) continue;
                        let {
                            isEnabled: n,
                            Feature: r
                        } = t;
                        if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
                            let t = this.features[e];
                            t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : tO()
                }
                getStaticValue(e) {
                    return this.latestValues[e]
                }
                setStaticValue(e, t) {
                    this.latestValues[e] = t
                }
                update(e, t) {
                    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
                    for (let t = 0; t < r7.length; t++) {
                        let n = r7[t];
                        this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                        let r = e["on" + n];
                        r && (this.propEventSubscriptions[n] = this.on(n, r))
                    }
                    this.prevMotionValues = function(e, t, n) {
                        for (let r in t) {
                            let i = t[r],
                                s = n[r];
                            if (g(i)) e.addValue(r, i);
                            else if (g(s)) e.addValue(r, (0, m.OQ)(i, {
                                owner: e
                            }));
                            else if (s !== i) {
                                if (e.hasValue(r)) {
                                    let t = e.getValue(r);
                                    !0 === t.liveStyle ? t.jump(i) : t.hasAnimated || t.set(i)
                                } else {
                                    let t = e.getStaticValue(r);
                                    e.addValue(r, (0, m.OQ)(void 0 !== t ? t : i, {
                                        owner: e
                                    }))
                                }
                            }
                        }
                        for (let r in n) void 0 === t[r] && e.removeValue(r);
                        return t
                    }(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
                }
                getProps() {
                    return this.props
                }
                getVariant(e) {
                    return this.props.variants ? this.props.variants[e] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(e) {
                    let t = this.getClosestVariantNode();
                    if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
                }
                addValue(e, t) {
                    let n = this.values.get(e);
                    t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get())
                }
                removeValue(e) {
                    this.values.delete(e);
                    let t = this.valueSubscriptions.get(e);
                    t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
                }
                hasValue(e) {
                    return this.values.has(e)
                }
                getValue(e, t) {
                    if (this.props.values && this.props.values[e]) return this.props.values[e];
                    let n = this.values.get(e);
                    return void 0 === n && void 0 !== t && (n = (0, m.OQ)(null === t ? void 0 : t, {
                        owner: this
                    }), this.addValue(e, n)), n
                }
                readValue(e, t) {
                    var n;
                    let r = void 0 === this.latestValues[e] && this.current ? null !== (n = this.getBaseTargetFromProps(this.props, e)) && void 0 !== n ? n : this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
                    return null != r && ("string" == typeof r && (ep(r) || _(r)) ? r = parseFloat(r) : !r8(r) && B.f.test(t) && (r = X(e, t)), this.setBaseTarget(e, g(r) ? r.get() : r)), g(r) ? r.get() : r
                }
                setBaseTarget(e, t) {
                    this.baseTarget[e] = t
                }
                getBaseTarget(e) {
                    var t;
                    let n;
                    let {
                        initial: r
                    } = this.props;
                    if ("string" == typeof r || "object" == typeof r) {
                        let s = i(this.props, r, null === (t = this.presenceContext) || void 0 === t ? void 0 : t.custom);
                        s && (n = s[e])
                    }
                    if (r && void 0 !== n) return n;
                    let s = this.getBaseTargetFromProps(this.props, e);
                    return void 0 === s || g(s) ? void 0 !== this.initialValues[e] && void 0 === n ? void 0 : this.baseTarget[e] : s
                }
                on(e, t) {
                    return this.events[e] || (this.events[e] = new np.v), this.events[e].add(t)
                }
                notify(e, ...t) {
                    this.events[e] && this.events[e].notify(...t)
                }
            }
            class it extends ie {
                constructor() {
                    super(...arguments), this.KeyframeResolver = eb
                }
                sortInstanceNodePosition(e, t) {
                    return 2 & e.compareDocumentPosition(t) ? 1 : -1
                }
                getBaseTargetFromProps(e, t) {
                    return e.style ? e.style[t] : void 0
                }
                removeValueFromRenderState(e, {
                    vars: t,
                    style: n
                }) {
                    delete t[e], delete n[e]
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: e
                    } = this.props;
                    g(e) && (this.childSubscription = e.on("change", e => {
                        this.current && (this.current.textContent = `${e}`)
                    }))
                }
            }
            class ir extends it {
                constructor() {
                    super(...arguments), this.type = "html", this.renderInstance = rX
                }
                readValueFromInstance(e, t) {
                    if (c.has(t)) {
                        let e = J(t);
                        return e && e.default || 0
                    } {
                        let n = window.getComputedStyle(e),
                            r = ((0, ef.j)(t) ? n.getPropertyValue(t) : n[t]) || 0;
                        return "string" == typeof r ? r.trim() : r
                    }
                }
                measureInstanceViewportBox(e, {
                    transformPagePoint: t
                }) {
                    return tz(e, t)
                }
                build(e, t, n) {
                    rD(e, t, n.transformTemplate)
                }
                scrapeMotionValuesFromProps(e, t, n) {
                    return rY(e, t, n)
                }
            }
            class ii extends it {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = tO, this.updateDimensions = () => {
                        this.current && !this.renderState.dimensions && rJ(this.current, this.renderState)
                    }
                }
                getBaseTargetFromProps(e, t) {
                    return e[t]
                }
                readValueFromInstance(e, t) {
                    if (c.has(t)) {
                        let e = J(t);
                        return e && e.default || 0
                    }
                    return t = rZ.has(t) ? t : v(t), e.getAttribute(t)
                }
                scrapeMotionValuesFromProps(e, t, n) {
                    return r1(e, t, n)
                }
                onBindTransform() {
                    this.current && !this.renderState.dimensions && w.Gt.postRender(this.updateDimensions)
                }
                build(e, t, n) {
                    rq(e, t, this.isSVGTag, n.transformTemplate)
                }
                renderInstance(e, t, n, r) {
                    r0(e, t, n, r)
                }
                mount(e) {
                    this.isSVGTag = rH(e.tagName), super.mount(e)
                }
            }
            let is = function(e) {
                if ("undefined" == typeof Proxy) return e;
                let t = new Map;
                return new Proxy((...t) => e(...t), {
                    get: (n, r) => "create" === r ? e : (t.has(r) || t.set(r, e(r)), t.get(r))
                })
            }((o = {
                animation: {
                    Feature: td
                },
                exit: {
                    Feature: tp
                },
                inView: {
                    Feature: rg
                },
                tap: {
                    Feature: rc
                },
                focus: {
                    Feature: rl
                },
                hover: {
                    Feature: ra
                },
                pan: {
                    Feature: t3
                },
                drag: {
                    Feature: t4,
                    ProjectionNode: rs,
                    MeasureLayout: nl
                },
                layout: {
                    ProjectionNode: rs,
                    MeasureLayout: nl
                }
            }, a = (e, t) => rV(e) ? new ii(t) : new ir(t, {
                allowProjection: e !== t8.Fragment
            }), function(e, {
                forwardMotionProps: t
            } = {
                forwardMotionProps: !1
            }) {
                return function({
                    preloadedFeatures: e,
                    createVisualElement: t,
                    useRender: n,
                    useVisualState: r,
                    Component: i
                }) {
                    var s, o;

                    function a(e, s) {
                        var o;
                        let a;
                        let l = {
                                ...(0, t8.useContext)(rv.Q),
                                ...e,
                                layoutId: function({
                                    layoutId: e
                                }) {
                                    let t = (0, t8.useContext)(t7.L).id;
                                    return t && void 0 !== e ? t + "-" + e : e
                                }(e)
                            },
                            {
                                isStatic: u
                            } = l,
                            c = function(e) {
                                let {
                                    initial: t,
                                    animate: n
                                } = function(e, t) {
                                    if (rA(e)) {
                                        let {
                                            initial: t,
                                            animate: n
                                        } = e;
                                        return {
                                            initial: !1 === t || tn(t) ? t : void 0,
                                            animate: tn(n) ? n : void 0
                                        }
                                    }
                                    return !1 !== e.inherit ? t : {}
                                }(e, (0, t8.useContext)(rb));
                                return (0, t8.useMemo)(() => ({
                                    initial: t,
                                    animate: n
                                }), [rx(t), rx(n)])
                            }(e),
                            d = r(e, u);
                        if (!u && rS.B) {
                            (0, t8.useContext)(ry).strict;
                            let e = function(e) {
                                let {
                                    drag: t,
                                    layout: n
                                } = rE;
                                if (!t && !n) return {};
                                let r = {
                                    ...t,
                                    ...n
                                };
                                return {
                                    MeasureLayout: (null == t ? void 0 : t.isEnabled(e)) || (null == n ? void 0 : n.isEnabled(e)) ? r.MeasureLayout : void 0,
                                    ProjectionNode: r.ProjectionNode
                                }
                            }(l);
                            a = e.MeasureLayout, c.visualElement = function(e, t, n, r, i) {
                                var s, o;
                                let {
                                    visualElement: a
                                } = (0, t8.useContext)(rb), l = (0, t8.useContext)(ry), u = (0, t8.useContext)(rC.t), c = (0, t8.useContext)(rv.Q).reducedMotion, d = (0, t8.useRef)(null);
                                r = r || l.renderer, !d.current && r && (d.current = r(e, {
                                    visualState: t,
                                    parent: a,
                                    props: n,
                                    presenceContext: u,
                                    blockInitialAnimation: !!u && !1 === u.initial,
                                    reducedMotionConfig: c
                                }));
                                let h = d.current,
                                    p = (0, t8.useContext)(ne);
                                h && !h.projection && i && ("html" === h.type || "svg" === h.type) && function(e, t, n, r) {
                                    let {
                                        layoutId: i,
                                        layout: s,
                                        drag: o,
                                        dragConstraints: a,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    } = t;
                                    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : function e(t) {
                                        if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                                    }(e.parent)), e.projection.setOptions({
                                        layoutId: i,
                                        layout: s,
                                        alwaysMeasureLayout: !!o || a && tU(a),
                                        visualElement: e,
                                        animationType: "string" == typeof s ? s : "both",
                                        initialPromotionConfig: r,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    })
                                }(d.current, n, i, p);
                                let f = (0, t8.useRef)(!1);
                                (0, t8.useInsertionEffect)(() => {
                                    h && f.current && h.update(n, u)
                                });
                                let m = n[b],
                                    g = (0, t8.useRef)(!!m && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, m)) && (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o ? void 0 : o.call(window, m)));
                                return (0, rP.E)(() => {
                                    h && (f.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), ns.render(h.render), g.current && h.animationState && h.animationState.animateChanges())
                                }), (0, t8.useEffect)(() => {
                                    h && (!g.current && h.animationState && h.animationState.animateChanges(), g.current && (queueMicrotask(() => {
                                        var e;
                                        null === (e = window.MotionHandoffMarkAsComplete) || void 0 === e || e.call(window, m)
                                    }), g.current = !1))
                                }), h
                            }(i, d, l, t, e.ProjectionNode)
                        }
                        return (0, t6.jsxs)(rb.Provider, {
                            value: c,
                            children: [a && c.visualElement ? (0, t6.jsx)(a, {
                                visualElement: c.visualElement,
                                ...l
                            }) : null, n(i, e, (o = c.visualElement, (0, t8.useCallback)(e => {
                                e && d.onMount && d.onMount(e), o && (e ? o.mount(e) : o.unmount()), s && ("function" == typeof s ? s(e) : tU(s) && (s.current = e))
                            }, [o])), d, u, c.visualElement)]
                        })
                    }
                    e && function(e) {
                        for (let t in e) rE[t] = {
                            ...rE[t],
                            ...e[t]
                        }
                    }(e), a.displayName = `motion.${"string"==typeof i?i:`create(${null!==(o=null!==(s=i.displayName)&&void 0!==s?s:i.name)&&void 0!==o?o:""})`}`;
                    let l = (0, t8.forwardRef)(a);
                    return l[rT] = i, l
                }({
                    ...rV(e) ? r4 : rK,
                    preloadedFeatures: o,
                    useRender: function(e = !1) {
                        return (t, n, r, {
                            latestValues: i
                        }, s) => {
                            let o = (rV(t) ? function(e, t, n, r) {
                                    let i = (0, t8.useMemo)(() => {
                                        let n = rW();
                                        return rq(n, t, rH(r), e.transformTemplate), {
                                            ...n.attrs,
                                            style: {
                                                ...n.style
                                            }
                                        }
                                    }, [t]);
                                    if (e.style) {
                                        let t = {};
                                        rj(t, e.style, e), i.style = {
                                            ...t,
                                            ...i.style
                                        }
                                    }
                                    return i
                                } : function(e, t) {
                                    let n = {},
                                        r = function(e, t) {
                                            let n = e.style || {},
                                                r = {};
                                            return rj(r, n, e), Object.assign(r, function({
                                                transformTemplate: e
                                            }, t) {
                                                return (0, t8.useMemo)(() => {
                                                    let n = rL();
                                                    return rD(n, t, e), Object.assign({}, n.vars, n.style)
                                                }, [t])
                                            }(e, t)), r
                                        }(e, t);
                                    return e.drag && !1 !== e.dragListener && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
                                })(n, i, s, t),
                                a = function(e, t, n) {
                                    let r = {};
                                    for (let i in e)("values" !== i || "object" != typeof e.values) && (rF(i) || !0 === n && rB(i) || !t && !rB(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
                                    return r
                                }(n, "string" == typeof t, e),
                                l = t !== t8.Fragment ? {
                                    ...a,
                                    ...o,
                                    ref: r
                                } : {},
                                {
                                    children: u
                                } = n,
                                c = (0, t8.useMemo)(() => g(u) ? u.get() : u, [u]);
                            return (0, t8.createElement)(t, {
                                ...l,
                                children: c
                            })
                        }
                    }(t),
                    createVisualElement: a,
                    Component: e
                })
            }))
        },
        40568: (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => i,
                p: () => o
            });
            let r = e => t => "string" == typeof t && t.startsWith(e),
                i = r("--"),
                s = r("var(--"),
                o = e => !!s(e) && a.test(e.split("/*")[0].trim()),
                a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
        },
        4283: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => r
            });
            let r = {
                value: null,
                addProjectionMetrics: null
            }
        },
        74668: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => r
            });
            let r = {
                skipAnimations: !1,
                useManualTiming: !1
            }
        },
        32358: (e, t, n) => {
            "use strict";

            function r(e, t) {
                -1 === e.indexOf(t) && e.push(t)
            }

            function i(e, t) {
                let n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
            n.d(t, {
                Ai: () => i,
                Kq: () => r
            })
        },
        42464: (e, t, n) => {
            "use strict";
            n.d(t, {
                q: () => r
            });
            let r = (e, t, n) => n > t ? t : n < e ? e : n
        },
        28844: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => u
            });
            var r = n(41533),
                i = n(8104),
                s = n(86896),
                o = n(42464),
                a = n(78955),
                l = n(91339);

            function u(e, t, {
                clamp: n = !0,
                ease: c,
                mixer: d
            } = {}) {
                let h = e.length;
                if ((0, i.V)(h === t.length, "Both input and output ranges must be the same length"), 1 === h) return () => t[0];
                if (2 === h && t[0] === t[1]) return () => t[1];
                let p = e[0] === e[1];
                e[0] > e[h - 1] && (e = [...e].reverse(), t = [...t].reverse());
                let f = function(e, t, n) {
                        let i = [],
                            s = n || a.j,
                            o = e.length - 1;
                        for (let n = 0; n < o; n++) {
                            let o = s(e[n], e[n + 1]);
                            if (t) {
                                let e = Array.isArray(t) ? t[n] || r.l : t;
                                o = (0, l.F)(e, o)
                            }
                            i.push(o)
                        }
                        return i
                    }(t, c, d),
                    m = f.length,
                    g = n => {
                        if (p && n < e[0]) return t[0];
                        let r = 0;
                        if (m > 1)
                            for (; r < e.length - 2 && !(n < e[r + 1]); r++);
                        let i = (0, s.q)(e[r], e[r + 1], n);
                        return f[r](i)
                    };
                return n ? t => g((0, o.q)(e[0], e[h - 1], t)) : g
            }
        },
        98288: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => r
            });
            let r = "undefined" != typeof window
        },
        78955: (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => E
            });
            var r = n(39713),
                i = n(8104);

            function s(e, t, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }
            var o = n(5252),
                a = n(33735),
                l = n(72027);

            function u(e, t) {
                return n => n > 0 ? t : e
            }
            let c = (e, t, n) => {
                    let r = e * e,
                        i = n * (t * t - r) + r;
                    return i < 0 ? 0 : Math.sqrt(i)
                },
                d = [o.u, a.B, l.V],
                h = e => d.find(t => t.test(e));

            function p(e) {
                let t = h(e);
                if ((0, i.$)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t) return !1;
                let n = t.parse(e);
                return t === l.V && (n = function({
                    hue: e,
                    saturation: t,
                    lightness: n,
                    alpha: r
                }) {
                    e /= 360, n /= 100;
                    let i = 0,
                        o = 0,
                        a = 0;
                    if (t /= 100) {
                        let r = n < .5 ? n * (1 + t) : n + t - n * t,
                            l = 2 * n - r;
                        i = s(l, r, e + 1 / 3), o = s(l, r, e), a = s(l, r, e - 1 / 3)
                    } else i = o = a = n;
                    return {
                        red: Math.round(255 * i),
                        green: Math.round(255 * o),
                        blue: Math.round(255 * a),
                        alpha: r
                    }
                }(n)), n
            }
            let f = (e, t) => {
                let n = p(e),
                    i = p(t);
                if (!n || !i) return u(e, t);
                let s = {
                    ...n
                };
                return e => (s.red = c(n.red, i.red, e), s.green = c(n.green, i.green, e), s.blue = c(n.blue, i.blue, e), s.alpha = (0, r.k)(n.alpha, i.alpha, e), a.B.transform(s))
            };
            var m = n(91339),
                g = n(27739),
                y = n(30615),
                v = n(40568);
            let b = new Set(["none", "hidden"]);

            function A(e, t) {
                return n => (0, r.k)(e, t, n)
            }

            function w(e) {
                return "number" == typeof e ? A : "string" == typeof e ? (0, v.p)(e) ? u : g.y.test(e) ? f : k : Array.isArray(e) ? x : "object" == typeof e ? g.y.test(e) ? f : S : u
            }

            function x(e, t) {
                let n = [...e],
                    r = n.length,
                    i = e.map((e, n) => w(e)(e, t[n]));
                return e => {
                    for (let t = 0; t < r; t++) n[t] = i[t](e);
                    return n
                }
            }

            function S(e, t) {
                let n = {
                        ...e,
                        ...t
                    },
                    r = {};
                for (let i in n) void 0 !== e[i] && void 0 !== t[i] && (r[i] = w(e[i])(e[i], t[i]));
                return e => {
                    for (let t in r) n[t] = r[t](e);
                    return n
                }
            }
            let k = (e, t) => {
                let n = y.f.createTransformer(t),
                    r = (0, y.V)(e),
                    s = (0, y.V)(t);
                return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? b.has(e) && !s.values.length || b.has(t) && !r.values.length ? function(e, t) {
                    return b.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
                }(e, t) : (0, m.F)(x(function(e, t) {
                    var n;
                    let r = [],
                        i = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let s = 0; s < t.values.length; s++) {
                        let o = t.types[s],
                            a = e.indexes[o][i[o]],
                            l = null !== (n = e.values[a]) && void 0 !== n ? n : 0;
                        r[s] = l, i[o]++
                    }
                    return r
                }(r, s), s.values), n) : ((0, i.$)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), u(e, t))
            };

            function E(e, t, n) {
                return "number" == typeof e && "number" == typeof t && "number" == typeof n ? (0, r.k)(e, t, n) : w(e)(e, t)
            }
        },
        39713: (e, t, n) => {
            "use strict";
            n.d(t, {
                k: () => r
            });
            let r = (e, t, n) => e + (t - e) * n
        },
        5621: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(86896),
                i = n(39713);

            function s(e) {
                let t = [0];
                return ! function(e, t) {
                    let n = e[e.length - 1];
                    for (let s = 1; s <= t; s++) {
                        let o = (0, r.q)(0, t, s);
                        e.push((0, i.k)(n, 1, o))
                    }
                }(t, e.length - 1), t
            }
        },
        91339: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => i
            });
            let r = (e, t) => n => t(e(n)),
                i = (...e) => e.reduce(r)
        },
        22606: (e, t, n) => {
            "use strict";
            n.d(t, {
                v: () => i
            });
            var r = n(32358);
            class i {
                constructor() {
                    this.subscriptions = []
                }
                add(e) {
                    return (0, r.Kq)(this.subscriptions, e), () => (0, r.Ai)(this.subscriptions, e)
                }
                notify(e, t, n) {
                    let r = this.subscriptions.length;
                    if (r) {
                        if (1 === r) this.subscriptions[0](e, t, n);
                        else
                            for (let i = 0; i < r; i++) {
                                let r = this.subscriptions[i];
                                r && r(e, t, n)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        28601: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => i
            });
            var r = n(96540);

            function i(e) {
                let t = (0, r.useRef)(null);
                return null === t.current && (t.current = e()), t.current
            }
        },
        25128: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => i
            });
            var r = n(96540);
            let i = n(98288).B ? r.useLayoutEffect : r.useEffect
        },
        57177: (e, t, n) => {
            "use strict";

            function r(e, t) {
                return t ? 1e3 / t * e : 0
            }
            n.d(t, {
                f: () => r
            })
        },
        24785: (e, t, n) => {
            "use strict";
            n.d(t, {
                OQ: () => c
            });
            var r = n(44582),
                i = n(22606),
                s = n(57177),
                o = n(10104);
            let a = e => !isNaN(parseFloat(e)),
                l = {
                    current: void 0
                };
            class u {
                constructor(e, t = {}) {
                    this.version = "12.4.7", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e, t = !0) => {
                        let n = r.k.now();
                        this.updatedAt !== n && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner
                }
                setCurrent(e) {
                    this.current = e, this.updatedAt = r.k.now(), null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = a(this.current))
                }
                setPrevFrameValue(e = this.current) {
                    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
                }
                onChange(e) {
                    return this.on("change", e)
                }
                on(e, t) {
                    this.events[e] || (this.events[e] = new i.v);
                    let n = this.events[e].add(t);
                    return "change" === e ? () => {
                        n(), o.Gt.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : n
                }
                clearListeners() {
                    for (let e in this.events) this.events[e].clear()
                }
                attach(e, t) {
                    this.passiveEffect = e, this.stopPassiveEffect = t
                }
                set(e, t = !0) {
                    t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
                }
                setWithVelocity(e, t, n) {
                    this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n
                }
                jump(e, t = !0) {
                    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return l.current && l.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    let e = r.k.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
                    let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return (0, s.f)(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
                }
                start(e) {
                    return this.stop(), new Promise(t => {
                        this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function c(e, t) {
                return new u(e, t)
            }
        },
        5252: (e, t, n) => {
            "use strict";
            n.d(t, {
                u: () => i
            });
            var r = n(33735);
            let i = {
                test: (0, n(18521).$)("#"),
                parse: function(e) {
                    let t = "",
                        n = "",
                        r = "",
                        i = "";
                    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
                        red: parseInt(t, 16),
                        green: parseInt(n, 16),
                        blue: parseInt(r, 16),
                        alpha: i ? parseInt(i, 16) / 255 : 1
                    }
                },
                transform: r.B.transform
            }
        },
        72027: (e, t, n) => {
            "use strict";
            n.d(t, {
                V: () => a
            });
            var r = n(82944),
                i = n(55269),
                s = n(66046),
                o = n(18521);
            let a = {
                test: (0, o.$)("hsl", "hue"),
                parse: (0, o.q)("hue", "saturation", "lightness"),
                transform: ({
                    hue: e,
                    saturation: t,
                    lightness: n,
                    alpha: o = 1
                }) => "hsla(" + Math.round(e) + ", " + i.KN.transform((0, s.a)(t)) + ", " + i.KN.transform((0, s.a)(n)) + ", " + (0, s.a)(r.X4.transform(o)) + ")"
            }
        },
        27739: (e, t, n) => {
            "use strict";
            n.d(t, {
                y: () => o
            });
            var r = n(5252),
                i = n(72027),
                s = n(33735);
            let o = {
                test: e => s.B.test(e) || r.u.test(e) || i.V.test(e),
                parse: e => s.B.test(e) ? s.B.parse(e) : i.V.test(e) ? i.V.parse(e) : r.u.parse(e),
                transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? s.B.transform(e) : i.V.transform(e)
            }
        },
        33735: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => u
            });
            var r = n(42464),
                i = n(82944),
                s = n(66046),
                o = n(18521);
            let a = e => (0, r.q)(0, 255, e),
                l = {
                    ...i.ai,
                    transform: e => Math.round(a(e))
                },
                u = {
                    test: (0, o.$)("rgb", "red"),
                    parse: (0, o.q)("red", "green", "blue"),
                    transform: ({
                        red: e,
                        green: t,
                        blue: n,
                        alpha: r = 1
                    }) => "rgba(" + l.transform(e) + ", " + l.transform(t) + ", " + l.transform(n) + ", " + (0, s.a)(i.X4.transform(r)) + ")"
                }
        },
        18521: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => s,
                q: () => o
            });
            var r = n(849);
            let i = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                s = (e, t) => n => !!("string" == typeof n && i.test(n) && n.startsWith(e) || t && null != n && Object.prototype.hasOwnProperty.call(n, t)),
                o = (e, t, n) => i => {
                    if ("string" != typeof i) return i;
                    let [s, o, a, l] = i.match(r.S);
                    return {
                        [e]: parseFloat(s),
                        [t]: parseFloat(o),
                        [n]: parseFloat(a),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                }
        },
        30615: (e, t, n) => {
            "use strict";
            n.d(t, {
                V: () => c,
                f: () => f
            });
            var r = n(27739);
            let i = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
            var s = n(849),
                o = n(66046);
            let a = "number",
                l = "color",
                u = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function c(e) {
                let t = e.toString(),
                    n = [],
                    i = {
                        color: [],
                        number: [],
                        var: []
                    },
                    s = [],
                    o = 0,
                    c = t.replace(u, e => (r.y.test(e) ? (i.color.push(o), s.push(l), n.push(r.y.parse(e))) : e.startsWith("var(") ? (i.var.push(o), s.push("var"), n.push(e)) : (i.number.push(o), s.push(a), n.push(parseFloat(e))), ++o, "${}")).split("${}");
                return {
                    values: n,
                    split: c,
                    indexes: i,
                    types: s
                }
            }

            function d(e) {
                return c(e).values
            }

            function h(e) {
                let {
                    split: t,
                    types: n
                } = c(e), i = t.length;
                return e => {
                    let s = "";
                    for (let u = 0; u < i; u++)
                        if (s += t[u], void 0 !== e[u]) {
                            let t = n[u];
                            t === a ? s += (0, o.a)(e[u]) : t === l ? s += r.y.transform(e[u]) : s += e[u]
                        } return s
                }
            }
            let p = e => "number" == typeof e ? 0 : e,
                f = {
                    test: function(e) {
                        var t, n;
                        return isNaN(e) && "string" == typeof e && ((null === (t = e.match(s.S)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(i)) || void 0 === n ? void 0 : n.length) || 0) > 0
                    },
                    parse: d,
                    createTransformer: h,
                    getAnimatableNone: function(e) {
                        let t = d(e);
                        return h(e)(t.map(p))
                    }
                }
        },
        82944: (e, t, n) => {
            "use strict";
            n.d(t, {
                X4: () => s,
                ai: () => i,
                hs: () => o
            });
            var r = n(42464);
            let i = {
                    test: e => "number" == typeof e,
                    parse: parseFloat,
                    transform: e => e
                },
                s = {
                    ...i,
                    transform: e => (0, r.q)(0, 1, e)
                },
                o = {
                    ...i,
                    default: 1
                }
        },
        55269: (e, t, n) => {
            "use strict";
            n.d(t, {
                KN: () => s,
                gQ: () => u,
                px: () => o,
                uj: () => i,
                vh: () => a,
                vw: () => l
            });
            let r = e => ({
                    test: t => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
                    parse: parseFloat,
                    transform: t => `${t}${e}`
                }),
                i = r("deg"),
                s = r("%"),
                o = r("px"),
                a = r("vh"),
                l = r("vw"),
                u = {
                    ...s,
                    parse: e => s.parse(e) / 100,
                    transform: e => s.transform(100 * e)
                }
        },
        849: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => r
            });
            let r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
        },
        66046: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => r
            });
            let r = e => Math.round(1e5 * e) / 1e5
        },
        18987: (e, t, n) => {
            "use strict";

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) e[r] = n[r]
                }
                return e
            }
            n.d(t, {
                A: () => i
            });
            var i = function e(t, n) {
                function i(e, i, s) {
                    if ("undefined" != typeof document) {
                        "number" == typeof(s = r({}, n, s)).expires && (s.expires = new Date(Date.now() + 864e5 * s.expires)), s.expires && (s.expires = s.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var o = "";
                        for (var a in s) s[a] && (o += "; " + a, !0 !== s[a] && (o += "=" + s[a].split(";")[0]));
                        return document.cookie = e + "=" + t.write(i, e) + o
                    }
                }
                return Object.create({
                    set: i,
                    get: function(e) {
                        if ("undefined" != typeof document && (!arguments.length || e)) {
                            for (var n = document.cookie ? document.cookie.split("; ") : [], r = {}, i = 0; i < n.length; i++) {
                                var s = n[i].split("="),
                                    o = s.slice(1).join("=");
                                try {
                                    var a = decodeURIComponent(s[0]);
                                    if (r[a] = t.read(o, a), e === a) break
                                } catch (e) {}
                            }
                            return e ? r[e] : r
                        }
                    },
                    remove: function(e, t) {
                        i(e, "", r({}, t, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(t) {
                        return e(this.converter, r({}, this.attributes, t))
                    },
                    withConverter: function(t) {
                        return e(r({}, this.converter, t), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(n)
                    },
                    converter: {
                        value: Object.freeze(t)
                    }
                })
            }({
                read: function(e) {
                    return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                },
                write: function(e) {
                    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                }
            }, {
                path: "/"
            })
        },
        35313: (e, t, n) => {
            "use strict";
            n.d(t, {
                P6: () => o,
                vG: () => d,
                tu: () => u,
                CD: () => E,
                KZ: () => g,
                rU: () => a,
                PT: () => k,
                DW: () => h,
                WH: () => c,
                Mc: () => C,
                yL: () => y,
                TU: () => function e(t, n) {
                    if (t) return "function" == typeof t && f() ? g(t, n) : h(t) ? v(t) : Array.isArray(t) ? t.map(t => e(t, n) || b.easeOut) : b[t]
                },
                YE: () => l,
                c$: () => L,
                KJ: () => w,
                Wp: () => j,
                nL: () => f,
                Jb: () => i
            });
            var r = n(54435);
            let i = (0, r.p)(() => void 0 !== window.ScrollTimeline);
            class s {
                constructor(e) {
                    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
                }
                get finished() {
                    return Promise.all(this.animations.map(e => "finished" in e ? e.finished : e))
                }
                getAll(e) {
                    return this.animations[0][e]
                }
                setAll(e, t) {
                    for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t
                }
                attachTimeline(e, t) {
                    let n = this.animations.map(n => i() && n.attachTimeline ? n.attachTimeline(e) : "function" == typeof t ? t(n) : void 0);
                    return () => {
                        n.forEach((e, t) => {
                            e && e(), this.animations[t].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(e) {
                    this.setAll("time", e)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(e) {
                    this.setAll("speed", e)
                }
                get startTime() {
                    return this.getAll("startTime")
                }
                get duration() {
                    let e = 0;
                    for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration);
                    return e
                }
                runAll(e) {
                    this.animations.forEach(t => t[e]())
                }
                flatten() {
                    this.runAll("flatten")
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            class o extends s {
                then(e, t) {
                    return Promise.all(this.animations).then(e).catch(t)
                }
            }

            function a(e, t) {
                return e ? e[t] || e.default || e : void 0
            }
            let l = 2e4;

            function u(e) {
                let t = 0,
                    n = e.next(t);
                for (; !n.done && t < l;) t += 50, n = e.next(t);
                return t >= l ? 1 / 0 : t
            }

            function c(e) {
                return "function" == typeof e
            }

            function d(e, t) {
                e.timeline = t, e.onfinish = null
            }
            let h = e => Array.isArray(e) && "number" == typeof e[0],
                p = {
                    linearEasing: void 0
                },
                f = function(e, t) {
                    let n = (0, r.p)(e);
                    return () => {
                        var e;
                        return null !== (e = p[t]) && void 0 !== e ? e : n()
                    }
                }(() => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (e) {
                        return !1
                    }
                    return !0
                }, "linearEasing");
            var m = n(86896);
            let g = (e, t, n = 10) => {
                let r = "",
                    i = Math.max(Math.round(t / n), 2);
                for (let t = 0; t < i; t++) r += e((0, m.q)(0, i - 1, t)) + ", ";
                return `linear(${r.substring(0,r.length-2)})`
            };

            function y(e) {
                return !!("function" == typeof e && f() || !e || "string" == typeof e && (e in b || f()) || h(e) || Array.isArray(e) && e.every(y))
            }
            let v = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
                b = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: v([0, .65, .55, 1]),
                    circOut: v([.55, 0, 1, .45]),
                    backIn: v([.31, .01, .66, -.59]),
                    backOut: v([.33, 1.53, .69, .99])
                },
                A = {
                    x: !1,
                    y: !1
                };

            function w(e, t, n) {
                var r;
                if (e instanceof EventTarget) return [e];
                if ("string" == typeof e) {
                    let i = document;
                    t && (i = t.current);
                    let s = null !== (r = null == n ? void 0 : n[e]) && void 0 !== r ? r : i.querySelectorAll(e);
                    return s ? Array.from(s) : []
                }
                return Array.from(e)
            }

            function x(e, t) {
                let n = w(e),
                    r = new AbortController;
                return [n, {
                    passive: !0,
                    ...t,
                    signal: r.signal
                }, () => r.abort()]
            }

            function S(e) {
                return !("touch" === e.pointerType || A.x || A.y)
            }

            function k(e, t, n = {}) {
                let [r, i, s] = x(e, n), o = e => {
                    if (!S(e)) return;
                    let {
                        target: n
                    } = e, r = t(n, e);
                    if ("function" != typeof r || !n) return;
                    let s = e => {
                        S(e) && (r(e), n.removeEventListener("pointerleave", s))
                    };
                    n.addEventListener("pointerleave", s, i)
                };
                return r.forEach(e => {
                    e.addEventListener("pointerenter", o, i)
                }), s
            }

            function E(e, t) {
                let n = `${t}PointerCapture`;
                if (e.target instanceof Element && n in e.target && void 0 !== e.pointerId) try {
                    e.target[n](e.pointerId)
                } catch (e) {}
            }
            let T = (e, t) => !!t && (e === t || T(e, t.parentElement)),
                C = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary,
                P = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                O = new WeakSet;

            function M(e) {
                return t => {
                    "Enter" === t.key && e(t)
                }
            }

            function R(e, t) {
                e.dispatchEvent(new PointerEvent("pointer" + t, {
                    isPrimary: !0,
                    bubbles: !0
                }))
            }
            let I = (e, t) => {
                let n = e.currentTarget;
                if (!n) return;
                let r = M(() => {
                    if (O.has(n)) return;
                    R(n, "down");
                    let e = M(() => {
                        R(n, "up")
                    });
                    n.addEventListener("keyup", e, t), n.addEventListener("blur", () => R(n, "cancel"), t)
                });
                n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
            };

            function D(e) {
                return C(e) && !(A.x || A.y)
            }

            function L(e, t, n = {}) {
                let [r, i, s] = x(e, n), o = e => {
                    let n = e.currentTarget;
                    if (!n || !D(e) || O.has(n)) return;
                    O.add(n), E(e, "set");
                    let r = t(n, e),
                        s = (e, t) => {
                            n.removeEventListener("pointerup", o), n.removeEventListener("pointercancel", a), E(e, "release"), D(e) && O.has(n) && (O.delete(n), "function" == typeof r && r(e, {
                                success: t
                            }))
                        },
                        o = e => {
                            var t;
                            e.isTrusted && (t = n instanceof Element ? n.getBoundingClientRect() : {
                                left: 0,
                                top: 0,
                                right: window.innerWidth,
                                bottom: window.innerHeight
                            }, e.clientX < t.left || e.clientX > t.right || e.clientY < t.top || e.clientY > t.bottom) ? s(e, !1) : s(e, !(n instanceof Element) || T(n, e.target))
                        },
                        a = e => {
                            s(e, !1)
                        };
                    n.addEventListener("pointerup", o, i), n.addEventListener("pointercancel", a, i), n.addEventListener("lostpointercapture", a, i)
                };
                return r.forEach(e => {
                    e = n.useGlobalTarget ? window : e;
                    let t = !1;
                    if (e instanceof HTMLElement) {
                        var r;
                        t = !0, r = e, P.has(r.tagName) || -1 !== r.tabIndex || null !== e.getAttribute("tabindex") || (e.tabIndex = 0)
                    }
                    e.addEventListener("pointerdown", o, i), t && e.addEventListener("focus", e => I(e, i), i)
                }), s
            }

            function j(e) {
                return "x" === e || "y" === e ? A[e] ? null : (A[e] = !0, () => {
                    A[e] = !1
                }) : A.x || A.y ? null : (A.x = A.y = !0, () => {
                    A.x = A.y = !1
                })
            }
            n(77331), n(41533)
        },
        8104: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => i,
                V: () => s
            });
            var r = n(41533);
            let i = r.l,
                s = r.l
        },
        54435: (e, t, n) => {
            "use strict";

            function r(e) {
                let t;
                return () => (void 0 === t && (t = e()), t)
            }
            n.d(t, {
                p: () => r
            })
        },
        41533: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => r
            });
            let r = e => e
        },
        86896: (e, t, n) => {
            "use strict";
            n.d(t, {
                q: () => r
            });
            let r = (e, t, n) => {
                let r = t - e;
                return 0 === r ? 1 : (n - e) / r
            }
        },
        77331: (e, t, n) => {
            "use strict";
            n.d(t, {
                X: () => i,
                f: () => r
            });
            let r = e => 1e3 * e,
                i = e => e / 1e3
        },
        85787: (e, t, n) => {
            "use strict";
            n.d(t, {
                k5: () => c
            });
            var r = n(96540),
                i = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                s = r.createContext && r.createContext(i),
                o = ["attr", "size", "title"];

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach(function(t) {
                        var r, i;
                        r = t, i = n[t], (r = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != typeof r) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(r)) in e ? Object.defineProperty(e, r, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[r] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function c(e) {
                return t => r.createElement(d, a({
                    attr: u({}, e.attr)
                }, t), function e(t) {
                    return t && t.map((t, n) => r.createElement(t.tag, u({
                        key: n
                    }, t.attr), e(t.child)))
                }(e.child))
            }

            function d(e) {
                var t = t => {
                    var n, {
                            attr: i,
                            size: s,
                            title: l
                        } = e,
                        c = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = function(e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r]
                                    } return n
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var s = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                            }
                            return i
                        }(e, o),
                        d = s || t.size || "1em";
                    return t.className && (n = t.className), e.className && (n = (n ? n + " " : "") + e.className), r.createElement("svg", a({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, i, c, {
                        className: n,
                        style: u(u({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: d,
                        width: d,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), l && r.createElement("title", null, l), e.children)
                };
                return void 0 !== s ? r.createElement(s.Consumer, null, e => t(e)) : t(i)
            }
        },
        97666: (e, t, n) => {
            "use strict";
            let r;
            n.d(t, {
                Ay: () => N
            });
            class i extends Error {
                constructor(e) {
                    super("ClientResponseError"), this.url = "", this.status = 0, this.response = {}, this.isAbort = !1, this.originalError = null, Object.setPrototypeOf(this, i.prototype), null !== e && "object" == typeof e && (this.url = "string" == typeof e.url ? e.url : "", this.status = "number" == typeof e.status ? e.status : 0, this.isAbort = !!e.isAbort, this.originalError = e.originalError, null !== e.response && "object" == typeof e.response ? this.response = e.response : null !== e.data && "object" == typeof e.data ? this.response = e.data : this.response = {}), this.originalError || e instanceof i || (this.originalError = e), "undefined" != typeof DOMException && e instanceof DOMException && (this.isAbort = !0), this.name = "ClientResponseError " + this.status, this.message = this.response?.message, this.message || (this.isAbort ? this.message = "The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation." : this.originalError?.cause?.message?.includes("ECONNREFUSED ::1") ? this.message = "Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21)." : this.message = "Something went wrong while processing your request.")
                }
                get data() {
                    return this.response
                }
                toJSON() {
                    return {
                        ...this
                    }
                }
            }
            let s = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

            function o(e, t, n) {
                let r = Object.assign({}, n || {}),
                    i = r.encode || l;
                if (!s.test(e)) throw TypeError("argument name is invalid");
                let o = i(t);
                if (o && !s.test(o)) throw TypeError("argument val is invalid");
                let a = e + "=" + o;
                if (null != r.maxAge) {
                    let e = r.maxAge - 0;
                    if (isNaN(e) || !isFinite(e)) throw TypeError("option maxAge is invalid");
                    a += "; Max-Age=" + Math.floor(e)
                }
                if (r.domain) {
                    if (!s.test(r.domain)) throw TypeError("option domain is invalid");
                    a += "; Domain=" + r.domain
                }
                if (r.path) {
                    if (!s.test(r.path)) throw TypeError("option path is invalid");
                    a += "; Path=" + r.path
                }
                if (r.expires) {
                    var u;
                    if (u = r.expires, "[object Date]" !== Object.prototype.toString.call(u) && !(u instanceof Date) || isNaN(r.expires.valueOf())) throw TypeError("option expires is invalid");
                    a += "; Expires=" + r.expires.toUTCString()
                }
                if (r.httpOnly && (a += "; HttpOnly"), r.secure && (a += "; Secure"), r.priority) switch ("string" == typeof r.priority ? r.priority.toLowerCase() : r.priority) {
                    case "low":
                        a += "; Priority=Low";
                        break;
                    case "medium":
                        a += "; Priority=Medium";
                        break;
                    case "high":
                        a += "; Priority=High";
                        break;
                    default:
                        throw TypeError("option priority is invalid")
                }
                if (r.sameSite) switch ("string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
                    case !0:
                    case "strict":
                        a += "; SameSite=Strict";
                        break;
                    case "lax":
                        a += "; SameSite=Lax";
                        break;
                    case "none":
                        a += "; SameSite=None";
                        break;
                    default:
                        throw TypeError("option sameSite is invalid")
                }
                return a
            }

            function a(e) {
                return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e
            }

            function l(e) {
                return encodeURIComponent(e)
            }
            let u = "undefined" != typeof navigator && "ReactNative" === navigator.product || "undefined" != typeof global && global.HermesInternal;

            function c(e) {
                if (e) try {
                    let t = decodeURIComponent(r(e.split(".")[1]).split("").map(function(e) {
                        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                    }).join(""));
                    return JSON.parse(t) || {}
                } catch (e) {}
                return {}
            }

            function d(e, t = 0) {
                let n = c(e);
                return !(Object.keys(n).length > 0 && (!n.exp || n.exp - t > Date.now() / 1e3))
            }
            r = "function" != typeof atob || u ? e => {
                let t = String(e).replace(/=+$/, "");
                if (t.length % 4 == 1) throw Error("'atob' failed: The string to be decoded is not correctly encoded.");
                for (var n, r, i = 0, s = 0, o = ""; r = t.charAt(s++); ~r && (n = i % 4 ? 64 * n + r : r, i++ % 4) && (o += String.fromCharCode(255 & n >> (-2 * i & 6)))) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
                return o
            } : atob;
            let h = "pb_auth";
            class p {
                constructor() {
                    this.baseToken = "", this.baseModel = null, this._onChangeCallbacks = []
                }
                get token() {
                    return this.baseToken
                }
                get record() {
                    return this.baseModel
                }
                get model() {
                    return this.baseModel
                }
                get isValid() {
                    return !d(this.token)
                }
                get isSuperuser() {
                    let e = c(this.token);
                    return "auth" == e.type && ("_superusers" == this.record?.collectionName || !this.record?.collectionName && "pbc_3142635823" == e.collectionId)
                }
                get isAdmin() {
                    return console.warn("Please replace pb.authStore.isAdmin with pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"), this.isSuperuser
                }
                get isAuthRecord() {
                    return console.warn("Please replace pb.authStore.isAuthRecord with !pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"), "auth" == c(this.token).type && !this.isSuperuser
                }
                save(e, t) {
                    this.baseToken = e || "", this.baseModel = t || null, this.triggerChange()
                }
                clear() {
                    this.baseToken = "", this.baseModel = null, this.triggerChange()
                }
                loadFromCookie(e, t = h) {
                    let n = function(e, t) {
                            let n = {};
                            if ("string" != typeof e) return n;
                            let r = Object.assign({}, {}).decode || a,
                                i = 0;
                            for (; i < e.length;) {
                                let t = e.indexOf("=", i);
                                if (-1 === t) break;
                                let s = e.indexOf(";", i);
                                if (-1 === s) s = e.length;
                                else if (s < t) {
                                    i = e.lastIndexOf(";", t - 1) + 1;
                                    continue
                                }
                                let o = e.slice(i, t).trim();
                                if (void 0 === n[o]) {
                                    let i = e.slice(t + 1, s).trim();
                                    34 === i.charCodeAt(0) && (i = i.slice(1, -1));
                                    try {
                                        n[o] = r(i)
                                    } catch (e) {
                                        n[o] = i
                                    }
                                }
                                i = s + 1
                            }
                            return n
                        }(e || "")[t] || "",
                        r = {};
                    try {
                        r = JSON.parse(n), ("object" != typeof r || Array.isArray(r)) && (r = {})
                    } catch (e) {}
                    this.save(r.token || "", r.record || r.model || null)
                }
                exportToCookie(e, t = h) {
                    let n = {
                            secure: !0,
                            sameSite: !0,
                            httpOnly: !0,
                            path: "/"
                        },
                        r = c(this.token);
                    n.expires = new Date(r?.exp ? 1e3 * r.exp : "1970-01-01"), e = Object.assign({}, n, e);
                    let i = {
                            token: this.token,
                            record: this.record ? JSON.parse(JSON.stringify(this.record)) : null
                        },
                        s = o(t, JSON.stringify(i), e),
                        a = "undefined" != typeof Blob ? new Blob([s]).size : s.length;
                    if (i.record && a > 4096) {
                        i.record = {
                            id: i.record?.id,
                            email: i.record?.email
                        };
                        let n = ["collectionId", "collectionName", "verified"];
                        for (let e in this.record) n.includes(e) && (i.record[e] = this.record[e]);
                        s = o(t, JSON.stringify(i), e)
                    }
                    return s
                }
                onChange(e, t = !1) {
                    return this._onChangeCallbacks.push(e), t && e(this.token, this.record), () => {
                        for (let t = this._onChangeCallbacks.length - 1; t >= 0; t--)
                            if (this._onChangeCallbacks[t] == e) return delete this._onChangeCallbacks[t], void this._onChangeCallbacks.splice(t, 1)
                    }
                }
                triggerChange() {
                    for (let e of this._onChangeCallbacks) e && e(this.token, this.record)
                }
            }
            class f extends p {
                constructor(e = "pocketbase_auth") {
                    super(), this.storageFallback = {}, this.storageKey = e, this._bindStorageEvent()
                }
                get token() {
                    return (this._storageGet(this.storageKey) || {}).token || ""
                }
                get record() {
                    let e = this._storageGet(this.storageKey) || {};
                    return e.record || e.model || null
                }
                get model() {
                    return this.record
                }
                save(e, t) {
                    this._storageSet(this.storageKey, {
                        token: e,
                        record: t
                    }), super.save(e, t)
                }
                clear() {
                    this._storageRemove(this.storageKey), super.clear()
                }
                _storageGet(e) {
                    if ("undefined" != typeof window && window?.localStorage) {
                        let t = window.localStorage.getItem(e) || "";
                        try {
                            return JSON.parse(t)
                        } catch (e) {
                            return t
                        }
                    }
                    return this.storageFallback[e]
                }
                _storageSet(e, t) {
                    if ("undefined" != typeof window && window?.localStorage) {
                        let n = t;
                        "string" != typeof t && (n = JSON.stringify(t)), window.localStorage.setItem(e, n)
                    } else this.storageFallback[e] = t
                }
                _storageRemove(e) {
                    "undefined" != typeof window && window?.localStorage && window.localStorage?.removeItem(e), delete this.storageFallback[e]
                }
                _bindStorageEvent() {
                    "undefined" != typeof window && window?.localStorage && window.addEventListener && window.addEventListener("storage", e => {
                        if (e.key != this.storageKey) return;
                        let t = this._storageGet(this.storageKey) || {};
                        super.save(t.token || "", t.record || t.model || null)
                    })
                }
            }
            class m {
                constructor(e) {
                    this.client = e
                }
            }
            class g extends m {
                async getAll(e) {
                    return e = Object.assign({
                        method: "GET"
                    }, e), this.client.send("/api/settings", e)
                }
                async update(e, t) {
                    return t = Object.assign({
                        method: "PATCH",
                        body: e
                    }, t), this.client.send("/api/settings", t)
                }
                async testS3(e = "storage", t) {
                    return t = Object.assign({
                        method: "POST",
                        body: {
                            filesystem: e
                        }
                    }, t), this.client.send("/api/settings/test/s3", t).then(() => !0)
                }
                async testEmail(e, t, n, r) {
                    return r = Object.assign({
                        method: "POST",
                        body: {
                            email: t,
                            template: n,
                            collection: e
                        }
                    }, r), this.client.send("/api/settings/test/email", r).then(() => !0)
                }
                async generateAppleClientSecret(e, t, n, r, i, s) {
                    return s = Object.assign({
                        method: "POST",
                        body: {
                            clientId: e,
                            teamId: t,
                            keyId: n,
                            privateKey: r,
                            duration: i
                        }
                    }, s), this.client.send("/api/settings/apple/generate-client-secret", s)
                }
            }
            let y = ["requestKey", "$cancelKey", "$autoCancel", "fetch", "headers", "body", "query", "params", "cache", "credentials", "headers", "integrity", "keepalive", "method", "mode", "redirect", "referrer", "referrerPolicy", "signal", "window"];

            function v(e) {
                if (e)
                    for (let t in e.query = e.query || {}, e) y.includes(t) || (e.query[t] = e[t], delete e[t])
            }

            function b(e) {
                let t = [];
                for (let n in e) {
                    if (null === e[n] || void 0 === e[n]) continue;
                    let r = e[n],
                        i = encodeURIComponent(n);
                    if (Array.isArray(r))
                        for (let e of r) t.push(i + "=" + encodeURIComponent(e));
                    else r instanceof Date ? t.push(i + "=" + encodeURIComponent(r.toISOString())) : "object" == typeof r ? t.push(i + "=" + encodeURIComponent(JSON.stringify(r))) : t.push(i + "=" + encodeURIComponent(r))
                }
                return t.join("&")
            }
            class A extends m {
                constructor() {
                    super(...arguments), this.clientId = "", this.eventSource = null, this.subscriptions = {}, this.lastSentSubscriptions = [], this.maxConnectTimeout = 15e3, this.reconnectAttempts = 0, this.maxReconnectAttempts = 1 / 0, this.predefinedReconnectIntervals = [200, 300, 500, 1e3, 1200, 1500, 2e3], this.pendingConnects = []
                }
                get isConnected() {
                    return !!this.eventSource && !!this.clientId && !this.pendingConnects.length
                }
                async subscribe(e, t, n) {
                    if (!e) throw Error("topic must be set.");
                    let r = e;
                    if (n) {
                        v(n = Object.assign({}, n));
                        let e = "options=" + encodeURIComponent(JSON.stringify({
                            query: n.query,
                            headers: n.headers
                        }));
                        r += (r.includes("?") ? "&" : "?") + e
                    }
                    let i = function(e) {
                        let n;
                        try {
                            n = JSON.parse(e?.data)
                        } catch {}
                        t(n || {})
                    };
                    return this.subscriptions[r] || (this.subscriptions[r] = []), this.subscriptions[r].push(i), this.isConnected ? 1 === this.subscriptions[r].length ? await this.submitSubscriptions() : this.eventSource?.addEventListener(r, i) : await this.connect(), async () => this.unsubscribeByTopicAndListener(e, i)
                }
                async unsubscribe(e) {
                    let t = !1;
                    if (e) {
                        let n = this.getSubscriptionsByTopic(e);
                        for (let e in n)
                            if (this.hasSubscriptionListeners(e)) {
                                for (let t of this.subscriptions[e]) this.eventSource?.removeEventListener(e, t);
                                delete this.subscriptions[e], t || (t = !0)
                            }
                    } else this.subscriptions = {};
                    this.hasSubscriptionListeners() ? t && await this.submitSubscriptions() : this.disconnect()
                }
                async unsubscribeByPrefix(e) {
                    let t = !1;
                    for (let n in this.subscriptions)
                        if ((n + "?").startsWith(e)) {
                            for (let e of (t = !0, this.subscriptions[n])) this.eventSource?.removeEventListener(n, e);
                            delete this.subscriptions[n]
                        } t && (this.hasSubscriptionListeners() ? await this.submitSubscriptions() : this.disconnect())
                }
                async unsubscribeByTopicAndListener(e, t) {
                    let n = !1,
                        r = this.getSubscriptionsByTopic(e);
                    for (let e in r) {
                        if (!Array.isArray(this.subscriptions[e]) || !this.subscriptions[e].length) continue;
                        let r = !1;
                        for (let n = this.subscriptions[e].length - 1; n >= 0; n--) this.subscriptions[e][n] === t && (r = !0, delete this.subscriptions[e][n], this.subscriptions[e].splice(n, 1), this.eventSource?.removeEventListener(e, t));
                        r && (this.subscriptions[e].length || delete this.subscriptions[e], n || this.hasSubscriptionListeners(e) || (n = !0))
                    }
                    this.hasSubscriptionListeners() ? n && await this.submitSubscriptions() : this.disconnect()
                }
                hasSubscriptionListeners(e) {
                    if (this.subscriptions = this.subscriptions || {}, e) return !!this.subscriptions[e]?.length;
                    for (let e in this.subscriptions)
                        if (this.subscriptions[e]?.length) return !0;
                    return !1
                }
                async submitSubscriptions() {
                    if (this.clientId) return this.addAllSubscriptionListeners(), this.lastSentSubscriptions = this.getNonEmptySubscriptionKeys(), this.client.send("/api/realtime", {
                        method: "POST",
                        body: {
                            clientId: this.clientId,
                            subscriptions: this.lastSentSubscriptions
                        },
                        requestKey: this.getSubscriptionsCancelKey()
                    }).catch(e => {
                        if (!e?.isAbort) throw e
                    })
                }
                getSubscriptionsCancelKey() {
                    return "realtime_" + this.clientId
                }
                getSubscriptionsByTopic(e) {
                    let t = {};
                    for (let n in e = e.includes("?") ? e : e + "?", this.subscriptions)(n + "?").startsWith(e) && (t[n] = this.subscriptions[n]);
                    return t
                }
                getNonEmptySubscriptionKeys() {
                    let e = [];
                    for (let t in this.subscriptions) this.subscriptions[t].length && e.push(t);
                    return e
                }
                addAllSubscriptionListeners() {
                    if (this.eventSource)
                        for (let e in this.removeAllSubscriptionListeners(), this.subscriptions)
                            for (let t of this.subscriptions[e]) this.eventSource.addEventListener(e, t)
                }
                removeAllSubscriptionListeners() {
                    if (this.eventSource)
                        for (let e in this.subscriptions)
                            for (let t of this.subscriptions[e]) this.eventSource.removeEventListener(e, t)
                }
                async connect() {
                    if (!(this.reconnectAttempts > 0)) return new Promise((e, t) => {
                        this.pendingConnects.push({
                            resolve: e,
                            reject: t
                        }), this.pendingConnects.length > 1 || this.initConnect()
                    })
                }
                initConnect() {
                    this.disconnect(!0), clearTimeout(this.connectTimeoutId), this.connectTimeoutId = setTimeout(() => {
                        this.connectErrorHandler(Error("EventSource connect took too long."))
                    }, this.maxConnectTimeout), this.eventSource = new EventSource(this.client.buildURL("/api/realtime")), this.eventSource.onerror = e => {
                        this.connectErrorHandler(Error("Failed to establish realtime connection."))
                    }, this.eventSource.addEventListener("PB_CONNECT", e => {
                        this.clientId = e?.lastEventId, this.submitSubscriptions().then(async () => {
                            let e = 3;
                            for (; this.hasUnsentSubscriptions() && e > 0;) e--, await this.submitSubscriptions()
                        }).then(() => {
                            for (let e of this.pendingConnects) e.resolve();
                            this.pendingConnects = [], this.reconnectAttempts = 0, clearTimeout(this.reconnectTimeoutId), clearTimeout(this.connectTimeoutId);
                            let t = this.getSubscriptionsByTopic("PB_CONNECT");
                            for (let n in t)
                                for (let r of t[n]) r(e)
                        }).catch(e => {
                            this.clientId = "", this.connectErrorHandler(e)
                        })
                    })
                }
                hasUnsentSubscriptions() {
                    let e = this.getNonEmptySubscriptionKeys();
                    if (e.length != this.lastSentSubscriptions.length) return !0;
                    for (let t of e)
                        if (!this.lastSentSubscriptions.includes(t)) return !0;
                    return !1
                }
                connectErrorHandler(e) {
                    if (clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), !this.clientId && !this.reconnectAttempts || this.reconnectAttempts > this.maxReconnectAttempts) {
                        for (let t of this.pendingConnects) t.reject(new i(e));
                        return this.pendingConnects = [], void this.disconnect()
                    }
                    this.disconnect(!0);
                    let t = this.predefinedReconnectIntervals[this.reconnectAttempts] || this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length - 1];
                    this.reconnectAttempts++, this.reconnectTimeoutId = setTimeout(() => {
                        this.initConnect()
                    }, t)
                }
                disconnect(e = !1) {
                    if (this.clientId && this.onDisconnect && this.onDisconnect(Object.keys(this.subscriptions)), clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), this.removeAllSubscriptionListeners(), this.client.cancelRequest(this.getSubscriptionsCancelKey()), this.eventSource?.close(), this.eventSource = null, this.clientId = "", !e) {
                        for (let e of (this.reconnectAttempts = 0, this.pendingConnects)) e.resolve();
                        this.pendingConnects = []
                    }
                }
            }
            class w extends m {
                decode(e) {
                    return e
                }
                async getFullList(e, t) {
                    if ("number" == typeof e) return this._getFullList(e, t);
                    let n = 500;
                    return (t = Object.assign({}, e, t)).batch && (n = t.batch, delete t.batch), this._getFullList(n, t)
                }
                async getList(e = 1, t = 30, n) {
                    return (n = Object.assign({
                        method: "GET"
                    }, n)).query = Object.assign({
                        page: e,
                        perPage: t
                    }, n.query), this.client.send(this.baseCrudPath, n).then(e => (e.items = e.items?.map(e => this.decode(e)) || [], e))
                }
                async getFirstListItem(e, t) {
                    return (t = Object.assign({
                        requestKey: "one_by_filter_" + this.baseCrudPath + "_" + e
                    }, t)).query = Object.assign({
                        filter: e,
                        skipTotal: 1
                    }, t.query), this.getList(1, 1, t).then(e => {
                        if (!e?.items?.length) throw new i({
                            status: 404,
                            response: {
                                code: 404,
                                message: "The requested resource wasn't found.",
                                data: {}
                            }
                        });
                        return e.items[0]
                    })
                }
                async getOne(e, t) {
                    if (!e) throw new i({
                        url: this.client.buildURL(this.baseCrudPath + "/"),
                        status: 404,
                        response: {
                            code: 404,
                            message: "Missing required record id.",
                            data: {}
                        }
                    });
                    return t = Object.assign({
                        method: "GET"
                    }, t), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), t).then(e => this.decode(e))
                }
                async create(e, t) {
                    return t = Object.assign({
                        method: "POST",
                        body: e
                    }, t), this.client.send(this.baseCrudPath, t).then(e => this.decode(e))
                }
                async update(e, t, n) {
                    return n = Object.assign({
                        method: "PATCH",
                        body: t
                    }, n), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), n).then(e => this.decode(e))
                }
                async delete(e, t) {
                    return t = Object.assign({
                        method: "DELETE"
                    }, t), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), t).then(() => !0)
                }
                _getFullList(e = 500, t) {
                    (t = t || {}).query = Object.assign({
                        skipTotal: 1
                    }, t.query);
                    let n = [],
                        r = async i => this.getList(i, e || 500, t).then(e => {
                            let t = e.items;
                            return n = n.concat(t), t.length == e.perPage ? r(i + 1) : n
                        });
                    return r(1)
                }
            }

            function x(e, t, n, r) {
                let i = void 0 !== r;
                return i || void 0 !== n ? i ? (console.warn(e), t.body = Object.assign({}, t.body, n), t.query = Object.assign({}, t.query, r), t) : Object.assign(t, n) : t
            }

            function S(e) {
                e._resetAutoRefresh?.()
            }
            class k extends w {
                constructor(e, t) {
                    super(e), this.collectionIdOrName = t
                }
                get baseCrudPath() {
                    return this.baseCollectionPath + "/records"
                }
                get baseCollectionPath() {
                    return "/api/collections/" + encodeURIComponent(this.collectionIdOrName)
                }
                get isSuperusers() {
                    return "_superusers" == this.collectionIdOrName || "_pbc_2773867675" == this.collectionIdOrName
                }
                async subscribe(e, t, n) {
                    if (!e) throw Error("Missing topic.");
                    if (!t) throw Error("Missing subscription callback.");
                    return this.client.realtime.subscribe(this.collectionIdOrName + "/" + e, t, n)
                }
                async unsubscribe(e) {
                    return e ? this.client.realtime.unsubscribe(this.collectionIdOrName + "/" + e) : this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)
                }
                async getFullList(e, t) {
                    if ("number" == typeof e) return super.getFullList(e, t);
                    let n = Object.assign({}, e, t);
                    return super.getFullList(n)
                }
                async getList(e = 1, t = 30, n) {
                    return super.getList(e, t, n)
                }
                async getFirstListItem(e, t) {
                    return super.getFirstListItem(e, t)
                }
                async getOne(e, t) {
                    return super.getOne(e, t)
                }
                async create(e, t) {
                    return super.create(e, t)
                }
                async update(e, t, n) {
                    return super.update(e, t, n).then(e => {
                        if (this.client.authStore.record?.id === e?.id && (this.client.authStore.record?.collectionId === this.collectionIdOrName || this.client.authStore.record?.collectionName === this.collectionIdOrName)) {
                            let t = Object.assign({}, this.client.authStore.record.expand),
                                n = Object.assign({}, this.client.authStore.record, e);
                            t && (n.expand = Object.assign(t, e.expand)), this.client.authStore.save(this.client.authStore.token, n)
                        }
                        return e
                    })
                }
                async delete(e, t) {
                    return super.delete(e, t).then(t => (t && this.client.authStore.record?.id === e && (this.client.authStore.record?.collectionId === this.collectionIdOrName || this.client.authStore.record?.collectionName === this.collectionIdOrName) && this.client.authStore.clear(), t))
                }
                authResponse(e) {
                    let t = this.decode(e?.record || {});
                    return this.client.authStore.save(e?.token, t), Object.assign({}, e, {
                        token: e?.token || "",
                        record: t
                    })
                }
                async listAuthMethods(e) {
                    return e = Object.assign({
                        method: "GET",
                        fields: "mfa,otp,password,oauth2"
                    }, e), this.client.send(this.baseCollectionPath + "/auth-methods", e)
                }
                async authWithPassword(e, t, n) {
                    let r;
                    n = Object.assign({
                        method: "POST",
                        body: {
                            identity: e,
                            password: t
                        }
                    }, n), this.isSuperusers && (r = n.autoRefreshThreshold, delete n.autoRefreshThreshold, n.autoRefresh || S(this.client));
                    let i = await this.client.send(this.baseCollectionPath + "/auth-with-password", n);
                    return i = this.authResponse(i), r && this.isSuperusers && function(e, t, n, r) {
                        S(e);
                        let i = e.beforeSend,
                            s = e.authStore.record,
                            o = e.authStore.onChange((t, n) => {
                                (!t || n?.id != s?.id || (n?.collectionId || s?.collectionId) && n?.collectionId != s?.collectionId) && S(e)
                            });
                        e._resetAutoRefresh = function() {
                            o(), e.beforeSend = i, delete e._resetAutoRefresh
                        }, e.beforeSend = async (s, o) => {
                            let a = e.authStore.token;
                            if (o.query?.autoRefresh) return i ? i(s, o) : {
                                url: s,
                                sendOptions: o
                            };
                            let l = e.authStore.isValid;
                            if (l && d(e.authStore.token, t)) try {
                                await n()
                            } catch (e) {
                                l = !1
                            }
                            l || await r();
                            let u = o.headers || {};
                            for (let t in u)
                                if ("authorization" == t.toLowerCase() && a == u[t] && e.authStore.token) {
                                    u[t] = e.authStore.token;
                                    break
                                } return o.headers = u, i ? i(s, o) : {
                                url: s,
                                sendOptions: o
                            }
                        }
                    }(this.client, r, () => this.authRefresh({
                        autoRefresh: !0
                    }), () => this.authWithPassword(e, t, Object.assign({
                        autoRefresh: !0
                    }, n))), i
                }
                async authWithOAuth2Code(e, t, n, r, i, s, o) {
                    let a = {
                        method: "POST",
                        body: {
                            provider: e,
                            code: t,
                            codeVerifier: n,
                            redirectURL: r,
                            createData: i
                        }
                    };
                    return a = x("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, options?).", a, s, o), this.client.send(this.baseCollectionPath + "/auth-with-oauth2", a).then(e => this.authResponse(e))
                }
                authWithOAuth2(...e) {
                    if (e.length > 1 || "string" == typeof e?.[0]) return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."), this.authWithOAuth2Code(e?.[0] || "", e?.[1] || "", e?.[2] || "", e?.[3] || "", e?.[4] || {}, e?.[5] || {}, e?.[6] || {});
                    let t = e?.[0] || {},
                        n = null;
                    t.urlCallback || (n = E(void 0));
                    let r = new A(this.client);

                    function s() {
                        n?.close(), r.unsubscribe()
                    }
                    let o = {},
                        a = t.requestKey;
                    return a && (o.requestKey = a), this.listAuthMethods(o).then(e => {
                        let o = e.oauth2.providers.find(e => e.name === t.provider);
                        if (!o) throw new i(Error(`Missing or invalid provider "${t.provider}".`));
                        let l = this.client.buildURL("/api/oauth2-redirect"),
                            u = a ? this.client.cancelControllers?.[a] : void 0;
                        return u && (u.signal.onabort = () => {
                            s()
                        }), new Promise(async (e, a) => {
                            try {
                                await r.subscribe("@oauth2", async n => {
                                    let c = r.clientId;
                                    try {
                                        if (!n.state || c !== n.state) throw Error("State parameters don't match.");
                                        if (n.error || !n.code) throw Error("OAuth2 redirect error or missing code: " + n.error);
                                        let r = Object.assign({}, t);
                                        delete r.provider, delete r.scopes, delete r.createData, delete r.urlCallback, u?.signal?.onabort && (u.signal.onabort = null);
                                        let i = await this.authWithOAuth2Code(o.name, n.code, o.codeVerifier, l, t.createData, r);
                                        e(i)
                                    } catch (e) {
                                        a(new i(e))
                                    }
                                    s()
                                });
                                let c = {
                                    state: r.clientId
                                };
                                t.scopes?.length && (c.scope = t.scopes.join(" "));
                                let d = this._replaceQueryParams(o.authURL + l, c),
                                    h = t.urlCallback || function(e) {
                                        n ? n.location.href = e : n = E(e)
                                    };
                                await h(d)
                            } catch (e) {
                                s(), a(new i(e))
                            }
                        })
                    }).catch(e => {
                        throw s(), e
                    })
                }
                async authRefresh(e, t) {
                    let n = {
                        method: "POST"
                    };
                    return n = x("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).", n, e, t), this.client.send(this.baseCollectionPath + "/auth-refresh", n).then(e => this.authResponse(e))
                }
                async requestPasswordReset(e, t, n) {
                    let r = {
                        method: "POST",
                        body: {
                            email: e
                        }
                    };
                    return r = x("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).", r, t, n), this.client.send(this.baseCollectionPath + "/request-password-reset", r).then(() => !0)
                }
                async confirmPasswordReset(e, t, n, r, i) {
                    let s = {
                        method: "POST",
                        body: {
                            token: e,
                            password: t,
                            passwordConfirm: n
                        }
                    };
                    return s = x("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).", s, r, i), this.client.send(this.baseCollectionPath + "/confirm-password-reset", s).then(() => !0)
                }
                async requestVerification(e, t, n) {
                    let r = {
                        method: "POST",
                        body: {
                            email: e
                        }
                    };
                    return r = x("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).", r, t, n), this.client.send(this.baseCollectionPath + "/request-verification", r).then(() => !0)
                }
                async confirmVerification(e, t, n) {
                    let r = {
                        method: "POST",
                        body: {
                            token: e
                        }
                    };
                    return r = x("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).", r, t, n), this.client.send(this.baseCollectionPath + "/confirm-verification", r).then(() => {
                        let t = c(e),
                            n = this.client.authStore.record;
                        return n && !n.verified && n.id === t.id && n.collectionId === t.collectionId && (n.verified = !0, this.client.authStore.save(this.client.authStore.token, n)), !0
                    })
                }
                async requestEmailChange(e, t, n) {
                    let r = {
                        method: "POST",
                        body: {
                            newEmail: e
                        }
                    };
                    return r = x("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).", r, t, n), this.client.send(this.baseCollectionPath + "/request-email-change", r).then(() => !0)
                }
                async confirmEmailChange(e, t, n, r) {
                    let i = {
                        method: "POST",
                        body: {
                            token: e,
                            password: t
                        }
                    };
                    return i = x("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).", i, n, r), this.client.send(this.baseCollectionPath + "/confirm-email-change", i).then(() => {
                        let t = c(e),
                            n = this.client.authStore.record;
                        return n && n.id === t.id && n.collectionId === t.collectionId && this.client.authStore.clear(), !0
                    })
                }
                async listExternalAuths(e, t) {
                    return this.client.collection("_externalAuths").getFullList(Object.assign({}, t, {
                        filter: this.client.filter("recordRef = {:id}", {
                            id: e
                        })
                    }))
                }
                async unlinkExternalAuth(e, t, n) {
                    let r = await this.client.collection("_externalAuths").getFirstListItem(this.client.filter("recordRef = {:recordId} && provider = {:provider}", {
                        recordId: e,
                        provider: t
                    }));
                    return this.client.collection("_externalAuths").delete(r.id, n).then(() => !0)
                }
                async requestOTP(e, t) {
                    return t = Object.assign({
                        method: "POST",
                        body: {
                            email: e
                        }
                    }, t), this.client.send(this.baseCollectionPath + "/request-otp", t)
                }
                async authWithOTP(e, t, n) {
                    return n = Object.assign({
                        method: "POST",
                        body: {
                            otpId: e,
                            password: t
                        }
                    }, n), this.client.send(this.baseCollectionPath + "/auth-with-otp", n).then(e => this.authResponse(e))
                }
                async impersonate(e, t, n) {
                    (n = Object.assign({
                        method: "POST",
                        body: {
                            duration: t
                        }
                    }, n)).headers = n.headers || {}, n.headers.Authorization || (n.headers.Authorization = this.client.authStore.token);
                    let r = new N(this.client.baseURL, new p, this.client.lang),
                        i = await r.send(this.baseCollectionPath + "/impersonate/" + encodeURIComponent(e), n);
                    return r.authStore.save(i?.token, this.decode(i?.record || {})), r
                }
                _replaceQueryParams(e, t = {}) {
                    let n = e,
                        r = "";
                    e.indexOf("?") >= 0 && (n = e.substring(0, e.indexOf("?")), r = e.substring(e.indexOf("?") + 1));
                    let i = {};
                    for (let e of r.split("&")) {
                        if ("" == e) continue;
                        let t = e.split("=");
                        i[decodeURIComponent(t[0].replace(/\+/g, " "))] = decodeURIComponent((t[1] || "").replace(/\+/g, " "))
                    }
                    for (let e in t) t.hasOwnProperty(e) && (null == t[e] ? delete i[e] : i[e] = t[e]);
                    for (let e in r = "", i) i.hasOwnProperty(e) && ("" != r && (r += "&"), r += encodeURIComponent(e.replace(/%20/g, "+")) + "=" + encodeURIComponent(i[e].replace(/%20/g, "+")));
                    return "" != r ? n + "?" + r : n
                }
            }

            function E(e) {
                if ("undefined" == typeof window || !window?.open) throw new i(Error("Not in a browser context - please pass a custom urlCallback function."));
                let t = 1024,
                    n = 768,
                    r = window.innerWidth,
                    s = window.innerHeight;
                t = t > r ? r : t, n = n > s ? s : n;
                let o = r / 2 - t / 2,
                    a = s / 2 - n / 2;
                return window.open(e, "popup_window", "width=" + t + ",height=" + n + ",top=" + a + ",left=" + o + ",resizable,menubar=no")
            }
            class T extends w {
                get baseCrudPath() {
                    return "/api/collections"
                }
                async import(e, t = !1, n) {
                    return n = Object.assign({
                        method: "PUT",
                        body: {
                            collections: e,
                            deleteMissing: t
                        }
                    }, n), this.client.send(this.baseCrudPath + "/import", n).then(() => !0)
                }
                async getScaffolds(e) {
                    return e = Object.assign({
                        method: "GET"
                    }, e), this.client.send(this.baseCrudPath + "/meta/scaffolds", e)
                }
                async truncate(e, t) {
                    return t = Object.assign({
                        method: "DELETE"
                    }, t), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e) + "/truncate", t).then(() => !0)
                }
            }
            class C extends m {
                async getList(e = 1, t = 30, n) {
                    return (n = Object.assign({
                        method: "GET"
                    }, n)).query = Object.assign({
                        page: e,
                        perPage: t
                    }, n.query), this.client.send("/api/logs", n)
                }
                async getOne(e, t) {
                    if (!e) throw new i({
                        url: this.client.buildURL("/api/logs/"),
                        status: 404,
                        response: {
                            code: 404,
                            message: "Missing required log id.",
                            data: {}
                        }
                    });
                    return t = Object.assign({
                        method: "GET"
                    }, t), this.client.send("/api/logs/" + encodeURIComponent(e), t)
                }
                async getStats(e) {
                    return e = Object.assign({
                        method: "GET"
                    }, e), this.client.send("/api/logs/stats", e)
                }
            }
            class P extends m {
                async check(e) {
                    return e = Object.assign({
                        method: "GET"
                    }, e), this.client.send("/api/health", e)
                }
            }
            class O extends m {
                getUrl(e, t, n = {}) {
                    return console.warn("Please replace pb.files.getUrl() with pb.files.getURL()"), this.getURL(e, t, n)
                }
                getURL(e, t, n = {}) {
                    if (!t || !e?.id || !e?.collectionId && !e?.collectionName) return "";
                    let r = [];
                    r.push("api"), r.push("files"), r.push(encodeURIComponent(e.collectionId || e.collectionName)), r.push(encodeURIComponent(e.id)), r.push(encodeURIComponent(t));
                    let i = this.client.buildURL(r.join("/"));
                    if (Object.keys(n).length) {
                        !1 === n.download && delete n.download;
                        let e = new URLSearchParams(n);
                        i += (i.includes("?") ? "&" : "?") + e
                    }
                    return i
                }
                async getToken(e) {
                    return e = Object.assign({
                        method: "POST"
                    }, e), this.client.send("/api/files/token", e).then(e => e?.token || "")
                }
            }
            class M extends m {
                async getFullList(e) {
                    return e = Object.assign({
                        method: "GET"
                    }, e), this.client.send("/api/backups", e)
                }
                async create(e, t) {
                    return t = Object.assign({
                        method: "POST",
                        body: {
                            name: e
                        }
                    }, t), this.client.send("/api/backups", t).then(() => !0)
                }
                async upload(e, t) {
                    return t = Object.assign({
                        method: "POST",
                        body: e
                    }, t), this.client.send("/api/backups/upload", t).then(() => !0)
                }
                async delete(e, t) {
                    return t = Object.assign({
                        method: "DELETE"
                    }, t), this.client.send(`/api/backups/${encodeURIComponent(e)}`, t).then(() => !0)
                }
                async restore(e, t) {
                    return t = Object.assign({
                        method: "POST"
                    }, t), this.client.send(`/api/backups/${encodeURIComponent(e)}/restore`, t).then(() => !0)
                }
                getDownloadUrl(e, t) {
                    return console.warn("Please replace pb.backups.getDownloadUrl() with pb.backups.getDownloadURL()"), this.getDownloadURL(e, t)
                }
                getDownloadURL(e, t) {
                    return this.client.buildURL(`/api/backups/${encodeURIComponent(t)}?token=${encodeURIComponent(e)}`)
                }
            }
            class R extends m {
                async getFullList(e) {
                    return e = Object.assign({
                        method: "GET"
                    }, e), this.client.send("/api/crons", e)
                }
                async run(e, t) {
                    return t = Object.assign({
                        method: "POST"
                    }, t), this.client.send(`/api/crons/${encodeURIComponent(e)}`, t).then(() => !0)
                }
            }

            function I(e) {
                return "undefined" != typeof Blob && e instanceof Blob || "undefined" != typeof File && e instanceof File || null !== e && "object" == typeof e && e.uri && ("undefined" != typeof navigator && "ReactNative" === navigator.product || "undefined" != typeof global && global.HermesInternal)
            }

            function D(e) {
                return e && ("FormData" === e.constructor.name || "undefined" != typeof FormData && e instanceof FormData)
            }

            function L(e) {
                for (let t in e)
                    for (let n of Array.isArray(e[t]) ? e[t] : [e[t]])
                        if (I(n)) return !0;
                return !1
            }
            let j = /^[\-\.\d]+$/;

            function _(e) {
                if ("string" != typeof e) return e;
                if ("true" == e) return !0;
                if ("false" == e) return !1;
                if (("-" === e[0] || e[0] >= "0" && e[0] <= "9") && j.test(e)) {
                    let t = +e;
                    if ("" + t === e) return t
                }
                return e
            }
            class B extends m {
                constructor() {
                    super(...arguments), this.requests = [], this.subs = {}
                }
                collection(e) {
                    return this.subs[e] || (this.subs[e] = new F(this.requests, e)), this.subs[e]
                }
                async send(e) {
                    let t = new FormData,
                        n = [];
                    for (let e = 0; e < this.requests.length; e++) {
                        let r = this.requests[e];
                        if (n.push({
                                method: r.method,
                                url: r.url,
                                headers: r.headers,
                                body: r.json
                            }), r.files)
                            for (let n in r.files)
                                for (let i of r.files[n] || []) t.append("requests." + e + "." + n, i)
                    }
                    return t.append("@jsonPayload", JSON.stringify({
                        requests: n
                    })), e = Object.assign({
                        method: "POST",
                        body: t
                    }, e), this.client.send("/api/batch", e)
                }
            }
            class F {
                constructor(e, t) {
                    this.requests = [], this.requests = e, this.collectionIdOrName = t
                }
                upsert(e, t) {
                    t = Object.assign({
                        body: e || {}
                    }, t);
                    let n = {
                        method: "PUT",
                        url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records"
                    };
                    this.prepareRequest(n, t), this.requests.push(n)
                }
                create(e, t) {
                    t = Object.assign({
                        body: e || {}
                    }, t);
                    let n = {
                        method: "POST",
                        url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records"
                    };
                    this.prepareRequest(n, t), this.requests.push(n)
                }
                update(e, t, n) {
                    n = Object.assign({
                        body: t || {}
                    }, n);
                    let r = {
                        method: "PATCH",
                        url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records/" + encodeURIComponent(e)
                    };
                    this.prepareRequest(r, n), this.requests.push(r)
                }
                delete(e, t) {
                    t = Object.assign({}, t);
                    let n = {
                        method: "DELETE",
                        url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records/" + encodeURIComponent(e)
                    };
                    this.prepareRequest(n, t), this.requests.push(n)
                }
                prepareRequest(e, t) {
                    let n;
                    if (v(t), e.headers = t.headers, e.json = {}, e.files = {}, void 0 !== t.query) {
                        let n = b(t.query);
                        n && (e.url += (e.url.includes("?") ? "&" : "?") + n)
                    }
                    let r = t.body;
                    for (let t in D(r) && (n = {}, r.forEach((e, t) => {
                            if ("@jsonPayload" === t && "string" == typeof e) try {
                                let t = JSON.parse(e);
                                Object.assign(n, t)
                            } catch (e) {
                                console.warn("@jsonPayload error:", e)
                            } else void 0 !== n[t] ? (Array.isArray(n[t]) || (n[t] = [n[t]]), n[t].push(_(e))) : n[t] = _(e)
                        }), r = n), r) {
                        let n = r[t];
                        if (I(n)) e.files[t] = e.files[t] || [], e.files[t].push(n);
                        else if (Array.isArray(n)) {
                            let r = [],
                                i = [];
                            for (let e of n) I(e) ? r.push(e) : i.push(e);
                            if (r.length > 0 && r.length == n.length)
                                for (let n of (e.files[t] = e.files[t] || [], r)) e.files[t].push(n);
                            else if (e.json[t] = i, r.length > 0) {
                                let n = t;
                                for (let i of (t.startsWith("+") || t.endsWith("+") || (n += "+"), e.files[n] = e.files[n] || [], r)) e.files[n].push(i)
                            }
                        } else e.json[t] = n
                    }
                }
            }
            class N {
                get baseUrl() {
                    return this.baseURL
                }
                set baseUrl(e) {
                    this.baseURL = e
                }
                constructor(e = "/", t, n = "en-US") {
                    this.cancelControllers = {}, this.recordServices = {}, this.enableAutoCancellation = !0, this.baseURL = e, this.lang = n, t ? this.authStore = t : "undefined" != typeof window && window.Deno ? this.authStore = new p : this.authStore = new f, this.collections = new T(this), this.files = new O(this), this.logs = new C(this), this.settings = new g(this), this.realtime = new A(this), this.health = new P(this), this.backups = new M(this), this.crons = new R(this)
                }
                get admins() {
                    return this.collection("_superusers")
                }
                createBatch() {
                    return new B(this)
                }
                collection(e) {
                    return this.recordServices[e] || (this.recordServices[e] = new k(this, e)), this.recordServices[e]
                }
                autoCancellation(e) {
                    return this.enableAutoCancellation = !!e, this
                }
                cancelRequest(e) {
                    return this.cancelControllers[e] && (this.cancelControllers[e].abort(), delete this.cancelControllers[e]), this
                }
                cancelAllRequests() {
                    for (let e in this.cancelControllers) this.cancelControllers[e].abort();
                    return this.cancelControllers = {}, this
                }
                filter(e, t) {
                    if (!t) return e;
                    for (let n in t) {
                        let r = t[n];
                        switch (typeof r) {
                            case "boolean":
                            case "number":
                                r = "" + r;
                                break;
                            case "string":
                                r = "'" + r.replace(/'/g, "\\'") + "'";
                                break;
                            default:
                                r = null === r ? "null" : r instanceof Date ? "'" + r.toISOString().replace("T", " ") + "'" : "'" + JSON.stringify(r).replace(/'/g, "\\'") + "'"
                        }
                        e = e.replaceAll("{:" + n + "}", r)
                    }
                    return e
                }
                getFileUrl(e, t, n = {}) {
                    return console.warn("Please replace pb.getFileUrl() with pb.files.getURL()"), this.files.getURL(e, t, n)
                }
                buildUrl(e) {
                    return console.warn("Please replace pb.buildUrl() with pb.buildURL()"), this.buildURL(e)
                }
                buildURL(e) {
                    let t = this.baseURL;
                    return "undefined" == typeof window || !window.location || t.startsWith("https://") || t.startsWith("http://") || (t = window.location.origin?.endsWith("/") ? window.location.origin.substring(0, window.location.origin.length - 1) : window.location.origin || "", this.baseURL.startsWith("/") || (t += window.location.pathname || "/", t += t.endsWith("/") ? "" : "/"), t += this.baseURL), e && (t += t.endsWith("/") ? "" : "/", t += e.startsWith("/") ? e.substring(1) : e), t
                }
                async send(e, t) {
                    t = this.initSendOptions(e, t);
                    let n = this.buildURL(e);
                    if (this.beforeSend) {
                        let e = Object.assign({}, await this.beforeSend(n, t));
                        void 0 !== e.url || void 0 !== e.options ? (n = e.url || n, t = e.options || t) : Object.keys(e).length && (t = e, console?.warn && console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))
                    }
                    if (void 0 !== t.query) {
                        let e = b(t.query);
                        e && (n += (n.includes("?") ? "&" : "?") + e), delete t.query
                    }
                    return "application/json" == this.getHeader(t.headers, "Content-Type") && t.body && "string" != typeof t.body && (t.body = JSON.stringify(t.body)), (t.fetch || fetch)(n, t).then(async e => {
                        let n = {};
                        try {
                            n = await e.json()
                        } catch (e) {}
                        if (this.afterSend && (n = await this.afterSend(e, n, t)), e.status >= 400) throw new i({
                            url: e.url,
                            status: e.status,
                            data: n
                        });
                        return n
                    }).catch(e => {
                        throw new i(e)
                    })
                }
                initSendOptions(e, t) {
                    if ((t = Object.assign({
                            method: "GET"
                        }, t)).body = function(e) {
                            if ("undefined" == typeof FormData || void 0 === e || "object" != typeof e || null === e || D(e) || !L(e)) return e;
                            let t = new FormData;
                            for (let n in e) {
                                let r = e[n];
                                if ("object" != typeof r || L({
                                        data: r
                                    }))
                                    for (let e of Array.isArray(r) ? r : [r]) t.append(n, e);
                                else {
                                    let e = {};
                                    e[n] = r, t.append("@jsonPayload", JSON.stringify(e))
                                }
                            }
                            return t
                        }(t.body), v(t), t.query = Object.assign({}, t.params, t.query), void 0 === t.requestKey && (!1 === t.$autoCancel || !1 === t.query.$autoCancel ? t.requestKey = null : (t.$cancelKey || t.query.$cancelKey) && (t.requestKey = t.$cancelKey || t.query.$cancelKey)), delete t.$autoCancel, delete t.query.$autoCancel, delete t.$cancelKey, delete t.query.$cancelKey, null !== this.getHeader(t.headers, "Content-Type") || D(t.body) || (t.headers = Object.assign({}, t.headers, {
                            "Content-Type": "application/json"
                        })), null === this.getHeader(t.headers, "Accept-Language") && (t.headers = Object.assign({}, t.headers, {
                            "Accept-Language": this.lang
                        })), this.authStore.token && null === this.getHeader(t.headers, "Authorization") && (t.headers = Object.assign({}, t.headers, {
                            Authorization: this.authStore.token
                        })), this.enableAutoCancellation && null !== t.requestKey) {
                        let n = t.requestKey || (t.method || "GET") + e;
                        delete t.requestKey, this.cancelRequest(n);
                        let r = new AbortController;
                        this.cancelControllers[n] = r, t.signal = r.signal
                    }
                    return t
                }
                getHeader(e, t) {
                    for (let n in e = e || {}, t = t.toLowerCase(), e)
                        if (n.toLowerCase() == t) return e[n];
                    return null
                }
            }
        },
        52327: (e, t, n) => {
            "use strict";
            n.d(t, {
                oz: () => nD
            });
            var r = {};
            n.r(r), n.d(r, {
                boolean: () => g,
                booleanish: () => y,
                commaOrSpaceSeparated: () => x,
                commaSeparated: () => w,
                number: () => b,
                overloadedBoolean: () => v,
                spaceSeparated: () => A
            });
            var i = {};
            n.r(i), n.d(i, {
                attentionMarkers: () => tM,
                contentInitial: () => tk,
                disable: () => tR,
                document: () => tS,
                flow: () => tT,
                flowInitial: () => tE,
                insideSpan: () => tO,
                string: () => tC,
                text: () => tP
            });
            let s = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
                o = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
                a = {};

            function l(e, t) {
                return ((t || a).jsx ? o : s).test(e)
            }
            let u = /[ \t\n\f\r]/g;

            function c(e) {
                return "" === e.replace(u, "")
            }
            class d {
                constructor(e, t, n) {
                    this.normal = t, this.property = e, n && (this.space = n)
                }
            }

            function h(e, t) {
                let n = {},
                    r = {};
                for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
                return new d(n, r, t)
            }

            function p(e) {
                return e.toLowerCase()
            }
            d.prototype.normal = {}, d.prototype.property = {}, d.prototype.space = void 0;
            class f {
                constructor(e, t) {
                    this.attribute = t, this.property = e
                }
            }
            f.prototype.attribute = "", f.prototype.booleanish = !1, f.prototype.boolean = !1, f.prototype.commaOrSpaceSeparated = !1, f.prototype.commaSeparated = !1, f.prototype.defined = !1, f.prototype.mustUseProperty = !1, f.prototype.number = !1, f.prototype.overloadedBoolean = !1, f.prototype.property = "", f.prototype.spaceSeparated = !1, f.prototype.space = void 0;
            let m = 0,
                g = S(),
                y = S(),
                v = S(),
                b = S(),
                A = S(),
                w = S(),
                x = S();

            function S() {
                return 2 ** ++m
            }
            let k = Object.keys(r);
            class E extends f {
                constructor(e, t, n, i) {
                    let s = -1;
                    if (super(e, t), function(e, t, n) {
                            n && (e[t] = n)
                        }(this, "space", i), "number" == typeof n)
                        for (; ++s < k.length;) {
                            let e = k[s];
                            ! function(e, t, n) {
                                n && (e[t] = n)
                            }(this, k[s], (n & r[e]) === r[e])
                        }
                }
            }

            function T(e) {
                let t = {},
                    n = {};
                for (let [r, i] of Object.entries(e.properties)) {
                    let s = new E(r, e.transform(e.attributes || {}, r), i, e.space);
                    e.mustUseProperty && e.mustUseProperty.includes(r) && (s.mustUseProperty = !0), t[r] = s, n[p(r)] = r, n[p(s.attribute)] = r
                }
                return new d(t, n, e.space)
            }
            E.prototype.defined = !0;
            let C = T({
                properties: {
                    ariaActiveDescendant: null,
                    ariaAtomic: y,
                    ariaAutoComplete: null,
                    ariaBusy: y,
                    ariaChecked: y,
                    ariaColCount: b,
                    ariaColIndex: b,
                    ariaColSpan: b,
                    ariaControls: A,
                    ariaCurrent: null,
                    ariaDescribedBy: A,
                    ariaDetails: null,
                    ariaDisabled: y,
                    ariaDropEffect: A,
                    ariaErrorMessage: null,
                    ariaExpanded: y,
                    ariaFlowTo: A,
                    ariaGrabbed: y,
                    ariaHasPopup: null,
                    ariaHidden: y,
                    ariaInvalid: null,
                    ariaKeyShortcuts: null,
                    ariaLabel: null,
                    ariaLabelledBy: A,
                    ariaLevel: b,
                    ariaLive: null,
                    ariaModal: y,
                    ariaMultiLine: y,
                    ariaMultiSelectable: y,
                    ariaOrientation: null,
                    ariaOwns: A,
                    ariaPlaceholder: null,
                    ariaPosInSet: b,
                    ariaPressed: y,
                    ariaReadOnly: y,
                    ariaRelevant: null,
                    ariaRequired: y,
                    ariaRoleDescription: A,
                    ariaRowCount: b,
                    ariaRowIndex: b,
                    ariaRowSpan: b,
                    ariaSelected: y,
                    ariaSetSize: b,
                    ariaSort: null,
                    ariaValueMax: b,
                    ariaValueMin: b,
                    ariaValueNow: b,
                    ariaValueText: null,
                    role: null
                },
                transform: (e, t) => "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
            });

            function P(e, t) {
                return t in e ? e[t] : t
            }

            function O(e, t) {
                return P(e, t.toLowerCase())
            }
            let M = T({
                    attributes: {
                        acceptcharset: "accept-charset",
                        classname: "class",
                        htmlfor: "for",
                        httpequiv: "http-equiv"
                    },
                    mustUseProperty: ["checked", "multiple", "muted", "selected"],
                    properties: {
                        abbr: null,
                        accept: w,
                        acceptCharset: A,
                        accessKey: A,
                        action: null,
                        allow: null,
                        allowFullScreen: g,
                        allowPaymentRequest: g,
                        allowUserMedia: g,
                        alt: null,
                        as: null,
                        async: g,
                        autoCapitalize: null,
                        autoComplete: A,
                        autoFocus: g,
                        autoPlay: g,
                        blocking: A,
                        capture: null,
                        charSet: null,
                        checked: g,
                        cite: null,
                        className: A,
                        cols: b,
                        colSpan: null,
                        content: null,
                        contentEditable: y,
                        controls: g,
                        controlsList: A,
                        coords: b | w,
                        crossOrigin: null,
                        data: null,
                        dateTime: null,
                        decoding: null,
                        default: g,
                        defer: g,
                        dir: null,
                        dirName: null,
                        disabled: g,
                        download: v,
                        draggable: y,
                        encType: null,
                        enterKeyHint: null,
                        fetchPriority: null,
                        form: null,
                        formAction: null,
                        formEncType: null,
                        formMethod: null,
                        formNoValidate: g,
                        formTarget: null,
                        headers: A,
                        height: b,
                        hidden: g,
                        high: b,
                        href: null,
                        hrefLang: null,
                        htmlFor: A,
                        httpEquiv: A,
                        id: null,
                        imageSizes: null,
                        imageSrcSet: null,
                        inert: g,
                        inputMode: null,
                        integrity: null,
                        is: null,
                        isMap: g,
                        itemId: null,
                        itemProp: A,
                        itemRef: A,
                        itemScope: g,
                        itemType: A,
                        kind: null,
                        label: null,
                        lang: null,
                        language: null,
                        list: null,
                        loading: null,
                        loop: g,
                        low: b,
                        manifest: null,
                        max: null,
                        maxLength: b,
                        media: null,
                        method: null,
                        min: null,
                        minLength: b,
                        multiple: g,
                        muted: g,
                        name: null,
                        nonce: null,
                        noModule: g,
                        noValidate: g,
                        onAbort: null,
                        onAfterPrint: null,
                        onAuxClick: null,
                        onBeforeMatch: null,
                        onBeforePrint: null,
                        onBeforeToggle: null,
                        onBeforeUnload: null,
                        onBlur: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onContextLost: null,
                        onContextMenu: null,
                        onContextRestored: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFormData: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLanguageChange: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadEnd: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMessageError: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRejectionHandled: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onScrollEnd: null,
                        onSecurityPolicyViolation: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onSlotChange: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnhandledRejection: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onWheel: null,
                        open: g,
                        optimum: b,
                        pattern: null,
                        ping: A,
                        placeholder: null,
                        playsInline: g,
                        popover: null,
                        popoverTarget: null,
                        popoverTargetAction: null,
                        poster: null,
                        preload: null,
                        readOnly: g,
                        referrerPolicy: null,
                        rel: A,
                        required: g,
                        reversed: g,
                        rows: b,
                        rowSpan: b,
                        sandbox: A,
                        scope: null,
                        scoped: g,
                        seamless: g,
                        selected: g,
                        shadowRootClonable: g,
                        shadowRootDelegatesFocus: g,
                        shadowRootMode: null,
                        shape: null,
                        size: b,
                        sizes: null,
                        slot: null,
                        span: b,
                        spellCheck: y,
                        src: null,
                        srcDoc: null,
                        srcLang: null,
                        srcSet: null,
                        start: b,
                        step: null,
                        style: null,
                        tabIndex: b,
                        target: null,
                        title: null,
                        translate: null,
                        type: null,
                        typeMustMatch: g,
                        useMap: null,
                        value: y,
                        width: b,
                        wrap: null,
                        writingSuggestions: null,
                        align: null,
                        aLink: null,
                        archive: A,
                        axis: null,
                        background: null,
                        bgColor: null,
                        border: b,
                        borderColor: null,
                        bottomMargin: b,
                        cellPadding: null,
                        cellSpacing: null,
                        char: null,
                        charOff: null,
                        classId: null,
                        clear: null,
                        code: null,
                        codeBase: null,
                        codeType: null,
                        color: null,
                        compact: g,
                        declare: g,
                        event: null,
                        face: null,
                        frame: null,
                        frameBorder: null,
                        hSpace: b,
                        leftMargin: b,
                        link: null,
                        longDesc: null,
                        lowSrc: null,
                        marginHeight: b,
                        marginWidth: b,
                        noResize: g,
                        noHref: g,
                        noShade: g,
                        noWrap: g,
                        object: null,
                        profile: null,
                        prompt: null,
                        rev: null,
                        rightMargin: b,
                        rules: null,
                        scheme: null,
                        scrolling: y,
                        standby: null,
                        summary: null,
                        text: null,
                        topMargin: b,
                        valueType: null,
                        version: null,
                        vAlign: null,
                        vLink: null,
                        vSpace: b,
                        allowTransparency: null,
                        autoCorrect: null,
                        autoSave: null,
                        disablePictureInPicture: g,
                        disableRemotePlayback: g,
                        prefix: null,
                        property: null,
                        results: b,
                        security: null,
                        unselectable: null
                    },
                    space: "html",
                    transform: O
                }),
                R = T({
                    attributes: {
                        accentHeight: "accent-height",
                        alignmentBaseline: "alignment-baseline",
                        arabicForm: "arabic-form",
                        baselineShift: "baseline-shift",
                        capHeight: "cap-height",
                        className: "class",
                        clipPath: "clip-path",
                        clipRule: "clip-rule",
                        colorInterpolation: "color-interpolation",
                        colorInterpolationFilters: "color-interpolation-filters",
                        colorProfile: "color-profile",
                        colorRendering: "color-rendering",
                        crossOrigin: "crossorigin",
                        dataType: "datatype",
                        dominantBaseline: "dominant-baseline",
                        enableBackground: "enable-background",
                        fillOpacity: "fill-opacity",
                        fillRule: "fill-rule",
                        floodColor: "flood-color",
                        floodOpacity: "flood-opacity",
                        fontFamily: "font-family",
                        fontSize: "font-size",
                        fontSizeAdjust: "font-size-adjust",
                        fontStretch: "font-stretch",
                        fontStyle: "font-style",
                        fontVariant: "font-variant",
                        fontWeight: "font-weight",
                        glyphName: "glyph-name",
                        glyphOrientationHorizontal: "glyph-orientation-horizontal",
                        glyphOrientationVertical: "glyph-orientation-vertical",
                        hrefLang: "hreflang",
                        horizAdvX: "horiz-adv-x",
                        horizOriginX: "horiz-origin-x",
                        horizOriginY: "horiz-origin-y",
                        imageRendering: "image-rendering",
                        letterSpacing: "letter-spacing",
                        lightingColor: "lighting-color",
                        markerEnd: "marker-end",
                        markerMid: "marker-mid",
                        markerStart: "marker-start",
                        navDown: "nav-down",
                        navDownLeft: "nav-down-left",
                        navDownRight: "nav-down-right",
                        navLeft: "nav-left",
                        navNext: "nav-next",
                        navPrev: "nav-prev",
                        navRight: "nav-right",
                        navUp: "nav-up",
                        navUpLeft: "nav-up-left",
                        navUpRight: "nav-up-right",
                        onAbort: "onabort",
                        onActivate: "onactivate",
                        onAfterPrint: "onafterprint",
                        onBeforePrint: "onbeforeprint",
                        onBegin: "onbegin",
                        onCancel: "oncancel",
                        onCanPlay: "oncanplay",
                        onCanPlayThrough: "oncanplaythrough",
                        onChange: "onchange",
                        onClick: "onclick",
                        onClose: "onclose",
                        onCopy: "oncopy",
                        onCueChange: "oncuechange",
                        onCut: "oncut",
                        onDblClick: "ondblclick",
                        onDrag: "ondrag",
                        onDragEnd: "ondragend",
                        onDragEnter: "ondragenter",
                        onDragExit: "ondragexit",
                        onDragLeave: "ondragleave",
                        onDragOver: "ondragover",
                        onDragStart: "ondragstart",
                        onDrop: "ondrop",
                        onDurationChange: "ondurationchange",
                        onEmptied: "onemptied",
                        onEnd: "onend",
                        onEnded: "onended",
                        onError: "onerror",
                        onFocus: "onfocus",
                        onFocusIn: "onfocusin",
                        onFocusOut: "onfocusout",
                        onHashChange: "onhashchange",
                        onInput: "oninput",
                        onInvalid: "oninvalid",
                        onKeyDown: "onkeydown",
                        onKeyPress: "onkeypress",
                        onKeyUp: "onkeyup",
                        onLoad: "onload",
                        onLoadedData: "onloadeddata",
                        onLoadedMetadata: "onloadedmetadata",
                        onLoadStart: "onloadstart",
                        onMessage: "onmessage",
                        onMouseDown: "onmousedown",
                        onMouseEnter: "onmouseenter",
                        onMouseLeave: "onmouseleave",
                        onMouseMove: "onmousemove",
                        onMouseOut: "onmouseout",
                        onMouseOver: "onmouseover",
                        onMouseUp: "onmouseup",
                        onMouseWheel: "onmousewheel",
                        onOffline: "onoffline",
                        onOnline: "ononline",
                        onPageHide: "onpagehide",
                        onPageShow: "onpageshow",
                        onPaste: "onpaste",
                        onPause: "onpause",
                        onPlay: "onplay",
                        onPlaying: "onplaying",
                        onPopState: "onpopstate",
                        onProgress: "onprogress",
                        onRateChange: "onratechange",
                        onRepeat: "onrepeat",
                        onReset: "onreset",
                        onResize: "onresize",
                        onScroll: "onscroll",
                        onSeeked: "onseeked",
                        onSeeking: "onseeking",
                        onSelect: "onselect",
                        onShow: "onshow",
                        onStalled: "onstalled",
                        onStorage: "onstorage",
                        onSubmit: "onsubmit",
                        onSuspend: "onsuspend",
                        onTimeUpdate: "ontimeupdate",
                        onToggle: "ontoggle",
                        onUnload: "onunload",
                        onVolumeChange: "onvolumechange",
                        onWaiting: "onwaiting",
                        onZoom: "onzoom",
                        overlinePosition: "overline-position",
                        overlineThickness: "overline-thickness",
                        paintOrder: "paint-order",
                        panose1: "panose-1",
                        pointerEvents: "pointer-events",
                        referrerPolicy: "referrerpolicy",
                        renderingIntent: "rendering-intent",
                        shapeRendering: "shape-rendering",
                        stopColor: "stop-color",
                        stopOpacity: "stop-opacity",
                        strikethroughPosition: "strikethrough-position",
                        strikethroughThickness: "strikethrough-thickness",
                        strokeDashArray: "stroke-dasharray",
                        strokeDashOffset: "stroke-dashoffset",
                        strokeLineCap: "stroke-linecap",
                        strokeLineJoin: "stroke-linejoin",
                        strokeMiterLimit: "stroke-miterlimit",
                        strokeOpacity: "stroke-opacity",
                        strokeWidth: "stroke-width",
                        tabIndex: "tabindex",
                        textAnchor: "text-anchor",
                        textDecoration: "text-decoration",
                        textRendering: "text-rendering",
                        transformOrigin: "transform-origin",
                        typeOf: "typeof",
                        underlinePosition: "underline-position",
                        underlineThickness: "underline-thickness",
                        unicodeBidi: "unicode-bidi",
                        unicodeRange: "unicode-range",
                        unitsPerEm: "units-per-em",
                        vAlphabetic: "v-alphabetic",
                        vHanging: "v-hanging",
                        vIdeographic: "v-ideographic",
                        vMathematical: "v-mathematical",
                        vectorEffect: "vector-effect",
                        vertAdvY: "vert-adv-y",
                        vertOriginX: "vert-origin-x",
                        vertOriginY: "vert-origin-y",
                        wordSpacing: "word-spacing",
                        writingMode: "writing-mode",
                        xHeight: "x-height",
                        playbackOrder: "playbackorder",
                        timelineBegin: "timelinebegin"
                    },
                    properties: {
                        about: x,
                        accentHeight: b,
                        accumulate: null,
                        additive: null,
                        alignmentBaseline: null,
                        alphabetic: b,
                        amplitude: b,
                        arabicForm: null,
                        ascent: b,
                        attributeName: null,
                        attributeType: null,
                        azimuth: b,
                        bandwidth: null,
                        baselineShift: null,
                        baseFrequency: null,
                        baseProfile: null,
                        bbox: null,
                        begin: null,
                        bias: b,
                        by: null,
                        calcMode: null,
                        capHeight: b,
                        className: A,
                        clip: null,
                        clipPath: null,
                        clipPathUnits: null,
                        clipRule: null,
                        color: null,
                        colorInterpolation: null,
                        colorInterpolationFilters: null,
                        colorProfile: null,
                        colorRendering: null,
                        content: null,
                        contentScriptType: null,
                        contentStyleType: null,
                        crossOrigin: null,
                        cursor: null,
                        cx: null,
                        cy: null,
                        d: null,
                        dataType: null,
                        defaultAction: null,
                        descent: b,
                        diffuseConstant: b,
                        direction: null,
                        display: null,
                        dur: null,
                        divisor: b,
                        dominantBaseline: null,
                        download: g,
                        dx: null,
                        dy: null,
                        edgeMode: null,
                        editable: null,
                        elevation: b,
                        enableBackground: null,
                        end: null,
                        event: null,
                        exponent: b,
                        externalResourcesRequired: null,
                        fill: null,
                        fillOpacity: b,
                        fillRule: null,
                        filter: null,
                        filterRes: null,
                        filterUnits: null,
                        floodColor: null,
                        floodOpacity: null,
                        focusable: null,
                        focusHighlight: null,
                        fontFamily: null,
                        fontSize: null,
                        fontSizeAdjust: null,
                        fontStretch: null,
                        fontStyle: null,
                        fontVariant: null,
                        fontWeight: null,
                        format: null,
                        fr: null,
                        from: null,
                        fx: null,
                        fy: null,
                        g1: w,
                        g2: w,
                        glyphName: w,
                        glyphOrientationHorizontal: null,
                        glyphOrientationVertical: null,
                        glyphRef: null,
                        gradientTransform: null,
                        gradientUnits: null,
                        handler: null,
                        hanging: b,
                        hatchContentUnits: null,
                        hatchUnits: null,
                        height: null,
                        href: null,
                        hrefLang: null,
                        horizAdvX: b,
                        horizOriginX: b,
                        horizOriginY: b,
                        id: null,
                        ideographic: b,
                        imageRendering: null,
                        initialVisibility: null,
                        in: null,
                        in2: null,
                        intercept: b,
                        k: b,
                        k1: b,
                        k2: b,
                        k3: b,
                        k4: b,
                        kernelMatrix: x,
                        kernelUnitLength: null,
                        keyPoints: null,
                        keySplines: null,
                        keyTimes: null,
                        kerning: null,
                        lang: null,
                        lengthAdjust: null,
                        letterSpacing: null,
                        lightingColor: null,
                        limitingConeAngle: b,
                        local: null,
                        markerEnd: null,
                        markerMid: null,
                        markerStart: null,
                        markerHeight: null,
                        markerUnits: null,
                        markerWidth: null,
                        mask: null,
                        maskContentUnits: null,
                        maskUnits: null,
                        mathematical: null,
                        max: null,
                        media: null,
                        mediaCharacterEncoding: null,
                        mediaContentEncodings: null,
                        mediaSize: b,
                        mediaTime: null,
                        method: null,
                        min: null,
                        mode: null,
                        name: null,
                        navDown: null,
                        navDownLeft: null,
                        navDownRight: null,
                        navLeft: null,
                        navNext: null,
                        navPrev: null,
                        navRight: null,
                        navUp: null,
                        navUpLeft: null,
                        navUpRight: null,
                        numOctaves: null,
                        observer: null,
                        offset: null,
                        onAbort: null,
                        onActivate: null,
                        onAfterPrint: null,
                        onBeforePrint: null,
                        onBegin: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnd: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFocusIn: null,
                        onFocusOut: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onMouseWheel: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRepeat: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onShow: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onZoom: null,
                        opacity: null,
                        operator: null,
                        order: null,
                        orient: null,
                        orientation: null,
                        origin: null,
                        overflow: null,
                        overlay: null,
                        overlinePosition: b,
                        overlineThickness: b,
                        paintOrder: null,
                        panose1: null,
                        path: null,
                        pathLength: b,
                        patternContentUnits: null,
                        patternTransform: null,
                        patternUnits: null,
                        phase: null,
                        ping: A,
                        pitch: null,
                        playbackOrder: null,
                        pointerEvents: null,
                        points: null,
                        pointsAtX: b,
                        pointsAtY: b,
                        pointsAtZ: b,
                        preserveAlpha: null,
                        preserveAspectRatio: null,
                        primitiveUnits: null,
                        propagate: null,
                        property: x,
                        r: null,
                        radius: null,
                        referrerPolicy: null,
                        refX: null,
                        refY: null,
                        rel: x,
                        rev: x,
                        renderingIntent: null,
                        repeatCount: null,
                        repeatDur: null,
                        requiredExtensions: x,
                        requiredFeatures: x,
                        requiredFonts: x,
                        requiredFormats: x,
                        resource: null,
                        restart: null,
                        result: null,
                        rotate: null,
                        rx: null,
                        ry: null,
                        scale: null,
                        seed: null,
                        shapeRendering: null,
                        side: null,
                        slope: null,
                        snapshotTime: null,
                        specularConstant: b,
                        specularExponent: b,
                        spreadMethod: null,
                        spacing: null,
                        startOffset: null,
                        stdDeviation: null,
                        stemh: null,
                        stemv: null,
                        stitchTiles: null,
                        stopColor: null,
                        stopOpacity: null,
                        strikethroughPosition: b,
                        strikethroughThickness: b,
                        string: null,
                        stroke: null,
                        strokeDashArray: x,
                        strokeDashOffset: null,
                        strokeLineCap: null,
                        strokeLineJoin: null,
                        strokeMiterLimit: b,
                        strokeOpacity: b,
                        strokeWidth: null,
                        style: null,
                        surfaceScale: b,
                        syncBehavior: null,
                        syncBehaviorDefault: null,
                        syncMaster: null,
                        syncTolerance: null,
                        syncToleranceDefault: null,
                        systemLanguage: x,
                        tabIndex: b,
                        tableValues: null,
                        target: null,
                        targetX: b,
                        targetY: b,
                        textAnchor: null,
                        textDecoration: null,
                        textRendering: null,
                        textLength: null,
                        timelineBegin: null,
                        title: null,
                        transformBehavior: null,
                        type: null,
                        typeOf: x,
                        to: null,
                        transform: null,
                        transformOrigin: null,
                        u1: null,
                        u2: null,
                        underlinePosition: b,
                        underlineThickness: b,
                        unicode: null,
                        unicodeBidi: null,
                        unicodeRange: null,
                        unitsPerEm: b,
                        values: null,
                        vAlphabetic: b,
                        vMathematical: b,
                        vectorEffect: null,
                        vHanging: b,
                        vIdeographic: b,
                        version: null,
                        vertAdvY: b,
                        vertOriginX: b,
                        vertOriginY: b,
                        viewBox: null,
                        viewTarget: null,
                        visibility: null,
                        width: null,
                        widths: null,
                        wordSpacing: null,
                        writingMode: null,
                        x: null,
                        x1: null,
                        x2: null,
                        xChannelSelector: null,
                        xHeight: b,
                        y: null,
                        y1: null,
                        y2: null,
                        yChannelSelector: null,
                        z: null,
                        zoomAndPan: null
                    },
                    space: "svg",
                    transform: P
                }),
                I = T({
                    properties: {
                        xLinkActuate: null,
                        xLinkArcRole: null,
                        xLinkHref: null,
                        xLinkRole: null,
                        xLinkShow: null,
                        xLinkTitle: null,
                        xLinkType: null
                    },
                    space: "xlink",
                    transform: (e, t) => "xlink:" + t.slice(5).toLowerCase()
                }),
                D = T({
                    attributes: {
                        xmlnsxlink: "xmlns:xlink"
                    },
                    properties: {
                        xmlnsXLink: null,
                        xmlns: null
                    },
                    space: "xmlns",
                    transform: O
                }),
                L = T({
                    properties: {
                        xmlBase: null,
                        xmlLang: null,
                        xmlSpace: null
                    },
                    space: "xml",
                    transform: (e, t) => "xml:" + t.slice(3).toLowerCase()
                }),
                j = h([C, M, I, D, L], "html"),
                _ = h([C, R, I, D, L], "svg"),
                B = /[A-Z]/g,
                F = /-[a-z]/g,
                N = /^data[-\w.:]+$/i;

            function V(e) {
                return "-" + e.toLowerCase()
            }

            function z(e) {
                return e.charAt(1).toUpperCase()
            }
            let U = {
                classId: "classID",
                dataType: "datatype",
                itemId: "itemID",
                strokeDashArray: "strokeDasharray",
                strokeDashOffset: "strokeDashoffset",
                strokeLineCap: "strokeLinecap",
                strokeLineJoin: "strokeLinejoin",
                strokeMiterLimit: "strokeMiterlimit",
                typeOf: "typeof",
                xLinkActuate: "xlinkActuate",
                xLinkArcRole: "xlinkArcrole",
                xLinkHref: "xlinkHref",
                xLinkRole: "xlinkRole",
                xLinkShow: "xlinkShow",
                xLinkTitle: "xlinkTitle",
                xLinkType: "xlinkType",
                xmlnsXLink: "xmlnsXlink"
            };
            var $ = n(51133);
            let q = $.default || $,
                W = G("end"),
                H = G("start");

            function G(e) {
                return function(t) {
                    let n = t && t.position && t.position[e] || {};
                    if ("number" == typeof n.line && n.line > 0 && "number" == typeof n.column && n.column > 0) return {
                        line: n.line,
                        column: n.column,
                        offset: "number" == typeof n.offset && n.offset > -1 ? n.offset : void 0
                    }
                }
            }

            function Q(e) {
                return e && "object" == typeof e ? "position" in e || "type" in e ? K(e.position) : "start" in e || "end" in e ? K(e) : "line" in e || "column" in e ? Y(e) : "" : ""
            }

            function Y(e) {
                return J(e && e.line) + ":" + J(e && e.column)
            }

            function K(e) {
                return Y(e && e.start) + "-" + Y(e && e.end)
            }

            function J(e) {
                return e && "number" == typeof e ? e : 1
            }
            class X extends Error {
                constructor(e, t, n) {
                    super(), "string" == typeof t && (n = t, t = void 0);
                    let r = "",
                        i = {},
                        s = !1;
                    if (t && (i = "line" in t && "column" in t ? {
                            place: t
                        } : "start" in t && "end" in t ? {
                            place: t
                        } : "type" in t ? {
                            ancestors: [t],
                            place: t.position
                        } : {
                            ...t
                        }), "string" == typeof e ? r = e : !i.cause && e && (s = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && "string" == typeof n) {
                        let e = n.indexOf(":"); - 1 === e ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1))
                    }
                    if (!i.place && i.ancestors && i.ancestors) {
                        let e = i.ancestors[i.ancestors.length - 1];
                        e && (i.place = e.position)
                    }
                    let o = i.place && "start" in i.place ? i.place.start : i.place;
                    this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file, this.message = r, this.line = o ? o.line : void 0, this.name = Q(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = s && i.cause && "string" == typeof i.cause.stack ? i.cause.stack : "", this.actual, this.expected, this.note, this.url
                }
            }
            X.prototype.file = "", X.prototype.name = "", X.prototype.reason = "", X.prototype.message = "", X.prototype.stack = "", X.prototype.column = void 0, X.prototype.line = void 0, X.prototype.ancestors = void 0, X.prototype.cause = void 0, X.prototype.fatal = void 0, X.prototype.place = void 0, X.prototype.ruleId = void 0, X.prototype.source = void 0;
            let Z = {}.hasOwnProperty,
                ee = new Map,
                et = /[A-Z]/g,
                en = /-([a-z])/g,
                er = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
                ei = new Set(["td", "th"]),
                es = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";

            function eo(e, t, n) {
                return "element" === t.type ? function(e, t, n) {
                    let r = e.schema,
                        i = r;
                    "svg" === t.tagName.toLowerCase() && "html" === r.space && (i = _, e.schema = i), e.ancestors.push(t);
                    let s = ec(e, t.tagName, !1),
                        o = function(e, t) {
                            let n, r;
                            let i = {};
                            for (r in t.properties)
                                if ("children" !== r && Z.call(t.properties, r)) {
                                    let s = function(e, t, n) {
                                        let r = function(e, t) {
                                            let n = p(t),
                                                r = t,
                                                i = f;
                                            if (n in e.normal) return e.property[e.normal[n]];
                                            if (n.length > 4 && "data" === n.slice(0, 4) && N.test(t)) {
                                                if ("-" === t.charAt(4)) {
                                                    let e = t.slice(5).replace(F, z);
                                                    r = "data" + e.charAt(0).toUpperCase() + e.slice(1)
                                                } else {
                                                    let e = t.slice(4);
                                                    if (!F.test(e)) {
                                                        let n = e.replace(B, V);
                                                        "-" !== n.charAt(0) && (n = "-" + n), t = "data" + n
                                                    }
                                                }
                                                i = E
                                            }
                                            return new i(r, t)
                                        }(e.schema, t);
                                        if (!(null == n || "number" == typeof n && Number.isNaN(n))) {
                                            if (Array.isArray(n) && (n = r.commaSeparated ? function(e, t) {
                                                    let n = {};
                                                    return ("" === e[e.length - 1] ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " ")).trim()
                                                }(n) : n.join(" ").trim()), "style" === r.property) {
                                                let t = "object" == typeof n ? n : function(e, t) {
                                                    let n = {};
                                                    try {
                                                        q(t, function(e, t) {
                                                            let r = e;
                                                            "--" !== r.slice(0, 2) && ("-ms-" === r.slice(0, 4) && (r = "ms-" + r.slice(4)), r = r.replace(en, eh)), n[r] = t
                                                        })
                                                    } catch (t) {
                                                        if (!e.ignoreInvalidStyle) {
                                                            let n = new X("Cannot parse `style` attribute", {
                                                                ancestors: e.ancestors,
                                                                cause: t,
                                                                ruleId: "style",
                                                                source: "hast-util-to-jsx-runtime"
                                                            });
                                                            throw n.file = e.filePath || void 0, n.url = es + "#cannot-parse-style-attribute", n
                                                        }
                                                    }
                                                    return n
                                                }(e, String(n));
                                                return "css" === e.stylePropertyNameCase && (t = function(e) {
                                                    let t;
                                                    let n = {};
                                                    for (t in e) Z.call(e, t) && (n[function(e) {
                                                        let t = e.replace(et, ep);
                                                        return "ms-" === t.slice(0, 3) && (t = "-" + t), t
                                                    }(t)] = e[t]);
                                                    return n
                                                }(t)), ["style", t]
                                            }
                                            return ["react" === e.elementAttributeNameCase && r.space ? U[r.property] || r.property : r.attribute, n]
                                        }
                                    }(e, r, t.properties[r]);
                                    if (s) {
                                        let [r, o] = s;
                                        e.tableCellAlignToStyle && "align" === r && "string" == typeof o && ei.has(t.tagName) ? n = o : i[r] = o
                                    }
                                } return n && ((i.style || (i.style = {}))["css" === e.stylePropertyNameCase ? "text-align" : "textAlign"] = n), i
                        }(e, t),
                        a = eu(e, t);
                    return er.has(t.tagName) && (a = a.filter(function(e) {
                        return "string" != typeof e || !("object" == typeof e ? "text" === e.type && c(e.value) : c(e))
                    })), ea(e, o, s, t), el(o, a), e.ancestors.pop(), e.schema = r, e.create(t, s, o, n)
                }(e, t, n) : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type ? function(e, t) {
                    if (t.data && t.data.estree && e.evaluater) {
                        let n = t.data.estree.body[0];
                        return n.type, e.evaluater.evaluateExpression(n.expression)
                    }
                    ed(e, t.position)
                }(e, t) : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type ? function(e, t, n) {
                    let r = e.schema,
                        i = r;
                    "svg" === t.name && "html" === r.space && (i = _, e.schema = i), e.ancestors.push(t);
                    let s = null === t.name ? e.Fragment : ec(e, t.name, !0),
                        o = function(e, t) {
                            let n = {};
                            for (let r of t.attributes)
                                if ("mdxJsxExpressionAttribute" === r.type) {
                                    if (r.data && r.data.estree && e.evaluater) {
                                        let t = r.data.estree.body[0];
                                        t.type;
                                        let i = t.expression;
                                        i.type;
                                        let s = i.properties[0];
                                        s.type, Object.assign(n, e.evaluater.evaluateExpression(s.argument))
                                    } else ed(e, t.position)
                                } else {
                                    let i;
                                    let s = r.name;
                                    if (r.value && "object" == typeof r.value) {
                                        if (r.value.data && r.value.data.estree && e.evaluater) {
                                            let t = r.value.data.estree.body[0];
                                            t.type, i = e.evaluater.evaluateExpression(t.expression)
                                        } else ed(e, t.position)
                                    } else i = null === r.value || r.value;
                                    n[s] = i
                                } return n
                        }(e, t),
                        a = eu(e, t);
                    return ea(e, o, s, t), el(o, a), e.ancestors.pop(), e.schema = r, e.create(t, s, o, n)
                }(e, t, n) : "mdxjsEsm" === t.type ? function(e, t) {
                    if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
                    ed(e, t.position)
                }(e, t) : "root" === t.type ? function(e, t, n) {
                    let r = {};
                    return el(r, eu(e, t)), e.create(t, e.Fragment, r, n)
                }(e, t, n) : "text" === t.type ? t.value : void 0
            }

            function ea(e, t, n, r) {
                "string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r)
            }

            function el(e, t) {
                if (t.length > 0) {
                    let n = t.length > 1 ? t : t[0];
                    n && (e.children = n)
                }
            }

            function eu(e, t) {
                let n = [],
                    r = -1,
                    i = e.passKeys ? new Map : ee;
                for (; ++r < t.children.length;) {
                    let s;
                    let o = t.children[r];
                    if (e.passKeys) {
                        let e = "element" === o.type ? o.tagName : "mdxJsxFlowElement" === o.type || "mdxJsxTextElement" === o.type ? o.name : void 0;
                        if (e) {
                            let t = i.get(e) || 0;
                            s = e + "-" + t, i.set(e, t + 1)
                        }
                    }
                    let a = eo(e, o, s);
                    void 0 !== a && n.push(a)
                }
                return n
            }

            function ec(e, t, n) {
                let r;
                if (n) {
                    if (t.includes(".")) {
                        let e;
                        let n = t.split("."),
                            i = -1;
                        for (; ++i < n.length;) {
                            let t = l(n[i]) ? {
                                type: "Identifier",
                                name: n[i]
                            } : {
                                type: "Literal",
                                value: n[i]
                            };
                            e = e ? {
                                type: "MemberExpression",
                                object: e,
                                property: t,
                                computed: !!(i && "Literal" === t.type),
                                optional: !1
                            } : t
                        }
                        r = e
                    } else r = l(t) && !/^[a-z]/.test(t) ? {
                        type: "Identifier",
                        name: t
                    } : {
                        type: "Literal",
                        value: t
                    }
                } else r = {
                    type: "Literal",
                    value: t
                };
                if ("Literal" === r.type) {
                    let t = r.value;
                    return Z.call(e.components, t) ? e.components[t] : t
                }
                if (e.evaluater) return e.evaluater.evaluateExpression(r);
                ed(e)
            }

            function ed(e, t) {
                let n = new X("Cannot handle MDX estrees without `createEvaluater`", {
                    ancestors: e.ancestors,
                    place: t,
                    ruleId: "mdx-estree",
                    source: "hast-util-to-jsx-runtime"
                });
                throw n.file = e.filePath || void 0, n.url = es + "#cannot-handle-mdx-estrees-without-createevaluater", n
            }

            function eh(e, t) {
                return t.toUpperCase()
            }

            function ep(e) {
                return "-" + e.toLowerCase()
            }
            let ef = {
                action: ["form"],
                cite: ["blockquote", "del", "ins", "q"],
                data: ["object"],
                formAction: ["button", "input"],
                href: ["a", "area", "base", "link"],
                icon: ["menuitem"],
                itemId: null,
                manifest: ["html"],
                ping: ["a", "area"],
                poster: ["video"],
                src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]
            };
            var em = n(74848);
            n(96540);
            let eg = {};

            function ey(e, t, n) {
                if (e && "object" == typeof e) {
                    if ("value" in e) return "html" !== e.type || n ? e.value : "";
                    if (t && "alt" in e && e.alt) return e.alt;
                    if ("children" in e) return ev(e.children, t, n)
                }
                return Array.isArray(e) ? ev(e, t, n) : ""
            }

            function ev(e, t, n) {
                let r = [],
                    i = -1;
                for (; ++i < e.length;) r[i] = ey(e[i], t, n);
                return r.join("")
            }

            function eb(e, t, n, r) {
                let i;
                let s = e.length,
                    o = 0;
                if (t = t < 0 ? -t > s ? 0 : s + t : t > s ? s : t, n = n > 0 ? n : 0, r.length < 1e4)(i = Array.from(r)).unshift(t, n), e.splice(...i);
                else
                    for (n && e.splice(t, n); o < r.length;)(i = r.slice(o, o + 1e4)).unshift(t, 0), e.splice(...i), o += 1e4, t += 1e4
            }

            function eA(e, t) {
                return e.length > 0 ? (eb(e, e.length, 0, t), e) : t
            }
            class ew {
                constructor(e) {
                    this.left = e ? [...e] : [], this.right = []
                }
                get(e) {
                    if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
                    return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1]
                }
                get length() {
                    return this.left.length + this.right.length
                }
                shift() {
                    return this.setCursor(0), this.right.pop()
                }
                slice(e, t) {
                    let n = null == t ? Number.POSITIVE_INFINITY : t;
                    return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse())
                }
                splice(e, t, n) {
                    this.setCursor(Math.trunc(e));
                    let r = this.right.splice(this.right.length - (t || 0), Number.POSITIVE_INFINITY);
                    return n && ex(this.left, n), r.reverse()
                }
                pop() {
                    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop()
                }
                push(e) {
                    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e)
                }
                pushMany(e) {
                    this.setCursor(Number.POSITIVE_INFINITY), ex(this.left, e)
                }
                unshift(e) {
                    this.setCursor(0), this.right.push(e)
                }
                unshiftMany(e) {
                    this.setCursor(0), ex(this.right, e.reverse())
                }
                setCursor(e) {
                    if (e !== this.left.length && (!(e > this.left.length) || 0 !== this.right.length) && (!(e < 0) || 0 !== this.left.length)) {
                        if (e < this.left.length) {
                            let t = this.left.splice(e, Number.POSITIVE_INFINITY);
                            ex(this.right, t.reverse())
                        } else {
                            let t = this.right.splice(this.left.length + this.right.length - e, Number.POSITIVE_INFINITY);
                            ex(this.left, t.reverse())
                        }
                    }
                }
            }

            function ex(e, t) {
                let n = 0;
                if (t.length < 1e4) e.push(...t);
                else
                    for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4
            }

            function eS(e) {
                let t, n, r, i, s, o, a;
                let l = {},
                    u = -1,
                    c = new ew(e);
                for (; ++u < c.length;) {
                    for (; u in l;) u = l[u];
                    if (t = c.get(u), u && "chunkFlow" === t[1].type && "listItemPrefix" === c.get(u - 1)[1].type && ((r = 0) < (o = t[1]._tokenizer.events).length && "lineEndingBlank" === o[r][1].type && (r += 2), r < o.length && "content" === o[r][1].type))
                        for (; ++r < o.length && "content" !== o[r][1].type;) "chunkText" === o[r][1].type && (o[r][1]._isInFirstContentOfListItem = !0, r++);
                    if ("enter" === t[0]) t[1].contentType && (Object.assign(l, function(e, t) {
                        let n, r;
                        let i = e.get(t)[1],
                            s = e.get(t)[2],
                            o = t - 1,
                            a = [],
                            l = i._tokenizer || s.parser[i.contentType](i.start),
                            u = l.events,
                            c = [],
                            d = {},
                            h = -1,
                            p = i,
                            f = 0,
                            m = 0,
                            g = [0];
                        for (; p;) {
                            for (; e.get(++o)[1] !== p;);
                            a.push(o), !p._tokenizer && (n = s.sliceStream(p), p.next || n.push(null), r && l.defineSkip(p.start), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(n), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), r = p, p = p.next
                        }
                        for (p = i; ++h < u.length;) "exit" === u[h][0] && "enter" === u[h - 1][0] && u[h][1].type === u[h - 1][1].type && u[h][1].start.line !== u[h][1].end.line && (m = h + 1, g.push(m), p._tokenizer = void 0, p.previous = void 0, p = p.next);
                        for (l.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), h = g.length; h--;) {
                            let t = u.slice(g[h], g[h + 1]),
                                n = a.pop();
                            c.push([n, n + t.length - 1]), e.splice(n, 2, t)
                        }
                        for (c.reverse(), h = -1; ++h < c.length;) d[f + c[h][0]] = f + c[h][1], f += c[h][1] - c[h][0] - 1;
                        return d
                    }(c, u)), u = l[u], a = !0);
                    else if (t[1]._container) {
                        for (r = u, n = void 0; r--;)
                            if ("lineEnding" === (i = c.get(r))[1].type || "lineEndingBlank" === i[1].type) "enter" === i[0] && (n && (c.get(n)[1].type = "lineEndingBlank"), i[1].type = "lineEnding", n = r);
                            else if ("linePrefix" === i[1].type);
                        else break;
                        n && (t[1].end = {
                            ...c.get(n)[1].start
                        }, (s = c.slice(n, u)).unshift(t), c.splice(n, u - n + 1, s))
                    }
                }
                return eb(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !a
            }
            let ek = {}.hasOwnProperty,
                eE = eB(/[A-Za-z]/),
                eT = eB(/[\dA-Za-z]/),
                eC = eB(/[#-'*+\--9=?A-Z^-~]/);

            function eP(e) {
                return null !== e && (e < 32 || 127 === e)
            }
            let eO = eB(/\d/),
                eM = eB(/[\dA-Fa-f]/),
                eR = eB(/[!-/:-@[-`{-~]/);

            function eI(e) {
                return null !== e && e < -2
            }

            function eD(e) {
                return null !== e && (e < 0 || 32 === e)
            }

            function eL(e) {
                return -2 === e || -1 === e || 32 === e
            }
            let ej = eB(/\p{P}|\p{S}/u),
                e_ = eB(/\s/);

            function eB(e) {
                return function(t) {
                    return null !== t && t > -1 && e.test(String.fromCharCode(t))
                }
            }

            function eF(e, t, n, r) {
                let i = r ? r - 1 : Number.POSITIVE_INFINITY,
                    s = 0;
                return function(r) {
                    return eL(r) ? (e.enter(n), function r(o) {
                        return eL(o) && s++ < i ? (e.consume(o), r) : (e.exit(n), t(o))
                    }(r)) : t(r)
                }
            }
            let eN = {
                    tokenize: function(e) {
                        let t;
                        let n = e.attempt(this.parser.constructs.contentInitial, function(t) {
                            if (null === t) {
                                e.consume(t);
                                return
                            }
                            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), eF(e, n, "linePrefix")
                        }, function(n) {
                            return e.enter("paragraph"),
                                function n(r) {
                                    let i = e.enter("chunkText", {
                                        contentType: "text",
                                        previous: t
                                    });
                                    return t && (t.next = i), t = i,
                                        function t(r) {
                                            if (null === r) {
                                                e.exit("chunkText"), e.exit("paragraph"), e.consume(r);
                                                return
                                            }
                                            return eI(r) ? (e.consume(r), e.exit("chunkText"), n) : (e.consume(r), t)
                                        }(r)
                                }(n)
                        });
                        return n
                    }
                },
                eV = {
                    tokenize: function(e) {
                        let t, n, r;
                        let i = this,
                            s = [],
                            o = 0;
                        return a;

                        function a(t) {
                            if (o < s.length) {
                                let n = s[o];
                                return i.containerState = n[1], e.attempt(n[0].continuation, l, u)(t)
                            }
                            return u(t)
                        }

                        function l(e) {
                            if (o++, i.containerState._closeFlow) {
                                let n;
                                i.containerState._closeFlow = void 0, t && y();
                                let r = i.events.length,
                                    s = r;
                                for (; s--;)
                                    if ("exit" === i.events[s][0] && "chunkFlow" === i.events[s][1].type) {
                                        n = i.events[s][1].end;
                                        break
                                    } g(o);
                                let a = r;
                                for (; a < i.events.length;) i.events[a][1].end = {
                                    ...n
                                }, a++;
                                return eb(i.events, s + 1, 0, i.events.slice(r)), i.events.length = a, u(e)
                            }
                            return a(e)
                        }

                        function u(n) {
                            if (o === s.length) {
                                if (!t) return h(n);
                                if (t.currentConstruct && t.currentConstruct.concrete) return f(n);
                                i.interrupt = !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack)
                            }
                            return i.containerState = {}, e.check(ez, c, d)(n)
                        }

                        function c(e) {
                            return t && y(), g(o), h(e)
                        }

                        function d(e) {
                            return i.parser.lazy[i.now().line] = o !== s.length, r = i.now().offset, f(e)
                        }

                        function h(t) {
                            return i.containerState = {}, e.attempt(ez, p, f)(t)
                        }

                        function p(e) {
                            return o++, s.push([i.currentConstruct, i.containerState]), h(e)
                        }

                        function f(r) {
                            if (null === r) {
                                t && y(), g(0), e.consume(r);
                                return
                            }
                            return t = t || i.parser.flow(i.now()), e.enter("chunkFlow", {
                                    _tokenizer: t,
                                    contentType: "flow",
                                    previous: n
                                }),
                                function t(n) {
                                    if (null === n) {
                                        m(e.exit("chunkFlow"), !0), g(0), e.consume(n);
                                        return
                                    }
                                    return eI(n) ? (e.consume(n), m(e.exit("chunkFlow")), o = 0, i.interrupt = void 0, a) : (e.consume(n), t)
                                }(r)
                        }

                        function m(e, s) {
                            let a = i.sliceStream(e);
                            if (s && a.push(null), e.previous = n, n && (n.next = e), n = e, t.defineSkip(e.start), t.write(a), i.parser.lazy[e.start.line]) {
                                let e, n, s = t.events.length;
                                for (; s--;)
                                    if (t.events[s][1].start.offset < r && (!t.events[s][1].end || t.events[s][1].end.offset > r)) return;
                                let a = i.events.length,
                                    l = a;
                                for (; l--;)
                                    if ("exit" === i.events[l][0] && "chunkFlow" === i.events[l][1].type) {
                                        if (e) {
                                            n = i.events[l][1].end;
                                            break
                                        }
                                        e = !0
                                    } for (g(o), s = a; s < i.events.length;) i.events[s][1].end = {
                                    ...n
                                }, s++;
                                eb(i.events, l + 1, 0, i.events.slice(a)), i.events.length = s
                            }
                        }

                        function g(t) {
                            let n = s.length;
                            for (; n-- > t;) {
                                let t = s[n];
                                i.containerState = t[1], t[0].exit.call(i, e)
                            }
                            s.length = t
                        }

                        function y() {
                            t.write([null]), n = void 0, t = void 0, i.containerState._closeFlow = void 0
                        }
                    }
                },
                ez = {
                    tokenize: function(e, t, n) {
                        return eF(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                    }
                },
                eU = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return eL(t) ? eF(e, r, "linePrefix")(t) : r(t)
                        };

                        function r(e) {
                            return null === e || eI(e) ? t(e) : n(e)
                        }
                    }
                },
                e$ = {
                    resolve: function(e) {
                        return eS(e), e
                    },
                    tokenize: function(e, t) {
                        let n;
                        return function(t) {
                            return e.enter("content"), n = e.enter("chunkContent", {
                                contentType: "content"
                            }), r(t)
                        };

                        function r(t) {
                            return null === t ? i(t) : eI(t) ? e.check(eq, s, i)(t) : (e.consume(t), r)
                        }

                        function i(n) {
                            return e.exit("chunkContent"), e.exit("content"), t(n)
                        }

                        function s(t) {
                            return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
                                contentType: "content",
                                previous: n
                            }), n = n.next, r
                        }
                    }
                },
                eq = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), eF(e, i, "linePrefix")
                        };

                        function i(i) {
                            if (null === i || eI(i)) return n(i);
                            let s = r.events[r.events.length - 1];
                            return !r.parser.constructs.disable.null.includes("codeIndented") && s && "linePrefix" === s[1].type && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i)
                        }
                    }
                },
                eW = {
                    tokenize: function(e) {
                        let t = this,
                            n = e.attempt(eU, function(r) {
                                if (null === r) {
                                    e.consume(r);
                                    return
                                }
                                return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
                            }, e.attempt(this.parser.constructs.flowInitial, r, eF(e, e.attempt(this.parser.constructs.flow, r, e.attempt(e$, r)), "linePrefix")));
                        return n;

                        function r(r) {
                            if (null === r) {
                                e.consume(r);
                                return
                            }
                            return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n
                        }
                    }
                },
                eH = {
                    resolveAll: eK()
                },
                eG = eY("string"),
                eQ = eY("text");

            function eY(e) {
                return {
                    resolveAll: eK("text" === e ? eJ : void 0),
                    tokenize: function(t) {
                        let n = this,
                            r = this.parser.constructs[e],
                            i = t.attempt(r, s, o);
                        return s;

                        function s(e) {
                            return l(e) ? i(e) : o(e)
                        }

                        function o(e) {
                            if (null === e) {
                                t.consume(e);
                                return
                            }
                            return t.enter("data"), t.consume(e), a
                        }

                        function a(e) {
                            return l(e) ? (t.exit("data"), i(e)) : (t.consume(e), a)
                        }

                        function l(e) {
                            if (null === e) return !0;
                            let t = r[e],
                                i = -1;
                            if (t)
                                for (; ++i < t.length;) {
                                    let e = t[i];
                                    if (!e.previous || e.previous.call(n, n.previous)) return !0
                                }
                            return !1
                        }
                    }
                }
            }

            function eK(e) {
                return function(t, n) {
                    let r, i = -1;
                    for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
                    return e ? e(t, n) : t
                }
            }

            function eJ(e, t) {
                let n = 0;
                for (; ++n <= e.length;)
                    if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
                        let r;
                        let i = e[n - 1][1],
                            s = t.sliceStream(i),
                            o = s.length,
                            a = -1,
                            l = 0;
                        for (; o--;) {
                            let e = s[o];
                            if ("string" == typeof e) {
                                for (a = e.length; 32 === e.charCodeAt(a - 1);) l++, a--;
                                if (a) break;
                                a = -1
                            } else if (-2 === e) r = !0, l++;
                            else if (-1 === e);
                            else {
                                o++;
                                break
                            }
                        }
                        if (l) {
                            let s = {
                                type: n === e.length || r || l < 2 ? "lineSuffix" : "hardBreakTrailing",
                                start: {
                                    _bufferIndex: o ? a : i.start._bufferIndex + a,
                                    _index: i.start._index + o,
                                    line: i.end.line,
                                    column: i.end.column - l,
                                    offset: i.end.offset - l
                                },
                                end: {
                                    ...i.end
                                }
                            };
                            i.end = {
                                ...s.start
                            }, i.start.offset === i.end.offset ? Object.assign(i, s) : (e.splice(n, 0, ["enter", s, t], ["exit", s, t]), n += 2)
                        }
                        n++
                    } return e
            }
            let eX = {
                    name: "thematicBreak",
                    tokenize: function(e, t, n) {
                        let r, i = 0;
                        return function(s) {
                            return e.enter("thematicBreak"), r = s,
                                function s(o) {
                                    return o === r ? (e.enter("thematicBreakSequence"), function t(n) {
                                        return n === r ? (e.consume(n), i++, t) : (e.exit("thematicBreakSequence"), eL(n) ? eF(e, s, "whitespace")(n) : s(n))
                                    }(o)) : i >= 3 && (null === o || eI(o)) ? (e.exit("thematicBreak"), t(o)) : n(o)
                                }(s)
                        }
                    }
                },
                eZ = {
                    continuation: {
                        tokenize: function(e, t, n) {
                            let r = this;
                            return r.containerState._closeFlow = void 0, e.check(eU, function(n) {
                                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, eF(e, t, "listItemIndent", r.containerState.size + 1)(n)
                            }, function(n) {
                                return r.containerState.furtherBlankLines || !eL(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, i(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(e1, t, i)(n))
                            });

                            function i(i) {
                                return r.containerState._closeFlow = !0, r.interrupt = void 0, eF(e, e.attempt(eZ, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit(this.containerState.type)
                    },
                    name: "list",
                    tokenize: function(e, t, n) {
                        let r = this,
                            i = r.events[r.events.length - 1],
                            s = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(i[1], !0).length : 0,
                            o = 0;
                        return function(t) {
                            let i = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                            if ("listUnordered" === i ? !r.containerState.marker || t === r.containerState.marker : eO(t)) {
                                if (r.containerState.type || (r.containerState.type = i, e.enter(i, {
                                        _container: !0
                                    })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(eX, n, a)(t) : a(t);
                                if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"),
                                    function t(i) {
                                        return eO(i) && ++o < 10 ? (e.consume(i), t) : (!r.interrupt || o < 2) && (r.containerState.marker ? i === r.containerState.marker : 41 === i || 46 === i) ? (e.exit("listItemValue"), a(i)) : n(i)
                                    }(t)
                            }
                            return n(t)
                        };

                        function a(t) {
                            return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(eU, r.interrupt ? n : l, e.attempt(e0, c, u))
                        }

                        function l(e) {
                            return r.containerState.initialBlankLine = !0, s++, c(e)
                        }

                        function u(t) {
                            return eL(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), c) : n(t)
                        }

                        function c(n) {
                            return r.containerState.size = s + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n)
                        }
                    }
                },
                e0 = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return eF(e, function(e) {
                            let i = r.events[r.events.length - 1];
                            return !eL(e) && i && "listItemPrefixWhitespace" === i[1].type ? t(e) : n(e)
                        }, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
                    }
                },
                e1 = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return eF(e, function(e) {
                            let i = r.events[r.events.length - 1];
                            return i && "listItemIndent" === i[1].type && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e)
                        }, "listItemIndent", r.containerState.size + 1)
                    }
                },
                e2 = {
                    continuation: {
                        tokenize: function(e, t, n) {
                            let r = this;
                            return function(t) {
                                return eL(t) ? eF(e, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : i(t)
                            };

                            function i(r) {
                                return e.attempt(e2, t, n)(r)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit("blockQuote")
                    },
                    name: "blockQuote",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            if (62 === t) {
                                let n = r.containerState;
                                return n.open || (e.enter("blockQuote", {
                                    _container: !0
                                }), n.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), i
                            }
                            return n(t)
                        };

                        function i(n) {
                            return eL(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
                        }
                    }
                };

            function e4(e, t, n, r, i, s, o, a, l) {
                let u = l || Number.POSITIVE_INFINITY,
                    c = 0;
                return function(t) {
                    return 60 === t ? (e.enter(r), e.enter(i), e.enter(s), e.consume(t), e.exit(s), d) : null === t || 32 === t || 41 === t || eP(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", {
                        contentType: "string"
                    }), f(t))
                };

                function d(n) {
                    return 62 === n ? (e.enter(s), e.consume(n), e.exit(s), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
                        contentType: "string"
                    }), h(n))
                }

                function h(t) {
                    return 62 === t ? (e.exit("chunkString"), e.exit(a), d(t)) : null === t || 60 === t || eI(t) ? n(t) : (e.consume(t), 92 === t ? p : h)
                }

                function p(t) {
                    return 60 === t || 62 === t || 92 === t ? (e.consume(t), h) : h(t)
                }

                function f(i) {
                    return !c && (null === i || 41 === i || eD(i)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(i)) : c < u && 40 === i ? (e.consume(i), c++, f) : 41 === i ? (e.consume(i), c--, f) : null === i || 32 === i || 40 === i || eP(i) ? n(i) : (e.consume(i), 92 === i ? m : f)
                }

                function m(t) {
                    return 40 === t || 41 === t || 92 === t ? (e.consume(t), f) : f(t)
                }
            }

            function e5(e, t, n, r, i, s) {
                let o;
                let a = this,
                    l = 0;
                return function(t) {
                    return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(s), u
                };

                function u(d) {
                    return l > 999 || null === d || 91 === d || 93 === d && !o || 94 === d && !l && "_hiddenFootnoteSupport" in a.parser.constructs ? n(d) : 93 === d ? (e.exit(s), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : eI(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), u) : (e.enter("chunkString", {
                        contentType: "string"
                    }), c(d))
                }

                function c(t) {
                    return null === t || 91 === t || 93 === t || eI(t) || l++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), o || (o = !eL(t)), 92 === t ? d : c)
                }

                function d(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), l++, c) : c(t)
                }
            }

            function e3(e, t, n, r, i, s) {
                let o;
                return function(t) {
                    return 34 === t || 39 === t || 40 === t ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = 40 === t ? 41 : t, a) : n(t)
                };

                function a(n) {
                    return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(s), l(n))
                }

                function l(t) {
                    return t === o ? (e.exit(s), a(o)) : null === t ? n(t) : eI(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), eF(e, l, "linePrefix")) : (e.enter("chunkString", {
                        contentType: "string"
                    }), u(t))
                }

                function u(t) {
                    return t === o || null === t || eI(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), 92 === t ? c : u)
                }

                function c(t) {
                    return t === o || 92 === t ? (e.consume(t), u) : u(t)
                }
            }

            function e6(e, t) {
                let n;
                return function r(i) {
                    return eI(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : eL(i) ? eF(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
                }
            }

            function e8(e) {
                return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
            }
            let e9 = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return eD(t) ? e6(e, r)(t) : n(t)
                        };

                        function r(t) {
                            return e3(e, i, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t)
                        }

                        function i(t) {
                            return eL(t) ? eF(e, s, "whitespace")(t) : s(t)
                        }

                        function s(e) {
                            return null === e || eI(e) ? t(e) : n(e)
                        }
                    }
                },
                e7 = {
                    name: "codeIndented",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("codeIndented"), eF(e, i, "linePrefix", 5)(t)
                        };

                        function i(t) {
                            let i = r.events[r.events.length - 1];
                            return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? function t(n) {
                                return null === n ? s(n) : eI(n) ? e.attempt(te, t, s)(n) : (e.enter("codeFlowValue"), function n(r) {
                                    return null === r || eI(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n)
                                }(n))
                            }(t) : n(t)
                        }

                        function s(n) {
                            return e.exit("codeIndented"), t(n)
                        }
                    }
                },
                te = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return i;

                        function i(t) {
                            return r.parser.lazy[r.now().line] ? n(t) : eI(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : eF(e, s, "linePrefix", 5)(t)
                        }

                        function s(e) {
                            let s = r.events[r.events.length - 1];
                            return s && "linePrefix" === s[1].type && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(e) : eI(e) ? i(e) : n(e)
                        }
                    }
                },
                tt = {
                    name: "setextUnderline",
                    resolveTo: function(e, t) {
                        let n, r, i, s = e.length;
                        for (; s--;)
                            if ("enter" === e[s][0]) {
                                if ("content" === e[s][1].type) {
                                    n = s;
                                    break
                                }
                                "paragraph" === e[s][1].type && (r = s)
                            } else "content" === e[s][1].type && e.splice(s, 1), i || "definition" !== e[s][1].type || (i = s);
                        let o = {
                            type: "setextHeading",
                            start: {
                                ...e[r][1].start
                            },
                            end: {
                                ...e[e.length - 1][1].end
                            }
                        };
                        return e[r][1].type = "setextHeadingText", i ? (e.splice(r, 0, ["enter", o, t]), e.splice(i + 1, 0, ["exit", e[n][1], t]), e[n][1].end = {
                            ...e[i][1].end
                        }) : e[n][1] = o, e.push(["exit", o, t]), e
                    },
                    tokenize: function(e, t, n) {
                        let r;
                        let i = this;
                        return function(t) {
                            let o, a = i.events.length;
                            for (; a--;)
                                if ("lineEnding" !== i.events[a][1].type && "linePrefix" !== i.events[a][1].type && "content" !== i.events[a][1].type) {
                                    o = "paragraph" === i.events[a][1].type;
                                    break
                                } return !i.parser.lazy[i.now().line] && (i.interrupt || o) ? (e.enter("setextHeadingLine"), r = t, e.enter("setextHeadingLineSequence"), function t(n) {
                                return n === r ? (e.consume(n), t) : (e.exit("setextHeadingLineSequence"), eL(n) ? eF(e, s, "lineSuffix")(n) : s(n))
                            }(t)) : n(t)
                        };

                        function s(r) {
                            return null === r || eI(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r)
                        }
                    }
                },
                tn = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
                tr = ["pre", "script", "style", "textarea"],
                ti = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        return function(r) {
                            return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(eU, t, n)
                        }
                    }
                },
                ts = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return eI(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : n(t)
                        };

                        function i(e) {
                            return r.parser.lazy[r.now().line] ? n(e) : t(e)
                        }
                    }
                },
                to = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return null === t ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i)
                        };

                        function i(e) {
                            return r.parser.lazy[r.now().line] ? n(e) : t(e)
                        }
                    }
                },
                ta = {
                    concrete: !0,
                    name: "codeFenced",
                    tokenize: function(e, t, n) {
                        let r;
                        let i = this,
                            s = {
                                partial: !0,
                                tokenize: function(e, t, n) {
                                    let s = 0;
                                    return function(t) {
                                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o
                                    };

                                    function o(t) {
                                        return e.enter("codeFencedFence"), eL(t) ? eF(e, l, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t)
                                    }

                                    function l(t) {
                                        return t === r ? (e.enter("codeFencedFenceSequence"), function t(i) {
                                            return i === r ? (s++, e.consume(i), t) : s >= a ? (e.exit("codeFencedFenceSequence"), eL(i) ? eF(e, u, "whitespace")(i) : u(i)) : n(i)
                                        }(t)) : n(t)
                                    }

                                    function u(r) {
                                        return null === r || eI(r) ? (e.exit("codeFencedFence"), t(r)) : n(r)
                                    }
                                }
                            },
                            o = 0,
                            a = 0;
                        return function(t) {
                            return function(t) {
                                let s = i.events[i.events.length - 1];
                                return o = s && "linePrefix" === s[1].type ? s[2].sliceSerialize(s[1], !0).length : 0, r = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"),
                                    function t(i) {
                                        return i === r ? (a++, e.consume(i), t) : a < 3 ? n(i) : (e.exit("codeFencedFenceSequence"), eL(i) ? eF(e, l, "whitespace")(i) : l(i))
                                    }(t)
                            }(t)
                        };

                        function l(s) {
                            return null === s || eI(s) ? (e.exit("codeFencedFence"), i.interrupt ? t(s) : e.check(to, c, f)(s)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                                contentType: "string"
                            }), function t(i) {
                                return null === i || eI(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), l(i)) : eL(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), eF(e, u, "whitespace")(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t)
                            }(s))
                        }

                        function u(t) {
                            return null === t || eI(t) ? l(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                                contentType: "string"
                            }), function t(i) {
                                return null === i || eI(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), l(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t)
                            }(t))
                        }

                        function c(t) {
                            return e.attempt(s, f, d)(t)
                        }

                        function d(t) {
                            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), h
                        }

                        function h(t) {
                            return o > 0 && eL(t) ? eF(e, p, "linePrefix", o + 1)(t) : p(t)
                        }

                        function p(t) {
                            return null === t || eI(t) ? e.check(to, c, f)(t) : (e.enter("codeFlowValue"), function t(n) {
                                return null === n || eI(n) ? (e.exit("codeFlowValue"), p(n)) : (e.consume(n), t)
                            }(t))
                        }

                        function f(n) {
                            return e.exit("codeFenced"), t(n)
                        }
                    }
                },
                tl = document.createElement("i");

            function tu(e) {
                let t = "&" + e + ";";
                tl.innerHTML = t;
                let n = tl.textContent;
                return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
            }
            let tc = {
                    name: "characterReference",
                    tokenize: function(e, t, n) {
                        let r, i;
                        let s = this,
                            o = 0;
                        return function(t) {
                            return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), a
                        };

                        function a(t) {
                            return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), r = 31, i = eT, u(t))
                        }

                        function l(t) {
                            return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, i = eM, u) : (e.enter("characterReferenceValue"), r = 7, i = eO, u(t))
                        }

                        function u(a) {
                            if (59 === a && o) {
                                let r = e.exit("characterReferenceValue");
                                return i !== eT || tu(s.sliceSerialize(r)) ? (e.enter("characterReferenceMarker"), e.consume(a), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(a)
                            }
                            return i(a) && o++ < r ? (e.consume(a), u) : n(a)
                        }
                    }
                },
                td = {
                    name: "characterEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), r
                        };

                        function r(r) {
                            return eR(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r)
                        }
                    }
                },
                th = {
                    name: "lineEnding",
                    tokenize: function(e, t) {
                        return function(n) {
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), eF(e, t, "linePrefix")
                        }
                    }
                };

            function tp(e, t, n) {
                let r = [],
                    i = -1;
                for (; ++i < e.length;) {
                    let s = e[i].resolveAll;
                    s && !r.includes(s) && (t = s(t, n), r.push(s))
                }
                return t
            }
            let tf = {
                    name: "labelEnd",
                    resolveAll: function(e) {
                        let t = -1,
                            n = [];
                        for (; ++t < e.length;) {
                            let r = e[t][1];
                            if (n.push(e[t]), "labelImage" === r.type || "labelLink" === r.type || "labelEnd" === r.type) {
                                let e = "labelImage" === r.type ? 4 : 2;
                                r.type = "data", t += e
                            }
                        }
                        return e.length !== n.length && eb(e, 0, e.length, n), e
                    },
                    resolveTo: function(e, t) {
                        let n, r, i, s, o = e.length,
                            a = 0;
                        for (; o--;)
                            if (n = e[o][1], r) {
                                if ("link" === n.type || "labelLink" === n.type && n._inactive) break;
                                "enter" === e[o][0] && "labelLink" === n.type && (n._inactive = !0)
                            } else if (i) {
                            if ("enter" === e[o][0] && ("labelImage" === n.type || "labelLink" === n.type) && !n._balanced && (r = o, "labelLink" !== n.type)) {
                                a = 2;
                                break
                            }
                        } else "labelEnd" === n.type && (i = o);
                        let l = {
                                type: "labelLink" === e[r][1].type ? "link" : "image",
                                start: {
                                    ...e[r][1].start
                                },
                                end: {
                                    ...e[e.length - 1][1].end
                                }
                            },
                            u = {
                                type: "label",
                                start: {
                                    ...e[r][1].start
                                },
                                end: {
                                    ...e[i][1].end
                                }
                            },
                            c = {
                                type: "labelText",
                                start: {
                                    ...e[r + a + 2][1].end
                                },
                                end: {
                                    ...e[i - 2][1].start
                                }
                            };
                        return s = eA(s = [
                            ["enter", l, t],
                            ["enter", u, t]
                        ], e.slice(r + 1, r + a + 3)), s = eA(s, [
                            ["enter", c, t]
                        ]), s = eA(s, tp(t.parser.constructs.insideSpan.null, e.slice(r + a + 4, i - 3), t)), s = eA(s, [
                            ["exit", c, t], e[i - 2], e[i - 1],
                            ["exit", u, t]
                        ]), s = eA(s, e.slice(i + 1)), s = eA(s, [
                            ["exit", l, t]
                        ]), eb(e, r, e.length, s), e
                    },
                    tokenize: function(e, t, n) {
                        let r, i;
                        let s = this,
                            o = s.events.length;
                        for (; o--;)
                            if (("labelImage" === s.events[o][1].type || "labelLink" === s.events[o][1].type) && !s.events[o][1]._balanced) {
                                r = s.events[o][1];
                                break
                            } return function(t) {
                            return r ? r._inactive ? c(t) : (i = s.parser.defined.includes(e8(s.sliceSerialize({
                                start: r.end,
                                end: s.now()
                            }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), a) : n(t)
                        };

                        function a(t) {
                            return 40 === t ? e.attempt(tm, u, i ? u : c)(t) : 91 === t ? e.attempt(tg, u, i ? l : c)(t) : i ? u(t) : c(t)
                        }

                        function l(t) {
                            return e.attempt(ty, u, c)(t)
                        }

                        function u(e) {
                            return t(e)
                        }

                        function c(e) {
                            return r._balanced = !0, n(e)
                        }
                    }
                },
                tm = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), r
                        };

                        function r(t) {
                            return eD(t) ? e6(e, i)(t) : i(t)
                        }

                        function i(t) {
                            return 41 === t ? u(t) : e4(e, s, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t)
                        }

                        function s(t) {
                            return eD(t) ? e6(e, a)(t) : u(t)
                        }

                        function o(e) {
                            return n(e)
                        }

                        function a(t) {
                            return 34 === t || 39 === t || 40 === t ? e3(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t)
                        }

                        function l(t) {
                            return eD(t) ? e6(e, u)(t) : u(t)
                        }

                        function u(r) {
                            return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r)
                        }
                    }
                },
                tg = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e5.call(r, e, i, s, "reference", "referenceMarker", "referenceString")(t)
                        };

                        function i(e) {
                            return r.parser.defined.includes(e8(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e)
                        }

                        function s(e) {
                            return n(e)
                        }
                    }
                },
                ty = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r
                        };

                        function r(r) {
                            return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r)
                        }
                    }
                },
                tv = {
                    name: "labelStartImage",
                    resolveAll: tf.resolveAll,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i
                        };

                        function i(t) {
                            return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), s) : n(t)
                        }

                        function s(e) {
                            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                        }
                    }
                };

            function tb(e) {
                return null === e || eD(e) || e_(e) ? 1 : ej(e) ? 2 : void 0
            }
            let tA = {
                name: "attention",
                resolveAll: function(e, t) {
                    let n, r, i, s, o, a, l, u, c = -1;
                    for (; ++c < e.length;)
                        if ("enter" === e[c][0] && "attentionSequence" === e[c][1].type && e[c][1]._close) {
                            for (n = c; n--;)
                                if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[c][1]).charCodeAt(0)) {
                                    if ((e[n][1]._close || e[c][1]._open) && (e[c][1].end.offset - e[c][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[c][1].end.offset - e[c][1].start.offset) % 3)) continue;
                                    a = e[n][1].end.offset - e[n][1].start.offset > 1 && e[c][1].end.offset - e[c][1].start.offset > 1 ? 2 : 1;
                                    let d = {
                                            ...e[n][1].end
                                        },
                                        h = {
                                            ...e[c][1].start
                                        };
                                    tw(d, -a), tw(h, a), s = {
                                        type: a > 1 ? "strongSequence" : "emphasisSequence",
                                        start: d,
                                        end: {
                                            ...e[n][1].end
                                        }
                                    }, o = {
                                        type: a > 1 ? "strongSequence" : "emphasisSequence",
                                        start: {
                                            ...e[c][1].start
                                        },
                                        end: h
                                    }, i = {
                                        type: a > 1 ? "strongText" : "emphasisText",
                                        start: {
                                            ...e[n][1].end
                                        },
                                        end: {
                                            ...e[c][1].start
                                        }
                                    }, r = {
                                        type: a > 1 ? "strong" : "emphasis",
                                        start: {
                                            ...s.start
                                        },
                                        end: {
                                            ...o.end
                                        }
                                    }, e[n][1].end = {
                                        ...s.start
                                    }, e[c][1].start = {
                                        ...o.end
                                    }, l = [], e[n][1].end.offset - e[n][1].start.offset && (l = eA(l, [
                                        ["enter", e[n][1], t],
                                        ["exit", e[n][1], t]
                                    ])), l = eA(l, [
                                        ["enter", r, t],
                                        ["enter", s, t],
                                        ["exit", s, t],
                                        ["enter", i, t]
                                    ]), l = eA(l, tp(t.parser.constructs.insideSpan.null, e.slice(n + 1, c), t)), l = eA(l, [
                                        ["exit", i, t],
                                        ["enter", o, t],
                                        ["exit", o, t],
                                        ["exit", r, t]
                                    ]), e[c][1].end.offset - e[c][1].start.offset ? (u = 2, l = eA(l, [
                                        ["enter", e[c][1], t],
                                        ["exit", e[c][1], t]
                                    ])) : u = 0, eb(e, n - 1, c - n + 3, l), c = n + l.length - u - 2;
                                    break
                                }
                        } for (c = -1; ++c < e.length;) "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
                    return e
                },
                tokenize: function(e, t) {
                    let n;
                    let r = this.parser.constructs.attentionMarkers.null,
                        i = this.previous,
                        s = tb(i);
                    return function(o) {
                        return n = o, e.enter("attentionSequence"),
                            function o(a) {
                                if (a === n) return e.consume(a), o;
                                let l = e.exit("attentionSequence"),
                                    u = tb(a),
                                    c = !u || 2 === u && s || r.includes(a),
                                    d = !s || 2 === s && u || r.includes(i);
                                return l._open = !!(42 === n ? c : c && (s || !d)), l._close = !!(42 === n ? d : d && (u || !c)), t(a)
                            }(o)
                    }
                }
            };

            function tw(e, t) {
                e.column += t, e.offset += t, e._bufferIndex += t
            }
            let tx = {
                    name: "labelStartLink",
                    resolveAll: tf.resolveAll,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i
                        };

                        function i(e) {
                            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                        }
                    }
                },
                tS = {
                    42: eZ,
                    43: eZ,
                    45: eZ,
                    48: eZ,
                    49: eZ,
                    50: eZ,
                    51: eZ,
                    52: eZ,
                    53: eZ,
                    54: eZ,
                    55: eZ,
                    56: eZ,
                    57: eZ,
                    62: e2
                },
                tk = {
                    91: {
                        name: "definition",
                        tokenize: function(e, t, n) {
                            let r;
                            let i = this;
                            return function(t) {
                                return e.enter("definition"), e5.call(i, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t)
                            };

                            function s(t) {
                                return (r = e8(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), 58 === t) ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), o) : n(t)
                            }

                            function o(t) {
                                return eD(t) ? e6(e, a)(t) : a(t)
                            }

                            function a(t) {
                                return e4(e, l, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t)
                            }

                            function l(t) {
                                return e.attempt(e9, u, u)(t)
                            }

                            function u(t) {
                                return eL(t) ? eF(e, c, "whitespace")(t) : c(t)
                            }

                            function c(s) {
                                return null === s || eI(s) ? (e.exit("definition"), i.parser.defined.push(r), t(s)) : n(s)
                            }
                        }
                    }
                },
                tE = {
                    [-2]: e7,
                    [-1]: e7,
                    32: e7
                },
                tT = {
                    35: {
                        name: "headingAtx",
                        resolve: function(e, t) {
                            let n, r, i = e.length - 2,
                                s = 3;
                            return "whitespace" === e[3][1].type && (s += 2), i - 2 > s && "whitespace" === e[i][1].type && (i -= 2), "atxHeadingSequence" === e[i][1].type && (s === i - 1 || i - 4 > s && "whitespace" === e[i - 2][1].type) && (i -= s + 1 === i ? 2 : 4), i > s && (n = {
                                type: "atxHeadingText",
                                start: e[s][1].start,
                                end: e[i][1].end
                            }, r = {
                                type: "chunkText",
                                start: e[s][1].start,
                                end: e[i][1].end,
                                contentType: "text"
                            }, eb(e, s, i - s + 1, [
                                ["enter", n, t],
                                ["enter", r, t],
                                ["exit", r, t],
                                ["exit", n, t]
                            ])), e
                        },
                        tokenize: function(e, t, n) {
                            let r = 0;
                            return function(i) {
                                return e.enter("atxHeading"), e.enter("atxHeadingSequence"),
                                    function i(s) {
                                        return 35 === s && r++ < 6 ? (e.consume(s), i) : null === s || eD(s) ? (e.exit("atxHeadingSequence"), function n(r) {
                                            return 35 === r ? (e.enter("atxHeadingSequence"), function t(r) {
                                                return 35 === r ? (e.consume(r), t) : (e.exit("atxHeadingSequence"), n(r))
                                            }(r)) : null === r || eI(r) ? (e.exit("atxHeading"), t(r)) : eL(r) ? eF(e, n, "whitespace")(r) : (e.enter("atxHeadingText"), function t(r) {
                                                return null === r || 35 === r || eD(r) ? (e.exit("atxHeadingText"), n(r)) : (e.consume(r), t)
                                            }(r))
                                        }(s)) : n(s)
                                    }(i)
                            }
                        }
                    },
                    42: eX,
                    45: [tt, eX],
                    60: {
                        concrete: !0,
                        name: "htmlFlow",
                        resolveTo: function(e) {
                            let t = e.length;
                            for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
                            return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
                        },
                        tokenize: function(e, t, n) {
                            let r, i, s, o, a;
                            let l = this;
                            return function(t) {
                                return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), u
                            };

                            function u(o) {
                                return 33 === o ? (e.consume(o), c) : 47 === o ? (e.consume(o), i = !0, p) : 63 === o ? (e.consume(o), r = 3, l.interrupt ? t : I) : eE(o) ? (e.consume(o), s = String.fromCharCode(o), f) : n(o)
                            }

                            function c(i) {
                                return 45 === i ? (e.consume(i), r = 2, d) : 91 === i ? (e.consume(i), r = 5, o = 0, h) : eE(i) ? (e.consume(i), r = 4, l.interrupt ? t : I) : n(i)
                            }

                            function d(r) {
                                return 45 === r ? (e.consume(r), l.interrupt ? t : I) : n(r)
                            }

                            function h(r) {
                                let i = "CDATA[";
                                return r === i.charCodeAt(o++) ? (e.consume(r), o === i.length) ? l.interrupt ? t : k : h : n(r)
                            }

                            function p(t) {
                                return eE(t) ? (e.consume(t), s = String.fromCharCode(t), f) : n(t)
                            }

                            function f(o) {
                                if (null === o || 47 === o || 62 === o || eD(o)) {
                                    let a = 47 === o,
                                        u = s.toLowerCase();
                                    return !a && !i && tr.includes(u) ? (r = 1, l.interrupt ? t(o) : k(o)) : tn.includes(s.toLowerCase()) ? (r = 6, a) ? (e.consume(o), m) : l.interrupt ? t(o) : k(o) : (r = 7, l.interrupt && !l.parser.lazy[l.now().line] ? n(o) : i ? function t(n) {
                                        return eL(n) ? (e.consume(n), t) : x(n)
                                    }(o) : g(o))
                                }
                                return 45 === o || eT(o) ? (e.consume(o), s += String.fromCharCode(o), f) : n(o)
                            }

                            function m(r) {
                                return 62 === r ? (e.consume(r), l.interrupt ? t : k) : n(r)
                            }

                            function g(t) {
                                return 47 === t ? (e.consume(t), x) : 58 === t || 95 === t || eE(t) ? (e.consume(t), y) : eL(t) ? (e.consume(t), g) : x(t)
                            }

                            function y(t) {
                                return 45 === t || 46 === t || 58 === t || 95 === t || eT(t) ? (e.consume(t), y) : v(t)
                            }

                            function v(t) {
                                return 61 === t ? (e.consume(t), b) : eL(t) ? (e.consume(t), v) : g(t)
                            }

                            function b(t) {
                                return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), a = t, A) : eL(t) ? (e.consume(t), b) : function t(n) {
                                    return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || eD(n) ? v(n) : (e.consume(n), t)
                                }(t)
                            }

                            function A(t) {
                                return t === a ? (e.consume(t), a = null, w) : null === t || eI(t) ? n(t) : (e.consume(t), A)
                            }

                            function w(e) {
                                return 47 === e || 62 === e || eL(e) ? g(e) : n(e)
                            }

                            function x(t) {
                                return 62 === t ? (e.consume(t), S) : n(t)
                            }

                            function S(t) {
                                return null === t || eI(t) ? k(t) : eL(t) ? (e.consume(t), S) : n(t)
                            }

                            function k(t) {
                                return 45 === t && 2 === r ? (e.consume(t), P) : 60 === t && 1 === r ? (e.consume(t), O) : 62 === t && 4 === r ? (e.consume(t), D) : 63 === t && 3 === r ? (e.consume(t), I) : 93 === t && 5 === r ? (e.consume(t), R) : eI(t) && (6 === r || 7 === r) ? (e.exit("htmlFlowData"), e.check(ti, L, E)(t)) : null === t || eI(t) ? (e.exit("htmlFlowData"), E(t)) : (e.consume(t), k)
                            }

                            function E(t) {
                                return e.check(ts, T, L)(t)
                            }

                            function T(t) {
                                return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), C
                            }

                            function C(t) {
                                return null === t || eI(t) ? E(t) : (e.enter("htmlFlowData"), k(t))
                            }

                            function P(t) {
                                return 45 === t ? (e.consume(t), I) : k(t)
                            }

                            function O(t) {
                                return 47 === t ? (e.consume(t), s = "", M) : k(t)
                            }

                            function M(t) {
                                if (62 === t) {
                                    let n = s.toLowerCase();
                                    return tr.includes(n) ? (e.consume(t), D) : k(t)
                                }
                                return eE(t) && s.length < 8 ? (e.consume(t), s += String.fromCharCode(t), M) : k(t)
                            }

                            function R(t) {
                                return 93 === t ? (e.consume(t), I) : k(t)
                            }

                            function I(t) {
                                return 62 === t ? (e.consume(t), D) : 45 === t && 2 === r ? (e.consume(t), I) : k(t)
                            }

                            function D(t) {
                                return null === t || eI(t) ? (e.exit("htmlFlowData"), L(t)) : (e.consume(t), D)
                            }

                            function L(n) {
                                return e.exit("htmlFlow"), t(n)
                            }
                        }
                    },
                    61: tt,
                    95: eX,
                    96: ta,
                    126: ta
                },
                tC = {
                    38: tc,
                    92: td
                },
                tP = {
                    [-5]: th,
                    [-4]: th,
                    [-3]: th,
                    33: tv,
                    38: tc,
                    42: tA,
                    60: [{
                        name: "autolink",
                        tokenize: function(e, t, n) {
                            let r = 0;
                            return function(t) {
                                return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i
                            };

                            function i(t) {
                                return eE(t) ? (e.consume(t), s) : 64 === t ? n(t) : a(t)
                            }

                            function s(t) {
                                return 43 === t || 45 === t || 46 === t || eT(t) ? (r = 1, function t(n) {
                                    return 58 === n ? (e.consume(n), r = 0, o) : (43 === n || 45 === n || 46 === n || eT(n)) && r++ < 32 ? (e.consume(n), t) : (r = 0, a(n))
                                }(t)) : a(t)
                            }

                            function o(r) {
                                return 62 === r ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : null === r || 32 === r || 60 === r || eP(r) ? n(r) : (e.consume(r), o)
                            }

                            function a(t) {
                                return 64 === t ? (e.consume(t), l) : eC(t) ? (e.consume(t), a) : n(t)
                            }

                            function l(i) {
                                return eT(i) ? function i(s) {
                                    return 46 === s ? (e.consume(s), r = 0, l) : 62 === s ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(s), e.exit("autolinkMarker"), e.exit("autolink"), t) : function t(s) {
                                        if ((45 === s || eT(s)) && r++ < 63) {
                                            let n = 45 === s ? t : i;
                                            return e.consume(s), n
                                        }
                                        return n(s)
                                    }(s)
                                }(i) : n(i)
                            }
                        }
                    }, {
                        name: "htmlText",
                        tokenize: function(e, t, n) {
                            let r, i, s;
                            let o = this;
                            return function(t) {
                                return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), a
                            };

                            function a(t) {
                                return 33 === t ? (e.consume(t), l) : 47 === t ? (e.consume(t), A) : 63 === t ? (e.consume(t), v) : eE(t) ? (e.consume(t), x) : n(t)
                            }

                            function l(t) {
                                return 45 === t ? (e.consume(t), u) : 91 === t ? (e.consume(t), i = 0, p) : eE(t) ? (e.consume(t), y) : n(t)
                            }

                            function u(t) {
                                return 45 === t ? (e.consume(t), h) : n(t)
                            }

                            function c(t) {
                                return null === t ? n(t) : 45 === t ? (e.consume(t), d) : eI(t) ? (s = c, M(t)) : (e.consume(t), c)
                            }

                            function d(t) {
                                return 45 === t ? (e.consume(t), h) : c(t)
                            }

                            function h(e) {
                                return 62 === e ? O(e) : 45 === e ? d(e) : c(e)
                            }

                            function p(t) {
                                let r = "CDATA[";
                                return t === r.charCodeAt(i++) ? (e.consume(t), i === r.length ? f : p) : n(t)
                            }

                            function f(t) {
                                return null === t ? n(t) : 93 === t ? (e.consume(t), m) : eI(t) ? (s = f, M(t)) : (e.consume(t), f)
                            }

                            function m(t) {
                                return 93 === t ? (e.consume(t), g) : f(t)
                            }

                            function g(t) {
                                return 62 === t ? O(t) : 93 === t ? (e.consume(t), g) : f(t)
                            }

                            function y(t) {
                                return null === t || 62 === t ? O(t) : eI(t) ? (s = y, M(t)) : (e.consume(t), y)
                            }

                            function v(t) {
                                return null === t ? n(t) : 63 === t ? (e.consume(t), b) : eI(t) ? (s = v, M(t)) : (e.consume(t), v)
                            }

                            function b(e) {
                                return 62 === e ? O(e) : v(e)
                            }

                            function A(t) {
                                return eE(t) ? (e.consume(t), w) : n(t)
                            }

                            function w(t) {
                                return 45 === t || eT(t) ? (e.consume(t), w) : function t(n) {
                                    return eI(n) ? (s = t, M(n)) : eL(n) ? (e.consume(n), t) : O(n)
                                }(t)
                            }

                            function x(t) {
                                return 45 === t || eT(t) ? (e.consume(t), x) : 47 === t || 62 === t || eD(t) ? S(t) : n(t)
                            }

                            function S(t) {
                                return 47 === t ? (e.consume(t), O) : 58 === t || 95 === t || eE(t) ? (e.consume(t), k) : eI(t) ? (s = S, M(t)) : eL(t) ? (e.consume(t), S) : O(t)
                            }

                            function k(t) {
                                return 45 === t || 46 === t || 58 === t || 95 === t || eT(t) ? (e.consume(t), k) : function t(n) {
                                    return 61 === n ? (e.consume(n), E) : eI(n) ? (s = t, M(n)) : eL(n) ? (e.consume(n), t) : S(n)
                                }(t)
                            }

                            function E(t) {
                                return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), r = t, T) : eI(t) ? (s = E, M(t)) : eL(t) ? (e.consume(t), E) : (e.consume(t), C)
                            }

                            function T(t) {
                                return t === r ? (e.consume(t), r = void 0, P) : null === t ? n(t) : eI(t) ? (s = T, M(t)) : (e.consume(t), T)
                            }

                            function C(t) {
                                return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 47 === t || 62 === t || eD(t) ? S(t) : (e.consume(t), C)
                            }

                            function P(e) {
                                return 47 === e || 62 === e || eD(e) ? S(e) : n(e)
                            }

                            function O(r) {
                                return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
                            }

                            function M(t) {
                                return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), R
                            }

                            function R(t) {
                                return eL(t) ? eF(e, I, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : I(t)
                            }

                            function I(t) {
                                return e.enter("htmlTextData"), s(t)
                            }
                        }
                    }],
                    91: tx,
                    92: [{
                        name: "hardBreakEscape",
                        tokenize: function(e, t, n) {
                            return function(t) {
                                return e.enter("hardBreakEscape"), e.consume(t), r
                            };

                            function r(r) {
                                return eI(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r)
                            }
                        }
                    }, td],
                    93: tf,
                    95: tA,
                    96: {
                        name: "codeText",
                        previous: function(e) {
                            return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                        },
                        resolve: function(e) {
                            let t, n, r = e.length - 4,
                                i = 3;
                            if (("lineEnding" === e[3][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type)) {
                                for (t = i; ++t < r;)
                                    if ("codeTextData" === e[t][1].type) {
                                        e[i][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", i += 2, r -= 2;
                                        break
                                    }
                            }
                            for (t = i - 1, r++; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : (t === r || "lineEnding" === e[t][1].type) && (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
                            return e
                        },
                        tokenize: function(e, t, n) {
                            let r, i, s = 0;
                            return function(t) {
                                return e.enter("codeText"), e.enter("codeTextSequence"),
                                    function t(n) {
                                        return 96 === n ? (e.consume(n), s++, t) : (e.exit("codeTextSequence"), o(n))
                                    }(t)
                            };

                            function o(l) {
                                return null === l ? n(l) : 32 === l ? (e.enter("space"), e.consume(l), e.exit("space"), o) : 96 === l ? (i = e.enter("codeTextSequence"), r = 0, function n(o) {
                                    return 96 === o ? (e.consume(o), r++, n) : r === s ? (e.exit("codeTextSequence"), e.exit("codeText"), t(o)) : (i.type = "codeTextData", a(o))
                                }(l)) : eI(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : (e.enter("codeTextData"), a(l))
                            }

                            function a(t) {
                                return null === t || 32 === t || 96 === t || eI(t) ? (e.exit("codeTextData"), o(t)) : (e.consume(t), a)
                            }
                        }
                    }
                },
                tO = {
                    null: [tA, eH]
                },
                tM = {
                    null: [42, 95]
                },
                tR = {
                    null: []
                },
                tI = /[\0\t\n\r]/g;

            function tD(e, t) {
                let n = Number.parseInt(e, t);
                return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n)
            }
            let tL = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

            function tj(e, t, n) {
                if (t) return t;
                if (35 === n.charCodeAt(0)) {
                    let e = n.charCodeAt(1),
                        t = 120 === e || 88 === e;
                    return tD(n.slice(t ? 2 : 1), t ? 16 : 10)
                }
                return tu(n) || e
            }
            let t_ = {}.hasOwnProperty;

            function tB(e) {
                return {
                    line: e.line,
                    column: e.column,
                    offset: e.offset
                }
            }

            function tF(e, t) {
                if (e) throw Error("Cannot close `" + e.type + "` (" + Q({
                    start: e.start,
                    end: e.end
                }) + "): a different token (`" + t.type + "`, " + Q({
                    start: t.start,
                    end: t.end
                }) + ") is open");
                throw Error("Cannot close document, a token (`" + t.type + "`, " + Q({
                    start: t.start,
                    end: t.end
                }) + ") is still open")
            }

            function tN(e) {
                let t = this;
                t.parser = function(n) {
                    var r, s;
                    let o, a, l, u;
                    return "string" != typeof(r = {
                        ...t.data("settings"),
                        ...e,
                        extensions: t.data("micromarkExtensions") || [],
                        mdastExtensions: t.data("fromMarkdownExtensions") || []
                    }) && (s = r, r = void 0), (function(e) {
                        let t = {
                            transforms: [],
                            canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                            enter: {
                                autolink: r(y),
                                autolinkProtocol: u,
                                autolinkEmail: u,
                                atxHeading: r(f),
                                blockQuote: r(function() {
                                    return {
                                        type: "blockquote",
                                        children: []
                                    }
                                }),
                                characterEscape: u,
                                characterReference: u,
                                codeFenced: r(p),
                                codeFencedFenceInfo: i,
                                codeFencedFenceMeta: i,
                                codeIndented: r(p, i),
                                codeText: r(function() {
                                    return {
                                        type: "inlineCode",
                                        value: ""
                                    }
                                }, i),
                                codeTextData: u,
                                data: u,
                                codeFlowValue: u,
                                definition: r(function() {
                                    return {
                                        type: "definition",
                                        identifier: "",
                                        label: null,
                                        title: null,
                                        url: ""
                                    }
                                }),
                                definitionDestinationString: i,
                                definitionLabelString: i,
                                definitionTitleString: i,
                                emphasis: r(function() {
                                    return {
                                        type: "emphasis",
                                        children: []
                                    }
                                }),
                                hardBreakEscape: r(m),
                                hardBreakTrailing: r(m),
                                htmlFlow: r(g, i),
                                htmlFlowData: u,
                                htmlText: r(g, i),
                                htmlTextData: u,
                                image: r(function() {
                                    return {
                                        type: "image",
                                        title: null,
                                        url: "",
                                        alt: null
                                    }
                                }),
                                label: i,
                                link: r(y),
                                listItem: r(function(e) {
                                    return {
                                        type: "listItem",
                                        spread: e._spread,
                                        checked: null,
                                        children: []
                                    }
                                }),
                                listItemValue: function(e) {
                                    this.data.expectingFirstListItemValue && (this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0)
                                },
                                listOrdered: r(v, function() {
                                    this.data.expectingFirstListItemValue = !0
                                }),
                                listUnordered: r(v),
                                paragraph: r(function() {
                                    return {
                                        type: "paragraph",
                                        children: []
                                    }
                                }),
                                reference: function() {
                                    this.data.referenceType = "collapsed"
                                },
                                referenceString: i,
                                resourceDestinationString: i,
                                resourceTitleString: i,
                                setextHeading: r(f),
                                strong: r(function() {
                                    return {
                                        type: "strong",
                                        children: []
                                    }
                                }),
                                thematicBreak: r(function() {
                                    return {
                                        type: "thematicBreak"
                                    }
                                })
                            },
                            exit: {
                                atxHeading: o(),
                                atxHeadingSequence: function(e) {
                                    let t = this.stack[this.stack.length - 1];
                                    if (!t.depth) {
                                        let n = this.sliceSerialize(e).length;
                                        t.depth = n
                                    }
                                },
                                autolink: o(),
                                autolinkEmail: function(e) {
                                    c.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                                },
                                autolinkProtocol: function(e) {
                                    c.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                                },
                                blockQuote: o(),
                                characterEscapeValue: c,
                                characterReferenceMarkerHexadecimal: h,
                                characterReferenceMarkerNumeric: h,
                                characterReferenceValue: function(e) {
                                    let t;
                                    let n = this.sliceSerialize(e),
                                        r = this.data.characterReferenceType;
                                    r ? (t = tD(n, "characterReferenceMarkerNumeric" === r ? 10 : 16), this.data.characterReferenceType = void 0) : t = tu(n);
                                    let i = this.stack[this.stack.length - 1];
                                    i.value += t
                                },
                                characterReference: function(e) {
                                    this.stack.pop().position.end = tB(e.end)
                                },
                                codeFenced: o(function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0
                                }),
                                codeFencedFence: function() {
                                    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0)
                                },
                                codeFencedFenceInfo: function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].lang = e
                                },
                                codeFencedFenceMeta: function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].meta = e
                                },
                                codeFlowValue: c,
                                codeIndented: o(function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "")
                                }),
                                codeText: o(function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].value = e
                                }),
                                codeTextData: c,
                                data: c,
                                definition: o(),
                                definitionDestinationString: function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].url = e
                                },
                                definitionLabelString: function(e) {
                                    let t = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.label = t, n.identifier = e8(this.sliceSerialize(e)).toLowerCase()
                                },
                                definitionTitleString: function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].title = e
                                },
                                emphasis: o(),
                                hardBreakEscape: o(d),
                                hardBreakTrailing: o(d),
                                htmlFlow: o(function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].value = e
                                }),
                                htmlFlowData: c,
                                htmlText: o(function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].value = e
                                }),
                                htmlTextData: c,
                                image: o(function() {
                                    let e = this.stack[this.stack.length - 1];
                                    if (this.data.inReference) {
                                        let t = this.data.referenceType || "shortcut";
                                        e.type += "Reference", e.referenceType = t, delete e.url, delete e.title
                                    } else delete e.identifier, delete e.label;
                                    this.data.referenceType = void 0
                                }),
                                label: function() {
                                    let e = this.stack[this.stack.length - 1],
                                        t = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    if (this.data.inReference = !0, "link" === n.type) {
                                        let t = e.children;
                                        n.children = t
                                    } else n.alt = t
                                },
                                labelText: function(e) {
                                    let t = this.sliceSerialize(e),
                                        n = this.stack[this.stack.length - 2];
                                    n.label = t.replace(tL, tj), n.identifier = e8(t).toLowerCase()
                                },
                                lineEnding: function(e) {
                                    let n = this.stack[this.stack.length - 1];
                                    if (this.data.atHardBreak) {
                                        n.children[n.children.length - 1].position.end = tB(e.end), this.data.atHardBreak = void 0;
                                        return
                                    }!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (u.call(this, e), c.call(this, e))
                                },
                                link: o(function() {
                                    let e = this.stack[this.stack.length - 1];
                                    if (this.data.inReference) {
                                        let t = this.data.referenceType || "shortcut";
                                        e.type += "Reference", e.referenceType = t, delete e.url, delete e.title
                                    } else delete e.identifier, delete e.label;
                                    this.data.referenceType = void 0
                                }),
                                listItem: o(),
                                listOrdered: o(),
                                listUnordered: o(),
                                paragraph: o(),
                                referenceString: function(e) {
                                    let t = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.label = t, n.identifier = e8(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full"
                                },
                                resourceDestinationString: function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].url = e
                                },
                                resourceTitleString: function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].title = e
                                },
                                resource: function() {
                                    this.data.inReference = void 0
                                },
                                setextHeading: o(function() {
                                    this.data.setextHeadingSlurpLineEnding = void 0
                                }),
                                setextHeadingLineSequence: function(e) {
                                    this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2
                                },
                                setextHeadingText: function() {
                                    this.data.setextHeadingSlurpLineEnding = !0
                                },
                                strong: o(),
                                thematicBreak: o()
                            }
                        };
                        (function e(t, n) {
                            let r = -1;
                            for (; ++r < n.length;) {
                                let i = n[r];
                                Array.isArray(i) ? e(t, i) : function(e, t) {
                                    let n;
                                    for (n in t)
                                        if (t_.call(t, n)) switch (n) {
                                            case "canContainEols": {
                                                let r = t[n];
                                                r && e[n].push(...r);
                                                break
                                            }
                                            case "transforms": {
                                                let r = t[n];
                                                r && e[n].push(...r);
                                                break
                                            }
                                            case "enter":
                                            case "exit": {
                                                let r = t[n];
                                                r && Object.assign(e[n], r)
                                            }
                                        }
                                }(t, i)
                            }
                        })(t, (e || {}).mdastExtensions || []);
                        let n = {};
                        return function(e) {
                            let r = {
                                    type: "root",
                                    children: []
                                },
                                o = {
                                    stack: [r],
                                    tokenStack: [],
                                    config: t,
                                    enter: s,
                                    exit: a,
                                    buffer: i,
                                    resume: l,
                                    data: n
                                },
                                u = [],
                                c = -1;
                            for (; ++c < e.length;)("listOrdered" === e[c][1].type || "listUnordered" === e[c][1].type) && ("enter" === e[c][0] ? u.push(c) : c = function(e, t, n) {
                                let r, i, s, o, a = t - 1,
                                    l = -1,
                                    u = !1;
                                for (; ++a <= n;) {
                                    let t = e[a];
                                    switch (t[1].type) {
                                        case "listUnordered":
                                        case "listOrdered":
                                        case "blockQuote":
                                            "enter" === t[0] ? l++ : l--, o = void 0;
                                            break;
                                        case "lineEndingBlank":
                                            "enter" === t[0] && (!r || o || l || s || (s = a), o = void 0);
                                            break;
                                        case "linePrefix":
                                        case "listItemValue":
                                        case "listItemMarker":
                                        case "listItemPrefix":
                                        case "listItemPrefixWhitespace":
                                            break;
                                        default:
                                            o = void 0
                                    }
                                    if (!l && "enter" === t[0] && "listItemPrefix" === t[1].type || -1 === l && "exit" === t[0] && ("listUnordered" === t[1].type || "listOrdered" === t[1].type)) {
                                        if (r) {
                                            let o = a;
                                            for (i = void 0; o--;) {
                                                let t = e[o];
                                                if ("lineEnding" === t[1].type || "lineEndingBlank" === t[1].type) {
                                                    if ("exit" === t[0]) continue;
                                                    i && (e[i][1].type = "lineEndingBlank", u = !0), t[1].type = "lineEnding", i = o
                                                } else if ("linePrefix" === t[1].type || "blockQuotePrefix" === t[1].type || "blockQuotePrefixWhitespace" === t[1].type || "blockQuoteMarker" === t[1].type || "listItemIndent" === t[1].type);
                                                else break
                                            }
                                            s && (!i || s < i) && (r._spread = !0), r.end = Object.assign({}, i ? e[i][1].start : t[1].end), e.splice(i || a, 0, ["exit", r, t[2]]), a++, n++
                                        }
                                        if ("listItemPrefix" === t[1].type) {
                                            let i = {
                                                type: "listItem",
                                                _spread: !1,
                                                start: Object.assign({}, t[1].start),
                                                end: void 0
                                            };
                                            r = i, e.splice(a, 0, ["enter", i, t[2]]), a++, n++, s = void 0, o = !0
                                        }
                                    }
                                }
                                return e[t][1]._spread = u, n
                            }(e, u.pop(), c));
                            for (c = -1; ++c < e.length;) {
                                let n = t[e[c][0]];
                                t_.call(n, e[c][1].type) && n[e[c][1].type].call(Object.assign({
                                    sliceSerialize: e[c][2].sliceSerialize
                                }, o), e[c][1])
                            }
                            if (o.tokenStack.length > 0) {
                                let e = o.tokenStack[o.tokenStack.length - 1];
                                (e[1] || tF).call(o, void 0, e[0])
                            }
                            for (r.position = {
                                    start: tB(e.length > 0 ? e[0][1].start : {
                                        line: 1,
                                        column: 1,
                                        offset: 0
                                    }),
                                    end: tB(e.length > 0 ? e[e.length - 2][1].end : {
                                        line: 1,
                                        column: 1,
                                        offset: 0
                                    })
                                }, c = -1; ++c < t.transforms.length;) r = t.transforms[c](r) || r;
                            return r
                        };

                        function r(e, t) {
                            return function(n) {
                                s.call(this, e(n), n), t && t.call(this, n)
                            }
                        }

                        function i() {
                            this.stack.push({
                                type: "fragment",
                                children: []
                            })
                        }

                        function s(e, t, n) {
                            this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
                                start: tB(t.start),
                                end: void 0
                            }
                        }

                        function o(e) {
                            return function(t) {
                                e && e.call(this, t), a.call(this, t)
                            }
                        }

                        function a(e, t) {
                            let n = this.stack.pop(),
                                r = this.tokenStack.pop();
                            if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || tF).call(this, e, r[0]));
                            else throw Error("Cannot close `" + e.type + "` (" + Q({
                                start: e.start,
                                end: e.end
                            }) + "): it’s not open");
                            n.position.end = tB(e.end)
                        }

                        function l() {
                            return ey(this.stack.pop(), "boolean" != typeof eg.includeImageAlt || eg.includeImageAlt, "boolean" != typeof eg.includeHtml || eg.includeHtml)
                        }

                        function u(e) {
                            let t = this.stack[this.stack.length - 1].children,
                                n = t[t.length - 1];
                            n && "text" === n.type || ((n = {
                                type: "text",
                                value: ""
                            }).position = {
                                start: tB(e.start),
                                end: void 0
                            }, t.push(n)), this.stack.push(n)
                        }

                        function c(e) {
                            let t = this.stack.pop();
                            t.value += this.sliceSerialize(e), t.position.end = tB(e.end)
                        }

                        function d() {
                            this.data.atHardBreak = !0
                        }

                        function h(e) {
                            this.data.characterReferenceType = e.type
                        }

                        function p() {
                            return {
                                type: "code",
                                lang: null,
                                meta: null,
                                value: ""
                            }
                        }

                        function f() {
                            return {
                                type: "heading",
                                depth: 0,
                                children: []
                            }
                        }

                        function m() {
                            return {
                                type: "break"
                            }
                        }

                        function g() {
                            return {
                                type: "html",
                                value: ""
                            }
                        }

                        function y() {
                            return {
                                type: "link",
                                title: null,
                                url: "",
                                children: []
                            }
                        }

                        function v(e) {
                            return {
                                type: "list",
                                ordered: "listOrdered" === e.type,
                                start: null,
                                spread: e._spread,
                                children: []
                            }
                        }
                    })(s)(function(e) {
                        for (; !eS(e););
                        return e
                    }((function(e) {
                        let t = {
                            constructs: function(e) {
                                let t = {},
                                    n = -1;
                                for (; ++n < e.length;)(function(e, t) {
                                    let n;
                                    for (n in t) {
                                        let r;
                                        let i = (ek.call(e, n) ? e[n] : void 0) || (e[n] = {}),
                                            s = t[n];
                                        if (s)
                                            for (r in s) {
                                                ek.call(i, r) || (i[r] = []);
                                                let e = s[r];
                                                (function(e, t) {
                                                    let n = -1,
                                                        r = [];
                                                    for (; ++n < t.length;)("after" === t[n].add ? e : r).push(t[n]);
                                                    eb(e, 0, 0, r)
                                                })(i[r], Array.isArray(e) ? e : e ? [e] : [])
                                            }
                                    }
                                })(t, e[n]);
                                return t
                            }([i, ...(e || {}).extensions || []]),
                            content: n(eN),
                            defined: [],
                            document: n(eV),
                            flow: n(eW),
                            lazy: {},
                            string: n(eG),
                            text: n(eQ)
                        };
                        return t;

                        function n(e) {
                            return function(n) {
                                return function(e, t, n) {
                                    let r = {
                                            _bufferIndex: -1,
                                            _index: 0,
                                            line: n && n.line || 1,
                                            column: n && n.column || 1,
                                            offset: n && n.offset || 0
                                        },
                                        i = {},
                                        s = [],
                                        o = [],
                                        a = [],
                                        l = {
                                            attempt: f(function(e, t) {
                                                m(e, t.from)
                                            }),
                                            check: f(p),
                                            consume: function(e) {
                                                eI(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, g()) : -1 !== e && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = e
                                            },
                                            enter: function(e, t) {
                                                let n = t || {};
                                                return n.type = e, n.start = h(), u.events.push(["enter", n, u]), a.push(n), n
                                            },
                                            exit: function(e) {
                                                let t = a.pop();
                                                return t.end = h(), u.events.push(["exit", t, u]), t
                                            },
                                            interrupt: f(p, {
                                                interrupt: !0
                                            })
                                        },
                                        u = {
                                            code: null,
                                            containerState: {},
                                            defineSkip: function(e) {
                                                i[e.line] = e.column, g()
                                            },
                                            events: [],
                                            now: h,
                                            parser: e,
                                            previous: null,
                                            sliceSerialize: function(e, t) {
                                                return function(e, t) {
                                                    let n, r = -1,
                                                        i = [];
                                                    for (; ++r < e.length;) {
                                                        let s;
                                                        let o = e[r];
                                                        if ("string" == typeof o) s = o;
                                                        else switch (o) {
                                                            case -5:
                                                                s = "\r";
                                                                break;
                                                            case -4:
                                                                s = "\n";
                                                                break;
                                                            case -3:
                                                                s = "\r\n";
                                                                break;
                                                            case -2:
                                                                s = t ? " " : "	";
                                                                break;
                                                            case -1:
                                                                if (!t && n) continue;
                                                                s = " ";
                                                                break;
                                                            default:
                                                                s = String.fromCharCode(o)
                                                        }
                                                        n = -2 === o, i.push(s)
                                                    }
                                                    return i.join("")
                                                }(d(e), t)
                                            },
                                            sliceStream: d,
                                            write: function(e) {
                                                return (o = eA(o, e), function() {
                                                    let e;
                                                    for (; r._index < o.length;) {
                                                        let n = o[r._index];
                                                        if ("string" == typeof n)
                                                            for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length;) {
                                                                var t;
                                                                t = n.charCodeAt(r._bufferIndex), c = c(t)
                                                            } else c = c(n)
                                                    }
                                                }(), null !== o[o.length - 1]) ? [] : (m(t, 0), u.events = tp(s, u.events, u), u.events)
                                            }
                                        },
                                        c = t.tokenize.call(u, l);
                                    return t.resolveAll && s.push(t), u;

                                    function d(e) {
                                        return function(e, t) {
                                            let n;
                                            let r = t.start._index,
                                                i = t.start._bufferIndex,
                                                s = t.end._index,
                                                o = t.end._bufferIndex;
                                            if (r === s) n = [e[r].slice(i, o)];
                                            else {
                                                if (n = e.slice(r, s), i > -1) {
                                                    let e = n[0];
                                                    "string" == typeof e ? n[0] = e.slice(i) : n.shift()
                                                }
                                                o > 0 && n.push(e[s].slice(0, o))
                                            }
                                            return n
                                        }(o, e)
                                    }

                                    function h() {
                                        let {
                                            _bufferIndex: e,
                                            _index: t,
                                            line: n,
                                            column: i,
                                            offset: s
                                        } = r;
                                        return {
                                            _bufferIndex: e,
                                            _index: t,
                                            line: n,
                                            column: i,
                                            offset: s
                                        }
                                    }

                                    function p(e, t) {
                                        t.restore()
                                    }

                                    function f(e, t) {
                                        return function(n, i, s) {
                                            let o, c, d, p;
                                            return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : function(e) {
                                                let t = null !== e && n[e],
                                                    r = null !== e && n.null;
                                                return f([...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(r) ? r : r ? [r] : []])(e)
                                            };

                                            function f(e) {
                                                return (o = e, c = 0, 0 === e.length) ? s : m(e[c])
                                            }

                                            function m(e) {
                                                return function(n) {
                                                    return (p = function() {
                                                        let e = h(),
                                                            t = u.previous,
                                                            n = u.currentConstruct,
                                                            i = u.events.length,
                                                            s = Array.from(a);
                                                        return {
                                                            from: i,
                                                            restore: function() {
                                                                r = e, u.previous = t, u.currentConstruct = n, u.events.length = i, a = s, g()
                                                            }
                                                        }
                                                    }(), d = e, e.partial || (u.currentConstruct = e), e.name && u.parser.constructs.disable.null.includes(e.name)) ? v(n) : e.tokenize.call(t ? Object.assign(Object.create(u), t) : u, l, y, v)(n)
                                                }
                                            }

                                            function y(t) {
                                                return e(d, p), i
                                            }

                                            function v(e) {
                                                return (p.restore(), ++c < o.length) ? m(o[c]) : s
                                            }
                                        }
                                    }

                                    function m(e, t) {
                                        e.resolveAll && !s.includes(e) && s.push(e), e.resolve && eb(u.events, t, u.events.length - t, e.resolve(u.events.slice(t), u)), e.resolveTo && (u.events = e.resolveTo(u.events, u))
                                    }

                                    function g() {
                                        r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
                                    }
                                }(t, e, n)
                            }
                        }
                    })(s).document().write((a = 1, l = "", u = !0, function(e, t, n) {
                        let r, i, s, c, d;
                        let h = [];
                        for (e = l + ("string" == typeof e ? e.toString() : new TextDecoder(t || void 0).decode(e)), s = 0, l = "", u && (65279 === e.charCodeAt(0) && s++, u = void 0); s < e.length;) {
                            if (tI.lastIndex = s, c = (r = tI.exec(e)) && void 0 !== r.index ? r.index : e.length, d = e.charCodeAt(c), !r) {
                                l = e.slice(s);
                                break
                            }
                            if (10 === d && s === c && o) h.push(-3), o = void 0;
                            else switch (o && (h.push(-5), o = void 0), s < c && (h.push(e.slice(s, c)), a += c - s), d) {
                                case 0:
                                    h.push(65533), a++;
                                    break;
                                case 9:
                                    for (i = 4 * Math.ceil(a / 4), h.push(-2); a++ < i;) h.push(-1);
                                    break;
                                case 10:
                                    h.push(-4), a = 1;
                                    break;
                                default:
                                    o = !0, a = 1
                            }
                            s = c + 1
                        }
                        return n && (o && h.push(-5), l && h.push(l), h.push(null)), h
                    })(n, r, !0))))
                }
            }
            let tV = "object" == typeof self ? self : globalThis,
                tz = (e, t) => {
                    let n = (t, n) => (e.set(n, t), t),
                        r = i => {
                            if (e.has(i)) return e.get(i);
                            let [s, o] = t[i];
                            switch (s) {
                                case 0:
                                case -1:
                                    return n(o, i);
                                case 1: {
                                    let e = n([], i);
                                    for (let t of o) e.push(r(t));
                                    return e
                                }
                                case 2: {
                                    let e = n({}, i);
                                    for (let [t, n] of o) e[r(t)] = r(n);
                                    return e
                                }
                                case 3:
                                    return n(new Date(o), i);
                                case 4: {
                                    let {
                                        source: e,
                                        flags: t
                                    } = o;
                                    return n(new RegExp(e, t), i)
                                }
                                case 5: {
                                    let e = n(new Map, i);
                                    for (let [t, n] of o) e.set(r(t), r(n));
                                    return e
                                }
                                case 6: {
                                    let e = n(new Set, i);
                                    for (let t of o) e.add(r(t));
                                    return e
                                }
                                case 7: {
                                    let {
                                        name: e,
                                        message: t
                                    } = o;
                                    return n(new tV[e](t), i)
                                }
                                case 8:
                                    return n(BigInt(o), i);
                                case "BigInt":
                                    return n(Object(BigInt(o)), i);
                                case "ArrayBuffer":
                                    return n(new Uint8Array(o).buffer, o);
                                case "DataView": {
                                    let {
                                        buffer: e
                                    } = new Uint8Array(o);
                                    return n(new DataView(e), o)
                                }
                            }
                            return n(new tV[s](o), i)
                        };
                    return r
                },
                tU = e => tz(new Map, e)(0),
                {
                    toString: t$
                } = {},
                {
                    keys: tq
                } = Object,
                tW = e => {
                    let t = typeof e;
                    if ("object" !== t || !e) return [0, t];
                    let n = t$.call(e).slice(8, -1);
                    switch (n) {
                        case "Array":
                            return [1, ""];
                        case "Object":
                            return [2, ""];
                        case "Date":
                            return [3, ""];
                        case "RegExp":
                            return [4, ""];
                        case "Map":
                            return [5, ""];
                        case "Set":
                            return [6, ""];
                        case "DataView":
                            return [1, n]
                    }
                    return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n]
                },
                tH = ([e, t]) => 0 === e && ("function" === t || "symbol" === t),
                tG = (e, t, n, r) => {
                    let i = (e, t) => {
                            let i = r.push(e) - 1;
                            return n.set(t, i), i
                        },
                        s = r => {
                            if (n.has(r)) return n.get(r);
                            let [o, a] = tW(r);
                            switch (o) {
                                case 0: {
                                    let t = r;
                                    switch (a) {
                                        case "bigint":
                                            o = 8, t = r.toString();
                                            break;
                                        case "function":
                                        case "symbol":
                                            if (e) throw TypeError("unable to serialize " + a);
                                            t = null;
                                            break;
                                        case "undefined":
                                            return i([-1], r)
                                    }
                                    return i([o, t], r)
                                }
                                case 1: {
                                    if (a) {
                                        let e = r;
                                        return "DataView" === a ? e = new Uint8Array(r.buffer) : "ArrayBuffer" === a && (e = new Uint8Array(r)), i([a, [...e]], r)
                                    }
                                    let e = [],
                                        t = i([o, e], r);
                                    for (let t of r) e.push(s(t));
                                    return t
                                }
                                case 2: {
                                    if (a) switch (a) {
                                        case "BigInt":
                                            return i([a, r.toString()], r);
                                        case "Boolean":
                                        case "Number":
                                        case "String":
                                            return i([a, r.valueOf()], r)
                                    }
                                    if (t && "toJSON" in r) return s(r.toJSON());
                                    let n = [],
                                        l = i([o, n], r);
                                    for (let t of tq(r))(e || !tH(tW(r[t]))) && n.push([s(t), s(r[t])]);
                                    return l
                                }
                                case 3:
                                    return i([o, r.toISOString()], r);
                                case 4: {
                                    let {
                                        source: e,
                                        flags: t
                                    } = r;
                                    return i([o, {
                                        source: e,
                                        flags: t
                                    }], r)
                                }
                                case 5: {
                                    let t = [],
                                        n = i([o, t], r);
                                    for (let [n, i] of r)(e || !(tH(tW(n)) || tH(tW(i)))) && t.push([s(n), s(i)]);
                                    return n
                                }
                                case 6: {
                                    let t = [],
                                        n = i([o, t], r);
                                    for (let n of r)(e || !tH(tW(n))) && t.push(s(n));
                                    return n
                                }
                            }
                            let {
                                message: l
                            } = r;
                            return i([o, {
                                name: a,
                                message: l
                            }], r)
                        };
                    return s
                },
                tQ = (e, {
                    json: t,
                    lossy: n
                } = {}) => {
                    let r = [];
                    return tG(!(t || n), !!t, new Map, r)(e), r
                },
                tY = "function" == typeof structuredClone ? (e, t) => t && ("json" in t || "lossy" in t) ? tU(tQ(e, t)) : structuredClone(e) : (e, t) => tU(tQ(e, t));

            function tK(e) {
                let t = [],
                    n = -1,
                    r = 0,
                    i = 0;
                for (; ++n < e.length;) {
                    let s = e.charCodeAt(n),
                        o = "";
                    if (37 === s && eT(e.charCodeAt(n + 1)) && eT(e.charCodeAt(n + 2))) i = 2;
                    else if (s < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) || (o = String.fromCharCode(s));
                    else if (s > 55295 && s < 57344) {
                        let t = e.charCodeAt(n + 1);
                        s < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(s, t), i = 1) : o = "�"
                    } else o = String.fromCharCode(s);
                    o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0)
                }
                return t.join("") + e.slice(r)
            }

            function tJ(e, t) {
                let n = [{
                    type: "text",
                    value: "↩"
                }];
                return t > 1 && n.push({
                    type: "element",
                    tagName: "sup",
                    properties: {},
                    children: [{
                        type: "text",
                        value: String(t)
                    }]
                }), n
            }

            function tX(e, t) {
                return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "")
            }
            let tZ = function(e) {
                if (null == e) return t1;
                if ("function" == typeof e) return t0(e);
                if ("object" == typeof e) return Array.isArray(e) ? function(e) {
                    let t = [],
                        n = -1;
                    for (; ++n < e.length;) t[n] = tZ(e[n]);
                    return t0(function(...e) {
                        let n = -1;
                        for (; ++n < t.length;)
                            if (t[n].apply(this, e)) return !0;
                        return !1
                    })
                }(e) : t0(function(t) {
                    let n;
                    for (n in e)
                        if (t[n] !== e[n]) return !1;
                    return !0
                });
                if ("string" == typeof e) return t0(function(t) {
                    return t && t.type === e
                });
                throw Error("Expected function, string, or object as test")
            };

            function t0(e) {
                return function(t, n, r) {
                    var i;
                    return !!(null !== (i = t) && "object" == typeof i && "type" in i && e.call(this, t, "number" == typeof n ? n : void 0, r || void 0))
                }
            }

            function t1() {
                return !0
            }
            let t2 = [];

            function t4(e, t, n, r) {
                let i, s, o;
                "function" == typeof t && "function" != typeof n ? (s = void 0, o = t, i = n) : (s = t, o = n, i = r),
                    function(e, t, n, r) {
                        let i;
                        "function" == typeof t && "function" != typeof n ? (r = n, n = t) : i = t;
                        let s = tZ(i),
                            o = r ? -1 : 1;
                        (function e(i, a, l) {
                            let u = i && "object" == typeof i ? i : {};
                            if ("string" == typeof u.type) {
                                let e = "string" == typeof u.tagName ? u.tagName : "string" == typeof u.name ? u.name : void 0;
                                Object.defineProperty(c, "name", {
                                    value: "node (" + i.type + (e ? "<" + e + ">" : "") + ")"
                                })
                            }
                            return c;

                            function c() {
                                var u;
                                let c, d, h, p = t2;
                                if ((!t || s(i, a, l[l.length - 1] || void 0)) && !1 === (p = Array.isArray(u = n(i, l)) ? u : "number" == typeof u ? [!0, u] : null == u ? t2 : [u])[0]) return p;
                                if ("children" in i && i.children && i.children && "skip" !== p[0])
                                    for (d = (r ? i.children.length : -1) + o, h = l.concat(i); d > -1 && d < i.children.length;) {
                                        if (!1 === (c = e(i.children[d], d, h)())[0]) return c;
                                        d = "number" == typeof c[1] ? c[1] : d + o
                                    }
                                return p
                            }
                        })(e, void 0, [])()
                    }(e, s, function(e, t) {
                        let n = t[t.length - 1],
                            r = n ? n.children.indexOf(e) : void 0;
                        return o(e, r, n)
                    }, i)
            }

            function t5(e, t) {
                let n = t.referenceType,
                    r = "]";
                if ("collapsed" === n ? r += "[]" : "full" === n && (r += "[" + (t.label || t.identifier) + "]"), "imageReference" === t.type) return [{
                    type: "text",
                    value: "![" + t.alt + r
                }];
                let i = e.all(t),
                    s = i[0];
                s && "text" === s.type ? s.value = "[" + s.value : i.unshift({
                    type: "text",
                    value: "["
                });
                let o = i[i.length - 1];
                return o && "text" === o.type ? o.value += r : i.push({
                    type: "text",
                    value: r
                }), i
            }

            function t3(e) {
                let t = e.spread;
                return null == t ? e.children.length > 1 : t
            }

            function t6(e, t, n) {
                let r = 0,
                    i = e.length;
                if (t) {
                    let t = e.codePointAt(r);
                    for (; 9 === t || 32 === t;) r++, t = e.codePointAt(r)
                }
                if (n) {
                    let t = e.codePointAt(i - 1);
                    for (; 9 === t || 32 === t;) i--, t = e.codePointAt(i - 1)
                }
                return i > r ? e.slice(r, i) : ""
            }
            let t8 = {
                blockquote: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "blockquote",
                        properties: {},
                        children: e.wrap(e.all(t), !0)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                break: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "br",
                        properties: {},
                        children: []
                    };
                    return e.patch(t, n), [e.applyData(t, n), {
                        type: "text",
                        value: "\n"
                    }]
                },
                code: function(e, t) {
                    let n = t.value ? t.value + "\n" : "",
                        r = {};
                    t.lang && (r.className = ["language-" + t.lang]);
                    let i = {
                        type: "element",
                        tagName: "code",
                        properties: r,
                        children: [{
                            type: "text",
                            value: n
                        }]
                    };
                    return t.meta && (i.data = {
                        meta: t.meta
                    }), e.patch(t, i), i = {
                        type: "element",
                        tagName: "pre",
                        properties: {},
                        children: [i = e.applyData(t, i)]
                    }, e.patch(t, i), i
                },
                delete: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "del",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                emphasis: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "em",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                footnoteReference: function(e, t) {
                    let n;
                    let r = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-",
                        i = String(t.identifier).toUpperCase(),
                        s = tK(i.toLowerCase()),
                        o = e.footnoteOrder.indexOf(i),
                        a = e.footnoteCounts.get(i);
                    void 0 === a ? (a = 0, e.footnoteOrder.push(i), n = e.footnoteOrder.length) : n = o + 1, a += 1, e.footnoteCounts.set(i, a);
                    let l = {
                        type: "element",
                        tagName: "a",
                        properties: {
                            href: "#" + r + "fn-" + s,
                            id: r + "fnref-" + s + (a > 1 ? "-" + a : ""),
                            dataFootnoteRef: !0,
                            ariaDescribedBy: ["footnote-label"]
                        },
                        children: [{
                            type: "text",
                            value: String(n)
                        }]
                    };
                    e.patch(t, l);
                    let u = {
                        type: "element",
                        tagName: "sup",
                        properties: {},
                        children: [l]
                    };
                    return e.patch(t, u), e.applyData(t, u)
                },
                heading: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "h" + t.depth,
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                html: function(e, t) {
                    if (e.options.allowDangerousHtml) {
                        let n = {
                            type: "raw",
                            value: t.value
                        };
                        return e.patch(t, n), e.applyData(t, n)
                    }
                },
                imageReference: function(e, t) {
                    let n = String(t.identifier).toUpperCase(),
                        r = e.definitionById.get(n);
                    if (!r) return t5(e, t);
                    let i = {
                        src: tK(r.url || ""),
                        alt: t.alt
                    };
                    null !== r.title && void 0 !== r.title && (i.title = r.title);
                    let s = {
                        type: "element",
                        tagName: "img",
                        properties: i,
                        children: []
                    };
                    return e.patch(t, s), e.applyData(t, s)
                },
                image: function(e, t) {
                    let n = {
                        src: tK(t.url)
                    };
                    null !== t.alt && void 0 !== t.alt && (n.alt = t.alt), null !== t.title && void 0 !== t.title && (n.title = t.title);
                    let r = {
                        type: "element",
                        tagName: "img",
                        properties: n,
                        children: []
                    };
                    return e.patch(t, r), e.applyData(t, r)
                },
                inlineCode: function(e, t) {
                    let n = {
                        type: "text",
                        value: t.value.replace(/\r?\n|\r/g, " ")
                    };
                    e.patch(t, n);
                    let r = {
                        type: "element",
                        tagName: "code",
                        properties: {},
                        children: [n]
                    };
                    return e.patch(t, r), e.applyData(t, r)
                },
                linkReference: function(e, t) {
                    let n = String(t.identifier).toUpperCase(),
                        r = e.definitionById.get(n);
                    if (!r) return t5(e, t);
                    let i = {
                        href: tK(r.url || "")
                    };
                    null !== r.title && void 0 !== r.title && (i.title = r.title);
                    let s = {
                        type: "element",
                        tagName: "a",
                        properties: i,
                        children: e.all(t)
                    };
                    return e.patch(t, s), e.applyData(t, s)
                },
                link: function(e, t) {
                    let n = {
                        href: tK(t.url)
                    };
                    null !== t.title && void 0 !== t.title && (n.title = t.title);
                    let r = {
                        type: "element",
                        tagName: "a",
                        properties: n,
                        children: e.all(t)
                    };
                    return e.patch(t, r), e.applyData(t, r)
                },
                listItem: function(e, t, n) {
                    let r = e.all(t),
                        i = n ? function(e) {
                            let t = !1;
                            if ("list" === e.type) {
                                t = e.spread || !1;
                                let n = e.children,
                                    r = -1;
                                for (; !t && ++r < n.length;) t = t3(n[r])
                            }
                            return t
                        }(n) : t3(t),
                        s = {},
                        o = [];
                    if ("boolean" == typeof t.checked) {
                        let e;
                        let n = r[0];
                        n && "element" === n.type && "p" === n.tagName ? e = n : (e = {
                            type: "element",
                            tagName: "p",
                            properties: {},
                            children: []
                        }, r.unshift(e)), e.children.length > 0 && e.children.unshift({
                            type: "text",
                            value: " "
                        }), e.children.unshift({
                            type: "element",
                            tagName: "input",
                            properties: {
                                type: "checkbox",
                                checked: t.checked,
                                disabled: !0
                            },
                            children: []
                        }), s.className = ["task-list-item"]
                    }
                    let a = -1;
                    for (; ++a < r.length;) {
                        let e = r[a];
                        (i || 0 !== a || "element" !== e.type || "p" !== e.tagName) && o.push({
                            type: "text",
                            value: "\n"
                        }), "element" !== e.type || "p" !== e.tagName || i ? o.push(e) : o.push(...e.children)
                    }
                    let l = r[r.length - 1];
                    l && (i || "element" !== l.type || "p" !== l.tagName) && o.push({
                        type: "text",
                        value: "\n"
                    });
                    let u = {
                        type: "element",
                        tagName: "li",
                        properties: s,
                        children: o
                    };
                    return e.patch(t, u), e.applyData(t, u)
                },
                list: function(e, t) {
                    let n = {},
                        r = e.all(t),
                        i = -1;
                    for ("number" == typeof t.start && 1 !== t.start && (n.start = t.start); ++i < r.length;) {
                        let e = r[i];
                        if ("element" === e.type && "li" === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
                            n.className = ["contains-task-list"];
                            break
                        }
                    }
                    let s = {
                        type: "element",
                        tagName: t.ordered ? "ol" : "ul",
                        properties: n,
                        children: e.wrap(r, !0)
                    };
                    return e.patch(t, s), e.applyData(t, s)
                },
                paragraph: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "p",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                root: function(e, t) {
                    let n = {
                        type: "root",
                        children: e.wrap(e.all(t))
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                strong: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "strong",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                table: function(e, t) {
                    let n = e.all(t),
                        r = n.shift(),
                        i = [];
                    if (r) {
                        let n = {
                            type: "element",
                            tagName: "thead",
                            properties: {},
                            children: e.wrap([r], !0)
                        };
                        e.patch(t.children[0], n), i.push(n)
                    }
                    if (n.length > 0) {
                        let r = {
                                type: "element",
                                tagName: "tbody",
                                properties: {},
                                children: e.wrap(n, !0)
                            },
                            s = H(t.children[1]),
                            o = W(t.children[t.children.length - 1]);
                        s && o && (r.position = {
                            start: s,
                            end: o
                        }), i.push(r)
                    }
                    let s = {
                        type: "element",
                        tagName: "table",
                        properties: {},
                        children: e.wrap(i, !0)
                    };
                    return e.patch(t, s), e.applyData(t, s)
                },
                tableCell: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "td",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                tableRow: function(e, t, n) {
                    let r = n ? n.children : void 0,
                        i = 0 === (r ? r.indexOf(t) : 1) ? "th" : "td",
                        s = n && "table" === n.type ? n.align : void 0,
                        o = s ? s.length : t.children.length,
                        a = -1,
                        l = [];
                    for (; ++a < o;) {
                        let n = t.children[a],
                            r = {},
                            o = s ? s[a] : void 0;
                        o && (r.align = o);
                        let u = {
                            type: "element",
                            tagName: i,
                            properties: r,
                            children: []
                        };
                        n && (u.children = e.all(n), e.patch(n, u), u = e.applyData(n, u)), l.push(u)
                    }
                    let u = {
                        type: "element",
                        tagName: "tr",
                        properties: {},
                        children: e.wrap(l, !0)
                    };
                    return e.patch(t, u), e.applyData(t, u)
                },
                text: function(e, t) {
                    let n = {
                        type: "text",
                        value: function(e) {
                            let t = String(e),
                                n = /\r?\n|\r/g,
                                r = n.exec(t),
                                i = 0,
                                s = [];
                            for (; r;) s.push(t6(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
                            return s.push(t6(t.slice(i), i > 0, !1)), s.join("")
                        }(String(t.value))
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                thematicBreak: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "hr",
                        properties: {},
                        children: []
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                toml: t9,
                yaml: t9,
                definition: t9,
                footnoteDefinition: t9
            };

            function t9() {}
            let t7 = {}.hasOwnProperty,
                ne = {};

            function nt(e, t) {
                e.position && (t.position = function(e) {
                    let t = H(e),
                        n = W(e);
                    if (t && n) return {
                        start: t,
                        end: n
                    }
                }(e))
            }

            function nn(e, t) {
                let n = t;
                if (e && e.data) {
                    let t = e.data.hName,
                        r = e.data.hChildren,
                        i = e.data.hProperties;
                    "string" == typeof t && ("element" === n.type ? n.tagName = t : n = {
                        type: "element",
                        tagName: t,
                        properties: {},
                        children: "children" in n ? n.children : [n]
                    }), "element" === n.type && i && Object.assign(n.properties, tY(i)), "children" in n && n.children && null != r && (n.children = r)
                }
                return n
            }

            function nr(e, t) {
                let n = [],
                    r = -1;
                for (t && n.push({
                        type: "text",
                        value: "\n"
                    }); ++r < e.length;) r && n.push({
                    type: "text",
                    value: "\n"
                }), n.push(e[r]);
                return t && e.length > 0 && n.push({
                    type: "text",
                    value: "\n"
                }), n
            }

            function ni(e) {
                let t = 0,
                    n = e.charCodeAt(t);
                for (; 9 === n || 32 === n;) t++, n = e.charCodeAt(t);
                return e.slice(t)
            }

            function ns(e, t) {
                let n = function(e, t) {
                        let n = t || ne,
                            r = new Map,
                            i = new Map,
                            s = {
                                all: function(e) {
                                    let t = [];
                                    if ("children" in e) {
                                        let n = e.children,
                                            r = -1;
                                        for (; ++r < n.length;) {
                                            let i = s.one(n[r], e);
                                            if (i) {
                                                if (r && "break" === n[r - 1].type && (Array.isArray(i) || "text" !== i.type || (i.value = ni(i.value)), !Array.isArray(i) && "element" === i.type)) {
                                                    let e = i.children[0];
                                                    e && "text" === e.type && (e.value = ni(e.value))
                                                }
                                                Array.isArray(i) ? t.push(...i) : t.push(i)
                                            }
                                        }
                                    }
                                    return t
                                },
                                applyData: nn,
                                definitionById: r,
                                footnoteById: i,
                                footnoteCounts: new Map,
                                footnoteOrder: [],
                                handlers: {
                                    ...t8,
                                    ...n.handlers
                                },
                                one: function(e, t) {
                                    let n = e.type,
                                        r = s.handlers[n];
                                    if (t7.call(s.handlers, n) && r) return r(s, e, t);
                                    if (s.options.passThrough && s.options.passThrough.includes(n)) {
                                        if ("children" in e) {
                                            let {
                                                children: t,
                                                ...n
                                            } = e, r = tY(n);
                                            return r.children = s.all(e), r
                                        }
                                        return tY(e)
                                    }
                                    return (s.options.unknownHandler || function(e, t) {
                                        let n = t.data || {},
                                            r = "value" in t && !(t7.call(n, "hProperties") || t7.call(n, "hChildren")) ? {
                                                type: "text",
                                                value: t.value
                                            } : {
                                                type: "element",
                                                tagName: "div",
                                                properties: {},
                                                children: e.all(t)
                                            };
                                        return e.patch(t, r), e.applyData(t, r)
                                    })(s, e, t)
                                },
                                options: n,
                                patch: nt,
                                wrap: nr
                            };
                        return t4(e, function(e) {
                            if ("definition" === e.type || "footnoteDefinition" === e.type) {
                                let t = "definition" === e.type ? r : i,
                                    n = String(e.identifier).toUpperCase();
                                t.has(n) || t.set(n, e)
                            }
                        }), s
                    }(e, t),
                    r = n.one(e, void 0),
                    i = function(e) {
                        let t = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-",
                            n = e.options.footnoteBackContent || tJ,
                            r = e.options.footnoteBackLabel || tX,
                            i = e.options.footnoteLabel || "Footnotes",
                            s = e.options.footnoteLabelTagName || "h2",
                            o = e.options.footnoteLabelProperties || {
                                className: ["sr-only"]
                            },
                            a = [],
                            l = -1;
                        for (; ++l < e.footnoteOrder.length;) {
                            let i = e.footnoteById.get(e.footnoteOrder[l]);
                            if (!i) continue;
                            let s = e.all(i),
                                o = String(i.identifier).toUpperCase(),
                                u = tK(o.toLowerCase()),
                                c = 0,
                                d = [],
                                h = e.footnoteCounts.get(o);
                            for (; void 0 !== h && ++c <= h;) {
                                d.length > 0 && d.push({
                                    type: "text",
                                    value: " "
                                });
                                let e = "string" == typeof n ? n : n(l, c);
                                "string" == typeof e && (e = {
                                    type: "text",
                                    value: e
                                }), d.push({
                                    type: "element",
                                    tagName: "a",
                                    properties: {
                                        href: "#" + t + "fnref-" + u + (c > 1 ? "-" + c : ""),
                                        dataFootnoteBackref: "",
                                        ariaLabel: "string" == typeof r ? r : r(l, c),
                                        className: ["data-footnote-backref"]
                                    },
                                    children: Array.isArray(e) ? e : [e]
                                })
                            }
                            let p = s[s.length - 1];
                            if (p && "element" === p.type && "p" === p.tagName) {
                                let e = p.children[p.children.length - 1];
                                e && "text" === e.type ? e.value += " " : p.children.push({
                                    type: "text",
                                    value: " "
                                }), p.children.push(...d)
                            } else s.push(...d);
                            let f = {
                                type: "element",
                                tagName: "li",
                                properties: {
                                    id: t + "fn-" + u
                                },
                                children: e.wrap(s, !0)
                            };
                            e.patch(i, f), a.push(f)
                        }
                        if (0 !== a.length) return {
                            type: "element",
                            tagName: "section",
                            properties: {
                                dataFootnotes: !0,
                                className: ["footnotes"]
                            },
                            children: [{
                                type: "element",
                                tagName: s,
                                properties: {
                                    ...tY(o),
                                    id: "footnote-label"
                                },
                                children: [{
                                    type: "text",
                                    value: i
                                }]
                            }, {
                                type: "text",
                                value: "\n"
                            }, {
                                type: "element",
                                tagName: "ol",
                                properties: {},
                                children: e.wrap(a, !0)
                            }, {
                                type: "text",
                                value: "\n"
                            }]
                        }
                    }(n),
                    s = Array.isArray(r) ? {
                        type: "root",
                        children: r
                    } : r || {
                        type: "root",
                        children: []
                    };
                return i && s.children.push({
                    type: "text",
                    value: "\n"
                }, i), s
            }

            function no(e, t) {
                return e && "run" in e ? async function(n, r) {
                    let i = ns(n, {
                        file: r,
                        ...t
                    });
                    await e.run(i, r)
                }: function(n, r) {
                    return ns(n, {
                        file: r,
                        ...e || t
                    })
                }
            }

            function na(e) {
                if (e) throw e
            }
            var nl = n(92849);

            function nu(e) {
                if ("object" != typeof e || null === e) return !1;
                let t = Object.getPrototypeOf(e);
                return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
            }
            let nc = {
                basename: function(e, t) {
                    let n;
                    if (void 0 !== t && "string" != typeof t) throw TypeError('"ext" argument must be a string');
                    nd(e);
                    let r = 0,
                        i = -1,
                        s = e.length;
                    if (void 0 === t || 0 === t.length || t.length > e.length) {
                        for (; s--;)
                            if (47 === e.codePointAt(s)) {
                                if (n) {
                                    r = s + 1;
                                    break
                                }
                            } else i < 0 && (n = !0, i = s + 1);
                        return i < 0 ? "" : e.slice(r, i)
                    }
                    if (t === e) return "";
                    let o = -1,
                        a = t.length - 1;
                    for (; s--;)
                        if (47 === e.codePointAt(s)) {
                            if (n) {
                                r = s + 1;
                                break
                            }
                        } else o < 0 && (n = !0, o = s + 1), a > -1 && (e.codePointAt(s) === t.codePointAt(a--) ? a < 0 && (i = s) : (a = -1, i = o));
                    return r === i ? i = o : i < 0 && (i = e.length), e.slice(r, i)
                },
                dirname: function(e) {
                    let t;
                    if (nd(e), 0 === e.length) return ".";
                    let n = -1,
                        r = e.length;
                    for (; --r;)
                        if (47 === e.codePointAt(r)) {
                            if (t) {
                                n = r;
                                break
                            }
                        } else t || (t = !0);
                    return n < 0 ? 47 === e.codePointAt(0) ? "/" : "." : 1 === n && 47 === e.codePointAt(0) ? "//" : e.slice(0, n)
                },
                extname: function(e) {
                    let t;
                    nd(e);
                    let n = e.length,
                        r = -1,
                        i = 0,
                        s = -1,
                        o = 0;
                    for (; n--;) {
                        let a = e.codePointAt(n);
                        if (47 === a) {
                            if (t) {
                                i = n + 1;
                                break
                            }
                            continue
                        }
                        r < 0 && (t = !0, r = n + 1), 46 === a ? s < 0 ? s = n : 1 !== o && (o = 1) : s > -1 && (o = -1)
                    }
                    return s < 0 || r < 0 || 0 === o || 1 === o && s === r - 1 && s === i + 1 ? "" : e.slice(s, r)
                },
                join: function(...e) {
                    let t, n = -1;
                    for (; ++n < e.length;) nd(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
                    return void 0 === t ? "." : function(e) {
                        nd(e);
                        let t = 47 === e.codePointAt(0),
                            n = function(e, t) {
                                let n, r, i = "",
                                    s = 0,
                                    o = -1,
                                    a = 0,
                                    l = -1;
                                for (; ++l <= e.length;) {
                                    if (l < e.length) n = e.codePointAt(l);
                                    else if (47 === n) break;
                                    else n = 47;
                                    if (47 === n) {
                                        if (o === l - 1 || 1 === a);
                                        else if (o !== l - 1 && 2 === a) {
                                            if (i.length < 2 || 2 !== s || 46 !== i.codePointAt(i.length - 1) || 46 !== i.codePointAt(i.length - 2)) {
                                                if (i.length > 2) {
                                                    if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                                        r < 0 ? (i = "", s = 0) : s = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"), o = l, a = 0;
                                                        continue
                                                    }
                                                } else if (i.length > 0) {
                                                    i = "", s = 0, o = l, a = 0;
                                                    continue
                                                }
                                            }
                                            t && (i = i.length > 0 ? i + "/.." : "..", s = 2)
                                        } else i.length > 0 ? i += "/" + e.slice(o + 1, l) : i = e.slice(o + 1, l), s = l - o - 1;
                                        o = l, a = 0
                                    } else 46 === n && a > -1 ? a++ : a = -1
                                }
                                return i
                            }(e, !t);
                        return 0 !== n.length || t || (n = "."), n.length > 0 && 47 === e.codePointAt(e.length - 1) && (n += "/"), t ? "/" + n : n
                    }(t)
                },
                sep: "/"
            };

            function nd(e) {
                if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
            }
            let nh = {
                cwd: function() {
                    return "/"
                }
            };

            function np(e) {
                return !!(null !== e && "object" == typeof e && "href" in e && e.href && "protocol" in e && e.protocol && void 0 === e.auth)
            }
            let nf = ["history", "path", "basename", "stem", "extname", "dirname"];
            class nm {
                constructor(e) {
                    let t, n;
                    t = e ? np(e) ? {
                        path: e
                    } : "string" == typeof e || function(e) {
                        return !!(e && "object" == typeof e && "byteLength" in e && "byteOffset" in e)
                    }(e) ? {
                        value: e
                    } : e : {}, this.cwd = "cwd" in t ? "" : nh.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
                    let r = -1;
                    for (; ++r < nf.length;) {
                        let e = nf[r];
                        e in t && void 0 !== t[e] && null !== t[e] && (this[e] = "history" === e ? [...t[e]] : t[e])
                    }
                    for (n in t) nf.includes(n) || (this[n] = t[n])
                }
                get basename() {
                    return "string" == typeof this.path ? nc.basename(this.path) : void 0
                }
                set basename(e) {
                    ny(e, "basename"), ng(e, "basename"), this.path = nc.join(this.dirname || "", e)
                }
                get dirname() {
                    return "string" == typeof this.path ? nc.dirname(this.path) : void 0
                }
                set dirname(e) {
                    nv(this.basename, "dirname"), this.path = nc.join(e || "", this.basename)
                }
                get extname() {
                    return "string" == typeof this.path ? nc.extname(this.path) : void 0
                }
                set extname(e) {
                    if (ng(e, "extname"), nv(this.dirname, "extname"), e) {
                        if (46 !== e.codePointAt(0)) throw Error("`extname` must start with `.`");
                        if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots")
                    }
                    this.path = nc.join(this.dirname, this.stem + (e || ""))
                }
                get path() {
                    return this.history[this.history.length - 1]
                }
                set path(e) {
                    np(e) && (e = function(e) {
                        if ("string" == typeof e) e = new URL(e);
                        else if (!np(e)) {
                            let t = TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
                            throw t.code = "ERR_INVALID_ARG_TYPE", t
                        }
                        if ("file:" !== e.protocol) {
                            let e = TypeError("The URL must be of scheme file");
                            throw e.code = "ERR_INVALID_URL_SCHEME", e
                        }
                        return function(e) {
                            if ("" !== e.hostname) {
                                let e = TypeError('File URL host must be "localhost" or empty on darwin');
                                throw e.code = "ERR_INVALID_FILE_URL_HOST", e
                            }
                            let t = e.pathname,
                                n = -1;
                            for (; ++n < t.length;)
                                if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
                                    let e = t.codePointAt(n + 2);
                                    if (70 === e || 102 === e) {
                                        let e = TypeError("File URL path must not include encoded / characters");
                                        throw e.code = "ERR_INVALID_FILE_URL_PATH", e
                                    }
                                } return decodeURIComponent(t)
                        }(e)
                    }(e)), ny(e, "path"), this.path !== e && this.history.push(e)
                }
                get stem() {
                    return "string" == typeof this.path ? nc.basename(this.path, this.extname) : void 0
                }
                set stem(e) {
                    ny(e, "stem"), ng(e, "stem"), this.path = nc.join(this.dirname || "", e + (this.extname || ""))
                }
                fail(e, t, n) {
                    let r = this.message(e, t, n);
                    throw r.fatal = !0, r
                }
                info(e, t, n) {
                    let r = this.message(e, t, n);
                    return r.fatal = void 0, r
                }
                message(e, t, n) {
                    let r = new X(e, t, n);
                    return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r
                }
                toString(e) {
                    return void 0 === this.value ? "" : "string" == typeof this.value ? this.value : new TextDecoder(e || void 0).decode(this.value)
                }
            }

            function ng(e, t) {
                if (e && e.includes(nc.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + nc.sep + "`")
            }

            function ny(e, t) {
                if (!e) throw Error("`" + t + "` cannot be empty")
            }

            function nv(e, t) {
                if (!e) throw Error("Setting `" + t + "` requires `path` to be set too")
            }
            let nb = function(e) {
                    let t = this.constructor.prototype,
                        n = t[e],
                        r = function() {
                            return n.apply(r, arguments)
                        };
                    return Object.setPrototypeOf(r, t), r
                },
                nA = {}.hasOwnProperty;
            class nw extends nb {
                constructor() {
                    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = function() {
                        let e = [],
                            t = {
                                run: function(...t) {
                                    let n = -1,
                                        r = t.pop();
                                    if ("function" != typeof r) throw TypeError("Expected function as last argument, not " + r);
                                    (function i(s, ...o) {
                                        let a = e[++n],
                                            l = -1;
                                        if (s) {
                                            r(s);
                                            return
                                        }
                                        for (; ++l < t.length;)(null === o[l] || void 0 === o[l]) && (o[l] = t[l]);
                                        t = o, a ? (function(e, t) {
                                            let n;
                                            return function(...t) {
                                                let s;
                                                let o = e.length > t.length;
                                                o && t.push(r);
                                                try {
                                                    s = e.apply(this, t)
                                                } catch (e) {
                                                    if (o && n) throw e;
                                                    return r(e)
                                                }
                                                o || (s && s.then && "function" == typeof s.then ? s.then(i, r) : s instanceof Error ? r(s) : i(s))
                                            };

                                            function r(e, ...i) {
                                                n || (n = !0, t(e, ...i))
                                            }

                                            function i(e) {
                                                r(null, e)
                                            }
                                        })(a, i)(...o) : r(null, ...o)
                                    })(null, ...t)
                                },
                                use: function(n) {
                                    if ("function" != typeof n) throw TypeError("Expected `middelware` to be a function, not " + n);
                                    return e.push(n), t
                                }
                            };
                        return t
                    }()
                }
                copy() {
                    let e = new nw,
                        t = -1;
                    for (; ++t < this.attachers.length;) {
                        let n = this.attachers[t];
                        e.use(...n)
                    }
                    return e.data(nl(!0, {}, this.namespace)), e
                }
                data(e, t) {
                    return "string" == typeof e ? 2 == arguments.length ? (nE("data", this.frozen), this.namespace[e] = t, this) : nA.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (nE("data", this.frozen), this.namespace = e, this) : this.namespace
                }
                freeze() {
                    if (this.frozen) return this;
                    for (; ++this.freezeIndex < this.attachers.length;) {
                        let [e, ...t] = this.attachers[this.freezeIndex];
                        if (!1 === t[0]) continue;
                        !0 === t[0] && (t[0] = void 0);
                        let n = e.call(this, ...t);
                        "function" == typeof n && this.transformers.use(n)
                    }
                    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this
                }
                parse(e) {
                    this.freeze();
                    let t = nP(e),
                        n = this.parser || this.Parser;
                    return nS("parse", n), n(String(t), t)
                }
                process(e, t) {
                    let n = this;
                    return this.freeze(), nS("process", this.parser || this.Parser), nk("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);

                    function r(r, i) {
                        let s = nP(e),
                            o = n.parse(s);

                        function a(e, n) {
                            e || !n ? i(e) : r ? r(n) : t(void 0, n)
                        }
                        n.run(o, s, function(e, t, r) {
                            if (e || !t || !r) return a(e);
                            let i = n.stringify(t, r);
                            "string" == typeof i || i && "object" == typeof i && "byteLength" in i && "byteOffset" in i ? r.value = i : r.result = i, a(e, r)
                        })
                    }
                }
                processSync(e) {
                    let t, n = !1;
                    return this.freeze(), nS("processSync", this.parser || this.Parser), nk("processSync", this.compiler || this.Compiler), this.process(e, function(e, r) {
                        n = !0, na(e), t = r
                    }), nC("processSync", "process", n), t
                }
                run(e, t, n) {
                    nT(e), this.freeze();
                    let r = this.transformers;
                    return n || "function" != typeof t || (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);

                    function i(i, s) {
                        let o = nP(t);
                        r.run(e, o, function(t, r, o) {
                            let a = r || e;
                            t ? s(t) : i ? i(a) : n(void 0, a, o)
                        })
                    }
                }
                runSync(e, t) {
                    let n, r = !1;
                    return this.run(e, t, function(e, t) {
                        na(e), n = t, r = !0
                    }), nC("runSync", "run", r), n
                }
                stringify(e, t) {
                    this.freeze();
                    let n = nP(t),
                        r = this.compiler || this.Compiler;
                    return nk("stringify", r), nT(e), r(e, n)
                }
                use(e, ...t) {
                    let n = this.attachers,
                        r = this.namespace;
                    if (nE("use", this.frozen), null == e);
                    else if ("function" == typeof e) o(e, t);
                    else if ("object" == typeof e) Array.isArray(e) ? s(e) : i(e);
                    else throw TypeError("Expected usable value, not `" + e + "`");
                    return this;

                    function i(e) {
                        if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
                        s(e.plugins), e.settings && (r.settings = nl(!0, r.settings, e.settings))
                    }

                    function s(e) {
                        let t = -1;
                        if (null == e);
                        else if (Array.isArray(e))
                            for (; ++t < e.length;) ! function(e) {
                                if ("function" == typeof e) o(e, []);
                                else if ("object" == typeof e) {
                                    if (Array.isArray(e)) {
                                        let [t, ...n] = e;
                                        o(t, n)
                                    } else i(e)
                                } else throw TypeError("Expected usable value, not `" + e + "`")
                            }(e[t]);
                        else throw TypeError("Expected a list of plugins, not `" + e + "`")
                    }

                    function o(e, t) {
                        let r = -1,
                            i = -1;
                        for (; ++r < n.length;)
                            if (n[r][0] === e) {
                                i = r;
                                break
                            } if (-1 === i) n.push([e, ...t]);
                        else if (t.length > 0) {
                            let [r, ...s] = t, o = n[i][1];
                            nu(o) && nu(r) && (r = nl(!0, o, r)), n[i] = [e, r, ...s]
                        }
                    }
                }
            }
            let nx = new nw().freeze();

            function nS(e, t) {
                if ("function" != typeof t) throw TypeError("Cannot `" + e + "` without `parser`")
            }

            function nk(e, t) {
                if ("function" != typeof t) throw TypeError("Cannot `" + e + "` without `compiler`")
            }

            function nE(e, t) {
                if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
            }

            function nT(e) {
                if (!nu(e) || "string" != typeof e.type) throw TypeError("Expected node, got `" + e + "`")
            }

            function nC(e, t, n) {
                if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead")
            }

            function nP(e) {
                return e && "object" == typeof e && "message" in e && "messages" in e ? e : new nm(e)
            }
            let nO = [],
                nM = {
                    allowDangerousHtml: !0
                },
                nR = /^(https?|ircs?|mailto|xmpp)$/i,
                nI = [{
                    from: "astPlugins",
                    id: "remove-buggy-html-in-markdown-parser"
                }, {
                    from: "allowDangerousHtml",
                    id: "remove-buggy-html-in-markdown-parser"
                }, {
                    from: "allowNode",
                    id: "replace-allownode-allowedtypes-and-disallowedtypes",
                    to: "allowElement"
                }, {
                    from: "allowedTypes",
                    id: "replace-allownode-allowedtypes-and-disallowedtypes",
                    to: "allowedElements"
                }, {
                    from: "className",
                    id: "remove-classname"
                }, {
                    from: "disallowedTypes",
                    id: "replace-allownode-allowedtypes-and-disallowedtypes",
                    to: "disallowedElements"
                }, {
                    from: "escapeHtml",
                    id: "remove-buggy-html-in-markdown-parser"
                }, {
                    from: "includeElementIndex",
                    id: "#remove-includeelementindex"
                }, {
                    from: "includeNodeIndex",
                    id: "change-includenodeindex-to-includeelementindex"
                }, {
                    from: "linkTarget",
                    id: "remove-linktarget"
                }, {
                    from: "plugins",
                    id: "change-plugins-to-remarkplugins",
                    to: "remarkPlugins"
                }, {
                    from: "rawSourcePos",
                    id: "#remove-rawsourcepos"
                }, {
                    from: "renderers",
                    id: "change-renderers-to-components",
                    to: "components"
                }, {
                    from: "source",
                    id: "change-source-to-children",
                    to: "children"
                }, {
                    from: "sourcePos",
                    id: "#remove-sourcepos"
                }, {
                    from: "transformImageUri",
                    id: "#add-urltransform",
                    to: "urlTransform"
                }, {
                    from: "transformLinkUri",
                    id: "#add-urltransform",
                    to: "urlTransform"
                }];

            function nD(e) {
                let t = function(e) {
                        let t = e.rehypePlugins || nO,
                            n = e.remarkPlugins || nO,
                            r = e.remarkRehypeOptions ? {
                                ...e.remarkRehypeOptions,
                                ...nM
                            } : nM;
                        return nx().use(tN).use(n).use(no, r).use(t)
                    }(e),
                    n = function(e) {
                        let t = e.children || "",
                            n = new nm;
                        return "string" == typeof t && (n.value = t), n
                    }(e);
                return function(e, t) {
                    let n = t.allowedElements,
                        r = t.allowElement,
                        i = t.components,
                        s = t.disallowedElements,
                        o = t.skipHtml,
                        a = t.unwrapDisallowed,
                        l = t.urlTransform || nL;
                    for (let e of nI) Object.hasOwn(t, e.from) && (e.from, e.to && e.to, e.id);
                    return t4(e, function(e, t, i) {
                            if ("raw" === e.type && i && "number" == typeof t) return o ? i.children.splice(t, 1) : i.children[t] = {
                                type: "text",
                                value: e.value
                            }, t;
                            if ("element" === e.type) {
                                let t;
                                for (t in ef)
                                    if (Object.hasOwn(ef, t) && Object.hasOwn(e.properties, t)) {
                                        let n = e.properties[t],
                                            r = ef[t];
                                        (null === r || r.includes(e.tagName)) && (e.properties[t] = l(String(n || ""), t, e))
                                    }
                            }
                            if ("element" === e.type) {
                                let o = n ? !n.includes(e.tagName) : !!s && s.includes(e.tagName);
                                if (!o && r && "number" == typeof t && (o = !r(e, t, i)), o && i && "number" == typeof t) return a && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t
                            }
                        }),
                        function(e, t) {
                            var n, r, i;
                            let s;
                            if (!t || void 0 === t.Fragment) throw TypeError("Expected `Fragment` in options");
                            let o = t.filePath || void 0;
                            if (t.development) {
                                if ("function" != typeof t.jsxDEV) throw TypeError("Expected `jsxDEV` in options when `development: true`");
                                n = t.jsxDEV, s = function(e, t, r, i) {
                                    let s = Array.isArray(r.children),
                                        a = H(e);
                                    return n(t, r, i, s, {
                                        columnNumber: a ? a.column - 1 : void 0,
                                        fileName: o,
                                        lineNumber: a ? a.line : void 0
                                    }, void 0)
                                }
                            } else {
                                if ("function" != typeof t.jsx) throw TypeError("Expected `jsx` in production options");
                                if ("function" != typeof t.jsxs) throw TypeError("Expected `jsxs` in production options");
                                r = t.jsx, i = t.jsxs, s = function(e, t, n, s) {
                                    let o = Array.isArray(n.children) ? i : r;
                                    return s ? o(t, n, s) : o(t, n)
                                }
                            }
                            let a = {
                                    Fragment: t.Fragment,
                                    ancestors: [],
                                    components: t.components || {},
                                    create: s,
                                    elementAttributeNameCase: t.elementAttributeNameCase || "react",
                                    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
                                    filePath: o,
                                    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
                                    passKeys: !1 !== t.passKeys,
                                    passNode: t.passNode || !1,
                                    schema: "svg" === t.space ? _ : j,
                                    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
                                    tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle
                                },
                                l = eo(a, e, void 0);
                            return l && "string" != typeof l ? l : a.create(e, a.Fragment, {
                                children: l || void 0
                            }, void 0)
                        }(e, {
                            Fragment: em.Fragment,
                            components: i,
                            ignoreInvalidStyle: !0,
                            jsx: em.jsx,
                            jsxs: em.jsxs,
                            passKeys: !0,
                            passNode: !0
                        })
                }(t.runSync(t.parse(n), n), e)
            }

            function nL(e) {
                let t = e.indexOf(":"),
                    n = e.indexOf("?"),
                    r = e.indexOf("#"),
                    i = e.indexOf("/");
                return -1 === t || -1 !== i && t > i || -1 !== n && t > n || -1 !== r && t > r || nR.test(e.slice(0, t)) ? e : ""
            }
        },
        74712: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZD: () => c,
                _R: () => u,
                dK: () => s
            }), n(12375);
            var r = n(17044);

            function i(e) {
                return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function s(e) {
                let t, {
                        swiper: n,
                        extendParams: s,
                        on: o,
                        emit: a
                    } = e,
                    l = "swiper-pagination";
                s({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${l}-bullet`,
                        bulletActiveClass: `${l}-bullet-active`,
                        modifierClass: `${l}-`,
                        currentClass: `${l}-current`,
                        totalClass: `${l}-total`,
                        hiddenClass: `${l}-hidden`,
                        progressbarFillClass: `${l}-progressbar-fill`,
                        progressbarOppositeClass: `${l}-progressbar-opposite`,
                        clickableClass: `${l}-clickable`,
                        lockClass: `${l}-lock`,
                        horizontalClass: `${l}-horizontal`,
                        verticalClass: `${l}-vertical`,
                        paginationDisabledClass: `${l}-disabled`
                    }
                }), n.pagination = {
                    el: null,
                    bullets: []
                };
                let u = 0;

                function c() {
                    return !n.params.pagination.el || !n.pagination.el || Array.isArray(n.pagination.el) && 0 === n.pagination.el.length
                }

                function d(e, t) {
                    let {
                        bulletActiveClass: r
                    } = n.params.pagination;
                    e && (e = e[`${"prev"===t?"previous":"next"}ElementSibling`]) && (e.classList.add(`${r}-${t}`), (e = e[`${"prev"===t?"previous":"next"}ElementSibling`]) && e.classList.add(`${r}-${t}-${t}`))
                }

                function h(e) {
                    let t = e.target.closest(i(n.params.pagination.bulletClass));
                    if (!t) return;
                    e.preventDefault();
                    let s = (0, r.h)(t) * n.params.slidesPerGroup;
                    if (n.params.loop) {
                        var o, a, l;
                        if (n.realIndex === s) return;
                        let e = (o = n.realIndex, a = s, (o %= l = n.slides.length, (a %= l) === o + 1) ? "next" : a === o - 1 ? "previous" : void 0);
                        "next" === e ? n.slideNext() : "previous" === e ? n.slidePrev() : n.slideToLoop(s)
                    } else n.slideTo(s)
                }

                function p() {
                    let e, s;
                    let o = n.rtl,
                        l = n.params.pagination;
                    if (c()) return;
                    let h = n.pagination.el;
                    h = (0, r.m)(h);
                    let p = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : n.slides.length,
                        f = n.params.loop ? Math.ceil(p / n.params.slidesPerGroup) : n.snapGrid.length;
                    if (n.params.loop ? (s = n.previousRealIndex || 0, e = n.params.slidesPerGroup > 1 ? Math.floor(n.realIndex / n.params.slidesPerGroup) : n.realIndex) : void 0 !== n.snapIndex ? (e = n.snapIndex, s = n.previousSnapIndex) : (s = n.previousIndex || 0, e = n.activeIndex || 0), "bullets" === l.type && n.pagination.bullets && n.pagination.bullets.length > 0) {
                        let i, a, c;
                        let p = n.pagination.bullets;
                        if (l.dynamicBullets && (t = (0, r.f)(p[0], n.isHorizontal() ? "width" : "height", !0), h.forEach(e => {
                                e.style[n.isHorizontal() ? "width" : "height"] = `${t*(l.dynamicMainBullets+4)}px`
                            }), l.dynamicMainBullets > 1 && void 0 !== s && ((u += e - (s || 0)) > l.dynamicMainBullets - 1 ? u = l.dynamicMainBullets - 1 : u < 0 && (u = 0)), c = ((a = (i = Math.max(e - u, 0)) + (Math.min(p.length, l.dynamicMainBullets) - 1)) + i) / 2), p.forEach(e => {
                                let t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${l.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                                e.classList.remove(...t)
                            }), h.length > 1) p.forEach(t => {
                            let s = (0, r.h)(t);
                            s === e ? t.classList.add(...l.bulletActiveClass.split(" ")) : n.isElement && t.setAttribute("part", "bullet"), l.dynamicBullets && (s >= i && s <= a && t.classList.add(...`${l.bulletActiveClass}-main`.split(" ")), s === i && d(t, "prev"), s === a && d(t, "next"))
                        });
                        else {
                            let t = p[e];
                            if (t && t.classList.add(...l.bulletActiveClass.split(" ")), n.isElement && p.forEach((t, n) => {
                                    t.setAttribute("part", n === e ? "bullet-active" : "bullet")
                                }), l.dynamicBullets) {
                                let e = p[i],
                                    t = p[a];
                                for (let e = i; e <= a; e += 1) p[e] && p[e].classList.add(...`${l.bulletActiveClass}-main`.split(" "));
                                d(e, "prev"), d(t, "next")
                            }
                        }
                        if (l.dynamicBullets) {
                            let e = Math.min(p.length, l.dynamicMainBullets + 4),
                                r = (t * e - t) / 2 - c * t,
                                i = o ? "right" : "left";
                            p.forEach(e => {
                                e.style[n.isHorizontal() ? i : "top"] = `${r}px`
                            })
                        }
                    }
                    h.forEach((t, r) => {
                        if ("fraction" === l.type && (t.querySelectorAll(i(l.currentClass)).forEach(t => {
                                t.textContent = l.formatFractionCurrent(e + 1)
                            }), t.querySelectorAll(i(l.totalClass)).forEach(e => {
                                e.textContent = l.formatFractionTotal(f)
                            })), "progressbar" === l.type) {
                            let r;
                            r = l.progressbarOpposite ? n.isHorizontal() ? "vertical" : "horizontal" : n.isHorizontal() ? "horizontal" : "vertical";
                            let s = (e + 1) / f,
                                o = 1,
                                a = 1;
                            "horizontal" === r ? o = s : a = s, t.querySelectorAll(i(l.progressbarFillClass)).forEach(e => {
                                e.style.transform = `translate3d(0,0,0) scaleX(${o}) scaleY(${a})`, e.style.transitionDuration = `${n.params.speed}ms`
                            })
                        }
                        "custom" === l.type && l.renderCustom ? (t.innerHTML = l.renderCustom(n, e + 1, f), 0 === r && a("paginationRender", t)) : (0 === r && a("paginationRender", t), a("paginationUpdate", t)), n.params.watchOverflow && n.enabled && t.classList[n.isLocked ? "add" : "remove"](l.lockClass)
                    })
                }

                function f() {
                    let e = n.params.pagination;
                    if (c()) return;
                    let t = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : n.grid && n.params.grid.rows > 1 ? n.slides.length / Math.ceil(n.params.grid.rows) : n.slides.length,
                        s = n.pagination.el;
                    s = (0, r.m)(s);
                    let o = "";
                    if ("bullets" === e.type) {
                        let r = n.params.loop ? Math.ceil(t / n.params.slidesPerGroup) : n.snapGrid.length;
                        n.params.freeMode && n.params.freeMode.enabled && r > t && (r = t);
                        for (let t = 0; t < r; t += 1) e.renderBullet ? o += e.renderBullet.call(n, t, e.bulletClass) : o += `<${e.bulletElement} ${n.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
                    }
                    "fraction" === e.type && (o = e.renderFraction ? e.renderFraction.call(n, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (o = e.renderProgressbar ? e.renderProgressbar.call(n, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), n.pagination.bullets = [], s.forEach(t => {
                        "custom" !== e.type && (t.innerHTML = o || ""), "bullets" === e.type && n.pagination.bullets.push(...t.querySelectorAll(i(e.bulletClass)))
                    }), "custom" !== e.type && a("paginationRender", s[0])
                }

                function m() {
                    var e, t, i;
                    let s;
                    n.params.pagination = (e = n.originalParams.pagination, t = n.params.pagination, i = {
                        el: "swiper-pagination"
                    }, n.params.createElements && Object.keys(i).forEach(s => {
                        if (!t[s] && !0 === t.auto) {
                            let o = (0, r.e)(n.el, `.${i[s]}`)[0];
                            o || ((o = (0, r.c)("div", i[s])).className = i[s], n.el.append(o)), t[s] = o, e[s] = o
                        }
                    }), t);
                    let o = n.params.pagination;
                    o.el && ("string" == typeof o.el && n.isElement && (s = n.el.querySelector(o.el)), s || "string" != typeof o.el || (s = [...document.querySelectorAll(o.el)]), s || (s = o.el), s && 0 !== s.length && (n.params.uniqueNavElements && "string" == typeof o.el && Array.isArray(s) && s.length > 1 && (s = [...n.el.querySelectorAll(o.el)]).length > 1 && (s = s.find(e => (0, r.a)(e, ".swiper")[0] === n.el)), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(n.pagination, {
                        el: s
                    }), (s = (0, r.m)(s)).forEach(e => {
                        "bullets" === o.type && o.clickable && e.classList.add(...(o.clickableClass || "").split(" ")), e.classList.add(o.modifierClass + o.type), e.classList.add(n.isHorizontal() ? o.horizontalClass : o.verticalClass), "bullets" === o.type && o.dynamicBullets && (e.classList.add(`${o.modifierClass}${o.type}-dynamic`), u = 0, o.dynamicMainBullets < 1 && (o.dynamicMainBullets = 1)), "progressbar" === o.type && o.progressbarOpposite && e.classList.add(o.progressbarOppositeClass), o.clickable && e.addEventListener("click", h), n.enabled || e.classList.add(o.lockClass)
                    })))
                }

                function g() {
                    let e = n.params.pagination;
                    if (c()) return;
                    let t = n.pagination.el;
                    t && (t = (0, r.m)(t)).forEach(t => {
                        t.classList.remove(e.hiddenClass), t.classList.remove(e.modifierClass + e.type), t.classList.remove(n.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (t.classList.remove(...(e.clickableClass || "").split(" ")), t.removeEventListener("click", h))
                    }), n.pagination.bullets && n.pagination.bullets.forEach(t => t.classList.remove(...e.bulletActiveClass.split(" ")))
                }
                o("changeDirection", () => {
                    if (!n.pagination || !n.pagination.el) return;
                    let e = n.params.pagination,
                        {
                            el: t
                        } = n.pagination;
                    (t = (0, r.m)(t)).forEach(t => {
                        t.classList.remove(e.horizontalClass, e.verticalClass), t.classList.add(n.isHorizontal() ? e.horizontalClass : e.verticalClass)
                    })
                }), o("init", () => {
                    !1 === n.params.pagination.enabled ? y() : (m(), f(), p())
                }), o("activeIndexChange", () => {
                    void 0 === n.snapIndex && p()
                }), o("snapIndexChange", () => {
                    p()
                }), o("snapGridLengthChange", () => {
                    f(), p()
                }), o("destroy", () => {
                    g()
                }), o("enable disable", () => {
                    let {
                        el: e
                    } = n.pagination;
                    e && (e = (0, r.m)(e)).forEach(e => e.classList[n.enabled ? "remove" : "add"](n.params.pagination.lockClass))
                }), o("lock unlock", () => {
                    p()
                }), o("click", (e, t) => {
                    let i = t.target,
                        s = (0, r.m)(n.pagination.el);
                    if (n.params.pagination.el && n.params.pagination.hideOnClick && s && s.length > 0 && !i.classList.contains(n.params.pagination.bulletClass)) {
                        if (n.navigation && (n.navigation.nextEl && i === n.navigation.nextEl || n.navigation.prevEl && i === n.navigation.prevEl)) return;
                        !0 === s[0].classList.contains(n.params.pagination.hiddenClass) ? a("paginationShow") : a("paginationHide"), s.forEach(e => e.classList.toggle(n.params.pagination.hiddenClass))
                    }
                });
                let y = () => {
                    n.el.classList.add(n.params.pagination.paginationDisabledClass);
                    let {
                        el: e
                    } = n.pagination;
                    e && (e = (0, r.m)(e)).forEach(e => e.classList.add(n.params.pagination.paginationDisabledClass)), g()
                };
                Object.assign(n.pagination, {
                    enable: () => {
                        n.el.classList.remove(n.params.pagination.paginationDisabledClass);
                        let {
                            el: e
                        } = n.pagination;
                        e && (e = (0, r.m)(e)).forEach(e => e.classList.remove(n.params.pagination.paginationDisabledClass)), m(), f(), p()
                    },
                    disable: y,
                    render: f,
                    update: p,
                    init: m,
                    destroy: g
                })
            }

            function o(e) {
                let t;
                let {
                    effect: n,
                    swiper: r,
                    on: i,
                    setTranslate: s,
                    setTransition: o,
                    overwriteParams: a,
                    perspective: l,
                    recreateShadows: u,
                    getEffectParams: c
                } = e;
                i("beforeInit", () => {
                    if (r.params.effect !== n) return;
                    r.classNames.push(`${r.params.containerModifierClass}${n}`), l && l() && r.classNames.push(`${r.params.containerModifierClass}3d`);
                    let e = a ? a() : {};
                    Object.assign(r.params, e), Object.assign(r.originalParams, e)
                }), i("setTranslate", () => {
                    r.params.effect === n && s()
                }), i("setTransition", (e, t) => {
                    r.params.effect === n && o(t)
                }), i("transitionEnd", () => {
                    r.params.effect === n && u && c && c().slideShadows && (r.slides.forEach(e => {
                        e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e => e.remove())
                    }), u())
                }), i("virtualUpdate", () => {
                    r.params.effect === n && (r.slides.length || (t = !0), requestAnimationFrame(() => {
                        t && r.slides && r.slides.length && (s(), t = !1)
                    }))
                })
            }

            function a(e, t) {
                let n = (0, r.g)(t);
                return n !== t && (n.style.backfaceVisibility = "hidden", n.style["-webkit-backface-visibility"] = "hidden"), n
            }

            function l(e) {
                let {
                    swiper: t,
                    duration: n,
                    transformElements: i,
                    allSlides: s
                } = e, {
                    activeIndex: o
                } = t, a = e => e.parentElement ? e.parentElement : t.slides.find(t => t.shadowRoot && t.shadowRoot === e.parentNode);
                if (t.params.virtualTranslate && 0 !== n) {
                    let e = !1;
                    (s ? i : i.filter(e => {
                        let n = e.classList.contains("swiper-slide-transform") ? a(e) : e;
                        return t.getSlideIndex(n) === o
                    })).forEach(n => {
                        (0, r.k)(n, () => {
                            if (e || !t || t.destroyed) return;
                            e = !0, t.animating = !1;
                            let n = new window.CustomEvent("transitionend", {
                                bubbles: !0,
                                cancelable: !0
                            });
                            t.wrapperEl.dispatchEvent(n)
                        })
                    })
                }
            }

            function u(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i
                } = e;
                n({
                    fadeEffect: {
                        crossFade: !1
                    }
                }), o({
                    effect: "fade",
                    swiper: t,
                    on: i,
                    setTranslate: () => {
                        let {
                            slides: e
                        } = t, n = t.params.fadeEffect;
                        for (let r = 0; r < e.length; r += 1) {
                            let e = t.slides[r],
                                i = -e.swiperSlideOffset;
                            t.params.virtualTranslate || (i -= t.translate);
                            let s = 0;
                            t.isHorizontal() || (s = i, i = 0);
                            let o = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
                                l = a(n, e);
                            l.style.opacity = o, l.style.transform = `translate3d(${i}px, ${s}px, 0px)`
                        }
                    },
                    setTransition: e => {
                        let n = t.slides.map(e => (0, r.g)(e));
                        n.forEach(t => {
                            t.style.transitionDuration = `${e}ms`
                        }), l({
                            swiper: t,
                            duration: e,
                            transformElements: n,
                            allSlides: !0
                        })
                    },
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !t.params.cssMode
                    })
                })
            }

            function c(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i
                } = e;
                n({
                    cardsEffect: {
                        slideShadows: !0,
                        rotate: !0,
                        perSlideRotate: 2,
                        perSlideOffset: 8
                    }
                }), o({
                    effect: "cards",
                    swiper: t,
                    on: i,
                    setTranslate: () => {
                        let {
                            slides: e,
                            activeIndex: n,
                            rtlTranslate: i
                        } = t, s = t.params.cardsEffect, {
                            startTranslate: o,
                            isTouched: l
                        } = t.touchEventsData, u = i ? -t.translate : t.translate;
                        for (let c = 0; c < e.length; c += 1) {
                            let d = e[c],
                                h = d.progress,
                                p = Math.min(Math.max(h, -4), 4),
                                f = d.swiperSlideOffset;
                            t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (f -= e[0].swiperSlideOffset);
                            let m = t.params.cssMode ? -f - t.translate : -f,
                                g = 0,
                                y = -100 * Math.abs(p),
                                v = 1,
                                b = -s.perSlideRotate * p,
                                A = s.perSlideOffset - .75 * Math.abs(p),
                                w = t.virtual && t.params.virtual.enabled ? t.virtual.from + c : c,
                                x = (w === n || w === n - 1) && p > 0 && p < 1 && (l || t.params.cssMode) && u < o,
                                S = (w === n || w === n + 1) && p < 0 && p > -1 && (l || t.params.cssMode) && u > o;
                            if (x || S) {
                                let e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
                                b += -28 * p * e, v += -.5 * e, A += 96 * e, g = `${-25*e*Math.abs(p)}%`
                            }
                            if (m = p < 0 ? `calc(${m}px ${i?"-":"+"} (${A*Math.abs(p)}%))` : p > 0 ? `calc(${m}px ${i?"-":"+"} (-${A*Math.abs(p)}%))` : `${m}px`, !t.isHorizontal()) {
                                let e = g;
                                g = m, m = e
                            }
                            let k = p < 0 ? `${1+(1-v)*p}` : `${1-(1-v)*p}`,
                                E = `
        translate3d(${m}, ${g}, ${y}px)
        rotateZ(${s.rotate?i?-b:b:0}deg)
        scale(${k})
      `;
                            if (s.slideShadows) {
                                let e = d.querySelector(".swiper-slide-shadow");
                                e || (e = function(e, t, n) {
                                    let i = `swiper-slide-shadow${e?` swiper-slide-shadow-${e}`:""}`,
                                        s = (0, r.g)(t),
                                        o = s.querySelector(`.${i.split(" ").join(".")}`);
                                    return o || (o = (0, r.c)("div", i.split(" ")), s.append(o)), o
                                }("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1))
                            }
                            d.style.zIndex = -Math.abs(Math.round(h)) + e.length, a(s, d).style.transform = E
                        }
                    },
                    setTransition: e => {
                        let n = t.slides.map(e => (0, r.g)(e));
                        n.forEach(t => {
                            t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach(t => {
                                t.style.transitionDuration = `${e}ms`
                            })
                        }), l({
                            swiper: t,
                            duration: e,
                            transformElements: n
                        })
                    },
                    perspective: () => !0,
                    overwriteParams: () => ({
                        _loopSwapReset: !1,
                        watchSlidesProgress: !0,
                        loopAdditionalSlides: 3,
                        centeredSlides: !0,
                        virtualTranslate: !t.params.cssMode
                    })
                })
            }
        },
        12375: (e, t, n) => {
            "use strict";

            function r(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function i(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {});
                let n = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > n.indexOf(e)).forEach(n => {
                    void 0 === e[n] ? e[n] = t[n] : r(t[n]) && r(e[n]) && Object.keys(t[n]).length > 0 && i(e[n], t[n])
                })
            }
            n.d(t, {
                a: () => l,
                g: () => o
            });
            let s = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function o() {
                let e = "undefined" != typeof document ? document : {};
                return i(e, s), e
            }
            let a = {
                document: s,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function l() {
                let e = "undefined" != typeof window ? window : {};
                return i(e, a), e
            }
        },
        17044: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => A,
                c: () => m,
                d: () => o,
                e: () => h,
                f: () => x,
                g: () => d,
                h: () => b,
                j: () => a,
                k: () => w,
                m: () => S,
                n: () => s,
                p: () => v,
                q: () => y,
                r: () => g,
                s: () => u,
                t: () => c,
                u: () => f,
                v: () => p,
                w: () => function e() {
                    let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                        n = ["__proto__", "constructor", "prototype"];
                    for (let r = 1; r < arguments.length; r += 1) {
                        let i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                        if (null != i && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(i instanceof HTMLElement) : !i || 1 !== i.nodeType && 11 !== i.nodeType)) {
                            let r = Object.keys(Object(i)).filter(e => 0 > n.indexOf(e));
                            for (let n = 0, s = r.length; n < s; n += 1) {
                                let s = r[n],
                                    o = Object.getOwnPropertyDescriptor(i, s);
                                void 0 !== o && o.enumerable && (l(t[s]) && l(i[s]) ? i[s].__swiper__ ? t[s] = i[s] : e(t[s], i[s]) : !l(t[s]) && l(i[s]) ? (t[s] = {}, i[s].__swiper__ ? t[s] = i[s] : e(t[s], i[s])) : t[s] = i[s])
                            }
                        }
                    }
                    return t
                },
                x: () => i
            });
            var r = n(12375);

            function i(e) {
                Object.keys(e).forEach(t => {
                    try {
                        e[t] = null
                    } catch (e) {}
                    try {
                        delete e[t]
                    } catch (e) {}
                })
            }

            function s(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function o() {
                return Date.now()
            }

            function a(e, t) {
                let n, i, s;
                void 0 === t && (t = "x");
                let o = (0, r.a)(),
                    a = function(e) {
                        let t;
                        let n = (0, r.a)();
                        return n.getComputedStyle && (t = n.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                    }(e);
                return o.WebKitCSSMatrix ? ((i = a.transform || a.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), s = new o.WebKitCSSMatrix("none" === i ? "" : i)) : n = (s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = o.WebKitCSSMatrix ? s.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = o.WebKitCSSMatrix ? s.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
            }

            function l(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function u(e, t, n) {
                e.style.setProperty(t, n)
            }

            function c(e) {
                let t, {
                        swiper: n,
                        targetPosition: i,
                        side: s
                    } = e,
                    o = (0, r.a)(),
                    a = -n.translate,
                    l = null,
                    u = n.params.speed;
                n.wrapperEl.style.scrollSnapType = "none", o.cancelAnimationFrame(n.cssModeFrameID);
                let c = i > a ? "next" : "prev",
                    d = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                    h = () => {
                        t = new Date().getTime(), null === l && (l = t);
                        let e = a + (.5 - Math.cos(Math.max(Math.min((t - l) / u, 1), 0) * Math.PI) / 2) * (i - a);
                        if (d(e, i) && (e = i), n.wrapperEl.scrollTo({
                                [s]: e
                            }), d(e, i)) {
                            n.wrapperEl.style.overflow = "hidden", n.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                n.wrapperEl.style.overflow = "", n.wrapperEl.scrollTo({
                                    [s]: e
                                })
                            }), o.cancelAnimationFrame(n.cssModeFrameID);
                            return
                        }
                        n.cssModeFrameID = o.requestAnimationFrame(h)
                    };
                h()
            }

            function d(e) {
                return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
            }

            function h(e, t) {
                void 0 === t && (t = "");
                let n = (0, r.a)(),
                    i = [...e.children];
                return (n.HTMLSlotElement && e instanceof HTMLSlotElement && i.push(...e.assignedElements()), t) ? i.filter(e => e.matches(t)) : i
            }

            function p(e, t) {
                let n = (0, r.a)(),
                    i = t.contains(e);
                return !i && n.HTMLSlotElement && t instanceof HTMLSlotElement && !(i = [...t.assignedElements()].includes(e)) && (i = function(e, t) {
                    let n = [t];
                    for (; n.length > 0;) {
                        let t = n.shift();
                        if (e === t) return !0;
                        n.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
                    }
                }(e, t)), i
            }

            function f(e) {
                try {
                    console.warn(e);
                    return
                } catch (e) {}
            }

            function m(e, t) {
                var n;
                void 0 === t && (t = []);
                let r = document.createElement(e);
                return r.classList.add(...Array.isArray(t) ? t : (void 0 === (n = t) && (n = ""), n.trim().split(" ").filter(e => !!e.trim()))), r
            }

            function g(e, t) {
                let n = [];
                for (; e.previousElementSibling;) {
                    let r = e.previousElementSibling;
                    t ? r.matches(t) && n.push(r) : n.push(r), e = r
                }
                return n
            }

            function y(e, t) {
                let n = [];
                for (; e.nextElementSibling;) {
                    let r = e.nextElementSibling;
                    t ? r.matches(t) && n.push(r) : n.push(r), e = r
                }
                return n
            }

            function v(e, t) {
                return (0, r.a)().getComputedStyle(e, null).getPropertyValue(t)
            }

            function b(e) {
                let t, n = e;
                if (n) {
                    for (t = 0; null !== (n = n.previousSibling);) 1 === n.nodeType && (t += 1);
                    return t
                }
            }

            function A(e, t) {
                let n = [],
                    r = e.parentElement;
                for (; r;) t ? r.matches(t) && n.push(r) : n.push(r), r = r.parentElement;
                return n
            }

            function w(e, t) {
                t && e.addEventListener("transitionend", function n(r) {
                    r.target === e && (t.call(e, r), e.removeEventListener("transitionend", n))
                })
            }

            function x(e, t, n) {
                let i = (0, r.a)();
                return n ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }

            function S(e) {
                return (Array.isArray(e) ? e : [e]).filter(e => !!e)
            }
        },
        46874: (e, t, n) => {
            "use strict";
            let r, i, s;
            n.d(t, {
                RC: () => H,
                qr: () => G
            });
            var o = n(96540),
                a = n(12375),
                l = n(17044);

            function u() {
                return r || (r = function() {
                    let e = (0, a.a)(),
                        t = (0, a.g)();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), r
            }

            function c(e) {
                return void 0 === e && (e = {}), i || (i = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e, n = u(), r = (0, a.a)(), i = r.navigator.platform, s = t || r.navigator.userAgent, o = {
                        ios: !1,
                        android: !1
                    }, l = r.screen.width, c = r.screen.height, d = s.match(/(Android);?[\s\/]+([\d.]+)?/), h = s.match(/(iPad).*OS\s([\d_]+)/), p = s.match(/(iPod)(.*OS\s([\d_]+))?/), f = !h && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m = "MacIntel" === i;
                    return !h && m && n.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && ((h = s.match(/(Version)\/([\d.]+)/)) || (h = [0, 1, "13_0_0"]), m = !1), d && "Win32" !== i && (o.os = "android", o.android = !0), (h || f || p) && (o.os = "ios", o.ios = !0), o
                }(e)), i
            }

            function d() {
                return s || (s = function() {
                    let e = (0, a.a)(),
                        t = c(),
                        n = !1;

                    function r() {
                        let t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                    }
                    if (r()) {
                        let t = String(e.navigator.userAgent);
                        if (t.includes("Version/")) {
                            let [e, r] = t.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                            n = e < 16 || 16 === e && r < 2
                        }
                    }
                    let i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                        s = r(),
                        o = s || i && t.ios;
                    return {
                        isSafari: n || s,
                        needPerspectiveFix: n,
                        need3dFix: o,
                        isWebView: i
                    }
                }()), s
            }
            let h = (e, t, n) => {
                    t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n)
                },
                p = (e, t, n) => {
                    t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n)
                },
                f = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    let n = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (n) {
                        let t = n.querySelector(`.${e.params.lazyPreloaderClass}`);
                        !t && e.isElement && (n.shadowRoot ? t = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                            n.shadowRoot && (t = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)) && t.remove()
                        })), t && t.remove()
                    }
                },
                m = (e, t) => {
                    if (!e.slides[t]) return;
                    let n = e.slides[t].querySelector('[loading="lazy"]');
                    n && n.removeAttribute("loading")
                },
                g = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext,
                        n = e.slides.length;
                    if (!n || !t || t < 0) return;
                    t = Math.min(t, n);
                    let r = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        i = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        let n = [i - t];
                        n.push(...Array.from({
                            length: t
                        }).map((e, t) => i + r + t)), e.slides.forEach((t, r) => {
                            n.includes(t.column) && m(e, r)
                        });
                        return
                    }
                    let s = i + r - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let r = i - t; r <= s + t; r += 1) {
                            let t = (r % n + n) % n;
                            (t < i || t > s) && m(e, t)
                        } else
                            for (let r = Math.max(i - t, 0); r <= Math.min(s + t, n - 1); r += 1) r !== i && (r > s || r < i) && m(e, r)
                };

            function y(e) {
                let {
                    swiper: t,
                    runCallbacks: n,
                    direction: r,
                    step: i
                } = e, {
                    activeIndex: s,
                    previousIndex: o
                } = t, a = r;
                if (a || (a = s > o ? "next" : s < o ? "prev" : "reset"), t.emit(`transition${i}`), n && s !== o) {
                    if ("reset" === a) {
                        t.emit(`slideResetTransition${i}`);
                        return
                    }
                    t.emit(`slideChangeTransition${i}`), "next" === a ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
                }
            }

            function v(e, t, n) {
                let r = (0, a.a)(),
                    {
                        params: i
                    } = e,
                    s = i.edgeSwipeDetection,
                    o = i.edgeSwipeThreshold;
                return !s || !(n <= o) && !(n >= r.innerWidth - o) || "prevent" === s && (t.preventDefault(), !0)
            }

            function b(e) {
                let t = (0, a.g)(),
                    n = e;
                n.originalEvent && (n = n.originalEvent);
                let r = this.touchEventsData;
                if ("pointerdown" === n.type) {
                    if (null !== r.pointerId && r.pointerId !== n.pointerId) return;
                    r.pointerId = n.pointerId
                } else "touchstart" === n.type && 1 === n.targetTouches.length && (r.touchId = n.targetTouches[0].identifier);
                if ("touchstart" === n.type) {
                    v(this, n, n.targetTouches[0].pageX);
                    return
                }
                let {
                    params: i,
                    touches: s,
                    enabled: o
                } = this;
                if (!o || !i.simulateTouch && "mouse" === n.pointerType || this.animating && i.preventInteractionOnTransition) return;
                !this.animating && i.cssMode && i.loop && this.loopFix();
                let u = n.target;
                if ("wrapper" === i.touchEventsTarget && !(0, l.v)(u, this.wrapperEl) || "which" in n && 3 === n.which || "button" in n && n.button > 0 || r.isTouched && r.isMoved) return;
                let c = !!i.noSwipingClass && "" !== i.noSwipingClass,
                    d = n.composedPath ? n.composedPath() : n.path;
                c && n.target && n.target.shadowRoot && d && (u = d[0]);
                let h = i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`,
                    p = !!(n.target && n.target.shadowRoot);
                if (i.noSwiping && (p ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(n) {
                                if (!n || n === (0, a.g)() || n === (0, a.a)()) return null;
                                n.assignedSlot && (n = n.assignedSlot);
                                let r = n.closest(e);
                                return r || n.getRootNode ? r || t(n.getRootNode().host) : null
                            }(t)
                    }(h, u) : u.closest(h))) {
                    this.allowClick = !0;
                    return
                }
                if (i.swipeHandler && !u.closest(i.swipeHandler)) return;
                s.currentX = n.pageX, s.currentY = n.pageY;
                let f = s.currentX,
                    m = s.currentY;
                if (!v(this, n, f)) return;
                Object.assign(r, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), s.startX = f, s.startY = m, r.touchStartTime = (0, l.d)(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, i.threshold > 0 && (r.allowThresholdMove = !1);
                let g = !0;
                u.matches(r.focusableElements) && (g = !1, "SELECT" === u.nodeName && (r.isTouched = !1)), t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== u && ("mouse" === n.pointerType || "mouse" !== n.pointerType && !u.matches(r.focusableElements)) && t.activeElement.blur();
                let y = g && this.allowTouchMove && i.touchStartPreventDefault;
                (i.touchStartForcePreventDefault || y) && !u.isContentEditable && n.preventDefault(), i.freeMode && i.freeMode.enabled && this.freeMode && this.animating && !i.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", n)
            }

            function A(e) {
                let t, n;
                let r = (0, a.g)(),
                    i = this.touchEventsData,
                    {
                        params: s,
                        touches: o,
                        rtlTranslate: u,
                        enabled: c
                    } = this;
                if (!c || !s.simulateTouch && "mouse" === e.pointerType) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), "pointermove" === d.type && (null !== i.touchId || d.pointerId !== i.pointerId)) return;
                if ("touchmove" === d.type) {
                    if (!(t = [...d.changedTouches].find(e => e.identifier === i.touchId)) || t.identifier !== i.touchId) return
                } else t = d;
                if (!i.isTouched) {
                    i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", d);
                    return
                }
                let h = t.pageX,
                    p = t.pageY;
                if (d.preventedByNestedSwiper) {
                    o.startX = h, o.startY = p;
                    return
                }
                if (!this.allowTouchMove) {
                    d.target.matches(i.focusableElements) || (this.allowClick = !1), i.isTouched && (Object.assign(o, {
                        startX: h,
                        startY: p,
                        currentX: h,
                        currentY: p
                    }), i.touchStartTime = (0, l.d)());
                    return
                }
                if (s.touchReleaseOnEdges && !s.loop) {
                    if (this.isVertical()) {
                        if (p < o.startY && this.translate <= this.maxTranslate() || p > o.startY && this.translate >= this.minTranslate()) {
                            i.isTouched = !1, i.isMoved = !1;
                            return
                        }
                    } else if (h < o.startX && this.translate <= this.maxTranslate() || h > o.startX && this.translate >= this.minTranslate()) return
                }
                if (r.activeElement && r.activeElement.matches(i.focusableElements) && r.activeElement !== d.target && "mouse" !== d.pointerType && r.activeElement.blur(), r.activeElement && d.target === r.activeElement && d.target.matches(i.focusableElements)) {
                    i.isMoved = !0, this.allowClick = !1;
                    return
                }
                i.allowTouchCallbacks && this.emit("touchMove", d), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = h, o.currentY = p;
                let f = o.currentX - o.startX,
                    m = o.currentY - o.startY;
                if (this.params.threshold && Math.sqrt(f ** 2 + m ** 2) < this.params.threshold) return;
                if (void 0 === i.isScrolling) {
                    let e;
                    this.isHorizontal() && o.currentY === o.startY || this.isVertical() && o.currentX === o.startX ? i.isScrolling = !1 : f * f + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI, i.isScrolling = this.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
                }
                if (i.isScrolling && this.emit("touchMoveOpposite", d), void 0 === i.startMoving && (o.currentX !== o.startX || o.currentY !== o.startY) && (i.startMoving = !0), i.isScrolling || "touchmove" === d.type && i.preventTouchMoveFromPointerMove) {
                    i.isTouched = !1;
                    return
                }
                if (!i.startMoving) return;
                this.allowClick = !1, !s.cssMode && d.cancelable && d.preventDefault(), s.touchMoveStopPropagation && !s.nested && d.stopPropagation();
                let g = this.isHorizontal() ? f : m,
                    y = this.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
                s.oneWayMovement && (g = Math.abs(g) * (u ? 1 : -1), y = Math.abs(y) * (u ? 1 : -1)), o.diff = g, g *= s.touchRatio, u && (g = -g, y = -y);
                let v = this.touchesDirection;
                this.swipeDirection = g > 0 ? "prev" : "next", this.touchesDirection = y > 0 ? "prev" : "next";
                let b = this.params.loop && !s.cssMode,
                    A = "next" === this.touchesDirection && this.allowSlideNext || "prev" === this.touchesDirection && this.allowSlidePrev;
                if (!i.isMoved) {
                    if (b && A && this.loopFix({
                            direction: this.swipeDirection
                        }), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating) {
                        let e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: {
                                bySwiperTouchMove: !0
                            }
                        });
                        this.wrapperEl.dispatchEvent(e)
                    }
                    i.allowMomentumBounce = !1, s.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", d)
                }
                if (new Date().getTime(), !1 !== s._loopSwapReset && i.isMoved && i.allowThresholdMove && v !== this.touchesDirection && b && A && Math.abs(g) >= 1) {
                    Object.assign(o, {
                        startX: h,
                        startY: p,
                        currentX: h,
                        currentY: p,
                        startTranslate: i.currentTranslate
                    }), i.loopSwapReset = !0, i.startTranslate = i.currentTranslate;
                    return
                }
                this.emit("sliderMove", d), i.isMoved = !0, i.currentTranslate = g + i.startTranslate;
                let w = !0,
                    x = s.resistanceRatio;
                if (s.touchReleaseOnEdges && (x = 0), g > 0 ? (b && A && !n && i.allowThresholdMove && i.currentTranslate > (s.centeredSlides ? this.minTranslate() - this.slidesSizesGrid[this.activeIndex + 1] - ("auto" !== s.slidesPerView && this.slides.length - s.slidesPerView >= 2 ? this.slidesSizesGrid[this.activeIndex + 1] + this.params.spaceBetween : 0) - this.params.spaceBetween : this.minTranslate()) && this.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), i.currentTranslate > this.minTranslate() && (w = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + i.startTranslate + g) ** x))) : g < 0 && (b && A && !n && i.allowThresholdMove && i.currentTranslate < (s.centeredSlides ? this.maxTranslate() + this.slidesSizesGrid[this.slidesSizesGrid.length - 1] + this.params.spaceBetween + ("auto" !== s.slidesPerView && this.slides.length - s.slidesPerView >= 2 ? this.slidesSizesGrid[this.slidesSizesGrid.length - 1] + this.params.spaceBetween : 0) : this.maxTranslate()) && this.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: this.slides.length - ("auto" === s.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
                    }), i.currentTranslate < this.maxTranslate() && (w = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - i.startTranslate - g) ** x))), w && (d.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), this.allowSlidePrev || this.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                    if (Math.abs(g) > s.threshold || i.allowThresholdMove) {
                        if (!i.allowThresholdMove) {
                            i.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, i.currentTranslate = i.startTranslate, o.diff = this.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY;
                            return
                        }
                    } else {
                        i.currentTranslate = i.startTranslate;
                        return
                    }
                }
                s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && this.freeMode || s.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
            }

            function w(e) {
                let t, n;
                let r = this,
                    i = r.touchEventsData,
                    s = e;
                if (s.originalEvent && (s = s.originalEvent), "touchend" === s.type || "touchcancel" === s.type) {
                    if (!(t = [...s.changedTouches].find(e => e.identifier === i.touchId)) || t.identifier !== i.touchId) return
                } else {
                    if (null !== i.touchId || s.pointerId !== i.pointerId) return;
                    t = s
                }
                if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (r.browser.isSafari || r.browser.isWebView))) return;
                i.pointerId = null, i.touchId = null;
                let {
                    params: o,
                    touches: a,
                    rtlTranslate: u,
                    slidesGrid: c,
                    enabled: d
                } = r;
                if (!d || !o.simulateTouch && "mouse" === s.pointerType) return;
                if (i.allowTouchCallbacks && r.emit("touchEnd", s), i.allowTouchCallbacks = !1, !i.isTouched) {
                    i.isMoved && o.grabCursor && r.setGrabCursor(!1), i.isMoved = !1, i.startMoving = !1;
                    return
                }
                o.grabCursor && i.isMoved && i.isTouched && (!0 === r.allowSlideNext || !0 === r.allowSlidePrev) && r.setGrabCursor(!1);
                let h = (0, l.d)(),
                    p = h - i.touchStartTime;
                if (r.allowClick) {
                    let e = s.path || s.composedPath && s.composedPath();
                    r.updateClickedSlide(e && e[0] || s.target, e), r.emit("tap click", s), p < 300 && h - i.lastClickTime < 300 && r.emit("doubleTap doubleClick", s)
                }
                if (i.lastClickTime = (0, l.d)(), (0, l.n)(() => {
                        r.destroyed || (r.allowClick = !0)
                    }), !i.isTouched || !i.isMoved || !r.swipeDirection || 0 === a.diff && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) {
                    i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
                    return
                }
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, n = o.followFinger ? u ? r.translate : -r.translate : -i.currentTranslate, o.cssMode) return;
                if (o.freeMode && o.freeMode.enabled) {
                    r.freeMode.onTouchEnd({
                        currentPos: n
                    });
                    return
                }
                let f = n >= -r.maxTranslate() && !r.params.loop,
                    m = 0,
                    g = r.slidesSizesGrid[0];
                for (let e = 0; e < c.length; e += e < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
                    let t = e < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
                    void 0 !== c[e + t] ? (f || n >= c[e] && n < c[e + t]) && (m = e, g = c[e + t] - c[e]) : (f || n >= c[e]) && (m = e, g = c[c.length - 1] - c[c.length - 2])
                }
                let y = null,
                    v = null;
                o.rewind && (r.isBeginning ? v = o.virtual && o.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1 : r.isEnd && (y = 0));
                let b = (n - c[m]) / g,
                    A = m < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
                if (p > o.longSwipesMs) {
                    if (!o.longSwipes) {
                        r.slideTo(r.activeIndex);
                        return
                    }
                    "next" === r.swipeDirection && (b >= o.longSwipesRatio ? r.slideTo(o.rewind && r.isEnd ? y : m + A) : r.slideTo(m)), "prev" === r.swipeDirection && (b > 1 - o.longSwipesRatio ? r.slideTo(m + A) : null !== v && b < 0 && Math.abs(b) > o.longSwipesRatio ? r.slideTo(v) : r.slideTo(m))
                } else {
                    if (!o.shortSwipes) {
                        r.slideTo(r.activeIndex);
                        return
                    }
                    r.navigation && (s.target === r.navigation.nextEl || s.target === r.navigation.prevEl) ? s.target === r.navigation.nextEl ? r.slideTo(m + A) : r.slideTo(m) : ("next" === r.swipeDirection && r.slideTo(null !== y ? y : m + A), "prev" === r.swipeDirection && r.slideTo(null !== v ? v : m))
                }
            }

            function x() {
                let e = this,
                    {
                        params: t,
                        el: n
                    } = e;
                if (n && 0 === n.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: r,
                    allowSlidePrev: i,
                    snapGrid: s
                } = e, o = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                let a = o && t.loop;
                "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || a ? e.params.loop && !o ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }, 500)), e.allowSlidePrev = i, e.allowSlideNext = r, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
            }

            function S(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function k() {
                let {
                    wrapperEl: e,
                    rtlTranslate: t,
                    enabled: n
                } = this;
                if (!n) return;
                this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                let r = this.maxTranslate() - this.minTranslate();
                (0 === r ? 0 : (this.translate - this.minTranslate()) / r) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
            }

            function E(e) {
                f(this, e.target), !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
            }

            function T() {
                !this.documentTouchHandlerProceeded && (this.documentTouchHandlerProceeded = !0, this.params.touchReleaseOnEdges && (this.el.style.touchAction = "auto"))
            }
            let C = (e, t) => {
                    let n = (0, a.g)(),
                        {
                            params: r,
                            el: i,
                            wrapperEl: s,
                            device: o
                        } = e,
                        l = !!r.nested,
                        u = "on" === t ? "addEventListener" : "removeEventListener";
                    i && "string" != typeof i && (n[u]("touchstart", e.onDocumentTouchStart, {
                        passive: !1,
                        capture: l
                    }), i[u]("touchstart", e.onTouchStart, {
                        passive: !1
                    }), i[u]("pointerdown", e.onTouchStart, {
                        passive: !1
                    }), n[u]("touchmove", e.onTouchMove, {
                        passive: !1,
                        capture: l
                    }), n[u]("pointermove", e.onTouchMove, {
                        passive: !1,
                        capture: l
                    }), n[u]("touchend", e.onTouchEnd, {
                        passive: !0
                    }), n[u]("pointerup", e.onTouchEnd, {
                        passive: !0
                    }), n[u]("pointercancel", e.onTouchEnd, {
                        passive: !0
                    }), n[u]("touchcancel", e.onTouchEnd, {
                        passive: !0
                    }), n[u]("pointerout", e.onTouchEnd, {
                        passive: !0
                    }), n[u]("pointerleave", e.onTouchEnd, {
                        passive: !0
                    }), n[u]("contextmenu", e.onTouchEnd, {
                        passive: !0
                    }), (r.preventClicks || r.preventClicksPropagation) && i[u]("click", e.onClick, !0), r.cssMode && s[u]("scroll", e.onScroll), r.updateOnWindowResize ? e[t](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x, !0) : e[t]("observerUpdate", x, !0), i[u]("load", e.onLoad, {
                        capture: !0
                    }))
                },
                P = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var O = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                swiperElementNodeName: "SWIPER-CONTAINER",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                eventsPrefix: "swiper",
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopAddBlankSlides: !0,
                loopAdditionalSlides: 0,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-blank",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideFullyVisibleClass: "swiper-slide-fully-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let M = {
                    eventsEmitter: {
                        on(e, t, n) {
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || "function" != typeof t) return r;
                            let i = n ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][i](t)
                            }), r
                        },
                        once(e, t, n) {
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || "function" != typeof t) return r;

                            function i() {
                                r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                                for (var n = arguments.length, s = Array(n), o = 0; o < n; o++) s[o] = arguments[o];
                                t.apply(r, s)
                            }
                            return i.__emitterProxy = t, r.on(e, i, n)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let n = this;
                            return n.eventsListeners && !n.destroyed && n.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach((r, i) => {
                                    (r === t || r.__emitterProxy && r.__emitterProxy === t) && n.eventsListeners[e].splice(i, 1)
                                })
                            }), n
                        },
                        emit() {
                            let e, t, n;
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
                            for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
                            return "string" == typeof s[0] || Array.isArray(s[0]) ? (e = s[0], t = s.slice(1, s.length), n = r) : (e = s[0].events, t = s[0].data, n = s[0].context || r), t.unshift(n), (Array.isArray(e) ? e : e.split(" ")).forEach(e => {
                                r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(r => {
                                    r.apply(n, [e, ...t])
                                }), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach(e => {
                                    e.apply(n, t)
                                })
                            }), r
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let n = this.el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : n.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : n.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt((0, l.p)(n, "padding-left") || 0, 10) - parseInt((0, l.p)(n, "padding-right") || 0, 10), t = t - parseInt((0, l.p)(n, "padding-top") || 0, 10) - parseInt((0, l.p)(n, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function n(e, n) {
                                return parseFloat(e.getPropertyValue(t.getDirectionLabel(n)) || 0)
                            }
                            let r = t.params,
                                {
                                    wrapperEl: i,
                                    slidesEl: s,
                                    size: o,
                                    rtlTranslate: a,
                                    wrongRTL: u
                                } = t,
                                c = t.virtual && r.virtual.enabled,
                                d = c ? t.virtual.slides.length : t.slides.length,
                                h = (0, l.e)(s, `.${t.params.slideClass}, swiper-slide`),
                                p = c ? t.virtual.slides.length : h.length,
                                f = [],
                                m = [],
                                g = [],
                                y = r.slidesOffsetBefore;
                            "function" == typeof y && (y = r.slidesOffsetBefore.call(t));
                            let v = r.slidesOffsetAfter;
                            "function" == typeof v && (v = r.slidesOffsetAfter.call(t));
                            let b = t.snapGrid.length,
                                A = t.slidesGrid.length,
                                w = r.spaceBetween,
                                x = -y,
                                S = 0,
                                k = 0;
                            if (void 0 === o) return;
                            "string" == typeof w && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * o : "string" == typeof w && (w = parseFloat(w)), t.virtualSize = -w, h.forEach(e => {
                                a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            }), r.centeredSlides && r.cssMode && ((0, l.s)(i, "--swiper-centered-offset-before", ""), (0, l.s)(i, "--swiper-centered-offset-after", ""));
                            let E = r.grid && r.grid.rows > 1 && t.grid;
                            E ? t.grid.initSlides(h) : t.grid && t.grid.unsetSlides();
                            let T = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(e => void 0 !== r.breakpoints[e].slidesPerView).length > 0;
                            for (let i = 0; i < p; i += 1) {
                                let s;
                                if (e = 0, h[i] && (s = h[i]), E && t.grid.updateSlide(i, s, h), !h[i] || "none" !== (0, l.p)(s, "display")) {
                                    if ("auto" === r.slidesPerView) {
                                        T && (h[i].style[t.getDirectionLabel("width")] = "");
                                        let o = getComputedStyle(s),
                                            a = s.style.transform,
                                            u = s.style.webkitTransform;
                                        if (a && (s.style.transform = "none"), u && (s.style.webkitTransform = "none"), r.roundLengths) e = t.isHorizontal() ? (0, l.f)(s, "width", !0) : (0, l.f)(s, "height", !0);
                                        else {
                                            let t = n(o, "width"),
                                                r = n(o, "padding-left"),
                                                i = n(o, "padding-right"),
                                                a = n(o, "margin-left"),
                                                l = n(o, "margin-right"),
                                                u = o.getPropertyValue("box-sizing");
                                            if (u && "border-box" === u) e = t + a + l;
                                            else {
                                                let {
                                                    clientWidth: n,
                                                    offsetWidth: o
                                                } = s;
                                                e = t + r + i + a + l + (o - n)
                                            }
                                        }
                                        a && (s.style.transform = a), u && (s.style.webkitTransform = u), r.roundLengths && (e = Math.floor(e))
                                    } else e = (o - (r.slidesPerView - 1) * w) / r.slidesPerView, r.roundLengths && (e = Math.floor(e)), h[i] && (h[i].style[t.getDirectionLabel("width")] = `${e}px`);
                                    h[i] && (h[i].swiperSlideSize = e), g.push(e), r.centeredSlides ? (x = x + e / 2 + S / 2 + w, 0 === S && 0 !== i && (x = x - o / 2 - w), 0 === i && (x = x - o / 2 - w), .001 > Math.abs(x) && (x = 0), r.roundLengths && (x = Math.floor(x)), k % r.slidesPerGroup == 0 && f.push(x), m.push(x)) : (r.roundLengths && (x = Math.floor(x)), (k - Math.min(t.params.slidesPerGroupSkip, k)) % t.params.slidesPerGroup == 0 && f.push(x), m.push(x), x = x + e + w), t.virtualSize += e + w, S = e, k += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, o) + v, a && u && ("slide" === r.effect || "coverflow" === r.effect) && (i.style.width = `${t.virtualSize+w}px`), r.setWrapperSize && (i.style[t.getDirectionLabel("width")] = `${t.virtualSize+w}px`), E && t.grid.updateWrapperSize(e, f), !r.centeredSlides) {
                                let e = [];
                                for (let n = 0; n < f.length; n += 1) {
                                    let i = f[n];
                                    r.roundLengths && (i = Math.floor(i)), f[n] <= t.virtualSize - o && e.push(i)
                                }
                                f = e, Math.floor(t.virtualSize - o) - Math.floor(f[f.length - 1]) > 1 && f.push(t.virtualSize - o)
                            }
                            if (c && r.loop) {
                                let e = g[0] + w;
                                if (r.slidesPerGroup > 1) {
                                    let n = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / r.slidesPerGroup),
                                        i = e * r.slidesPerGroup;
                                    for (let e = 0; e < n; e += 1) f.push(f[f.length - 1] + i)
                                }
                                for (let n = 0; n < t.virtual.slidesBefore + t.virtual.slidesAfter; n += 1) 1 === r.slidesPerGroup && f.push(f[f.length - 1] + e), m.push(m[m.length - 1] + e), t.virtualSize += e
                            }
                            if (0 === f.length && (f = [0]), 0 !== w) {
                                let e = t.isHorizontal() && a ? "marginLeft" : t.getDirectionLabel("marginRight");
                                h.filter((e, t) => !r.cssMode || !!r.loop || t !== h.length - 1).forEach(t => {
                                    t.style[e] = `${w}px`
                                })
                            }
                            if (r.centeredSlides && r.centeredSlidesBounds) {
                                let e = 0;
                                g.forEach(t => {
                                    e += t + (w || 0)
                                });
                                let t = (e -= w) > o ? e - o : 0;
                                f = f.map(e => e <= 0 ? -y : e > t ? t + v : e)
                            }
                            if (r.centerInsufficientSlides) {
                                let e = 0;
                                g.forEach(t => {
                                    e += t + (w || 0)
                                }), e -= w;
                                let t = (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
                                if (e + t < o) {
                                    let n = (o - e - t) / 2;
                                    f.forEach((e, t) => {
                                        f[t] = e - n
                                    }), m.forEach((e, t) => {
                                        m[t] = e + n
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: h,
                                    snapGrid: f,
                                    slidesGrid: m,
                                    slidesSizesGrid: g
                                }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                                (0, l.s)(i, "--swiper-centered-offset-before", `${-f[0]}px`), (0, l.s)(i, "--swiper-centered-offset-after", `${t.size/2-g[g.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    n = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + n)
                            }
                            if (p !== d && t.emit("slidesLengthChange"), f.length !== b && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), m.length !== A && t.emit("slidesGridLengthChange"), r.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !c && !r.cssMode && ("slide" === r.effect || "fade" === r.effect)) {
                                let e = `${r.containerModifierClass}backface-hidden`,
                                    n = t.el.classList.contains(e);
                                p <= r.maxBackfaceHiddenSlides ? n || t.el.classList.add(e) : n && t.el.classList.remove(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let n = this,
                                r = [],
                                i = n.virtual && n.params.virtual.enabled,
                                s = 0;
                            "number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed);
                            let o = e => i ? n.slides[n.getSlideIndexByData(e)] : n.slides[e];
                            if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1) {
                                if (n.params.centeredSlides)(n.visibleSlides || []).forEach(e => {
                                    r.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                                        let e = n.activeIndex + t;
                                        if (e > n.slides.length && !i) break;
                                        r.push(o(e))
                                    }
                            } else r.push(o(n.activeIndex));
                            for (t = 0; t < r.length; t += 1)
                                if (void 0 !== r[t]) {
                                    let e = r[t].offsetHeight;
                                    s = e > s ? e : s
                                }(s || 0 === s) && (n.wrapperEl.style.height = `${s}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides,
                                t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                            for (let n = 0; n < e.length; n += 1) e[n].swiperSlideOffset = (this.isHorizontal() ? e[n].offsetLeft : e[n].offsetTop) - t - this.cssOverflowAdjustment()
                        },
                        updateSlidesProgress: function(e) {
                            void 0 === e && (e = this && this.translate || 0);
                            let t = this.params,
                                {
                                    slides: n,
                                    rtlTranslate: r,
                                    snapGrid: i
                                } = this;
                            if (0 === n.length) return;
                            void 0 === n[0].swiperSlideOffset && this.updateSlidesOffset();
                            let s = -e;
                            r && (s = e), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                            let o = t.spaceBetween;
                            "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * this.size : "string" == typeof o && (o = parseFloat(o));
                            for (let e = 0; e < n.length; e += 1) {
                                let a = n[e],
                                    l = a.swiperSlideOffset;
                                t.cssMode && t.centeredSlides && (l -= n[0].swiperSlideOffset);
                                let u = (s + (t.centeredSlides ? this.minTranslate() : 0) - l) / (a.swiperSlideSize + o),
                                    c = (s - i[0] + (t.centeredSlides ? this.minTranslate() : 0) - l) / (a.swiperSlideSize + o),
                                    d = -(s - l),
                                    p = d + this.slidesSizesGrid[e],
                                    f = d >= 0 && d <= this.size - this.slidesSizesGrid[e],
                                    m = d >= 0 && d < this.size - 1 || p > 1 && p <= this.size || d <= 0 && p >= this.size;
                                m && (this.visibleSlides.push(a), this.visibleSlidesIndexes.push(e)), h(a, m, t.slideVisibleClass), h(a, f, t.slideFullyVisibleClass), a.progress = r ? -u : u, a.originalProgress = r ? -c : c
                            }
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let t = this.params,
                                n = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: r,
                                    isBeginning: i,
                                    isEnd: s,
                                    progressLoop: o
                                } = this,
                                a = i,
                                l = s;
                            if (0 === n) r = 0, i = !0, s = !0;
                            else {
                                r = (e - this.minTranslate()) / n;
                                let t = 1 > Math.abs(e - this.minTranslate()),
                                    o = 1 > Math.abs(e - this.maxTranslate());
                                i = t || r <= 0, s = o || r >= 1, t && (r = 0), o && (r = 1)
                            }
                            if (t.loop) {
                                let t = this.getSlideIndexByData(0),
                                    n = this.getSlideIndexByData(this.slides.length - 1),
                                    r = this.slidesGrid[t],
                                    i = this.slidesGrid[n],
                                    s = this.slidesGrid[this.slidesGrid.length - 1],
                                    a = Math.abs(e);
                                (o = a >= r ? (a - r) / s : (a + s - i) / s) > 1 && (o -= 1)
                            }
                            Object.assign(this, {
                                progress: r,
                                progressLoop: o,
                                isBeginning: i,
                                isEnd: s
                            }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), i && !a && this.emit("reachBeginning toEdge"), s && !l && this.emit("reachEnd toEdge"), (a && !i || l && !s) && this.emit("fromEdge"), this.emit("progress", r)
                        },
                        updateSlidesClasses: function() {
                            let e, t, n;
                            let {
                                slides: r,
                                params: i,
                                slidesEl: s,
                                activeIndex: o
                            } = this, a = this.virtual && i.virtual.enabled, u = this.grid && i.grid && i.grid.rows > 1, c = e => (0, l.e)(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
                            if (a) {
                                if (i.loop) {
                                    let t = o - this.virtual.slidesBefore;
                                    t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = c(`[data-swiper-slide-index="${t}"]`)
                                } else e = c(`[data-swiper-slide-index="${o}"]`)
                            } else u ? (e = r.find(e => e.column === o), n = r.find(e => e.column === o + 1), t = r.find(e => e.column === o - 1)) : e = r[o];
                            e && !u && (n = (0, l.q)(e, `.${i.slideClass}, swiper-slide`)[0], i.loop && !n && (n = r[0]), t = (0, l.r)(e, `.${i.slideClass}, swiper-slide`)[0], i.loop), r.forEach(r => {
                                p(r, r === e, i.slideActiveClass), p(r, r === n, i.slideNextClass), p(r, r === t, i.slidePrevClass)
                            }), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, n;
                            let r = this,
                                i = r.rtlTranslate ? r.translate : -r.translate,
                                {
                                    snapGrid: s,
                                    params: o,
                                    activeIndex: a,
                                    realIndex: l,
                                    snapIndex: u
                                } = r,
                                c = e,
                                d = e => {
                                    let t = e - r.virtual.slidesBefore;
                                    return t < 0 && (t = r.virtual.slides.length + t), t >= r.virtual.slides.length && (t -= r.virtual.slides.length), t
                                };
                            if (void 0 === c && (c = function(e) {
                                    let t;
                                    let {
                                        slidesGrid: n,
                                        params: r
                                    } = e, i = e.rtlTranslate ? e.translate : -e.translate;
                                    for (let e = 0; e < n.length; e += 1) void 0 !== n[e + 1] ? i >= n[e] && i < n[e + 1] - (n[e + 1] - n[e]) / 2 ? t = e : i >= n[e] && i < n[e + 1] && (t = e + 1) : i >= n[e] && (t = e);
                                    return r.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                                }(r)), s.indexOf(i) >= 0) t = s.indexOf(i);
                            else {
                                let e = Math.min(o.slidesPerGroupSkip, c);
                                t = e + Math.floor((c - e) / o.slidesPerGroup)
                            }
                            if (t >= s.length && (t = s.length - 1), c === a && !r.params.loop) {
                                t !== u && (r.snapIndex = t, r.emit("snapIndexChange"));
                                return
                            }
                            if (c === a && r.params.loop && r.virtual && r.params.virtual.enabled) {
                                r.realIndex = d(c);
                                return
                            }
                            let h = r.grid && o.grid && o.grid.rows > 1;
                            if (r.virtual && o.virtual.enabled && o.loop) n = d(c);
                            else if (h) {
                                let e = r.slides.find(e => e.column === c),
                                    t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                                Number.isNaN(t) && (t = Math.max(r.slides.indexOf(e), 0)), n = Math.floor(t / o.grid.rows)
                            } else if (r.slides[c]) {
                                let e = r.slides[c].getAttribute("data-swiper-slide-index");
                                n = e ? parseInt(e, 10) : c
                            } else n = c;
                            Object.assign(r, {
                                previousSnapIndex: u,
                                snapIndex: t,
                                previousRealIndex: l,
                                realIndex: n,
                                previousIndex: a,
                                activeIndex: c
                            }), r.initialized && g(r), r.emit("activeIndexChange"), r.emit("snapIndexChange"), (r.initialized || r.params.runCallbacksOnInit) && (l !== n && r.emit("realIndexChange"), r.emit("slideChange"))
                        },
                        updateClickedSlide: function(e, t) {
                            let n;
                            let r = this.params,
                                i = e.closest(`.${r.slideClass}, swiper-slide`);
                            !i && this.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
                                !i && e.matches && e.matches(`.${r.slideClass}, swiper-slide`) && (i = e)
                            });
                            let s = !1;
                            if (i) {
                                for (let e = 0; e < this.slides.length; e += 1)
                                    if (this.slides[e] === i) {
                                        s = !0, n = e;
                                        break
                                    }
                            }
                            if (i && s) this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = n;
                            else {
                                this.clickedSlide = void 0, this.clickedIndex = void 0;
                                return
                            }
                            r.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e) {
                            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                            let {
                                params: t,
                                rtlTranslate: n,
                                translate: r,
                                wrapperEl: i
                            } = this;
                            if (t.virtualTranslate) return n ? -r : r;
                            if (t.cssMode) return r;
                            let s = (0, l.j)(i, e);
                            return s += this.cssOverflowAdjustment(), n && (s = -s), s || 0
                        },
                        setTranslate: function(e, t) {
                            let {
                                rtlTranslate: n,
                                params: r,
                                wrapperEl: i,
                                progress: s
                            } = this, o = 0, a = 0;
                            this.isHorizontal() ? o = n ? -e : e : a = e, r.roundLengths && (o = Math.floor(o), a = Math.floor(a)), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : a, r.cssMode ? i[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -a : r.virtualTranslate || (this.isHorizontal() ? o -= this.cssOverflowAdjustment() : a -= this.cssOverflowAdjustment(), i.style.transform = `translate3d(${o}px, ${a}px, 0px)`);
                            let l = this.maxTranslate() - this.minTranslate();
                            (0 === l ? 0 : (e - this.minTranslate()) / l) !== s && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e, t, n, r, i) {
                            let s;
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === r && (r = !0);
                            let o = this,
                                {
                                    params: a,
                                    wrapperEl: u
                                } = o;
                            if (o.animating && a.preventInteractionOnTransition) return !1;
                            let c = o.minTranslate(),
                                d = o.maxTranslate();
                            if (s = r && e > c ? c : r && e < d ? d : e, o.updateProgress(s), a.cssMode) {
                                let e = o.isHorizontal();
                                if (0 === t) u[e ? "scrollLeft" : "scrollTop"] = -s;
                                else {
                                    if (!o.support.smoothScroll) return (0, l.t)({
                                        swiper: o,
                                        targetPosition: -s,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    u.scrollTo({
                                        [e ? "left" : "top"]: -s,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (o.setTransition(0), o.setTranslate(s), n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd"))) : (o.setTransition(t), o.setTranslate(s), n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(e) {
                                o && !o.destroyed && e.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, o.animating = !1, n && o.emit("transitionEnd"))
                            }), o.wrapperEl.addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`, this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: n
                            } = this;
                            n.cssMode || (n.autoHeight && this.updateAutoHeight(), y({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: n
                            } = this;
                            this.animating = !1, n.cssMode || (this.setTransition(0), y({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e, t, n, r, i) {
                            let s;
                            void 0 === e && (e = 0), void 0 === n && (n = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let o = this,
                                a = e;
                            a < 0 && (a = 0);
                            let {
                                params: u,
                                snapGrid: c,
                                slidesGrid: h,
                                previousIndex: p,
                                activeIndex: f,
                                rtlTranslate: m,
                                wrapperEl: g,
                                enabled: y
                            } = o;
                            if (!y && !r && !i || o.destroyed || o.animating && u.preventInteractionOnTransition) return !1;
                            void 0 === t && (t = o.params.speed);
                            let v = Math.min(o.params.slidesPerGroupSkip, a),
                                b = v + Math.floor((a - v) / o.params.slidesPerGroup);
                            b >= c.length && (b = c.length - 1);
                            let A = -c[b];
                            if (u.normalizeSlideIndex)
                                for (let e = 0; e < h.length; e += 1) {
                                    let t = -Math.floor(100 * A),
                                        n = Math.floor(100 * h[e]),
                                        r = Math.floor(100 * h[e + 1]);
                                    void 0 !== h[e + 1] ? t >= n && t < r - (r - n) / 2 ? a = e : t >= n && t < r && (a = e + 1) : t >= n && (a = e)
                                }
                            if (o.initialized && a !== f && (!o.allowSlideNext && (m ? A > o.translate && A > o.minTranslate() : A < o.translate && A < o.minTranslate()) || !o.allowSlidePrev && A > o.translate && A > o.maxTranslate() && (f || 0) !== a)) return !1;
                            a !== (p || 0) && n && o.emit("beforeSlideChangeStart"), o.updateProgress(A), s = a > f ? "next" : a < f ? "prev" : "reset";
                            let w = o.virtual && o.params.virtual.enabled;
                            if (!(w && i) && (m && -A === o.translate || !m && A === o.translate)) return o.updateActiveIndex(a), u.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== u.effect && o.setTranslate(A), "reset" !== s && (o.transitionStart(n, s), o.transitionEnd(n, s)), !1;
                            if (u.cssMode) {
                                let e = o.isHorizontal(),
                                    n = m ? A : -A;
                                if (0 === t) w && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), w && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0 ? (o._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                    g[e ? "scrollLeft" : "scrollTop"] = n
                                })) : g[e ? "scrollLeft" : "scrollTop"] = n, w && requestAnimationFrame(() => {
                                    o.wrapperEl.style.scrollSnapType = "", o._immediateVirtual = !1
                                });
                                else {
                                    if (!o.support.smoothScroll) return (0, l.t)({
                                        swiper: o,
                                        targetPosition: n,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    g.scrollTo({
                                        [e ? "left" : "top"]: n,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            let x = d().isSafari;
                            return w && !i && x && o.isElement && o.virtual.update(!1, !1, a), o.setTransition(t), o.setTranslate(A), o.updateActiveIndex(a), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, r), o.transitionStart(n, s), 0 === t ? o.transitionEnd(n, s) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(e) {
                                o && !o.destroyed && e.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(n, s))
                            }), o.wrapperEl.addEventListener("transitionend", o.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e, t, n, r) {
                            void 0 === e && (e = 0), void 0 === n && (n = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let i = this;
                            if (i.destroyed) return;
                            void 0 === t && (t = i.params.speed);
                            let s = i.grid && i.params.grid && i.params.grid.rows > 1,
                                o = e;
                            if (i.params.loop) {
                                if (i.virtual && i.params.virtual.enabled) o += i.virtual.slidesBefore;
                                else {
                                    let e;
                                    if (s) {
                                        let t = o * i.params.grid.rows;
                                        e = i.slides.find(e => 1 * e.getAttribute("data-swiper-slide-index") === t).column
                                    } else e = i.getSlideIndexByData(o);
                                    let t = s ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                                        {
                                            centeredSlides: n
                                        } = i.params,
                                        a = i.params.slidesPerView;
                                    "auto" === a ? a = i.slidesPerViewDynamic() : (a = Math.ceil(parseFloat(i.params.slidesPerView, 10)), n && a % 2 == 0 && (a += 1));
                                    let l = t - e < a;
                                    if (n && (l = l || e < Math.ceil(a / 2)), r && n && "auto" !== i.params.slidesPerView && !s && (l = !1), l) {
                                        let r = n ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                                        i.loopFix({
                                            direction: r,
                                            slideTo: !0,
                                            activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                                            slideRealIndex: "next" === r ? i.realIndex : void 0
                                        })
                                    }
                                    if (s) {
                                        let e = o * i.params.grid.rows;
                                        o = i.slides.find(t => 1 * t.getAttribute("data-swiper-slide-index") === e).column
                                    } else o = i.getSlideIndexByData(o)
                                }
                            }
                            return requestAnimationFrame(() => {
                                i.slideTo(o, t, n, r)
                            }), i
                        },
                        slideNext: function(e, t, n) {
                            void 0 === t && (t = !0);
                            let r = this,
                                {
                                    enabled: i,
                                    params: s,
                                    animating: o
                                } = r;
                            if (!i || r.destroyed) return r;
                            void 0 === e && (e = r.params.speed);
                            let a = s.slidesPerGroup;
                            "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
                            let l = r.activeIndex < s.slidesPerGroupSkip ? 1 : a,
                                u = r.virtual && s.virtual.enabled;
                            if (s.loop) {
                                if (o && !u && s.loopPreventsSliding) return !1;
                                if (r.loopFix({
                                        direction: "next"
                                    }), r._clientLeft = r.wrapperEl.clientLeft, r.activeIndex === r.slides.length - 1 && s.cssMode) return requestAnimationFrame(() => {
                                    r.slideTo(r.activeIndex + l, e, t, n)
                                }), !0
                            }
                            return s.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + l, e, t, n)
                        },
                        slidePrev: function(e, t, n) {
                            void 0 === t && (t = !0);
                            let r = this,
                                {
                                    params: i,
                                    snapGrid: s,
                                    slidesGrid: o,
                                    rtlTranslate: a,
                                    enabled: l,
                                    animating: u
                                } = r;
                            if (!l || r.destroyed) return r;
                            void 0 === e && (e = r.params.speed);
                            let c = r.virtual && i.virtual.enabled;
                            if (i.loop) {
                                if (u && !c && i.loopPreventsSliding) return !1;
                                r.loopFix({
                                    direction: "prev"
                                }), r._clientLeft = r.wrapperEl.clientLeft
                            }

                            function d(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let h = d(a ? r.translate : -r.translate),
                                p = s.map(e => d(e)),
                                f = i.freeMode && i.freeMode.enabled,
                                m = s[p.indexOf(h) - 1];
                            if (void 0 === m && (i.cssMode || f)) {
                                let e;
                                s.forEach((t, n) => {
                                    h >= t && (e = n)
                                }), void 0 !== e && (m = f ? s[e] : s[e > 0 ? e - 1 : e])
                            }
                            let g = 0;
                            if (void 0 !== m && ((g = o.indexOf(m)) < 0 && (g = r.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (g = Math.max(g = g - r.slidesPerViewDynamic("previous", !0) + 1, 0))), i.rewind && r.isBeginning) {
                                let i = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
                                return r.slideTo(i, e, t, n)
                            }
                            return i.loop && 0 === r.activeIndex && i.cssMode ? (requestAnimationFrame(() => {
                                r.slideTo(g, e, t, n)
                            }), !0) : r.slideTo(g, e, t, n)
                        },
                        slideReset: function(e, t, n) {
                            if (void 0 === t && (t = !0), !this.destroyed) return void 0 === e && (e = this.params.speed), this.slideTo(this.activeIndex, e, t, n)
                        },
                        slideToClosest: function(e, t, n, r) {
                            if (void 0 === t && (t = !0), void 0 === r && (r = .5), this.destroyed) return;
                            void 0 === e && (e = this.params.speed);
                            let i = this.activeIndex,
                                s = Math.min(this.params.slidesPerGroupSkip, i),
                                o = s + Math.floor((i - s) / this.params.slidesPerGroup),
                                a = this.rtlTranslate ? this.translate : -this.translate;
                            if (a >= this.snapGrid[o]) {
                                let e = this.snapGrid[o];
                                a - e > (this.snapGrid[o + 1] - e) * r && (i += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[o - 1];
                                a - e <= (this.snapGrid[o] - e) * r && (i -= this.params.slidesPerGroup)
                            }
                            return i = Math.min(i = Math.max(i, 0), this.slidesGrid.length - 1), this.slideTo(i, e, t, n)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this;
                            if (t.destroyed) return;
                            let {
                                params: n,
                                slidesEl: r
                            } = t, i = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView, s = t.clickedIndex, o = t.isElement ? "swiper-slide" : `.${n.slideClass}`;
                            if (n.loop) {
                                if (t.animating) return;
                                e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), n.centeredSlides ? s < t.loopedSlides - i / 2 || s > t.slides.length - t.loopedSlides + i / 2 ? (t.loopFix(), s = t.getSlideIndex((0, l.e)(r, `${o}[data-swiper-slide-index="${e}"]`)[0]), (0, l.n)(() => {
                                    t.slideTo(s)
                                })) : t.slideTo(s) : s > t.slides.length - i ? (t.loopFix(), s = t.getSlideIndex((0, l.e)(r, `${o}[data-swiper-slide-index="${e}"]`)[0]), (0, l.n)(() => {
                                    t.slideTo(s)
                                })) : t.slideTo(s)
                            } else t.slideTo(s)
                        }
                    },
                    loop: {
                        loopCreate: function(e) {
                            let t = this,
                                {
                                    params: n,
                                    slidesEl: r
                                } = t;
                            if (!n.loop || t.virtual && t.params.virtual.enabled) return;
                            let i = t.grid && n.grid && n.grid.rows > 1,
                                s = n.slidesPerGroup * (i ? n.grid.rows : 1),
                                o = t.slides.length % s != 0,
                                a = i && t.slides.length % n.grid.rows != 0,
                                u = e => {
                                    for (let r = 0; r < e; r += 1) {
                                        let e = t.isElement ? (0, l.c)("swiper-slide", [n.slideBlankClass]) : (0, l.c)("div", [n.slideClass, n.slideBlankClass]);
                                        t.slidesEl.append(e)
                                    }
                                };
                            o ? n.loopAddBlankSlides ? (u(s - t.slides.length % s), t.recalcSlides(), t.updateSlides()) : (0, l.u)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)") : a && (n.loopAddBlankSlides ? (u(n.grid.rows - t.slides.length % n.grid.rows), t.recalcSlides(), t.updateSlides()) : (0, l.u)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)")), (0, l.e)(r, `.${n.slideClass}, swiper-slide`).forEach((e, t) => {
                                e.setAttribute("data-swiper-slide-index", t)
                            }), t.loopFix({
                                slideRealIndex: e,
                                direction: n.centeredSlides ? void 0 : "next"
                            })
                        },
                        loopFix: function(e) {
                            let {
                                slideRealIndex: t,
                                slideTo: n = !0,
                                direction: r,
                                setTranslate: i,
                                activeSlideIndex: s,
                                byController: o,
                                byMousewheel: a
                            } = void 0 === e ? {} : e, u = this;
                            if (!u.params.loop) return;
                            u.emit("beforeLoopFix");
                            let {
                                slides: c,
                                allowSlidePrev: d,
                                allowSlideNext: h,
                                slidesEl: p,
                                params: f
                            } = u, {
                                centeredSlides: m
                            } = f;
                            if (u.allowSlidePrev = !0, u.allowSlideNext = !0, u.virtual && f.virtual.enabled) {
                                n && (f.centeredSlides || 0 !== u.snapIndex ? f.centeredSlides && u.snapIndex < f.slidesPerView ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0) : u.snapIndex === u.snapGrid.length - 1 && u.slideTo(u.virtual.slidesBefore, 0, !1, !0) : u.slideTo(u.virtual.slides.length, 0, !1, !0)), u.allowSlidePrev = d, u.allowSlideNext = h, u.emit("loopFix");
                                return
                            }
                            let g = f.slidesPerView;
                            "auto" === g ? g = u.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(f.slidesPerView, 10)), m && g % 2 == 0 && (g += 1));
                            let y = f.slidesPerGroupAuto ? g : f.slidesPerGroup,
                                v = y;
                            v % y != 0 && (v += y - v % y), v += f.loopAdditionalSlides, u.loopedSlides = v;
                            let b = u.grid && f.grid && f.grid.rows > 1;
                            c.length < g + v ? (0, l.u)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === f.grid.fill && (0, l.u)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                            let A = [],
                                w = [],
                                x = u.activeIndex;
                            void 0 === s ? s = u.getSlideIndex(c.find(e => e.classList.contains(f.slideActiveClass))) : x = s;
                            let S = "next" === r || !r,
                                k = "prev" === r || !r,
                                E = 0,
                                T = 0,
                                C = b ? Math.ceil(c.length / f.grid.rows) : c.length,
                                P = (b ? c[s].column : s) + (m && void 0 === i ? -g / 2 + .5 : 0);
                            if (P < v) {
                                E = Math.max(v - P, y);
                                for (let e = 0; e < v - P; e += 1) {
                                    let t = e - Math.floor(e / C) * C;
                                    if (b) {
                                        let e = C - t - 1;
                                        for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && A.push(t)
                                    } else A.push(C - t - 1)
                                }
                            } else if (P + g > C - v) {
                                T = Math.max(P - (C - 2 * v), y);
                                for (let e = 0; e < T; e += 1) {
                                    let t = e - Math.floor(e / C) * C;
                                    b ? c.forEach((e, n) => {
                                        e.column === t && w.push(n)
                                    }) : w.push(t)
                                }
                            }
                            if (u.__preventObserver__ = !0, requestAnimationFrame(() => {
                                    u.__preventObserver__ = !1
                                }), k && A.forEach(e => {
                                    c[e].swiperLoopMoveDOM = !0, p.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
                                }), S && w.forEach(e => {
                                    c[e].swiperLoopMoveDOM = !0, p.append(c[e]), c[e].swiperLoopMoveDOM = !1
                                }), u.recalcSlides(), "auto" === f.slidesPerView ? u.updateSlides() : b && (A.length > 0 && k || w.length > 0 && S) && u.slides.forEach((e, t) => {
                                    u.grid.updateSlide(t, e, u.slides)
                                }), f.watchSlidesProgress && u.updateSlidesOffset(), n) {
                                if (A.length > 0 && k) {
                                    if (void 0 === t) {
                                        let e = u.slidesGrid[x],
                                            t = u.slidesGrid[x + E] - e;
                                        a ? u.setTranslate(u.translate - t) : (u.slideTo(x + Math.ceil(E), 0, !1, !0), i && (u.touchEventsData.startTranslate = u.touchEventsData.startTranslate - t, u.touchEventsData.currentTranslate = u.touchEventsData.currentTranslate - t))
                                    } else if (i) {
                                        let e = b ? A.length / f.grid.rows : A.length;
                                        u.slideTo(u.activeIndex + e, 0, !1, !0), u.touchEventsData.currentTranslate = u.translate
                                    }
                                } else if (w.length > 0 && S) {
                                    if (void 0 === t) {
                                        let e = u.slidesGrid[x],
                                            t = u.slidesGrid[x - T] - e;
                                        a ? u.setTranslate(u.translate - t) : (u.slideTo(x - T, 0, !1, !0), i && (u.touchEventsData.startTranslate = u.touchEventsData.startTranslate - t, u.touchEventsData.currentTranslate = u.touchEventsData.currentTranslate - t))
                                    } else {
                                        let e = b ? w.length / f.grid.rows : w.length;
                                        u.slideTo(u.activeIndex - e, 0, !1, !0)
                                    }
                                }
                            }
                            if (u.allowSlidePrev = d, u.allowSlideNext = h, u.controller && u.controller.control && !o) {
                                let e = {
                                    slideRealIndex: t,
                                    direction: r,
                                    setTranslate: i,
                                    activeSlideIndex: s,
                                    byController: !0
                                };
                                Array.isArray(u.controller.control) ? u.controller.control.forEach(t => {
                                    !t.destroyed && t.params.loop && t.loopFix({
                                        ...e,
                                        slideTo: t.params.slidesPerView === f.slidesPerView && n
                                    })
                                }) : u.controller.control instanceof u.constructor && u.controller.control.params.loop && u.controller.control.loopFix({
                                    ...e,
                                    slideTo: u.controller.control.params.slidesPerView === f.slidesPerView && n
                                })
                            }
                            u.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                params: e,
                                slidesEl: t
                            } = this;
                            if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                            this.recalcSlides();
                            let n = [];
                            this.slides.forEach(e => {
                                n[void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex] = e
                            }), this.slides.forEach(e => {
                                e.removeAttribute("data-swiper-slide-index")
                            }), n.forEach(e => {
                                t.append(e)
                            }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            let t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            let n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                                t.__preventObserver__ = !1
                            })
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                                e.__preventObserver__ = !1
                            }))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let {
                                params: e
                            } = this;
                            this.onTouchStart = b.bind(this), this.onTouchMove = A.bind(this), this.onTouchEnd = w.bind(this), this.onDocumentTouchStart = T.bind(this), e.cssMode && (this.onScroll = k.bind(this)), this.onClick = S.bind(this), this.onLoad = E.bind(this), C(this, "on")
                        },
                        detachEvents: function() {
                            C(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    realIndex: t,
                                    initialized: n,
                                    params: r,
                                    el: i
                                } = e,
                                s = r.breakpoints;
                            if (!s || s && 0 === Object.keys(s).length) return;
                            let o = (0, a.g)(),
                                u = "window" !== r.breakpointsBase && r.breakpointsBase ? "container" : r.breakpointsBase,
                                c = ["window", "container"].includes(r.breakpointsBase) || !r.breakpointsBase ? e.el : o.querySelector(r.breakpointsBase),
                                d = e.getBreakpoint(s, u, c);
                            if (!d || e.currentBreakpoint === d) return;
                            let h = (d in s ? s[d] : void 0) || e.originalParams,
                                p = P(e, r),
                                f = P(e, h),
                                m = e.params.grabCursor,
                                g = h.grabCursor,
                                y = r.enabled;
                            p && !f ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !p && f && (i.classList.add(`${r.containerModifierClass}grid`), (h.grid.fill && "column" === h.grid.fill || !h.grid.fill && "column" === r.grid.fill) && i.classList.add(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), m && !g ? e.unsetGrabCursor() : !m && g && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                if (void 0 === h[t]) return;
                                let n = r[t] && r[t].enabled,
                                    i = h[t] && h[t].enabled;
                                n && !i && e[t].disable(), !n && i && e[t].enable()
                            });
                            let v = h.direction && h.direction !== r.direction,
                                b = r.loop && (h.slidesPerView !== r.slidesPerView || v),
                                A = r.loop;
                            v && n && e.changeDirection(), (0, l.w)(e.params, h);
                            let w = e.params.enabled,
                                x = e.params.loop;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), y && !w ? e.disable() : !y && w && e.enable(), e.currentBreakpoint = d, e.emit("_beforeBreakpoint", h), n && (b ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !A && x ? (e.loopCreate(t), e.updateSlides()) : A && !x && e.loopDestroy()), e.emit("breakpoint", h)
                        },
                        getBreakpoint: function(e, t, n) {
                            if (void 0 === t && (t = "window"), !e || "container" === t && !n) return;
                            let r = !1,
                                i = (0, a.a)(),
                                s = "window" === t ? i.innerHeight : n.clientHeight,
                                o = Object.keys(e).map(e => "string" == typeof e && 0 === e.indexOf("@") ? {
                                    value: s * parseFloat(e.substr(1)),
                                    point: e
                                } : {
                                    value: e,
                                    point: e
                                });
                            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < o.length; e += 1) {
                                let {
                                    point: s,
                                    value: a
                                } = o[e];
                                "window" === t ? i.matchMedia(`(min-width: ${a}px)`).matches && (r = s) : a <= n.clientWidth && (r = s)
                            }
                            return r || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let {
                                isLocked: e,
                                params: t
                            } = this, {
                                slidesOffsetBefore: n
                            } = t;
                            if (n) {
                                let e = this.slides.length - 1,
                                    t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * n;
                                this.isLocked = this.size > t
                            } else this.isLocked = 1 === this.snapGrid.length;
                            !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: n,
                                el: r,
                                device: i
                            } = this, s = function(e, t) {
                                let n = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(r => {
                                        e[r] && n.push(t + r)
                                    }) : "string" == typeof e && n.push(t + e)
                                }), n
                            }(["initialized", t.direction, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: n
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: i.android
                            }, {
                                ios: i.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...s), r.classList.add(...e), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                el: e,
                                classNames: t
                            } = this;
                            e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
                        }
                    }
                },
                R = {};
            class I {
                constructor() {
                    let e, t;
                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : [e, t] = r, t || (t = {}), t = (0, l.w)({}, t), e && !t.el && (t.el = e);
                    let s = (0, a.g)();
                    if (t.el && "string" == typeof t.el && s.querySelectorAll(t.el).length > 1) {
                        let e = [];
                        return s.querySelectorAll(t.el).forEach(n => {
                            let r = (0, l.w)({}, t, {
                                el: n
                            });
                            e.push(new I(r))
                        }), e
                    }
                    let o = this;
                    o.__swiper__ = !0, o.support = u(), o.device = c({
                        userAgent: t.userAgent
                    }), o.browser = d(), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
                    let h = {};
                    o.modules.forEach(e => {
                        e({
                            params: t,
                            swiper: o,
                            extendParams: function(e, t) {
                                return function(n) {
                                    void 0 === n && (n = {});
                                    let r = Object.keys(n)[0],
                                        i = n[r];
                                    if ("object" != typeof i || null === i || (!0 === e[r] && (e[r] = {
                                            enabled: !0
                                        }), "navigation" === r && e[r] && e[r].enabled && !e[r].prevEl && !e[r].nextEl && (e[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && e[r] && e[r].enabled && !e[r].el && (e[r].auto = !0), !(r in e && "enabled" in i))) {
                                        (0, l.w)(t, n);
                                        return
                                    }
                                    "object" != typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {
                                        enabled: !1
                                    }), (0, l.w)(t, n)
                                }
                            }(t, h),
                            on: o.on.bind(o),
                            once: o.once.bind(o),
                            off: o.off.bind(o),
                            emit: o.emit.bind(o)
                        })
                    });
                    let p = (0, l.w)({}, O, h);
                    return o.params = (0, l.w)({}, p, R, t), o.originalParams = (0, l.w)({}, o.params), o.passedParams = (0, l.w)({}, t), o.params && o.params.on && Object.keys(o.params.on).forEach(e => {
                        o.on(e, o.params.on[e])
                    }), o.params && o.params.onAny && o.onAny(o.params.onAny), Object.assign(o, {
                        enabled: o.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === o.params.direction,
                        isVertical: () => "vertical" === o.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return 8388608 * Math.trunc(this.translate / 8388608)
                        },
                        allowSlideNext: o.params.allowSlideNext,
                        allowSlidePrev: o.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: o.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            pointerId: null,
                            touchId: null
                        },
                        allowClick: !0,
                        allowTouchMove: o.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), o.emit("_swiper"), o.params.init && o.init(), o
                }
                getDirectionLabel(e) {
                    return this.isHorizontal() ? e : ({
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    })[e]
                }
                getSlideIndex(e) {
                    let {
                        slidesEl: t,
                        params: n
                    } = this, r = (0, l.e)(t, `.${n.slideClass}, swiper-slide`), i = (0, l.h)(r[0]);
                    return (0, l.h)(e) - i
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.find(t => 1 * t.getAttribute("data-swiper-slide-index") === e))
                }
                recalcSlides() {
                    let {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = (0, l.e)(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
                }
                disable() {
                    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let n = this.minTranslate(),
                        r = (this.maxTranslate() - n) * e + n;
                    this.translateTo(r, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.forEach(n => {
                        let r = e.getSlideClasses(n);
                        t.push({
                            slideEl: n,
                            classNames: r
                        }), e.emit("_slideClass", n, r)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    let {
                        params: n,
                        slides: r,
                        slidesGrid: i,
                        slidesSizesGrid: s,
                        size: o,
                        activeIndex: a
                    } = this, l = 1;
                    if ("number" == typeof n.slidesPerView) return n.slidesPerView;
                    if (n.centeredSlides) {
                        let e, t = r[a] ? Math.ceil(r[a].swiperSlideSize) : 0;
                        for (let n = a + 1; n < r.length; n += 1) r[n] && !e && (t += Math.ceil(r[n].swiperSlideSize), l += 1, t > o && (e = !0));
                        for (let n = a - 1; n >= 0; n -= 1) r[n] && !e && (t += r[n].swiperSlideSize, l += 1, t > o && (e = !0))
                    } else if ("current" === e)
                        for (let e = a + 1; e < r.length; e += 1)(t ? i[e] + s[e] - i[a] < o : i[e] - i[a] < o) && (l += 1);
                    else
                        for (let e = a - 1; e >= 0; e -= 1) i[a] - i[e] < o && (l += 1);
                    return l
                }
                update() {
                    let e;
                    let t = this;
                    if (!t || t.destroyed) return;
                    let {
                        snapGrid: n,
                        params: r
                    } = t;

                    function i() {
                        let e = Math.min(Math.max(t.rtlTranslate ? -1 * t.translate : t.translate, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (r.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                            e.complete && f(t, e)
                        }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) i(), r.autoHeight && t.updateAutoHeight();
                    else {
                        if (("auto" === r.slidesPerView || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
                            let n = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
                            e = t.slideTo(n.length - 1, 0, !1, !0)
                        } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                        e || i()
                    }
                    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    let n = this.params.direction;
                    return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${n}`), this.el.classList.add(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.forEach(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), this.emit("changeDirection"), t && this.update()), this
                }
                changeLanguageDirection(e) {
                    (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let n = e || t.params.el;
                    if ("string" == typeof n && (n = document.querySelector(n)), !n) return !1;
                    n.swiper = t, n.parentNode && n.parentNode.host && n.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                    let r = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        i = n && n.shadowRoot && n.shadowRoot.querySelector ? n.shadowRoot.querySelector(r()) : (0, l.e)(n, r())[0];
                    return !i && t.params.createElements && (i = (0, l.c)("div", t.params.wrapperClass), n.append(i), (0, l.e)(n, `.${t.params.slideClass}`).forEach(e => {
                        i.append(e)
                    })), Object.assign(t, {
                        el: n,
                        wrapperEl: i,
                        slidesEl: t.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : i,
                        hostEl: t.isElement ? n.parentNode.host : n,
                        mounted: !0,
                        rtl: "rtl" === n.dir.toLowerCase() || "rtl" === (0, l.p)(n, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === (0, l.p)(n, "direction")),
                        wrongRTL: "-webkit-box" === (0, l.p)(i, "display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized || !1 === t.mount(e)) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                    let n = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach(e => {
                        e.complete ? f(t, e) : e.addEventListener("load", e => {
                            f(t, e.target)
                        })
                    }), g(t), t.initialized = !0, g(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    let n = this,
                        {
                            params: r,
                            el: i,
                            wrapperEl: s,
                            slides: o
                        } = n;
                    return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), i && "string" != typeof i && i.removeAttribute("style"), s && s.removeAttribute("style"), o && o.length && o.forEach(e => {
                        e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(e => {
                        n.off(e)
                    }), !1 !== e && (n.el && "string" != typeof n.el && (n.el.swiper = null), (0, l.x)(n)), n.destroyed = !0), null
                }
                static extendDefaults(e) {
                    (0, l.w)(R, e)
                }
                static get extendedDefaults() {
                    return R
                }
                static get defaults() {
                    return O
                }
                static installModule(e) {
                    I.prototype.__modules__ || (I.prototype.__modules__ = []);
                    let t = I.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? e.forEach(e => I.installModule(e)) : I.installModule(e), I
                }
            }
            Object.keys(M).forEach(e => {
                Object.keys(M[e]).forEach(t => {
                    I.prototype[t] = M[e][t]
                })
            }), I.use([function(e) {
                let {
                    swiper: t,
                    on: n,
                    emit: r
                } = e, i = (0, a.a)(), s = null, o = null, l = () => {
                    t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"))
                }, u = () => {
                    t && !t.destroyed && t.initialized && (s = new ResizeObserver(e => {
                        o = i.requestAnimationFrame(() => {
                            let {
                                width: n,
                                height: r
                            } = t, i = n, s = r;
                            e.forEach(e => {
                                let {
                                    contentBoxSize: n,
                                    contentRect: r,
                                    target: o
                                } = e;
                                o && o !== t.el || (i = r ? r.width : (n[0] || n).inlineSize, s = r ? r.height : (n[0] || n).blockSize)
                            }), (i !== n || s !== r) && l()
                        })
                    })).observe(t.el)
                }, c = () => {
                    o && i.cancelAnimationFrame(o), s && s.unobserve && t.el && (s.unobserve(t.el), s = null)
                }, d = () => {
                    t && !t.destroyed && t.initialized && r("orientationchange")
                };
                n("init", () => {
                    if (t.params.resizeObserver && void 0 !== i.ResizeObserver) {
                        u();
                        return
                    }
                    i.addEventListener("resize", l), i.addEventListener("orientationchange", d)
                }), n("destroy", () => {
                    c(), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", d)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: r,
                    emit: i
                } = e, s = [], o = (0, a.a)(), u = function(e, n) {
                    void 0 === n && (n = {});
                    let r = new(o.MutationObserver || o.WebkitMutationObserver)(e => {
                        if (t.__preventObserver__) return;
                        if (1 === e.length) {
                            i("observerUpdate", e[0]);
                            return
                        }
                        let n = function() {
                            i("observerUpdate", e[0])
                        };
                        o.requestAnimationFrame ? o.requestAnimationFrame(n) : o.setTimeout(n, 0)
                    });
                    r.observe(e, {
                        attributes: void 0 === n.attributes || n.attributes,
                        childList: t.isElement || (void 0 === n.childList || n).childList,
                        characterData: void 0 === n.characterData || n.characterData
                    }), s.push(r)
                };
                n({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), r("init", () => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            let e = (0, l.a)(t.hostEl);
                            for (let t = 0; t < e.length; t += 1) u(e[t])
                        }
                        u(t.hostEl, {
                            childList: t.params.observeSlideChildren
                        }), u(t.wrapperEl, {
                            attributes: !1
                        })
                    }
                }), r("destroy", () => {
                    s.forEach(e => {
                        e.disconnect()
                    }), s.splice(0, s.length)
                })
            }]);
            let D = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function L(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
            }

            function j(e, t) {
                let n = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > n.indexOf(e)).forEach(n => {
                    void 0 === e[n] ? e[n] = t[n] : L(t[n]) && L(e[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? e[n] = t[n] : j(e[n], t[n]) : e[n] = t[n]
                })
            }

            function _(e) {
                return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function B(e) {
                return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
            }

            function F(e) {
                return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
            }

            function N(e) {
                void 0 === e && (e = "");
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    n = [];
                return t.forEach(e => {
                    0 > n.indexOf(e) && n.push(e)
                }), n.join(" ")
            }
            let V = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function z() {
                return (z = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function U(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function $(e, t) {
                return "undefined" == typeof window ? (0, o.useEffect)(e, t) : (0, o.useLayoutEffect)(e, t)
            }
            let q = (0, o.createContext)(null),
                W = (0, o.createContext)(null),
                H = (0, o.forwardRef)(function(e, t) {
                    var n;
                    let {
                        className: r,
                        tag: i = "div",
                        wrapperTag: s = "div",
                        children: a,
                        onSwiper: l,
                        ...u
                    } = void 0 === e ? {} : e, c = !1, [d, h] = (0, o.useState)("swiper"), [p, f] = (0, o.useState)(null), [m, g] = (0, o.useState)(!1), y = (0, o.useRef)(!1), v = (0, o.useRef)(null), b = (0, o.useRef)(null), A = (0, o.useRef)(null), w = (0, o.useRef)(null), x = (0, o.useRef)(null), S = (0, o.useRef)(null), k = (0, o.useRef)(null), E = (0, o.useRef)(null), {
                        params: T,
                        passedParams: C,
                        rest: P,
                        events: M
                    } = function(e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = !0);
                        let n = {
                                on: {}
                            },
                            r = {},
                            i = {};
                        j(n, O), n._emitClasses = !0, n.init = !1;
                        let s = {},
                            o = D.map(e => e.replace(/_/, ""));
                        return Object.keys(Object.assign({}, e)).forEach(a => {
                            void 0 !== e[a] && (o.indexOf(a) >= 0 ? L(e[a]) ? (n[a] = {}, i[a] = {}, j(n[a], e[a]), j(i[a], e[a])) : (n[a] = e[a], i[a] = e[a]) : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a] ? t ? r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : s[a] = e[a])
                        }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                            !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e]
                        }), {
                            params: n,
                            passedParams: i,
                            rest: s,
                            events: r
                        }
                    }(u), {
                        slides: R,
                        slots: q
                    } = function(e) {
                        let t = [],
                            n = {
                                "container-start": [],
                                "container-end": [],
                                "wrapper-start": [],
                                "wrapper-end": []
                            };
                        return o.Children.toArray(e).forEach(e => {
                            if (U(e)) t.push(e);
                            else if (e.props && e.props.slot && n[e.props.slot]) n[e.props.slot].push(e);
                            else if (e.props && e.props.children) {
                                let r = function e(t) {
                                    let n = [];
                                    return o.Children.toArray(t).forEach(t => {
                                        U(t) ? n.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => n.push(e))
                                    }), n
                                }(e.props.children);
                                r.length > 0 ? r.forEach(e => t.push(e)) : n["container-end"].push(e)
                            } else n["container-end"].push(e)
                        }), {
                            slides: t,
                            slots: n
                        }
                    }(a), H = () => {
                        g(!m)
                    };
                    Object.assign(T.on, {
                        _containerClasses(e, t) {
                            h(t)
                        }
                    });
                    let G = () => {
                        Object.assign(T.on, M), c = !0;
                        let e = {
                            ...T
                        };
                        if (delete e.wrapperClass, b.current = new I(e), b.current.virtual && b.current.params.virtual.enabled) {
                            b.current.virtual.slides = R;
                            let e = {
                                cache: !1,
                                slides: R,
                                renderExternal: f,
                                renderExternalUpdate: !1
                            };
                            j(b.current.params.virtual, e), j(b.current.originalParams.virtual, e)
                        }
                    };
                    v.current || G(), b.current && b.current.on("_beforeBreakpoint", H);
                    let Q = () => {
                            !c && M && b.current && Object.keys(M).forEach(e => {
                                b.current.on(e, M[e])
                            })
                        },
                        Y = () => {
                            M && b.current && Object.keys(M).forEach(e => {
                                b.current.off(e, M[e])
                            })
                        };
                    return (0, o.useEffect)(() => () => {
                        b.current && b.current.off("_beforeBreakpoint", H)
                    }), (0, o.useEffect)(() => {
                        !y.current && b.current && (b.current.emitSlidesClasses(), y.current = !0)
                    }), $(() => {
                        if (t && (t.current = v.current), v.current) return b.current.destroyed && G(),
                            function(e, t) {
                                let {
                                    el: n,
                                    nextEl: r,
                                    prevEl: i,
                                    paginationEl: s,
                                    scrollbarEl: o,
                                    swiper: a
                                } = e;
                                _(t) && r && i && (a.params.navigation.nextEl = r, a.originalParams.navigation.nextEl = r, a.params.navigation.prevEl = i, a.originalParams.navigation.prevEl = i), B(t) && s && (a.params.pagination.el = s, a.originalParams.pagination.el = s), F(t) && o && (a.params.scrollbar.el = o, a.originalParams.scrollbar.el = o), a.init(n)
                            }({
                                el: v.current,
                                nextEl: x.current,
                                prevEl: S.current,
                                paginationEl: k.current,
                                scrollbarEl: E.current,
                                swiper: b.current
                            }, T), l && !b.current.destroyed && l(b.current), () => {
                                b.current && !b.current.destroyed && b.current.destroy(!0, !1)
                            }
                    }, []), $(() => {
                        Q();
                        let e = function(e, t, n, r, i) {
                            let s = [];
                            if (!t) return s;
                            let o = e => {
                                0 > s.indexOf(e) && s.push(e)
                            };
                            if (n && r) {
                                let e = r.map(i),
                                    t = n.map(i);
                                e.join("") !== t.join("") && o("children"), r.length !== n.length && o("children")
                            }
                            return D.filter(e => "_" === e[0]).map(e => e.replace(/_/, "")).forEach(n => {
                                if (n in e && n in t) {
                                    if (L(e[n]) && L(t[n])) {
                                        let r = Object.keys(e[n]),
                                            i = Object.keys(t[n]);
                                        r.length !== i.length ? o(n) : (r.forEach(r => {
                                            e[n][r] !== t[n][r] && o(n)
                                        }), i.forEach(r => {
                                            e[n][r] !== t[n][r] && o(n)
                                        }))
                                    } else e[n] !== t[n] && o(n)
                                }
                            }), s
                        }(C, A.current, R, w.current, e => e.key);
                        return A.current = C, w.current = R, e.length && b.current && !b.current.destroyed && function(e) {
                            let t, n, r, i, s, o, a, l, {
                                    swiper: u,
                                    slides: c,
                                    passedParams: d,
                                    changedParams: h,
                                    nextEl: p,
                                    prevEl: f,
                                    scrollbarEl: m,
                                    paginationEl: g
                                } = e,
                                y = h.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                                {
                                    params: v,
                                    pagination: b,
                                    navigation: A,
                                    scrollbar: w,
                                    virtual: x,
                                    thumbs: S
                                } = u;
                            h.includes("thumbs") && d.thumbs && d.thumbs.swiper && !d.thumbs.swiper.destroyed && v.thumbs && (!v.thumbs.swiper || v.thumbs.swiper.destroyed) && (t = !0), h.includes("controller") && d.controller && d.controller.control && v.controller && !v.controller.control && (n = !0), h.includes("pagination") && d.pagination && (d.pagination.el || g) && (v.pagination || !1 === v.pagination) && b && !b.el && (r = !0), h.includes("scrollbar") && d.scrollbar && (d.scrollbar.el || m) && (v.scrollbar || !1 === v.scrollbar) && w && !w.el && (i = !0), h.includes("navigation") && d.navigation && (d.navigation.prevEl || f) && (d.navigation.nextEl || p) && (v.navigation || !1 === v.navigation) && A && !A.prevEl && !A.nextEl && (s = !0);
                            let k = e => {
                                u[e] && (u[e].destroy(), "navigation" === e ? (u.isElement && (u[e].prevEl.remove(), u[e].nextEl.remove()), v[e].prevEl = void 0, v[e].nextEl = void 0, u[e].prevEl = void 0, u[e].nextEl = void 0) : (u.isElement && u[e].el.remove(), v[e].el = void 0, u[e].el = void 0))
                            };
                            h.includes("loop") && u.isElement && (v.loop && !d.loop ? o = !0 : !v.loop && d.loop ? a = !0 : l = !0), y.forEach(e => {
                                if (L(v[e]) && L(d[e])) Object.assign(v[e], d[e]), ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled" in d[e] && !d[e].enabled && k(e);
                                else {
                                    let t = d[e];
                                    (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && k(e): v[e] = d[e]
                                }
                            }), y.includes("controller") && !n && u.controller && u.controller.control && v.controller && v.controller.control && (u.controller.control = v.controller.control), h.includes("children") && c && x && v.virtual.enabled ? (x.slides = c, x.update(!0)) : h.includes("virtual") && x && v.virtual.enabled && (c && (x.slides = c), x.update(!0)), h.includes("children") && c && v.loop && (l = !0), t && S.init() && S.update(!0), n && (u.controller.control = v.controller.control), r && (u.isElement && (!g || "string" == typeof g) && ((g = document.createElement("div")).classList.add("swiper-pagination"), g.part.add("pagination"), u.el.appendChild(g)), g && (v.pagination.el = g), b.init(), b.render(), b.update()), i && (u.isElement && (!m || "string" == typeof m) && ((m = document.createElement("div")).classList.add("swiper-scrollbar"), m.part.add("scrollbar"), u.el.appendChild(m)), m && (v.scrollbar.el = m), w.init(), w.updateSize(), w.setTranslate()), s && (u.isElement && (p && "string" != typeof p || ((p = document.createElement("div")).classList.add("swiper-button-next"), p.innerHTML = u.hostEl.constructor.nextButtonSvg, p.part.add("button-next"), u.el.appendChild(p)), f && "string" != typeof f || ((f = document.createElement("div")).classList.add("swiper-button-prev"), f.innerHTML = u.hostEl.constructor.prevButtonSvg, f.part.add("button-prev"), u.el.appendChild(f))), p && (v.navigation.nextEl = p), f && (v.navigation.prevEl = f), A.init(), A.update()), h.includes("allowSlideNext") && (u.allowSlideNext = d.allowSlideNext), h.includes("allowSlidePrev") && (u.allowSlidePrev = d.allowSlidePrev), h.includes("direction") && u.changeDirection(d.direction, !1), (o || l) && u.loopDestroy(), (a || l) && u.loopCreate(), u.update()
                        }({
                            swiper: b.current,
                            slides: R,
                            passedParams: C,
                            changedParams: e,
                            nextEl: x.current,
                            prevEl: S.current,
                            scrollbarEl: E.current,
                            paginationEl: k.current
                        }), () => {
                            Y()
                        }
                    }), $(() => {
                        V(b.current)
                    }, [p]), o.createElement(i, z({
                        ref: v,
                        className: N(`${d}${r?` ${r}`:""}`)
                    }, P), o.createElement(W.Provider, {
                        value: b.current
                    }, q["container-start"], o.createElement(s, {
                        className: (void 0 === (n = T.wrapperClass) && (n = ""), n) ? n.includes("swiper-wrapper") ? n : `swiper-wrapper ${n}` : "swiper-wrapper"
                    }, q["wrapper-start"], T.virtual ? function(e, t, n) {
                        if (!n) return null;
                        let r = e => {
                                let n = e;
                                return e < 0 ? n = t.length + e : n >= t.length && (n -= t.length), n
                            },
                            i = e.isHorizontal() ? {
                                [e.rtlTranslate ? "right" : "left"]: `${n.offset}px`
                            } : {
                                top: `${n.offset}px`
                            },
                            {
                                from: s,
                                to: a
                            } = n,
                            l = e.params.loop ? -t.length : 0,
                            u = e.params.loop ? 2 * t.length : t.length,
                            c = [];
                        for (let e = l; e < u; e += 1) e >= s && e <= a && c.push(t[r(e)]);
                        return c.map((t, n) => o.cloneElement(t, {
                            swiper: e,
                            style: i,
                            key: t.props.virtualIndex || t.key || `slide-${n}`
                        }))
                    }(b.current, R, p) : R.map((e, t) => o.cloneElement(e, {
                        swiper: b.current,
                        swiperSlideIndex: t
                    })), q["wrapper-end"]), _(T) && o.createElement(o.Fragment, null, o.createElement("div", {
                        ref: S,
                        className: "swiper-button-prev"
                    }), o.createElement("div", {
                        ref: x,
                        className: "swiper-button-next"
                    })), F(T) && o.createElement("div", {
                        ref: E,
                        className: "swiper-scrollbar"
                    }), B(T) && o.createElement("div", {
                        ref: k,
                        className: "swiper-pagination"
                    }), q["container-end"]))
                });
            H.displayName = "Swiper";
            let G = (0, o.forwardRef)(function(e, t) {
                let {
                    tag: n = "div",
                    children: r,
                    className: i = "",
                    swiper: s,
                    zoom: a,
                    lazy: l,
                    virtualIndex: u,
                    swiperSlideIndex: c,
                    ...d
                } = void 0 === e ? {} : e, h = (0, o.useRef)(null), [p, f] = (0, o.useState)("swiper-slide"), [m, g] = (0, o.useState)(!1);

                function y(e, t, n) {
                    t === h.current && f(n)
                }
                $(() => {
                    if (void 0 !== c && (h.current.swiperSlideIndex = c), t && (t.current = h.current), h.current && s) {
                        if (s.destroyed) {
                            "swiper-slide" !== p && f("swiper-slide");
                            return
                        }
                        return s.on("_slideClass", y), () => {
                            s && s.off("_slideClass", y)
                        }
                    }
                }), $(() => {
                    s && h.current && !s.destroyed && f(s.getSlideClasses(h.current))
                }, [s]);
                let v = {
                        isActive: p.indexOf("swiper-slide-active") >= 0,
                        isVisible: p.indexOf("swiper-slide-visible") >= 0,
                        isPrev: p.indexOf("swiper-slide-prev") >= 0,
                        isNext: p.indexOf("swiper-slide-next") >= 0
                    },
                    b = () => "function" == typeof r ? r(v) : r;
                return o.createElement(n, z({
                    ref: h,
                    className: N(`${p}${i?` ${i}`:""}`),
                    "data-swiper-slide-index": u,
                    onLoad: () => {
                        g(!0)
                    }
                }, d), a && o.createElement(q.Provider, {
                    value: v
                }, o.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof a ? a : void 0
                }, b(), l && !m && o.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !a && o.createElement(q.Provider, {
                    value: v
                }, b(), l && !m && o.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            });
            G.displayName = "SwiperSlide"
        }
    }
]);