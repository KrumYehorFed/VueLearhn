    const { createApp } = Vue;

    createApp({
      data() {
        return {
          value: '',  // Это реактивное состояние для выбранного времени
          selected_time: "",  // Используем правильное имя переменной
          
        };
      },
      methods: {
        setTime() {
          this.selected_time = this.value; // Логируем выбранное время
        }
      },
      watch: {
        value(newVal) {
          console.log('New Time Value:', newVal); // Логируем изменения времени
        }
      }
    })
    .use(ElementPlus)
    .mount('#app');