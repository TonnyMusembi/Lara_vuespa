import axios from "axios";
import { defineStore } from "pinia";
export const useUserStore = defineStore('user', {
    state: () => ({
        panding: false,
        error: "",
        user: null
    })




})