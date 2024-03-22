<template>
    <v-card class="mx-auto my-8" elevation="16" max-width="344">
        <v-card-item>
            <v-card-title>
                ¿Qué desea hacer?
            </v-card-title>
        </v-card-item>
        <v-card-actions>
            <v-row align="center" justify="center">
                <v-col cols="auto">
                    <router-link :to="{ name: 'biller', params: null }" type="button">
                        <v-btn>Libros</v-btn>
                    </router-link>
                </v-col>

                <v-col cols="auto">
                    <v-btn>Autores</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="auto">
                    <v-btn density="default">Préstamos</v-btn>
                </v-col>
                <v-col cols="auto">
                    <v-btn density="default">Usuarios</v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>