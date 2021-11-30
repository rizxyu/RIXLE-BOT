"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var get_urls_1 = require("get-urls");
var default_1 = /** @class */ (function () {
    function default_1() {
        this.readdirRecursive = function (directory) {
            var results = [];
            var read = function (path) {
                var files = fs_1.readdirSync(path);
                for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                    var file = files_1[_i];
                    var dir = path_1.join(path, file);
                    if (fs_1.statSync(dir).isDirectory())
                        read(dir);
                    else
                        results.push(dir);
                }
            };
            read(directory);
            return results;
        };
        this.capitalize = function (text) { return "" + text.charAt(0).toUpperCase() + text.slice(1); };
        this.getUrls = function (text) { return Array.from(get_urls_1.default(text)); };
        this.chunk = function (arr, length) {
            var result = [];
            for (var i = 0; i < arr.length / length; i++) {
                result.push(arr.slice(i * length, i * length + length));
            }
            return result;
        };
    }
    return default_1;
}());
exports.default = default_1;
