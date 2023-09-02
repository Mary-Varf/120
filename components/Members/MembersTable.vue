<template>
    <div class="md:mt-24 mt-44 h-[calc(100%-6rem)] md:p-0 p-4 col-span-3 bg-gray-800 w-full">
        <MemberCreate class="-mt-2"></MemberCreate>

        <AppLoading v-if="isMembersLoading"></AppLoading>

        <template v-else>
            <div class="md:grid hidden grid-cols-4 gap-1 font-bold mb-2 p-2">
                <div>Name</div>
                <div>Surname</div>
                <div>Department</div>
                <div>Update/Delete</div>
            </div>

            <TransitionGroup name="members">
            <template v-for="member in filteredMembers(department)"
                      :key="member._id"
            >
                <div v-if="isEditMode(member._id)">
                    <MemberForm :member="member"
                                :id="member._id"
                    ></MemberForm>
                </div>

                <div v-else>
                    <MemberItem :memberId="member._id"
                                :initialName="member.name"
                                :initialSurname="member.surname"
                                :initialDepartment="member.department"
                    ></MemberItem>
                </div>
            </template>
        </TransitionGroup>
        </template>
    </div>
</template>

<script setup>
import MemberItem from "~/components/Members/MemberItem.vue";
import MemberForm from "~/components/Members/MemberForm.vue";
import MemberCreate from "~/components/Members/MemberCreate.vue";
import AppLoading from "~/components/UI/AppLoading.vue";
import { storeToRefs } from 'pinia';
import { useStore } from "~/store/stores";

const membersStore = useStore();
const { department } = useRoute().params;

membersStore.getMembers();

const { editedItemId, filteredMembers, isMembersLoading } = storeToRefs(membersStore);

const isEditMode = (id) => {
    return editedItemId.value === id;
}

</script>

<style scoped>
.members-enter-active,
.members-leave-active {
    transition: all 0.5s ease;
}
.members-enter-from,
.members-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>