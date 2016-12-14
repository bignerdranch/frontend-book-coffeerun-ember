import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  strength: 10,
  shouldValidateEmail: false,
  emailAddress: null,
  isEmailAddressValid: null,
  emailIsValidStyle: Ember.computed('isEmailAddressValid', function() {
    return this.get('isEmailAddressValid') ? "has-success" : "has-danger";
  }),
  emailAddressChanged: Ember.observer('emailAddress', function() {
    let isValid = true;
    let testValue = this.get('emailAddress');
    let emailValidationObj = this.get('validations.emailAddress');
    let emailValidationKeys = Object.keys(this.get('validations.emailAddress'));
    if(emailValidationKeys) {
      emailValidationKeys.forEach(function(key) {
        switch(key) {
            case 'format':
              isValid =  emailValidationObj[key].fn.test(testValue);
            break;
        }
      });
      this.set('isEmailAddressValid', isValid);
    }
  }),
  validations: {
    emailAddress: {
      format: {
        fn: /.+@bignerdranch\.com$/
      }
    }
  },
  // add form events
  submit(event) {
    event.preventDefault();
    // method to validate form values
    var data = {};
    this.$().serializeArray().forEach(function(item) {
      data[item.name] = item.value;
    });
    this.get('element').reset();
    this.set('isEmailAddressValid', false);
    this.set('shouldValidateEmail', false);
    this.get('submitForm')(data);
  },
  actions: {
    onEmailFocus(){
      this.set('shouldValidateEmail', true);
    }
  }
});
