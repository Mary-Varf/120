<template>
    <div class=" md:p-0 p-4 col-span-3 bg-gray-100 w-full"
         :class="{'md:mt-24 mt-[140px] h-[calc(100%-6rem)]': isLoggedIn}"
    >
        <MemberCreate v-show="isLoggedIn" class="-mt-2"></MemberCreate>

        <AppSpinner v-if="isMembersLoading"></AppSpinner>

        <template v-else>
            <div class="md:grid hidden gap-1 font-bold mb-2 p-2 border-b-2 border-b-blue-800"
                 :class="isLoggedIn ? 'grid-cols-4' : 'grid-cols-3'"
            >
                <div>Name</div>
                <div>Surname</div>
                <div>Department</div>
                <div v-show="isLoggedIn">Update/Delete</div>
            </div>

            <TransitionGroup name="members">
                <template v-for="member in filteredMembers(department)"
                          :key="member._id"
                >
                    <div v-if="isEditMode(member._id)"
                         class="md:mt-0 mt-2"
                    >
                        <MemberForm :member="member"
                                    :id="member._id"
                                    v-show="isLoggedIn"
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
import { storeToRefs } from 'pinia';
import MemberItem from "~/components/Members/MemberItem.vue";
import MemberForm from "~/components/Members/MemberForm.vue";
import MemberCreate from "~/components/Members/MemberCreate.vue";
import AppSpinner from "~/components/UI/AppSpinner.vue";
import { useStore } from "~/store/stores";

const membersStore = useStore();
const { department } = useRoute().params;

membersStore.getMembers();

const { editedItemId, filteredMembers, isMembersLoading, isLoggedIn } = storeToRefs(membersStore);

const isEditMode = (id) => {
    return editedItemId.value === id;
}
</script>

<style scoped>
</style>