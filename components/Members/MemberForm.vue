<template>
    <div class="-z-1 form grid md:grid-cols-4 gap-1 relative w-full pr-10 z-[40] px-0 md:px-0 md:border-b-0 md:border-transparent border-b-2 border-blue-500 pb-2 md:pb-0">
        <input placeholder="Name"
               ref="input"
               type="text"
               class="form-item md:px-4 px-2 md:py-2 py-1 mr-2 rounded text-black items-start max-w-[250px] lg:max-w-[350px] xl:max-w-auto"
               :value="name"
               @input="updateNameInput"
        />

        <input type="text"
               placeholder="Surname"
               :value="surname"
               @input="updateSurnameInput"
               class="form-item md:px-4 px-2 md:py-2 py-1 mr-2 rounded text-black items-start max-w-[250px] lg:max-w-[350px] xl:max-w-auto"
        />

        <select v-model="selectedDepartment"
                class="form-item block capitalize appearance-none mr-2 md:mr-0 md:w-[90%] bg-white border border-gray-500 text-gray-700 md:py-3 py-1.5 md:px-0 md:pr-8  md:pl-2 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 max-w-[250px] lg:max-w-[350px] xl:max-w-auto" id="grid-state">
            <option disabled
                    v-if="id == null"
                    :value="null"
                    :selected="selectedDepartment == null || selectedDepartment == ''"
            >Please select department</option>

            <option class="capitalize form-item"
                    v-for="el in departments"
                    :key="el._id"
                    :value="el.name"
                    :selected="selectedDepartment == el.name"
            >
                {{ el?.name }}
            </option>
        </select>

        <div class="self-center md:relative absolute top-0 -right-1.5">
            <AppButton @click="handleSave"
                       class="ml-2 disabled:bg-gray-100"
                       :disabled="!name?.length || !surname?.length || !selectedDepartment?.length"
            ><SaveIcon></SaveIcon>
            </AppButton>
        </div>
    </div>
</template>

<script setup>
import mongoose from "mongoose";
import {storeToRefs} from "pinia";
import SaveIcon from "~/components/icons/SaveIcon.vue";
import AppButton from "~/components/UI/AppButton.vue";
import {useStore} from "~/store/stores";

const props = defineProps({
    member: {
        type: Object,
        required: false,
    },
    id: {
        type: String,
        required: false,
    }
})

const membersStore = useStore();
const { departments } = storeToRefs(membersStore);
const name = ref(null);
const surname = ref(null);
const selectedDepartment = ref(null);
const input = ref(null);

const focusInput = () => {
    nextTick(() => {
        input?.value?.focus();
    });
}

const updateNameInput = (event) => {
    name.value = event.target.value
}

const updateSurnameInput = (event) => {
    surname.value = event.target.value
}

const clearEditedItemId = () => {
    membersStore.setEditedItemId(null);
}

const handleSave = () => {
    clearEditedItemId();

    isNewMember() ? createMember() : updateMember();

    clearInputs();
}

const isNewMember = () => {
    return !props.id;
}

const updateMember = () => {
    membersStore.updateMember(props.id, {
        ...props.member,
        name: name.value,
        surname: surname.value,
        department: selectedDepartment.value,
    });
}

const createMember = () => {
    membersStore.createMember({
        _id: new mongoose.Types.ObjectId().toString(),
        name: name.value,
        surname: surname.value,
        department: selectedDepartment.value,
    });
}

const clearInputs = () => {
    name.value = null;
    surname.value = null;
    selectedDepartment.value = null;

}

onMounted(() => {
    name.value = props.member?.name ?? '';
    surname.value = props.member?.surname ?? '';
    selectedDepartment.value = props.member?.department ?? null;
})

focusInput();
</script>

<style>
</style>