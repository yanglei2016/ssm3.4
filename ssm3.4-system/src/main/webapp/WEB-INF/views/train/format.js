(function(C) {
	jQuery.extend({
		ht_getcookie : function(W) {
			var k = document.cookie.indexOf(W);
			var i = document.cookie.indexOf(";", k);
			return k == -1 ? "" : unescape(document.cookie.substring(k
					+ W.length + 1, (i > k ? i : document.cookie.length)))
		},
		ht_setcookie : function(aa, Z, Y, X, k, W) {
			var i = new Date();
			i.setTime(i.getTime() + Y * 1000);
			document.cookie = escape(aa) + "=" + escape(Z)
					+ (i ? "; expires=" + i.toGMTString() : "")
					+ (X ? "; path=" + X : "; path=/")
					+ (k ? "; domain=" + k : "") + (W ? "; secure" : "")
		},
		textFocus : function(W) {
			var k, i, W = W === undefined ? 0 : parseInt(W);
			this.each(function() {
				if (!this.setSelectionRange) {
					k = this.createTextRange();
					W === 0 ? k.collapse(false) : k.move("character", W);
					k.select()
				} else {
					i = this.value.length;
					W === 0 ? this.setSelectionRange(i, i) : this
							.setSelectionRange(W, W)
				}
				this.focus()
			});
			return this
		}
	});
	var w = [];
	var D = [];
	var E = [];
	var G = [];
	var v = 0;
	var y = 0;
	var A = 0;
	var S = 0;
	var U = false;
	var g = false;
	var H = false;
	var z = 0;
	var I = null;
	var m = -1;
	var N = {};
	var f = [];
	var e = [];
	var d = [];
	var b = [];
	var V = [];
	var F = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
			"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
			"y", "z");
	var j = [];
	var x = false;
	var c = [];
	for (var R = 0; R < 26; R++) {
		c[R] = []
	}
	var P = [];
	for (var T = 0; T < 5; T++) {
		P[T] = []
	}
	var t = [];
	var s = [];
	var q = [];
	var p = [];
	var o = [];
	var K = [];
	var a = false;
	var L = true;
	var u = 12;
	var h = "简码/汉字";
	var n = "简码/汉字";
	var r = "inp-txt_select";
	var l = "inp-txt";
	var B = false;
	var J = null;
	var Q = null;
	var M = false;
	var O = C.ht_getcookie("hj_favcity");
	C.stationFor12306 = {
		bindInputs : [],
		get_initInputValue : function() {
			return h
		},
		get_initTopInputValue : function() {
			return n
		},
		city_Bind : function(k) {
			if (k.length == 0) {
				return
			}
			var i = "";
			C
					.each(
							k,
							function(W) {
								if (O == k[W][2]) {
									i += "<div class='cityline' id='citem_" + W
											+ "' cturn='" + k[W][6]
											+ "'><span class='ralign'><b>"
											+ k[W][1] + "</b></span></div>\n"
								} else {
									i += "<div class='cityline' id='citem_"
											+ W
											+ "' cturn='"
											+ k[W][6]
											+ "'><span class='ralign'>"
											+ k[W][1]
											+ "</span><span style='float:right;' class='ralign'>"
											+ k[W][3] + "</span></div>\n"
								}
							});
			C("#panel_cities").html(i);
			C(".cityline").mouseover(function() {
				C.stationFor12306.city_shiftSelect(this)
			}).click(function() {
				C.stationFor12306.city_confirmSelect();
				E = C.stationFor12306.filterCity("");
				C.stationFor12306.city_showlist(0)
			});
			C.stationFor12306.city_shiftSelect(C("#citem_0"))
		},
		city_changeSelectIndex : function(i) {
			var k = A + i;
			if (k == -1) {
				C.stationFor12306.city_showlist(z - 1);
				C.stationFor12306
						.city_shiftSelect(C("#citem_" + (G.length - 1)))
			} else {
				if (k == G.length) {
					C.stationFor12306.city_showlist(z + 1);
					C.stationFor12306.city_shiftSelect(C("#citem_0"))
				} else {
					C.stationFor12306.city_shiftSelect(C("#citem_" + k))
				}
			}
		},
		city_confirmSelect : function() {
			I.val(S[1]);
			curObjCode.val(S[2]);
			if (B) {
				C.stationFor12306.setStationInCookies(S[1], S[2])
			}
			C("#form_cities").css("display", "none");
			C("#form_cities2").css("display", "none");
			C("#form_cities3").css("display", "none");
			m = -1;
			y = 0;
			C.stationFor12306.setStationStyle();
			if (L) {
				C.stationFor12306.LoadJS(S[2])
			}
			if (J) {
				J(I, curObjCode)
			}
		},
		city_shiftSelect : function(k) {
			if (v != k) {
				if (v != 0) {
					C(v).removeClass("citylineover").addClass("cityline").css(
							"backgroundColor", "white")
				}
				if (k != 0) {
					try {
						v = k;
						var i = C(v).removeClass("cityline").addClass(
								"citylineover").css("backgroundColor",
								"#c8e3fc");
						A = Number(i.attr("id").split("_")[1]);
						S = w[Number(i.attr("cturn"))];
						C("#cityid").val(S[2])
					} catch (W) {
					}
				}
			}
		},
		city_shiftSelectInLi : function(i) {
			if (y != i) {
				if (y != 0) {
					C(y).removeClass("ac_over").addClass("ac_odd")
				}
				if (i != 0) {
					try {
						y = i;
						C(y).removeClass("ac_odd").addClass("ac_over")
					} catch (k) {
					}
				}
			}
		},
		js : function(W) {
			var k;
			for (k = 1; k <= 7; k++) {
				if (C("#nav_list" + k).attr("class")) {
					C("#ul_list" + k).css("display", "none");
					C("#nav_list" + k).removeClass("action")
				}
			}
			for (k = 1; k <= 7; k++) {
				if (k == W) {
					C("#ul_list" + k).css("display", "block");
					C("#nav_list" + k).addClass("action");
					if (k == 1 || k == 7) {
						C("#flip_cities2").css("display", "none")
					}
					if (k > 1 && k < 7) {
						var Y = C.stationFor12306
								.tHtmlGetCityName(W - 1, -1, 0);
						if (Y > u) {
							var X = Math.ceil(Y / u);
							if (X > 1) {
								C.stationFor12306.pageDesigh(X, 0, k)
							}
							C("#flip_cities2").css("display", "block")
						} else {
							C("#flip_cities2").css("display", "none")
						}
					} else {
						I.focus()
					}
				} else {
					C("#ul_list" + k).css("display", "none");
					C("#nav_list" + k).removeClass("action")
				}
			}
			if (1 != W) {
				C(".ac_even").on("mouseover", function() {
					C.stationFor12306.city_shiftSelectInLi(this)
				}).on(
						"click",
						function() {
							I.val(C(this).text());
							curObjCode.val(C(this).attr("data"));
							if (B) {
								C.stationFor12306.setStationInCookies(C(this)
										.text(), C(this).attr("data"))
							}
							C("#form_cities2").css("display", "none");
							m = -1;
							y = 0;
							C.stationFor12306.setStationStyle();
							if (L) {
								C.stationFor12306.LoadJS(C(this).attr("data"))
							}
							if (J) {
								J(I, curObjCode)
							}
						})
			}
		},
		tHtmlGetCityName : function(k, i, X) {
			switch (k) {
			case 0:
				if (i == -1) {
					return D.length
				}
				if (i == -2) {
					return D
				}
				return D[i];
				break;
			case 1:
				if (i == -1) {
					return c[3].length
				}
				if (i == -2) {
					return f
				}
				if (f.length > u) {
					var W = Math.ceil((f.length) / u);
					if (W > 1) {
						t = f.slice(u * (X), Math.min(u * (X + 1), f.length));
						return t[i]
					}
				}
				return f[i];
				break;
			case 2:
				if (i == -1) {
					return c[7].length
				}
				if (i == -2) {
					return e
				}
				if (e.length > u) {
					var W = Math.ceil((e.length) / u);
					if (W > 1) {
						s = e.slice(u * (X), Math.min(u * (X + 1), e.length));
						return s[i]
					}
				}
				return e[i];
				break;
			case 3:
				if (i == -1) {
					return c[11].length
				}
				if (i == -2) {
					return d
				}
				if (d.length > u) {
					var W = Math.ceil((d.length) / u);
					if (W > 1) {
						q = d.slice(u * (X), Math.min(u * (X + 1), d.length));
						return q[i]
					}
				}
				return d[i];
				break;
			case 4:
				if (i == -1) {
					return c[18].length
				}
				if (i == -2) {
					return b
				}
				if (b.length > u) {
					var W = Math.ceil((b.length) / u);
					if (W > 1) {
						p = b.slice(u * (X), Math.min(u * (X + 1), b.length));
						return p[i]
					}
				}
				return b[i];
				break;
			case 5:
				if (i == -1) {
					return c[24].length
				}
				if (i == -2) {
					return V
				}
				if (V.length > u) {
					var W = Math.ceil((V.length) / u);
					if (W > 1) {
						o = V.slice(u * (X), Math.min(u * (X + 1), V.length));
						return o[i]
					}
				}
				return V[i];
				break;
			default:
				return "error";
				break
			}
		},
		closeShowCity : function() {
			C("#form_cities2").css("display", "none");
			m = -1;
			y = 0;
			C.each(C.stationFor12306.bindInputs, function(Y, X) {
				var W = "#" + X;
				var k = "#" + X + "Text";
				var i = C(k).val();
				if ("" == i) {
					C(k).val(h);
					C.stationFor12306.from_to_station_class_gray(C(k));
					C(W).val("")
				}
			})
		},
		showAllCity : function() {
			var ab = "";
			var k = "440px";
			if (B) {
				k = "400px"
			}
			ab = '<div class="com_hotresults" id="thetable" style="width:'
					+ k
					+ '"><div style="width:100%;"><div class="ac_title"><span>拼音支持首字母输入</span><a class="ac_close" style="cursor:pointer" title="关闭" onclick="$.stationFor12306.closeShowCity()"></a></div><ul class="AbcSearch clx" id="abc">';
			if (B) {
				ab = ab
						+ '<li class="action" index="7" method="liHotTab"  onclick="$.stationFor12306.js(7)" id="nav_list7">常用</li>'
			}
			ab = ab
					+ '<li index="1" method="liHotTab"  onclick="$.stationFor12306.js(1)" id="nav_list1">热门</li><li index="2" method="liHotTab"  onclick="$.stationFor12306.js(2)" id="nav_list2">ABCDE</li><li index="3" method="liHotTab"  onclick="$.stationFor12306.js(3)" id="nav_list3">FGHIJ</li><li index="4" method="liHotTab"  onclick="$.stationFor12306.js(4)" id="nav_list4">KLMNO</li><li index="5" method="liHotTab"  onclick="$.stationFor12306.js(5)" id="nav_list5">PQRST</li><li index="6" method="liHotTab"  onclick="$.stationFor12306.js(6)" id="nav_list6">UVWXYZ</li></ul>';
			if (B) {
				ab += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;" method="hotData" id="ul_list7">';
				var ac = C.stationFor12306.getStationInCookies();
				var Y = ac.length;
				if (Y > 2) {
					M = true;
					for (var ad = 0; ad < Y; ad++) {
						ab += '<li class="ac_even"   title="' + ac[ad][0]
								+ '" data="' + ac[ad][1] + '">' + ac[ad][0]
								+ "</li>"
					}
				}
				ab += "</ul>"
			}
			ab += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;display:none;" method="hotData" id="ul_list1">';
			var X = C.stationFor12306.tHtmlGetCityName(0, -1, 0);
			var aa = "";
			if (!B) {
				aa = " openLi"
			}
			for (var ad = 0; ad < X; ad++) {
				ab += '<li class="ac_even' + aa + '"   title="'
						+ C.stationFor12306.tHtmlGetCityName(0, ad, 0)[1]
						+ '" data="'
						+ C.stationFor12306.tHtmlGetCityName(0, ad, 0)[2]
						+ '">'
						+ C.stationFor12306.tHtmlGetCityName(0, ad, 0)[1]
						+ "</li>"
			}
			ab += "</ul>";
			for (var ae = 2; ae <= 6; ae++) {
				var Z = ae - 1;
				var i = C.stationFor12306.tHtmlGetCityName(Z, -1, 0);
				if (i > u) {
					var W = Math.ceil((i) / u);
					if (W > 1) {
						ab += '<div id="ul_list' + ae + '">';
						C.stationFor12306.pageDesigh(W, 0, ae)
					}
					C("#flip_cities2").css("display", "block")
				} else {
					ab += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; height: 191px;display:none;" id="ul_list'
							+ ae + '">';
					C("#flip_cities2").css("display", "none");
					var aa = "";
					if (!B) {
						aa = " openLi"
					}
					for (var ad = 0; ad < C.stationFor12306.tHtmlGetCityName(Z,
							-1, 0); ad++) {
						ab += '<li class="ac_even'
								+ aa
								+ '"   title="'
								+ C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[1]
								+ '" data="'
								+ C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[2]
								+ '">'
								+ C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[1]
								+ "</li>"
					}
				}
				ab += "</div>"
			}
			ab += '<div id="flip_cities2"> 翻页控制区</div>';
			ab += "</div>";
			C("#panel_cities2").html(ab);
			C("#thetable").on("click", function() {
				if (C("#form_cities2").css("display") == "block") {
					if (m == 1 | m == 0) {
						m == -1
					}
					I.select()
				}
			});
			C("#form_cities").on("click", function() {
				if (C("#form_cities").css("display") == "block") {
					if (m == 1 | m == 0) {
						m == -1
					}
					I.select()
				}
			});
			C(".ac_even").on("mouseover", function() {
				C.stationFor12306.city_shiftSelectInLi(this)
			}).on(
					"click",
					function() {
						I.val(C(this).text());
						curObjCode.val(C(this).attr("data"));
						if (B) {
							C.stationFor12306.setStationInCookies(C(this)
									.text(), C(this).attr("data"))
						}
						C("#form_cities2").css("display", "none");
						m = -1;
						y = 0;
						C.stationFor12306.setStationStyle();
						if (L) {
							C.stationFor12306.LoadJS(C(this).attr("data"))
						}
						if (J) {
							J(I, curObjCode)
						}
					});
			C("#flip_cities2").css("display", "none");
			return w
		},
		LoadJS : function(W) {
			if (((typeof (mm_addjs) != "undefined")) && ("" != mm_addjs)
					&& (mm_addjs == 1)) {
				var k = document.getElementsByTagName("HEAD").item(0);
				var i = document.createElement("SCRIPT");
				i.src = mm_srcjs + W + ".js";
				i.type = "text/javascript";
				k.appendChild(i)
			}
		},
		addZMHtml : function(X, Y) {
			var W = "";
			if (X && X.length > 0) {
				var Z = X[0][0].charAt(0);
				W += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; " >';
				W += '<li class="ac_letter">' + Z.toUpperCase() + "</li>";
				for (var i = 0; i < 12; i++) {
					var k = X[i];
					if (k) {
						W += '<li class="ac_even' + Y + '"   title="' + k[1]
								+ '" data="' + k[2] + '">' + k[1] + "</li>"
					} else {
						W += '<li class="ac_even' + Y + '" </li>'
					}
				}
				W += "</ul>"
			}
			return W
		},
		pageDesigh : function(Z, ac, ad) {
			var W = "";
			if (Z > 1) {
				if (ac == -1) {
					ac = (Z - 1)
				} else {
					if (ac == Z) {
						ac = 0
					}
				}
				var ab = "";
				if (!B) {
					ab = " openLi"
				}
				for (var X = 2; X <= 6; X++) {
					if (X == ad) {
						var aa = P[X - 2];
						for (var i = 0; i < aa.length; i++) {
							K = aa[i].slice(ac * u, (ac + 1) * u);
							W += C.stationFor12306.addZMHtml(K, ab)
						}
					}
				}
				C("#ul_list" + ad).html(W);
				C("#ul_list" + ad).css("height", 270);
				if (W) {
					var Y = (ac == 0) ? "&laquo;&nbsp;上一页"
							: "<a style='cursor:pointer'    class='cityflip' onclick='$.stationFor12306.pageDesigh("
									+ Z
									+ ","
									+ (ac - 1)
									+ ","
									+ ad
									+ ");return false;'>&laquo;&nbsp;上一页</a>";
					Y += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;";
					Y += (ac == Z - 1) ? "下一页&nbsp;&raquo;"
							: "<a style='cursor:pointer' class='cityflip'  onclick='$.stationFor12306.pageDesigh("
									+ Z
									+ ","
									+ (ac + 1)
									+ ","
									+ ad
									+ ")'>下一页&nbsp;&raquo;</a>";
					C("#flip_cities2").html(Y)
				} else {
					C("#flip_cities2").html("")
				}
				if (m == 1 | m == 0 | m == 2) {
					m == -1
				}
				if (I) {
					I.select()
				}
			} else {
			}
			C(".ac_even").on("mouseover", function() {
				C.stationFor12306.city_shiftSelectInLi(this)
			}).on(
					"click",
					function() {
						I.val(C(this).text());
						curObjCode.val(C(this).attr("data"));
						if (B) {
							C.stationFor12306.setStationInCookies(C(this)
									.text(), C(this).attr("data"))
						}
						C("#form_cities2").css("display", "none");
						m = -1;
						y = 0;
						C.stationFor12306.setStationStyle();
						if (L) {
							C.stationFor12306.LoadJS(C(this).attr("data"))
						}
						if (J) {
							J(I, curObjCode)
						}
					})
		},
		filterCity : function(Z) {
			if (Z.length == 0) {
				C("#top_cities").html(n);
				return w
			}
			var Y = /<\/?[^>]*>/g;
			Z = Z.replace(Y, "");
			var W = [];
			var k = /[^A-z]/.test(Z);
			for (var X = 0; X < w.length; X++) {
				if (C.stationFor12306.isMatchCity(w[X], Z, k)) {
					W.push(w[X])
				}
			}
			if (W.length > 0) {
				C("#top_cities").html('按"<font color=red>' + Z + '</font>"检索：');
				return W
			} else {
				C("#top_cities").html("无法匹配:<font color=red>" + Z + "</font>");
				return []
			}
		},
		replaceChar : function(i, W, k) {
			return i.substr(0, W) + k + i.substr(W + 1, i.length - 1)
		},
		isMatchCity : function(Z, ac, W) {
			var ac = ac.toLowerCase();
			var k = [ Z[4].toLowerCase(), Z[1], Z[3].toLowerCase() ];
			var ab = -1;
			var Y = -1;
			if (W) {
				ac = ac.split("");
				for (var X = 0; X < ac.length; X++) {
					var ae = k[1].indexOf(ac[X]);
					if (ae > ab && ae <= X) {
						k[1] = C.stationFor12306.replaceChar(k[1], ae, "-");
						ab = ae
					} else {
						return false
					}
				}
			} else {
				ac = ac.split("");
				var i = true;
				var aa = true;
				for (var X = 0; X < ac.length; X++) {
					var ae = k[0].indexOf(ac[X]);
					if (ae > ab && ae <= X) {
						k[0] = C.stationFor12306.replaceChar(k[0], ae, "-");
						ab = ae
					} else {
						i = false;
						break
					}
				}
				for (var X = 0; X < ac.length; X++) {
					var ad = k[2].indexOf(ac[X]);
					if (ad > Y && ad <= X) {
						k[2] = C.stationFor12306.replaceChar(k[2], ad, "-");
						Y = ad
					} else {
						aa = false;
						break
					}
				}
				if ((i == false) && (aa == false)) {
					return false
				}
			}
			return true
		},
		city_showlist_page : function(ad, Y) {
			var Z = "";
			Z += '<div class="citypage">';
			Z += (ad == 0) ? ""
					: '<a href="#" class="pagetxt" onclick="$.stationFor12306.city_showlist('
							+ (ad - 1) + ');return false;"><<</a>';
			var ae = ad + 1;
			var aa = Y;
			var ab = 2;
			var ac = 5;
			var k = (ae - ab) > 0 ? (ae + ab > aa ? aa - ac + 1 : ae - ab) : 1;
			var W = k + ac > aa ? aa + 1 : k + ac;
			if (aa < ac) {
				for (var X = 1; X < aa + 1; X++) {
					if (ae == X) {
						Z += "<a href='' class='cur' onclick='$.stationFor12306.city_showlist("
								+ (X - 1) + ");return false;'>" + (X) + "</a>"
					} else {
						Z += "<a href='' onclick='$.stationFor12306.city_showlist("
								+ (X - 1) + ");return false;'>" + (X) + "</a>"
					}
				}
			} else {
				for (var X = k; X < W; X++) {
					if (ae == X) {
						Z += "<a href='' class='cur' onclick='$.stationFor12306.city_showlist("
								+ (X - 1) + ");return false;'>" + (X) + "</a>"
					} else {
						Z += "<a href='' onclick='$.stationFor12306.city_showlist("
								+ (X - 1) + ");return false;'>" + (X) + "</a>"
					}
				}
			}
			Z += (ad == Y - 1) ? ""
					: '<a href="" class="pagetxt" onclick="$.stationFor12306.city_showlist('
							+ (ad + 1) + ');return false;">>></a>';
			Z += "</div>";
			return Z
		},
		city_showlist : function(W) {
			if (E.length > 6) {
				var k = Math.ceil((E.length) / 6);
				if (W == -1) {
					W = (k - 1)
				} else {
					if (W == k) {
						W = 0
					}
				}
				G = E.slice(6 * (W), Math.min(6 * (W + 1), E.length));
				C.stationFor12306.city_Bind(G);
				var i = "";
				i += C.stationFor12306.city_showlist_page(W, k);
				C("#flip_cities").html(i);
				C("#flip_cities").css("display", "block")
			} else {
				W = 0;
				G = E;
				C.stationFor12306.city_Bind(G);
				C("#flip_cities").css("display", "none")
			}
			z = W;
			if (C("#form_cities").css("display") == "block") {
				a = true;
				I.focus()
			}
		},
		fixDivBugInIE6 : function(i) {
			try {
				i.bgiframe();
				if (i.width() > C("> ul", i).width()) {
					i.css("overflow", "hidden")
				} else {
					C("> iframe.bgiframe", i).width(C("> ul", i).width());
					i.css("overflow", "scroll")
				}
				if (i.height() > C("> ul", i).height()) {
					i.css("overflow", "hidden")
				} else {
					C("> iframe.bgiframe", i).height(C("> ul", i).height());
					i.css("overflow", "scroll")
				}
			} catch (k) {
			}
		},
		clearStation : function(i) {
			m = -1;
			var W = I.val();
			var X = curObjCode.val();
			if (W == "" || X == "") {
				I.val("");
				curObjCode.val("")
			} else {
				var k = W + "|" + X;
				if (typeof (station_names) != "undefined") {
					if (station_names.indexOf(k) == -1) {
						I.val("");
						curObjCode.val("")
					} else {
						if ("click" == i) {
							I.select();
							if (C("#form_cities").is(":hidden")) {
								C("#form_cities2").css("display", "block")
							}
						}
					}
				} else {
					I.val("");
					curObjCode.val("")
				}
			}
		},
		MapCityID : function(W) {
			for (var k = 0; k < w.length; k++) {
				if (w[k][1] == W) {
					return w[k][2]
				}
			}
			return 0
		},
		MapCityName : function(k) {
			for (var W = 0; W < w.length; W++) {
				if (w[W][2] == k) {
					return w[W][1]
				}
			}
			return ""
		},
		SetISPos : function(Y) {
			if (Q) {
				Q(C("#form_cities"), C("#form_cities2"))
			} else {
				C("#form_cities").css("left", Y.position().left);
				C("#form_cities")
						.css("top", Y.position().top + Y.height() + 12);
				C("#form_cities2").css("left", Y.position().left);
				C("#form_cities2").css("top",
						Y.position().top + Y.height() + 12)
			}
			var X = Y.offset().top;
			var i = C("#search_div");
			var k = C("#choice_div");
			i.css("top", X);
			k.css("top", X);
			var W = Y.offset().left;
			i.css("left", W);
			k.css("left", W)
		},
		myHandlerFg : function(i) {
			if (i == null) {
				i.keyCode = 9
			} else {
				if (!i.which && i.which == 13) {
					i.preventDefault()
				} else {
					if (i.which && i.keyCode == 13) {
						i.which = 9
					}
				}
			}
		},
		myHandler2 : function(i) {
			if (i == null) {
				i = window.event;
				i.returnValue = false
			} else {
				if (i.which && i.which == 13) {
					var W = document.getElementById("Upload_Data3");
					if (document.createEvent) {
						var k = document.createEvent("MouseEvents");
						k.initEvent("click", true, false);
						W.dispatchEvent(k)
					} else {
						if (document.createEventObject) {
							W.fireEvent("onclick")
						}
					}
				} else {
					if (!i.which && i.which == 13) {
						i.preventDefault()
					}
				}
			}
		},
		from_to_station_class_plain : function(i) {
			if (l && l != "") {
				i.removeClass(l)
			}
			if (r && r != "") {
				i.addClass(r)
			}
		},
		from_to_station_class_gray : function(i) {
			if (r && r != "") {
				i.removeClass(r)
			}
			if (l && l != "") {
				i.addClass(l)
			}
		},
		setStationStyle : function() {
			var i = I.val();
			if (i == "") {
				I.val(h);
				C.stationFor12306.from_to_station_class_gray(I);
				curObjCode.val("")
			} else {
				C.stationFor12306.from_to_station_class_plain(I)
			}
		},
		setCurValue : function() {
			I.val(S[1]);
			curObjCode.val(S[2])
		},
		bindEvent : function(i) {
			var W = "#" + i;
			var k = "#" + i + "Text";
			C(k)
					.keydown(
							function(Y) {
								I = C(k);
								curObjCode = C(W);
								m = 0;
								a = true;
								L = true;
								C("#form_cities2").css("display", "none");
								y = 0;
								var X = C(k).width();
								if (-[ 1, ]) {
									X = X - 4
								}
								X = X < 220 ? 220 : X;
								C("#form_cities").css("width", X);
								C("#form_cities").css("display", "block");
								C(".AbcSearch li").removeClass("action");
								C(".popcitylist").css("display", "none");
								if (M && B) {
									C("#ul_list7").css("display", "block");
									C("#nav_list7").addClass("action")
								} else {
									C("#nav_list1").addClass("action");
									C("#ul_list1").css("display", "block")
								}
								C("#flip_cities2").css("display", "none");
								C(".ac_even").removeClass("ac_over").addClass(
										"ac_odd");
								Y = Y || window.event;
								if (Y.keyCode == 40) {
									C.stationFor12306.city_changeSelectIndex(1);
									C("#form_cities").css("display", "block");
									C.stationFor12306.SetISPos(I);
									C.stationFor12306.setCurValue()
								} else {
									if (Y.keyCode == 38) {
										C.stationFor12306
												.city_changeSelectIndex(-1);
										C.stationFor12306.setCurValue();
										C("#form_cities").css("display",
												"block");
										C.stationFor12306.SetISPos(I)
									} else {
										if (Y.keyCode == 13) {
											C.stationFor12306
													.city_confirmSelect();
											if (document.addEventListener) {
												document
														.addEventListener(
																"keypress",
																C.stationFor12306.myHandlerFg,
																true)
											} else {
												evt = window.event;
												evt.keyCode = 9
											}
										}
									}
								}
							}).focus(
							function() {
								L = true;
								if (a) {
									C("#form_cities2").css("display", "none");
									y = 0;
									a = false;
									m = -1
								} else {
									if (m == -1) {
										C(".AbcSearch li")
												.removeClass("action");
										C(".popcitylist")
												.css("display", "none");
										C("#flip_cities2").css("display",
												"none");
										if (M && B) {
											C("#ul_list7").css("display",
													"block");
											C("#nav_list7").addClass("action")
										} else {
											C("#nav_list1").addClass("action");
											C("#ul_list1").css("display",
													"block")
										}
										C(".ac_even").removeClass("ac_over")
												.addClass("ac_odd");
										C("#form_cities2").css("display",
												"block");
										for (var X = 2; X <= 6; X++) {
											C("#ul_list" + X).css("height", 0)
										}
									}
								}
								I = C(k);
								curObjCode = C(W);
								m = 0;
								U = true;
								C.stationFor12306.SetISPos(I)
							}).blur(function() {
						I = C(k);
						curObjCode = C(W);
						m = 0;
						a = false;
						L = true;
						if (!g && !H) {
							C.stationFor12306.clearStation("blur");
							U = false;
							C("#form_cities").css("display", "none");
							C("#form_cities2").css("display", "none");
							m = -1;
							y = 0;
							E = C.stationFor12306.filterCity("");
							C.stationFor12306.city_showlist(0);
							C.stationFor12306.setStationStyle()
						}
					}).keyup(
							function(X) {
								I = C(k);
								curObjCode = C(W);
								m = 0;
								a = true;
								X = X || window.event;
								if (X.keyCode != 40 && X.keyCode != 38
										&& X.keyCode != 37 && X.keyCode != 39
										&& X.keyCode != 13 && X.keyCode != 9) {
									E = C.stationFor12306.filterCity(I.val());
									C.stationFor12306.city_showlist(0)
								}
							}).click(function() {
						C.stationFor12306.clearStation("click")
					});
			C.stationFor12306.bindInputs.push(i)
		},
		getStationInCookies : function() {
			var W = [];
			var k = C.ht_getcookie("_city_name_save_station");
			if (k) {
				var i = k.split(",");
				if (i && i.length > 0) {
					C.each(i, function(aa, Z) {
						var X = Z.split("#");
						var Y = [];
						Y[0] = X[0];
						Y[1] = X[1];
						W[aa] = Y
					})
				}
			}
			return W
		},
		setStationInCookies : function(af, W) {
			var ac = C.stationFor12306.getStationInCookies();
			var Z = [];
			var ag = ac.length;
			var Y = true;
			var ah = 10;
			for (var aa = 0; aa < ag; aa++) {
				if (ac[aa][0] == af && ac[aa][1] == W) {
					Y = false
				}
				Z.push(ac[aa])
			}
			if (Y) {
				Z.push([ af, W ])
			}
			var ab = Z;
			var X = "";
			var ad = ab.length;
			var aa = 0;
			if (ad > ah) {
				aa = 1
			}
			var i = aa;
			if (ad > 1) {
				C("#ul_list7").html("");
				M = true
			}
			var ae = "";
			for (; aa < ad; aa++) {
				if (aa > i) {
					X += ","
				}
				X += ab[aa][0] + "#" + ab[aa][1];
				if (M && B) {
					ae += '<li class="ac_even" onmouseover="$.stationFor12306.city_shiftSelectInLi(this);" onclick="$.stationFor12306.li_click(this);"   title="'
							+ ab[aa][0]
							+ '" data="'
							+ ab[aa][1]
							+ '">'
							+ ab[aa][0] + "</li>"
				}
			}
			if (M && B) {
				C("#ul_list7").html(ae)
			}
			C.ht_setcookie("_city_name_save_station", X, 365 * 24 * 60 * 60)
		},
		li_click : function(i) {
			I.val(C(i).text());
			curObjCode.val(C(i).attr("data"));
			if (B) {
				C.stationFor12306.setStationInCookies(C(i).text(), C(i).attr(
						"data"))
			}
			C("#form_cities2").css("display", "none");
			m = -1;
			y = 0;
			C.stationFor12306.setStationStyle();
			if (L) {
				C.stationFor12306.LoadJS(C(i).attr("data"))
			}
			if (J) {
				J(I, curObjCode)
			}
		},
		init : function(ac, ad) {
			if (typeof (ad) != "undefined") {
				if (typeof (ad._init_input) != "undefined") {
					h = ad._init_input
				}
				if (typeof (ad._top_4_initInput) != "undefined") {
					n = ad._top_4_initInput
				}
				if (typeof (ad.confirmCallBack) != "undefined") {
					J = ad.confirmCallBack
				}
				if (typeof (ad._selected_class) != "undefined") {
					r = ad._selected_class
				}
				if (typeof (ad._unselected_class) != "undefined") {
					l = ad._unselected_class
				}
				if (typeof (ad._12306_openFavorite) != "undefined") {
					B = ad._12306_openFavorite
				}
				if (typeof (ad.position) != "undefined") {
					Q = ad.position
				}
			}
			if (typeof (station_names) != "undefined") {
				var Z = station_names.split("@");
				for (var Y = 0; Y < Z.length; Y++) {
					var ab = Z[Y];
					var aa = ab.toString().charAt(0);
					for ( var X in F) {
						if (aa == F[X]) {
							c[X].push(ab.split("|"))
						}
					}
					if (ab.length > 0) {
						ab = ab.split("|");
						if (O != "" && ab[2] == O) {
							favcity = ab;
							w.unshift(ab);
							if (Y > 6) {
								w.push(ab)
							}
						} else {
							w.push(ab)
						}
					}
				}
				f = c[0].concat(c[1]).concat(c[2]).concat(c[3]).concat(c[4]);
				e = c[5].concat(c[6]).concat(c[7]).concat(c[8]).concat(c[9]);
				d = c[10].concat(c[11]).concat(c[12]).concat(c[13]).concat(
						c[14]);
				b = c[15].concat(c[16]).concat(c[17]).concat(c[18]).concat(
						c[19]);
				V = c[20].concat(c[21]).concat(c[22]).concat(c[23]).concat(
						c[24]).concat(c[25]);
				P[0] = [ c[0], c[1], c[2], c[3], c[4] ];
				P[1] = [ c[5], c[6], c[7], c[8], c[9] ];
				P[2] = [ c[10], c[11], c[12], c[13], c[14] ];
				P[3] = [ c[15], c[16], c[17], c[18], c[19] ];
				P[4] = [ c[20], c[22], c[23], c[24], c[25] ];
				for (var Y = 0; Y < w.length; Y++) {
					w[Y].push(Y)
				}
			}
			if (typeof (favorite_names) != "undefined") {
				var W = favorite_names.split("@");
				for (var Y = 0; Y < W.length; Y++) {
					var ab = W[Y];
					if (ab.length > 0) {
						ab = ab.split("|");
						D.push(ab)
					}
				}
				for (var Y = 0; Y < D.length; Y++) {
					D[Y].push(Y)
				}
			}
			E = C.stationFor12306.filterCity("");
			C.stationFor12306.city_showlist(0);
			C.stationFor12306.showAllCity();
			a = false;
			C.stationFor12306.fixDivBugInIE6(C("#form_cities"));
			C.stationFor12306.fixDivBugInIE6(C("#form_cities2"));
			if (ac && ac.length > 0) {
				C.each(ac, function(k, i) {
					C.stationFor12306.bindEvent(i)
				})
			}
			C("#form_cities").mousedown(function() {
				g = true
			}).mouseup(function() {
				g = false
			});
			C("#form_cities2").mousedown(function() {
				H = true
			}).mouseup(function() {
				H = false
			})
		}
	}
})(jQuery);
(function() {
	$.stopStation = function(a) {
		var b = this;
		b.init = function() {
			b.options = $.extend({}, $.stopStation.defaultOptions, a);
			if (null == b.options.url || null == b.options.getSearchDate) {
				throw "error options,url can not be null"
			}
			b.options.mouseOnPanel = 0;
			if (!$("#" + b.options.showDivId)[0]) {
				var d = [];
				var c = -1;
				d[++c] = '<div class="station" style="display:none;" id="'
						+ b.options.showDivId + '"><b></b>';
				d[++c] = '<div class="station-info" id="'
						+ b.options.showTitleId + '"></div>';
				d[++c] = '<div class="station-hd"><span class="zx">站序</span><span class="zm">站名</span><span class="dzsj">到站时间</span>';
				d[++c] = '<span class="cfsj">出发时间</span><span class="tlsj">停留时间</span>';
				d[++c] = '<a id="_stopStation_close_id" class="close" title="关闭" href="javascript:" </a></div>';
				d[++c] = '<div class="station-bd"><table><tbody id="'
						+ b.options.showTableId
						+ '"></tbody></table></div></div>';
				$(d.join("")).appendTo($("body:eq(0)"));
				$("#_stopStation_close_id").on("click", b.close)
			}
			$("#" + b.options.showDivId).css("z-index", "20001");
			if (b.options.mouseOutClose) {
				$("#" + b.options.showDivId).on("mouseenter", function(e) {
					b.options.mouseOnPanel = 1
				}).on(
						"mouseleave",
						function() {
							b.options.mouseOnPanel = 0;
							$("#" + b.options.showDivId).hide().appendTo(
									$("body:eq(0)"));
							$("#" + b.options.showTableId).html("")
						})
			}
		};
		b.close = function() {
			$("#" + $.stopStation.defaultOptions.showDivId).closest("tr")
					.removeAttr("style");
			$("#" + $.stopStation.defaultOptions.showDivId).removeAttr("style");
			b.options.mouseOnPanel = 0;
			$("#" + $.stopStation.defaultOptions.showDivId).hide().appendTo(
					$("body:eq(0)"));
			$("#" + $.stopStation.defaultOptions.showTableId).html("")
		};
		b.open = function(f, j, h, e, i, c) {
			$("#" + $.stopStation.defaultOptions.showDivId).attr("style",
					"z-index:20001");
			if (a.timer) {
				clearTimeout(a.timer)
			}
			var g = a.getSearchDate();
			if (i && "" != i && null != i) {
				var d = formatDate(i);
				if ("-" != d) {
					g = formatDate(i)
				} else {
					g = a.getSearchDate()
				}
			} else {
				g = a.getSearchDate()
			}
			$
					.ajax({
						url : a.url,
						type : "get",
						isTakeParam : false,
						beforeSend : function(k) {
							k.setRequestHeader("If-Modified-Since", "0");
							k.setRequestHeader("Cache-Control", "no-cache")
						},
						data : {
							train_no : j,
							from_station_telecode : h,
							to_station_telecode : e,
							depart_date : g
						},
						success : function(p) {
							var t = p.data.data;
							if (t && t.length > 0) {
								var r = [];
								var u = -1;
								for (var q = 0; q < t.length; q++) {
									var l = t[q];
									if (q == 0) {
										var n = null;
										n = l.train_class_name;
										var s = l.service_type;
										if ("0" == s) {
											c = "无空调"
										} else {
											c = "有空调"
										}
										if (!n) {
											n = "&nbsp;&nbsp;"
										}
										$(
												"#"
														+ $.stopStation.defaultOptions.showTitleId)
												.html(
														'<span class="item1">'
																+ l.station_train_code
																+ '次      </span><span class="item2">'
																+ l.start_station_name
																+ "<em>--></em>"
																+ l.end_station_name
																+ '</span><span class="item3">'
																+ n
																+ '</span><span class="item4">'
																+ c + "</span>")
												.find("span").css("color",
														"#333")
									}
									var m = "";
									if (!l.isEnabled) {
										m = " style='color: #999;' "
									}
									r[++u] = '<tr><td width="50" class="tc" '
											+ m + ">" + l.station_no + "</td>";
									r[++u] = '<td width="75" ' + m + ">"
											+ l.station_name + "</td>";
									r[++u] = '<td width="75" ' + m + ">"
											+ l.arrive_time + "</td>";
									r[++u] = '<td width="75" ' + m + ">"
											+ l.start_time + "</td>";
									r[++u] = "<td " + m + ">" + l.stopover_time
											+ "</td></tr>"
								}
								$(
										"#"
												+ $.stopStation.defaultOptions.showTableId)
										.html(r.join(""));
								var o = $("#"
										+ $.stopStation.defaultOptions.appendTo
										+ f);
								$("#" + $.stopStation.defaultOptions.showDivId)
										.appendTo(o).show();
								$(".ticket-info").filter("div").attr("style",
										"");
								o[0].style["z-index"] = 19999;
								if (!(navigator.appVersion.indexOf("MSIE 6") > -1)) {
								} else {
								}
							}
						}
					})
		};
		b.init();
		myStopStation = b;
		return b
	};
	$.fn.stopStation = function() {
		return (new $.stopStation(Array.prototype.slice.call(arguments)[0]))
	};
	$.stopStation.defaultOptions = {
		url : null,
		mouseOutClose : false,
		showDivId : "train_div_",
		showTableId : "train_table_",
		showTitleId : "train_span_",
		appendTo : "train_num_",
		getSearchDate : null
	}
})();
var myStopStation = function() {
};
var formatDate = function(b) {
	if (b && (b.length == 8)) {
		var c = b.substring(0, 4);
		var d = b.substring(4, 6);
		var a = b.substring(6, 8);
		return c + "-" + d + "-" + a
	} else {
		return "-"
	}
};
var checkusermdId;
var showTrainStop;
var hideTrainStop;
var showTicketPrice;
var isInitQueryInput = false;
var isInitStationDiv = false;
var isInitJsrenderTemplate = false;
var isInitDateRange = false;
var tickets_info;
var location_code;
var md5Str;
var leftTicketStr;
var isAsync;
var box;
var countDown = null;
var ischeckAutoSubmitCode = true;
var hainan_tip;
var firstShow = 1;
var endShow = 20;
var dataNumber = 0;
var change_dates_arr = [];
var isOther = true;
var dwTranTimeStr;
var ydTranTimeStr;
var uninputmsg = "用户名／邮箱／手机号码";
var adtimeout = 5000;
var iframeUrl = "https://ad.12306.cn/res/0004.html";
var frameComplete = false;
var iframeOnload = function() {
	frameComplete = true
};
var yxTrainPageSize = 15;
var passengerPageSize = 20;
var timer_time = 3;
var yxTrainChange = "";
var trainListForIE = [];
var queryLeftTicket_times = 0;
var queryLeftTicket_count = 10;
var ifAlertCode = false;
var intervalTime;
(function() {
	var a;
	var a0 = null;
	var bA;
	var bo;
	var N;
	var af;
	var b9;
	var bR;
	var p = false;
	var bZ = 0;
	var ax;
	var bb;
	var x;
	var ac;
	var cf;
	var a8 = new Array();
	var bO = new Array();
	var bY = new Array();
	var W = new Array();
	var bJ = new Array();
	var K;
	var aC = new Array();
	tickets_info = new Array();
	var a1 = true, b1 = true, aW = true, ay = "starttime";
	var aB = true;
	var bw = [];
	var be = [];
	var bQ = [];
	var aN;
	var H = [];
	var bP = "";
	var b7 = "";
	var a6 = "";
	var g = "";
	var D = "";
	$(document).ready(
			function() {
				$.init_ul4li();
				f();
				Y();
				y();
				ab();
				F();
				az();
				a3();
				bu();
				clickCheckBoxName();
				bz();
				bT();
				aq();
				ag();
				b3();
				A();
				aV();
				bF();
				$("#float").headerFloat();
				$(window).scroll(function() {
					if (a0 != null && (!a0.isHidden())) {
						$("#floatTable").hide();
						$(window).scrollTop(a)
					}
				});
				$.stopStation({
					url : ctx + "czxx/queryByTrainNo",
					getSearchDate : function() {
						return train_tour_flag == "fc" ? $.trim($(
								"#back_train_date").val()) : $.trim($(
								"#train_date").val())
					}
				});
				ba();
				ck();
				b4();
				o();
				R();
				ad();
				bP = $("#fromStationText").val();
				b7 = $("#toStationText").val();
				$("#showOnlyTicA").bind("click", function() {
					$("#filterTic").attr("checked", "checked");
					bf();
					$jpopup.startOrHiden()
				});
				aN = $.autoSubmit();
				var cp = $("#train_date").val();
				var cn = $("#back_train_date").val();
				if (cn == "") {
					$("#back_train_date").val(cp)
				} else {
					$("#back_train_date").val(cn)
				}
				t();
				aT();
				var co = new bn("right");
				co.init();
				G();
				U();
				if (page_show_flag == "preStep") {
					$("#query_ticket").click()
				}
			});
	var bn = function(cu) {
		var cv, cr = {}, cw, cs = this, cq = false, co, ct, cp = {
			x : 10,
			y : 66
		}, cn = {
			x : 5,
			y : 1
		};
		this.move = function() {
			co = co + cn.x;
			ct = ct + cn.y;
			if (co < cp.x) {
				co = cp.x;
				cn.x = -cn.x
			} else {
				if (co > cr.dx) {
					co = cr.dx;
					cn.x = -cn.x
				}
			}
			if (ct < cp.y) {
				ct = cp.y;
				cn.y = -cn.y
			} else {
				if (ct > cr.dy) {
					ct = cr.dy;
					cn.y = -cn.y
				}
			}
			cw.css(cu, co + "px").css("top", ct + "px")
		};
		this.init = function() {
			if (cq) {
				return
			}
			cq = true;
			cw = $(bn.htmlTemplate);
			$(window).on("resize", cs.resize);
			cw.css(cu, cp.x + "px").css({
				top : cp.y + "px"
			}).on("mouseenter", cs.stop).on("mouseleave", cs.resize).children(
					"a.close").on("click", cs.hidden);
			$("body").append(cw);
			co = cp.x;
			ct = cp.y;
			cs.resize()
		};
		this.destory = function() {
			cw.remove()
		};
		this.resize = function() {
			cr.dx = ($(window).width() - $(".content").width()) / 2
					- cw.width();
			cr.dy = ($(window).height()) - cw.height();
			if (cr.dx <= (cp.x + Math.abs(cn.x))
					|| cr.dy <= (cp.y + Math.abs(cn.y))) {
				cs.stop()
			} else {
				cs.alive()
			}
		};
		this.show = function() {
			cw.show();
			cs.alive()
		};
		this.hidden = function() {
			cs.stop();
			cw.hide()
		};
		this.stop = function() {
			clearInterval(cv)
		};
		this.alive = function() {
			cs.stop();
			cv = setInterval(cs.move, 200)
		}
	};
	bn.htmlTemplate = '<div class="fix-yh" id="myfix_yh" style="overflow: hidden;"><iframe onload="iframeOnload()" style="border:0;width:110%;height:110%;" id="ad_frame_query" src="'
			+ iframeUrl + '"></iframe></div>';
	function G() {
		setTimeout(
				function() {
					if (!frameComplete) {
						var co = $("#ad_frame_query");
						var cn = co.get(0);
						var cp = ctx + "resources/images/bg11.png";
						co.remove();
						$("#myfix_yh").css("background",
								"url(" + cp + ") no-repeat");
						$("#myfix_yh")
								.html(
										'<a href="javascript:void(0);" class="close" title="关闭">关闭</a>');
						$("#myfix_yh").children("a.close").on("click",
								function() {
									$(this).parent().hide()
								})
					}
				}, adtimeout)
	}
	function bG(co) {
		if (co) {
			$(".yzm").show();
			$("#orange_msg").hide();
			$("#randCodeForm_id").find("a").css("margin-top", "30px");
			var cn = $("#qr_submit1");
			cn.unbind("click").bind("click", h);
			cn.removeClass("btn92").addClass("btn92s").show();
			ifAlertCode = true
		} else {
			$(".yzm").hide();
			$("#orange_msg").show();
			$("#qr_submit1").hide();
			ifAlertCode = false
		}
	}
	function ad() {
		if (rqChecked.length == 0) {
			if (train_tour_flag == "fc") {
				rqChecked.push($("#back_train_date").val())
			} else {
				rqChecked.push($("#train_date").val())
			}
		}
	}
	function b4() {
		if (ClickWho == "0X00") {
			$("#sf1").attr("disabled", "true");
			$("#sf1_label").addClass("color999");
			$("#sf2").attr("checked", "true");
			$("#query_ticket").removeClass().addClass("btn92s")
		} else {
			if (ClickWho == "00" || ClickWho == "ADULT") {
				$("#sf2").attr("disabled", "true");
				$("#sf2_label").addClass("color999");
				$("#query_ticket").removeClass().addClass("btn92s")
			} else {
				$("#query_ticket").removeClass().addClass("btn92s")
			}
		}
		if (isstudentDate) {
			$("#sf2").attr("disabled", "true");
			$("#sf2_label").addClass("color999");
			$("#query_ticket").removeClass().addClass("btn92s")
		}
	}
	function ah() {
		if (!isInitStationDiv) {
			d();
			isInitStationDiv = true
		}
		if (!isInitJsrenderTemplate) {
			at();
			isInitJsrenderTemplate = true
		}
	}
	function ba() {
		$("#fromStationText").mouseover(ah);
		$("#toStationText").mouseover(ah);
		$("#dc").mouseover(ah);
		$("#wf").mouseover(ah);
		$("#dc_label").mouseover(ah);
		$("#wf_label").mouseover(ah);
		$("#train_date").mouseover(ah);
		$("#back_train_date").mouseover(ah);
		$("#date_range").mouseover(ah)
	}
	function aA(cn) {
		aK();
		var cu = bJ.length;
		if ($("#query_ticket").html() == "停止查询") {
			if (cu > 0 && aO) {
				$("#auto_query").removeAttr("disabled");
				if ($("#dc").is(":checked") && train_tour_flag != "gc") {
					$("#autoSubmit").removeAttr("disabled");
					$("#partSubmit").removeAttr("disabled")
				}
				$("#query_ticket").html("查询");
				$("#query_ticket").unbind("click");
				bK();
				if (countDown) {
					clearInterval(countDown)
				}
				$("#filterTicDiv")
						.html(
								"<strong><label for='filterTic' style='cursor: pointer;'>仅显示选定车次</label></strong>");
				if (!$("#autoSubmit").is(":checked")) {
					clearInterval(aY);
					if (ccSelected.length > 0 || rqChecked.length > 0
							|| xbChecked.length > 0) {
						myJpopup.startOrHiden();
						if (train_tour_flag == "fc") {
							var cv = "成功查到"
									+ $("#back_train_date").val()
									+ "的"
									+ bJ[0]["queryLeftNewDTO"]["station_train_code"]
									+ "次"
						} else {
							var cv = "成功查到"
									+ $("#train_date").val()
									+ "的"
									+ bJ[0]["queryLeftNewDTO"]["station_train_code"]
									+ "次"
						}
						if (cu == 1) {
							cv = cv + "车。"
						} else {
							cv = cv + "等" + cu + "趟车。"
						}
						$("#filterRes").html(cv)
					}
				}
				jPlayer("play")
			} else {
				if (countDown) {
					clearInterval(countDown)
				}
				var ct = autoSearchTime / 1000;
				$("#filterTicDiv")
						.html(
								"<strong>离下次刷新时间<font class='colorA' style='font-size: 16px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
										+ ct + "</font>秒<strong>");
				countDown = window
						.setInterval(
								function() {
									var cw = "<strong>离下次刷新时间<font class='colorA' style='font-size: 16px;'>";
									if (ct == 0) {
										ct = autoSearchTime / 1000
									}
									ct = ct - 1;
									if (ct == 4) {
										cw = cw + "&nbsp;&nbsp;&nbsp;&nbsp;"
									}
									if (ct == 3) {
										cw = cw + "&nbsp;&nbsp;&nbsp;"
									}
									if (ct == 2) {
										cw = cw + "&nbsp;&nbsp;"
									}
									if (ct == 1) {
										cw = cw + "&nbsp;"
									}
									cw = cw + ct;
									cw += "</font>秒<strong>";
									$("#filterTicDiv").html(cw)
								}, 1000);
				$("#filterTic").hide()
			}
		}
		var cs = new Array();
		cs.push('<tbody id="queryLeftTable">');
		var cp = bV(cn);
		if (cp) {
			cn = cb(cn)
		}
		for (var co = 0; co < cn.length; co++) {
			cs.push('<tr id="ticket_');
			cs.push(cn[co].queryLeftNewDTO.train_no);
			cs.push('" class="');
			cs.push(co % 2 ? '">' : 'bgc">');
			cs.push('<td colspan="4" width="370">');
			cs.push('<div class="ticket-info clearfix" id="train_num_');
			cs.push(co);
			cs.push('">');
			cs.push('<div class="train" id="ticket_');
			cs.push(cn[co].queryLeftNewDTO.train_no);
			cs.push('_train">');
			var cr = "";
			if (c(cn[co].queryLeftNewDTO.station_train_code)) {
				cr = ' style="color:red;" '
			}
			cs.push("<div><a  " + cr
					+ ' title="点击查看停靠站信息" href="javascript:" id="');
			cs.push(cn[co].queryLeftNewDTO.train_no);
			cs.push("_");
			cs.push(cn[co].queryLeftNewDTO.from_station_telecode);
			cs.push("_");
			cs.push(cn[co].queryLeftNewDTO.to_station_telecode);
			if ("1" == cn[co].queryLeftNewDTO.controlled_train_flag
					|| "2" == cn[co].queryLeftNewDTO.controlled_train_flag) {
				cs.push('" class="number"');
				cs.push(">")
			} else {
				cs.push('" class="number"  onclick="myStopStation.open(\'');
				cs.push(co);
				cs.push("','");
				cs.push(cn[co].queryLeftNewDTO.train_no);
				cs.push("','");
				cs.push(cn[co].queryLeftNewDTO.from_station_telecode);
				cs.push("','");
				cs.push(cn[co].queryLeftNewDTO.to_station_telecode);
				cs.push("','");
				cs.push(cn[co].queryLeftNewDTO.start_train_date);
				cs.push("','");
				cs.push(cn[co].queryLeftNewDTO.train_seat_feature);
				cs.push("');\">")
			}
			cs.push(cn[co].queryLeftNewDTO.station_train_code);
			cs.push("</a>");
			if (cn[co].queryLeftNewDTO.is_support_card != 0) {
				cs.push(' <span class="i-card" title="可凭二代身份证直接进出站"></span>')
			}
			cs.push("</div>");
			cs.push('<span id="');
			cs.push(cn[co].queryLeftNewDTO.train_no);
			cs.push("_");
			cs.push(cn[co].queryLeftNewDTO.from_station_no);
			cs.push("_");
			cs.push(cn[co].queryLeftNewDTO.to_station_no);
			cs.push("_");
			cs.push(cn[co].queryLeftNewDTO.yp_info);
			cs.push("_");
			cs.push(cn[co].queryLeftNewDTO.seat_types);
			if ("1" == cn[co].queryLeftNewDTO.controlled_train_flag
					|| "2" == cn[co].queryLeftNewDTO.controlled_train_flag) {
				cs
						.push('" class="lookup"><span style="display:none;">查看票价</span><b style="display:none;" title="查看票价"></b></span>')
			} else {
				cs
						.push('" class="lookup" onclick="showTicketPrice(this)"><span style="display:none;">查看票价</span><b title="查看票价"></b></span>')
			}
			cs.push("</div>");
			cs.push('<div class="cdz">');
			if (cn[co].queryLeftNewDTO.from_station_telecode != null
					&& cn[co].queryLeftNewDTO.from_station_telecode == cn[co].queryLeftNewDTO.start_station_telecode) {
				cs.push('<strong class="start-s">');
				cs.push(cn[co].queryLeftNewDTO.from_station_name);
				cs.push("</strong>")
			} else {
				cs.push("<strong>");
				cs.push(cn[co].queryLeftNewDTO.from_station_name);
				cs.push("</strong>")
			}
			if (cn[co].queryLeftNewDTO.to_station_telecode != null
					&& cn[co].queryLeftNewDTO.to_station_telecode == cn[co].queryLeftNewDTO.end_station_telecode) {
				cs.push('<strong class="end-s">');
				cs.push(cn[co].queryLeftNewDTO.to_station_name);
				cs.push("</strong>")
			} else {
				cs.push("<strong>");
				cs.push(cn[co].queryLeftNewDTO.to_station_name);
				cs.push("</strong>")
			}
			cs.push("</div>");
			cs.push('<div class="cds">');
			if ("1" == cn[co].queryLeftNewDTO.controlled_train_flag
					|| "2" == cn[co].queryLeftNewDTO.controlled_train_flag) {
				cs.push('<strong class="start-t" style="color:#999;">');
				cs.push("-----");
				cs.push("</strong>");
				cs.push('<strong class="color999">');
				cs.push("-----");
				cs.push("</strong>")
			} else {
				cs.push('<strong class="start-t">');
				cs.push(cn[co].queryLeftNewDTO.start_time);
				cs.push("</strong>");
				cs.push('<strong class="color999">');
				cs.push(cn[co].queryLeftNewDTO.arrive_time);
				cs.push("</strong>")
			}
			cs.push("</div>");
			cs.push('<div  class="ls" ');
			cs.push('id="');
			cs.push(cn[co].queryLeftNewDTO.train_no);
			cs.push('_ls">');
			if ("1" == cn[co].queryLeftNewDTO.controlled_train_flag
					|| "2" == cn[co].queryLeftNewDTO.controlled_train_flag) {
				cs.push('<strong class="color999">');
				cs.push("------");
				cs.push("</strong>");
				cs.push('<strong class="color999">');
				cs.push("------");
				cs.push("</strong>")
			} else {
				cs.push("<strong>");
				cs.push(cn[co].queryLeftNewDTO.lishi);
				cs.push("</strong>");
				cs.push("<span>");
				cs.push(changeArriveDate(cn[co].queryLeftNewDTO.start_time,
						cn[co].queryLeftNewDTO.lishi));
				cs.push("到达</span>")
			}
			cs.push("</div>");
			cs.push("</div>");
			cs.push("</td>");
			if (cn[co].queryLeftNewDTO.swz_num
					&& cn[co].queryLeftNewDTO.swz_num != "--"
					&& cn[co].queryLeftNewDTO.swz_num != 0
					&& cn[co].queryLeftNewDTO.swz_num != "无") {
				b5(cs, cn[co].queryLeftNewDTO.swz_num, "SWZ_",
						cn[co].queryLeftNewDTO.train_no,
						cn[co].queryLeftNewDTO.yp_ex, "91",
						cn[co].queryLeftNewDTO.controlled_train_flag)
			} else {
				if (cn[co].queryLeftNewDTO.tz_num
						&& cn[co].queryLeftNewDTO.tz_num != "--"
						&& cn[co].queryLeftNewDTO.tz_num != 0
						&& cn[co].queryLeftNewDTO.tz_num != "无") {
					b5(cs, cn[co].queryLeftNewDTO.tz_num, "TZ_",
							cn[co].queryLeftNewDTO.train_no,
							cn[co].queryLeftNewDTO.yp_ex, "P1",
							cn[co].queryLeftNewDTO.controlled_train_flag)
				} else {
					if (cn[co].queryLeftNewDTO.swz_num
							&& cn[co].queryLeftNewDTO.swz_num == "无") {
						b5(cs, cn[co].queryLeftNewDTO.swz_num, "SWZ_",
								cn[co].queryLeftNewDTO.train_no,
								cn[co].queryLeftNewDTO.yp_ex, "91",
								cn[co].queryLeftNewDTO.controlled_train_flag)
					} else {
						b5(cs, cn[co].queryLeftNewDTO.tz_num, "TZ_",
								cn[co].queryLeftNewDTO.train_no,
								cn[co].queryLeftNewDTO.yp_ex, "P1",
								cn[co].queryLeftNewDTO.controlled_train_flag)
					}
				}
			}
			b5(cs, cn[co].queryLeftNewDTO.zy_num, "ZY_",
					cn[co].queryLeftNewDTO.train_no,
					cn[co].queryLeftNewDTO.yp_ex, "M1",
					cn[co].queryLeftNewDTO.controlled_train_flag);
			b5(cs, cn[co].queryLeftNewDTO.ze_num, "ZE_",
					cn[co].queryLeftNewDTO.train_no,
					cn[co].queryLeftNewDTO.yp_ex, "O1",
					cn[co].queryLeftNewDTO.controlled_train_flag);
			b5(cs, cn[co].queryLeftNewDTO.gr_num, "GR_",
					cn[co].queryLeftNewDTO.train_no,
					cn[co].queryLeftNewDTO.yp_ex, "61",
					cn[co].queryLeftNewDTO.controlled_train_flag);
			b5(cs, cn[co].queryLeftNewDTO.rw_num, "RW_",
					cn[co].queryLeftNewDTO.train_no,
					cn[co].queryLeftNewDTO.yp_ex, "41",
					cn[co].queryLeftNewDTO.controlled_train_flag);
			b5(cs, cn[co].queryLeftNewDTO.srrb_num, "SRRB_",
					cn[co].queryLeftNewDTO.train_no,
					cn[co].queryLeftNewDTO.yp_ex, "F1",
					cn[co].queryLeftNewDTO.controlled_train_flag);
			b5(cs, cn[co].queryLeftNewDTO.yw_num, "YW_",
					cn[co].queryLeftNewDTO.train_no,
					cn[co].queryLeftNewDTO.yp_ex, "31",
					cn[co].queryLeftNewDTO.controlled_train_flag);
			b5(cs, cn[co].queryLeftNewDTO.rz_num, "RZ_",
					cn[co].queryLeftNewDTO.train_no,
					cn[co].queryLeftNewDTO.yp_ex, "21",
					cn[co].queryLeftNewDTO.controlled_train_flag);
			b5(cs, cn[co].queryLeftNewDTO.yz_num, "YZ_",
					cn[co].queryLeftNewDTO.train_no,
					cn[co].queryLeftNewDTO.yp_ex, "11",
					cn[co].queryLeftNewDTO.controlled_train_flag);
			b5(cs, cn[co].queryLeftNewDTO.wz_num, "WZ_",
					cn[co].queryLeftNewDTO.train_no,
					cn[co].queryLeftNewDTO.yp_ex, "W1",
					cn[co].queryLeftNewDTO.controlled_train_flag);
			b5(cs, cn[co].queryLeftNewDTO.qt_num, "QT_",
					cn[co].queryLeftNewDTO.train_no,
					cn[co].queryLeftNewDTO.yp_ex, "",
					cn[co].queryLeftNewDTO.controlled_train_flag);
			if ("Y" == cn[co].queryLeftNewDTO.canWebBuy) {
				cs
						.push(' <td align="center" width="80" class="no-br"><a href="javascript:" class="btn72" onclick="checkG1234(\'');
				cs.push(cn[co].secretStr);
				cs.push("','");
				cs.push(cn[co].queryLeftNewDTO.start_time);
				cs.push("','");
				cs.push(cn[co].queryLeftNewDTO.train_no);
				cs.push("','");
				cs.push(cn[co].queryLeftNewDTO.from_station_telecode);
				cs.push("','");
				cs.push(cn[co].queryLeftNewDTO.to_station_telecode);
				cs.push("')\">");
				cs.push(buttonText());
				cs.push("</a>");
				cs.push("</td>")
			} else {
				cs.push('<td align="center" width="80" class="no-br">');
				cs.push(cn[co].buttonTextInfo);
				cs.push("</td>")
			}
			cs.push("</tr>");
			cs.push('<tr datatran="'
					+ cn[co].queryLeftNewDTO.station_train_code
					+ '" id="price_');
			cs.push(cn[co].queryLeftNewDTO.train_no);
			cs.push('" style="display:none;"></tr>')
		}
		cs.push("</tbody>");
		$("#queryLeftTable").replaceWith(cs.join(""));
		if (cp) {
			for (var co = 0; co < cn.length; co++) {
				var cq = cn[co];
				if (c(cq.queryLeftNewDTO.station_train_code)) {
				}
			}
		}
	}
	function cb(co) {
		if (co && co.length > 0) {
			var cs = [];
			var cn = [];
			for (var cp = 0, cq = co.length; cp < cq; cp++) {
				var cr = co[cp];
				if (c(cr.queryLeftNewDTO.station_train_code)) {
					cs.push(cr)
				} else {
					cn.push(cr)
				}
			}
			co = cs.concat(cn)
		}
		return co
	}
	function c(cp) {
		if (DW_TRAINS && DW_TRAINS.length) {
			for (var cn = 0, co = DW_TRAINS.length; cn < co; cn++) {
				if (cp == DW_TRAINS[cn]) {
					return true
				}
			}
		} else {
			return false
		}
		return false
	}
	function bV(cn) {
		if (cn && cn.length > 0) {
			if (DW_TRAINS && DW_TRAINS.length) {
				for (var cq = 0, cs = cn.length; cq < cs; cq++) {
					var cr = cn[cq].queryLeftNewDTO.station_train_code;
					for (var co = 0, cp = DW_TRAINS.length; co < cp; co++) {
						if (cr == DW_TRAINS[co]) {
							return true
						}
					}
				}
			}
		}
		return false
	}
	function ae(ct, cn) {
		var cu, cr, cq;
		var cp;
		cq = ct["leftTicketDTO.train_date"];
		if (hainan_limit_start_traindate
				&& C(cq) >= C(hainan_limit_start_traindate)) {
			if (hainan_limit_from_telcode && hainan_limit_to_telcode) {
				for (var co = 0, cs = cn.length; co < cs; co++) {
					cu = cn[co].queryLeftNewDTO.from_station_telecode;
					cr = cn[co].queryLeftNewDTO.to_station_telecode;
					cp = cn[co].buttonTextInfo;
					if (hainan_limit_from_telcode.indexOf(cu) > -1
							&& hainan_limit_to_telcode.indexOf(cr) > -1
							&& cp.indexOf("起售") > -1) {
						return true
					}
				}
			}
		}
		return false
	}
	function b5(cr, co, cw, cs, cp, cv, cq) {
		cp = cp.replace("F", "4").replace("A", "6");
		var cu = cp ? cp.indexOf(cv) : -1;
		var ct = false;
		if (cu > -1 && (cu % 2) == 0) {
			ct = true
		}
		if ("1" == cq || "2" == cq) {
			cr
					.push(' <td width="46" align="center" style="cursor: pointer;"  id="');
			cr.push(cw);
			cr.push(cs);
			cr.push('">');
			cr.push(co);
			cr.push("</td>")
		} else {
			if ("有" == co) {
				if (cw == "SWZ_" || cw == "TZ_") {
					cr
							.push('<td width="46" align="center" class="yes" onclick="showTicketPrice(this)"　style="cursor: pointer;" id="');
					cr.push(cw);
					cr.push(cs);
					cr.push('">');
					if (ct) {
						cr.push('<div class="sale" title="本席别票价打折">' + co
								+ '<span class="i-mark">折</span></div>')
					} else {
						cr.push(co)
					}
					cr.push("</td>")
				} else {
					if (cw == "ZY_" || cw == "ZE_") {
						cr
								.push('<td width="46" align="center" class="yes" style="cursor: pointer;" onclick="showTicketPrice(this)" id="');
						cr.push(cw);
						cr.push(cs);
						cr.push('">');
						if (ct) {
							cr.push('<div class="sale" title="本席别票价打折">' + co
									+ '<span class="i-mark">折</span></div>')
						} else {
							cr.push(co)
						}
						cr.push("</td>")
					} else {
						cr
								.push('<td width="46" align="center" style="cursor: pointer;" class="yes" onclick="showTicketPrice(this)" id="');
						cr.push(cw);
						cr.push(cs);
						cr.push('">');
						if (ct) {
							cr.push('<div class="sale" title="本席别票价打折">' + co
									+ '<span class="i-mark">折</span></div>')
						} else {
							cr.push(co)
						}
						cr.push("</td>")
					}
				}
			} else {
				if (co == "无" || isNum(co) >= 0) {
					var cn = ' class="t-num" ';
					if (co == "无" || isNum(co) == 0) {
						cn = ""
					}
					if (cw == "SWZ_" || cw == "TZ_" || cw == "ZY_"
							|| cw == "ZE_") {
						cr
								.push('<td width="46" align="center" style="cursor: pointer;" '
										+ cn
										+ ' onclick="showTicketPrice(this)" id="');
						cr.push(cw);
						cr.push(cs);
						cr.push('">');
						cr.push("<div>");
						if (ct) {
							cr.push('<div class="sale" title="本席别票价打折">' + co
									+ '<span class="i-mark">折</span></div>')
						} else {
							cr.push(co)
						}
						cr.push("</td>")
					} else {
						cr
								.push('<td width="46" align="center" style="cursor: pointer;" '
										+ cn
										+ ' onclick="showTicketPrice(this)" id="');
						cr.push(cw);
						cr.push(cs);
						cr.push('">');
						if (ct) {
							cr.push('<div class="sale" title="本席别票价打折">' + co
									+ '<span class="i-mark">折</span></div>')
						} else {
							cr.push(co)
						}
						cr.push("</td>")
					}
				} else {
					cr
							.push(' <td width="46" align="center" style="cursor: pointer;" onclick="showTicketPrice(this)"  id="');
					cr.push(cw);
					cr.push(cs);
					cr.push('">');
					cr.push(co);
					cr.push("</td>")
				}
			}
		}
	}
	function k(co, cn) {
		ishaveCheckId = false;
		for (i = 0; i < co.length; i++) {
			if (co[i][0] == cn) {
				co[i][1] = $("#".concat($("#".concat(cn)).attr("for"))).is(
						":checked");
				ishaveCheckId = true
			}
		}
		if (!ishaveCheckId) {
			co[co.length] = [ cn, true ]
		}
	}
	function bM() {
		e(bA);
		e(bo);
		e(N)
	}
	function e(cn) {
		for (i = 0; i < cn.length; i++) {
			if (cn[i][1]) {
				$("#".concat(cn[i][0]).concat("_check")).attr("checked", true)
			}
		}
	}
	function C(co) {
		var cn = new Date();
		var cp = co.split("-");
		cn.setFullYear(parseInt(cp[0]), parseInt(cp[1] - 1, 10), parseInt(
				cp[2], 10));
		if (cp.length >= 6) {
			cn.setHours(cp[3], cp[4], cp[5])
		}
		return cn
	}
	Date.prototype.format = function(co) {
		var cp = {
			"M+" : this.getMonth() + 1,
			"d+" : this.getDate(),
			"h+" : this.getHours(),
			"m+" : this.getMinutes(),
			"s+" : this.getSeconds(),
			"q+" : Math.floor((this.getMonth() + 3) / 3),
			S : this.getMilliseconds()
		};
		if (/(y+)/.test(co)) {
			co = co.replace(RegExp.$1, (this.getFullYear() + "")
					.substr(4 - RegExp.$1.length))
		}
		for ( var cn in cp) {
			if (new RegExp("(" + cn + ")").test(co)) {
				co = co.replace(RegExp.$1, RegExp.$1.length == 1 ? cp[cn]
						: ("00" + cp[cn]).substr(("" + cp[cn]).length))
			}
		}
		return co
	};
	function aJ(cp, co) {
		var cn = new Date(Date.parse(cp.replace(/-/g, "/")));
		cn.setDate(cn.getDate() + co);
		return P(cn)
	}
	function P(co) {
		var cp = co.getFullYear();
		var cr = co.getMonth() + 1;
		var cq = co.getDate();
		var cn = cp + "-" + cr + "-" + cq;
		return cn
	}
	function bC() {
		var cp = $("#train_date").val();
		var co = $("#back_train_date").val();
		var cn = false;
		if ($("#wf").is(":checked")) {
			if (C(cp) <= C(co)) {
				cn = true
			}
		} else {
			return true
		}
		return cn
	}
	function cd() {
		var cq = $.jc_getFromStation();
		if (cq) {
			var cp = cq.split(",");
			if (cp && cp.length == 2) {
				$("#fromStationText").val(cp[0]);
				$("#fromStation").val(cp[1])
			}
		}
		var co = $.jc_getToStation();
		if (co) {
			var cp = co.split(",");
			if (cp && cp.length == 2) {
				$("#toStationText").val(cp[0]);
				$("#toStation").val(cp[1])
			}
		}
		var cr = [];
		cr = stu_buy_date.split("&");
		var cn = $.jc_getFromDate();
		if (cn) {
			if (cn >= cr[0] && cn <= cr[1]) {
				$("#train_date").val(cn)
			}
		}
		var cs = $.jc_getWfOrDc();
		if (cs && "wf" == cs) {
			$("#wf").click();
			var ct = $.jc_getToDate();
			if (ct) {
				if (ct >= cr[0] && ct <= cr[1]) {
					$("#back_train_date").val(ct)
				}
			}
		} else {
			$("#dc").click()
		}
	}
	function aZ() {
		$("#train_stop").on("mouseover", function(cn) {
			if (checkHover(cn, this)) {
				bZ = 1
			}
		}).on("mouseleave", function() {
			bZ = 0;
			$("#train_stop").hide();
			$("#train_table_").html("")
		})
	}
	function f() {
		fromStation = from_station;
		fromStationName = from_station_name;
		toStation = to_station;
		toStationName = to_station_name;
		trainDate = trainDate;
		backTrainDate = backTrainDate;
		bA = new Array();
		bo = new Array();
		N = new Array()
	}
	function t() {
		if ($("#sf1").is(":checked")) {
			isOther = true;
			if (other_control < dataNumber) {
				for (var cn = other_control + 1; cn <= dataNumber; cn++) {
					$("#date-list>li:nth-child(" + cn + ")").hide()
				}
			} else {
				for (var cn = 1; cn <= dataNumber; cn++) {
					$("#date-list>li:nth-child(" + cn + ")").show()
				}
			}
		} else {
			isOther = false;
			if (stu_control < dataNumber) {
				for (var cn = stu_control + 1; cn <= dataNumber; cn++) {
					$("#date-list>li:nth-child(" + cn + ")").hide()
				}
			} else {
				for (var cn = 1; cn <= dataNumber; cn++) {
					$("#date-list>li:nth-child(" + cn + ")").show()
				}
			}
		}
	}
	function o() {
		$("#fromStation").val(fromStation);
		$("#fromStationText").val(fromStationName);
		$("#toStation").val(toStation);
		$("#toStationText").val(toStationName);
		$("#train_date").val(trainDate);
		if (isInMaintenanceHours) {
			if (!isSuperLogin) {
				$("#autoSubmit").prop("checked", false);
				$("#autoSubmit").attr("disabled", true);
				$("#autoSubmit").siblings("label").css("color", "#999");
				$("#autoSubmitTxt").attr("title", "系统维护时间下不允许自动提交");
				$("#partSubmit").prop("checked", false);
				$("#partSubmit").attr("disabled", true);
				$("#partSubmit").siblings("label").css("color", "#999");
				$("#partSubmitTxt").attr("title", "系统维护时间下不允许自动提交");
				$("#auto_query").prop("checked", false);
				$("#auto_query").attr("disabled", true);
				$("#auto_query").siblings("label").css("color", "#999");
				$("#autoQueryTxt").attr("title", "系统维护时间下不允许自动查询")
			}
		}
		if (backTrainDate != null && backTrainDate != "") {
			$("#back_train_date").val(backTrainDate)
		}
		if ($("#fromStationText").val() == "") {
			$("#fromStationText").val("简拼/全拼/汉字")
		}
		if ($("#toStationText").val() == "") {
			$("#toStationText").val("简拼/全拼/汉字")
		}
		if (page_show_flag == null) {
			cd()
		} else {
			if (page_show_flag == "index") {
				bm()
			} else {
				if (page_show_flag == "preStep") {
					b8()
				} else {
					if (page_show_flag == "fcInit") {
						v();
						$("#autoSubmit").attr("disabled", true);
						$("#autoSubmit").siblings("label").css("color", "#999");
						$("#partSubmit").attr("disabled", true);
						$("#partSubmit").siblings("label").css("color", "#999")
					} else {
						if (page_show_flag == "gcInit") {
							bp();
							$("#autoSubmit").attr("disabled", true);
							$("#autoSubmit").siblings("label").css("color",
									"#999");
							$("#partSubmit").attr("disabled", true);
							$("#partSubmit").siblings("label").css("color",
									"#999")
						}
					}
				}
			}
		}
	}
	function bm() {
		if (tour_flag == "wf") {
			$("#wf").click()
		} else {
			if (tour_flag == "dc") {
				$("#dc").click()
			}
		}
		if (purposeCodeFromIndex == "0X00") {
			$("#sf2").click()
		} else {
			if (purposeCodeFromIndex == "ADULT") {
				$("#sf1").click()
			}
		}
		var cn = [];
		$("#date_range>ul>li").each(function() {
			var co = $(this).children("span:first-child").html();
			cn.push(co)
		});
		$("#query_ticket").click()
	}
	function b8() {
		$("#fromStationText").removeClass().addClass("inp_selected");
		$("#toStationText").removeClass().addClass("inp_selected");
		if (train_tour_flag == "dc") {
			ar(trainDate);
			$("#dc").click()
		}
		if (train_tour_flag == "wc") {
			ar(trainDate);
			$("#wf").click()
		}
		if (train_tour_flag == "fc") {
			ar(backTrainDate);
			$("#wf").click();
			$("#wf").attr("disabled", "true");
			$("#dc").attr("disabled", "true");
			$("#change_station").removeClass().addClass("i-change i-change2");
			$("#change_station").attr("style", "");
			$("#fromStationText").attr("title", "返程时不得变更出发地或不能变更到达地");
			$("#toStationText").attr("title", "返程时不得变更出发地或不能变更到达地");
			$("#toStationText").unbind("focus").unbind("click").attr(
					"readonly", "true");
			$("#fromStationText").unbind("focus").unbind("click").attr(
					"readonly", "true");
			$("#dfc>ul>li:nth-child(2)").children("label:first").removeClass()
					.addClass("color999");
			$("#dfc>ul>li:nth-child(1)").children("label:first").removeClass()
					.addClass("color999");
			$("#place_area>ul>li:nth-child(1)").addClass("no-change");
			$("#place_area>ul>li:nth-child(3)").addClass("no-change");
			$("#place_area>ul>li:nth-child(4)").addClass("no-change");
			$("#fromStationText").removeClass().addClass("inp-txt");
			$("#toStationText").removeClass().addClass("inp-txt");
			$("#change_station").unbind();
			$("#train_date").val(trainDate);
			$("#train_date").attr("readonly", "true");
			$("#train_date").removeClass().addClass("inp-txt");
			$("#train_date").unbind("click");
			$("#date_icon_1").unbind("click");
			$("#date_area>ul>li:nth-child(1)>span>label").addClass("color999");
			$("#back_train_date").val(backTrainDate);
			$("#back_train_date").removeAttr("disabled");
			$("#date_area>ul>li:nth-child(2)>span>label").removeClass(
					"color999");
			$("#back_train_date").removeClass().addClass("inp_selected");
			$("#autoSubmit").attr("disabled", true);
			$("#autoSubmit").siblings("label").css("color", "#999");
			$("#partSubmit").attr("disabled", true);
			$("#partSubmit").siblings("label").css("color", "#999")
		}
		if (train_tour_flag == "gc") {
			ar(trainDate);
			bp();
			$("#autoSubmit").attr("disabled", true);
			$("#autoSubmit").siblings("label").css("color", "#999");
			$("#partSubmit").attr("disabled", true);
			$("#partSubmit").siblings("label").css("color", "#999")
		}
	}
	function ar(cp) {
		for (var cn = 1; cn <= 20; cn++) {
			var co = $("#date_range>ul>li:nth-child(" + cn + ")").children(
					"span:first-child").text();
			co = "2013-" + co;
			if (cp == co) {
				$("#date_range>ul>li").removeClass("sel");
				$("#date_range>ul>li").removeAttr("alt");
				$("#date_range>ul>li:nth-child(" + cn + ")").addClass("sel");
				$("#date_range>ul>li:nth-child(" + cn + ")")
						.attr("alt", "show");
				$("#date_range>ul>li:nth-child(20)").addClass("end");
				$("#date_range>ul>li:nth-child(" + cn + ")").children(
						"span:first-child").removeClass();
				$("#date_range>ul>li:nth-child(" + cn + ")").children(
						"span:last-child").removeClass();
				$("#date_range>ul>li:nth-child(" + cn + ")").children(
						"span:first-child").addClass("hide");
				$("#date_range>ul>li:nth-child(1)").children()
						.addClass("first");
				bR = $("#date_range>ul>li:nth-child(" + cn + ")").children(
						"span:first-child").text();
				break
			}
		}
	}
	function bp() {
		$("#fromStationText").attr("title", "改签时不得变更出发地或不能变更到达地");
		$("#dc").click();
		$("#wf").attr("disabled", "true");
		$("#dc").attr("disabled", "true");
		$("#place_area>ul>li:nth-child(1)").addClass("no-change");
		$("#place_area>ul>li:nth-child(3)").addClass("no-change");
		$("#place_area>ul>li:nth-child(5)").addClass("no-change");
		$("#dfc>ul>li:nth-child(1)").children("label:first").removeClass()
				.addClass("color999");
		$("#dfc>ul>li:nth-child(2)").children("label:first").removeClass()
				.addClass("color999");
		$("#fromStationText").unbind("focus").unbind("click").attr("readonly",
				"true");
		if ("Y" != canChangeToStation) {
			$("#toStationText").unbind("focus").unbind("click").attr(
					"readonly", "true");
			$("#toStationText").removeClass().addClass("inp-txt");
			$("#toStationText_label").addClass("color999")
		}
		$("#fromStationText").removeClass().addClass("inp-txt");
		$("#fromStationText_label").addClass("color999");
		$("#change_station").unbind();
		$("#change_station").removeClass().addClass("i-change i-change2");
		$("#change_station").attr("style", "")
	}
	function v() {
		$("#fromStationText").attr("title", "订返程票时不得变更出发地或不能变更到达地");
		$("#toStationText").attr("title", "订返程票时不得变更出发地或不能变更到达地");
		ar(backTrainDate);
		$("#wf").click();
		$("#dc").attr("disabled", "true");
		$("#wf").attr("disabled", "true");
		$("#place_area>ul>li:nth-child(1)").addClass("no-change");
		$("#place_area>ul>li:nth-child(3)").addClass("no-change");
		$("#place_area>ul>li:nth-child(4)").addClass("no-change");
		$("#dfc>ul>li:nth-child(1)").children("label:first").removeClass()
				.addClass("color999");
		$("#dfc>ul>li:nth-child(2)").children("label:first").removeClass()
				.addClass("color999");
		$("#train_date").attr("readonly", "true");
		$("#train_date").addClass("color999");
		$("#train_date").attr("disabled", true);
		$("#train_date").unbind("click");
		$("#date_icon_1").unbind("click");
		$("#date_area>ul>li:nth-child(1)>span>label").addClass("color999");
		$("#back_train_date").removeAttr("disabled");
		$("#date_area>ul>li:nth-child(2)>span>label").removeClass("color999");
		$("#train_date").removeClass().addClass("inp-txt");
		$("#back_train_date").removeClass().addClass("inp_selected");
		$("#fromStationText").unbind("focus").unbind("unfocus").unbind("click")
				.attr("readonly", "true");
		$("#toStationText").unbind("focus").unbind("unfocus").unbind("click")
				.attr("readonly", "true");
		$("#fromStationText").removeClass().addClass("inp-txt");
		$("#toStationText").removeClass().addClass("inp-txt");
		$("#change_station").unbind();
		$("#change_station").removeClass().addClass("i-change i-change2");
		$("#change_station").attr("style", "")
	}
	function Y() {
		initPageTitle(1);
		$("#train_type_btn_all").css("cursor", "pointer");
		$("#start_time_btn_all").css("cursor", "pointer");
		$("#arrive_time_btn_all").css("cursor", "pointer");
		$("#seat_type_btn_all").css("cursor", "pointer");
		$("#from_station_name_all").css("cursor", "pointer");
		$("#to_station_name_all").css("cursor", "pointer");
		$("#change_station").css("cursor", "pointer");
		$("#show_more").css("cursor", "pointer");
		$("#date_normal").css("cursor", "pointer");
		$("#lookup").css("cursor", "pointer");
		$("#s_time").css("cursor", "pointer");
		$("#r_time").css("cursor", "pointer");
		$("#l_s").css("cursor", "pointer");
		$("#other_span_starttime").css("cursor", "pointer");
		$("#other_span_endtime").css("cursor", "pointer");
		$("#other_span_lishi").css("cursor", "pointer");
		$("#date_range>ul>li").children("span:nth-child(1)").css("cursor",
				"pointer");
		$("#cc_seat_type_btn_all>ul>li").hide();
		$("#train_date").removeClass().addClass("inp_selected");
		if ($("#fromStationText").val() != ""
				&& $("#fromStationText").val() != "简拼/全拼/汉字"
				|| $("#toStationText").val() != ""
				&& $("#toStationText").val() != "简拼/全拼/汉字") {
			$("#fromStationText").removeClass().addClass("inp_selected");
			$("#toStationText").removeClass().addClass("inp_selected")
		}
		var cn = stu_start_train_date.split("&");
		var co = stu_end_tain_date.split("&")
	}
	function ca(co) {
		var cn = ("00" + (co.getMonth() + 1)).slice(-2) + "-";
		cn += ("00" + co.getDate()).slice(-2) + " 00:00:00";
		return cn
	}
	function y() {
		$("#dc").click(function() {
			$("#wf").attr("checked", false);
			$("#dc").attr("checked", "true");
			$("#place_area>ul>li:nth-child(5)").addClass("no-change");
			$("#back_train_date").removeClass().addClass("inp-txt");
			$("#back_train_date").attr("disabled", true)
		});
		$("#wf").click(function() {
			$("#dc").attr("checked", false);
			$("#wf").attr("checked", true);
			$("#back_train_date").removeAttr("disabled");
			$("#place_area>ul>li:nth-child(5)").removeClass();
			$("#train_date").removeClass().addClass("inp_selected");
			$("#back_train_date").removeClass().addClass("inp_selected");
			isbigdate = bC();
			if (!isbigdate) {
				train = $("#train_date").val();
				$("#back_train_date").val(train)
			}
			var cn = $("#train_date").val()
		})
	}
	function a3() {
		$("#avail_ticket").click(function() {
			$("#filterTic").attr("checked", false);
			aH()
		});
		$("#train_type_btn_all").click(function() {
			var cn = true;
			$("#sear-sel-bd input[name='cc_type']").each(function() {
				if (!this.checked) {
					cn = false
				}
			});
			if (cn) {
				$("#sear-sel-bd input[name='cc_type']").each(function() {
					this.checked = false
				});
				$("#train_type_btn_all").removeClass().addClass("btn-all")
			} else {
				$("#sear-sel-bd input[name='cc_type']").each(function() {
					if (!this.checked) {
						this.checked = true
					}
				});
				$("#train_type_btn_all").removeClass().addClass("btn-all")
			}
			aH()
		});
		$("#start_time_btn_all").click(function() {
			var cn = true;
			$("#sear-sel-bd input[name='cc_start_time']").each(function() {
				if (!this.checked) {
					cn = false
				}
			});
			if (cn) {
				$("#sear-sel-bd input[name='cc_start_time']").each(function() {
					this.checked = false
				});
				$("#start_time_btn_all").removeClass().addClass("btn-all")
			} else {
				$("#sear-sel-bd input[name='cc_start_time']").each(function() {
					if (!this.checked) {
						this.checked = true
					}
				});
				$("#start_time_btn_all").removeClass().addClass("btn-all")
			}
			aH()
		});
		$("#from_station_name_all").click(
				function() {
					var cn = true;
					$("#sear-sel-bd input[name='cc_from_station']").each(
							function() {
								if (!this.checked) {
									cn = false
								}
							});
					if (cn) {
						$("#sear-sel-bd input[name='cc_from_station']").each(
								function() {
									this.checked = false;
									k(bA, "cc_from_station_" + $(this).val())
								});
						$("#from_station_name_all").removeClass().addClass(
								"btn-all")
					} else {
						$("#sear-sel-bd input[name='cc_from_station']").each(
								function() {
									if (!this.checked) {
										this.checked = true;
										k(bA, "cc_from_station_"
												+ $(this).val())
									}
								});
						$("#from_station_name_all").removeClass().addClass(
								"btn-all")
					}
					aH()
				});
		$("#to_station_name_all").click(function() {
			var cn = true;
			$("#sear-sel-bd input[name='cc_to_station']").each(function() {
				if (!this.checked) {
					cn = false
				}
			});
			if (cn) {
				$("#sear-sel-bd input[name='cc_to_station']").each(function() {
					this.checked = false;
					k(bo, "cc_to_station_" + $(this).val())
				});
				$("#to_station_name_all").removeClass().addClass("btn-all")
			} else {
				$("#sear-sel-bd input[name='cc_to_station']").each(function() {
					if (!this.checked) {
						this.checked = true;
						k(bo, "cc_to_station_" + $(this).val())
					}
				});
				$("#to_station_name_all").removeClass().addClass("btn-all")
			}
			aH()
		})
	}
	function bT() {
		$("#change_station").bind(
				"click",
				function() {
					var cr = $("#fromStationText").val();
					var ct = $("#fromStation").val();
					var cs = $("#toStationText").val();
					var cn = $("#toStation").val();
					if ((cr != "" && cr != "简拼/全拼/汉字")
							&& (cs != "" && cs != "简拼/全拼/汉字")) {
						$("#fromStationText").val(cs);
						$("#toStationText").val(cr);
						$("#fromStation").val(cn);
						$("#toStation").val(ct);
						$("#fromStationText").removeClass().addClass(
								"inp_selected");
						$("#toStationText").removeClass().addClass(
								"inp_selected")
					} else {
						bb.checkForm();
						bb.hideErrors();
						var cq = bb.errorList;
						for (var cp = 0; cp < cq.length; cp++) {
							var co = cq[cp];
							$(co.element).next().addClass("error")
						}
						bb.checkForm()
					}
					bL()
				})
	}
	function bL() {
		if ($("#fromStationText").val() == "简拼/全拼/汉字") {
			$.stationFor12306.from_to_station_class_gray($("#fromStationText"))
		} else {
			$.stationFor12306
					.from_to_station_class_plain($("#fromStationText"))
		}
		if ($("#toStationText").val() == "简拼/全拼/汉字") {
			$.stationFor12306.from_to_station_class_gray($("#toStationText"))
		} else {
			$.stationFor12306.from_to_station_class_plain($("#toStationText"))
		}
	}
	function bz() {
		$("#show_more").click(function() {
			var cn = $(this);
			if (cn.hasClass("down")) {
				au();
				cn.attr("class", "up")
			} else {
				document.getElementById("sear-sel-bd").style.height = "17px";
				cn.attr("class", "down");
				cn.parent().css("top", "58px")
			}
		})
	}
	function n() {
		if ($("#show_more").hasClass("up")) {
			au()
		}
	}
	function au() {
		var cp = "17px";
		var cr = 179;
		var cq = 28;
		var cn = $("#sear-sel-bd input[name='cc_from_station']").length;
		var cs = $("#sear-sel-bd input[name='cc_to_station']").length;
		var co = $("#sear-sel-bd input[name='cc_seat_type']").length;
		if (cn > 7 && cn <= 14) {
			cp = (cr + cq) + "px"
		} else {
			if (cs > 7 && cn <= 14) {
				cp = (cr + cq * 2) + "px"
			} else {
				if (co > 7) {
					cp = (cr + cq) + "px"
				} else {
					cp = cr + "px"
				}
			}
		}
		document.getElementById("sear-sel-bd").style.height = cp;
		$("#show_more").parent().css("top", "220px")
	}
	function d() {
		if (train_tour_flag == "fc"
				|| (train_tour_flag == "gc" && canChangeToStation != "Y")) {
			return
		}
		var cn = [ "fromStation", "toStation" ];
		if (canChangeToStation == "Y") {
			cn = [ "toStation" ]
		}
		$.stationFor12306.init(cn, {
			_init_input : "简拼/全拼/汉字",
			_top_4_initInput : "简拼/全拼/汉字或↑↓",
			_unselected_class : "inpt_unselected",
			_selected_class : "inp_selected",
			confirmCallBack : function(co, cp) {
				$("#yxtrain_close").click();
				co.removeClass("error");
				if (co.attr("id") == "fromStationText") {
					if (ccSelected.length > 0) {
						if (co.val() != bP) {
							$("#prior_train span:gt(1)").remove();
							$("#inp-train").css("color", "#999");
							$("#inp-train").val("  请输入");
							ccSelected = [];
							$("#prior_seat span:gt(0)").remove();
							$("#seat-list input").prop("checked", false);
							xbChecked = []
						}
					}
					bP = co.val()
				}
				if (co.attr("id") == "toStationText") {
					if (ccSelected.length > 0) {
						if (co.val() != b7) {
							$("#prior_train span:gt(1)").remove();
							$("#inp-train").css("color", "#999");
							$("#inp-train").val("  请输入");
							ccSelected = [];
							$("#prior_seat span:gt(0)").remove();
							$("#seat-list input").prop("checked", false);
							xbChecked = []
						}
					}
					b7 = co.val()
				}
			}
		});
		$("#fromStation_icon_image").css("cursor", "pointer");
		$("#fromStationText_label").click(function() {
			$("#fromStationText").focus()
		});
		$("#fromStation_icon_image").click(function() {
			$("#fromStationText").focus()
		});
		$("#toStation_icon_image").css("cursor", "pointer");
		$("#toStationText_label").click(function() {
			$("#toStationText").focus()
		});
		$("#toStation_icon_image").click(function() {
			$("#toStationText").focus()
		})
	}
	function ck() {
		bb = $("#queryLeftForm").validate({
			rules : {
				"leftTicketDTO.from_station" : {
					required : true
				},
				"leftTicketDTO.to_station" : {
					required : true
				},
				"leftTicketDTO.train_date" : {
					required : true
				},
				back_train_date : {
					required : true
				}
			},
			ignore : "",
			onsubmit : false,
			onfocusout : function() {
			},
			onkeyup : function() {
			},
			onclick : function() {
			},
			highlight : function() {
			},
			unhighlight : function() {
			}
		});
		bK()
	}
	function b(cn) {
		dhtmlx.alert({
			title : "提示",
			ok : messages["button.ok"],
			text : cn,
			type : "alert-error",
			callback : function() {
			}
		})
	}
	function bI(co, cu) {
		var cn = bb.checkForm();
		bb.hideErrors();
		if (cn) {
			var ct = "";
			if (!bC()) {
				ct = "返回日期不得早于出发日期";
				b(ct);
				return false
			}
			var cr = [];
			if (cu) {
				cr = stu_buy_date.split("&")
			} else {
				cr = other_buy_date.split("&")
			}
			if (cr.length > 0) {
				if (co < cr[0] || co > cr[1]) {
					ct = "您选择的日期不在预售期范围内！";
					b(ct);
					return false
				}
			}
		} else {
			var cs = bb.errorList;
			for (var cq = 0; cq < cs.length; cq++) {
				var cp = cs[cq];
				$(cp.element).next().addClass("error")
			}
			return false
		}
		cc();
		return true
	}
	function cc() {
		$.jc_setFromStation($("#fromStationText").val(), $("#fromStation")
				.val());
		$.jc_setToStation($("#toStationText").val(), $("#toStation").val());
		$.jc_setFromDate($("#train_date").val());
		$.jc_setToDate($("#back_train_date").val());
		$.jc_setWfOrDc($("#wf").is(":checked") ? "wf" : "dc")
	}
	function bK() {
		$("#query_ticket")
				.unbind("click")
				.click(
						function(cr) {
							$("#sel-buyer").hide();
							$("#sel-seat").hide();
							$("#sel-date").hide();
							if ($("#yxtrain_loading").is(":hidden")) {
								$("#yxtraindiv").hide()
							}
							if ($jpopup.isShow()) {
								$jpopup.quickHide()
							}
							if (myStopStation) {
								myStopStation.close()
							}
							if ($("#auto_query").is(":checked")) {
								var cq = $.trim($("#inp-train").val())
										.toUpperCase();
								if (cq.length != 0 && cq != "请输入") {
									dhtmlx
											.alert({
												title : "输入车次",
												ok : "确定",
												text : "您输入的优先车次未添加，请点击车次输入框后的添加按钮，或者取消车次输入框中的内容！",
												type : "alert-error",
												callback : function() {
													ccInputSelected = true;
													$("#inp-train").select()
												}
											});
									return
								}
							}
							ah();
							if (document.getElementById("autoSubmit").checked) {
								if (passengerChecked.length == 0) {
									dhtmlx.alert({
										title : "选择乘车人",
										ok : "确定",
										text : "请选择乘车人",
										type : "alert-error",
										callback : function() {
											return
										}
									});
									return
								}
							}
							x = ch();
							var cs = x == "0X00" ? true : false;
							var co = train_tour_flag == "fc" ? $.trim($(
									"#back_train_date").val()) : $.trim($(
									"#train_date").val());
							var cn = bI(co, cs);
							if (!cn) {
								return
							}
							var cp = {
								"leftTicketDTO.train_date" : co,
								"leftTicketDTO.from_station" : $("#fromStation")
										.val(),
								"leftTicketDTO.to_station" : $("#toStation")
										.val(),
								purpose_codes : x
							};
							aT();
							aj(cp)
						})
	}
	var bf = function() {
		if ($("#filterTic").is(":checked")) {
			$("#avail_ticket").attr("checked", false);
			aK();
			if (bJ.length != 0 && bJ.length < a8.length) {
				$("#trainum").html(bJ.length);
				aA(bJ)
			}
		} else {
			bO = bc();
			if (bJ.length != 0 && bJ.length < bO.length) {
				$("#trainum").html(bO.length);
				aA(bO)
			}
		}
	};
	function b2(cq, cs) {
		var cp = [];
		for (var co = 0; co < cq.length; co++) {
			var ct = [];
			var cn = cq[co].split("|");
			ct.secretStr = cn[0];
			ct.buttonTextInfo = cn[1];
			var cr = [];
			cr.train_no = cn[2];
			cr.station_train_code = cn[3];
			cr.start_station_telecode = cn[4];
			cr.end_station_telecode = cn[5];
			cr.from_station_telecode = cn[6];
			cr.to_station_telecode = cn[7];
			cr.start_time = cn[8];
			cr.arrive_time = cn[9];
			cr.lishi = cn[10];
			cr.canWebBuy = cn[11];
			cr.yp_info = cn[12];
			cr.start_train_date = cn[13];
			cr.train_seat_feature = cn[14];
			cr.location_code = cn[15];
			cr.from_station_no = cn[16];
			cr.to_station_no = cn[17];
			cr.is_support_card = cn[18];
			cr.controlled_train_flag = cn[19];
			cr.gg_num = cn[20] ? cn[20] : "--";
			cr.gr_num = cn[21] ? cn[21] : "--";
			cr.qt_num = cn[22] ? cn[22] : "--";
			cr.rw_num = cn[23] ? cn[23] : "--";
			cr.rz_num = cn[24] ? cn[24] : "--";
			cr.tz_num = cn[25] ? cn[25] : "--";
			cr.wz_num = cn[26] ? cn[26] : "--";
			cr.yb_num = cn[27] ? cn[27] : "--";
			cr.yw_num = cn[28] ? cn[28] : "--";
			cr.yz_num = cn[29] ? cn[29] : "--";
			cr.ze_num = cn[30] ? cn[30] : "--";
			cr.zy_num = cn[31] ? cn[31] : "--";
			cr.swz_num = cn[32] ? cn[32] : "--";
			cr.srrb_num = cn[33] ? cn[33] : "--";
			cr.yp_ex = cn[34];
			cr.seat_types = cn[35];
			cr.from_station_name = cs[cn[6]];
			cr.to_station_name = cs[cn[7]];
			ct.queryLeftNewDTO = cr;
			cp.push(ct)
		}
		return cp
	}
	function aj(cn) {
		$("#cc_seat_type_btn_all>ul>li").css("display", "none");
		if ($("#auto_query").is(":checked")) {
			$("#query_ticket").html("停止查询");
			$("#auto_query").attr("disabled", "true");
			$("#autoSubmit").attr("disabled", "true");
			$("#partSubmit").attr("disabled", "true");
			$("#query_ticket").unbind("click");
			$("#query_ticket").bind("click", function() {
				$("#filterTic").hide();
				clearInterval(aY);
				if (countDown) {
					clearInterval(countDown)
				}
				$("#filterTicDiv").html("");
				$("#query_ticket").unbind("click");
				$("#query_ticket").html("查询");
				if ($("#dc").is(":checked") && train_tour_flag != "gc") {
					$("#autoSubmit").removeAttr("disabled");
					$("#partSubmit").removeAttr("disabled")
				}
				$("#auto_query").removeAttr("disabled");
				bK()
			})
		} else {
			if (countDown) {
				clearInterval(countDown)
			}
			$("#filterTicDiv").html("");
			bN()
		}
		if ($("#yxtrain_loading").is(":hidden")) {
			var co = dhtmlx.modalbox({
				targSrc : '<div><img src="' + ctx
						+ 'resources/images/loading.gif"></img></div>',
				callback : function() {
				}
			})
		}
		if ($jpopup.isShow()) {
			$jpopup.quickHide()
		}
		$("#queryLeftTable").html("");
		$("#sear-result").hide();
		if (aY) {
			clearInterval(aY)
		}
		bX(cn);
		$
				.ajax({
					type : "get",
					isTakeParam : false,
					beforeSend : function(cp) {
						cp.setRequestHeader("If-Modified-Since", "0");
						cp.setRequestHeader("Cache-Control", "no-cache")
					},
					url : ctx + CLeftTicketUrl,
					data : cn,
					timeout : 10000,
					error : function(cp, cr, cq) {
						dhtmlx.modalbox.hide(co);
						if ("timeout" == cr || "No Transport" == cr
								|| "abort" == cr) {
							if ($("#auto_query").is(":checked")) {
								aj(cn)
							}
						}
					},
					success : function(cr) {
						dhtmlx.modalbox.hide(co);
						if (cr.status) {
							if (cr.data == null
									|| cr.data.length == 0
									|| (cr.data.result && cr.data.result.length == 0)) {
								$("#sear-sel").hide();
								$("#sear-result").hide();
								$("#t-list").hide();
								$("#_lc_link_foot").hide();
								$("#no_filter_ticket_fromstation").html(
										$("#fromStationText").val());
								$("#no_filter_ticket_tostation").html(
										$("#toStationText").val());
								$("#no_filter_ticket_6").hide();
								$("#no_filter_ticket_2").show();
								$(".content").css("min-height", "344px");
								$("#yxtraindiv").hide();
								trainListForIE = [];
								return
							}
							if (cr.data.flag == 1) {
								cr.data = b2(cr.data.result, cr.data.map)
							}
							trainListForIE = [];
							for (var cs = 0; cs < cr.data.length; cs++) {
								trainListForIE
										.push(cr.data[cs].queryLeftNewDTO.station_train_code
												+ "("
												+ cr.data[cs].queryLeftNewDTO.start_time
												+ "--"
												+ cr.data[cs].queryLeftNewDTO.arrive_time
												+ ")")
							}
							if (train_tour_flag == "gc"
									&& "Y" == isDwTicketResign) {
								var cz = [];
								for (var cs = 0, cA = cr.data.length; cs < cA; cs++) {
									var cq = cr.data[cs].queryLeftNewDTO;
									var cv = cq.station_train_code;
									cv = cv.substring(0, 1);
									if ("G" == cv || "D" == cv) {
										cz.push(cr.data[cs])
									}
								}
								cr.data = cz
							}
							if ($("#DW_SHOW_STR")[0]) {
								$("#DW_SHOW_STR").remove()
							}
							if ($("#hainan_limit_msg")[0]) {
								$("#hainan_limit_msg").remove()
							}
							$("#sear-result>p").eq(1).remove();
							$("#sear-sel").show();
							$("#sear-result").show();
							$("#t-list").show();
							$("#no_filter_ticket_6").hide();
							$("#no_filter_ticket_2").hide();
							$("#no_filter_ticket").hide();
							var cp = "";
							var cu = "";
							if (train_tour_flag != null
									&& train_tour_flag == "fc") {
								var cy = "<strong>"
										.concat($("#fromStationText").val())
										.concat(" --> ")
										.concat($("#toStationText").val())
										.concat("（")
										.concat(aD($("#back_train_date").val()))
										.concat(
												'）</strong>共计<strong id="trainum">')
										.concat(cr.data.length).concat(
												"</strong>个车次");
								if (bV(cr.data)) {
									cp = "<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>"
								} else {
									if (hainan_limit_msg && ae(cn, cr.data)) {
										cu = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>"
												+ hainan_limit_msg + "</p>"
									}
								}
								if ($("#auto_query").is(":checked")) {
									var cw = "";
									for (var ct = 0; ct < 25; ct++) {
										cw = cw + "&nbsp;"
									}
									cy = cy
											.concat(cw
													+ "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
								}
								$("#sear-result>p").html(cy);
								if ($("#auto_query").is(":checked")) {
									$("#filterTic").bind("click", bf)
								}
							} else {
								var cy = "<strong>"
										.concat($("#fromStationText").val())
										.concat(" --> ")
										.concat($("#toStationText").val())
										.concat("（")
										.concat(aD($("#train_date").val()))
										.concat(
												'）</strong>共计<strong id="trainum">')
										.concat(cr.data.length).concat(
												"</strong>个车次");
								if (bV(cr.data)) {
									cp = "<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>"
								} else {
									if (hainan_limit_msg && ae(cn, cr.data)) {
										cu = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>"
												+ hainan_limit_msg + "</p>"
									}
								}
								if ($("#auto_query").is(":checked")) {
									var cw = "";
									for (var ct = 0; ct < 25; ct++) {
										cw = cw + "&nbsp;"
									}
									cy = cy
											.concat(cw
													+ "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
								}
								$("#sear-result>p").html(cy);
								if ($("#auto_query").is(":checked")) {
									$("#filterTic").bind("click", bf)
								}
							}
							if (!$("#DW_SHOW_STR")[0]) {
								$("#sear-result>p").after(cp)
							}
							if (cu) {
								$("#sear-result>p").after(cu)
							}
							if (!$("#lc_msg")[0] && cu == "" && cp == "") {
								var cx = '<p id="lc_msg">您可使用<a  href="'
										+ ctx
										+ 'lcQuery/init">接续换乘</a>功能，查询途中换乘一次的部分列车余票情况。</p>';
								$("#sear-result>p").after(cx)
							}
							if (dwTranTimeStr) {
								clearInterval(dwTranTimeStr)
							}
							if ($("#DW_SHOW_STR")[0]) {
								dwTranTimeStr = window.setInterval(function() {
									if ($("#DW_SHOW_STR").attr("data") == "1") {
										$("#DW_SHOW_STR").attr("data", "2")
												.html("夜行两千公里 最低不足千元")
									} else {
										$("#DW_SHOW_STR").attr("data", "1")
												.html("高铁动卧 夕发朝至 风雨无阻 省时省钱")
									}
								}, 1300)
							}
							if ($("#hainan_limit_msg")[0]) {
								hainan_tip = null;
								hainan_tip = new Marquee({
									ID : "hainan_limit_msg",
									Direction : "left",
									Step : 1,
									Width : 0,
									Height : 0,
									Timer : 30,
									DelayTime : 0,
									WaitTime : 0,
									ScrollStep : 0
								})
							}
							a8 = cr.data;
							bl(a8);
							n();
							bE(a8);
							bM();
							L();
							if (!$("#yxtrain_loading").is(":hidden")) {
								$.showYxTrainData()
							}
							yxTrainChange = $("#fromStationText").val()
									+ $("#toStationText").val()
									+ $("#train_date").val();
							$("#_lc_link_foot").show()
						} else {
							if (cr && cr.c_url) {
								CLeftTicketUrl = cr.c_url;
								aj(cn)
							}
						}
					},
					error : function(cp, cr, cq) {
						dhtmlx.modalbox.hide(co);
						if (cp.status == 403) {
							if ($("#query_ticket").html() == "停止查询") {
								if (queryLeftTicket_times <= queryLeftTicket_count) {
									$("#query_ticket").trigger("click")
											.trigger("click");
									queryLeftTicket_times++
								} else {
									queryLeftTicket_times = 0
								}
								return
							}
							if (cp.responseText == "0"
									|| cp.responseText == "2"
									|| cp.responseText == "3"
									|| cp.responseText == "4"
									|| cp.responseText == "7") {
								cj("非法请求！");
								return
							} else {
								if (cp.responseText == "1"
										|| cp.responseText == "5"
										|| cp.responseText == "6") {
									cj("您的操作频率过快，请稍后再试！");
									return
								} else {
									cj("查询失败，请稍后再试！");
									return
								}
							}
						} else {
							if (cr = "timeout") {
								cj("查询超时，请稍后再试！");
								return
							}
						}
					}
				});
		aX()
	}
	function cj(cn) {
		$("#sear-sel").hide();
		$("#sear-result").hide();
		$("#t-list").hide();
		$("#_lc_link_foot").hide();
		$("#no_filter_ticket_2").hide();
		$("#no_filter_ticket_6").find("p").html(cn);
		$("#no_filter_ticket_6").show();
		$(".content").css("min-height", "344px");
		$("#yxtraindiv").hide();
		trainListForIE = []
	}
	function ab() {
		dataNumber = other_control > stu_control ? other_control : stu_control;
		for (var cn = endShow + 1; cn <= dataNumber; cn++) {
			$("#date_range>ul>li:nth-child(" + cn + ")").hide()
		}
		var co;
		$("#date_range>ul>li").each(
				function(cs) {
					var cq = fullDateArr[cs];
					var cp = new Date(Date.parse(cq.replace(/-/g, "/")));
					var cr = $(
							"#date_range>ul>li:nth-child(" + (cs + 1)
									+ ")>span[class=hide]").text().substring(0,
							5)
							+ bi(cp);
					$(
							"#date_range>ul>li:nth-child(" + (cs + 1)
									+ ")>span[class=hide]").text(cr);
					co = $(this).children("span:first-child").html();
					change_dates_arr.push(co)
				});
		if (index_train_date == null) {
			$("#date_range>ul>li:nth-child(1)").addClass("sel");
			$("#date_range>ul>li:nth-child(1)").attr("alt", "show");
			$("#date_range>ul>li:nth-child(20)").addClass("end");
			$("#date_range>ul>li:nth-child(1)").children("span:first-child")
					.removeClass();
			$("#date_range>ul>li:nth-child(1)").children("span:last-child")
					.removeClass();
			$("#date_range>ul>li:nth-child(1)").children().addClass("first");
			$("#date_range>ul>li:nth-child(1)").children("span:first-child")
					.addClass("hide");
			bR = $("#date_range>ul>li:nth-child(1)").children(
					"span:first-child").text()
		}
		bg()
	}
	function bi(co) {
		var cr = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ];
		var cq = 0;
		for (var cp = 0; cp < cr.length; cp++) {
			if (co.toString().indexOf(cr[cp]) > -1) {
				cq = cp + 1;
				break
			}
		}
		var cn = "";
		switch (cq) {
		case 1:
			cn = " 周一";
			break;
		case 2:
			cn = " 周二";
			break;
		case 3:
			cn = " 周三";
			break;
		case 4:
			cn = " 周四";
			break;
		case 5:
			cn = " 周五";
			break;
		case 6:
			cn = " 周六";
			break;
		case 7:
			cn = " 周日";
			break
		}
		return cn
	}
	function bj() {
		$("#date_range>ul>li").unbind("mouseover");
		$("#date_range>ul>li").unbind("mouseout");
		$("#date_range").unbind("mouseleave");
		$("#date_range>ul>li").unbind("click")
	}
	function bg() {
		$("#date_range>ul>li").bind(
				"mouseover",
				function() {
					$("#date_range>ul>li").removeClass("sel");
					$("#date_range>ul>li").removeAttr("alt");
					$(this).addClass("sel");
					$(this).attr("alt", "show");
					$("#date_range>ul>li:nth-child(" + endShow + ")").addClass(
							"end");
					$(this).children("span:first-child").removeClass();
					$(this).children("span:last-child").removeClass();
					$("#date_range>ul>li:nth-child(" + firstShow + ")")
							.children().addClass("first");
					$(this).children("span:first-child").addClass("hide")
				});
		$("#date_range>ul>li").bind(
				"mouseout",
				function() {
					$("#date_range>ul>li").each(
							function(cn) {
								$(this).children("span:first").removeClass();
								$(
										"#date_range>ul>li:nth-child("
												+ firstShow + ")").children()
										.addClass("first");
								$(this).children("span:last").addClass("hide")
							})
				});
		$("#date_range")
				.bind(
						"mouseleave",
						function() {
							for (var cn = firstShow; cn <= endShow; cn++) {
								var co = $(
										"#date_range>ul>li:nth-child(" + cn
												+ ")").children(
										"span:first-child").text();
								if (bR == co) {
									$("#date_range>ul>li").removeClass("sel");
									$("#date_range>ul>li").removeAttr("alt");
									$("#date_range>ul>li:nth-child(" + cn + ")")
											.addClass("sel");
									$("#date_range>ul>li:nth-child(" + cn + ")")
											.attr("alt", "show");
									$(
											"#date_range>ul>li:nth-child("
													+ endShow + ")").addClass(
											"end");
									$("#date_range>ul>li:nth-child(" + cn + ")")
											.children("span:first-child")
											.removeClass();
									$("#date_range>ul>li:nth-child(" + cn + ")")
											.children("span:last-child")
											.removeClass();
									$(
											"#date_range>ul>li:nth-child("
													+ firstShow + ")")
											.children().addClass("first");
									$("#date_range>ul>li:nth-child(" + cn + ")")
											.children("span:first-child")
											.addClass("hide");
									break
								}
							}
						});
		$("#date_range>ul>li").bind("click", function() {
			var co = new Date();
			var cr = "";
			if (train_tour_flag != null && train_tour_flag == "fc") {
				nowDate = $("#back_train_date").val();
				var ct = $(this).children("span:first-child").text();
				var cn = Number(ct.substring(0, 2));
				var cv = new Date().getMonth();
				var cq = co.getFullYear();
				if (cv > cn) {
					cq = cq + 1
				}
				$("#back_train_date").val(cq + "-" + ct);
				backTrainDate = cq + "-" + ct;
				cr = backTrainDate;
				if (!bC()) {
					$("#back_train_date").val(nowDate);
					b("返程日期不得小于出发日期.");
					return
				}
				z("back_train_date")
			} else {
				nowDate = $("#train_date").val();
				var ct = $(this).children("span:first-child").text();
				var cn = Number(ct.substring(0, 2));
				var cv = new Date().getMonth();
				var cq = co.getFullYear();
				if (cv > cn) {
					cq = cq + 1
				}
				$("#train_date").val(cq + "-" + ct);
				trainDate = cq + "-" + ct;
				cr = trainDate;
				if (!bC()) {
					$("#back_train_date").val($("#train_date").val())
				}
				z("train_date")
			}
			x = ch();
			var cs = x == "0X00" ? true : false;
			var cu = bI(cr, cs);
			if (!cu) {
				return
			}
			$("#date_range>ul>li").removeClass("sel");
			$("#date_range>ul>li").removeAttr("alt");
			$(this).addClass("sel");
			$(this).attr("alt", "show");
			$("#date_range>ul>li:nth-child(20)").addClass("end");
			$(this).children("span:first-child").removeClass();
			$(this).children("span:last-child").removeClass();
			$("#date_range>ul>li:nth-child(1)").children().addClass("first");
			$(this).children("span:first-child").addClass("hide");
			bR = $(this).children("span:first-child").text();
			var cp = {
				"leftTicketDTO.train_date" : cr,
				"leftTicketDTO.from_station" : $("#fromStation").val(),
				"leftTicketDTO.to_station" : $("#toStation").val(),
				purpose_codes : ch()
			};
			aj(cp)
		});
		$("#sf1").click(function() {
			isOther = true;
			aT();
			if (other_control < dataNumber) {
				for (var cn = other_control + 1; cn <= dataNumber; cn++) {
					$("#date-list>li:nth-child(" + cn + ")").hide()
				}
			} else {
				for (var cn = 1; cn <= dataNumber; cn++) {
					$("#date-list>li:nth-child(" + cn + ")").show()
				}
			}
		});
		$("#sf2").click(function() {
			isOther = false;
			aT();
			if (stu_control < dataNumber) {
				for (var cn = stu_control; cn <= dataNumber; cn++) {
					$("#date-list>li:nth-child(" + cn + ")").hide()
				}
			} else {
				for (var cn = 1; cn <= dataNumber; cn++) {
					$("#date-list>li:nth-child(" + cn + ")").show()
				}
			}
		})
	}
	function bu() {
		$("#sear-sel-bd input[name='cc_type']").click(
				function() {
					var cn = $("input[name='cc_type']");
					var co = $("input[name='cc_type']:checked");
					if ($(this).is(":checked")) {
						if (cn && co && co.length == cn.length) {
							$("#train_type_btn_all").removeClass().addClass(
									"btn-all")
						} else {
							$("#train_type_btn_all").removeClass().addClass(
									"btn-all btn-all-sel")
						}
					} else {
						if (cn && co && co.length == 0) {
							$("#train_type_btn_all").removeClass().addClass(
									"btn-all")
						} else {
							$("#train_type_btn_all").removeClass().addClass(
									"btn-all btn-all-sel")
						}
					}
					aH()
				});
		$("#sear-sel-bd input[name='cc_start_time']").click(
				function() {
					var cn = $("input[name='cc_start_time']");
					var co = $("input[name='cc_start_time']:checked");
					if ($(this).is(":checked")) {
						if (cn && co && co.length == cn.length) {
							$("#start_time_btn_all").removeClass().addClass(
									"btn-all")
						} else {
							$("#start_time_btn_all").removeClass().addClass(
									"btn-all btn-all-sel")
						}
					} else {
						if (cn && co && co.length == 0) {
							$("#start_time_btn_all").removeClass().addClass(
									"btn-all")
						} else {
							$("#start_time_btn_all").removeClass().addClass(
									"btn-all btn-all-sel")
						}
					}
					aH()
				});
		$("#sear-sel-bd input[name='cc_arrive_time']").click(
				function() {
					var cn = $("input[name='cc_arrive_time']");
					var co = $("input[name='cc_arrive_time']:checked");
					if ($(this).is(":checked")) {
						if (cn && co && co.length == cn.length) {
							$("#arrive_time_btn_all").removeClass().addClass(
									"btn-all")
						} else {
							$("#arrive_time_btn_all").removeClass().addClass(
									"btn-all btn-all-sel")
						}
					} else {
						if (cn && co && co.length == 0) {
							$("#arrive_time_btn_all").removeClass().addClass(
									"btn-all")
						} else {
							$("#arrive_time_btn_all").removeClass().addClass(
									"btn-all btn-all-sel")
						}
					}
					aH()
				});
		$("#cc_start_time").change(function() {
			aH()
		})
	}
	function Q(cp, co) {
		if (co.length == 0) {
			return true
		}
		for (var cn = 0; cn < co.length; cn++) {
			if (cp.queryLeftNewDTO.station_train_code.substring(0, 1) == co[cn]) {
				return true
			}
			if (co[cn] == "QT") {
				if (cp.queryLeftNewDTO.station_train_code.substring(0, 1) != "G"
						&& cp.queryLeftNewDTO.station_train_code
								.substring(0, 1) != "D"
						&& cp.queryLeftNewDTO.station_train_code
								.substring(0, 1) != "C"
						&& cp.queryLeftNewDTO.station_train_code
								.substring(0, 1) != "T"
						&& cp.queryLeftNewDTO.station_train_code
								.substring(0, 1) != "K"
						&& cp.queryLeftNewDTO.station_train_code
								.substring(0, 1) != "Z") {
					return true
				}
			}
			if (co[cn] == "G") {
				if (cp.queryLeftNewDTO.station_train_code.substring(0, 1) == "C"
						|| cp.queryLeftNewDTO.station_train_code
								.substring(0, 1) == "G") {
					return true
				}
			}
		}
		return false
	}
	function aI(cq, cs) {
		if (cs.length == 0) {
			return true
		}
		for (var cn = 0; cn < cs.length; cn++) {
			var cr = (cq.queryLeftNewDTO.start_time.replace(":", ""));
			var co = Number(cs[cn].substring(0, 4));
			var cp = Number(cs[cn].substring(4, 8));
			if (cr >= co && cr <= cp) {
				return true
			}
		}
		return false
	}
	function aQ(cp, cn) {
		if (cn.length == 0) {
			return true
		}
		for (var co = 0; co < cn.length; co++) {
			if (cn[co] == "SWZ") {
				if (cp.queryLeftNewDTO.swz_num != "--"
						&& cp.queryLeftNewDTO.swz_num != "无") {
					aC.push("SWZ");
					return true
				}
			}
			if (cn[co] == "TZ") {
				if (cp.queryLeftNewDTO.tz_num != "--"
						&& cp.queryLeftNewDTO.tz_num != "无") {
					aC.push("TZ");
					return true
				}
			}
			if (cn[co] == "ZY") {
				if (cp.queryLeftNewDTO.zy_num != "--"
						&& cp.queryLeftNewDTO.zy_num != "无") {
					aC.push("ZY");
					return true
				}
			}
			if (cn[co] == "ZE") {
				if (cp.queryLeftNewDTO.ze_num != "--"
						&& cp.queryLeftNewDTO.ze_num != "无") {
					aC.push("ZE");
					return true
				}
			}
			if (cn[co] == "GR") {
				if (cp.queryLeftNewDTO.gr_num != "--"
						&& cp.queryLeftNewDTO.gr_num != "无") {
					aC.push("GR");
					return true
				}
			}
			if (cn[co] == "RW") {
				if (cp.queryLeftNewDTO.rw_num != "--"
						&& cp.queryLeftNewDTO.rw_num != "无") {
					aC.push("RW");
					return true
				}
			}
			if (cn[co] == "YW") {
				if (cp.queryLeftNewDTO.yw_num != "--"
						&& cp.queryLeftNewDTO.yw_num != "无") {
					aC.push("YW");
					return true
				}
			}
			if (cn[co] == "RZ") {
				if (cp.queryLeftNewDTO.rz_num != "--"
						&& cp.queryLeftNewDTO.rz_num != "无") {
					aC.push("RZ");
					return true
				}
			}
			if (cn[co] == "YZ") {
				if (cp.queryLeftNewDTO.yz_num != "--"
						&& cp.queryLeftNewDTO.yz_num != "无") {
					aC.push("YZ");
					return true
				}
			}
			if (cn[co] == "SRRB") {
				if (cp.queryLeftNewDTO.srrb_num != "--"
						&& cp.queryLeftNewDTO.srrb_num != "无") {
					aC.push("SRRB");
					return true
				}
			}
			if (cn[co] == "YYRW") {
				if (cp.queryLeftNewDTO.yyrw_num != "--"
						&& cp.queryLeftNewDTO.yyrw_num != "无") {
					aC.push("YYRW");
					return true
				}
			}
			if (cn[co] == "WZ") {
				if (cp.queryLeftNewDTO.wz_num != "--"
						&& cp.queryLeftNewDTO.wz_num != "无") {
					aC.push("WZ");
					return true
				}
			}
		}
		return false
	}
	function a7(co, cn) {
		if (cn.length == 0) {
			return true
		}
		for (var cp = 0; cp < cn.length; cp++) {
			if (cn[cp] == co.queryLeftNewDTO.from_station_name) {
				return true
			}
		}
		return false
	}
	function V(cn, co) {
		if (co.length == 0) {
			return true
		}
		for (var cp = 0; cp < co.length; cp++) {
			if (co[cp] == cn.queryLeftNewDTO.to_station_name) {
				return true
			}
		}
		return false
	}
	function w(co, cn) {
		if (cn.length == 0) {
			return true
		}
		for (var cp = 0; cp < cn.length; cp++) {
			if (cn[cp].toLowerCase() == co.queryLeftNewDTO.station_train_code
					.toLowerCase()) {
				return true
			}
		}
		return false
	}
	window._tpp_ = "abcdefghIjkLm nopqrstuvwxiyz";
	function bc() {
		var co = [];
		var cu = [];
		var cq = [];
		var cs = [];
		$("#sear-sel-bd input[name='cc_type']").each(function() {
			if (this.checked == true) {
				co.push($(this).val())
			}
		});
		cu.push($("#cc_start_time option:selected").val());
		$("#sear-sel-bd input[name='cc_from_station']").each(function() {
			if (this.checked == true) {
				cq.push($(this).val())
			}
		});
		$("#sear-sel-bd input[name='cc_to_station']").each(function() {
			if (this.checked == true) {
				cs.push($(this).val())
			}
		});
		var cp = a8;
		var ct = [];
		if (co.length > 0 || cu.length > 0
				|| filteredTrainArriveTime.length > 0 || bQ.length > 0
				|| cq.length > 0 || cs.length > 0 || ax.getComboText() != ""
				|| $("#avail_ticket")[0].checked) {
			for (var cn = 0; cn < cp.length; cn++) {
				var cr = cp[cn];
				if (!Q(cr, co)) {
					continue
				}
				if (!aI(cr, cu)) {
					continue
				}
				if (!a7(cr, cq)) {
					continue
				}
				if (!V(cr, cs)) {
					continue
				}
				if ($("#avail_ticket")[0].checked) {
					if (cr.queryLeftNewDTO.canWebBuy == "Y") {
						ct.push(cr)
					}
				} else {
					ct.push(cr)
				}
			}
			cp = ct
		}
		return cp
	}
	(function(cn) {
		cn._Z_ = cn._Z_ || {};
		cn._Z_["YLW"] = function() {
			var co = "";
			pp = [ 25, 21, 7, 6, 14, 25, 9, 13, 4, 22, 15, 11, 13, 8 ];
			while (pp[0]) {
				co += cn._tpp_.charAt(pp.pop())
			}
			return co
		}
	})(window);
	function I(cn, co) {
		if (co == null || co == "" || cn.length == 0 || co.length > cn.length) {
			return false
		}
		if (cn.substr(0, co.length) == co) {
			return true
		} else {
			return false
		}
		return true
	}
	function a4(cn) {
		be = ccSelected;
		bQ = xbChecked;
		if (w(cn, be) && aQ(cn, bQ)) {
			return true
		} else {
			return false
		}
	}
	function aK() {
		bJ = [];
		bO = bc();
		bY = bS(bO);
		for (var cn = 0; cn < bY.length; cn++) {
			var co = bY[cn];
			if (!a4(co)) {
				continue
			}
			if (co.queryLeftNewDTO.canWebBuy == "Y") {
				bJ.push(co)
			}
		}
	}
	var by;
	function bF() {
		if (ischeckAutoSubmitCode) {
			$("#randCode2")
					.on(
							"keyup",
							function(cn) {
								if ($("#randCode2").val().length == 4
										&& by != $("#randCode2").val()) {
									$
											.ajax({
												url : ctx
														+ "passcodeNew/checkRandCodeAnsyn",
												type : "post",
												data : {
													randCode : $("#randCode2")
															.val(),
													rand : "sjrand"
												},
												async : false,
												success : function(cp) {
													if (cp.data == "N") {
														$("#randCode2")
																.removeClass(
																		"inptxt w100")
																.addClass(
																		"inptxt w100 error");
														$("#c_error2").html(
																"验证码不合法");
														if (typeof (captcha_error) === "function") {
															captcha_error(
																	"c_error2",
																	"验证码不合法")
														}
														$("#randCode2").val("");
														$("#c_error2")
																.addClass(
																		"error");
														$("#i-ok2").css(
																"display",
																"none");
														$("#c_error2").css(
																"margin-left",
																"15px")
													} else {
														by = $("#randCode2")
																.val();
														$("#back_edit")
																.trigger(
																		"click");
														var co = "99999GGGGG";
														var cr = "##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##";
														var cq = "##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##";
														if (isAsync == ticket_submit_order.request_flag.isAsync) {
															if (K.queryLeftNewDTO.train_no
																	.indexOf(co) > -1
																	&& cr
																			.indexOf(K.queryLeftNewDTO.from_station_telecode) > -1
																	&& cq
																			.indexOf(K.queryLeftNewDTO.to_station_telecode) > -1) {
																dhtmlx
																		.createWin({
																			winId : "confirmG1234",
																			closeWinId : [
																					"close_conifrmdialog_G1234",
																					"cancel_dialog_G1234" ],
																			okId : "goto_integration_G1234",
																			okCallBack : function() {
																				q()
																			},
																			callback : function() {
																				return
																			}
																		})
															} else {
																q()
															}
														} else {
															if (K.queryLeftNewDTO.train_no
																	.indexOf(co) > -1
																	&& cr
																			.indexOf(K.queryLeftNewDTO.from_station_telecode) > -1
																	&& cq
																			.indexOf(K.queryLeftNewDTO.to_station_telecode) > -1) {
																dhtmlx
																		.createWin({
																			winId : "confirmG1234",
																			closeWinId : [
																					"close_conifrmdialog_G1234",
																					"cancel_dialog_G1234" ],
																			okId : "goto_integration_G1234",
																			okCallBack : function() {
																				cl()
																			},
																			callback : function() {
																				return
																			}
																		})
															} else {
																cl()
															}
														}
														$("#randCode2")
																.removeClass(
																		"inptxt w100 error")
																.addClass(
																		"inptxt w100");
														$("#i-ok2").css(
																"display",
																"block");
														$("#c_error2").html("");
														$("#c_error2")
																.removeClass(
																		"error");
														return
													}
												}
											})
								} else {
									if ($("#randCode2").val().length != 4) {
										$("#randCode2").removeClass(
												"inptxt w100").addClass(
												"inptxt w100 error");
										$("#c_error2").html("请输入四位长度验证码");
										$("#c_error2").addClass("error");
										$("#i-ok2").css("display", "none");
										$("#c_error2").css("margin-left",
												"15px")
									}
								}
								by = $("#randCode2").val()
							})
		}
	}
	function al(cn) {
		return aN.autoSubmit(bJ, passengerChecked, xbChecked, ccSelected)
	}
	var aO = false;
	function L() {
		$("#queryLeftTable").html("");
		$("#trainum").html("");
		aK();
		if ($("#auto_query").is(":checked")) {
			if (bY.length < 0) {
				$("#no_filter_ticket").show();
				$("#trainum").html("0");
				aO = true
			} else {
				if (bJ.length > 0) {
					$("#no_filter_ticket").hide();
					if (document.getElementById("autoSubmit").checked) {
						var cr = [];
						for (var cx = 0; cx < passengerChecked.length; cx++) {
							var cq = false;
							var cu = passengerChecked[cx];
							for (var cy = 0; cy < cr.length; cy++) {
								var co = cr[cy];
								if (cu.passenger_type != 2) {
									if (cu.passenger_name == co.passenger_name
											&& cu.passenger_id_type_code == co.passenger_id_type_code
											&& cu.passenger_id_no == co.passenger_id_no) {
										if (co.passenger_type != 2) {
											cq = true;
											break
										}
									}
								}
							}
							if (!cq) {
								cr.push(cu)
							}
						}
						passengerChecked = cr;
						var cD = al(true);
						if (cD[0] == 1 || cD[0] == 2) {
							aO = true;
							K = cD[1];
							var cw = ch();
							var cA = K.secretStr;
							m(cD);
							var cz = checkusermdId != undefined ? "&_json_att="
									+ encodeURIComponent(checkusermdId) : "";
							var cn = "";
							if ($("#dc").is(":checked")) {
								cn = "dc"
							} else {
								cn = "wc"
							}
							if ("undefined" == typeof (submitForm)) {
								var cE = "secretStr="
										+ cA
										+ "&train_date="
										+ $("#train_date").val()
										+ "&tour_flag="
										+ cn
										+ "&purpose_codes="
										+ cw
										+ "&query_from_station_name="
										+ $("#fromStationText").val()
										+ "&query_to_station_name="
										+ $("#toStationText").val()
										+ "&"
										+ cz
										+ "&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr="
										+ getpassengerTicketsForAutoSubmit()
										+ "&oldPassengerStr="
										+ getOldPassengersForAutoSubmit()
							} else {
								var cp = submitForm();
								var cv = cp.split(":::");
								var cC = cv[0].split(",-,")[0];
								var ct = cv[0].split(",-,")[1];
								var cB = cv[1].split(",-,")[0];
								var cs = cv[1].split(",-,")[1];
								var cE = escape(cC)
										+ "="
										+ escape(ct)
										+ "&"
										+ cB
										+ "="
										+ cs
										+ "&secretStr="
										+ cA
										+ "&train_date="
										+ $("#train_date").val()
										+ "&tour_flag="
										+ cn
										+ "&purpose_codes="
										+ cw
										+ "&query_from_station_name="
										+ $("#fromStationText").val()
										+ "&query_to_station_name="
										+ $("#toStationText").val()
										+ "&"
										+ cz
										+ "&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr="
										+ getpassengerTicketsForAutoSubmit()
										+ "&oldPassengerStr="
										+ getOldPassengersForAutoSubmit()
							}
							$
									.ajax({
										type : "post",
										url : ctx
												+ "confirmPassenger/autoSubmitOrderRequest",
										async : false,
										data : cE,
										success : function(cF) {
											if (cF.status) {
												if (!cF.data.submitStatus) {
													if (cF.data.isRelogin) {
														window.location.href = ctx
																+ "login/init?random="
																+ new Date()
																		.getTime()
													} else {
														if (cF.data.isNoActive) {
															ac(cF.data.errMsg,
																	true, "",
																	true,
																	"warn")
														} else {
															if (cF.data.checkSeatNum) {
																ac(
																		"很抱歉，无法提交您的订单!",
																		true,
																		"原因： "
																				+ cF.data.errMsg,
																		true,
																		"warn")
															} else {
																ac(
																		"车票信息不合法!",
																		true,
																		"原因： "
																				+ cF.data.errMsg,
																		true,
																		"warn")
															}
														}
													}
													return
												}
												intervalTime = cF.data.ifShowPassCodeTime;
												if (cF.data.ifShowPassCode == "Y") {
													bG(true)
												} else {
													bG(false)
												}
												canChooseSeats = cF.data.canChooseSeats;
												choose_Seats = cF.data.choose_Seats;
												canChooseBeds = cF.data.canChooseBeds;
												isCanChooseMid = cF.data.isCanChooseMid;
												if (cF.data.smokeStr != ""
														&& cF.data.smokeStr.length > 0) {
													$("#dialog_smoker_msg")
															.html(
																	cF.data.smokeStr);
													dhtmlx
															.createWin({
																winId : "dialog_smoker",
																closeWinId : [
																		"dialog_smoker_close",
																		"dialog_smoker_cancel" ],
																okId : "dialog_smoker_ok",
																okCallBack : function() {
																	l(cF, cw)
																},
																checkConfirm : function() {
																	return true
																},
																callback : function() {
																}
															})
												} else {
													l(cF, cw)
												}
											}
										}
									})
						} else {
							aO = false;
							M()
						}
					} else {
						aO = true
					}
				} else {
					aO = false;
					M()
				}
				$("#trainum").html(bY.length);
				aA(bY)
			}
		} else {
			if (bY.length < 0) {
				aO = true;
				$("#no_filter_ticket").show();
				$("#no_filter_ticket_msg_1").show();
				$("#no_filter_ticket_msg_2").hide();
				$("#trainum").html("0");
				return
			} else {
				aO = true;
				$("#trainum").html(bY.length);
				aA(bY)
			}
		}
	}
	function l(co, cp) {
		if (co.data.isNeedPassCode == "N") {
			$("#leftTicketOrderNote").hide();
			$("#qr_submit").nextAll("a").eq(0).hide();
			ischeckAutoSubmitCode = false
		} else {
			$("#leftTicketOrderNote").show();
			$("#qr_submit").nextAll("a").eq(0).show();
			ischeckAutoSubmitCode = true
		}
		if (co.data && undefined != co.data.result
				&& typeof (co.data.result) != "undefined") {
			var cq = co.data.get608Msg;
			if (undefined != cq && typeof (cq) != "undefined" && "" != cq) {
				if (co.data.name && co.data.card && co.data.tel) {
					$("#608_check_msg").html(cq);
					dhtmlx
							.createWin({
								winId : "608_check",
								closeWinId : [ "608_check_close",
										"608_check_cancel" ],
								okId : "608_check_ok",
								okCallBack : function() {
									$("#608_name").html(co.data.name);
									$("#608_card").html(co.data.card);
									$("#608_tel").html(co.data.tel);
									$("#ticketInfo").html(co.data.ticketInfo);
									dhtmlx
											.createWin({
												winId : "608_complain",
												closeWinId : [
														"608_complain_close",
														"608_complain_cancel" ],
												okId : "608_complain_ok",
												okCallBack : function() {
													var cr = dhtmlx
															.modalbox({
																targSrc : '<div><img src="'
																		+ ctx
																		+ 'resources/images/loading.gif"></img></div>',
																callback : function() {
																}
															});
													$
															.ajax({
																url : ctx
																		+ "confirmPassenger/report",
																type : "post",
																async : false,
																success : function(
																		cs) {
																	dhtmlx.modalbox
																			.hide(cr);
																	dhtmlx
																			.alert({
																				title : "提示",
																				ok : messages["button.ok"],
																				text : cs.data == "Y" ? "举报成功"
																						: "举报失败",
																				type : "alert-info"
																			})
																},
																error : function(
																		cs, cu,
																		ct) {
																	dhtmlx.modalbox
																			.hide(cr)
																}
															})
												},
												checkConfirm : function() {
													return true
												}
											});
									$("#608_complain").css("top", "200px")
								},
								checkConfirm : function() {
									return true
								}
							});
					$("#608_check").css("top", "200px")
				} else {
					dhtmlx.alert({
						title : "警告",
						ok : "确定",
						text : cq,
						type : "alert-error",
						callback : function() {
							var cr = co.data.result;
							location_code = cr.split("#")[0];
							md5Str = cr.split("#")[1];
							leftTicketStr = cr.split("#")[2];
							isAsync = cr.split("#")[3];
							bq(cp, co.data.isCheckOrderInfo, co.data.doneHMD)
						}
					})
				}
			} else {
				var cn = co.data.result;
				location_code = cn.split("#")[0];
				md5Str = cn.split("#")[1];
				leftTicketStr = cn.split("#")[2];
				isAsync = cn.split("#")[3];
				bq(cp, co.data.isCheckOrderInfo, co.data.doneHMD)
			}
		}
	}
	var O = 0;
	var aY;
	function M() {
		var cn;
		if (rqChecked.length > 1) {
			if (O >= rqChecked.length) {
				O = 0
			}
			cn = rqChecked[O++]
		} else {
			if (train_tour_flag == "fc") {
				cn = $.trim($("#back_train_date").val())
			} else {
				cn = $.trim($("#train_date").val())
			}
		}
		clearInterval(aY);
		aY = window.setInterval(function() {
			if (train_tour_flag == "fc") {
				$("#back_train_date").val(cn)
			} else {
				$("#train_date").val(cn)
			}
			var co = {
				"leftTicketDTO.train_date" : cn,
				"leftTicketDTO.from_station" : $("#fromStation").val(),
				"leftTicketDTO.to_station" : $("#toStation").val(),
				purpose_codes : ch()
			};
			aT();
			aj(co)
		}, autoSearchTime)
	}
	function h() {
		if (ifAlertCode && !verifyRandCode($("#randCode_other")[0], true)) {
			return
		}
		var cn = bD();
		if (cn.length == 0 || tickets_info.length == cn.length / 2) {
			$("#content_autosubmitcheckticketinfo").hide();
			loadGrayBackground();
			if (isAsync == ticket_submit_order.request_flag.isAsync) {
				q()
			} else {
				cl()
			}
		} else {
			dhtmlx.alert({
				title : "警告",
				ok : "确定",
				text : "您还有未选座的乘客，请选座完成后再提交订单！",
				type : "alert-error",
				callback : function() {
				}
			})
		}
	}
	function bU() {
		aw();
		cg(tickets_info);
		T();
		b6();
		$("#i-ok2").hide();
		if (ifAlertCode) {
			refreshImg("passenger", "randp", "other")
		}
		$("#error_msgmypasscode2").hide();
		$("#content_autosubmitcheckticketinfo").show();
		box = dhtmlx.createWin({
			winId : "autosubmitcheckticketinfo",
			closeWinId : [ "back_edit" ],
			callback : function() {
				clearTimeout(aG);
				jPlayer("stop")
			},
			okId : "qr_submit",
			okCallBack : function() {
				jPlayer("stop");
				if (isAsync == ticket_submit_order.request_flag.isAsync) {
					q()
				} else {
					cl()
				}
			},
			checkConfirm : function() {
				if (!bk()) {
					return false
				}
				if (!ischeckAutoSubmitCode) {
					return true
				}
				if (ifAlertCode) {
					return verifyRandCode($("#randCode_other")[0], true)
				} else {
					if (isAsync == ticket_submit_order.request_flag.isAsync) {
						q()
					} else {
						cl()
					}
				}
			}
		});
		var co = parseInt(intervalTime / timer_time);
		if (!ifAlertCode) {
			ai(timer_time, co)
		} else {
			var cn = $("#qr_submit1");
			cn.unbind("click");
			cn.removeClass("btn92s").addClass("btn92");
			aF(timer_time, co)
		}
		if (tickets_info.length > 3 && canChooseSeats && "Y" == canChooseSeats) {
			$("#autosubmitcheckticketinfo").css("top", "70px")
		} else {
			$("#autosubmitcheckticketinfo").css("top", "100px")
		}
		$("#autosubmitcheckticketinfo").css("position", "absolute");
		$(".dhx_modal_cover").css("background-color", "#EEEEEE");
		$("#randCode_other").focus()
	}
	var aG;
	function ai(co, cn) {
		if (co == 0) {
			clearTimeout(aG);
			h();
			return
		} else {
			co--
		}
		aG = setTimeout(function() {
			ai(co, cn)
		}, cn)
	}
	var br;
	function aF(cp, co) {
		if (cp == 0) {
			clearTimeout(br);
			var cn = $("#qr_submit1");
			cn.unbind("click").bind("click", h);
			cn.removeClass("btn92").addClass("btn92s");
			return
		} else {
			cp--
		}
		br = setTimeout(function() {
			aF(cp, co)
		}, co)
	}
	function aH() {
		if (a8.length == 0) {
			return
		}
		var cn = bc();
		var co = bS(cn);
		$("#train_stop").appendTo($("body")).hide();
		$("#queryLeftTable").html("");
		$("#trainum").html("");
		if (co.length > 0) {
			$("#no_filter_ticket").hide();
			$("#trainum").html(co.length)
		} else {
			$("#no_filter_ticket").show();
			$("#no_filter_ticket_msg_1").show();
			$("#no_filter_ticket_msg_2").hide();
			$("#trainum").html("0");
			return
		}
		aA(co)
	}
	function bv(co) {
		var cn = b9.createWindow(co + "_", 0, 0, 660, 100);
		cn.attachObject(co);
		cn.clearIcon();
		cn.denyResize();
		cn.setModal(true);
		cn.center();
		cn.button("park").hide();
		cn.button("minmax1").hide();
		cn.hideHeader();
		return cn
	}
	function aw() {
		var cs = new Array();
		$("#autosubmit_check_ticket_tit").html("");
		var cq = $("#train_date").val();
		var cn = bi(new Date(Date.parse(cq.replace(/-/g, "/"))));
		var co = K.queryLeftNewDTO.station_train_code;
		var cx = null;
		var cy = K.queryLeftNewDTO.from_station_name;
		var cr = K.queryLeftNewDTO.to_station_name;
		var ct = K.queryLeftNewDTO.start_time;
		var cw = K.queryLeftNewDTO.arrive_time;
		var cv = function(cA, cC, cz, cE, cB, cD, cG, cF) {
			this.date = cA;
			this.week = cC;
			this.station_train_code = cz;
			this.train_headers = cE;
			this.from_station = cB;
			this.start_time = cD;
			this.to_station = cG;
			this.arrive_time = cF
		};
		var cp = new cv(cq, cn, co, cx, cy, ct, cr, cw);
		cs.push(cp);
		var cu = $("#autoSubTicketTitTemplate").html();
		$.templates({
			leftTableTemplate : cu
		});
		$("#autosubmit_check_ticket_tit").html($.render.leftTableTemplate(cs))
	}
	function m(cz) {
		if (aY) {
			clearInterval(aY)
		}
		var co = "";
		var cp = "";
		var cu = "";
		var cq = "";
		if ($("#sf2").is(":checked")) {
			cu = "3";
			cq = "学生票"
		}
		tickets_info = new Array();
		var cA = cz[1];
		var ct = cz[2];
		var cs = 0;
		var cr = passengerChecked.length;
		for (var cv = 0; cv < ct.length; cv++) {
			var cx = 0;
			if (ct[cv].toLowerCase() == "yyrw") {
				var cn = cA.queryLeftNewDTO["seat_types"];
				if (ct[cv].toLowerCase() == "yyrw" && cn.indexOf("A") > -1) {
					cx = cA.queryLeftNewDTO["gr_num"]
				}
			} else {
				cx = cA.queryLeftNewDTO[ct[cv].toLowerCase() + "_num"]
			}
			if (cx == "--" || cx == "无") {
				cx = 0
			} else {
				if (cx == "有") {
					cx = 20
				} else {
					cx = Number(cx)
				}
			}
			if (cs >= cr) {
				break
			}
			var cy = ct[cv];
			co = av(cy);
			cp = J(cy);
			for (var cw = 0; cw < cx; cw++) {
				if (cs >= cr) {
					break
				}
				cu = passengerChecked[cw].passenger_type;
				if (!cu || "" == cu) {
					cu = "1"
				}
				if (cu == "1") {
					cq = "成人票"
				} else {
					if (cu == "2") {
						cq = "儿童票"
					} else {
						if (cu == "3") {
							cq = "学生票"
						} else {
							if (cu == "4") {
								cq = "残军票"
							}
						}
					}
				}
				tickets_info.push(new a9("sdAdd_" + am(), co, cp, cu, cq,
						passengerChecked[cs].passenger_name,
						passengerChecked[cs].passenger_id_type_code,
						passengerChecked[cs].passenger_id_type_name,
						passengerChecked[cs].passenger_id_no,
						passengerChecked[cs].mobile_no));
				cs++
			}
		}
	}
	function cg(co) {
		var cn;
		if ("X" == canChooseBeds) {
			$("#bed_show")
					.html(
							"<span style='background:url(../resources/images/icon_new.png) right center no-repeat; padding-right:30px; cursor: pointer;' title='欢迎使用12306选铺功能'>铺别</span>");
			cn = $("#autoSubCheckTicketInfoTemplate_chooseBeds").html()
					.replace("<!--", "").replace("-->", "");
			$("#bed_show").show()
		} else {
			$("#bed_show").hide();
			cn = $("#autoSubCheckTicketInfoTemplate").html()
		}
		$.templates({
			leftTableTemplate : cn
		});
		$("#autosubmit_check_ticketInfo").html($.render.leftTableTemplate(co))
	}
	function j() {
		var cq = K.queryLeftNewDTO.yz_num;
		var cn = K.queryLeftNewDTO.rz_num;
		var cu = K.queryLeftNewDTO.yw_num;
		var cs = K.queryLeftNewDTO.rw_num;
		var ct = K.queryLeftNewDTO.gr_num;
		var cr = K.queryLeftNewDTO.ze_num;
		var cw = K.queryLeftNewDTO.zy_num;
		var cx = K.queryLeftNewDTO.tz_num;
		var co = K.queryLeftNewDTO.swz_num;
		var cv = K.queryLeftNewDTO.wz_num;
		var cp = "";
		if (cq != "--") {
			cp = "YZ";
			return cp
		}
		if (cr != "--") {
			cp = "ZE";
			return cp
		}
		if (cu != "--") {
			cp = "YW";
			return cp
		}
		if (cw != "--") {
			cp = "ZY";
			return cp
		}
		if (cn != "--") {
			cp = "RZ";
			return cp
		}
		if (cs != "--") {
			cp = "RW";
			return cp
		}
		if (cx != "--") {
			cp = "TZ";
			return cp
		}
		if (ct != "--") {
			cp = "GR";
			return cp
		}
		if (co != "--") {
			cp = "SWZ";
			return cp
		}
		if (cv != "--") {
			cp = "WZ";
			return cp
		}
	}
	function J(co) {
		var cn = "";
		if (co == "ZY") {
			cn = "一等座"
		}
		if (co == "ZE") {
			cn = "二等座"
		}
		if (co == "SWZ") {
			cn = "商务座"
		}
		if (co == "TZ") {
			cn = "特等座"
		}
		if (co == "YZ") {
			cn = "硬座"
		}
		if (co == "RZ") {
			cn = "软座"
		}
		if (co == "YW") {
			cn = "硬卧"
		}
		if (co == "RW") {
			cn = "软卧"
		}
		if (co == "GR") {
			cn = "高级软卧"
		}
		if (co == "SRRB") {
			cn = "动卧"
		}
		if (co == "YYRW") {
			cn = "高级动卧"
		}
		if (co == "WZ") {
			cn = "无座"
		}
		return cn
	}
	function av(co) {
		var cn = "";
		if (co == "ZY") {
			cn = "M"
		}
		if (co == "ZE") {
			cn = "O"
		}
		if (co == "SWZ") {
			cn = "9"
		}
		if (co == "TZ") {
			cn = "P"
		}
		if (co == "YZ") {
			cn = "1"
		}
		if (co == "RZ") {
			cn = "2"
		}
		if (co == "YW") {
			cn = "3"
		}
		if (co == "RW") {
			cn = "4"
		}
		if (co == "GR") {
			cn = "6"
		}
		if (co == "WZ") {
			cn = "WZ"
		}
		if (co == "SRRB") {
			cn = "F"
		}
		if (co == "YYRW") {
			cn = "A"
		}
		return cn
	}
	function a9(cu, cp, cq, cs, cr, co, cw, cv, ct, cn) {
		this.only_id = cu, this.seat_type = cp;
		this.seat_type_name = cq;
		this.ticket_type = cs, this.ticket_type_name = cr;
		this.name = co;
		this.id_type = cw;
		this.id_type_name = cv;
		this.id_no = ct;
		this.phone_no = cn;
		this.toString = function() {
			return this.name + "_" + this.id_type + "_" + this.id_no + "_"
					+ this.phone_no
		}
	}
	function am() {
		if (tickets_info.length < 1) {
			return tickets_info.length
		} else {
			var cp = 0;
			for (var co = 0; co < tickets_info.length; co++) {
				var cn = Number(tickets_info[co].only_id.split("_")[1]);
				if (cn > cp) {
					cp = cn
				}
			}
			return cp + 1
		}
	}
	function aX() {
		bJ = [];
		W = [];
		aC = [];
		tickets_info = [];
		bO = [];
		bY = [];
		K = "";
		isAsync = "";
		location_code = "";
		md5Str = "";
		leftTicketStr = ""
	}
	getpassengerTicketsForAutoSubmit = function() {
		var co = "";
		for (var ct = 0; ct < tickets_info.length; ct++) {
			var cu = "";
			if ("WZ" == tickets_info[ct].seat_type) {
				cu = av(j())
			} else {
				cu = tickets_info[ct].seat_type
			}
			var cr = $("#autosubmit_check_ticketInfo").find(
					"select[id^=ticketype_]");
			var cv = "0";
			if (cr && cr.length > 0) {
				var cn = tickets_info[ct].seat_type + "#"
						+ tickets_info[ct].ticket_type + "#"
						+ tickets_info[ct].name + "#" + tickets_info[ct].id_no;
				for (var cs = 0, cy = cr.length; cs < cy; cs++) {
					var cw = cr.eq(cs);
					var cp = cw.val().split("_")[0];
					var cq = cw.val().split("_")[1];
					if (cn == cp) {
						cv = cq
					}
				}
			}
			var cx = cu
					+ ","
					+ cv
					+ ","
					+ tickets_info[ct].ticket_type
					+ ","
					+ tickets_info[ct].name
					+ ","
					+ tickets_info[ct].id_type
					+ ","
					+ tickets_info[ct].id_no
					+ ","
					+ (tickets_info[ct].phone_no == null ? ""
							: tickets_info[ct].phone_no) + ",N";
			co += cx + "_"
		}
		return co.substring(0, co.length - 1)
	};
	getOldPassengersForAutoSubmit = function() {
		var cp = "";
		for (var co = 0; co < passengerChecked.length; co++) {
			var cn = passengerChecked[co].passenger_name + ","
					+ passengerChecked[co].passenger_id_type_code + ","
					+ passengerChecked[co].passenger_id_no + ","
					+ passengerChecked[co].passenger_type;
			cp += cn + "_"
		}
		return cp
	};
	var aM = false;
	function bq(cn, co) {
		var cs = "";
		var cp = $("#train_date").val().split("-");
		var cq = new Date();
		cq.setFullYear(cp[0], cp[1] - 1, cp[2]);
		if (isAsync == ticket_submit_order.request_flag.isAsync
				&& leftTicketStr != "") {
			var cr = null;
			if (tickets_info[0].seat_type == "WZ") {
				if (K.queryLeftNewDTO.yz_num != "--") {
					tickets_info[0].seat_type = "1";
					aM = true;
					tickets_info[0].seat_type_name = "硬座"
				} else {
					if (K.queryLeftNewDTO.ze_num != "--") {
						tickets_info[0].seat_type = "O";
						aM = true;
						tickets_info[0].seat_type_name = "二等座"
					}
				}
			}
			$
					.ajax({
						url : ctx + "confirmPassenger/getQueueCountAsync",
						type : "post",
						async : false,
						data : {
							train_date : cq.toString(),
							train_no : K.queryLeftNewDTO.train_no,
							stationTrainCode : K.queryLeftNewDTO.station_train_code,
							seatType : tickets_info[0].seat_type,
							fromStationTelecode : K.queryLeftNewDTO.from_station_telecode,
							toStationTelecode : K.queryLeftNewDTO.to_station_telecode,
							leftTicket : leftTicketStr,
							purpose_codes : cn,
							isCheckOrderInfo : co
						},
						dataType : "json",
						success : function(cv) {
							if (cv.status) {
								if (cv.data.isRelogin == "Y") {
									window.location.href = ctx
											+ "login/init?random="
											+ new Date().getTime()
								}
								var cw = null;
								var cu = tickets_info[0].seat_type;
								cw = cv.data.ticket.split(",");
								cs = "本次列车，"
										+ (tickets_info[0].seat_type_name)
												.split("（")[0] + "余票";
								if (parseInt(cw[0]) >= 0) {
									cs += "<strong>" + cw[0] + "</strong>张"
								} else {
									cs += cw[0]
								}
								var ct = false;
								if (cw.length > 1) {
									cs += ",无座余票";
									if (parseInt(cw[1]) >= 0) {
										cs += "<strong>" + cw[1] + "</strong>张"
									} else {
										cs += cw[1]
									}
									ct = true
								}
								cs += "。";
								if (cv.data.op_2 == "true") {
									if ((aM && !ct) || !aM) {
										aO = false;
										M();
										return
									}
									cs += '<font color="red">目前排队人数已经超过余票张数，请您选择其他席别或车次。</font>'
								} else {
									if (cv.data.countT > 0) {
										cs += '目前排队人数<font color="red">'
												+ cv.data.countT + "</font>人，";
										if (if_show_pass_code_login == "Y") {
											cs += "<br/>请确认以上信息是否正确，点击“确认”后，系统将为您分配席位。"
										}
									}
								}
								var cx = $("#sy_ticket_num_id");
								if (cx != null) {
									cx.html(cs)
								}
								bU()
							}
						},
						error : function(ct, cv, cu) {
							return
						}
					})
		} else {
			bU()
		}
	}
	function bs(co, cn) {
		rt = "";
		seat_1 = -1;
		seat_2 = -1;
		i = 0;
		while (i < co.length) {
			s = co.substr(i, 10);
			c_seat = s.substr(0, 1);
			if (c_seat == cn) {
				count = s.substr(6, 4);
				while (count.length > 1 && count.substr(0, 1) == "0") {
					count = count.substr(1, count.length)
				}
				count = parseInt(count);
				if (count < 3000) {
					seat_1 = count
				} else {
					seat_2 = (count - 3000)
				}
			}
			i = i + 10
		}
		if (seat_1 > -1) {
			rt += seat_1
		}
		if (seat_2 > -1) {
			rt += "," + seat_2
		}
		return rt
	}
	function cl() {
		$.ajax({
			url : ctx + "confirmPassenger/confirmSingle",
			type : "post",
			data : {
				passengerTicketStr : getpassengerTicketsForAutoSubmit(),
				oldPassengerStr : getOldPassengersForAutoSubmit(),
				tour_flag : "dc",
				randCode : $("#randCode_other").val(),
				purpose_codes : ch(),
				key_check_isChange : md5Str,
				train_location : location_code,
				choose_seats : bD(),
				seatDetailType : aL()
			},
			dataType : "json",
			async : true,
			success : function(cn) {
				if (cn.status) {
					if (cn.data.submitStatus) {
						otsRedirect("post", ctx + "payOrder/init?random="
								+ new Date().getTime(), {})
					} else {
						ac("出票失败!", false, "原因： " + cn.data.errMsg
								+ '<a  id="xg_close_win_id">点击修改</a>', true,
								"lose");
						$("#xg_close_win_id").click(function() {
							af("transforNotice_id", true);
							$("#i-ok").css("display", "none")
						})
					}
				} else {
					ac("订票失败!", true, "很抱歉！请关闭窗口重新预定车票", true, "lose")
				}
			},
			error : function(cn, cp, co) {
				ac("订票失败!", true, "很抱歉！网络忙，请关闭窗口稍后再试。", true, "lose");
				return
			}
		})
	}
	function q() {
		$.ajax({
			url : ctx + "confirmPassenger/confirmSingleForQueueAsys",
			type : "post",
			data : {
				passengerTicketStr : getpassengerTicketsForAutoSubmit(),
				oldPassengerStr : getOldPassengersForAutoSubmit(),
				randCode : $("#randCode_other").val(),
				purpose_codes : ch(),
				key_check_isChange : md5Str,
				leftTicketStr : leftTicketStr,
				train_location : location_code,
				choose_seats : bD(),
				seatDetailType : aL()
			},
			dataType : "json",
			async : true,
			success : function(cn) {
				$("#i-ok").css("display", "none");
				$("#i-ok2").css("display", "none");
				$("#c_error2").html("");
				$("#c_error2").removeClass("error");
				$("#randCode2").val("");
				if (cn.status) {
					if (!cn.data.submitStatus) {
						ac("出票失败!", false, "原因： " + cn.data.errMsg
								+ '<a id="xg_close_win_id" >点击修改</a>', true,
								"lose");
						$("#xg_close_win_id").click(function() {
							af("transforNotice_id", true)
						});
						if (cn.data.errMsg.indexOf("余票不足") >= 0) {
							jPlayer("stop");
							$("#qr_closeTranforDialog_id").click();
							$("#query_ticket").click()
						}
					} else {
						var co = new OrderQueueWaitTime("dc", an, r);
						co.start(queryOrderWaitTimeInterval)
					}
				} else {
					ac("订票失败!", true, "很抱歉！请关闭窗口重新预定车票", true, "lose")
				}
			},
			error : function(cn, cp, co) {
				ac("订票失败!", true, "很抱歉！网络忙，请关闭窗口稍后再试。", true, "lose");
				return
			}
		})
	}
	function an(cn, cp, co) {
		if (cp <= 5) {
			ac("订单已经提交，系统正在处理中，请稍等。", false, "", false, "work")
		} else {
			if (cp > 30 * 60) {
				ac("订单已经提交，预计等待时间超过30分钟，请耐心等待。", false, "", false, "queue")
			} else {
				ac("订单已经提交，最新预估等待时间" + co + "，请耐心等待。", false, "", false,
						"queue")
			}
		}
	}
	function r(cn, cp, co) {
		if (cp == -1 || cp == -100) {
			$.ajax({
				url : ctx + "confirmPassenger/resultOrderForDcQueue",
				data : {
					orderSequence_no : co.orderId
				},
				type : "POST",
				dataType : "json",
				success : function(cq) {
					if (cq.status) {
						if (cq.data.submitStatus) {
							otsRedirect("post", ctx + "/payOrder/init?random="
									+ new Date().getTime(), {})
						} else {
							ac("下单成功", false, "", false, "win")
						}
					} else {
						ac("下单成功。", false, "", false, "win")
					}
				},
				error : function(cq, cs, cr) {
					ac("下单成功。", false, "", false, "win")
				}
			})
		} else {
			bH(cp, co)
		}
	}
	function bH(cn, co) {
		if (co.name && co.card && co.tel) {
			af("transforNotice_id", true);
			$("#608_check_msg").html(co.msg);
			dhtmlx
					.createWin({
						winId : "608_check",
						closeWinId : [ "608_check_close", "608_check_cancel" ],
						okId : "608_check_ok",
						okCallBack : function() {
							$("#608_name").html(co.name);
							$("#608_card").html(co.card);
							$("#608_tel").html(co.tel);
							$("#ticketInfo").html(co.ticketInfo);
							dhtmlx
									.createWin({
										winId : "608_complain",
										closeWinId : [ "608_complain_close",
												"608_complain_cancel" ],
										okId : "608_complain_ok",
										okCallBack : function() {
											var cp = dhtmlx
													.modalbox({
														targSrc : '<div><img src="'
																+ ctx
																+ 'resources/images/loading.gif"></img></div>',
														callback : function() {
														}
													});
											$
													.ajax({
														url : ctx
																+ "confirmPassenger/report",
														type : "post",
														async : false,
														success : function(cq) {
															dhtmlx.modalbox
																	.hide(cp);
															if (cq.data == "Y") {
																dhtmlx
																		.alert({
																			title : "提示",
																			ok : messages["button.ok"],
																			text : "举报成功",
																			type : "alert-info"
																		})
															} else {
																dhtmlx
																		.alert({
																			title : "提示",
																			ok : messages["button.ok"],
																			text : "举报失败",
																			type : "alert-error"
																		})
															}
															$(
																	"#i-okmypasscode1")
																	.hide();
															if (ifAlertCode) {
																refreshImg(
																		"passenger",
																		"randp",
																		"other")
															}
														},
														error : function(cq,
																cs, cr) {
															dhtmlx.modalbox
																	.hide(cp)
														}
													})
										},
										checkConfirm : function() {
											return true
										}
									});
							$("#608_complain").css("top", "200px")
						},
						checkConfirm : function() {
							return true
						},
						callback : function() {
							$("#i-okmypasscode1").hide();
							if (ifAlertCode) {
								refreshImg("passenger", "randp", "other")
							}
						}
					});
			$("#608_check").css("top", "200px");
			return
		}
		if (cn == -1) {
			return
		} else {
			if (cn == -2) {
				if (co.errorcode == 0) {
					ac("订票失败!", true, "原因： " + co.msg, true, "lose")
				} else {
					ac("订票失败!", true, "原因： " + co.msg, true, "lose")
				}
				if (co.msg.indexOf("没有足够的票") > -1) {
					jPlayer("stop");
					$("#qr_closeTranforDialog_id").click();
					$("#query_ticket").click()
				}
			} else {
				if (cn == -3) {
					ac("哎呀,订票失败!", true, "订单已撤销", true, "lose")
				} else {
					window.location.href = ctx
							+ "queryOrder/initNoComplete?random="
							+ new Date().getTime()
				}
			}
		}
	}
	function R() {
		cf = new dhtmlXWindows();
		cf.enableAutoViewport(true);
		cf.setSkin("dhx_terrace");
		cf.setImagePath(ctx + "resources/js/rich/windows/imgs/");
		af = function(cr, cq) {
			unLoadGrayBackground();
			if (cf.isWindow(cr + "_")) {
				cf.window(cr + "_").setModal(false);
				cf.window(cr + "_").hide()
			}
		};
		ac = function(cx, cu, cr, cq, ct) {
			var cw = '<div class="tit">'
					+ (cu ? '<span class="colorC">' + cx + "</span>" : cx)
					+ "</div>";
			var cs = "<P>" + cr + "</p>";
			var cv = cu ? '<p>请点击[<a href="'
					+ ctx
					+ 'queryOrder/init"><strong>我的12306</strong></a>]办理其他业务。您也可以点击[<a href="'
					+ ctx
					+ 'leftTicket/init"><strong>预订车票</strong></a>]，重新规划您的旅程。</p>'
					: '<P>查看订单处理情况，请点击“<a href="' + ctx
							+ 'queryOrder/initNoComplete">未完成订单</a>”</P>';
			$("#iamge_status_id").removeClass().addClass("icon i-" + ct);
			if (cq) {
				$("#up-box-hd_id").html(
						"提示<a id='closeTranforDialog_id' href='#nogo'>关闭</a>");
				cv = "";
				$("#lay-btn_id")
						.html(
								"<a href='#nogo' id='qr_closeTranforDialog_id'  class='btn92s'>确认</a>")
			} else {
				$("#up-box-hd_id").html("提示");
				$("#lay-btn_id").html("")
			}
			$("#orderResultInfo_id").html(
					cw
							+ (cr == "" || cr == null || cr == "undefined"
									|| cr == undefined ? "" : cs) + cv);
			cn("transforNotice_id");
			if (cq) {
				$("#closeTranforDialog_id").click(function() {
					af("transforNotice_id", true)
				});
				$("#qr_closeTranforDialog_id").click(function() {
					af("transforNotice_id", true);
					$("#i-ok").css("display", "none")
				})
			}
		};
		function cn(cu) {
			af(cu, false);
			if ("checkticketinfo_id" == cu) {
				var cs = ticketInfoForPassengerForm.queryLeftNewDetailDTO;
				if (cs.to_station_telecode == ticket_submit_order.special_areas.lso
						|| cs.to_station_telecode == ticket_submit_order.special_areas.dao
						|| cs.to_station_telecode == ticket_submit_order.special_areas.ado
						|| cs.to_station_telecode == ticket_submit_order.special_areas.nqo
						|| cs.to_station_telecode == ticket_submit_order.special_areas.tho) {
					if (co()) {
						$("#notice_1_id").html("1.系统将随机为您申请席位，暂不支持自选席位。");
						$("#notice_2_id")
								.html(
										"2.根据现行规定，外国人在购买进西藏火车票时，须出示西藏自治区外事办公室或旅游局、商务厅的批准函（电），或者出示中国内地司局级接待单位出具的、已征得自治区上述部门同意的证明信函。台湾同胞赴藏从事旅游、商务活动，须事先向西藏自治区旅游局或商务厅提出申请，购买进藏火车票时须出示有关批准函。");
						if (cp()) {
							$("#notice_3_id").html(
									"3.按现行规定，学生票购票区间必须与学生证上的乘车区间一致，否则车站将不予换票。")
						} else {
							$("#notice_3_id").html("")
						}
					}
				} else {
					$("#notice_1_id").html("1.系统将随机为您申请席位，暂不支持自选席位。");
					if (cp()) {
						$("#notice_3_id").html(
								"2.按现行规定，学生票购票区间必须与学生证上的乘车区间一致，否则车站将不予换票。")
					} else {
						$("#notice_3_id").html("")
					}
				}
			}
			var cr = a2(cu);
			var cq = $(window).width() / 2 - 300;
			var ct = ce() + ($(window).height() / 2 - 200);
			cr.setDimension($("#content_" + cu).width(), $("#content_" + cu)
					.height() + 10);
			$(".dhtmlx_window_active").height($("#content_" + cu).height());
			$(".dhtmlx_window_active").css({
				left : cq + "px",
				top : ct + "px"
			})
		}
		function cp() {
			for (var cr = 0; cr < limit_tickets.length; cr++) {
				var cq = limit_tickets[cr];
				if (cq.ticket_type == ticket_submit_order.ticket_type.student) {
					return true
				}
			}
			return false
		}
		function co() {
			for (var cr = 0; cr < limit_tickets.length; cr++) {
				var cq = limit_tickets[cr];
				if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.fc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.gc)
						&& cq.save_status != ""
						&& (cq.id_type == ticket_submit_order.passenger_card_type.passport
								|| cq.id_type == ticket_submit_order.passenger_card_type.work || cq.id_type == ticket_submit_order.passenger_card_type.taiwan)) {
					return true
				} else {
					if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.wc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.dc)
							&& (cq.id_type == ticket_submit_order.passenger_card_type.passport
									|| cq.id_type == ticket_submit_order.passenger_card_type.work || cq.id_type == ticket_submit_order.passenger_card_type.taiwan)) {
						return true
					}
				}
			}
			return false
		}
	}
	function a2(co) {
		var cn = cf.createWindow(co + "_", 0, 0, 660, 100);
		cn.attachObject(co);
		cn.clearIcon();
		cn.denyResize();
		cn.setModal(true);
		cn.center();
		cn.button("park").hide();
		cn.button("minmax1").hide();
		cn.hideHeader();
		return cn
	}
	function C(co) {
		var cn = new Date();
		var cp = co.split("-");
		cn.setFullYear(parseInt(cp[0]), parseInt(cp[1] - 1, 10), parseInt(
				cp[2], 10));
		if (cp.length >= 6) {
			cn.setHours(cp[3], cp[4], cp[5])
		}
		return cn
	}
	function aD(cn) {
		var cq = "", cp = "";
		var cs = cn.replace(/-/g, "");
		if (cs.substring(4, 5) == "0") {
			cq = cs.substring(5, 6) + "月"
		} else {
			cq = cs.substring(4, 6) + "月"
		}
		if (cs.substring(6, 7) == "0") {
			cp = cs.substring(7, 8) + "日"
		} else {
			cp = cs.substring(6, 8) + "日"
		}
		var co = new Date(Date.parse(cn.replace(/-/g, "/")));
		var cr = "日一二三四五六";
		return cq.concat(cp).concat("&nbsp;&nbsp;").concat("周").concat(
				cr.charAt(co.getDay()))
	}
	showTicketPrice = function(cr) {
		var cv = $(cr).parent("tr").children("td").children("div").children(
				"div").children("span").attr("id");
		if (undefined == cv || cv == null || "undefined" == typeof (cv)) {
			cv = $(cr).attr("id")
		}
		$("#price_" + cs).hide();
		$("#tp-list-price").hide();
		$("#sleeper-price>span").css("cursor", "pointer");
		var cs = cv.split("_")[0];
		var ct = $("#price_" + cs).attr("datatran");
		var cu = cv.split("_")[1];
		var cq = cv.split("_")[2];
		var cw = cv.split("_")[3];
		var cp = cv.split("_")[4];
		var cn = $("#WZ_" + cs).html();
		var co = $("#QT_" + cs).html();
		if (cp && ($("#ticket_" + cs + "_train>span>span").text() == "查看票价")) {
			if ($("#ticket_" + cs).attr("class") == "bgc") {
				$("#price_" + cs).addClass("bgc")
			}
			$.ajax({
				type : "get",
				isTakeParam : false,
				beforeSend : function(cx) {
					cx.setRequestHeader("If-Modified-Since", "0");
					cx.setRequestHeader("Cache-Control", "no-cache")
				},
				url : ctx + "leftTicket/queryTicketPriceFL",
				data : {
					train_no : cs,
					from_station_no : cu,
					to_station_no : cq,
					seat_types : cp,
					train_date : train_tour_flag == "fc" ? $.trim($(
							"#back_train_date").val()) : $
							.trim($("#train_date").val())
				},
				timeout : 1000,
				error : function(cx, cz, cy) {
				},
				success : function(cx) {
				}
			});
			$
					.ajax({
						type : "get",
						isTakeParam : false,
						beforeSend : function(cx) {
							cx.setRequestHeader("If-Modified-Since", "0");
							cx.setRequestHeader("Cache-Control", "no-cache")
						},
						url : ctx + "leftTicket/queryTicketPrice",
						data : {
							train_no : cs,
							from_station_no : cu,
							to_station_no : cq,
							seat_types : cp,
							train_date : train_tour_flag == "fc" ? $.trim($(
									"#back_train_date").val()) : $.trim($(
									"#train_date").val())
						},
						success : function(cx) {
							if (cx.status) {
								$("#ticket_" + cs + "_train>span>span").html(
										"收起票价");
								$("#ticket_" + cs + "_train>span>b").addClass(
										"open");
								$("#ticket_" + cs + "_train>span>b").attr(
										"title", "收起票价");
								if (co == "--") {
									cx.data.MIN = ""
								}
								if (cn == "--") {
									cx.data.WZ = ""
								}
								$("#price_" + cs).html(
										$.render.priceTableTemplate(cx.data));
								$("#price_" + cs).show();
								if (ct && c(ct)) {
									$("#price_" + cs)
											.find("td")
											.eq(0)
											.html(
													'<a class="ad-tlist-hot" href="javascript:void(0);">移动宾馆 免费晚餐 快捷舒适 准时正点</a>')
								} else {
									$("#price_" + cs).find("td").eq(0).html("")
								}
								if (cx.data.PM != "--") {
									$("#sleeper-price_" + cs).mouseover(
											function() {
												$("#tp-list-price_" + cs)
														.show()
											});
									$("#sleeper-price_" + cs).mouseout(
											function() {
												$("#tp-list-price_" + cs)
														.hide()
											})
								}
							}
						}
					})
		} else {
			$("#ticket_" + cs + "_train>span>span").html("查看票价");
			$("#ticket_" + cs + "_train>span>b").attr("title", "查看票价");
			$("#ticket_" + cs + "_train>span>b").removeClass();
			$("#price_" + cs).html("");
			$("#price_" + cs).hide()
		}
	};
	function bS(cn) {
		if (ay == "starttime") {
			return cn
					.sort(function(cp, co) {
						var cr = Number(cp.queryLeftNewDTO.start_time.replace(
								":", ""));
						var cq = Number(co.queryLeftNewDTO.start_time.replace(
								":", ""));
						if (cr > cq) {
							return a1 ? 1 : -1
						} else {
							return a1 ? -1 : 1
						}
					})
		} else {
			if (ay == "arrivedtime") {
				return cn.sort(function(cp, co) {
					var cr = Number(cp.queryLeftNewDTO.arrive_time.replace(":",
							""));
					var cq = Number(co.queryLeftNewDTO.arrive_time.replace(":",
							""));
					if (cr > cq) {
						return b1 ? 1 : -1
					} else {
						return b1 ? -1 : 1
					}
				})
			} else {
				if (ay == "lishi") {
					return cn.sort(function(cp, co) {
						var cr = Number(cp.queryLeftNewDTO.lishi.replace(":",
								""));
						var cq = Number(co.queryLeftNewDTO.lishi.replace(":",
								""));
						if (cr > cq) {
							return aW ? 1 : -1
						} else {
							return aW ? -1 : 1
						}
					})
				}
			}
		}
		return cn
	}
	function az() {
		$("#s_time").click(function() {
			if (a1) {
				$("#s_time").removeClass().addClass("b4");
				if ($("#r_time").attr("class") == "b4") {
					$("#r_time").removeClass().addClass("b2")
				} else {
					if ($("#r_time").attr("class") == "b3") {
						$("#r_time").removeClass().addClass("b1")
					}
				}
				if ($("#l_s").attr("class") == "b4") {
					$("#l_s").removeClass().addClass("b2")
				} else {
					if ($("#l_s").attr("class") == "b3") {
						$("#l_s").removeClass().addClass("b1")
					}
				}
				a1 = false;
				$("#other_span_starttime").removeClass().addClass("b4");
				if ($("#other_span_endtime").attr("class") == "b4") {
					$("#other_span_endtime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_endtime").attr("class") == "b3") {
						$("#other_span_endtime").removeClass().addClass("b1")
					}
				}
				if ($("#other_span_lishi").attr("class") == "b4") {
					$("#other_span_lishi").removeClass().addClass("b2")
				} else {
					if ($("#other_span_lishi").attr("class") == "b3") {
						$("#other_span_lishi").removeClass().addClass("b1")
					}
				}
			} else {
				$("#s_time").removeClass().addClass("b3");
				if ($("#r_time").attr("class") == "b4") {
					$("#r_time").removeClass().addClass("b2")
				} else {
					if ($("#r_time").attr("class") == "b3") {
						$("#r_time").removeClass().addClass("b1")
					}
				}
				if ($("#l_s").attr("class") == "b4") {
					$("#l_s").removeClass().addClass("b2")
				} else {
					if ($("#l_s").attr("class") == "b3") {
						$("#l_s").removeClass().addClass("b1")
					}
				}
				a1 = true;
				$("#other_span_starttime").removeClass().addClass("b3");
				if ($("#other_span_endtime").attr("class") == "b4") {
					$("#other_span_endtime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_endtime").attr("class") == "b3") {
						$("#other_span_endtime").removeClass().addClass("b1")
					}
				}
				if ($("#other_span_lishi").attr("class") == "b4") {
					$("#other_span_lishi").removeClass().addClass("b2")
				} else {
					if ($("#other_span_lishi").attr("class") == "b3") {
						$("#other_span_lishi").removeClass().addClass("b1")
					}
				}
			}
			ay = "starttime";
			aH()
		});
		$("#other_span_starttime").click(function() {
			if (a1) {
				$("#s_time").removeClass().addClass("b4");
				if ($("#r_time").attr("class") == "b4") {
					$("#r_time").removeClass().addClass("b2")
				} else {
					if ($("#r_time").attr("class") == "b3") {
						$("#r_time").removeClass().addClass("b1")
					}
				}
				if ($("#l_s").attr("class") == "b4") {
					$("#l_s").removeClass().addClass("b2")
				} else {
					if ($("#l_s").attr("class") == "b3") {
						$("#l_s").removeClass().addClass("b1")
					}
				}
				a1 = false;
				$("#other_span_starttime").removeClass().addClass("b4");
				if ($("#other_span_endtime").attr("class") == "b4") {
					$("#other_span_endtime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_endtime").attr("class") == "b3") {
						$("#other_span_endtime").removeClass().addClass("b1")
					}
				}
				if ($("#other_span_lishi").attr("class") == "b4") {
					$("#other_span_lishi").removeClass().addClass("b2")
				} else {
					if ($("#other_span_lishi").attr("class") == "b3") {
						$("#other_span_lishi").removeClass().addClass("b1")
					}
				}
			} else {
				$("#s_time").removeClass().addClass("b3");
				if ($("#r_time").attr("class") == "b4") {
					$("#r_time").removeClass().addClass("b2")
				} else {
					if ($("#r_time").attr("class") == "b3") {
						$("#r_time").removeClass().addClass("b1")
					}
				}
				if ($("#l_s").attr("class") == "b4") {
					$("#l_s").removeClass().addClass("b2")
				} else {
					if ($("#l_s").attr("class") == "b3") {
						$("#l_s").removeClass().addClass("b1")
					}
				}
				a1 = true;
				$("#other_span_starttime").removeClass().addClass("b3");
				if ($("#other_span_endtime").attr("class") == "b4") {
					$("#other_span_endtime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_endtime").attr("class") == "b3") {
						$("#other_span_endtime").removeClass().addClass("b1")
					}
				}
				if ($("#other_span_lishi").attr("class") == "b4") {
					$("#other_span_lishi").removeClass().addClass("b2")
				} else {
					if ($("#other_span_lishi").attr("class") == "b3") {
						$("#other_span_lishi").removeClass().addClass("b1")
					}
				}
			}
			ay = "starttime";
			aH()
		});
		$("#r_time").click(function() {
			if (b1) {
				$("#r_time").removeClass().addClass("b4");
				if ($("#s_time").attr("class") == "b4") {
					$("#s_time").removeClass().addClass("b2")
				} else {
					if ($("#s_time").attr("class") == "b3") {
						$("#s_time").removeClass().addClass("b1")
					}
				}
				if ($("#l_s").attr("class") == "b4") {
					$("#l_s").removeClass().addClass("b2")
				} else {
					if ($("#l_s").attr("class") == "b3") {
						$("#l_s").removeClass().addClass("b1")
					}
				}
				b1 = false;
				$("#other_span_starttime").removeClass().addClass("b4");
				$("#other_span_endtime").removeClass().addClass("b2");
				$("#other_span_lishi").removeClass().addClass("b2")
			} else {
				$("#r_time").removeClass().addClass("b3");
				if ($("#s_time").attr("class") == "b4") {
					$("#s_time").removeClass().addClass("b2")
				} else {
					if ($("#s_time").attr("class") == "b3") {
						$("#s_time").removeClass().addClass("b1")
					}
				}
				if ($("#l_s").attr("class") == "b4") {
					$("#l_s").removeClass().addClass("b2")
				} else {
					if ($("#l_s").attr("class") == "b3") {
						$("#l_s").removeClass().addClass("b1")
					}
				}
				b1 = true;
				$("#other_span_endtime").removeClass().addClass("b2");
				if ($("#other_span_starttime").attr("class") == "b4") {
					$("#other_span_starttime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_starttime").attr("class") == "b3") {
						$("#other_span_starttime").removeClass().addClass("b1")
					}
				}
				if ($("#other_span_lishi").attr("class") == "b4") {
					$("#other_span_lishi").removeClass().addClass("b2")
				} else {
					if ($("#other_span_lishi").attr("class") == "b3") {
						$("#other_span_lishi").removeClass().addClass("b1")
					}
				}
			}
			ay = "arrivedtime";
			aH()
		});
		$("#other_span_endtime").click(function() {
			if (b1) {
				$("#r_time").removeClass().addClass("b4");
				if ($("#s_time").attr("class") == "b4") {
					$("#s_time").removeClass().addClass("b2")
				} else {
					if ($("#s_time").attr("class") == "b3") {
						$("#s_time").removeClass().addClass("b1")
					}
				}
				if ($("#l_s").attr("class") == "b4") {
					$("#l_s").removeClass().addClass("b2")
				} else {
					if ($("#l_s").attr("class") == "b3") {
						$("#l_s").removeClass().addClass("b1")
					}
				}
				b1 = false;
				$("#other_span_endtime").removeClass().addClass("b4");
				if ($("#other_span_starttime").attr("class") == "b4") {
					$("#other_span_starttime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_starttime").attr("class") == "b3") {
						$("#other_span_starttime").removeClass().addClass("b1")
					}
				}
				if ($("#other_span_lishi").attr("class") == "b4") {
					$("#other_span_lishi").removeClass().addClass("b2")
				} else {
					if ($("#other_span_lishi").attr("class") == "b3") {
						$("#other_span_lishi").removeClass().addClass("b1")
					}
				}
			} else {
				$("#r_time").removeClass().addClass("b3");
				if ($("#s_time").attr("class") == "b4") {
					$("#s_time").removeClass().addClass("b2")
				} else {
					if ($("#s_time").attr("class") == "b3") {
						$("#s_time").removeClass().addClass("b1")
					}
				}
				if ($("#l_s").attr("class") == "b4") {
					$("#l_s").removeClass().addClass("b2")
				} else {
					if ($("#l_s").attr("class") == "b3") {
						$("#l_s").removeClass().addClass("b1")
					}
				}
				b1 = true;
				$("#other_span_endtime").removeClass().addClass("b3");
				if ($("#other_span_starttime").attr("class") == "b4") {
					$("#other_span_starttime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_starttime").attr("class") == "b3") {
						$("#other_span_starttime").removeClass().addClass("b1")
					}
				}
				if ($("#other_span_lishi").attr("class") == "b4") {
					$("#other_span_lishi").removeClass().addClass("b2")
				} else {
					if ($("#other_span_lishi").attr("class") == "b3") {
						$("#other_span_lishi").removeClass().addClass("b1")
					}
				}
			}
			ay = "arrivedtime";
			aH()
		});
		$("#l_s").click(function() {
			if (aW) {
				$("#l_s").removeClass().addClass("b4");
				if ($("#r_time").attr("class") == "b4") {
					$("#r_time").removeClass().addClass("b2")
				} else {
					if ($("#r_time").attr("class") == "b3") {
						$("#r_time").removeClass().addClass("b1")
					}
				}
				if ($("#s_time").attr("class") == "b4") {
					$("#s_time").removeClass().addClass("b2")
				} else {
					if ($("#s_time").attr("class") == "b3") {
						$("#s_time").removeClass().addClass("b1")
					}
				}
				aW = false;
				$("#other_span_lishi").removeClass().addClass("b4");
				if ($("#other_span_endtime").attr("class") == "b4") {
					$("#other_span_endtime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_endtime").attr("class") == "b3") {
						$("#other_span_endtime").removeClass().addClass("b1")
					}
				}
				if ($("#other_span_starttime").attr("class") == "b4") {
					$("#other_span_starttime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_starttime").attr("class") == "b3") {
						$("#other_span_starttime").removeClass().addClass("b1")
					}
				}
			} else {
				$("#l_s").removeClass().addClass("b3");
				if ($("#r_time").attr("class") == "b4") {
					$("#r_time").removeClass().addClass("b2")
				} else {
					if ($("#r_time").attr("class") == "b3") {
						$("#r_time").removeClass().addClass("b1")
					}
				}
				if ($("#s_time").attr("class") == "b4") {
					$("#s_time").removeClass().addClass("b2")
				} else {
					if ($("#s_time").attr("class") == "b3") {
						$("#s_time").removeClass().addClass("b1")
					}
				}
				aW = true;
				$("#other_span_lishi").removeClass().addClass("b3");
				if ($("#other_span_endtime").attr("class") == "b4") {
					$("#other_span_endtime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_endtime").attr("class") == "b3") {
						$("#other_span_endtime").removeClass().addClass("b1")
					}
				}
				if ($("#other_span_starttime").attr("class") == "b4") {
					$("#other_span_starttime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_starttime").attr("class") == "b3") {
						$("#other_span_starttime").removeClass().addClass("b1")
					}
				}
			}
			ay = "lishi";
			aH()
		});
		$("#other_span_lishi").click(function() {
			if (aW) {
				$("#l_s").removeClass().addClass("b4");
				if ($("#r_time").attr("class") == "b4") {
					$("#r_time").removeClass().addClass("b2")
				} else {
					if ($("#r_time").attr("class") == "b3") {
						$("#r_time").removeClass().addClass("b1")
					}
				}
				if ($("#s_time").attr("class") == "b4") {
					$("#s_time").removeClass().addClass("b2")
				} else {
					if ($("#s_time").attr("class") == "b3") {
						$("#s_time").removeClass().addClass("b1")
					}
				}
				aW = false;
				$("#other_span_lishi").removeClass().addClass("b4");
				if ($("#other_span_endtime").attr("class") == "b4") {
					$("#other_span_endtime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_endtime").attr("class") == "b3") {
						$("#other_span_endtime").removeClass().addClass("b1")
					}
				}
				if ($("#other_span_starttime").attr("class") == "b4") {
					$("#other_span_starttime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_starttime").attr("class") == "b3") {
						$("#other_span_starttime").removeClass().addClass("b1")
					}
				}
			} else {
				$("#l_s").removeClass().addClass("b3");
				if ($("#r_time").attr("class") == "b4") {
					$("#r_time").removeClass().addClass("b2")
				} else {
					if ($("#r_time").attr("class") == "b3") {
						$("#r_time").removeClass().addClass("b1")
					}
				}
				if ($("#s_time").attr("class") == "b4") {
					$("#s_time").removeClass().addClass("b2")
				} else {
					if ($("#s_time").attr("class") == "b3") {
						$("#s_time").removeClass().addClass("b1")
					}
				}
				aW = true;
				$("#other_span_lishi").removeClass().addClass("b3");
				if ($("#other_span_endtime").attr("class") == "b4") {
					$("#other_span_endtime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_endtime").attr("class") == "b3") {
						$("#other_span_endtime").removeClass().addClass("b1")
					}
				}
				if ($("#other_span_starttime").attr("class") == "b4") {
					$("#other_span_starttime").removeClass().addClass("b2")
				} else {
					if ($("#other_span_starttime").attr("class") == "b3") {
						$("#other_span_starttime").removeClass().addClass("b1")
					}
				}
			}
			ay = "lishi";
			aH()
		})
	}
	closeTrainStop = function() {
		over_flag = false;
		bZ = 0;
		$("#train_stop").hide();
		$("#train_table").html("")
	};
	hideTrainStop = function(cn) {
		over_flag = false;
		if (p) {
			clearTimeout(p)
		}
		p = window.setTimeout(function() {
			if (bZ != 1) {
				bZ = 0;
				$("#train_stop").hide();
				$("#train_table").html("")
			}
		}, 130)
	};
	checkHover = function(co, cn) {
		if (getEvent(co).type == "mouseover") {
			return !$.contains(cn, getEvent(co).relatedTarget
					|| getEvent(co).fromElement)
					&& !((getEvent(co).relatedTarget || getEvent(co).fromElement) === cn)
		} else {
			return !$.contains(cn, getEvent(co).relatedTarget
					|| getEvent(co).toElement)
					&& !((getEvent(co).relatedTarget || getEvent(co).toElement) === cn)
		}
	};
	getEvent = function(cn) {
		return cn || window.event
	};
	checkHover = function(co, cn) {
		if (getEvent(co).type == "mouseover") {
			return !$.contains(cn, getEvent(co).relatedTarget
					|| getEvent(co).fromElement)
					&& !((getEvent(co).relatedTarget || getEvent(co).fromElement) === cn)
		} else {
			return !$.contains(cn, getEvent(co).relatedTarget
					|| getEvent(co).toElement)
					&& !((getEvent(co).relatedTarget || getEvent(co).toElement) === cn)
		}
	};
	getEvent = function(cn) {
		return cn || window.event
	};
	function bB(cp, cn) {
		for (var co = 0; co < cn.length; co++) {
			if (cn[co].key == cp) {
				return true
			}
		}
		return false
	}
	function bl(cr) {
		var cw = function(cx) {
			this.value = cx
		};
		var cs = new Array();
		var co = new Array();
		var cq = {};
		var cn = {};
		$("#cc_from_station_name_all>ul").html("");
		$("#cc_to_station_name_all>ul").html("");
		var cp;
		var cv;
		var cu;
		for (var ct = 0; ct < cr.length; ct++) {
			cp = cr[ct].queryLeftNewDTO.from_station_name;
			cv = cr[ct].queryLeftNewDTO.to_station_name;
			cu = cr[ct];
			if (!cq[cp]) {
				cs.push(new cw(cp));
				cq[cp] = true
			}
			if (!cn[cv]) {
				co.push(new cw(cv));
				cn[cv] = true
			}
		}
		$("#to_station_ul").html($.render.toStationNameTableTemplate(co));
		$("#from_station_ul").html($.render.stationNameTableTemplate(cs));
		$("#sear-sel-bd input[name='cc_from_station']").click(
				function() {
					k(bA, "cc_from_station_" + $(this).val());
					var cx = $("input[name='cc_from_station']");
					var cy = $("input[name='cc_from_station']:checked");
					if ($(this).is(":checked")) {
						if (cx && cy && cy.length == cx.length) {
							$("#from_station_name_all").removeClass().addClass(
									"btn-all")
						} else {
							$("#from_station_name_all").removeClass().addClass(
									"btn-all btn-all-sel")
						}
					} else {
						if (cx && cy && cy.length == 0) {
							$("#from_station_name_all").removeClass().addClass(
									"btn-all")
						} else {
							$("#from_station_name_all").removeClass().addClass(
									"btn-all btn-all-sel")
						}
					}
					aH()
				});
		$("#sear-sel-bd input[name='cc_to_station']").click(
				function() {
					k(bo, "cc_to_station_" + $(this).val());
					var cx = $("input[name='cc_to_station']");
					var cy = $("input[name='cc_to_station']:checked");
					if ($(this).is(":checked")) {
						if (cx && cy && cy.length == cx.length) {
							$("#to_station_name_all").removeClass().addClass(
									"btn-all")
						} else {
							$("#to_station_name_all").removeClass().addClass(
									"btn-all btn-all-sel")
						}
					} else {
						if (cx && cy && cy.length == 0) {
							$("#to_station_name_all").removeClass().addClass(
									"btn-all")
						} else {
							$("#to_station_name_all").removeClass().addClass(
									"btn-all btn-all-sel")
						}
					}
					aH()
				})
	}
	submitOrderRequest = function(co, cn) {
		$
				.ajax({
					type : "post",
					url : ctx + "login/checkUser",
					data : {},
					beforeSend : function(cp) {
						cp.setRequestHeader("If-Modified-Since", "0");
						cp.setRequestHeader("Cache-Control", "no-cache")
					},
					success : function(cp) {
						var cr;
						checkusermdId = cp.attributes;
						if (cp.data.flag) {
							if (train_tour_flag == "fc") {
								cr = $("#back_train_date").val()
							} else {
								cr = $("#train_date").val()
							}
							if (x == "0X00") {
								var cq = false;
								for (i = (studentComPerArr.length - 1); i >= 0; i = i - 2) {
									if (C(studentComPerArr[i - 1]) <= C(cr)
											&& C(studentComPerArr[i]) >= C(cr)) {
										cq = true;
										break
									}
								}
								if (!cq) {
									b("学生票的乘车时间为每年的暑假6月1日至9月30日、寒假12月1日至3月31日，目前不办理学生票业务。");
									return
								}
							}
							S(co, cn)
						} else {
							bv();
							$("#floatTable").hide();
							a = $(window).scrollTop();
							aa(co, cn)
						}
					}
				})
	};
	function S(cA, ct) {
		var cn = "";
		if ($("#dc").is(":checked")) {
			cn = "dc"
		} else {
			cn = "wc"
		}
		if (train_tour_flag == "fc") {
			cn = "fc";
			var cq = ct.split(":");
			var cp = $("#back_train_date").val() + "-" + cq[0] + "-" + cq[1]
					+ "-00";
			try {
				if (roundReferTime) {
					if (C(roundReferTime) >= C(cp)) {
						b("您预订的往程车票到站时间为"
								+ C(roundReferTime)
										.format("yyyy年MM月dd日 hh时mm分")
								+ "，返回日期不能早于此时间");
						return
					}
				}
			} catch (cv) {
			}
		}
		if (train_tour_flag == "gc") {
			cn = "gc"
		}
		if ("undefined" == typeof (submitForm)) {
			var cr = "secretStr=" + cA + "&train_date="
					+ $("#train_date").val() + "&back_train_date="
					+ $("#back_train_date").val() + "&tour_flag=" + cn
					+ "&purpose_codes=" + ch() + "&query_from_station_name="
					+ $("#fromStationText").val() + "&query_to_station_name="
					+ $("#toStationText").val() + "&" + cy
		} else {
			var co = submitForm();
			var cz = co.split(":::");
			var cu = cz[0].split(",-,")[0];
			var cx = cz[0].split(",-,")[1];
			var cs = cz[1].split(",-,")[0];
			var cw = cz[1].split(",-,")[1];
			var cr = escape(cu) + "=" + escape(cx) + "&" + cs + "=" + cw
					+ "&secretStr=" + cA + "&train_date="
					+ $("#train_date").val() + "&back_train_date="
					+ $("#back_train_date").val() + "&tour_flag=" + cn
					+ "&purpose_codes=" + ch() + "&query_from_station_name="
					+ $("#fromStationText").val() + "&query_to_station_name="
					+ $("#toStationText").val() + "&" + cy
		}
		var cy = checkusermdId != undefined ? "&_json_att="
				+ encodeURIComponent(checkusermdId) : "";
		$
				.ajax({
					type : "post",
					url : ctx + "leftTicket/submitOrderRequest",
					data : cr,
					async : false,
					success : function(cB) {
						if (cB.status) {
							if (cB.data == "Y") {
								dhtmlx
										.alert({
											title : "温馨提示",
											ok : "确定",
											text : "您选择的列车距开车时间很近了，请确保有足够的时间抵达车站，并办理换取纸质车票、安全检查、实名制验证及检票等手续，以免耽误您的旅行。",
											type : "alert-warn",
											callback : function() {
												aU(cn, train_tour_flag)
											}
										})
							} else {
								aU(cn, train_tour_flag)
							}
						}
					}
				})
	}
	function aU(co, cn) {
		if (cn != null) {
			if (cn == "fc") {
				otsRedirect("post", ctx + "confirmPassenger/initFc", {});
				return
			}
			if (cn == "gc") {
				otsRedirect("post", ctx + "confirmPassenger/initGc", {});
				return
			}
		}
		if (co == "dc") {
			otsRedirect("post", ctx + "confirmPassenger/initDc", {});
			return
		} else {
			otsRedirect("post", ctx + "confirmPassenger/initWc", {})
		}
	}
	var ci = $("#fromStation").val();
	var bd = $("#toStation").val();
	var bW = $.trim($("#train_date").val());
	a6 = ci + bd + bW;
	$("#add-train")
			.click(
					function() {
						if ($("#fromStationText").val() == "简拼/全拼/汉字") {
							dhtmlx.alert({
								title : "输入车次",
								ok : "确定",
								text : "请填写出发地！",
								type : "alert-error"
							});
							return
						}
						if ($("#toStationText").val() == "简拼/全拼/汉字") {
							dhtmlx.alert({
								title : "输入车次",
								ok : "确定",
								text : "请填写目的地！",
								type : "alert-error"
							});
							return
						}
						var cq = $('#prior_train span[name="prior_train-span"]').length;
						var cr = $.trim($("#inp-train").val()).toUpperCase();
						if (cr.length == 0 || cr == "请输入") {
							dhtmlx.alert({
								title : "输入车次",
								ok : "确定",
								text : "请输入车次",
								type : "alert-error",
								callback : function() {
									$("#inp-train").val("");
									$("#inp-train").focus()
								}
							})
						} else {
							if (cq < 6) {
								var co = /^[a-zA-Z0-9]+$/;
								var cp = /^[0-9]+$/;
								if (!co.test(cr)) {
									dhtmlx.alert({
										title : "输入车次",
										ok : "确定",
										text : "车次格式输入错误！",
										type : "alert-error",
										callback : function() {
											ccInputSelected = true;
											$("#inp-train").select()
										}
									})
								} else {
									if (cp.test(cr) && cr.length > 4) {
										dhtmlx.alert({
											title : "输入车次",
											ok : "确定",
											text : "车次格式输入错误！",
											type : "alert-error",
											callback : function() {
												ccInputSelected = true;
												$("#inp-train").select()
											}
										})
									} else {
										if (cr.length < 2) {
											dhtmlx.alert({
												title : "输入车次",
												ok : "确定",
												text : "车次格式输入错误！",
												type : "alert-error",
												callback : function() {
													ccInputSelected = true;
													$("#inp-train").select()
												}
											})
										} else {
											if ($.inArray(cr, ccSelected) < 0) {
												var cn = "<span name='prior_train-span' class='sel-box w80'>"
														+ cr
														+ "<a class='close' href='javascript:' onclick='$.removeSel(this,\""
														+ cr
														+ "\",4)'></a></span>";
												$("#prior_train").append(cn);
												ccSelected.push(cr);
												$("#inp-train").val("")
											} else {
												dhtmlx.alert({
													title : "输入车次",
													ok : "确定",
													text : "此车次已经添加过！",
													type : "alert-error",
													callback : function() {
														ccInputSelected = true;
														$("#inp-train")
																.select()
													}
												})
											}
										}
									}
								}
							} else {
								dhtmlx.alert({
									title : "输入车次",
									ok : "确定",
									text : "最多添加5个优先车次",
									type : "alert-error"
								});
								$("#inp-train").val("")
							}
						}
					});
	function ch() {
		if ($("#sf2").is(":checked")) {
			return "0X00"
		} else {
			return "ADULT"
		}
	}
	$("#yxtrain_close").click(function(cn) {
		$("#yxtraindiv").hide()
	});
	$("#yxtrain_a_close").click(function(cn) {
		$("#yxtraininput").val("");
		$("#yxtraininput").trigger("keyup")
	});
	$("#passenger_a_close").click(function(cn) {
		$("#searchPassenger").val("");
		$("#searchPassenger").trigger("keyup")
	});
	$("#yxtraininput").bind("keyup", function() {
		var co = $(this).val().toUpperCase();
		var cn = $("#yxtrain_code").height();
		if (u(co, 0)) {
			cm(1)
		} else {
			cm(3)
		}
		$("#yxtrain_code").css("height", cn)
	});
	function cm(cn) {
		$("#yxtrain_loading").hide();
		$("#yxtrain_code").hide();
		$("#yxTrain_page").hide();
		$("#yxtrain_empty").hide();
		if (1 == cn) {
			$("#yxtrain_code").show();
			$("#yxTrain_page").show()
		} else {
			if (2 == cn) {
				$("#yxtrain_loading").show()
			} else {
				if (3 == cn) {
					$("#yxtrain_empty").show()
				}
			}
		}
	}
	function u(cB, cn) {
		cB = cB.toUpperCase();
		var cx = [];
		var cC = $("#prior_train span:gt(1)");
		if (cC && cC.length > 0) {
			for (var cq = 0; cq < cC.length; cq++) {
				cx.push(cC[cq].innerText)
			}
		}
		var cA = [];
		var cw = [];
		if (trainListForIE && trainListForIE.length > 0) {
			for (var co = 0; co < trainListForIE.length; co++) {
				cA.push(trainListForIE[co]);
				cw.push(trainListForIE[co])
			}
		}
		if (cB) {
			for (var cq = 0; cq < cw.length; cq++) {
				var cv = cw[cq].substring(0, cw[cq].indexOf("("));
				if (cv.indexOf(cB) <= -1) {
					cA.splice($.inArray(cw[cq], cA), 1)
				}
			}
		}
		if (cA && cA.length > 0) {
			var cs = "";
			for (var cq = 0; cq < cA.length; cq++) {
				var cv = cA[cq];
				var cr = cv.indexOf("(") > -1 ? cv
						.substring(0, cv.indexOf("(")) : cv;
				var cy = cq >= yxTrainPageSize * (cn)
						&& cq < yxTrainPageSize * (cn + 1);
				if (cy) {
					if (cr.indexOf(cB) > -1) {
						var cu = cv.indexOf(cB);
						var ct = cv.substring(0, cu);
						var cz = cv.substring(cu + cB.length, cv.indexOf("("));
						var cp = cv.substring(cv.indexOf("("));
						if (cx && cx.length > 0 && $.inArray(cr, cx) > -1) {
							cs += '<li style="width: 140px;" traincode='
									+ cr
									+ ' name="yxtrainli" class="cur"><span style="font-size:15px;">'
									+ ct + '<span style="color:red;">' + cB
									+ "</span>" + cz + "</span>" + cp + "</li>"
						} else {
							cs += '<li style="width: 140px;" traincode='
									+ cr
									+ ' name="yxtrainli"><span style="font-size:15px;">'
									+ ct + '<span style="color:red;">' + cB
									+ "</span>" + cz + "</span>" + cp + "</li>"
						}
					}
				}
			}
			$("#yxtrain_code").html(cs)
		} else {
			return false
		}
		if (cA.length > 0) {
			E(cn, cA.length)
		}
		$('li[name="yxtrainli"]')
				.click(
						function() {
							if ($(this).attr("class") == "cur") {
								var cF = $('span[name="prior_train-span"]');
								for (var cD = 0; cD < cF.length; cD++) {
									var cE = $(cF[cD]).html();
									if (cE.indexOf($(this).attr("traincode")) > -1) {
										$(cF[cD]).children().click()
									}
								}
								$(this).removeClass()
							} else {
								$("#inp-train").val($(this).attr("traincode"));
								var cG = $('#prior_train span[name="prior_train-span"]').length;
								$("#add-train").click();
								if (cG < 6) {
									$(this).attr("class", "cur");
									$.chooseAutoSubmit()
								}
							}
						});
		return true
	}
	function E(cn, co) {
		var cp = Math.ceil(co / yxTrainPageSize);
		$("#yxTrain_page").html(aE(cn, cp)).show()
	}
	function aE(cv, cq) {
		var cr = "";
		cr += (cv == 0) ? ""
				: '<a href="javascript:void(0);" onclick="$.click_YX_page('
						+ (cv - 1) + ')" class="prev">上一页</a>';
		var cw = cv + 1;
		var cs = cq;
		var ct = 2;
		var cu = 5;
		var cn = (cw - ct) > 0 ? (cw + ct > cs ? cs - cu + 1 : cw - ct) : 1;
		var co = cn + cu > cs ? cs + 1 : cn + cu;
		if (cs < cu) {
			for (var cp = 1; cp < cs + 1; cp++) {
				if (cw == cp) {
					cr += '<a href="javascript:void(0);" onclick="$.click_YX_page('
							+ (cp - 1) + ')" class="on">' + (cp) + "</a>"
				} else {
					cr += '<a href="javascript:void(0);" onclick="$.click_YX_page('
							+ (cp - 1) + ')">' + (cp) + "</a>"
				}
			}
		} else {
			for (var cp = cn; cp < co; cp++) {
				if (cw == cp) {
					cr += '<a href="javascript:void(0);" onclick="$.click_YX_page('
							+ (cp - 1) + ')" class="on">' + (cp) + "</a>"
				} else {
					cr += '<a href="javascript:void(0);" onclick="$.click_YX_page('
							+ (cp - 1) + ')">' + (cp) + "</a>"
				}
			}
		}
		cr += (cv == cq - 1) ? ""
				: '<a href="javascript:void(0);" onclick="$.click_YX_page('
						+ (cv + 1) + ')" class="next">下一页</a>';
		return cr
	}
	function a5(cv, cq) {
		if (cq == 0) {
			return ""
		}
		var cr = "";
		cr += (cv == 0) ? ""
				: '<a href="javascript:void(0);" onclick="$.click_passenger_page('
						+ (cv - 1) + ')" class="prev">上一页</a>';
		var cw = cv + 1;
		var cs = cq;
		var ct = 2;
		var cu = 5;
		var cn = (cw - ct) > 0 ? (cw + ct > cs ? cs - cu + 1 : cw - ct) : 1;
		var co = cn + cu > cs ? cs + 1 : cn + cu;
		if (cs < cu) {
			for (var cp = 1; cp < cs + 1; cp++) {
				if (cw == cp) {
					cr += '<a href="javascript:void(0);" onclick="$.click_passenger_page('
							+ (cp - 1) + ')" class="on">' + (cp) + "</a>"
				} else {
					cr += '<a href="javascript:void(0);" onclick="$.click_passenger_page('
							+ (cp - 1) + ')">' + (cp) + "</a>"
				}
			}
		} else {
			for (var cp = cn; cp < co; cp++) {
				if (cw == cp) {
					cr += '<a href="javascript:void(0);" onclick="$.click_passenger_page('
							+ (cp - 1) + ')" class="on">' + (cp) + "</a>"
				} else {
					cr += '<a href="javascript:void(0);" onclick="$.click_passenger_page('
							+ (cp - 1) + ')">' + (cp) + "</a>"
				}
			}
		}
		cr += (cv == cq - 1) ? ""
				: '<a href="javascript:void(0);" onclick="$.click_passenger_page('
						+ (cv + 1) + ')" class="next">下一页</a>';
		return cr
	}
	function ch() {
		if ($("#sf2").is(":checked")) {
			return "0X00"
		} else {
			return "ADULT"
		}
	}
	jQuery
			.extend({
				chooseAutoSubmit : function() {
					if (!$("#autoSubmit").is(":disabled")) {
						if (!$("#autoSubmit").is(":checked")) {
							$("#autoSubmit").click()
						}
					}
				},
				init_ul4li : function() {
					var cn = [];
					var cp = 0;
					cn[cp++] = '<li><input name="cc_type" value="G" type="checkbox" class="check" /><label for="">GC-高铁/城际</label></li>';
					cn[cp++] = '<li><input name="cc_type" value="D" type="checkbox" class="check" /><label for="">D-动车</label></li>';
					cn[cp++] = '<li><input name="cc_type" value="Z" type="checkbox" class="check" /><label for="">Z-直达</label></li>';
					cn[cp++] = '<li><input name="cc_type" value="T" type="checkbox" class="check" /><label for="">T-特快</label></li>';
					cn[cp++] = '<li><input name="cc_type" value="K" type="checkbox" class="check" /><label for="">K-快速</label></li>';
					cn[cp++] = '<li><input name="cc_type" value="QT" type="checkbox" class="check" /><label for="">其他</label></li>';
					$("#_ul_station_train_code").html(cn.join(""));
					if (train_tour_flag == "gc" && "Y" == isDwTicketResign) {
						var cr = $("#_ul_station_train_code li");
						for (var co = 2, cq = cr.length; co < cq; co++) {
							cr.eq(co).find("input")
									.attr("disabled", "disabled");
							cr.eq(co).find("label").attr("for", "").attr(
									"style", "color: rgb(153, 153, 153)")
						}
					}
					$("#startendtime")
							.html(
									'<span class="b1" id="s_time">出发时间</span><br /><span class="b2" id="r_time">到达时间</span>');
					$("#floatstartendtime")
							.html(
									'<span class="b1" id="other_span_starttime">出发时间</span><br /><span class="b2" id="other_span_endtime">到达时间</span>')
				},
				parseDateFormat : function(cr) {
					var cn = "";
					var co = cr.getFullYear();
					var cq = cr.getMonth() + 1;
					var cp = cr.getDate();
					if (cq < 10) {
						cq = "0" + cq
					}
					if (cp < 10) {
						cp = "0" + cp
					}
					cn = co + "-" + cq + "-" + cp;
					return cn
				},
				renderPassenger : function(cF) {
					if (!cF) {
						cF = 0
					}
					if (passengerAll) {
						var cr = $("#searchPassenger").val();
						var cn = [];
						if (cr != "" && cr != "输入乘客姓名") {
							var cD = passengerAll.length;
							for (var cA = 0; cA < cD; cA++) {
								var cz = passengerAll[cA];
								if (cz.passenger_name.indexOf(cr) > -1
										|| (cz.first_letter && cz.first_letter
												.toUpperCase().indexOf(
														cr.toUpperCase()) > -1)) {
									cn.push(cz)
								}
							}
						} else {
							cn = passengerAll.slice(passengerPageSize * (cF),
									Math.min(passengerPageSize * (cF + 1),
											passengerAll.length))
						}
						var cy = cn.length;
						var cw = [];
						var cs = 0;
						for (var cA = 0; cA < cy; cA++) {
							var cz = cn[cA];
							var cE = cz.passenger_type_name;
							if (!cE) {
								cE = ""
							}
							var cq = "";
							var co = "";
							if ($("#sf2").is(":checked")) {
								if (cz.passenger_type != "3") {
									cq = " disabled='true' ";
									co = " class='color999' "
								}
							}
							var cv = cz.total_times;
							if (cz.passenger_id_type_code == "2") {
								cq = " disabled='true' ";
								co = " class='color999' title='请修改身份信息' "
							} else {
								if (cz.passenger_id_type_code == "1") {
									if (!isCanGP("1", cv)) {
										cq = " disabled='true' ";
										co = " class='color999' title='请修改身份信息' "
									}
								} else {
									if (!isCanGP("B", cv)) {
										cq = " disabled='true' ";
										co = " class='color999' title='请修改身份信息' "
									}
									if (!isCanGP("H", cv)) {
										cq = " disabled='true' ";
										co = " class='color999' title='请修改身份信息' "
									}
								}
							}
							var cx = cE == "成人" ? cz.passenger_name
									: cz.passenger_name + "(" + cE + ")";
							cx = cx.substring(0, 9);
							if (cr != "" && cr != "输入乘客姓名") {
								if (cz.passenger_name.indexOf(cr) > -1
										|| (cz.first_letter && cz.first_letter
												.toUpperCase().indexOf(
														cr.toUpperCase()) > -1)) {
									cs++;
									if ($.pHasInSelected(cz)) {
										if (co) {
											var cu = co.indexOf("'");
											co = co.substring(0, cu + 1)
													+ "cur "
													+ co.substring(cu + 1)
										} else {
											co = "class='cur'"
										}
									}
									cw[cA] = "<li style='width:110px' " + co
											+ " p_value='" + cz.passenger_name
											+ "(" + cE + ")("
											+ cz.passenger_id_no + ")' name='"
											+ cz.passenger_type
											+ "' codeType='"
											+ cz.passenger_id_type_code
											+ "' flag='" + cz.total_times
											+ "'>" + cx + "</li>"
								}
							} else {
								cs++;
								if ($.pHasInSelected(cz)) {
									if (co) {
										var cu = co.indexOf("'");
										co = co.substring(0, cu) + "cur "
												+ co.substring(cu)
									} else {
										co = "class='cur'"
									}
								}
								cw[cA] = "<li style='width:110px' " + co
										+ " p_value='" + cz.passenger_name
										+ "(" + cE + ")(" + cz.passenger_id_no
										+ ")'  name='" + cz.passenger_type
										+ "' codeType='"
										+ cz.passenger_id_type_code
										+ "' flag='" + cz.total_times + "'>"
										+ cx + "</li>"
							}
						}
						var cB = 100;
						var cC = 0;
						if (cs / 3 > 11) {
							cB = 310;
							cC = 258
						} else {
							cB = 100 + parseInt((cs / 3) * 25);
							cC = cB - 48
						}
						$("#sel-buyer").css("height", cB);
						$("#pContent").css("height", cC);
						$("#buyer-list").html(cw.join(""));
						var cp = 0;
						if (cr != "" && cr != "输入乘客姓名") {
							cp = cn.length
						} else {
							cp = passengerAll.length
						}
						var ct = Math.ceil(cp / passengerPageSize);
						$("#passenger_page").html(a5(cF, ct)).show()
					}
					$("#buyer-list li")
							.click(
									function() {
										if ($(this).hasClass("color999")) {
											return
										}
										var cI = $("#setion_postion span").length;
										var cK = $(this).attr("p_value");
										if (!$(this).hasClass("cur")) {
											if (cI < 6) {
												var cG = "";
												var cH = true;
												if (cK.indexOf("成人") > -1
														|| cK
																.indexOf("残疾军人、伤残人民警察") > -1) {
													cG = "<span name='"
															+ cK
															+ "' class='sel-box w80'><a href='javascript:' onclick='$.addChildPassenger(\""
															+ cK
															+ "\");' style='position:static;background:none;width:auto;' title='您可点击此乘车人添加儿童票。'>"
															+ cK
															+ "</a><a class='close' href='javascript:' onclick='$.removeSel(this,\""
															+ cK
															+ "\",1)'></a></span>";
													$("#setion_postion")
															.append(cG);
													$.checkedPasseanger(cK)
												} else {
													if (cK.indexOf("学生") > -1) {
														var cJ = $(this);
														if ($.checkSeatTypes()) {
															cG = "<span name='"
																	+ cK
																	+ "' class='sel-box w80'>"
																	+ cK
																	+ "<a class='close' href='javascript:' onclick='$.removeSel(this,\""
																	+ cK
																	+ "\",1)'></a></span>";
															$("#setion_postion")
																	.append(cG);
															$
																	.checkedPasseanger(cK)
														} else {
															$(
																	"#conifrmdialog_student_to_adult_context")
																	.html(
																			"当前选择的优先席别有不支持学生票的，是否选择购买成人票？");
															dhtmlx
																	.createWin({
																		winId : "confirmChangeStudentToAdult",
																		closeWinId : [
																				"close_conifrmdialog_student_to_adult",
																				"cancel_dialog_student_to_adult" ],
																		callback : function() {
																			$(
																					cJ)
																					.prop(
																							"checked",
																							false)
																		},
																		okId : "goto_student_to_adult",
																		okCallBack : function() {
																			var cL = cK
																					.replace(
																							/学生/,
																							"成人");
																			cG = "<span name='"
																					+ cK
																					+ "' class='sel-box w80'>"
																					+ cL
																					+ "<a class='close' href='javascript:' onclick='$.removeSel(this,\""
																					+ cK
																					+ "\",1)'></a></span>";
																			$(
																					"#setion_postion")
																					.append(
																							cG);
																			$
																					.checkedPasseanger(cL)
																		}
																	})
														}
													} else {
														if (cK.indexOf("儿童") > -1) {
															cG = "<span name='"
																	+ cK
																	+ "' class='sel-box w80' title='如需修改旅客类型，请修改相应常用联系人信息。'>"
																	+ cK
																	+ "<a class='close' href='javascript:' onclick='$.removeSel(this,\""
																	+ cK
																	+ "\",1)'></a></span>";
															$("#setion_postion")
																	.append(cG);
															$
																	.checkedPasseanger(cK)
														} else {
															cG = "<span name='"
																	+ cK
																	+ "' class='sel-box w80'>"
																	+ cK
																	+ "<a class='close' href='javascript:' onclick='$.removeSel(this,\""
																	+ cK
																	+ "\",1)'></a></span>";
															$("#setion_postion")
																	.append(cG);
															$
																	.checkedPasseanger(cK)
														}
													}
												}
												$(this).addClass("cur");
												$.chooseAutoSubmit()
											} else {
												dhtmlx.alert({
													title : "添加常用联系人",
													ok : "确定",
													text : "最多添加5位联系人",
													type : "alert-error"
												});
												$(this).removeClass("cur")
											}
										} else {
											$
													.each(
															$("#setion_postion span"),
															function(cL, cM) {
																if (cK == $(cM)
																		.attr(
																				"name")) {
																	$(cM)
																			.remove();
																	$
																			.removePasseanger(cK);
																	return
																}
															});
											$(this).removeClass("cur")
										}
									})
				},
				reloadPassenger : function() {
					var cn = dhtmlx.modalbox({
						targSrc : '<div><img src="' + ctx
								+ 'resources/images/loading.gif"></img></div>',
						callback : function() {
						}
					});
					$
							.ajax({
								type : "post",
								isTakeParam : false,
								cache : false,
								async : false,
								url : ctx + "confirmPassenger/getPassengerDTOs",
								timeout : 10000,
								error : function(co, cq, cp) {
									dhtmlx.modalbox.hide(cn)
								},
								success : function(co) {
									dhtmlx.modalbox.hide(cn);
									if (co.status) {
										if (co.data.noLogin == "true") {
											bv();
											$("#floatTable").hide();
											a = $(window).scrollTop();
											Z()
										} else {
											if (co.data.exMsg != ""
													&& co.data.exMsg != null
													&& co.data.exMsg != "null") {
												b(co.data.exMsg);
												return
											}
											$("#sel-buyer").show();
											$("#sel-seat").hide();
											$("#sel-date").hide();
											$("#sel-buyer")
													.css(
															"left",
															$("#sear-sel")
																	.position().left + 80);
											$("#sel-buyer")
													.css(
															"left",
															$("#sear-sel")
																	.position().left + 80);
											$("#sel-buyer")
													.css(
															"top",
															$("#sear-sel")
																	.position().top + 4 * 28 + 16);
											passengerAll = co.data.normal_passengers;
											if (!(passengerAll && passengerAll.length > 0)) {
												passengerAll = []
											}
											var cr = co.data.dj_passengers;
											if (cr && cr.length > 0) {
												var cq = cr.length;
												for (var cp = 0; cp < cq; cp++) {
													if (!$.checkIsHas(
															passengerAll,
															cr[cp])) {
														passengerAll
																.push(cr[cp])
													}
												}
											}
											two_isOpenClick = co.data.two_isOpenClick;
											other_isOpenClick = co.data.other_isOpenClick;
											$.renderPassenger()
										}
									}
								}
							})
				},
				checkIsHas : function(cp, cq) {
					var co = cp.length;
					for (var cn = 0; cn < co; cn++) {
						if (cp[cn].passenger_name == cq.passenger_name
								&& cp[cn].passenger_id_type_code == cq.passenger_id_type_code
								&& cq.passenger_id_no == cp[cn].passenger_id_no) {
							return true
						}
					}
					return false
				},
				pHasInSelected : function(cq) {
					var co = passengerChecked.length;
					if (co > 0) {
						for (var cn = 0; cn < co; cn++) {
							var cp = passengerChecked[cn];
							if (cp.passenger_name == cq.passenger_name
									&& cp.passenger_id_type_code == cq.passenger_id_type_code
									&& cp.passenger_id_no == cq.passenger_id_no) {
								return true
							}
						}
					}
					return false
				},
				showSelectBuyer : function() {
					$("#sel-seat").hide();
					$("#yxtraindiv").hide();
					$("#sel-date").hide();
					if (!passengerAll) {
						$.reloadPassenger()
					} else {
						var cn = $("#buyer-list li");
						for (var co = 0; co < cn.length; co++) {
							var cq = $(cn[co]).attr("name");
							var cp = $(cn[co]).attr("codeType");
							var cr = $(cn[co]).attr("flag");
							if ($("#sf2").is(":checked")) {
								if (cq != "3") {
									$(cn[co]).addClass("color999")
								} else {
									$(cn[co]).removeClass("color999")
								}
							} else {
								$(cn[co]).removeClass("color999")
							}
							if (cp == "2") {
								$(cn[co]).addClass("color999")
							} else {
								if (cp == "1") {
									if (!isCanGP("1", cr)) {
										$(cn[co]).addClass("color999")
									}
								} else {
									if (!isCanGP("B", cr)) {
										$(cn[co]).addClass("color999")
									}
									if (!isCanGP("H", cr)) {
										$(cn[co]).addClass("color999")
									}
								}
							}
						}
						$("#sel-buyer").show();
						$("#sel-buyer").css("left",
								$("#sear-sel").position().left + 80);
						$("#sel-buyer").css("top",
								$("#sear-sel").position().top + 4 * 28 + 16)
					}
				},
				click_YX_page : function(co) {
					var cp = $("#yxtraininput").val().toUpperCase();
					var cn = $("#yxtrain_code").height();
					if (u(cp, co)) {
						cm(1)
					} else {
						cm(3)
					}
					$("#yxtrain_code").css("height", cn)
				},
				click_passenger_page : function(cn) {
					$.renderPassenger(cn)
				},
				showYxTrain : function() {
					$("#yxtrain_code").css("height", "auto");
					$("#yxtrain_code li").removeClass();
					$("#yxtraininput").val("");
					$("#yxtraindiv").css(
							"top",
							$("#showYxTrainSpan").offset().top
									+ $("#showYxTrainSpan").outerHeight()).css(
							"left", $("#showYxTrainSpan").offset().left).show();
					cm(2);
					var cp = $("#fromStationText").val()
							+ $("#toStationText").val()
							+ $("#train_date").val();
					if (trainListForIE.length == 0 || yxTrainChange != cp) {
						x = ch();
						var cr = x == "0X00" ? true : false;
						var co = train_tour_flag == "fc" ? $.trim($(
								"#back_train_date").val()) : $.trim($(
								"#train_date").val());
						var cn = bI(co, cr);
						if (!cn) {
							$("#yxtraindiv").hide();
							return
						}
						var cq = {
							"leftTicketDTO.train_date" : co,
							"leftTicketDTO.from_station" : $("#fromStation")
									.val(),
							"leftTicketDTO.to_station" : $("#toStation").val(),
							purpose_codes : x
						};
						aT();
						$
								.ajax({
									type : "get",
									isTakeParam : false,
									beforeSend : function(cs) {
										cs.setRequestHeader(
												"If-Modified-Since", "0");
										cs.setRequestHeader("Cache-Control",
												"no-cache")
									},
									url : ctx + CLeftTicketUrl,
									data : cq,
									timeout : 10000,
									success : function(cu) {
										if (cu.status) {
											if (cu.data == null
													|| cu.data.length == 0) {
												cm(3);
												trainListForIE = [];
												return
											}
											if (cu.data.flag == 1) {
												cu.data = b2(cu.data.result,
														cu.data.map)
											}
											trainListForIE = [];
											for (var cv = 0; cv < cu.data.length; cv++) {
												trainListForIE
														.push(cu.data[cv].queryLeftNewDTO.station_train_code
																+ "("
																+ cu.data[cv].queryLeftNewDTO.start_time
																+ "--"
																+ cu.data[cv].queryLeftNewDTO.arrive_time
																+ ")")
											}
											if (train_tour_flag == "gc"
													&& "Y" == isDwTicketResign) {
												var cB = [];
												for (var cv = 0, cC = cu.data.length; cv < cC; cv++) {
													var ct = cu.data[cv].queryLeftNewDTO;
													var cy = ct.station_train_code;
													cy = cy.substring(0, 1);
													if ("G" == cy || "D" == cy) {
														cB.push(cu.data[cv])
													}
												}
												cu.data = cB
											}
											if ($("#DW_SHOW_STR")[0]) {
												$("#DW_SHOW_STR").remove()
											}
											if ($("#hainan_limit_msg")[0]) {
												$("#hainan_limit_msg").remove()
											}
											$("#sear-sel").show();
											$("#sear-result").show();
											$("#t-list").show();
											$("#no_filter_ticket_6").hide();
											$("#no_filter_ticket_2").hide();
											$("#no_filter_ticket").hide();
											var cs = "";
											var cx = "";
											if (train_tour_flag != null
													&& train_tour_flag == "fc") {
												var cA = "<strong>"
														.concat(
																$(
																		"#fromStationText")
																		.val())
														.concat(" --> ")
														.concat(
																$(
																		"#toStationText")
																		.val())
														.concat("（")
														.concat(
																aD($(
																		"#back_train_date")
																		.val()))
														.concat(
																'）</strong>共计<strong id="trainum">')
														.concat(cu.data.length)
														.concat("</strong>个车次");
												if (bV(cu.data)) {
													cs = "<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>"
												} else {
													if (hainan_limit_msg
															&& ae(cq, cu.data)) {
														cx = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>"
																+ hainan_limit_msg
																+ "</p>"
													}
												}
												if ($("#auto_query").is(
														":checked")) {
													var cz = "";
													for (var cw = 0; cw < 25; cw++) {
														cz = cz + "&nbsp;"
													}
													cA = cA
															.concat(cz
																	+ "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
												}
												$("#sear-result>p").html(cA);
												if ($("#auto_query").is(
														":checked")) {
													$("#filterTic").bind(
															"click", bf)
												}
											} else {
												var cA = "<strong>"
														.concat(
																$(
																		"#fromStationText")
																		.val())
														.concat(" --> ")
														.concat(
																$(
																		"#toStationText")
																		.val())
														.concat("（")
														.concat(
																aD($(
																		"#train_date")
																		.val()))
														.concat(
																'）</strong>共计<strong id="trainum">')
														.concat(cu.data.length)
														.concat("</strong>个车次");
												if (bV(cu.data)) {
													cs = "<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>"
												} else {
													if (hainan_limit_msg
															&& ae(cq, cu.data)) {
														cx = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>"
																+ hainan_limit_msg
																+ "</p>"
													}
												}
												if ($("#auto_query").is(
														":checked")) {
													var cz = "";
													for (var cw = 0; cw < 25; cw++) {
														cz = cz + "&nbsp;"
													}
													cA = cA
															.concat(cz
																	+ "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
												}
												$("#sear-result>p").html(cA);
												if ($("#auto_query").is(
														":checked")) {
													$("#filterTic").bind(
															"click", bf)
												}
											}
											if (!$("#DW_SHOW_STR")[0]) {
												$("#sear-result>p").after(cs)
											}
											if (cx) {
												$("#sear-result>p").after(cx)
											}
											if (dwTranTimeStr) {
												clearInterval(dwTranTimeStr)
											}
											if ($("#DW_SHOW_STR")[0]) {
												dwTranTimeStr = window
														.setInterval(
																function() {
																	if ($(
																			"#DW_SHOW_STR")
																			.attr(
																					"data") == "1") {
																		$(
																				"#DW_SHOW_STR")
																				.attr(
																						"data",
																						"2")
																				.html(
																						"夜行两千公里 最低不足千元")
																	} else {
																		$(
																				"#DW_SHOW_STR")
																				.attr(
																						"data",
																						"1")
																				.html(
																						"高铁动卧 夕发朝至 风雨无阻 省时省钱")
																	}
																}, 1300)
											}
											if ($("#hainan_limit_msg")[0]) {
												hainan_tip = null;
												hainan_tip = new Marquee({
													ID : "hainan_limit_msg",
													Direction : "left",
													Step : 1,
													Width : 0,
													Height : 0,
													Timer : 30,
													DelayTime : 0,
													WaitTime : 0,
													ScrollStep : 0
												})
											}
											a8 = cu.data;
											ah();
											bl(a8);
											n();
											bE(a8);
											bM();
											$("#queryLeftTable").html("");
											$("#trainum").html("");
											aK();
											if (bY.length < 0) {
												aO = true;
												$("#no_filter_ticket").show();
												$("#no_filter_ticket_msg_1")
														.show();
												$("#no_filter_ticket_msg_2")
														.hide();
												$("#trainum").html("0");
												return
											} else {
												aO = true;
												$("#trainum").html(bY.length);
												aA(bY);
												$.showYxTrainData()
											}
											yxTrainChange = $(
													"#fromStationText").val()
													+ $("#toStationText").val()
													+ $("#train_date").val()
										} else {
											if (cu && cu.c_url) {
												CLeftTicketUrl = cu.c_url;
												aj(cq)
											}
										}
									}
								});
						yxTrainChange = cp
					} else {
						$.showYxTrainData()
					}
					$("#sel-buyer").hide();
					$("#sel-seat").hide();
					$("#sel-date").hide()
				},
				showYxTrainData : function() {
					if (u($("#yxtraininput").val(), 0)) {
						$("#yxtraindiv").css(
								"top",
								$("#showYxTrainSpan").offset().top
										+ $("#showYxTrainSpan").outerHeight())
								.css("left",
										$("#showYxTrainSpan").offset().left)
								.show();
						cm(1);
						$("#yxtraininput").focus()
					} else {
						cm(3)
					}
				},
				getMindateForCal : function() {
					if ($("#sf2").is(":checked")) {
						g = studentMindate
					} else {
						g = otherMindate
					}
					return g
				},
				getMaxdateForCal : function() {
					if ($("#sf2").is(":checked")) {
						D = studentMaxdate
					} else {
						D = otherMaxdate
					}
					return D
				}
			});
	function F() {
		$("#show_all_query_result").click(function() {
			bA = new Array();
			bo = new Array();
			N = new Array();
			$("#train_type_btn_all").removeClass().addClass("btn-all");
			$("#start_time_btn_all").removeClass().addClass("btn-all");
			$("#arrive_time_btn_all").removeClass().addClass("btn-all");
			$("#seat_type_btn_all").removeClass().addClass("btn-all");
			$("#from_station_name_all").removeClass().addClass("btn-all");
			$("#to_station_name_all").removeClass().addClass("btn-all");
			$("#sear-sel-bd input").each(function() {
				if (this.checked) {
					this.checked = false
				}
			});
			if (ax) {
				ax.setComboText("")
			}
			$("#avail_ticket").attr("checked", false);
			aH()
		})
	}
	function at() {
		var cn = $("#queryPriceTemplate").html().replace("<!--", "").replace(
				"-->", "");
		$.templates({
			priceTableTemplate : cn
		});
		var cn = $("#fromStationNameTemplate").html().replace("<!--", "")
				.replace("-->", "");
		$.templates({
			stationNameTableTemplate : cn
		});
		var cn = $("#toStationNameTemplate").html().replace("<!--", "")
				.replace("-->", "");
		$.templates({
			toStationNameTableTemplate : cn
		});
		var cn = $("#seatTypeTemplate").html().replace("<!--", "").replace(
				"-->", "");
		$.templates({
			seatTypeTemplate : cn
		});
		var cn = $("#stationinfoTemplate").html().replace("<!--", "").replace(
				"-->", "");
		$.templates({
			stationinfoTemplate : cn
		})
	}
	function bE(co) {
		dhtmlXCombo_defaultOption.prototype._DrawHeaderButton = function() {
		};
		$("#train_combo_box").hide();
		var cn = [];
		if (!ax) {
			ax = new dhtmlXCombo("train_combo_box_div", "cc", 90)
		} else {
			ax.setComboText("")
		}
		ax.clearAll();
		$(co).each(
				function() {
					cn.push([ this.queryLeftNewDTO.station_train_code,
							this.queryLeftNewDTO.station_train_code ])
				});
		ax.addOption(cn);
		ax.enableFilteringMode(true);
		ax.attachEvent("onChange", function() {
			if (ax.getComboText() != "") {
				if ($("#iLcear").is(":hidden")) {
					$("#iLcear").show()
				}
			}
			aH()
		});
		if (!$("#iLcear")[0]) {
			$(".dhx_combo_box ")
					.append(
							$('<span style="display: none;" class="i-clear dhx_combo_img_iClear" id="iLcear"></span>'));
			$("#iLcear").on("click", function() {
				if (ax) {
					ax.setComboText("");
					$(this).hide()
				}
			})
		}
		$(".dhx_combo_input").on("keyup", function() {
			if ($(this).val() == "") {
				$("#iLcear").hide()
			} else {
				if ($("#iLcear").is(":hidden")) {
					$("#iLcear").show()
				}
			}
		})
	}
	function aq() {
		if (!b9) {
			b9 = new dhtmlXWindows();
			b9.enableAutoViewport(true);
			b9.setSkin("dhx_terrace");
			b9.attachViewportTo("winVP");
			b9.setImagePath(ctx + "resources/js/rich/windows/imgs/")
		}
		$("#username").keydown(function() {
			login_errorMsg_hide()
		});
		$("#password").keydown(function() {
			login_errorMsg_hide()
		})
	}
	function bt() {
		b9.window("login").hide();
		b9.window("login").setModal(false)
	}
	function bv() {
		if (b9.window("login")) {
			b9.window("login").setModal(false);
			b9.window("login").hide()
		}
		a0 = b9.createWindow("login", 0, 0, 400, 350);
		var cn, cp;
		if (typeof (TouLocal) != "undefined"
				&& TouLocal.checkZByTargeElement("")) {
			cn = $(window).width() / 2 - 208;
			cp = ce() + ($(window).height() / 2 - 232)
		} else {
			cn = $(window).width() / 2 - 200;
			cp = ce() + ($(window).height() / 2 - 205)
		}
		a0.attachObject("relogin");
		if (if_show_pass_code_login == "Y") {
			a0.setDimension($("#content").width(), $("#content").height() + 10)
		} else {
			a0.setDimension(530, 343);
			cn = $(window).width() / 2 - 250
		}
		$(".dhtmlx_window_active").height($("#content").height());
		$(".dhtmlx_window_active").css({
			left : cn,
			top : cp
		});
		a0.bringToTop();
		b9.window("login").clearIcon();
		b9.window("login").denyResize();
		a0.button("park").hide();
		a0.button("minmax1").hide();
		a0.hideHeader();
		if (if_show_pass_code_login == "Y") {
			var co = $(".login .touclick-image").attr("src");
			refreshImgUAM("login", "sjrand")
		}
		a0.setModal(true);
		$("#relogin_close").click(function() {
			bh();
			var cq = $(window).scrollTop();
			var cr = $("#float").position().top;
			if (cq > cr + 30) {
				$("#floatTable").show()
			}
			bt()
		});
		if (typeof (touclickHook_leftTicketLogin) === "function") {
			touclickHook_leftTicketLogin()
		}
	}
	function bh() {
		aP();
		$("#username").val("");
		$("#password").val("");
		$("#randCode").val("");
		b3()
	}
	function ce() {
		if ("pageYOffset" in window) {
			return window.pageYOffset
		} else {
			if (document.compatMode == "BackCompat") {
				return document.body.scrollTop
			} else {
				return document.documentElement.scrollTop
			}
		}
	}
	function aP() {
		$("#username").add($("#password")).add($("#randCode")).add(
				$("#randCode2")).removeClass("error")
	}
	function B(cr) {
		var co = /^(13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9])\d{8}$/;
		var cn = /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/;
		var cq = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
		var cp = true;
		aP();
		if ("" == cr || cr == null || cr == uninputmsg || cr == "admin") {
			$("#username").removeClass("inptxt w200").addClass(
					"inptxt w200 error");
			cp = login_messages.userNameEmpty
		} else {
			if (!cn.test(cr) && !cq.test(cr) && !co.test(cr)) {
				$("#username").removeClass("inptxt w200").addClass(
						"inptxt w200 error");
				cp = login_messages.userNameFormat
			}
		}
		return cp
	}
	function bx(cn) {
		var co = true;
		aP();
		if ("" == cn || cn == null) {
			$("#password").removeClass("inptxt w200").addClass(
					"inptxt w200 error");
			co = login_messages.passwordEmpty
		} else {
			if (cn.length < 6) {
				$("#password").removeClass("inptxt w200").addClass(
						"inptxt w200 error");
				co = login_messages.passwordLength
			}
		}
		return co
	}
	function aS() {
		var cp = $.trim($("#username").val());
		var cn = $.trim($("#password").val());
		var co = B(cp);
		return typeof (co) === "boolean" ? bx(cn) : co
	}
	function A() {
		var co = false;
		var cn = false;
		$("#username").on("keyup", function() {
			aB = true
		}).blur(function() {
			if (aB) {
				var cp = $.trim($("#username").val());
				co = B(cp);
				if (if_show_pass_code_login == "Y") {
					if (typeof (co) !== "boolean") {
						showError($("#randCode")[0], co)
					} else {
						if (co === true) {
							showError($("#randCode")[0]).hide()
						}
					}
				} else {
					if (typeof (co) !== "boolean") {
						login_errorMsg(co)
					} else {
						if (co === true) {
							login_errorMsg_hide()
						}
					}
				}
			}
		});
		$("#password").blur(function() {
			if (aB) {
				var cp = $.trim($("#password").val());
				if (if_show_pass_code_login == "Y") {
					if (co === true && typeof (cn = bx(cp)) !== "boolean") {
						showError($("#randCode")[0], cn)
					} else {
						if (co === true && cn === true) {
							showError($("#randCode")[0]).hide()
						}
					}
				} else {
					if (co === true && typeof (cn = bx(cp)) !== "boolean") {
						login_errorMsg(cn)
					} else {
						if (co === true && cn === true) {
							login_errorMsg_hide()
						}
					}
				}
			}
		})
	}
	function aa(co, cn) {
		$("#loginSubAsyn").unbind("click");
		$("#loginSubAsyn")
				.click(
						function() {
							var cp = aS();
							if (if_show_pass_code_login == "Y"
									&& !verifyRandCodeUAM($("#randCode")[0], cp)) {
								return
							}
							if (if_show_pass_code_login == "N"
									&& typeof (cp) !== "boolean") {
								login_errorMsg(cp);
								return
							}
							$
									.ajax({
										url : passport_login,
										data : {
											username : $("#username").val(),
											password : $("#password").val(),
											appid : passport_appId
										},
										dataType : "json",
										type : "POST",
										xhrFields : {
											withCredentials : true
										},
										success : function(cq) {
											if (cq.result_code == 0) {
												$
														.ajax({
															type : "POST",
															url : passport_authuam,
															async : false,
															data : {
																appid : passport_appId
															},
															dataType : "jsonp",
															jsonp : "callback",
															success : function(
																	cr) {
																if (cr.result_code == 0) {
																	var cs = cr.newapptk
																			|| cr.apptk;
																	$
																			.ajax({
																				type : "POST",
																				async : false,
																				url : ctx
																						+ passport_authclient,
																				data : {
																					tk : cs
																				},
																				datatype : "json",
																				success : function(
																						ct) {
																					if (ct.result_code == 0) {
																						bt();
																						loginAsyn(ct.username);
																						S(
																								co,
																								cn)
																					}
																				},
																				error : function() {
																				}
																			})
																}
															},
															error : function() {
															}
														})
											} else {
												if (if_show_pass_code_login == "Y") {
													showSuc($("#randCode")[0])
															.hide()
												} else {
													login_errorMsg_hide()
												}
												if (if_show_pass_code_login == "Y") {
													refreshImgUAM("login",
															"sjrand")
												}
												$("#password").val("");
												$("#randCode").val("");
												if (cq.result_message != null) {
													if (cq.result_message == "登录名不存在!") {
														aB = false;
														aP();
														$("#username")
																.removeClass(
																		"error")
																.focus()
													} else {
														if (cq.result_message == "验证码不正确！"
																&& cq.result_message != "登录名不存在!") {
															aP();
															$("#randCode")
																	.removeClass(
																			"inptxt w100")
																	.addClass(
																			"inptxt w200 error");
															$("#randCode")
																	.focus()
														} else {
															if (cq.result_message != "验证码不正确！"
																	&& cq.result_message != "登录名不存在!") {
																aP();
																$("#password")
																		.removeClass(
																				"inptxt w200")
																		.addClass(
																				"inptxt w200 error");
																$("#password")
																		.focus()
															}
														}
													}
													if (if_show_pass_code_login == "Y") {
														showError(
																$("#randCode")[0],
																cq.result_message)
													} else {
														login_errorMsg(cq.result_message)
													}
												}
											}
										}
									})
						})
	}
	function Z() {
		var cn = false;
		$("#loginSubAsyn").unbind("click");
		$("#loginSubAsyn")
				.click(
						function() {
							if (!cn) {
								var co = aS();
								if (if_show_pass_code_login == "Y"
										&& !verifyRandCodeUAM(
												$("#randCode")[0], co)) {
									cn = false;
									return
								}
								cn = true;
								$("#loginForm")
										.ajaxSubmit(
												{
													url : passport_login,
													data : {
														username : $(
																"#username")
																.val(),
														password : $(
																"#password")
																.val(),
														appid : passport_appId
													},
													dataType : "json",
													type : "POST",
													xhrFields : {
														withCredentials : true
													},
													success : function(cp) {
														if (cp.result_code == 0) {
															$
																	.ajax({
																		type : "POST",
																		url : passport_authuam,
																		async : false,
																		data : {
																			appid : passport_appId
																		},
																		dataType : "jsonp",
																		jsonp : "callback",
																		success : function(
																				cq) {
																			if (cq.result_code == 0) {
																				var cr = cq.newapptk
																						|| cq.apptk;
																				$
																						.ajax({
																							type : "POST",
																							async : false,
																							url : ctx
																									+ passport_authclient,
																							data : {
																								tk : cr
																							},
																							datatype : "json",
																							success : function(
																									cs) {
																								if (cs.result_code == 0) {
																									bt();
																									loginAsyn(cs.username)
																								}
																							},
																							error : function() {
																							}
																						})
																			}
																		},
																		error : function() {
																		}
																	})
														} else {
															$("#i-ok").hide();
															if (if_show_pass_code_login == "Y") {
																refreshImgUAM(
																		"login",
																		"sjrand")
															}
															$("#password").val(
																	"");
															$("#randCode").val(
																	"");
															if (cp.result_message != null) {
																if (cp.result_message == "登录名不存在!") {
																	aB = false;
																	aP();
																	$(
																			"#username")
																			.removeClass(
																					"inptxt w200")
																			.addClass(
																					"inptxt w200 error");
																	$(
																			"#username")
																			.focus()
																} else {
																	if (cp.result_message == "验证码不正确！"
																			&& cp.result_message != "登录名不存在!") {
																		aP();
																		$(
																				"#randCode")
																				.removeClass(
																						"inptxt w100")
																				.addClass(
																						"inptxt w200 error");
																		$(
																				"#randCode")
																				.focus()
																	} else {
																		if (cp.result_message != "验证码不正确！"
																				&& cp.result_message != "登录名不存在!") {
																			aP();
																			$(
																					"#password")
																					.removeClass(
																							"inptxt w200")
																					.addClass(
																							"inptxt w200 error");
																			$(
																					"#password")
																					.focus()
																		}
																	}
																}
																if (if_show_pass_code_login == "Y") {
																	showError(
																			$("#randCode")[0],
																			cp.result_message)
																} else {
																	login_errorMsg(cp.result_message)
																}
															}
														}
													},
													complete : function() {
														cn = false
													}
												})
							}
						})
	}
	function aV() {
		window.sucessCallback = function() {
			by = $("#randCode2").val();
			$("#back_edit").trigger("click");
			var cn = "99999GGGGG";
			var cp = "##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##";
			var co = "##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##";
			if (isAsync == ticket_submit_order.request_flag.isAsync) {
				if (K.queryLeftNewDTO.train_no.indexOf(cn) > -1
						&& cp.indexOf(K.queryLeftNewDTO.from_station_telecode) > -1
						&& co.indexOf(K.queryLeftNewDTO.to_station_telecode) > -1) {
					dhtmlx.createWin({
						winId : "confirmG1234",
						closeWinId : [ "close_conifrmdialog_G1234",
								"cancel_dialog_G1234" ],
						okId : "goto_integration_G1234",
						okCallBack : function() {
							q()
						},
						callback : function() {
							return
						}
					})
				} else {
					q()
				}
			} else {
				if (K.queryLeftNewDTO.train_no.indexOf(cn) > -1
						&& cp.indexOf(K.queryLeftNewDTO.from_station_telecode) > -1
						&& co.indexOf(K.queryLeftNewDTO.to_station_telecode) > -1) {
					dhtmlx.createWin({
						winId : "confirmG1234",
						closeWinId : [ "close_conifrmdialog_G1234",
								"cancel_dialog_G1234" ],
						okId : "goto_integration_G1234",
						okCallBack : function() {
							cl()
						},
						callback : function() {
							return
						}
					})
				} else {
					cl()
				}
			}
			return
		}
	}
	function b3() {
		$("#username").css("color", "#333");
		$("#password").css("color", "#333");
		$("#randCode").css("color", "#333");
		if ($("#username").val() == "" || $("#username").val() == uninputmsg
				|| $("#username").val() == null
				|| $("#username").val() == "admin") {
			$("#username").css("color", "#999");
			$("#username").val(uninputmsg);
			$("#password").val("")
		}
		$("#username").focus(function() {
			var cn = $("#username").val();
			if (cn == uninputmsg) {
				$("#username").css("color", "#333");
				$("#username").val("");
				$("#password").val("")
			}
		}).blur(function() {
			var cn = $("#username").val();
			if (cn == "") {
				$("#username").css("color", "#999");
				$("#username").val(uninputmsg)
			}
		})
	}
	function ag() {
		$("#forget_my_password_id").on("click", function(cn) {
			otsRedirect("post", ctx + "forgetPassword/initforgetMyPassword")
		})
	}
	function aT() {
		var cn = 1;
		var ct;
		var cy;
		var cp;
		var cs = true;
		var cr = true;
		var cw = true;
		var cA;
		var co;
		var cx = false;
		var cu = false;
		var cz = false;
		cp = dataNumber;
		var cv;
		if (train_tour_flag != null && train_tour_flag != ""
				&& train_tour_flag == "fc") {
			cv = jQuery.inArray($("#back_train_date").val().substring(5, 10),
					change_dates_arr)
		} else {
			cv = jQuery.inArray($("#train_date").val().substring(5, 10),
					change_dates_arr)
		}
		if (cv != "-1") {
			cv = cv + 1;
			cA = firstShow;
			co = endShow;
			if (parseInt(cv) >= parseInt(firstShow)
					&& parseInt(cv) <= parseInt(endShow)) {
				if (isOther) {
					if (parseInt(endShow) > parseInt(other_control)) {
						endShow = other_control;
						cu = true;
						cx = true
					}
				} else {
					if (parseInt(endShow) > parseInt(stu_control)) {
						endShow = stu_control
					}
				}
				if (!cu) {
					cs = false;
					cr = false;
					cw = false;
					cy = endShow + 1
				}
			} else {
				cx = true;
				firstShow = cv;
				endShow = firstShow + 19;
				if (isOther) {
					if (parseInt(endShow) > parseInt(other_control)) {
						endShow = other_control;
						cu = true
					}
				} else {
					if (parseInt(endShow) > parseInt(stu_control)) {
						endShow = stu_control;
						cu = true
					}
				}
				if (!cu) {
					ct = firstShow - 1;
					cy = endShow + 1;
					if (ct < cn) {
						cs = false
					}
				}
			}
			if (isOther) {
				if (other_control < dataNumber) {
					cz = true
				}
			} else {
				if (stu_control < dataNumber) {
					cz = true
				}
			}
			if (cu) {
				cx = true;
				firstShow = endShow - 19;
				ct = firstShow - 1;
				if (cz) {
					cr = true;
					cy = endShow + 1;
					cp = dataNumber
				} else {
					cr = false
				}
				if (train_tour_flag != null && train_tour_flag != ""
						&& train_tour_flag == "fc") {
					$("#back_train_date").val(fullDateArr[cv - 1])
				} else {
					$("#train_date").val(fullDateArr[cv - 1])
				}
			}
			if (parseInt(firstShow) < 1) {
				firstShow = 1
			}
			if (cs) {
				for (var cq = cn; cq <= ct; cq++) {
					$("#date_range>ul>li:nth-child(" + cq + ")").hide()
				}
			}
			if (cr) {
				for (var cq = cy; cq <= cp; cq++) {
					$("#date_range>ul>li:nth-child(" + cq + ")").hide()
				}
			}
			if (cw) {
				for (var cq = firstShow; cq <= endShow; cq++) {
					$("#date_range>ul>li:nth-child(" + cq + ")").show()
				}
			}
			$("#date_range>ul>li").removeClass("sel");
			if (cx) {
				$("#date_range>ul>li:nth-child(" + cA + ")").children(
						"span:first").removeClass();
				$("#date_range>ul>li:nth-child(" + cA + ")").children(
						"span:last").removeClass();
				$("#date_range>ul>li:nth-child(" + co + ")").removeClass();
				$("#date_range>ul>li:nth-child(" + firstShow + ")").children(
						"span:first").addClass("first");
				$("#date_range>ul>li:nth-child(" + firstShow + ")").children(
						"span:last").addClass("first");
				$("#date_range>ul>li:nth-child(" + firstShow + ")").children()
						.addClass("first");
				$("#date_range>ul>li:nth-child(" + endShow + ")").addClass(
						"end")
			}
			$("#date_range>ul>li:nth-child(" + cv + ")").addClass("sel");
			$("#date_range>ul>li:nth-child(" + cv + ")").children(
					"span:last-child").removeClass();
			$("#date_range>ul>li:nth-child(" + cv + ")").children(
					"span:first-child").addClass("hide");
			bR = $("#date_range>ul>li:nth-child(" + cv + ")").children(
					"span:first-child").text()
		}
	}
	function bN() {
		$("#query_ticket").unbind("click");
		$("#query_ticket_stu").unbind("click");
		$("#query_ticket").removeClass().addClass("btn92s btn-disabled");
		$("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
		bj();
		setTimeout(function() {
			ck();
			bg();
			$("#query_ticket").removeClass().addClass("btn92s");
			$("#query_ticket_stu").removeClass().addClass("btn92s");
			if (train_tour_flag != "gc" && train_tour_flag != "fc") {
				if (ClickWho == "0X00") {
					$("#query_ticket").unbind();
					$("#query_ticket").removeClass().addClass(
							"btn92s btn-disabled");
					$("#query_ticket_stu").removeClass().addClass("btn92s")
				}
				if (ClickWho == "00") {
					$("#query_ticket_stu").unbind();
					$("#query_ticket_stu").removeClass().addClass(
							"btn92s btn-disabled");
					$("#query_ticket").removeClass().addClass("btn92s")
				}
			}
			if (isstudentDate) {
				$("#query_ticket_stu").unbind();
				$("#query_ticket_stu").removeClass().addClass(
						"btn92s btn-disabled");
				$("#query_ticket").removeClass().addClass("btn92s")
			}
		}, 1000)
	}
	changeArriveDate = function(co, cn) {
		co = co.replace(":", "");
		cn = cn.replace(":", "");
		hour_value = Number(co.substring(0, 2)) + Number(cn.substring(0, 2));
		min_value = Number(co.substring(2, 4)) + Number(cn.substring(2, 4));
		if (min_value >= 60) {
			hour_value = hour_value + 1
		}
		if (hour_value >= 24 && hour_value < 48) {
			return "次日"
		} else {
			if (hour_value >= 48 && hour_value < 72) {
				return "两日"
			} else {
				if (hour_value >= 72) {
					return "三日"
				} else {
					return "当日"
				}
			}
		}
	};
	changeLiShi = function(cn) {
		if (cn.substring(0, 1) == "0") {
			if (cn.substring(1, 2) == "0") {
				if (cn.substring(3, 4) == "0") {
					cn = cn.substring(4, 5) + "分"
				} else {
					cn = cn.substring(3, 5) + "分"
				}
			} else {
				cn = cn.substring(1, 2) + "小时" + cn.substring(3, 5) + "分"
			}
		} else {
			if (cn.substring(3, 5) == "00") {
				cn = cn.substring(0, 2) + "小时"
			} else {
				cn = cn.substring(0, 2) + "小时" + cn.substring(3, 5) + "分"
			}
		}
		return cn
	};
	isNum = function(cn) {
		return parseInt(cn)
	};
	buttonText = function() {
		return "预订"
	};
	function ao() {
		if ($("#sf2").is(":checked")) {
			if (C($("#train_date").val()) > C(init_maxPeriod) - 24 * 60 * 60
					* 1000) {
				bj()
			} else {
				bg()
			}
		}
	}
	function ap() {
		if (train_tour_flag == "fc") {
			var cn = $("#back_train_date").val();
			z("back_train_date")
		} else {
			var cn = $("#train_date").val();
			z("train_date")
		}
		if (rqChecked.length == 0) {
			rqChecked.push(cn)
		}
		var co = false;
		if (cn != rqChecked[0]) {
			for (var cp = 0; cp < rqChecked.length; cp++) {
				if (cn == rqChecked[cp]) {
					co = true;
					rqChecked.splice(cp, 1);
					$("#date-list input[scode=" + rqChecked[0] + "]").prop(
							"checked", false);
					rqChecked.splice(0, 1, cn);
					$("#prior_date span[name=" + cn + "]").remove();
					break
				}
			}
			if (!co) {
				$("#date-list input[scode=" + rqChecked[0] + "]").prop(
						"checked", false);
				rqChecked.splice(0, 1, cn);
				$("#date-list input[scode=" + rqChecked[0] + "]").prop(
						"checked", true)
			}
		}
	}
	$("#train_date").focus(function() {
		$("#train_date").jcalendar({
			isSingle : false,
			startDate : $.getMindateForCal(),
			endDate : $.getMaxdateForCal(),
			onpicked : function() {
				ap();
				$("#train_date").blur();
				var cn = $("#train_date").val();
				var co = $("#back_train_date").val();
				if ($("#wf").is(":checked")) {
					if (!co | C(cn) > C(co)) {
						$("#back_train_date").val(cn)
					}
				}
				aT()
			}
		})
	});
	$("#date_icon_1").click(function() {
		$("#train_date").focus()
	});
	$("#back_train_date").focus(function() {
		$("#back_train_date").jcalendar({
			isSingle : false,
			startDate : $("#train_date").val(),
			endDate : $.getMaxdateForCal(),
			onpicked : function() {
				ap();
				$("#back_train_date").blur();
				aT()
			}
		})
	});
	$("#date_icon_2").click(function() {
		$("#back_train_date").focus()
	});
	String.prototype.toDate = function() {
		style = "yyyy-MM-dd hh:mm";
		var cq = {
			"y+" : "y",
			"M+" : "M",
			"d+" : "d",
			"h+" : "h",
			"m+" : "m"
		};
		var cn = {
			y : "",
			M : "",
			d : "",
			h : "00",
			m : "00"
		};
		var cp = style;
		for ( var co in cq) {
			if (new RegExp("(" + co + ")").test(style)) {
				cn[cq[co]] = this.substring(cp.indexOf(RegExp.$1), cp
						.indexOf(RegExp.$1)
						+ RegExp.$1.length)
			}
		}
		return new Date(cn.y, cn.M - 1, cn.d, cn.h, cn.m)
	};
	function z(cr) {
		if (cr == "back_train_date" && ClickWho != "0X00") {
			return
		}
		var cn = ($("#" + cr).val().split(" ")[0] + " 00:00:00").toDate()
				.getTime();
		var ct = stu_start_train_date.split("&");
		var cp = stu_end_tain_date.split("&");
		var co = false;
		for (var cq = 0, cs = ct.length; cq < cs; cq++) {
			if (cn >= ct[cq].toDate().getTime()
					&& cn <= cp[cq].toDate().getTime()) {
				co = true;
				break
			}
		}
		if (co) {
			$("#sf2").attr("disabled", false);
			$("#sf2_label").removeClass("color999")
		} else {
			$("#sf2").attr("checked", false);
			$("#sf1")[0]["checked"] = "checked";
			$("#sf2").attr("disabled", true);
			$("#sf2_label").addClass("color999")
		}
	}
	function bX(cn) {
		if (isSaveQueryLog == "Y") {
			$.ajax({
				type : "get",
				isTakeParam : false,
				beforeSend : function(co) {
					co.setRequestHeader("If-Modified-Since", "0");
					co.setRequestHeader("Cache-Control", "no-cache")
				},
				url : ctx + "leftTicket/log",
				data : cn,
				timeout : 15000,
				error : function(co, cq, cp) {
				},
				success : function(co) {
				}
			})
		}
	}
	var aR = 0;
	var X = new Array();
	function U() {
		$("div#id-seat-sel div.sel-item a").on("click", function() {
			if ($(this).attr("class") == "cur") {
				$(this).removeClass("cur");
				aR--;
				var co = $(this).attr("id");
				$.each(X, function(cp, cr) {
					var cq = $(cr).attr("id");
					if (co == cq) {
						X.splice(cp, 1)
					}
				});
				$("#selectNo").html(aR + "/" + tickets_info.length)
			} else {
				X.push($(this));
				$(this).addClass("cur");
				if (aR == tickets_info.length) {
					var cn = X[aR - 1];
					$(cn).removeClass("cur");
					X.splice(aR - 1, 1);
					return
				}
				aR++;
				$("#selectNo").html(aR + "/" + tickets_info.length)
			}
		})
	}
	function T() {
		ak();
		if (tickets_info && tickets_info.length > 0) {
			var cr = "Y";
			var cn = tickets_info[0].seat_type;
			for (var cq = 0; cq < tickets_info.length; cq++) {
				var cp = tickets_info[cq];
				if (cp.seat_type != cn) {
					cr = "N";
					break
				}
			}
			if (canChooseSeats && "Y" == canChooseSeats && "Y" == cr) {
				if (choose_Seats) {
					var co = "*如果本次列车剩余席位无法满足您的选座需求，系统将自动为您分配席位。";
					if ("M" == cn && choose_Seats.indexOf("M") > -1) {
						$("#id-seat-sel").css("display", "block");
						$("#yideng1").css("display", "block");
						if (tickets_info.length > 1) {
							$("#yideng2").css("display", "block")
						}
						$("#notice_1_id").html(co)
					}
					if ("O" == cn && choose_Seats.indexOf("O") > -1) {
						$("#id-seat-sel").css("display", "block");
						$("#erdeng1").css("display", "block");
						if (tickets_info.length > 1) {
							$("#erdeng2").css("display", "block")
						}
						$("#notice_1_id").html(co)
					}
					if ("P" == cn && choose_Seats.indexOf("P") > -1) {
						$("#id-seat-sel").css("display", "block");
						$("#tedeng1").css("display", "block");
						if (tickets_info.length > 1) {
							$("#tedeng2").css("display", "block")
						}
						$("#notice_1_id").html(co)
					}
					if ("9" == cn && choose_Seats.indexOf("9") > -1) {
						$("#id-seat-sel").css("display", "block");
						$("#tedeng1").css("display", "block");
						if (tickets_info.length > 1) {
							$("#tedeng2").css("display", "block")
						}
						$("#notice_1_id").html(co)
					}
				}
			}
		}
	}
	function ak() {
		$("div#id-seat-sel div.sel-item a").removeClass("cur");
		aR = 0;
		X = new Array();
		$("#selectNo").html(aR + "/" + tickets_info.length);
		$("#id-seat-sel.sel-item").css("display", "none");
		$("#id-seat-sel").css("display", "none");
		$("#notice_1_id").html("");
		$("#yideng1").css("display", "none");
		$("#yideng2").css("display", "none");
		$("#erdeng1").css("display", "none");
		$("#erdeng2").css("display", "none");
		$("#tedeng1").css("display", "none");
		$("#tedeng2").css("display", "none")
	}
	function bD() {
		var cn = "";
		$.each($("div#id-seat-sel div.seat-sel-bd a"), function() {
			if ($(this).attr("class") == "cur") {
				var co = $(this).attr("id");
				cn += co
			}
		});
		return cn
	}
	function bk() {
		if (aR != 0 && aR != tickets_info.length) {
			$("#sy_ticket_num_id").html(
					"<span style='color:red;'>请按照乘车人个数选座对应的席位。</span>");
			return false
		} else {
			return true
		}
	}
	function b6() {
		b0();
		if (tickets_info && tickets_info.length > 0) {
			if (canChooseBeds && "Y" == canChooseBeds) {
				$("#id-bed-sel").css("display", "block");
				$("#notice_1_id").html("*选铺后如果系统票额不足，系统将随机为您申请铺位。");
				if (isCanChooseMid && "Y" == isCanChooseMid) {
					$("#mid_bed").css("display", "block")
				} else {
					$("#mid_bed").css("display", "none")
				}
			} else {
				$("#id-bed-sel").css("display", "none")
			}
		}
	}
	numSet = function(cq, cn) {
		var cv = parseInt($("#x_no").text());
		var cr = parseInt($("#z_no").text());
		var cp = parseInt($("#s_no").text());
		var ct = tickets_info.length;
		var co = cv + cr + cp;
		if ("add" == cq) {
			if (co < ct) {
				var cu = document.getElementById(cn).innerText;
				var cs = parseInt(cu) + 1;
				document.getElementById(cn).innerText = cs;
				$("#selectBedNo").html(co + 1 + "/" + ct)
			}
		} else {
			var cu = document.getElementById(cn).innerText;
			if (co > 0 && parseInt(cu) > 0) {
				var cs = parseInt(cu) - 1;
				document.getElementById(cn).innerText = cs;
				$("#selectBedNo").html(co - 1 + "/" + ct)
			}
		}
	};
	function b0() {
		$("#x_no").html("0");
		$("#z_no").html("0");
		$("#s_no").html("0");
		$("#selectBedNo").html(0 + "/" + tickets_info.length);
		$("#confirmDiv").css("padding", "20px 0");
		$("#checktrain").css("display", "none")
	}
	function aL() {
		var cn = $("#x_no").text();
		var co = $("#z_no").text();
		var cp = $("#s_no").text();
		return cn + co + cp
	}
})();
function checkG1234(g, f, c, h, b) {
	var a = "99999GGGGG";
	var e = "##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##";
	var d = "##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##";
	if (c.indexOf(a) > -1 && e.indexOf(h) > -1 && d.indexOf(b) > -1) {
		dhtmlx
				.createWin({
					winId : "confirmG1234",
					closeWinId : [ "close_conifrmdialog_G1234",
							"cancel_dialog_G1234" ],
					okId : "goto_integration_G1234",
					okCallBack : function() {
						submitOrderRequest(g, f)
					},
					callback : function() {
						return
					}
				})
	} else {
		submitOrderRequest(g, f)
	}
}
function refreshImgUAM(c, e, d) {
	if ($(".login .touclick-image").attr("src").indexOf(passport_captcha) != -1) {
		TouClick.get("touclick-" + TouLocal.getRandCodeName(d)).reload();
		return
	}
	var h = "randCode";
	if (targetelement[0] !== "") {
		h += "_" + targetelement[0]
	}
	var b = $("#" + targetdiv[0]), g = b.data("code_type");
	var j = "sjrand";
	var f = "E";
	var a = passport_captcha + "?login_site=" + f + "&module=" + g + "&rand="
			+ j;
	TouClick.ready(function() {
		var k = TouClick.get("touclick-" + h).start({
			gp_url : a,
			onClick : function(m) {
				var o = $("#" + h);
				o.val(m);
				var n = $("#error_msg" + targetdiv[0]);
				var l = o[0];
				if (n.data("tag") === 1) {
					n.hide()
				}
			},
			onReload : function() {
				$("#" + h).val("");
				$("#error_msg").css("display", "none");
				var l = $.jc_getcookie("current_captcha_type")
			},
			onReloading : function() {
				return true
			}
		})
	});
	TouClick.get("touclick-" + TouLocal.getRandCodeName(d)).reload();
	$(".login .touclick-image").attr("src", a)
}
function verifyRandCodeUAM(d, b) {
	if (typeof (b) !== "boolean") {
		showError(d, b);
		return false
	}
	var a = d.value;
	var c = typeof (TouLocal.getErrorMessage) === "function" ? TouLocal
			.getErrorMessage(d) : login_messages.pleaseClickCaptcha;
	if ("" == a || null == a) {
		showError(d, c, 1);
		return false
	}
	if (!checkRandCodeUAM(d)) {
		c = typeof (TouLocal.getErrorMessage) === "function" ? TouLocal
				.getErrorMessage(d, false) : login_messages.pleaseClickCaptcha;
		showError(d, c, 1);
		return false
	}
	showError(d).hide();
	return true
}
function checkRandCodeUAM(e) {
	var b = false, a = e.value, c = "sjrand", d = TouClick.get("touclick-"
			+ e.id);
	var f = $.jc_getcookie("uamsession");
	$.ajax({
		url : passport_captcha_check,
		type : "post",
		dataType : "json",
		xhrFields : {
			withCredentials : true
		},
		data : {
			answer : a,
			login_site : "E",
			rand : c
		},
		async : false,
		success : function(g) {
			if (g.result_code == "4") {
				b = true;
				d.success();
				setTimeout(function() {
					if (d.getState() === "success") {
						d.reload()
					}
				}, 3000)
			} else {
				b = false;
				var h = g.result_message;
				d.fail()
			}
		}
	});
	return b
};
var left_ticket_messages = {
	"leftTicketDTO.from_station" : "出发站",
	"leftTicketDTO.to_station" : "目的站",
	"leftTicketDTO.train_no" : "车次",
	"leftTicketDTO.train_date" : "出发日",
	back_train_date : "返程日"
};
jQuery.validator
		.addMethod(
				"checkLoginUserName",
				function(f, d) {
					var a = false;
					var c = /^(13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9])\d{8}$/;
					var b = /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/;
					var e = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
					if (b.test(f) || e.test(f) || c.test(f)) {
						a = true
					}
					return this.optional(d) || a
				}, "wrong username.");
jQuery.validator.addMethod("requiredUserName", function(b, a) {
	if ("用户名／邮箱／手机号" == b) {
		return false
	}
	if (b == null || "" == b) {
		return false
	}
	return true
}, "wrong username.");
jQuery.validator.addMethod("requiredSchoolName", function(b, a) {
	if ("简码／汉字" == b) {
		return false
	}
	if (b == null || "" == b) {
		return false
	}
	return true
}, "wrong schoolname.");
jQuery.validator.addMethod("randCodeRequired", function(b, a) {
	$("#i-ok").css("display", "none");
	return b.length > 0
}, "验证码错误!");
jQuery.validator.addMethod("randCodeFormat", function(c, b) {
	$("#i-ok").css("display", "none");
	var a = /^[a-zA-Z0-9]+$/;
	return this.optional(b) || a.test(c)
}, "验证码错误!");
jQuery.validator.addMethod("randCodeLength", function(b, a) {
	$("#i-ok").css("display", "none");
	return b.length == 4
}, "验证码错误!.");
jQuery.validator.addMethod("integrationCheck", function(b, a) {
	var c = /^\d{6}$/;
	return this.optional(a) || c.test(b)
}, "wrong integrationpassword");
jQuery.validator.addMethod("integrationPwdCheck", function(b, a, c) {
	if ($("#" + c[0]).val() == $("#" + c[1]).val()) {
		return true
	}
	return false
}, "两次输入密码不一致!.");
jQuery.validator.addMethod("checkRandCode", function(c, b, d) {
	var a = true;
	if (c && c.length == 4) {
		$.ajax({
			url : ctx + "passcodeNew/checkRandCodeAnsyn",
			type : "post",
			data : {
				randCode : c,
				rand : d
			},
			async : false,
			success : function(e) {
				if (e.data == "N") {
					a = false;
					$("#i-ok").css("display", "none")
				} else {
					a = true;
					$("#i-ok").css("display", "block")
				}
			}
		})
	} else {
		a = false;
		$("#i-ok").css("display", "none")
	}
	return a
}, "验证码错误!.");
jQuery.validator.addMethod("validateUsersName", function(b, a) {
	return this.optional(a) || /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/.test(b)
}, "用户名只能由字母、数字或_组成");
jQuery.validator.addMethod("checkWriteSpace", function(c, b) {
	for (var a = 0; a < c.length; a++) {
		if (c.charCodeAt(a) == 32) {
			return false
		}
	}
	return true
}, "contain writespace");
jQuery.validator.addMethod("validateRandCode", function(b, a) {
	return this.optional(a) || /^[a-zA-Z0-9]+$/.test(b)
}, "验证码错误!.");
jQuery.validator.addMethod("checkPassward", function(c, b, e) {
	var d = true;
	for (var a = 0; a < c.length; a++) {
		if (c.charCodeAt(a) == 39 || c.charCodeAt(a) == 60
				|| c.charCodeAt(a) == 62) {
			d = false
		}
		if (!d) {
			break
		}
	}
	return this.optional(b) || d
}, "Passward wrong");
function validateSecIdCard(g) {
	var f = 0;
	var a = g;
	var e = {
		11 : "北京",
		12 : "天津",
		13 : "河北",
		14 : "山西",
		15 : "内蒙",
		21 : "辽宁",
		22 : "吉林",
		23 : "黑龙",
		31 : "上海",
		32 : "江苏",
		33 : "浙江",
		34 : "安徽",
		35 : "福建",
		36 : "江西",
		37 : "山东",
		41 : "河南",
		42 : "湖北",
		43 : "湖南",
		44 : "广东",
		45 : "广西",
		46 : "海南",
		50 : "重庆",
		51 : "四川",
		52 : "贵州",
		53 : "云南",
		54 : "西藏",
		61 : "陕西",
		62 : "甘肃",
		63 : "青海",
		64 : "宁夏",
		65 : "新疆",
		71 : "台湾",
		81 : "香港",
		82 : "澳门",
		91 : "国外"
	};
	if (!/^\d{17}(\d|x)$/i.test(a)) {
		return false
	}
	a = a.replace(/x$/i, "a");
	if (e[parseInt(a.substr(0, 2))] == null) {
		return false
	}
	var c = a.substr(6, 4) + "-" + Number(a.substr(10, 2)) + "-"
			+ Number(a.substr(12, 2));
	var h = new Date(c.replace(/-/g, "/"));
	if (c != (h.getFullYear() + "-" + (h.getMonth() + 1) + "-" + h.getDate())) {
		return false
	}
	for (var b = 17; b >= 0; b--) {
		f += (Math.pow(2, b) % 11) * parseInt(a.charAt(17 - b), 11)
	}
	if (f % 11 != 1) {
		return false
	}
	return true
}
function validateFirIdCard(g) {
	var f = 0;
	var a;
	var e = {
		11 : "北京",
		12 : "天津",
		13 : "河北",
		14 : "山西",
		15 : "内蒙",
		21 : "辽宁",
		22 : "吉林",
		23 : "黑龙",
		31 : "上海",
		32 : "江苏",
		33 : "浙江",
		34 : "安徽",
		35 : "福建",
		36 : "江西",
		37 : "山东",
		41 : "河南",
		42 : "湖北",
		43 : "湖南",
		44 : "广东",
		45 : "广西",
		46 : "海南",
		50 : "重庆",
		51 : "四川",
		52 : "贵州",
		53 : "云南",
		54 : "西藏",
		61 : "陕西",
		62 : "甘肃",
		63 : "青海",
		64 : "宁夏",
		65 : "新疆",
		71 : "台湾",
		81 : "香港",
		82 : "澳门",
		91 : "国外"
	};
	if (g.length == 15) {
		a = idCardUpdate(g)
	} else {
		a = g
	}
	if (!/^\d{17}(\d|x)$/i.test(a)) {
		return false
	}
	a = a.replace(/x$/i, "a");
	if (e[parseInt(a.substr(0, 2))] == null) {
		return false
	}
	var c = a.substr(6, 4) + "-" + Number(a.substr(10, 2)) + "-"
			+ Number(a.substr(12, 2));
	var h = new Date(c.replace(/-/g, "/"));
	if (c != (h.getFullYear() + "-" + (h.getMonth() + 1) + "-" + h.getDate())) {
		return false
	}
	for (var b = 17; b >= 0; b--) {
		f += (Math.pow(2, b) % 11) * parseInt(a.charAt(17 - b), 11)
	}
	if (f % 11 != 1) {
		return false
	}
	return true
}
function idCardUpdate(g) {
	var b;
	var f = /^(\d){15}$/;
	if (f.test(g)) {
		var e = 0;
		var a = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
		var d = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
		g = g.substr(0, 6) + "19" + g.substr(6, g.length - 6);
		for (var c = 0; c < g.length; c++) {
			e += parseInt(g.substr(c, 1)) * a[c]
		}
		g += d[e % 11];
		b = g
	} else {
		b = "#"
	}
	return b
}
jQuery.validator.addMethod("checkBorth", function(e, c) {
	var b = e;
	if (b == "") {
		return true
	} else {
		var a = b.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
		if (a == null) {
			return false
		}
		var f = new Date(a[1], a[3] - 1, a[4]);
		return (f.getFullYear() == a[1] && (f.getMonth() + 1) == a[3] && f
				.getDate() == a[4])
	}
}, "日期格式不合法");
jQuery.validator.addMethod("byteRangeLength", function(d, b, e) {
	var c = d.length;
	for (var a = 0; a < d.length; a++) {
		if (d.charCodeAt(a) > 127) {
			c++
		}
	}
	return this.optional(b) || (c >= e[0] && c <= e[1])
}, "length wrong");
jQuery.validator.addMethod("checkNameCharBlank", function(c, b, d) {
	var a = d.split("@");
	if ($("#" + a[1]).val() == "") {
		return true
	} else {
		if ($("#" + a[0]).val() == "1" || $("#" + a[0]).val() == "2") {
			return this.optional(b) || /^[a-zA-Z·.．\u3400-\u9FFF]+$/.test(c)
		} else {
			if ($("#" + a[0]).val() == "B") {
				if (/^[-]+$/.test(c)) {
					return false
				}
				return this.optional(b)
						|| /^[a-z A-Z·.．\u3400-\u9FFF\-]+$/.test(c)
			} else {
				if ($("#" + a[0]).val() == "H") {
					if (/^[-]+$/.test(c)) {
						return false
					}
					return this.optional(b)
							|| /^[a-z A-Z·。.．\u3400-\u9FFF-]+$/.test(c)
				} else {
					return this.optional(b)
							|| /^[a-z A-Z·.．\u3400-\u9FFF]+$/.test(c)
				}
			}
		}
	}
}, "wrong name.");
jQuery.validator.addMethod("checkIdValidStr", function(c, b) {
	var a = /^[a-zA-Z0-9\_\-\(\)]+$/;
	return this.optional(b) || (a.test(c))
}, "wrong id");
jQuery.validator.addMethod("isSecIDCard", function(b, a, c) {
	if (!checkIfSecIdCard($(c).val())) {
		return true
	}
	return validateSecIdCard(b)
}, "wrong");
function checkIfSecIdCard(a) {
	if (a == "1") {
		return true
	}
	return false
}
function checkIfFirIdCard(a) {
	if (a == "2") {
		return true
	}
	return false
}
function checkCardForHKorTW(a) {
	if (a == "C" || a == "G") {
		return true
	}
	return false
}
jQuery.validator.addMethod("isFirIDCard", function(b, a, c) {
	if (!checkIfFirIdCard($(c).val())) {
		return true
	}
	return validateFirIdCard(b)
}, "wrong");
jQuery.validator.addMethod("checkHkongMacao", function(c, b, d) {
	if ($(d).val() == "C") {
		var a = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;
		return this.optional(b) || (a.test(c))
	} else {
		return true
	}
}, "wrong format.");
jQuery.validator.addMethod("checkTaiw", function(c, a, e) {
	if ($(e).val() == "G") {
		var d = /^[0-9]{8}$/;
		var b = /^[0-9]{10}$/;
		return this.optional(a) || (d.test(c)) || (b.test(c))
	} else {
		return true
	}
}, "wrong format.");
jQuery.validator.addMethod("checkPassport", function(d, b, e) {
	if ($(e).val() == "B") {
		var c = /^[a-zA-Z]{5,17}$/;
		var a = /^[a-zA-Z0-9]{5,17}$/;
		return this.optional(b) || (a.test(d)) || c.test(d)
	} else {
		return true
	}
}, "wrong format.");
jQuery.validator.addMethod("checkWork", function(c, b, d) {
	if ($(d).val() == "H") {
		var a = /^[a-zA-Z]{3}[0-9]{12}$/;
		return this.optional(b) || (a.test(c))
	} else {
		return true
	}
}, "wrong format.");
jQuery.validator.addMethod("isMobile", function(d, b) {
	var c = d.length;
	var a = /^(13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9])\d{8}$/;
	return this.optional(b) || (c == 11 && a.test(d))
}, "wrong mobile phone ");
jQuery.validator
		.addMethod(
				"isTelePhone",
				function(b, a) {
					var c = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^[0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}#)/;
					return this.optional(a) || (c.test(b))
				}, "wrong telePhone ");
jQuery.validator.addMethod("illegalChar", function(c, b, e) {
	var d = true;
	if (c.indexOf("$") >= 0) {
		return false
	}
	for (var a = 0; a < c.length; a++) {
		if (c.charCodeAt(a) == 39 || c.charCodeAt(a) == 60
				|| c.charCodeAt(a) == 62 || c.charCodeAt(a) == 34
				|| c.charCodeAt(a) == 63) {
			d = false
		}
		if (!d) {
			break
		}
	}
	return this.optional(b) || d
}, "Illegal char wrong");
jQuery.validator.addMethod("isZipCode", function(c, b) {
	var a = /^[0-9]{6}$/;
	return this.optional(b) || (a.test(c))
}, "wrong zipcode");
jQuery.validator.addMethod("isEmail", function(c, a) {
	var b = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return this.optional(a) || (b.test(trim(c)))
}, "wrong email");
function replaceChar(b) {
	var a = b.value.replace(/['"<> ?]/g, "");
	b.value = a
}
function checkNameChar1(a) {
	return /^[a-zA-Z0-9\u3400-\u9FFF]+$/.test(a)
}
function trim(a) {
	return a.replace(/(^\s*)|(\s*$)/g, "")
}
function ltrim(a) {
	return a.replace(/(^\s*)/g, "")
}
function rtrim(a) {
	return a.replace(/(\s*$)/g, "")
}
jQuery.validator.addMethod("validateName", function(b, a) {
	return this.optional(a) || /^[a-zA-Z\u3400-\u9FFF0-9\_]+$/.test(b)
}, "wrong username.");
jQuery.validator.addMethod("studentRequired", function(b, a, c) {
	if ($(c).val() == "3") {
		return b && trim(b) != ""
	}
	return true
}, "wrong studentRequired.");
jQuery.validator.addMethod("studentStationRequired", function(b, a, c) {
	if ($(c).val() == "3") {
		return b && trim(b) != "简拼/全拼/汉字" && trim(b) != ""
	}
	return true
}, "wrong studentStationRequired.");
jQuery.validator.addMethod("studentValidateName", function(b, a, c) {
	if ($(c).val() == "3") {
		return this.optional(a) || /^[a-zA-Z\u3400-\u9FFF0-9\_]+$/.test(b)
	}
	return true
}, "wrong username.");
jQuery.validator.addMethod("checkStudentName", function(b, a, c) {
	if ($(c).val() == "3") {
		if ((!b || trim(b) == "" || trim(b) == "简码/汉字")) {
			return false
		}
	}
	return true
}, "wrong username.");
jQuery.validator.addMethod("isQuestionNull", function(b, a, c) {
	if (jQuery.trim(b) != "") {
		if (jQuery.trim($(c[0]).val()) == "customQuestion"
				&& jQuery.trim($(c[1]).val()) == ""
				|| jQuery.trim($(c[0]).val()) == "") {
			return false
		}
	}
	return true
}, "you should input the question");
jQuery.validator.addMethod("isAnswerNull", function(b, a, c) {
	if ((jQuery.trim($(c[0]).val()) == "customQuestion" && jQuery.trim($(c[1])
			.val()) != "")
			|| (jQuery.trim($(c[0]).val()) != "")) {
		if (jQuery.trim(b) == "") {
			return false
		}
	}
	return true
}, "you should input the answer");
function checkSex(c, b, a) {
	if (!checkSexByCardId(c, b, a)) {
		if (!confirm("性别与身份证中的性别不符，是否继续?")) {
			return false
		} else {
			return true
		}
	} else {
		return true
	}
}
function checkSexByCardId(c, e, a) {
	function b(h, i) {
		var g = null;
		if (i.length == 15) {
			g = i.substring(14, 15)
		} else {
			if (i.length == 18) {
				g = i.substring(16, 17)
			} else {
				return true
			}
		}
		if (g == "x" || g == "X") {
			g = "10"
		}
		var f = parseInt(g);
		var j = f % 2;
		if (j === 0 && h === "F") {
			return true
		} else {
			if (j === 1 && h === "M") {
				return true
			} else {
				return false
			}
		}
	}
	var d = $(a).val();
	if (checkIfSecIdCard($(e).val()) && validateSecIdCard(d)) {
		if (d !== "") {
			return b(c, d)
		} else {
			return true
		}
	} else {
		if (checkIfFirIdCard($(e).val()) && validateFirIdCard(d)) {
			if (d !== "") {
				return b(c, d)
			} else {
				return true
			}
		} else {
			return true
		}
	}
}
function checkBirdDateByCardId(c, e, b) {
	var a = null;
	var d = $(b).val();
	if (checkIfSecIdCard($(e).val()) && d !== "" && validateSecIdCard(d)) {
		a = d.substring(6, 14)
	} else {
		if (checkIfFirIdCard($(e).val()) && d !== "" && validateFirIdCard(d)) {
			if (d.length == 15) {
				a = "19" + d.substring(6, 12)
			} else {
				if (d.length == 18) {
					a = d.substring(6, 14)
				}
			}
		} else {
			return true
		}
	}
	if (c !== "") {
		c = c.replace(/-/g, "");
		if (c != a) {
			return false
		} else {
			return true
		}
	} else {
		return true
	}
}
function checkBirdate(c, b, a) {
	if (!checkBirdDateByCardId(c, b, a)) {
		if (!confirm("出生日期与身份证中的出生日期不符，是否继续?")) {
			return false
		} else {
			return true
		}
	} else {
		return true
	}
}
jQuery.validator.addMethod("checkPwdValidate", function(b, a) {
	return this.optional(a)
			|| /(?![a-z]+$|[0-9]+$|_+$)^[a-zA-Z0-9_]{6,}$/.test(b)
}, "contain writespace");
jQuery.validator.addMethod("checkConfirmPassWard", function(b, a, c) {
	if ($(c).val() != null) {
		return $(c).val() == b
	}
	return true
}, "contain writespace");
jQuery.validator.addMethod("IVR_passwd_format", function(b, a) {
	var c = /^[0-9]{6}$/;
	return this.optional(a) || c.test(b)
}, "验证码错误!.");
jQuery.validator
		.addMethod(
				"checkStation",
				function(b, a) {
					if ((!b || trim(b) == "" || trim(b) == "简拼/全拼/汉字" || trim(b) == "简拼/全拼/汉字或↑↓")) {
						return false
					}
					return true
				}, "wrong username.");
jQuery.validator.addMethod("checkAnsyUserName", function(e, c, f) {
	var b = f[0];
	var d = $("#" + f[1]).val();
	var a = true;
	$.ajax({
		url : b + "?user_name=" + e,
		type : "get",
		async : false,
		success : function(g, h) {
			if (g.data == true) {
				a = false
			} else {
				a = true
			}
		},
		error : function(g, i, h) {
			a = false
		}
	});
	return a
}, "wrong cardNo");
function checkPwdRank(e, a, d) {
	var b = $(e);
	var c = b.val();
	if (c.length <= 6 || new RegExp("^[a-zA-Z]{6,}$").test(c)
			|| new RegExp("^[0-9]{6,}$").test(c)
			|| new RegExp("^[_]{6,}$").test(c)) {
		$("#" + a).attr("title", "危险");
		$("#" + d).html("危险");
		$("#" + a).removeClass("rank-a");
		$("#" + a).removeClass("rank-b");
		$("#" + a).removeClass("rank-c");
		$("#" + a).addClass("rank-a")
	} else {
		if (c.length > 6 && new RegExp("[a-zA-Z]").test(c)
				&& new RegExp("[0-9]").test(c) && new RegExp("[_]").test(c)) {
			$("#" + a).attr("title", "安全");
			$("#" + d).html("安全");
			$("#" + a).removeClass("rank-a");
			$("#" + a).removeClass("rank-b");
			$("#" + a).removeClass("rank-c");
			$("#" + a).addClass("rank-c")
		} else {
			$("#" + a).attr("title", "一般");
			$("#" + d).html("一般");
			$("#" + a).removeClass("rank-a");
			$("#" + a).removeClass("rank-b");
			$("#" + a).removeClass("rank-c");
			$("#" + a).addClass("rank-b")
		}
	}
}
Array.prototype.unique = function() {
	var b = {}, a = this.length;
	for (var c = 0; c < a; c++) {
		if (typeof b[this[c]] == "undefined") {
			b[this[c]] = 1
		}
	}
	this.length = 0;
	a = 0;
	for ( var c in b) {
		this[a++] = c
	}
	return this
};
function checkSearchPwdRank(h, c, g) {
	var e = $(h);
	var f = e.val();
	if (f.length < 6) {
		$("#" + c).attr("title", "危险");
		$("#" + g).html("危险");
		$("#" + c).removeClass("rank-a");
		$("#" + c).removeClass("rank-b");
		$("#" + c).removeClass("rank-c");
		$("#" + c).addClass("rank-a")
	} else {
		var a = [];
		for (var b = 0; b < 6; b++) {
			a.push(f.charAt(b))
		}
		a = a.unique();
		var d = a.length;
		if (d == 1) {
			$("#" + c).attr("title", "危险");
			$("#" + g).html("危险");
			$("#" + c).removeClass("rank-a");
			$("#" + c).removeClass("rank-b");
			$("#" + c).removeClass("rank-c");
			$("#" + c).addClass("rank-a")
		} else {
			if (d > 1 && d < 5) {
				$("#" + c).attr("title", "一般");
				$("#" + g).html("一般");
				$("#" + c).removeClass("rank-a");
				$("#" + c).removeClass("rank-b");
				$("#" + c).removeClass("rank-c");
				$("#" + c).addClass("rank-b")
			} else {
				$("#" + c).attr("title", "安全");
				$("#" + g).html("安全");
				$("#" + c).removeClass("rank-a");
				$("#" + c).removeClass("rank-b");
				$("#" + c).removeClass("rank-c");
				$("#" + c).addClass("rank-c")
			}
		}
	}
}
jQuery.validator.addMethod("checkDetailAddress", function(b, a) {
	return this.optional(a) || /^[0-9a-zA-Z\u3400-\u9FFF\#]+$/.test(b)
}, "wrong name.");
jQuery.validator.addMethod("checkAddressName", function(b, a) {
	if (/^[-]+$/.test(b)) {
		return false
	}
	return this.optional(a) || /^[a-z A-Z·.．\u3400-\u9FFF\-]+$/.test(b)
			|| /^[a-zA-Z·.．\u3400-\u9FFF]+$/.test(b)
}, "wrong name.");
jQuery.validator.addMethod("checkAddressSelect", function(b, a) {
	if ("" == b) {
		return false
	}
	if (b) {
		return true
	}
	return this.optional(a)
}, "wrong name.");
var login_messages = {
	randCodeError : "验证码错误!",
	randCodeExpired : "验证码失效",
	randCodeLentgh : "验证码长度为4位!",
	randCodeFormat : "验证码只能由数字或字母组成!",
	randCodeEmpty : "验证码不能为空!",
	userNameEmpty : "登录名必须填写!",
	userNameFormat : "登录名格式不正确，请重新输入!",
	passwordEmpty : "密码必须填写,且不少于6位!",
	passwordLength : "密码长度不能少于6位!",
	pleaseClickCaptcha : "请点击验证码",
	pleaseClickLeftCaptcha : "请点击左侧验证码",
	pleaseClickCaptchaRight : "请点击正确的验证码",
	pleaseClickBottomCaptcha : "请点击下方验证码",
	loginError : "当前访问用户过多,请稍候重试!",
	submitAfterVerify : "提交",
	pleaseClickSubmitButtonAfterClick : "pleaseClickSubmitButtonAfterClick",
	leftTicketOrderNoteMessage : '点击"提交"按钮获取验证码',
	leftTicketOrderClickCallbackNoteMessage : '完成选择后，继续点击下方橙色"提交"按钮提交订单',
	leftTicketOrderShowCallbackNoteMessage : "按照提示点击选择所有的图片",
	leftTicketOrderHiddenCallbackNoteMessage : '点击"提交"按钮获取验证码',
	getCaptchaByClick : "点击获取验证码"
};
function Marquee(a) {
	if (a == null || a == "") {
		return
	}
	this.ID = document.getElementById(a.ID);
	if (!this.ID) {
		this.id = -1;
		return
	}
	this.Direction = this.Width = this.Height = this.DelayTime = this.WaitTime = this.CTL = this.StartID = this.Stop = this.MouseOver = 0;
	this.Step = 1;
	this.Timer = 30;
	this.DirectionArray = {
		top : 0,
		up : 0,
		bottom : 1,
		down : 1,
		left : 2,
		right : 3
	};
	if (typeof a.Direction == "number" && a.Direction) {
		this.Direction = a.Direction
	}
	if (typeof a.Direction == "string" && a.Direction) {
		this.Direction = this.DirectionArray[a.Direction.toString()
				.toLowerCase()]
	}
	if (typeof a.Step == "number" && a.Step) {
		this.Step = a.Step
	}
	if (typeof a.Width == "number" && a.Width) {
		this.Width = a.Width
	}
	if (typeof a.Height == "number" && a.Height) {
		this.Height = a.Height
	}
	if (typeof a.Timer == "number" && a.Timer) {
		this.Timer = a.Timer
	}
	if (typeof a.DelayTime == "number" && a.DelayTime) {
		this.DelayTime = a.DelayTime
	}
	if (typeof a.WaitTime == "number" && a.WaitTime) {
		this.WaitTime = a.WaitTime
	}
	if (typeof a.ScrollStep == "number" && a.ScrollStep) {
		this.ScrollStep = a.ScrollStep
	}
	this.ID.style.overflow = this.ID.style.overflowX = this.ID.style.overflowY = "hidden";
	this.ID.noWrap = true;
	this.IsNotOpera = (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
	this.Start()
}
Marquee.prototype.Start = function() {
	if (this.ID == -1) {
		return
	}
	if (this.Width == 0) {
		this.Width = parseInt(this.ID.style.width)
	}
	if (this.Height == 0) {
		this.Height = parseInt(this.ID.style.height)
	}
	if (this.Timer < 20) {
		this.Timer = 20
	}
	if (this.WaitTime < 800) {
		this.WaitTime = 800
	}
	this.HalfWidth = Math.round(this.Width / 2);
	this.HalfHeight = Math.round(this.Height / 2);
	this.BakStep = this.Step;
	this.ID.style.width = this.Width + "px";
	this.ID.style.height = this.Height + "px";
	if (typeof this.ScrollStep != "number") {
		this.ScrollStep = this.Direction > 1 ? this.Width : this.Height
	}
	var d = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;display:inline;'><tr><td noWrap=true style='white-space: nowrap;word-break:keep-all;padding-right:100px;'>MSCLASS_TEMP_HTML</td><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td></tr></table>";
	var b = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;'><tr><td>MSCLASS_TEMP_HTML</td></tr><tr><td>MSCLASS_TEMP_HTML</td></tr></table>";
	var e = this;
	e.tempHTML = e.ID.innerHTML;
	if (e.Direction <= 1) {
		e.ID.innerHTML = b.replace(/MSCLASS_TEMP_HTML/g, e.ID.innerHTML)
	} else {
		if (e.ScrollStep == 0 && e.DelayTime == 0) {
			e.ID.innerHTML += e.ID.innerHTML
		} else {
			e.ID.innerHTML = d.replace(/MSCLASS_TEMP_HTML/g, e.ID.innerHTML)
		}
	}
	var f = this.Timer;
	var a = this.DelayTime;
	var c = this.WaitTime;
	e.StartID = function() {
		e.Scroll()
	};
	e.Continue = function() {
		if (e.MouseOver == 1) {
			setTimeout(e.Continue, a)
		} else {
			clearInterval(e.TimerID);
			e.CTL = e.Stop = 0;
			e.TimerID = setInterval(e.StartID, f)
		}
	};
	e.Pause = function() {
		e.Stop = 1;
		clearInterval(e.TimerID);
		setTimeout(e.Continue, a)
	};
	e.Begin = function() {
		e.ClientScroll = e.Direction > 1 ? e.ID.scrollWidth / 2
				: e.ID.scrollHeight / 2;
		if ((e.Direction <= 1 && e.ClientScroll <= e.Height + e.Step)
				|| (e.Direction > 1 && e.ClientScroll <= e.Width + e.Step)) {
			e.ID.innerHTML = e.tempHTML;
			delete (e.tempHTML);
			return
		}
		delete (e.tempHTML);
		e.TimerID = setInterval(e.StartID, f);
		if (e.ScrollStep < 0) {
			return
		}
		e.ID.onmousemove = function(g) {
			if (e.ScrollStep == 0 && e.Direction > 1) {
				var g = g || window.event;
				if (window.event) {
					if (e.IsNotOpera) {
						e.EventLeft = g.srcElement.id == e.ID.id ? g.offsetX
								- e.ID.scrollLeft : g.srcElement.offsetLeft
								- e.ID.scrollLeft + g.offsetX
					} else {
						e.ScrollStep = null;
						return
					}
				} else {
					e.EventLeft = g.layerX - e.ID.scrollLeft
				}
				e.Direction = e.EventLeft > e.HalfWidth ? 3 : 2;
				e.AbsCenter = Math.abs(e.HalfWidth - e.EventLeft);
				e.Step = Math
						.round(e.AbsCenter * (e.BakStep * 2) / e.HalfWidth)
			}
		};
		e.ID.onmouseover = function() {
			if (e.ScrollStep == 0) {
				return
			}
			e.MouseOver = 1;
			clearInterval(e.TimerID)
		};
		e.ID.onmouseout = function() {
			if (e.ScrollStep == 0) {
				if (e.Step == 0) {
					e.Step = 1
				}
				return
			}
			e.MouseOver = 0;
			if (e.Stop == 0) {
				clearInterval(e.TimerID);
				e.TimerID = setInterval(e.StartID, f)
			}
		}
	};
	setTimeout(e.Begin, c)
};
Marquee.prototype.Scroll = function() {
	switch (this.Direction) {
	case 0:
		this.CTL += this.Step;
		if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
			this.ID.scrollTop += this.ScrollStep + this.Step - this.CTL;
			this.Pause();
			return
		} else {
			if (this.ID.scrollTop >= this.ClientScroll) {
				this.ID.scrollTop -= this.ClientScroll
			}
			this.ID.scrollTop += this.Step
		}
		break;
	case 1:
		this.CTL += this.Step;
		if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
			this.ID.scrollTop -= this.ScrollStep + this.Step - this.CTL;
			this.Pause();
			return
		} else {
			if (this.ID.scrollTop <= 0) {
				this.ID.scrollTop += this.ClientScroll
			}
			this.ID.scrollTop -= this.Step
		}
		break;
	case 2:
		this.CTL += this.Step;
		if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
			this.ID.scrollLeft += this.ScrollStep + this.Step - this.CTL;
			this.Pause();
			return
		} else {
			if (this.ID.scrollLeft >= this.ClientScroll) {
				this.ID.scrollLeft -= this.ClientScroll
			}
			this.ID.scrollLeft += this.Step
		}
		break;
	case 3:
		this.CTL += this.Step;
		if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
			this.ID.scrollLeft -= this.ScrollStep + this.Step - this.CTL;
			this.Pause();
			return
		} else {
			if (this.ID.scrollLeft <= 0) {
				this.ID.scrollLeft += this.ClientScroll
			}
			this.ID.scrollLeft -= this.Step
		}
		break
	}
};
