import { RouterLink } from 'vue-router';
<template>
    <v-card elevation="16" width="700">
        <v-card-title class="mb-3">
            <span class="font-weight-bold text-h6">¿Qué desea hacer?</span>
        </v-card-title>
        <v-card-text class="mb-2">
            <v-row>
                <v-col>
                    <RouterLink :to="{ name: 'libros', params: null }" type="button">
                        <v-btn>Libros</v-btn>
                    </RouterLink>
                </v-col>
                <v-col>
                    <RouterLink :to="{ name: 'autores', params: null }" type="button">
                        <v-btn>Autores</v-btn>
                    </RouterLink>
                </v-col>
                <v-col>
                    <RouterLink :to="{ name: 'prestamos', params: null }" type="button">
                        <v-btn density="default">Préstamos</v-btn>
                    </RouterLink>
                </v-col>
                <v-col>
                    <RouterLink :to="{ name: 'usuarios', params: null }" type="button">
                        <v-btn density="default">Usuarios</v-btn>
                    </RouterLink>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>