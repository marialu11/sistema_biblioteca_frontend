<template>
    <v-card>
        <Table :headers="headersAutor" :items="autores"></Table>
    </v-card>
</template>

<script setup>
import Table from '../../components/table.vue';
import { onMounted } from 'vue';
import { autores, getAutores } from '../../composables/tableData';
import { headersAutor } from '../../composables/useHeaders';

onMounted(async () => {
    try {
        await getAutores();
    } catch (error) {
        console.log(error);
    }
});

</script>
