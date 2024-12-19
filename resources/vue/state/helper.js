import locales from '~/locales.json'

export const useHelperStore = defineStore('helpers', {
    state: () => ({
        name: null,
    }),

    actions: {
        translateObjectKey(obj) {
            const { t } = useI18n();
            let exportFields = {};

            Object.keys(obj).forEach(key => {
                exportFields[t(key)] = obj[key];
            });

            return exportFields;
        },
        exportFieldsHeader(inputArray) {
            let exportFields = {};
            const { t } = useI18n();

            inputArray.forEach(item => {
                const key = Object.keys(item)[0];
                const value = t(item[key]);
                exportFields[value] = key;
            });

            return exportFields;
        },
        sortableHeader(header) {
            return header
                .filter(obj => {
                    const keys = Object.keys(obj);
                    const firstKey = keys[0];

                    // Check conditions
                    return !firstKey.includes('.');
                })
                .map(obj => Object.keys(obj)[0]);
        },
        searchableHeader(header) {
            return header
                .filter(obj => {
                    const keys = Object.keys(obj);
                    const firstKey = keys[0];

                    // Check conditions
                    return !firstKey.startsWith('is') &&
                        !firstKey.startsWith('has') &&
                        !firstKey.startsWith('can');
                })
                .map(obj => Object.keys(obj)[0]);
        },
        filterData(obj, propertiesToShow) {
            const filteredData = {};

            propertiesToShow.forEach(property => {
                if (obj.hasOwnProperty(property)) {
                    filteredData[property] = obj[property];
                }
            });

            return filteredData;
        },
        capitalize(string) {
            return _.capitalize(string);
        },
        headline(str) {
            if (str == null) return '';
            str = str.replaceAll('-', ' ').replaceAll('_', ' ');
            str = str.replace(/([a-z])([A-Z])/g, '$1 $2')
                .replace(/^./, function (match) {
                    return match.toUpperCase();
                });
            str.toLowerCase();
            return str.replace(/\b\w/g, function (match) {
                return match.toUpperCase();
            });
        },
        parseUrl(input) {
            const params = new URLSearchParams();
            for (const key in input) {
                if (Array.isArray(input[key])) {
                    input[key].forEach(val => {
                        if (val != null || val != "null")
                            params.append(key + '[]', val)
                    })
                } else {
                    params.append(key, input[key]);
                }
            }

            return "?" + params.toString();
        },
        sort(valuePath, array) {
            let path = valuePath.split('.')

            return array.sort((a, b) => {
                return getValue(b, path) - getValue(a, path)
            });

            function getValue(obj, path) {
                path.forEach(path => obj = obj[path])
                return obj;
            }
        },
        numberFormat(number, decimals = 0, dec_point = ".", thousands_sep = ",") {
            let n = number,
                c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals,
                d = dec_point == undefined ? "." : dec_point,
                t = thousands_sep == undefined ? "," : thousands_sep,
                s = n < 0 ? "-" : "",
                i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
                j = i.length > 3 ? i.length % 3 : 0;
            return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
        },

        initialName(name, length = 2, uppercase = false, rtl = false) {
            this.setName(name);

            const words = name.replace(/[^A-Za-z0-9.!?\s]/, '').split(' ');

            // If the name contains a single word, use first N characters
            if (words.length === 1) {
                return this.getInitialFromOneWord(words, length, uppercase);
            } else {
                return this.getInitialFromMultipleWords(words, length, uppercase).replace(/[^A-Za-z0-9]/, '');
            }
        },
        setName(name) {
            if (Array.isArray(name)) {
                throw new Error('Passed value cannot be an array');
            } else if (typeof name === 'object' && typeof name.toString !== 'function') {
                throw new Error('Passed object must have a toString method');
            }

            if (typeof name === 'string' && name.includes('@')) {
                name = name.split('@')[0].replace('.', ' ');
            }

            this.name = name;
        },

        getInitialFromOneWord(words, length, uppercase) {
            let initial = words[0];

            if (this.name.length >= length) {
                initial = this.name.substring(0, length);
            }

            return uppercase ? initial.toUpperCase() : initial;
        },

        getInitialFromMultipleWords(words, length, uppercase) {
            // Otherwise, use the initial character from each word
            const initials = words.map((word) => word.substring(0, 1));
            return this.selectInitialFromMultipleInitials(initials, length, uppercase);
        },

        selectInitialFromMultipleInitials(initials, length, uppercase) {
            let initial = initials.slice(0, length).join('');

            if (initial.length < length) {
                const rest = length - initial.length;
                initial += this.name.substr(-rest, rest);
            }
            return uppercase ? initial.toUpperCase() : initial;
        },

        getLocaleName(code) {
            const name = locales.filter(lang => lang.code == code);
            if (name && name.length > 0) return name[0].name;
            return null;
        },
        spelledRupiah(payload) {

            payload = String(payload);
            let number = new Array('0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
            let word = new Array('', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan');
            let level = new Array('', 'Ribu', 'Juta', 'Milyar', 'Triliun');

            let payload_length = payload.length;
            let sentence = "";
            let subSentence = "";
            let word1 = "";
            let word2 = "";
            let word3 = "";
            let i = 0;
            let j = 0;

            if (payload_length > 15) {
                sentence = "N/A";
                return sentence;
            }

            for (i = 1; i <= payload_length; i++) {
                number[i] = payload.substr(-(i), 1);
            }

            i = 1;
            j = 0;
            sentence = "";

            while (i <= payload_length) {
                subSentence = "";
                word1 = "";
                word2 = "";
                word3 = "";

                if (number[i + 2] != "0") {
                    if (number[i + 2] == "1") {
                        word1 = "Seratus";
                    } else {
                        word1 = word[number[i + 2]] + " Ratus";
                    }
                }

                if (number[i + 1] != "0") {
                    if (number[i + 1] == "1") {
                        if (number[i] == "0") {
                            word2 = "Sepuluh";
                        } else if (number[i] == "1") {
                            word2 = "Sebelas";
                        } else {
                            word2 = word[number[i]] + " Belas";
                        }
                    } else {
                        word2 = word[number[i + 1]] + " Puluh";
                    }
                }

                if (number[i] != "0") {
                    if (number[i + 1] != "1") {
                        word3 = word[number[i]];
                    }
                }

                if ((number[i] != "0") || (number[i + 1] != "0") || (number[i + 2] != "0")) {
                    subSentence = word1 + " " + word2 + " " + word3 + " " + level[j] + " ";
                }

                sentence = subSentence + sentence;
                i = i + 3;
                j = j + 1;

            }

            if ((number[5] == "0") && (number[6] == "0")) {
                sentence = sentence.replace("Satu Ribu", "Seribu");
            }

            return (sentence.trim().replace(/\s{2,}/g, ' ')) + " Rupiah";
        },
        formatDate(payload, separator = "-", format = "day-month-year") {
            const dateObject = new Date(payload);
            const day = dateObject.getDate();
            const monthNames = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];
            const month = monthNames[dateObject.getMonth()];
            const year = dateObject.getFullYear();

            let result = [];

            if (format.includes("day")) {
                result.push(day);
            }
            if (format.includes("month")) {
                result.push(month);
            }
            if (format.includes("year")) {
                result.push(year);
            }
            return result.join(separator);
        },
        formatDateWithoutDash(payload) {
            const dateObj = new Date(payload);
            const year = dateObj.getFullYear();
            let month = (dateObj.getMonth() + 1).toString();
            let day = dateObj.getDate().toString();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return `${year}${month}${day}`
        },
        formatCategory(payload) {
            const recordNames = payload.map(record => record.name);

            if (recordNames.length === 1) {
                return recordNames[0];
            } else if (recordNames.length === 2) {
                return recordNames.join(' & ');
            } else if (recordNames.length > 2) {
                const lastTwoRecords = recordNames.slice(-2).join(' & ');
                const remainingCount = recordNames.length - 2;
                return `${recordNames.slice(0, -2).join(', ')}, ${lastTwoRecords} & ${remainingCount} more`;
            }
            return '';
        },
        generateDecimalStep(decimalPlaces = 0) {
            if (typeof decimalPlaces !== 'number' || decimalPlaces < 0) {
                throw new Error('Decimal places must be a non-negative number');
            }

            const step = 1 / Math.pow(10, decimalPlaces);

            return step;
        },
        average(...numbers) {
            if (numbers.length === 0) {
                throw new Error('At least one number is required to calculate the average');
            }

            const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
            const average = sum / numbers.length;

            return average;
        },
        generateCode(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let result = '';

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }

            return result;
        },
        calculateAge(birthday) {
            const birthDate = new Date(birthday);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },
        genereteDatesInRange(startDate, endDate) {
            const dates = [];
            const start = new Date(startDate);
            const end = new Date(endDate);
            while (start <= end) {
                dates.push(new Date(start).toISOString().slice(0, 10));
                start.setDate(start.getDate() + 1);
            }
            return dates;
        },
        calculateDuration(startDate, endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);

            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays + 1;
        },
        calculateDurationHours(startTime, endTime) {
            const [startHours, startMinutes] = startTime.split(':').map(Number);
            const [endHours, endMinutes] = endTime.split(':').map(Number);
            const today = new Date();
            const start = new Date(today.getFullYear(), today.getMonth(), today.getDate(), startHours, startMinutes);
            const end = new Date(today.getFullYear(), today.getMonth(), today.getDate(), endHours, endMinutes);
            let diffMilliseconds = end - start;
            if (diffMilliseconds < 0) {
                diffMilliseconds += 24 * 60 * 60 * 1000;
            }
            const diffHours = diffMilliseconds / (1000 * 60 * 60);
            return diffHours;
        },
        taxNumberFormat(value) {
            if (!value) return null;
            value = value.replace(/[A-Za-z\W\s_]+/g, '');
            let split = 6;
            const dots = [];

            for (let i = 0, len = value.length; i < len; i += split) {
                split = i >= 2 && i <= 6 ? 3 : i >= 8 && i <= 12 ? 4 : 2;
                dots.push(value.substr(i, split));
            }

            const temp = dots.join('.');
            return temp.length > 12 ? `${temp.substr(0, 12)}-${temp.substr(12, 7)}` : temp;
        },
        secondToText(seconds) {
            const { t } = useI18n();
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);

            let formattedTime = '';
            if (hours > 0) {
                formattedTime += `${hours} ${t('Hours')} `;
            }
            if (minutes > 0 || hours === 0) {
                formattedTime += `${minutes} ${t('Minutes')}`;
            }

            return formattedTime.trim();
        },
        slugToCamelCase(slug) {
            return slug.toLowerCase().replace(/-([a-z])/g, function (match, group1) {
                return group1.toUpperCase();
            });
        },
        snakeToCamelCase(slug) {
            return slug.toLowerCase().replace(/_([a-z])/g, function (match, group1) {
                return group1.toUpperCase();
            });
        },
        toSlug(str) {
            if (str == null) return '';
            str = str.replaceAll(' ', '_');

            return str.toLowerCase();
        },

        isValidDateTime(datetime) {
            // Regular expression to match the datetime format
            const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\+\d{2}:\d{2}|\+\d{2})$/;

            if (!regex.test(datetime)) {
                return false;
            }

            const date = new Date(datetime);
            return !isNaN(date.getTime());
        },
        formatIfDateTime(datetime) {
            if (!this.isValidDateTime(datetime)) {
                return datetime;
            }

            const date = datetime.split('T')[0];
            const time = datetime.split('T')[1].split('+')[0];
            const tz = datetime.split('T')[1].split('+')[1];
            const intTz = parseInt(tz.split(':')[0])
            const formattedTz = (intTz) => {
                switch (intTz) {
                    case 7:
                        return '(WIB)';
                    case 8:
                        return '(WITA)';
                    case 9:
                        return '(WIT)';
                    default:
                        return `(GMT +${intTz})`;
                }
            };

            return `${date} ${time} ${formattedTz(intTz)}`;
        },
        formatDateYMD(datetime) {
            const date = new Date(datetime);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        arrayToFormattedString(array, separator = ',', lastSeparator = '&') {
            if (array.length === 0) {
                return null;
            }
            if (array.length === 1) {
                return array[0];
            }

            const lastElement = array.pop();
            let text = array.join(separator + ' ');
            text += ' ' + lastSeparator + ' ' + lastElement;

            return text;
        },
        convertMeters(meters) {
            if (meters >= 1000) {
                return (meters / 1000).toFixed(2) + " Km";
            } else {
                return meters + " Meter";
            }
        },
        nl2br(value) {
            return value?.replace(/\n/g, '<br>')
        },
        dash2br(value) {
            return value?.replace(/-/g, '<br>')
        },
        formatRelativeTime(dateString, lang = 'en') {
            const date = new Date(dateString);
            const now = new Date();

            const diffInSeconds = Math.round((now - date) / 1000);
            const diffInMinutes = Math.round(diffInSeconds / 60);
            const diffInHours = Math.round(diffInMinutes / 60);
            const diffInDays = Math.round(diffInHours / 24);
            const diffInWeeks = Math.round(diffInDays / 7);

            const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });

            if (diffInSeconds < 60) {
                return rtf.format(-diffInSeconds, 'second');
            } else if (diffInMinutes < 60) {
                return rtf.format(-diffInMinutes, 'minute');
            } else if (diffInHours < 24) {
                return rtf.format(-diffInHours, 'hour');
            } else if (diffInDays < 7) {
                return rtf.format(-diffInDays, 'day');
            } else {
                return rtf.format(-diffInWeeks, 'week');
            }
        }
    }
});

// make sure to pass the right store definition, `useHelperStore` in this case.
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useHelperStore, import.meta.hot))
}
