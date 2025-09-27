"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/AuthContext.tsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        const userData = localStorage.getItem(\"user\");\n        if (token && userData) {\n            try {\n                setUser(JSON.parse(userData));\n            } catch (error) {\n                localStorage.removeItem(\"token\");\n                localStorage.removeItem(\"user\");\n            }\n        }\n        setLoading(false);\n    }, []);\n    const login = async (email, password)=>{\n        try {\n            const response = await fetch(\"/api/auth/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            const data = await response.json();\n            if (response.ok) {\n                localStorage.setItem(\"token\", data.token);\n                localStorage.setItem(\"user\", JSON.stringify(data.user));\n                setUser(data.user);\n                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Login successful!\");\n                return true;\n            } else {\n                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(data.message || \"Login failed\");\n                return false;\n            }\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Network error. Please try again.\");\n            return false;\n        }\n    };\n    const logout = ()=>{\n        localStorage.removeItem(\"token\");\n        localStorage.removeItem(\"user\");\n        setUser(null);\n        router.push(\"/login\");\n        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.info(\"Logged out successfully\");\n    };\n    const isAuthenticated = !!user;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout,\n            loading,\n            isAuthenticated\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Yazid\\\\project\\\\CompanyDeviceManagementPrompt.md\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\nfunction useAuth() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (context === undefined) {\n        throw new Error(\"useAuth must be used within an AuthProvider\");\n    }\n    return context;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RjtBQUNqRDtBQUNEO0FBaUJ2QyxNQUFNTyw0QkFBY04sb0RBQWFBLENBQThCTztBQUV4RCxTQUFTQyxhQUFhLEVBQUVDLFFBQVEsRUFBMkI7SUFDaEUsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFjO0lBQzlDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNWSxTQUFTVixzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVksUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBQ25DLE1BQU1DLFdBQVdGLGFBQWFDLE9BQU8sQ0FBQztRQUV0QyxJQUFJRixTQUFTRyxVQUFVO1lBQ3JCLElBQUk7Z0JBQ0ZQLFFBQVFRLEtBQUtDLEtBQUssQ0FBQ0Y7WUFDckIsRUFBRSxPQUFPRyxPQUFPO2dCQUNkTCxhQUFhTSxVQUFVLENBQUM7Z0JBQ3hCTixhQUFhTSxVQUFVLENBQUM7WUFDMUI7UUFDRjtRQUNBVCxXQUFXO0lBQ2IsR0FBRyxFQUFFO0lBRUwsTUFBTVUsUUFBUSxPQUFPQyxPQUFlQztRQUNsQyxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLG1CQUFtQjtnQkFDOUNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTVgsS0FBS1ksU0FBUyxDQUFDO29CQUFFUDtvQkFBT0M7Z0JBQVM7WUFDekM7WUFFQSxNQUFNTyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7WUFFaEMsSUFBSVAsU0FBU1EsRUFBRSxFQUFFO2dCQUNmbEIsYUFBYW1CLE9BQU8sQ0FBQyxTQUFTSCxLQUFLakIsS0FBSztnQkFDeENDLGFBQWFtQixPQUFPLENBQUMsUUFBUWhCLEtBQUtZLFNBQVMsQ0FBQ0MsS0FBS3RCLElBQUk7Z0JBQ3JEQyxRQUFRcUIsS0FBS3RCLElBQUk7Z0JBQ2pCTCxpREFBS0EsQ0FBQytCLE9BQU8sQ0FBQztnQkFDZCxPQUFPO1lBQ1QsT0FBTztnQkFDTC9CLGlEQUFLQSxDQUFDZ0IsS0FBSyxDQUFDVyxLQUFLSyxPQUFPLElBQUk7Z0JBQzVCLE9BQU87WUFDVDtRQUNGLEVBQUUsT0FBT2hCLE9BQU87WUFDZGhCLGlEQUFLQSxDQUFDZ0IsS0FBSyxDQUFDO1lBQ1osT0FBTztRQUNUO0lBQ0Y7SUFFQSxNQUFNaUIsU0FBUztRQUNidEIsYUFBYU0sVUFBVSxDQUFDO1FBQ3hCTixhQUFhTSxVQUFVLENBQUM7UUFDeEJYLFFBQVE7UUFDUkcsT0FBT3lCLElBQUksQ0FBQztRQUNabEMsaURBQUtBLENBQUNtQyxJQUFJLENBQUM7SUFDYjtJQUVBLE1BQU1DLGtCQUFrQixDQUFDLENBQUMvQjtJQUUxQixxQkFDRSw4REFBQ0osWUFBWW9DLFFBQVE7UUFBQ0MsT0FBTztZQUFFakM7WUFBTWE7WUFBT2U7WUFBUTFCO1lBQVM2QjtRQUFnQjtrQkFDMUVoQzs7Ozs7O0FBR1A7QUFFTyxTQUFTbUM7SUFDZCxNQUFNQyxVQUFVNUMsaURBQVVBLENBQUNLO0lBQzNCLElBQUl1QyxZQUFZdEMsV0FBVztRQUN6QixNQUFNLElBQUl1QyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbXBhbnktZGV2aWNlLW1hbmFnZW1lbnQvLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/NmQ4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcm9sZTogJ0FkbWluJyB8ICdWaWV3ZXInO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXV0aENvbnRleHRUeXBlIHtcclxuICB1c2VyOiBVc2VyIHwgbnVsbDtcclxuICBsb2dpbjogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgbG9nb3V0OiAoKSA9PiB2b2lkO1xyXG4gIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIFxyXG4gICAgaWYgKHRva2VuICYmIHVzZXJEYXRhKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VXNlcihKU09OLnBhcnNlKHVzZXJEYXRhKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2F1dGgvbG9naW4nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEudXNlcikpO1xyXG4gICAgICAgIHNldFVzZXIoZGF0YS51c2VyKTtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCdMb2dpbiBzdWNjZXNzZnVsIScpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKGRhdGEubWVzc2FnZSB8fCAnTG9naW4gZmFpbGVkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdC5lcnJvcignTmV0d29yayBlcnJvci4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICB0b2FzdC5pbmZvKCdMb2dnZWQgb3V0IHN1Y2Nlc3NmdWxseScpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhdXNlcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2dpbiwgbG9nb3V0LCBsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWQgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndXNlQXV0aCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlcicpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidG9hc3QiLCJBdXRoQ29udGV4dCIsInVuZGVmaW5lZCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJEYXRhIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJyZW1vdmVJdGVtIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsInNldEl0ZW0iLCJzdWNjZXNzIiwibWVzc2FnZSIsImxvZ291dCIsInB1c2giLCJpbmZvIiwiaXNBdXRoZW50aWNhdGVkIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ \"./theme.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_2__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__, _theme__WEBPACK_IMPORTED_MODULE_5__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_2__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__, _theme__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: _theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Yazid\\\\project\\\\CompanyDeviceManagementPrompt.md\\\\pages\\\\_app.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {\n                    position: \"top-right\",\n                    autoClose: 5000,\n                    hideProgressBar: false,\n                    newestOnTop: false,\n                    closeOnClick: true,\n                    rtl: false,\n                    pauseOnFocusLoss: true,\n                    draggable: true,\n                    pauseOnHover: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Yazid\\\\project\\\\CompanyDeviceManagementPrompt.md\\\\pages\\\\_app.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Yazid\\\\project\\\\CompanyDeviceManagementPrompt.md\\\\pages\\\\_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Yazid\\\\project\\\\CompanyDeviceManagementPrompt.md\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0Y7QUFDRDtBQUNRO0FBQzFCO0FBRWQsU0FBU0ksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBTztJQUN2RCxxQkFDRSw4REFBQ04sNERBQWNBO1FBQUNHLE9BQU9BLDhDQUFLQTtrQkFDMUIsNEVBQUNELCtEQUFZQTs7OEJBQ1gsOERBQUNHO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs4QkFDeEIsOERBQUNMLDBEQUFjQTtvQkFDYk0sVUFBUztvQkFDVEMsV0FBVztvQkFDWEMsaUJBQWlCO29CQUNqQkMsYUFBYTtvQkFDYkMsWUFBWTtvQkFDWkMsS0FBSztvQkFDTEMsZ0JBQWdCO29CQUNoQkMsU0FBUztvQkFDVEMsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wYW55LWRldmljZS1tYW5hZ2VtZW50Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vdGhlbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogYW55KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8VG9hc3RDb250YWluZXJcclxuICAgICAgICAgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcclxuICAgICAgICAgIGF1dG9DbG9zZT17NTAwMH1cclxuICAgICAgICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XHJcbiAgICAgICAgICBuZXdlc3RPblRvcD17ZmFsc2V9XHJcbiAgICAgICAgICBjbG9zZU9uQ2xpY2tcclxuICAgICAgICAgIHJ0bD17ZmFsc2V9XHJcbiAgICAgICAgICBwYXVzZU9uRm9jdXNMb3NzXHJcbiAgICAgICAgICBkcmFnZ2FibGVcclxuICAgICAgICAgIHBhdXNlT25Ib3ZlclxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJDaGFrcmFQcm92aWRlciIsIlRvYXN0Q29udGFpbmVyIiwiQXV0aFByb3ZpZGVyIiwidGhlbWUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsIm5ld2VzdE9uVG9wIiwiY2xvc2VPbkNsaWNrIiwicnRsIiwicGF1c2VPbkZvY3VzTG9zcyIsImRyYWdnYWJsZSIsInBhdXNlT25Ib3ZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./theme.ts":
/*!******************!*\
  !*** ./theme.ts ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        brand: {\n            50: \"#e6f3ff\",\n            100: \"#b3d9ff\",\n            200: \"#80bfff\",\n            300: \"#4da6ff\",\n            400: \"#1a8cff\",\n            500: \"#0066cc\",\n            600: \"#0052a3\",\n            700: \"#003d7a\",\n            800: \"#002952\",\n            900: \"#001429\"\n        }\n    },\n    components: {\n        Button: {\n            baseStyle: {\n                fontWeight: \"semibold\",\n                borderRadius: \"md\"\n            },\n            variants: {\n                solid: {\n                    bg: \"brand.500\",\n                    color: \"white\",\n                    _hover: {\n                        bg: \"brand.600\"\n                    }\n                }\n            }\n        },\n        Table: {\n            variants: {\n                simple: {\n                    th: {\n                        borderColor: \"gray.200\",\n                        bg: \"gray.50\"\n                    },\n                    td: {\n                        borderColor: \"gray.200\"\n                    }\n                }\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxRQUFRRCw2REFBV0EsQ0FBQztJQUN4QkUsUUFBUTtRQUNOQyxPQUFPO1lBQ0wsSUFBSTtZQUNKLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztRQUNQO0lBQ0Y7SUFDQUMsWUFBWTtRQUNWQyxRQUFRO1lBQ05DLFdBQVc7Z0JBQ1RDLFlBQVk7Z0JBQ1pDLGNBQWM7WUFDaEI7WUFDQUMsVUFBVTtnQkFDUkMsT0FBTztvQkFDTEMsSUFBSTtvQkFDSkMsT0FBTztvQkFDUEMsUUFBUTt3QkFDTkYsSUFBSTtvQkFDTjtnQkFDRjtZQUNGO1FBQ0Y7UUFDQUcsT0FBTztZQUNMTCxVQUFVO2dCQUNSTSxRQUFRO29CQUNOQyxJQUFJO3dCQUNGQyxhQUFhO3dCQUNiTixJQUFJO29CQUNOO29CQUNBTyxJQUFJO3dCQUNGRCxhQUFhO29CQUNmO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZWhCLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wYW55LWRldmljZS1tYW5hZ2VtZW50Ly4vdGhlbWUudHM/NTUyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBicmFuZDoge1xyXG4gICAgICA1MDogJyNlNmYzZmYnLFxyXG4gICAgICAxMDA6ICcjYjNkOWZmJyxcclxuICAgICAgMjAwOiAnIzgwYmZmZicsXHJcbiAgICAgIDMwMDogJyM0ZGE2ZmYnLFxyXG4gICAgICA0MDA6ICcjMWE4Y2ZmJyxcclxuICAgICAgNTAwOiAnIzAwNjZjYycsXHJcbiAgICAgIDYwMDogJyMwMDUyYTMnLFxyXG4gICAgICA3MDA6ICcjMDAzZDdhJyxcclxuICAgICAgODAwOiAnIzAwMjk1MicsXHJcbiAgICAgIDkwMDogJyMwMDE0MjknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEJ1dHRvbjoge1xyXG4gICAgICBiYXNlU3R5bGU6IHtcclxuICAgICAgICBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJ21kJyxcclxuICAgICAgfSxcclxuICAgICAgdmFyaWFudHM6IHtcclxuICAgICAgICBzb2xpZDoge1xyXG4gICAgICAgICAgYmc6ICdicmFuZC41MDAnLFxyXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICBfaG92ZXI6IHtcclxuICAgICAgICAgICAgYmc6ICdicmFuZC42MDAnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFRhYmxlOiB7XHJcbiAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgc2ltcGxlOiB7XHJcbiAgICAgICAgICB0aDoge1xyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ2dyYXkuMjAwJyxcclxuICAgICAgICAgICAgYmc6ICdncmF5LjUwJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZDoge1xyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ2dyYXkuMjAwJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcclxuIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwidGhlbWUiLCJjb2xvcnMiLCJicmFuZCIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJiYXNlU3R5bGUiLCJmb250V2VpZ2h0IiwiYm9yZGVyUmFkaXVzIiwidmFyaWFudHMiLCJzb2xpZCIsImJnIiwiY29sb3IiLCJfaG92ZXIiLCJUYWJsZSIsInNpbXBsZSIsInRoIiwiYm9yZGVyQ29sb3IiLCJ0ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./theme.ts\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();