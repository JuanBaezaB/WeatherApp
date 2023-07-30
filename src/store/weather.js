import { defineStore } from 'pinia';
import { ref } from 'vue';
import moment from 'moment';
import axios from 'axios';
const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const lat = import.meta.env.VITE_LATITUDE;
const lon = import.meta.env.VITE_LONGITUDE;


export const useWeatherStore = defineStore('weather', {
    state: () => ({
        weatherData: ref(null),
        weeklyWeatherData: ref(null),
        city: ref(null),
        units: ref('metric'),
    }),
    actions: {
        async fetchWeatherData(city) {
            // Realiza la solicitud a la API utilizando axios u otra librería
            // y actualiza el estado con los datos recibidos
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
                this.weatherData = response.data;
            } catch (error) {
                console.error('Error al obtener los datos del clima:', error);
            }
        },
        async fetchWeatherDataByLocation() {
            try {
                // Obtener las coordenadas geográficas del usuario
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                // Obtener los datos del clima utilizando las coordenadas geográficas
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=7&appid=${API_KEY}`;

                const response = await axios.get(apiUrl);
                this.weatherData = response.data.list;
            } catch (error) {
                console.error('Error al obtener los datos del clima:', error);
            }
        },

        async fetchWeeklyWeatherData(city) {
            try {
                const apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=8&appid=${API_KEY}&units=${this.units}`;
                const response = await axios.get(apiUrl);
                this.weeklyWeatherData = response.data.list;

                this.weeklyWeatherData.shift()
                this.weeklyWeatherData = this.weeklyWeatherData.map(function (item) {
                    let date = moment(item.dt * 1000);

                    // Guardamos la fecha formateada en un nuevo campo 'formattedDate'
                    item.formattedDate = date.format('ddd');

                    // Si quieres guardar también la fecha como objeto 'Date', puedes hacer lo siguiente:
                    item.dt = date.toDate();

                    return item;
                });
                console.log(this.weeklyWeatherData);
            } catch (error) {
                console.error('Error al obtener los datos del pronóstico extendido:', error);
            }
        },

        ToggleUnits() {
            if (this.units.value === 'metric') {
                this.units.value = 'imperial';
            } else {
                this.units.value = 'metric';
            }
        }
    },
    getters: {

    }
});