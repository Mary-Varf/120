import { defineStore } from 'pinia';

export const useStore = defineStore({
    id: 'members-store',
    state: () => {
        return {
            members: [],
            editedItemId: null,
            departments: [],
            isMobile: false,
            user: null,
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
        setUser(user) {
            this.user = user;
        },
        setEditedItemId(id) {
            this.editedItemId = id;
        },
        async getDepartments() {
            await $fetch('/api/departments/departments')
                .then((resp) => {
                    this.departments = resp?.length ? resp : [];
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        async createDepartment (newDepartment) {
            await $fetch('/api/departments/create', {
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
            await $fetch('/api/members/members')
                .then((resp) => {
                    this.members = resp?.length ? resp : [];
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        async createMember (newMember) {
            await $fetch('/api/members/create', {
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
            await $fetch(`/api/members/${id}`, {
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
            console.log(updatedMember),
                await $fetch(`/api/members/${id}`, {
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
