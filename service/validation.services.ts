export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'invalidPhoneNumber': 'Invalid phone number',
        };
        return config[validatorName];
    }
    static phoneValidator(control: any) {
        if (control.value == '' || control.value.match(/^\(?([0-9]{3})\)?[-.● ]?([0-9]{3})[-.●]?([0-9]{4})$/)) {
            return null;
        } else {
            return { 'invalidPhoneNumber': true };
        }
    }
}