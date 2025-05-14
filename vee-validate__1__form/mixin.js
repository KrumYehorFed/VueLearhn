// Определяем миксин
const mixin = {
    data() {
        return {
            count: 0
        };
    },
    methods: {
        submit(values) {
            alert(JSON.stringify(values, null, 2));
          },
          isRequired(value) {
            if (!value || !value.trim()) {
              return 'Поле обязательно';
            }
            return true;
          },
          hasDash(value) {
            if (!value.includes('-')) {
              return 'Строка должна содержать "-"';
            }
            return true;
          },
          max20(value) {
            if (value.length > 5) {
              return 'Не более 20 символов';
            }
            return true;
          },
    },
    mounted() {
        console.log('MIXED!'); // works first 
    }
};