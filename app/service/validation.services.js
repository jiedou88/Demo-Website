"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'minlength': "Minimum length " + validatorValue.requiredLength,
            'invalidPhoneNumber': 'Invalid phone number',
        };
        return config[validatorName];
    };
    ValidationService.phoneValidator = function (control) {
        if (control.value == '' || control.value.match(/^\(?([0-9]{3})\)?[-.● ]?([0-9]{3})[-.●]?([0-9]{4})$/)) {
            return null;
        }
        else {
            return { 'invalidPhoneNumber': true };
        }
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.services.js.map