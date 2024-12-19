<script>
export default {
    setup() {
        const response = useResponseStore();
        const helpers = useHelperStore();
        const { t } = useI18n();
        return { response, helpers, t };
    },
    props: {
        autocomplete: {
            type: [Boolean, String],
            default: 'off',
        },
        currency: {
            type: [Boolean, String],
            default: false
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: null,
        },
        noLabel: {
            type: Boolean,
            default: false,
        },
        step: {
            type: [String, Number],
            default: null,
        },
        maxlength: {
            type: [String, Number],
            default: "",
        },
        min: {
            type: [String, Number],
            default: "",
        },
        max: {
            type: [String, Number],
            default: "",
        },
        modelValue: [String, Object, Number, Date],
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: "",
        },
        options: {
            type: Array,
            default: [],
        },
        type: {
            type: String,
            default: 'text',
        },
        iconRight: {
            type: String,
            default: null,
        },
        iconLeft: {
            type: String,
            default: null,
        },
        iconRightColor: {
            type: String,
            default: null,
        },
        iconLeftColor: {
            type: String,
            default: null,
        },
        size: {
            type: String,
            default: "small",
        }
    },
    computed: {
        _label() {
            if (this.label) {
                return this.label;
            } else if (this.name) {
                return this.t(this.helpers.headline(this.name))
            } else {
                return null;
            }
        },
        _placeholder() {
            if (this.placeholder) {
                return this.placeholder;
            } else if (this._label != null) {
                return this.t('Please Fill') + ' ' + this.t(this.helpers.headline(this._label));
            } else {
                return this.t('Please Fill Data . . .');
            }
        },
        decimal() {
            if (this.step) {
                return this.getDecimalLength(parseFloat(this.step));
            }
            return 0;
        },
        viewValue() {
            if (this.modelValue == 0) {
                if (this.currency) {
                    return `${this.currency}. 0`;
                } else {
                    return '0';
                }
            }
            if (!this.modelValue) return '-';

            if (this.type == 'number') {
                if (this.decimal > 0) {
                    return parseFloat(this.modelValue).toFixed(this.decimal)
                } else {
                    return this.helpers.numberFormat(this.modelValue);
                }
            } else if (this.type === 'password') {
                return '••••••••';
            }

            else if (this.currency) {
                if (this.decimal > 0) {
                    return parseFloat(this.modelValue).toFixed(this.decimal)
                } else {
                    return `${this.currency}. ${this.helpers.numberFormat(this.modelValue)}`;
                }
            }
            return this.modelValue;
        }
    },
    methods: {
        getDecimalLength(number) {
            if (typeof number !== 'number') {
                throw new Error('Input must be a number');
            }

            const decimalPart = (number % 1).toString().split('.')[1];

            return decimalPart ? decimalPart.length : 0;
        },
        formatNumber(value) {
            return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    },
    watch: {
        'modelValue': {
            handler(value) {
                if (value) {
                    if (this.response.errors && this.response.errors[this.name]) delete this.response.errors[this.name];
                    if (this.name && this.name.toLowerCase() == 'code') this.$emit('update:modelValue', value.toUpperCase())
                    if (this.currency) {
                        this.$emit('update:modelValue', this.formatNumber(value));
                    }
                }
            }
        }
    }
}
</script>

<template>
    <div class="max-w-sm mb-3">
        <template v-if="_label && !noLabel">
            <label class="label label-text font-bold" for="errorInput">
                {{ _label }}
                <span v-if="required && response.hasResponse" class="label-text-alt text-red-500">*Required</span>
                <span v-if="!response.hasResponse" class="loading loading-spinner loading-xs" />
            </label>
        </template>
        <div class="input-group">
            <span v-if="iconLeft" class="input-group-text">
                <component v-bind:is="`Icon${helpers.capitalize(iconLeft)}`" />
            </span>
            <input ref="input" class="input grow" :class="{ 'is-invalid': response.errors && response.errors[name] }"
                :id="name" :type="type" :placeholder="_placeholder" :value="modelValue" :required="required"
                :readonly="readonly" :maxlength="maxlength" :autocomplete="autocomplete" :step="step" :min="min"
                :max="max" @input="$emit('update:modelValue', $event.target.value)" @focus="$event.target.select()"
                :disabled="!response.hasResponse" />
            <span v-if="iconRight && type !== 'password' && !response.errors" class="input-group-text">
                <component v-bind:is="`Icon${helpers.capitalize(iconRight)}`" />
            </span>
            <span v-else-if="response.errors && response.errors[name]" class="input-group-text">
                <IconAlertCircle />
            </span>
            <span v-else-if="type === 'password'" class="input-group-text">
                <button type="button" :data-toggle-password='`{ "target": "#${name}" }`' class="block"
                    aria-label="password toggle">
                    <span
                        class="icon-[tabler--eye] text-base-content/80 password-active:block hidden size-5 flex-shrink-0"></span>
                    <span
                        class="icon-[tabler--eye-off] text-base-content/80 password-active:hidden block size-5 flex-shrink-0"></span>
                </button>
            </span>

        </div>
        <span class="label" v-if="response.errors && response.errors[name]">
            <span class="label-text-alt">
                {{ response.errors[name].toString() }}
            </span>
        </span>
    </div>
</template>
