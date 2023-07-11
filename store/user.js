import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            id: null,
            full_name: 'Tài khoản',
            avt: '/img/avatar/default.jpg',
            isLoggin: false
        }
    },
    getters: {
        getFullname(state){
            return state.full_name
        },
        getLoginStatus(state){
            return state.isLoggin
        }
    },
    actions: {
        addUser(id, full_name, avt) {
            this.id = id;
            this.full_name = full_name;
            this.avt = avt;
            this.isLoggin = true;
        },
        removeUser() {
            this.id = null,
            this.full_name = 'Tài khoản',
            this.avt = '/img/avatar/default.jpg',
            this.isLoggin = false
        }
    }
})