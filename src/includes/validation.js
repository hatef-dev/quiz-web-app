import { Form as veeForm, Field as veeField, ErrorMessage } from 'vee-validate'
import { defineRule } from 'vee-validate'

export default {
  install(app) {
    app.component('vee-field', veeField)
    app.component('vee-form', veeForm)
    app.component('error-message', ErrorMessage)
  },
}
