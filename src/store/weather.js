import { defineStore } from 'pinia';
import axios from 'axios';
const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

export const useWeatherStore = defineStore('weather', {
    state: () => ({
        weatherData: null,
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
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

                const response = await axios.get(apiUrl);
                this.weatherData = response.data;
            } catch (error) {
                console.error('Error al obtener los datos del clima:', error);
            }
        },
    },
});