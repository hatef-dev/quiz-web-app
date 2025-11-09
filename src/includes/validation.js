import { Form as veeForm, Field as veeField, ErrorMessage } from 'vee-validate'
import { defineRule } from 'vee-validate'
import {
  required,
  email,
  min,
  max,
  min_value as minValue,
  max_value as maxValue,
  alpha_spaces as alphaSpaces,
  confirmed,
  not_one_of as exclude,
} from '@vee-validate/rules'
import { configure } from 'vee-validate'

export default {
  install(app) {
    app.component('vee-field', veeField)
    app.component('vee-form', veeForm)
    app.component('error-message', ErrorMessage)

    defineRule('required', required)
    defineRule('exclude', exclude)
    defineRule('email', email)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alphaSpaces', alphaSpaces)
    defineRule('confirmed', confirmed)
    defineRule('minValue', minValue)
    defineRule('maxValue', maxValue)

    configure({
      generateMessage: (ctx) => {
        let error = ctx.rule.params[0]
        const messages = {
          required: 'This field is required',
          email: 'This field must be a valid email',
          min: `This field must be at least ${error} characters`,
          max: `This field must be at most ${error} characters`,
          minValue: `This field must be at least ${error}`,
          maxValue: `This field must be at most ${error}`,
          alphaSpaces: 'This field must only contain letters and spaces',
          confirmed: `This field must match the password field `,
          exclude: 'This country is not available because this country is a bullshit',
        }
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `This field ${ctx.field} invalid`

        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    })
  },
}
