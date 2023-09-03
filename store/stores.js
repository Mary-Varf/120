import { defineStore } from 'pinia';
import { API, MESSAGES }  from './consts';

export const useStore = defineStore({
    id: 'members-store',
    state: () => {
        return {
            members: [],
            editedItemId: null,
            departments: [],
            isLoggedIn: false,
            popupMsg: null,
            isDepartmentsLoading: false,
            isMembersLoading: false,
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
        setPopupMsg(msg) {
            this.popupMsg = msg;
        },
        setStateIsMembersLoading(state) {
            this.isMembersLoading = state;
        },
        setIsDepartmentsLoading(state) {
            this.isDepartmentsLoading = state;
         },
        async getDepartments() {
            this.setIsDepartmentsLoading(true);

            await $fetch(`${API.DEPARTMENTS}/all`)
                .then((resp) => {
                    this.departments = resp?.length ? resp : [];
                })
                .catch((error) => {
                    console.log(error)
                })

            this.setIsDepartmentsLoading(false);
        },

        async createDepartment (newDepartment) {
            await $fetch(`${API.DEPARTMENTS}/create`, {
                method: 'POST',
                body: newDepartment,
            })
                .then((resp) => {
                    this.departments.push(newDepartment);
                    this.setPopupMsg(MESSAGES.CREATE);
                })
                .catch((error) => {
                    console.log(error)
                    this.setPopupMsg(MESSAGES.ERROR);
                })
        },
        async getMembers() {
            this.setStateIsMembersLoading(true);

            await $fetch(`${API.MEMBERS}/all`)
                .then((resp) => {
                    this.members = resp?.length ? resp : [];
                })
                .catch((error) => {
                    console.log(error)
                })

            this.setStateIsMembersLoading(false);
        },
        async createMember (newMember) {
            await $fetch(`${API.MEMBERS}/create`, {
                method: 'POST',
                body: newMember,
            })
                .then((resp) => {
                    this.members.push(newMember);
                    this.setPopupMsg(MESSAGES.CREATE);
                })
                .catch((error) => {
                    console.log(error)
                    this.setPopupMsg(MESSAGES.ERROR);
                })
        },
        async deleteMember(id) {
            await $fetch(`${API.MEMBERS}/${id}`, {
                method: 'DELETE'
            })
                .then((resp) => {
                    this.members = [...this.members].filter(el => el._id !== id);
                    this.setPopupMsg(MESSAGES.DELETE);
                })
                .catch((error)=> {
                    console.log(error)
                    this.setPopupMsg(MESSAGES.ERROR);
                }) ;
        },
        async updateMember(id, updatedMember) {
            await $fetch(`${API.MEMBERS}/${id}`, {
                method: 'PUT',
                body: updatedMember,
            })
                .then((resp) => {
                    this.members = [...this.members].map(el => {
                        if(el._id === id) return updatedMember
                        else return el;
                    });
                    this.setPopupMsg(MESSAGES.UPDATE);
                })
                .catch((error)=> {
                    console.log(error)
                    this.setPopupMsg(MESSAGES.ERROR);
                });
        }
    }
})
