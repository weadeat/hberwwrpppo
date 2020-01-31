﻿(function(e) {
    function t(e) {
        return this.forms = [].slice.call(document.querySelectorAll(".al-form")), this.settings = e || {}, this.isLabel = "true" == this._getPerameterFromJSON("label"), this.isLang = this._getPerameterFromJSON("lang"), this.isLabel || (this.setRelativeForm(this.forms), this._setStylesTooltips()), this._addEvents(), this
    }
    var n = {
        phonesCode: {
            DE: 49,
            AT: 43,
            RU: 7,
            FR: 33,
            IT: 39,
            BG: 359,
            ES: 34,
            PT: 351,
            GR: 30,
            CY: 357,
            SI: 386,
            SK: 421,
            CZ: 420,
            HU: 36,
            RO: 40,
            PL: 48,
            HR: 385,
            RS: 381,
            LT: 370,
            MY: 60,
            VN: 84,
            IN: 91,
            TH: 66,
            NG: 234,
            LV: 371,
            EE: 372,
            ID: 62,
            AL: 355,
            NL: 31,
            BE: 32,
            MA: 212,
            XK: 383,
            BD: 880,
            AE: 971,
            BA: 387,
            PH: 63
        },
        phoneMinLength: 10,
        phoneMaxLength: 12,
        allowedBtnCodes: [43, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 32, 40, 41, 229, 8, 13],
        massages: {
            EN: {
                fillName: "Enter your name",
                fillPhone: "Enter your number",
                incorrectPhone: "Error, incorrect number"
            },
            RU: {
                fillName: "Введите ФИО",
                fillPhone: "Введите номер",
                incorrectPhone: "Ошибка, некорректный номер"
            },
            ES: {
                fillName: "Introduzca su nombre comleto",
                fillPhone: "Introduzca su número de teléfono",
                incorrectPhone: "Error, el número de teléfono incorrecto"
            },
            FR: {
                fillName: "Entrez votre nom et prénom",
                fillPhone: "Entrez le numéro de téléphone",
                incorrectPhone: "Erreur, numéro incorrect"
            },
            IT: {
                fillName: "Inserire il nome ed il cognome",
                fillPhone: "Inserire il numero di telefono",
                incorrectPhone: "Errore, numero sbagliato"
            },
            PT: {
                fillName: "Introduza seu nome e sobrenome",
                fillPhone: "Introduza o número de telemovel",
                incorrectPhone: "Error, número incorrecto"
            },
            GR: {
                fillName: "Εισάγετε το όνομα και το επώνυμο",
                fillPhone: "Εισάγετε τον αριθμό τηλεφώνου",
                incorrectPhone: "Σφάλμα, λάθος νούμερο"
            },
            CY: {
                fillName: "Εισάγετε το όνομα και το επώνυμο",
                fillPhone: "Εισάγετε τον αριθμό τηλεφώνου",
                incorrectPhone: "Σφάλμα, λάθος νούμερο"
            },
            BG: {
                fillName: "Име",
                fillPhone: "Телефон номер",
                incorrectPhone: "Грешка, невалиден номер"
            },
            SI: {
                fillName: "Napišite svoje ime in priimek",
                fillPhone: "Napišite svojo telefonsko številko",
                incorrectPhone: "Napačna številka"
            },
            SK: {
                fillName: "Zadajte Meno a Priezvisko",
                fillPhone: "Zadajte telefónne číslo",
                incorrectPhone: "Chyba, zlé číslo"
            },
            CZ: {
                fillName: "Zadejte Jméno Příjmení",
                fillPhone: "Zadejte telefonní číslo",
                incorrectPhone: "Chyba, není platné číslo"
            },
            HU: {
                fillName: "Vezetéknév, keresztnév",
                fillPhone: "Telefon",
                incorrectPhone: "Hiba, helytelen számot adott meg"
            },
            RO: {
                fillName: "Nume de tip",
                fillPhone: "Introduceţi numărul de",
                incorrectPhone: "Număr invalid eroare"
            },
            PL: {
                fillName: "Wpisz swoje imię i nazwisko",
                fillPhone: "Podaj swoj numer",
                incorrectPhone: "Błąd , nieprawidłowy numer"
            },
            DE: {
                fillName: "Geben Sie Ihren Namen ein",
                fillPhone: "Geben Sie Ihre Telefonnummer ein",
                incorrectPhone: "Eingabefehler, die Nummer ist inkorrekt",
                lessNineSymbols: "Eingabefehler, die Nummer ist inkorrekt"
            },
            AT: {
                fillName: "Geben Sie Ihren Namen ein",
                fillPhone: "Geben Sie Ihre Telefonnummer ein",
                incorrectPhone: "Eingabefehler, die Nummer ist inkorrekt",
                lessNineSymbols: "Eingabefehler, die Nummer ist inkorrekt"
            },
            MY: {
                fillName: "Masukkan Nama",
                fillPhone: "Masukkan nombor",
                incorrectPhone: "Ralat, nombor yang salah"
            },
            LT: {
                fillName: "Įveskite savo vardą",
                fillPhone: "Įveskite savo telefono numerį",
                incorrectPhone: "Klaidingas telefono numeris"
            },
            VN: {
                fillName: "Nhập họ tên",
                fillPhone: "Nhập số điện thoại",
                incorrectPhone: "Lỗi, số điện thoại không đúng"
            },
            IN: {
                fillName: "नाम भरे",
                fillPhone: "आपका नम्बर",
                incorrectPhone: "ग़लत नम्बर"
            },
            HR: {
                fillName: "Upišite Ime i Prezime",
                fillPhone: "Upišite broj telefona",
                incorrectPhone: "Pogreška, nepravilan broj"
            },
            RS: {
                fillName: "Unesite IME i PREZIME",
                fillPhone: "Unesite broj telefona",
                incorrectPhone: "Greška, nekorektan broj"
            },
            TH: {
                fillName: "ใส่ชื่อ",
                fillPhone: "ใส่เบอร์โทร",
                incorrectPhone: "Error, หมายเลขโทรศัพท์ไม่ถูกต้อง"
            },
            LV: {
                fillName: "Ievadiet jūsu vārdu",
                fillPhone: "Ievadiet jūsu numuru",
                incorrectPhone: "Kļūda, numurs norādīts nepareizi"
            },
            EE: {
                fillName: "Sisestage oma nimi",
                fillPhone: "Sisestage oma number",
                incorrectPhone: "Viga, vale number"
            },
            AL: {
                fillName: "Vendos emrin dhe mbiemrin",
                fillPhone: "Vendos numrin e telefonit",
                incorrectPhone: "Gabim, numri nuk është i saktë"
            },
            BA: {
                fillName: "Unesite IME i PREZIME",
                fillPhone: "Unesite broj telefona",
                incorrectPhone: "Greška, nekorektan broj"
            },
            NL: {
                fillName: "Vul naam in",
                fillPhone: "Voer telefoonnummer in",
                incorrectPhone: "Foutmelding, nummer ongeldig"
            }
        }
    };
    t.prototype.DEFAULT_SETTINGS = {
        phonesCode: "",
        isClicked: !1,
        phoneMinLength: 9,
        phoneMaxLength: 15,
        allowedBtnCodes: [43, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 32, 40, 41, 229, 8, 13],
        massages: {
            fillName: "Enter your name",
            fillPhone: "Enter your number",
            incorrectPhone: "Error, incorrect number"
        }
    }, t.prototype._getParamsFromScriptURL = function() {
        for (var e = 0, t = {}, n = document.getElementsByTagName("script"), o = 0; o < n.length; o++) {
            var r = n[o].getAttribute("src");
            r && -1 !== r.indexOf("tl-validator") && (e = o)
        }
        var i = n[e],
            s = i.src;
        if (-1 !== s.indexOf("?")) {
            var a = s.substring(s.indexOf("?") + 1);
            a.split("&").forEach(function(e) {
                var n = e.split("=");
                t[n[0]] = decodeURIComponent(n[1])
            })
        }
        return t
    }, t.prototype._getPerameterFromJSON = function(e) {
        var t = "";
        try {
            t = this._getParamsFromScriptURL()[e]
        } catch (e) {
            console.warn(e)
        }
        return t
    }, t.prototype._testCountryCode = function(e) {
        return e.toUpperCase().match(/[A-Z]{2}/i)[0] in this.settings.phonesCode || (console.log("%cIncorrect country code! Can't get country " + e + ".", "color: #004ff0; font-size: 20px; font-weight: bold;"), !1)
    }, t.prototype._getCountry = function() {
        window.countryKey && (window.countryKey = window.countryKey.toUpperCase());
        var e = window.countryKey || this._getPerameterFromJSON("country");
        if (e && this._testCountryCode(e)) return e.toUpperCase().match(/[A-Z]{2}/i)[0];
        if (this.forms[0].country) var t = this.forms[0].country.options;
        else t = this.forms[0].querySelector("select").options;
        var n = t.length,
            o = void 0;
        for (o = 0; o < n; o++) {
            if (t[o].selected) var r = t[o].value;
            if (r) return r.toString().toUpperCase().match(/[A-Z]{2}/i)[0]
        }
    }, t.prototype._getProp = function(e) {
        var t = this._getCountry();
        return this.isLang && "massages" == e ? this.settings[e][this.isLang.toUpperCase()] || this.DEFAULT_SETTINGS[e] : this.settings[e][t] || this.DEFAULT_SETTINGS[e]
    }, t.prototype._clearPhone = function(e) {
        return e.replace(/[^\d]+/gi, "")
    }, t.prototype._setStylesTooltips = function() {
        var e = document.createElement("style");
        e.innerHTML = '\t\t\t.validator__tooltip { \t\t\t\tposition: absolute; \t\t\t\tz-index: 700; \t\t\t\tdisplay: block; \t\t\t\tfont-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; \t\t\t\tfont-style: normal; \t\t\t\tfont-weight: 400; \t\t\t\tletter-spacing: normal; \t\t\t\tline-break: auto; \t\t\t\tline-height: 1.5; \t\t\t\ttext-align: left; \t\t\t\ttext-align: start; \t\t\t\ttext-decoration: none; \t\t\t\ttext-shadow: none; \t\t\t\ttext-transform: none; \t\t\t\twhite-space: normal; \t\t\t\tword-break: normal; \t\t\t\tword-spacing: normal; \t\t\t\tfont-size: 14px; \t\t\t\tword-wrap: break-word; \t\t\t\topacity: 1; \t\t\t\tpadding-bottom: 5px; \t\t\t\tpointer-events: none \t\t\t} \t\t\t.input-wrapper .error+label {\t\t\t\tpointer-events: none;\t\t\t} \t\t\t.validator__tooltip-inner { \t\t\t\tmax-width: 290px; \t\t\t\tpadding: 3px 8px; \t\t\t\tcolor: #fff; \t\t\t\ttext-align: center; \t\t\t\tbackground-color: #cd5b20; \t\t\t\tborder-radius: 4px; \t\t\t} \t\t\t.validator__tooltip-inner::before { \t\t\t\tposition: absolute; \t\t\t\twidth: 0; \t\t\t\theight: 0; \t\t\t\tborder-color: transparent; \t\t\t\tborder-style: solid; \t\t\t\tbottom: 1px; \t\t\t\tleft: 50%; \t\t\t\tmargin-left: -5px; \t\t\t\tcontent: ""; \t\t\t\tborder-width: 5px 5px 0; \t\t\t\tborder-top-color: #cd5b20; \t\t\t}', document.body.appendChild(e)
    }, t.prototype._getCoords = function(e) {
        var t = e.getBoundingClientRect(),
            n = document.body,
            o = document.documentElement,
            r = window.pageYOffset || o.scrollTop || n.scrollTop,
            i = window.pageXOffset || o.scrollLeft || n.scrollLeft,
            s = o.clientTop || n.clientTop || 0,
            a = o.clientLeft || n.clientLeft || 0;
        return {
            top: t.top + r - s,
            left: t.left + i - a
        }
    }, t.prototype.insertBefore = function(e, t) {
        t.parentNode.insertBefore(e, t)
    }, t.prototype.setRelativeForm = function(e) {
        for (var t = 0; t < e.length; t++) {
            var n = window.getComputedStyle(e[t], null).getPropertyValue("position");
            "static" == n && (e[t].style.position = "relative")
        }
    }, t.prototype._createErrorMassage = function(e, t) {
        if (this._removeState(e), this.isLabel) {
            var n = e.id;
            if (n) var o = document.querySelector("[for=" + n + "]");
            o && (o.innerText = t), e.classList ? e.classList.add("error") : e.className += " error"
        } else {
            var r = document.createElement("div");
            r.className = "validator__tooltip", r.innerHTML = '<div class="validator__tooltip-inner">' + t + "</div>", this.insertBefore(r, e), r.setAttribute("style", "left:50%; margin-top: -" + r.clientHeight + "px; margin-left: -" + r.clientWidth / 2 + "px;")
        }
    }, t.prototype._removeState = function(e) {
        if (this.isLabel) e.classList ? (e.classList.remove("error"), e.classList.remove("success")) : e.className = errorFields[i].className.replace(new RegExp("(^|\\b)(error|success)(\\b|$)", "gi"), " ");
        else {
            var t = e.parentNode.querySelector(".validator__tooltip");
            t && t.parentNode.removeChild(t)
        }
    }, t.prototype._success = function(e) {
        this._removeState(e), e.classList && e.classList.add("success")
    }, t.prototype._validate = function(e, t) {
        this.massages = this._getProp("massages"), this.phonesCode = this._getProp("phonesCode"), this.phoneMinLength = this.settings.phoneMinLength || this.DEFAULT_SETTINGS.phoneMinLength, this.phoneMaxLength = this.settings.phoneMaxLength || this.DEFAULT_SETTINGS.phoneMaxLength;
        var n = void 0;
        n = t ? t.name : "all";
        var o = !0;
        if (!e.name || "name" != n && "all" != n || (null === e.name.value || "" == e.name.value || e.name.value.length < 3 || void 0 === e.name.value ? (this._createErrorMassage(e.name, this.massages.fillName), o = !1) : this._success(e.name)), e.phone && ("phone" == n || "all" == n)) {
            var r = this._clearPhone(e.phone.value),
                i = new RegExp("^(00)?" + this.phonesCode, "i"),
                s = /(\d)\1{4,}/gi,
                a = this._getCountry();
            if (null === r || "" == e.phone.value || void 0 === r) this._createErrorMassage(e.phone, this.massages.fillPhone), o = !1;
            else if ("" == r && e.phone.value.length > 0 || -1 == r.search(i) || r.search(s) > -1) this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1;
            else if ("DE" == a) {
                var l = new RegExp("^(00)?" + this.phonesCode + "0+", "i");
                r.search(l) > -1 ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : r.length < this.phoneMinLength ? (this._createErrorMassage(e.phone, this.massages.lessNineSymbols), o = !1) : r.length > this.phoneMaxLength ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone)
            } else if ("FR" == a) {
                var h = new RegExp("^(00)?" + this.phonesCode + "\\d{9}$", "i"); - 1 == r.search(h) ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone)
            } else "ES" == a || "IT" == a ? r.length < 7 || r.length > this.phoneMaxLength ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone) : r.length < this.phoneMinLength || r.length > this.phoneMaxLength ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone)
        }
        return !!o
    }, t.prototype._moveCursorToEnd = function(e) {
        if ("number" == typeof e.selectionStart) e.selectionStart = e.selectionEnd = e.value.length;
        else if (void 0 !== e.createTextRange) {
            e.focus();
            var t = e.createTextRange();
            t.collapse(!1), t.select()
        }
    }, t.prototype._addEvents = function() {
        var e = this,
            t = this.forms.length,
            n = void 0;
        for (n = 0; n < t; n++) {
            var o, r = this.forms[n],
                i = r.elements.length;
            for (o = 0; o < i; o++) "button" != r.elements[o].getAttribute("type") && "submit" != r.elements[o].getAttribute("type") && "BUTTON" != r.elements[o].tagName || r.elements[o].addEventListener("click", function(t) {
                var n = e._validate(this.form);
                n ? this.form.phone.value = e._clearPhone(this.form.phone.value) : t.preventDefault()
            });
            r.name && r.name.addEventListener("blur", function() {
                e._validate(this.form, this)
            }), r.phone && (r.phone.setAttribute("maxlength", e._getProp("phoneMaxLength")), r.phone.addEventListener("focus", function() {
                this.value || (this.value = "+" + e._getProp("phonesCode"), e.isClicked = !1)
            }), r.phone.addEventListener("click", function() {
                e.isClicked || (e._moveCursorToEnd(this), e.isClicked = !0)
            }), r.phone.addEventListener("blur", function() {
                e._validate(this.form, this)
            }), r.phone.addEventListener("keypress", function(t) {
                if (e.settings.allowedBtnCodes.indexOf(t.which) < 0) return t.preventDefault(), !1
            }), r.phone.addEventListener("keyup", function(e) {
                /[^\+\d]+/g.test(this.value) && (this.value = this.value.replace(/[^\+\d]+/, ""))
            })), r.country && r.country.addEventListener("change", function() {
                for (var n = 0; n < t; n++) e.forms[n].country.selectedIndex = this.selectedIndex, e.forms[n].phone.value = ""
            })
        }
    }, e.addEventListener("DOMContentLoaded", function() {
        new t(n)
    })
})(window);