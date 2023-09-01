<template>
    <table class="w-4/5 table mt-32 ml-4">
            <tr>
                <th class="pr-4 py-2 text-left w-1/4">Name</th>
                <th class="pr-4 py-2 text-left w-1/4">Surname</th>
                <th class="pr-4 py-2 text-left w-1/4">Department</th>
                <th class="pr-4 py-2 text-left w-1/8">Update</th>
                <th class="pr-4 py-2 text-left w-1/8">Delete</th>
            </tr>

            <TransitionGroup name="tableRows">
                <template v-for="member in filteredMembers(department)"
                          :key="member._id"
                >
                        <MemberForm :member="member"
                                    :id="member._id"
                                    v-if="isEditMode(member._id)"
                        ></MemberForm>

                        <MemberItem :memberId="member._id"
                                    :initialName="member.name"
                                    :initialSurname="member.surname"
                                    :initialDepartment="member.department"
                                    v-else
                        ></MemberItem>
                </template>
            </TransitionGroup>
        </table>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStore } from "~/store/stores";

const membersStore = useStore();
const { department } = useRoute().params;

membersStore.getMembers();

const { editedItemId, filteredMembers } = storeToRefs(membersStore);

const isEditMode = (id) => {
    return editedItemId.value === id;
}

</script>

<style scoped>
.tableRows-enter-active,
.tableRows-leave-active {
    transition: all 0.5s ease;
}
.tableRows-enter-from,
.tableRows-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>