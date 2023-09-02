import { defineStore } from 'pinia';

const membersApi = '/api/members';
const departmentsApi = '/api/departments';

const messages = {
    create: 'Created',
    update: 'Updated',
    delete: 'Deleted',
    error: 'Something went wrong'
}

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

            await $fetch(`${departmentsApi}/departments`)
                .then((resp) => {
                    this.departments = resp?.length ? resp : [];
                })
                .catch((error) => {
                    console.log(error)
                })

            this.setIsDepartmentsLoading(false);
        },

        async createDepartment (newDepartment) {
            await $fetch(`${departmentsApi}/create`, {
                method: 'POST',
                body: newDepartment,
            })
                .then((resp) => {
                    this.departments.push(newDepartment);
                    this.setPopupMsg(messages.create);
                })
                .catch((error) => {
                    console.log(error)
                    this.setPopupMsg(messages.error);
                })
        },
        async getMembers() {
            this.setStateIsMembersLoading(true);

            await $fetch(`${membersApi}/members`)
                .then((resp) => {
                    this.members = resp?.length ? resp : [];
                })
                .catch((error) => {
                    console.log(error)
                })

            this.setStateIsMembersLoading(false);
        },
        async createMember (newMember) {
            await $fetch(`${membersApi}/create`, {
                method: 'POST',
                body: newMember,
            })
                .then((resp) => {
                    this.members.push(newMember);
                    this.setPopupMsg(messages.create);
                })
                .catch((error) => {
                    console.log(error)
                    this.setPopupMsg(messages.error);
                })
        },
        async deleteMember(id) {
            await $fetch(`${membersApi}/${id}`, {
                method: 'DELETE'
            })
                .then((resp) => {
                    this.members = [...this.members].filter(el => el._id !== id);
                    this.setPopupMsg(messages.delete);
                })
                .catch((error)=> {
                    console.log(error)
                    this.setPopupMsg(messages.error);
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
                    this.setPopupMsg(messages.update);
                })
                .catch((error)=> {
                    console.log(error)
                    this.setPopupMsg(messages.error);
                });
        }
    }
})
