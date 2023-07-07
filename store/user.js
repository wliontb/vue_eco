import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            id: null,
            full_name: 'Tài khoản',
            avt: '/img/avatar/default.jpg'
        }
    },
    getters: {
        getFullname(state){
            return state.full_name
        }
    },
    actions: {
        addUser(id, full_name, avt) {
            this.id = id;
            this.full_name = full_name;
            this.avt = avt;
        }
    }
})