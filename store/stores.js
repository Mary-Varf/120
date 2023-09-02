import { defineStore } from 'pinia';

const membersApi = '/api/members';
const departmentsApi = '/api/departments';

export const useStore = defineStore({
    id: 'members-store',
    state: () => {
        return {
            members: [],
            editedItemId: null,
            departments: [],
            isMobile: false,
            isLoggedIn: false,
            popupMsg: null,
        }
    },
    getters: {
        filteredMembers (state) {
            return (department) => {
                return department === undefined ? state.members : state.members.filter(r => r.department === department);
            };
        },
    },
    actions: {
        setStateIsLoggedIn(state) {
            this.isLoggedIn = state;
        },
        setEditedItemId(id) {
            this.editedItemId = id;
        },
        setIsMobileDevice(width) {
            this.isMobile = width <= 768;
        },
        setPopupMsg() {
            this.popupMsg = 'sfsdd';
        },
        async getDepartments() {
            await $fetch(`${departmentsApi}/departments`)
                .then((resp) => {
                    this.departments = resp?.length ? resp : [];
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        async createDepartment (newDepartment) {
            await $fetch(`${departmentsApi}/create`, {
                method: 'POST',
                body: newDepartment,
            })
                .then((resp) => {
                    this.departments.push(newDepartment);
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        async getMembers() {
            await $fetch(`${membersApi}/members`)
                .then((resp) => {
                    this.members = resp?.length ? resp : [];
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        async createMember (newMember) {
            await $fetch(`${membersApi}/create`, {
                method: 'POST',
                body: newMember,
            })
                .then((resp) => {
                    this.members.push(newMember);
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        async deleteMember(id) {
            await $fetch(`${membersApi}/${id}`, {
                method: 'DELETE'
            })
                .then((resp) => {
                    this.members = [...this.members].filter(el => el._id !== id);
                })
                .catch((error)=> {
                    console.log(error)
                }) ;
        },
        async updateMember(id, updatedMember) {
            await $fetch(`${membersApi}/${id}`, {
                method: 'PUT',
                body: updatedMember,
            })
                .then((resp) => {
                    this.members = [...this.members].map(el => {
                        if(el._id === id) return updatedMember
                        else return el;
                    });
                })
                .catch((error)=> {
                    console.log(error)
                });
        }
    }
})
