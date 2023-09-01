<template>
    <tr>
        <td class="py-2 text-left w-1/4">
            <input placeholder="Name"
                   ref="input"
                   type="surname"
                   class="px-4 py-2 rounded text-black items-start"
                   :value="name"
                   @input="updateNameInput"
            />
        </td>

        <td class="py-2 text-left w-1/4">
            <input type="text"
                   placeholder="Surname"
                   :value="surname"
                   @input="updateSurnameInput"
                   class="px-4 py-2 rounded text-black"
            />
        </td>

        <td class="w-1/4">
            <select v-model="selectedDepartment"
                    class="block capitalize appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
            >
                <option disabled
                        v-if="id == null"
                        :value="null"
                >Please select department</option>

                <option class="capitalize"
                        v-for="item in departments"
                        :key="item._id"
                        :value="item.department"
                        :selected="selectedDepartment == item.department"
                >
                    {{item.department}}
                </option>
            </select>
        </td>

        <td class="w-1/4 h-full flex align-middle"><AppButton @click="handleSave"
                       :disabled="!name?.length || !surname?.length || !selectedDepartment?.length"
        ><SaveIcon></SaveIcon></AppButton></td>
    </tr>
</template>

<script setup>
import SaveIcon from "~/components/icons/SaveIcon.vue";
import AppButton from "~/components/AppButton.vue";
import {useStore} from "~/store/stores";
import {storeToRefs} from "pinia";
import mongoose from "mongoose";

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

const name = ref(null);
const surname = ref(null);
const selectedDepartment = ref(null);
const input = ref(null);
const membersStore = useStore();
const { departments } = storeToRefs(membersStore);

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
    selectedDepartment.value = props.member?.department ?? '';
})

focusInput();
</script>

<style>
    input, surnamearea {
        outline-color: transparent;
    }
</style>