(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('You must be logged in to access this page');
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/prevent-unsaved-changes.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/_guards/prevent-unsaved-changes.guard.ts ***!
  \**********************************************************/
/*! exports provided: PreventUnsavedChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventUnsavedChanges", function() { return PreventUnsavedChanges; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PreventUnsavedChanges = /** @class */ (function () {
    function PreventUnsavedChanges() {
    }
    PreventUnsavedChanges.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty && !component.editForm.submitted) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost!');
        }
        return true;
    };
    PreventUnsavedChanges = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PreventUnsavedChanges);
    return PreventUnsavedChanges;
}());



/***/ }),

/***/ "./src/app/_models/pagination.ts":
/*!***************************************!*\
  !*** ./src/app/_models/pagination.ts ***!
  \***************************************/
/*! exports provided: PaginatedResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedResult", function() { return PaginatedResult; });
var PaginatedResult = /** @class */ (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());



/***/ }),

/***/ "./src/app/_resolvers/lineup.resolver.ts":
/*!***********************************************!*\
  !*** ./src/app/_resolvers/lineup.resolver.ts ***!
  \***********************************************/
/*! exports provided: LineupResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineupResolver", function() { return LineupResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_lineup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/lineup.service */ "./src/app/_services/lineup.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LineupResolver = /** @class */ (function () {
    function LineupResolver(lineupService, router, alertify, authService) {
        this.lineupService = lineupService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
    }
    LineupResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.lineupService.getLineup(this.authService.decodedToken.nameid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    LineupResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_lineup_service__WEBPACK_IMPORTED_MODULE_2__["LineupService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], LineupResolver);
    return LineupResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/savedSong.resolver.ts":
/*!**************************************************!*\
  !*** ./src/app/_resolvers/savedSong.resolver.ts ***!
  \**************************************************/
/*! exports provided: SavedSongResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedSongResolver", function() { return SavedSongResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_song_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/song.service */ "./src/app/_services/song.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SavedSongResolver = /** @class */ (function () {
    function SavedSongResolver(songService, router, alertify, authService) {
        this.songService = songService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.savedParam = 'Saved';
        this.userId = 0;
    }
    SavedSongResolver.prototype.resolve = function (route) {
        var _this = this;
        this.userId = this.authService.decodedToken.nameid;
        return this.songService.getSongs(this.pageNumber, this.pageSize, null, this.savedParam, this.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    SavedSongResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_song_service__WEBPACK_IMPORTED_MODULE_6__["SongService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], SavedSongResolver);
    return SavedSongResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/song.resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/_resolvers/song.resolver.ts ***!
  \*********************************************/
/*! exports provided: SongResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongResolver", function() { return SongResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_song_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/song.service */ "./src/app/_services/song.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SongResolver = /** @class */ (function () {
    function SongResolver(songService, router, alertify, authService) {
        this.songService = songService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.userId = 0;
    }
    SongResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.songService.getSongs(this.pageNumber, this.pageSize, null, null, this.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    SongResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_song_service__WEBPACK_IMPORTED_MODULE_6__["SongService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], SongResolver);
    return SongResolver;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _lineup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lineup.service */ "./src/app/_services/lineup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http, lineupService) {
        this.http = http;
        this.lineupService = lineupService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'login', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
            }
        }));
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.baseUrl + 'register', user);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _lineup_service__WEBPACK_IMPORTED_MODULE_5__["LineupService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/error.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_services/error.interceptor.ts ***!
  \************************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.statusText);
                }
                if (error.status === 400) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error);
                }
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(applicationError);
                }
                var serverError = error.error.errors;
                var modelStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(modelStateErrors || serverError || 'Server Error');
            }
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_services/lineup.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/lineup.service.ts ***!
  \*********************************************/
/*! exports provided: LineupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineupService", function() { return LineupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LineupService = /** @class */ (function () {
    function LineupService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    LineupService.prototype.getLineup = function (id) {
        return this.http.get(this.baseUrl + 'lineup/' + id);
    };
    LineupService.prototype.editLineup = function (id) {
        return this.http.get(this.baseUrl + 'lineup/' + id + '/edit/');
    };
    LineupService.prototype.updateLineup = function (id, lineup) {
        return this.http.put(this.baseUrl + 'lineup/' + id, lineup);
    };
    LineupService.prototype.createLineup = function (userId) {
        return this.http.post(this.baseUrl + 'lineup/' + +userId, {});
    };
    LineupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LineupService);
    return LineupService;
}());



/***/ }),

/***/ "./src/app/_services/song.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/song.service.ts ***!
  \*******************************************/
/*! exports provided: SongService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongService", function() { return SongService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
};
var SongService = /** @class */ (function () {
    function SongService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    SongService.prototype.getSongs = function (page, itemsPerPage, songParams, savedParam, userId) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (songParams != null) {
            params = params.append('genre', songParams.genre);
            params = params.append('orderBy', songParams.orderBy);
        }
        if (savedParam === 'Saved') {
            params = params.append('saved', 'true');
        }
        if (userId != null) {
            params = params.append('userId', userId);
        }
        return this.http.get(this.baseUrl + 'songs/', { observe: 'response', params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    SongService.prototype.getSong = function (id) {
        return this.http.get(this.baseUrl + 'songs/' + id, httpOptions);
    };
    SongService.prototype.getSpotify = function (title, artist) {
        var track = this.http.get(this.baseUrl + 'spotify/' + title + ' ' + artist);
        return track;
    };
    SongService.prototype.getSpotifyAlt = function (title, artist) {
        var track = this.http.get(this.baseUrl + 'spotify/alt/' + title + ' ' + artist);
        return track;
    };
    SongService.prototype.savedSong = function (userId, songId) {
        return this.http.post(this.baseUrl + 'songs/' + userId + '/saved-song/' + songId, {});
    };
    SongService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SongService);
    return SongService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.baseUrl + 'users');
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.baseUrl + 'users/' + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    // tslint:disable-next-line: use-life-cycle-interface
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/error.interceptor */ "./src/app/_services/error.interceptor.ts");
/* harmony import */ var _songs_song_song_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./songs/song/song.component */ "./src/app/songs/song/song.component.ts");
/* harmony import */ var _saved_songs_saved_songs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./saved-songs/saved-songs.component */ "./src/app/saved-songs/saved-songs.component.ts");
/* harmony import */ var _lineup_lineup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lineup/lineup.component */ "./src/app/lineup/lineup.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_song_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_services/song.service */ "./src/app/_services/song.service.ts");
/* harmony import */ var _songs_song_card_song_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./songs/song-card/song-card.component */ "./src/app/songs/song-card/song-card.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _lineup_lineupEdit_lineupEdit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lineup/lineupEdit/lineupEdit.component */ "./src/app/lineup/lineupEdit/lineupEdit.component.ts");
/* harmony import */ var _services_lineup_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_services/lineup.service */ "./src/app/_services/lineup.service.ts");
/* harmony import */ var _resolvers_lineup_resolver__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_resolvers/lineup.resolver */ "./src/app/_resolvers/lineup.resolver.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ "./src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _resolvers_song_resolver__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_resolvers/song.resolver */ "./src/app/_resolvers/song.resolver.ts");
/* harmony import */ var _resolvers_savedSong_resolver__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_resolvers/savedSong.resolver */ "./src/app/_resolvers/savedSong.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _songs_song_song_component__WEBPACK_IMPORTED_MODULE_14__["SongComponent"],
                _songs_song_card_song_card_component__WEBPACK_IMPORTED_MODULE_21__["SongCardComponent"],
                _saved_songs_saved_songs_component__WEBPACK_IMPORTED_MODULE_15__["SavedSongsComponent"],
                _lineup_lineup_component__WEBPACK_IMPORTED_MODULE_16__["LineupComponent"],
                _lineup_lineupEdit_lineupEdit_component__WEBPACK_IMPORTED_MODULE_23__["LineupEditComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_17__["appRoutes"]),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5001'],
                        blacklistedRoutes: ['localhost:5001/api/auth']
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptorProvider"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"],
                _services_song_service__WEBPACK_IMPORTED_MODULE_20__["SongService"],
                _services_lineup_service__WEBPACK_IMPORTED_MODULE_24__["LineupService"],
                _resolvers_lineup_resolver__WEBPACK_IMPORTED_MODULE_25__["LineupResolver"],
                _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_27__["PreventUnsavedChanges"],
                _resolvers_song_resolver__WEBPACK_IMPORTED_MODULE_28__["SongResolver"],
                _resolvers_savedSong_resolver__WEBPACK_IMPORTED_MODULE_29__["SavedSongResolver"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loggedIn()\" class=\"container mt-5\">\r\n  <div *ngIf=\"!registerMode && !loginMode\" style=\"text-align: center\">\r\n    <h1>Find the perfect music for your perfect day</h1>\r\n    <p class=\"lead\">Log in or sign up to begin</p>\r\n    <div class=\"text-center\">\r\n      <button class=\"btn btn-primary btn-lg mr-2\" (click)=\"registerToggle()\">Register</button>\r\n      <button class=\"btn btn-info btn-lg\" (click)=\"loginToggle()\">Log in</button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div *ngIf=\"registerMode\" class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-4\">\r\n        <app-register (cancelRegister)=\"cancelRegisterMode($event)\"></app-register>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"loginMode\" class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-4\">\r\n        <app-login (cancelLogin)=\"cancelLoginMode($event)\"></app-login>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_lineup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/lineup.service */ "./src/app/_services/lineup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, authService, lineupService) {
        this.http = http;
        this.authService = authService;
        this.lineupService = lineupService;
        this.registerMode = false;
        this.loginMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = true;
    };
    HomeComponent.prototype.loginToggle = function () {
        this.loginMode = true;
    };
    HomeComponent.prototype.cancelRegisterMode = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeComponent.prototype.cancelLoginMode = function (loginMode) {
        this.loginMode = loginMode;
    };
    HomeComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_lineup_service__WEBPACK_IMPORTED_MODULE_3__["LineupService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lineup/lineup.component.css":
/*!*********************************************!*\
  !*** ./src/app/lineup/lineup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  text-align: center;\r\n}\r\n\r\n.lineup-item {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.lineup-title {\r\n  text-decoration: underline;\r\n}\r\n\r\nh3 {\r\n  margin-top: 15px;\r\n}"

/***/ }),

/***/ "./src/app/lineup/lineup.component.html":
/*!**********************************************!*\
  !*** ./src/app/lineup/lineup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!lineupEditMode\" class=\"container\">\r\n    <h3>Your Lineup</h3>\r\n    <hr>\r\n    <div class=\"lineup-item\">\r\n      <h5 class=\"lineup-title\">Prelude</h5>\r\n      <div *ngFor=\"let song of lineup.prelude\" >\r\n        <p>{{song}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"lineup-item\">\r\n      <h5 class=\"lineup-title\">Family</h5>\r\n      <div *ngFor=\"let song of lineup.family\">\r\n        <p>{{song}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"lineup-item\">\r\n      <h5 class=\"lineup-title\">Bridal Party</h5>\r\n      <div *ngFor=\"let song of lineup.bridalParty\" >\r\n        <p>{{song}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"lineup-item\">\r\n      <h5 class=\"lineup-title\">Processional</h5>\r\n      <div *ngFor=\"let song of lineup.processional\" >\r\n        <p>{{song}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"lineup-item\">\r\n      <h5 class=\"lineup-title\">Unity</h5>\r\n      <div *ngFor=\"let song of lineup.unity\" >\r\n        <p>{{song}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"lineup-item\">\r\n      <h5 class=\"lineup-title\">Recessional</h5>\r\n      <div *ngFor=\"let song of lineup.recessional\" >\r\n        <p>{{song}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"lineup-item\">\r\n      <h5 class=\"lineup-title\">Postlude</h5>\r\n      <div *ngFor=\"let song of lineup.postlude\" >\r\n        <p>{{song}}</p>\r\n      </div>\r\n    </div>\r\n    <button class=\"btn btn-warning\" [routerLink]=\"['/lineup/edit']\" routerLinkActive=\"router-link-active\">Edit Lineup</button>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/lineup/lineup.component.ts":
/*!********************************************!*\
  !*** ./src/app/lineup/lineup.component.ts ***!
  \********************************************/
/*! exports provided: LineupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineupComponent", function() { return LineupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_lineup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/lineup.service */ "./src/app/_services/lineup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LineupComponent = /** @class */ (function () {
    function LineupComponent(route, authService, lineupService, router) {
        this.route = route;
        this.authService = authService;
        this.lineupService = lineupService;
        this.router = router;
        this.lineupEditMode = false;
        this.sectionNames = ['prelude', 'family', 'bridalParty', 'processional', 'unity', 'recessional', 'postlude'];
    }
    LineupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.lineup = data['lineup'];
            console.log(_this.lineup);
            if (_this.lineup == null) {
                console.log('this is null');
                return _this.lineupService.createLineup(_this.authService.decodedToken.nameid).subscribe(function (next) {
                    window.location.reload();
                });
            }
            _this.splitSongString();
            // this.lineup.prelude = this.lineup.prelude.split('|').filter((el) => el.length !== 0);
            // this.lineup.family = this.lineup.family.split('|').filter((el) => el.length !== 0);
            // this.lineup.bridalParty = this.lineup.bridalParty.split('|').filter((el) => el.length !== 0);
            // if (this.lineup.processional != null) {
            //   console.log('this is null')
            //   this.lineup.processional = this.lineup.processional.split('|').filter((el) => el.length !== 0);
            // }
            // if (this.lineup.unity != null) {
            //   this.lineup.unity = this.lineup.unity.split('|').filter((el) => el.length !== 0);
            // }
            // if (this.lineup.recessional != null) {
            //   this.lineup.recessional = this.lineup.recessional.split('|').filter((el) => el.length !== 0);
            // }
            // this.lineup.postlude = this.lineup.postlude.split('|').filter((el) => el.length !== 0);
        });
    };
    LineupComponent.prototype.splitSongString = function () {
        for (var i = 0; i < this.sectionNames.length; i++) {
            if (this.lineup[this.sectionNames[i]] != null && this.lineup[this.sectionNames[i]] !== '') {
                this.lineup[this.sectionNames[i]] = this.lineup[this.sectionNames[i]].split('|').filter(function (el) { return el.length !== 0; });
            }
        }
    };
    LineupComponent.prototype.lineupEditToggle = function () {
        this.lineupEditMode = true;
    };
    LineupComponent.prototype.cancelLineupEditMode = function (lineupEditMode) {
        this.lineupEditMode = lineupEditMode;
    };
    LineupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lineup',
            template: __webpack_require__(/*! ./lineup.component.html */ "./src/app/lineup/lineup.component.html"),
            styles: [__webpack_require__(/*! ./lineup.component.css */ "./src/app/lineup/lineup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_lineup_service__WEBPACK_IMPORTED_MODULE_3__["LineupService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LineupComponent);
    return LineupComponent;
}());



/***/ }),

/***/ "./src/app/lineup/lineupEdit/lineupEdit.component.css":
/*!************************************************************!*\
  !*** ./src/app/lineup/lineupEdit/lineupEdit.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  text-align: center;\r\n}\r\n\r\n.lineup-item {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.lineup-title {\r\n  text-decoration: underline;\r\n}\r\n\r\ninput {\r\n  text-align: center;\r\n}\r\n\r\nh3 {\r\n  margin-top: 15px;\r\n}"

/***/ }),

/***/ "./src/app/lineup/lineupEdit/lineupEdit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/lineup/lineupEdit/lineupEdit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form #editForm=\"ngForm\" (ngSubmit)=\"updateLineup(['prelude', 'family', 'bridalParty', 'processional', 'unity', 'recessional', 'postlude'])\">\r\n    <div class=\"form-group\">\r\n      <div *ngIf=\"editForm.dirty\" class=\"alert alert-info\">\r\n          You have made changes. Any unsaved changes will be lost!\r\n      </div>\r\n      <h3>Your Lineup</h3>\r\n      <hr>\r\n      <div class=\"lineup-item\">\r\n        <h5 class=\"lineup-title\">Prelude</h5>\r\n        <!-- <input name=\"prelude\" [(ngModel)]=\"lineup.prelude\" placeholder={{lineup.prelude}}> -->\r\n        <div *ngFor=\"let song of lineup.prelude; let i = index\" class=\"w-100 d-inline-flex justify-content-center align-middle mt-2\">\r\n          {{song}}<button type=\"button\" (click)=\"removeSong(i, lineup.prelude, 'prelude')\" class=\"btn btn-danger ml-3\">Remove</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"lineup-item\">\r\n        <h5 class=\"lineup-title\">Family</h5>\r\n        <div *ngFor=\"let song of lineup.family; let i = index\" class=\"w-100 d-inline-flex justify-content-center align-middle mt-2\" >\r\n          {{song}}<button type=\"button\" (click)=\"removeSong(i, lineup.family, 'family')\" class=\"btn btn-danger ml-3\">Remove</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"lineup-item\">\r\n        <h5 class=\"lineup-title\">Bridal Party</h5>\r\n        <div *ngFor=\"let song of lineup.bridalParty; let i = index\" class=\"w-100 d-inline-flex justify-content-center align-middle mt-2\">\r\n          {{song}}<button type=\"button\" (click)=\"removeSong(i, lineup.bridalParty, 'bridalParty')\" class=\"btn btn-danger ml-3\">Remove</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"lineup-item\">\r\n        <h5 class=\"lineup-title\">Processional</h5>\r\n        <div *ngFor=\"let song of lineup.processional; let i = index\" class=\"w-100 d-inline-flex justify-content-center align-middle mt-2\">\r\n          {{song}}<button type=\"button\" (click)=\"removeSong(i, lineup.processional, 'processional')\" class=\"btn btn-danger ml-3\">Remove</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"lineup-item\">\r\n        <h5 class=\"lineup-title\">Unity</h5>\r\n        <div *ngFor=\"let song of lineup.unity; let i = index\" class=\"w-100 d-inline-flex justify-content-center align-middle mt-2\">\r\n          {{song}}<button type=\"button\" (click)=\"removeSong(i, lineup.unity, 'unity')\" class=\"btn btn-danger ml-3\">Remove</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"lineup-item\">\r\n        <h5 class=\"lineup-title\">Recessional</h5>\r\n        <div *ngFor=\"let song of lineup.recessional; let i = index\" class=\"w-100 d-inline-flex justify-content-center align-middle mt-2\">\r\n          {{song}}<button type=\"button\" (click)=\"removeSong(i, lineup.recessional, 'recessional')\" class=\"btn btn-danger ml-3\">Remove</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"lineup-item\">\r\n        <h5 class=\"lineup-title\">Postlude</h5>\r\n        <div *ngFor=\"let song of lineup.postlude; let i = index\" class=\"w-100 d-inline-flex justify-content-center align-middle mt-2\">\r\n          {{song}}<button type=\"button\" (click)=\"removeSong(i, lineup.postlude, 'postlude')\" class=\"btn btn-danger ml-3\">Remove</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button  type=\"submit\" class=\"btn btn-success\" >Save Changes</button>\r\n  </form>\r\n  <button class=\"btn btn-danger\" (click)=\"cancel()\" [routerLink]=\"['/lineup']\" routerLinkActive=\"router-link-active\" >Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/lineup/lineupEdit/lineupEdit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/lineup/lineupEdit/lineupEdit.component.ts ***!
  \***********************************************************/
/*! exports provided: LineupEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineupEditComponent", function() { return LineupEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var src_app_services_lineup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/lineup.service */ "./src/app/_services/lineup.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LineupEditComponent = /** @class */ (function () {
    function LineupEditComponent(route, router, alertify, lineupService, authService) {
        this.route = route;
        this.router = router;
        this.alertify = alertify;
        this.lineupService = lineupService;
        this.authService = authService;
        this.cancelLineupEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sectionNames = ['prelude', 'family', 'bridalParty', 'processional', 'unity', 'recessional', 'postlude'];
    }
    LineupEditComponent.prototype.unloadNotification = function ($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    };
    LineupEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.lineup = data['lineup'];
            _this.splitSongString();
        });
    };
    LineupEditComponent.prototype.splitSongString = function () {
        console.log(this.sectionNames);
        for (var i = 0; i < this.sectionNames.length; i++) {
            if (this.lineup[this.sectionNames[i]] != null && this.lineup[this.sectionNames[i]] !== '') {
                this.lineup[this.sectionNames[i]] = this.lineup[this.sectionNames[i]].split('|').filter(function (el) { return el.length !== 0; });
            }
        }
    };
    LineupEditComponent.prototype.updateLineup = function (sectionNames) {
        var _this = this;
        for (var i = 0; i < this.sectionNames.length; i++) {
            console.log('This ran ' + [i]);
            if (this.lineup[this.sectionNames[i]] != null && this.lineup[this.sectionNames[i]].length) {
                var joinedSongArray = this.lineup[this.sectionNames[i]].join('|');
                this.lineup[this.sectionNames[i]] = joinedSongArray;
            }
            else if (this.lineup[this.sectionNames[i]] == null) {
                this.lineup[this.sectionNames[i]] = '';
                var joinedNoSongArray = this.lineup[this.sectionNames[i]].toString();
                this.lineup[this.sectionNames[i]] = joinedNoSongArray;
            }
            else {
                var joinedNoSongArray = this.lineup[this.sectionNames[i]].toString();
                this.lineup[this.sectionNames[i]] = joinedNoSongArray;
            }
        }
        this.lineupService.updateLineup(this.authService.decodedToken.nameid, this.lineup).subscribe(function (next) {
            _this.alertify.success('Lineup successfully updated!');
            _this.editForm.reset(_this.lineup);
            _this.router.navigate(['lineup']);
        });
    };
    LineupEditComponent.prototype.cancel = function () {
        this.cancelLineupEdit.emit(false);
    };
    LineupEditComponent.prototype.removeSong = function (songIndex, section, sectionName) {
        console.log(this.lineup[sectionName]);
        var removedItemArray = section.filter(function (song, index) { return song[index] !== song[songIndex]; });
        var joinArray = removedItemArray.join('|');
        console.log(joinArray);
        this.updateSection = joinArray;
        this.lineup[sectionName] = this.updateSection.split('|').filter(function (el) { return el.length !== 0; });
        console.log(this.lineup.prelude);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LineupEditComponent.prototype, "cancelLineupEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LineupEditComponent.prototype, "editForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LineupEditComponent.prototype, "unloadNotification", null);
    LineupEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lineup-edit',
            template: __webpack_require__(/*! ./lineupEdit.component.html */ "./src/app/lineup/lineupEdit/lineupEdit.component.html"),
            styles: [__webpack_require__(/*! ./lineupEdit.component.css */ "./src/app/lineup/lineupEdit/lineupEdit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            src_app_services_lineup_service__WEBPACK_IMPORTED_MODULE_4__["LineupService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LineupEditComponent);
    return LineupEditComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\r\n  <form>\r\n\r\n  </form>\r\n</div> -->\r\n\r\n<form #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\r\n  <h2 class=\"text-center text-primary\">Log In</h2>\r\n  <hr>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"Username\" required [(ngModel)]=\"model.username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" required [(ngModel)]=\"model.password\">\r\n  </div>\r\n  <button [disabled]=\"!loginForm.valid\" class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Login</button>\r\n  <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
        this.cancelLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            _this.alertify.success('Logged in successfully');
        }, function (error) {
            _this.alertify.error(error);
        }, function () {
            _this.router.navigate(['/lineup/:id']);
        });
    };
    LoginComponent.prototype.cancel = function () {
        this.cancelLogin.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "cancelLogin", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle, .dropdown-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-link {\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  .dropdown {\r\n    display: none;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\" >Wedding Music</a>\r\n\r\n      <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <ul *ngIf='loggedIn()' class=\"navbar-nav mr-auto collapse navbar-collapse show\" [ngClass]=\"{show: navbarOpen}\" id=\"\">\r\n        <li *ngIf=\"navbarOpen\" class=\"nav-item\">\r\n            <a >\r\n              Welcome {{authService.decodedToken?.unique_name | titlecase}}\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\" (click)=\"closeNavbarAfterSelection()\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/lineup']\"  >Lineup</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\" (click)=\"closeNavbarAfterSelection()\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/songs']\"  >Browse Music</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\" (click)=\"closeNavbarAfterSelection()\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/saved-songs']\"  >Saved Songs</a>\r\n        </li>\r\n        <li *ngIf=\"navbarOpen\" class=\"nav-item\" (click)=\"closeNavbarAfterSelection()\">\r\n          <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\r\n        </li>\r\n      </ul>\r\n  \r\n      <div *ngIf='loggedIn()' class=\"dropdown\" dropdown>\r\n        <a class=\"dropdown-toggle\" dropdownToggle>\r\n          Welcome {{authService.decodedToken?.unique_name | titlecase}}\r\n        </a>\r\n        <div class=\"dropdown-menu mt-3\" *dropdownMenu>\r\n          <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-user\"></i>Logout</a>\r\n        </div>\r\n      </div>\r\n  \r\n      <!-- <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"login()\" >\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" name=\"username\" placeholder=\"Username\" required [(ngModel)]=\"model.username\">\r\n        <input class=\"form-control mr-sm-2\" type=\"password\" name=\"password\" placeholder=\"Password\" required [(ngModel)]=\"model.password\">\r\n        <button [disabled]=\"!loginForm.valid\" class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Login</button>\r\n      </form> -->\r\n  </div>\r\n</nav> "

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
        this.navbarOpen = false;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    // login() {
    //   this.authService.login(this.model).subscribe(next => {
    //     this.alertify.success('Logged in successfully');
    //   }, error => {
    //     this.alertify.error(error);
    //   }, () => {
    //     this.router.navigate(['/lineup/']);
    //   });
    // }
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.alertify.message('logged out');
        this.router.navigate(['/home']);
    };
    NavComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavComponent.prototype.closeNavbarAfterSelection = function () {
        this.navbarOpen = false;
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"register() && createLineup()\">\r\n  <h2 class=\"text-center text-primary\">Sign Up</h2>\r\n  <hr>\r\n\r\n  <div class=\"form-group\">\r\n    <input [ngClass]=\"{'is-invalid': registerForm.get('username').errors && registerForm.get('username').touched }\" type=\"text\" class=\"form-control\" formControlName=\"username\"  placeholder=\"Username\">\r\n    <div class=\"invalid-feedback\">Please provide a valid email</div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input [ngClass]=\"{'is-invalid': registerForm.get('password').errors && registerForm.get('password').touched }\" type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\r\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('required') && registerForm.get('password').touched\" >Password is required</div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('minlength') && registerForm.get('password').touched\" >Password must be at least 4 characters</div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('maxlength') && registerForm.get('password').touched\" >Password cannot exceed 8 characters</div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input type=\"password\" [ngClass]=\"{'is-invalid': registerForm.get('confirmPassword').errors && registerForm.get('confirmPassword').touched || registerForm.get('password').touched && registerForm.hasError('mismatch')}\" class=\"form-control\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\">\r\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('confirmPassword').hasError('required') && registerForm.get('confirmPassword').touched\" >Password is required</div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('confirmPassword').hasError('mismatch') && registerForm.get('confirmPassword').touched\" >Passwords must match</div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input [ngClass]=\"{'is-invalid': registerForm.get('weddingDate').errors && registerForm.get('weddingDate').touched}\" class=\"form-control\"\r\n      placeholder=\"Wedding Date\" formControlName=\"weddingDate\" type=\"text\" bsDatepicker [bsConfig]=\"bsConfig\">\r\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('weddingDate').touched && registerForm.get('weddingDate').hasError('required')\">Wedding Date is required</div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n      <p>Which instruments would you like?</p>\r\n      <select [ngClass]=\"{'is-invalid': registerForm.get('instruments').errors && registerForm.get('instruments').touched}\" class=\"form-control\"\r\n       formControlName=\"instruments\" type=\"text\">\r\n        <option value=\"\"></option>\r\n        <option value=\"String Quartet\">String Quartet</option>\r\n        <option value=\"Flute & String Quartet\" >Flute & String Quartet</option>\r\n        <option value=\"Trumpet & String Quartet\">Trumpet & String Quartet</option>\r\n        <option value=\"Violin & Viola\">Violin & Viola</option>\r\n        <option value=\"Violin & Bass\">Violin & Bass</option>\r\n        <option value=\"Violin, Viola, & Bass\">Violin, Viola, & Bass</option>\r\n        <option value=\"2 Violins, Viola, & Bass\">2 Violins, Viola, & Bass</option>\r\n        <option value=\"2 Violins, Viola, Bass & Piano\">2 Violins, Viola, Bass & Piano</option>\r\n        <option value=\"2 Violins, Bass\">2 Violins, Bass</option>\r\n        <option value=\"2 Violins, Bass & Drums\">2 Violins, Bass & Drums</option>\r\n        <option value=\"2 Violins\">2 Violins</option>\r\n        <option value=\"Piano & Violin\">Piano & Violin</option>\r\n        <option value=\"Violin, Bass & Drums\">Violin, Bass & Drums</option>\r\n        <option value=\"Jazz Combo\">Jazz Combo</option>\r\n      </select> \r\n    \r\n      <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('instruments').touched && registerForm.get('instruments').hasError('required')\">Instruments are required</div>\r\n    </div>\r\n\r\n\r\n\r\n  \r\n\r\n    <!-- <p>When is your wedding?</p>\r\n  <input [matDatepicker]=\"myDatepicker\" class=\"mg-auto\" name=\"weddingDate\" [(ngModel)]=\"model.weddingDate\">\r\n  <mat-datepicker #myDatepicker></mat-datepicker>\r\n  <mat-datepicker-toggle [for]=\"myDatepicker\"></mat-datepicker-toggle> -->\r\n\r\n  <div class=\"form-group text-center\">\r\n    <button class=\"btn btn-success\" type=\"submit\">Register</button>\r\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n  </div> \r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_lineup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/lineup.service */ "./src/app/_services/lineup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify, formBuilder, router, lineupService) {
        this.authService = authService;
        this.alertify = alertify;
        this.formBuilder = formBuilder;
        this.router = router;
        this.lineupService = lineupService;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.bsConfig = {
            containerClass: 'theme-dark-blue'
        };
        this.createRegisterForm();
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            weddingDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            instruments: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, { validator: this.passwordMatchValidator });
    };
    RegisterComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.alertify.success('Registration successful');
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(['/songs']);
                });
            });
        }
    };
    RegisterComponent.prototype.createLineup = function () {
        console.log('createLineup ran');
        setTimeout(function () {
            this.lineupService.createLineup(this.authService.decodedToken.nameid);
        }, 1000);
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_lineup_service__WEBPACK_IMPORTED_MODULE_5__["LineupService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _lineup_lineup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lineup/lineup.component */ "./src/app/lineup/lineup.component.ts");
/* harmony import */ var _songs_song_song_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./songs/song/song.component */ "./src/app/songs/song/song.component.ts");
/* harmony import */ var _saved_songs_saved_songs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saved-songs/saved-songs.component */ "./src/app/saved-songs/saved-songs.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _resolvers_lineup_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_resolvers/lineup.resolver */ "./src/app/_resolvers/lineup.resolver.ts");
/* harmony import */ var _lineup_lineupEdit_lineupEdit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lineup/lineupEdit/lineupEdit.component */ "./src/app/lineup/lineupEdit/lineupEdit.component.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ "./src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _resolvers_song_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_resolvers/song.resolver */ "./src/app/_resolvers/song.resolver.ts");
/* harmony import */ var _resolvers_savedSong_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_resolvers/savedSong.resolver */ "./src/app/_resolvers/savedSong.resolver.ts");










var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: 'lineup', component: _lineup_lineup_component__WEBPACK_IMPORTED_MODULE_1__["LineupComponent"], resolve: { lineup: _resolvers_lineup_resolver__WEBPACK_IMPORTED_MODULE_5__["LineupResolver"] } },
            { path: 'lineup/edit', component: _lineup_lineupEdit_lineupEdit_component__WEBPACK_IMPORTED_MODULE_6__["LineupEditComponent"], resolve: { lineup: _resolvers_lineup_resolver__WEBPACK_IMPORTED_MODULE_5__["LineupResolver"] }, canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__["PreventUnsavedChanges"]] },
            { path: 'songs', component: _songs_song_song_component__WEBPACK_IMPORTED_MODULE_2__["SongComponent"], resolve: { song: _resolvers_song_resolver__WEBPACK_IMPORTED_MODULE_8__["SongResolver"] } },
            { path: 'saved-songs', component: _saved_songs_saved_songs_component__WEBPACK_IMPORTED_MODULE_3__["SavedSongsComponent"], resolve: { song: _resolvers_savedSong_resolver__WEBPACK_IMPORTED_MODULE_9__["SavedSongResolver"] } }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/saved-songs/saved-songs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/saved-songs/saved-songs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/saved-songs/saved-songs.component.html":
/*!********************************************************!*\
  !*** ./src/app/saved-songs/saved-songs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3\">\r\n    <h3>Your Saved Songs</h3>\r\n    <h2>{{pagination.totalItems}} results</h2>\r\n  </div>\r\n  \r\n\r\n<div class=\"container mt-5\">\r\n\r\n  <form class=\"form-inline w-100 d-flex justify-content-center\" #form=\"ngForm\" (ngSubmit)=\"loadSongs()\" novalidate>\r\n  \r\n    <div class=\"form-group px-2 text-center\">\r\n      <label for=\"genre\">Genre: </label>\r\n      <select class=\"form-control ml-1\" style=\"width: 130px\" id=\"genre\" name=\"genre\" [(ngModel)]=\"songParams.genre\">\r\n        <option *ngFor=\"let genre of genreList\" [value]=\"genre.value\" >\r\n          {{genre.display}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group px-2\">\r\n      <label for=\"orderBy\">Order by: </label>\r\n      <select class=\"form-control ml-1\" style=\"width: 130px\" id=\"orderBy\" name=\"orderBy\" [(ngModel)]=\"songParams.orderBy\">\r\n        <option *ngFor=\"let order of orderList\" [value]=\"order.value\" >\r\n          {{order.display}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left:10px\">Apply Filters</button>\r\n    <button type=\"button\" class=\"btn btn-info\" style=\"margin-left:10px\" (click)=\"resetFilters()\" >Reset Filter</button>\r\n  \r\n  </form>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let song of songs\" class=\"col-lg-2 col-md-3 col-sm-6\">\r\n      <app-song-card [song]=\"song\"></app-song-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"d-flex justify-content-center\">\r\n    <pagination \r\n      [boundaryLinks]=\"true\" \r\n      [totalItems]=\"pagination.totalItems\"\r\n      [itemsPerPage]=\"pagination.itemsPerPage\"\r\n      [(ngModel)]=\"pagination.currentPage\"\r\n      (pageChanged)=\"pageChanged($event)\"\r\n    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n\r\n  </pagination>\r\n</div>"

/***/ }),

/***/ "./src/app/saved-songs/saved-songs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/saved-songs/saved-songs.component.ts ***!
  \******************************************************/
/*! exports provided: SavedSongsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedSongsComponent", function() { return SavedSongsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/song.service */ "./src/app/_services/song.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SavedSongsComponent = /** @class */ (function () {
    function SavedSongsComponent(authService, songService, route, alertify) {
        this.authService = authService;
        this.songService = songService;
        this.route = route;
        this.alertify = alertify;
        this.songParams = {};
        this.genreList = [
            { value: null, display: 'All' },
            { value: 'classical', display: 'Classical' },
            { value: 'pop', display: 'Pop' },
            { value: 'rock', display: 'Rock' },
            { value: 'blues', display: 'Blues' }
        ];
        this.orderList = [
            { value: 'title', display: 'Title' },
            { value: 'artist', display: 'Artist' }
        ];
    }
    SavedSongsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.songs = data['song'].result;
            _this.pagination = data['song'].pagination;
        });
        this.savedParam = 'Saved';
    };
    SavedSongsComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadSongs();
    };
    SavedSongsComponent.prototype.resetFilters = function () {
        this.songParams.orderBy = 'title';
        this.songParams.genre = '';
        this.loadSongs();
    };
    SavedSongsComponent.prototype.loadSongs = function () {
        var _this = this;
        this.songService.getSongs(this.pagination.currentPage, this.pagination.itemsPerPage, this.songParams, this.savedParam, this.authService.decodedToken.nameid)
            .subscribe(function (res) {
            _this.songs = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    SavedSongsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-saved-songs',
            template: __webpack_require__(/*! ./saved-songs.component.html */ "./src/app/saved-songs/saved-songs.component.html"),
            styles: [__webpack_require__(/*! ./saved-songs.component.css */ "./src/app/saved-songs/saved-songs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_song_service__WEBPACK_IMPORTED_MODULE_2__["SongService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], SavedSongsComponent);
    return SavedSongsComponent;
}());



/***/ }),

/***/ "./src/app/songs/song-card/song-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/songs/song-card/song-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover img {\r\n  -webkit-transform: scale(1.2, 1.2);\r\n          transform: scale(1.2, 1.2);\r\n  transition-duration: 500ms;\r\n  transition-timing-function: ease-out();\r\n  opacity: 0.7;\r\n}\r\n\r\n.card img {\r\n  -webkit-transform: scale(1.0, 1.0);\r\n          transform: scale(1.0, 1.0);\r\n  transition-duration: 500ms;\r\n  transition-timing-function: ease-out();\r\n}\r\n\r\n.card-img-wrapper {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.member-icons {\r\n  position: absolute;\r\n  bottom: -30%;\r\n  left: 0; \r\n  right: 0;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  opacity: 0;\r\n}\r\n\r\n.card-img-wrapper:hover .member-icons {\r\n  bottom: 0;\r\n  opacity: 1;\r\n}\r\n\r\n.animate {\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\nul li .btn {\r\n  padding: 15px;\r\n}\r\n\r\n.card-body {\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  ul li .btn{\r\n    padding: 25px;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/songs/song-card/song-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/songs/song-card/song-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <div class=\"card-img-wrapper\">\r\n    <img class=\"card-img-top\" src=\"https://i.scdn.co/image/7bcb62c3da44e5377f74f257d24b728c7a92fb03\" alt=\"{{song.title}}\">\r\n    <ul class=\"list-inline member-icons animate text-center\">\r\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\" (click)=\"openModal(template)\" ><i class=\"fa fa-plus\"></i></button></li>\r\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\" (click)=\"saveSong(song.id) \" ><i class=\"fa fa-heart\"></i></button></li>\r\n      <li class=\"list-inline-item\"><button (click)=previewSong(song.title,song.sampleArtist) class=\"btn btn-primary\"><i target=\"_blank\" routerLinkActive=\"router-link-active\" class=\"fa fa-play\"><a></a></i></button></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"card-body p-1\">\r\n    <h6 class=\"card-title text-center mb-1\"><i class=\"fa fa-music\"></i> {{song.title}}\r\n    </h6>\r\n    <p class=\"card-text text-muted text-center fa fa-user\">{{song.artist}}</p>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #template class=\"text-center\">\r\n  <div class=\"modal-header\">\r\n\r\n      <h4 class=\"modal-title\">Add Song</h4>\r\n    \r\n    \r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    \r\n  </div>\r\n  <div class=\"modal-body text-center\">\r\n    <p>{{song.title}} by {{song.artist}}</p>\r\n    <form #addForm=\"ngForm\" (ngSubmit)=\"addToLineup()\" [formGroup]=\"addSongForm\">\r\n      <div class=\"form-group\">\r\n        <select class=\"form-control\" formControlName=\"section\">\r\n          <option value=\"\"></option>\r\n          <option value=\"prelude\">Prelude</option>\r\n          <option value=\"family\">Family</option>\r\n          <option value=\"bridalParty\">Bridal Party</option>\r\n          <option value=\"processional\">Processional</option>\r\n          <option value=\"unity\">Unity</option>\r\n          <option value=\"recessional\">Recessional</option>\r\n          <option value=\"postlude\">Postlude</option>\r\n        </select>\r\n      </div>\r\n    <button type=\"submit\" class=\"btn btn-success\">Add</button>\r\n    </form>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/songs/song-card/song-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/songs/song-card/song-card.component.ts ***!
  \********************************************************/
/*! exports provided: SongCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongCardComponent", function() { return SongCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/song.service */ "./src/app/_services/song.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_lineup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/lineup.service */ "./src/app/_services/lineup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SongCardComponent = /** @class */ (function () {
    function SongCardComponent(songService, alertify, route, http, authService, modalService, formBuilder, lineupService) {
        this.songService = songService;
        this.alertify = alertify;
        this.route = route;
        this.authService = authService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.lineupService = lineupService;
    }
    SongCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lineupService.getLineup(this.authService.decodedToken.nameid).subscribe(function (data) {
            _this.lineup = data;
        });
    };
    SongCardComponent.prototype.saveSong = function (songId) {
        var _this = this;
        this.songService.savedSong(this.authService.decodedToken.nameid, songId).subscribe(function (data) {
            _this.alertify.success('You have saved ' + _this.song.title);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    // attempting to retrieve the previewUrl directly from backend results in a 500 error
    SongCardComponent.prototype.previewSong = function (title, artist) {
        var _this = this;
        this.songService.getSpotify(title, artist).subscribe(function (res) {
            // @ts-ignore
            if (res.preview_url !== null) {
                // @ts-ignore
                window.open(res.preview_url, '_blank', 'top=500,left=500,width=200,height=100');
                // @ts-ignore
            }
            else if (res.preview_url === null) {
                _this.songService.getSpotifyAlt(title, artist).subscribe(function (response) {
                    // @ts-ignore
                    if (response.preview_url !== null) {
                        // @ts-ignore
                        window.open(response.preview_url, '_blank', 'top=500,left=500,width=200,height=100');
                    }
                    else {
                        _this.alertify.error('Sorry, there is no sample for this selection');
                    }
                });
            }
            else {
                _this.alertify.error('Sorry, there is no sample for this selection');
            }
        });
    };
    SongCardComponent.prototype.openModal = function (template) {
        this.addSongForm = this.formBuilder.group({ section: [''], song: "|" + this.song.title + " by " + this.song.artist });
        this.modalRef = this.modalService.show(template);
    };
    SongCardComponent.prototype.updateLineup = function () {
        var _this = this;
        console.log(this.lineup[this.addSongForm.value.section]);
        if (this.lineup[this.addSongForm.value.section] == null) {
            this.lineup[this.addSongForm.value.section] = '';
        }
        this.lineup[this.addSongForm.value.section] += this.addSongForm.value.song;
        this.lineupService.updateLineup(this.authService.decodedToken.nameid, this.lineup).subscribe(function (next) {
            _this.alertify.success('Lineup successfully updated!');
            _this.addSongForm.reset(_this.lineup);
        });
    };
    SongCardComponent.prototype.addToLineup = function () {
        console.log(this.addSongForm.value.song);
        this.updateLineup();
        this.modalRef.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SongCardComponent.prototype, "song", void 0);
    SongCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-song-card',
            template: __webpack_require__(/*! ./song-card.component.html */ "./src/app/songs/song-card/song-card.component.html"),
            styles: [__webpack_require__(/*! ./song-card.component.css */ "./src/app/songs/song-card/song-card.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], src_app_services_lineup_service__WEBPACK_IMPORTED_MODULE_8__["LineupService"]])
    ], SongCardComponent);
    return SongCardComponent;
}());



/***/ }),

/***/ "./src/app/songs/song/song.component.css":
/*!***********************************************!*\
  !*** ./src/app/songs/song/song.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/songs/song/song.component.html":
/*!************************************************!*\
  !*** ./src/app/songs/song/song.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3\">\r\n    <h3>Music Selection</h3>\r\n    <h2>{{pagination.totalItems}} results</h2>\r\n  </div>\r\n  \r\n\r\n<div class=\"container mt-5\">\r\n\r\n  <form class=\"form-inline w-100 d-flex justify-content-center\" #form=\"ngForm\" (ngSubmit)=\"loadSongs()\" novalidate>\r\n  \r\n    <div class=\"form-group px-2 text-center\">\r\n      <label for=\"genre\">Genre: </label>\r\n      <select class=\"form-control ml-1\" style=\"width: 130px;\" id=\"genre\" name=\"genre\" [(ngModel)]=\"songParams.genre\">\r\n        <option *ngFor=\"let genre of genreList\" [value]=\"genre.value\" >\r\n          {{genre.display}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group px-2\">\r\n      <label for=\"orderBy\">Order by: </label>\r\n      <select class=\"form-control ml-1\" style=\"width: 130px\" id=\"orderBy\" name=\"orderBy\" [(ngModel)]=\"songParams.orderBy\">\r\n        <option *ngFor=\"let order of orderList\" [value]=\"order.value\" >\r\n          {{order.display}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left:10px\">Apply Filters</button>\r\n    <button type=\"button\" class=\"btn btn-info\" style=\"margin-left:10px\" (click)=\"resetFilters()\" >Reset Filter</button>\r\n  \r\n  </form>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let song of songs\" class=\"col-lg-2 col-md-3 col-sm-6\">\r\n      <app-song-card [song]=\"song\"></app-song-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"d-flex justify-content-center\">\r\n    <pagination \r\n      [boundaryLinks]=\"true\" \r\n      [totalItems]=\"pagination.totalItems\"\r\n      [itemsPerPage]=\"pagination.itemsPerPage\"\r\n      [(ngModel)]=\"pagination.currentPage\"\r\n      (pageChanged)=\"pageChanged($event)\"\r\n    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n\r\n  </pagination>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/songs/song/song.component.ts":
/*!**********************************************!*\
  !*** ./src/app/songs/song/song.component.ts ***!
  \**********************************************/
/*! exports provided: SongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongComponent", function() { return SongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/song.service */ "./src/app/_services/song.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_lineup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/lineup.service */ "./src/app/_services/lineup.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SongComponent = /** @class */ (function () {
    function SongComponent(songService, alertify, route, lineupService, authService) {
        this.songService = songService;
        this.alertify = alertify;
        this.route = route;
        this.lineupService = lineupService;
        this.authService = authService;
        this.songParams = {};
        this.genreList = [
            { value: null, display: 'All' },
            { value: 'classical', display: 'Classical' },
            { value: 'pop', display: 'Pop' },
            { value: 'rock', display: 'Rock' },
            { value: 'blues', display: 'Blues' }
        ];
        this.orderList = [
            { value: 'title', display: 'Title' },
            { value: 'artist', display: 'Artist' }
        ];
    }
    SongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.songs = data['song'].result;
            _this.pagination = data['song'].pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    SongComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadSongs();
    };
    SongComponent.prototype.resetFilters = function () {
        this.songParams.orderBy = 'title';
        this.songParams.genre = '';
        this.loadSongs();
    };
    SongComponent.prototype.loadSongs = function () {
        var _this = this;
        this.songService.getSongs(this.pagination.currentPage, this.pagination.itemsPerPage, this.songParams, null, null)
            .subscribe(function (res) {
            _this.songs = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    SongComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-song',
            template: __webpack_require__(/*! ./song.component.html */ "./src/app/songs/song/song.component.html"),
            styles: [__webpack_require__(/*! ./song.component.css */ "./src/app/songs/song/song.component.css")]
        }),
        __metadata("design:paramtypes", [_services_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_lineup_service__WEBPACK_IMPORTED_MODULE_4__["LineupService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], SongComponent);
    return SongComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://wa-app.azurewebsites.net/wa.database.windows.net/api/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\GitHub\dotnet-personal-project\WeddingMusic-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map